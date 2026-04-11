import express from 'express';
import { Worker } from 'bullmq';
import IORedis from 'ioredis';
import { processStripeWebhookJob } from '@rentflow/payments';
import { generateFinalSignedPdf } from '@rentflow/dss';
import {
  EmailNotificationService,
  outboundWebhookService,
} from '@rentflow/utilities';
import { financeActions } from '@rentflow/finance';
import { prisma } from '@rentflow/iam';

const app = express();

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';
const redisConnection = new IORedis(redisUrl, { maxRetriesPerRequest: null });

const worker = new Worker('stripe-webhooks', processStripeWebhookJob, {
  connection: redisConnection,
});

worker.on('completed', (job) => {
  console.log(`[Stripe Worker] Job ${job.id} completed`);
});

worker.on('failed', (job, err) => {
  console.error(
    `[Stripe Worker] Job ${job?.id ?? 'unknown'} failed on attempt ${job?.attemptsMade ?? 0}`,
    err,
  );
});

worker.on('stalled', (jobId) => {
  console.warn(`[Stripe Worker] Job ${jobId} stalled and will be retried`);
});

worker.on('error', (err) => {
  console.error('[Stripe Worker] Worker error', err);
});

const pdfWorker = new Worker(
  'dss-pdf-generation',
  async (job) => {
    const { documentId, orgId } = job.data;

    const pdfResult = await generateFinalSignedPdf(documentId, orgId);

    const organization = await prisma.organization.findUnique({
      where: { id: orgId },
      include: { plan: true },
    });

    if (organization?.plan?.signingFee && organization.plan.signingFee > 0) {
      const document = await prisma.dssDocument.findUnique({
        where: { id: documentId },
        select: { title: true },
      });

      console.log(
        `[DSS PDF Worker] Generating invoice for signing fee: $${organization.plan.signingFee}`,
      );

      await financeActions.billOrganizationForService({
        organizationId: orgId,
        amount: organization.plan.signingFee,
        description: `Document signing fee: ${document?.title || documentId}`,
        referenceType: 'DSS_SIGNING',
        referenceId: documentId,
        serviceType: 'DSS_SIGNING',
      });

      console.log(`[DSS PDF Worker] Invoice posted to GL successfully`);
    }

    console.log(`[DSS PDF Worker] Dispatching webhooks for document.completed`);
    await outboundWebhookService.dispatchDocumentCompleted(documentId, orgId);
    console.log(`[DSS PDF Worker] Webhooks dispatched`);

    return pdfResult;
  },
  {
    connection: redisConnection,
  },
);

pdfWorker.on('completed', (job) => {
  console.log(`[DSS PDF Worker] Job ${job.id} completed`);
});

pdfWorker.on('failed', (job, err) => {
  console.error(
    `[DSS PDF Worker] Job ${job?.id ?? 'unknown'} failed on attempt ${job?.attemptsMade ?? 0}`,
    err,
  );
});

pdfWorker.on('stalled', (jobId) => {
  console.warn(`[DSS PDF Worker] Job ${jobId} stalled and will be retried`);
});

pdfWorker.on('error', (err) => {
  console.error('[DSS PDF Worker] Worker error', err);
});

const emailWorker = new Worker(
  'email-notifications',
  async (job) => {
    if (job.name === 'send-signature-invite') {
      const { email, documentTitle, documentId, role } = job.data;
      console.log(`[Email Worker] Sending signature invite to ${email}...`);
      await EmailNotificationService.sendSignatureInvitation({
        email,
        documentTitle,
        documentId,
        role,
      });
      console.log(`[Email Worker] Invite sent successfully to ${email}`);
    }
  },
  { connection: redisConnection },
);

emailWorker.on('completed', (job) => {
  console.log(`[Email Worker] Job ${job.id} completed`);
});

emailWorker.on('failed', (job, err) => {
  console.error(
    `[Email Worker] Job ${job?.id ?? 'unknown'} failed:`,
    err.message,
  );
});

emailWorker.on('error', (err) => {
  console.error('[Email Worker] Worker error', err);
});

const webhookWorker = new Worker(
  'webhooks',
  async (job) => {
    if (job.name === 'fire-webhook') {
      const { targetUrl, eventType, payload, secret } = job.data;
      console.log(
        `[Webhook Worker] Firing ${eventType} webhook to ${targetUrl}...`,
      );
      const { OutboundWebhookService } = await import('@rentflow/utilities');
      await new OutboundWebhookService().fireEvent(
        targetUrl,
        eventType,
        payload,
        secret,
      );
      console.log(`[Webhook Worker] Webhook fired successfully`);
    }
  },
  { connection: redisConnection },
);

webhookWorker.on('completed', (job) => {
  console.log(`[Webhook Worker] Job ${job.id} completed`);
});

webhookWorker.on('failed', (job, err) => {
  console.error(
    `[Webhook Worker] Job ${job?.id ?? 'unknown'} failed:`,
    err.message,
  );
});

webhookWorker.on('error', (err) => {
  console.error('[Webhook Worker] Worker error', err);
});

const port = Number(process.env.PORT) || 3001;
const server = app.listen(port, () => {
  console.log(`[Background Worker] Listening on port ${port}`);
});

async function shutdown(signal: string) {
  console.log(`[Background Worker] Received ${signal}, shutting down...`);
  await worker.close();
  await pdfWorker.close();
  await emailWorker.close();
  await webhookWorker.close();
  await redisConnection.quit();
  server.close(() => {
    process.exit(0);
  });
}

process.on('SIGTERM', () => {
  void shutdown('SIGTERM');
});

process.on('SIGINT', () => {
  void shutdown('SIGINT');
});
