import express from 'express';
import { Worker } from 'bullmq';
import IORedis from 'ioredis';
import { processStripeWebhookJob } from '@rentflow/payments';
import { generateFinalSignedPdf } from '@rentflow/dss';

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
    return await generateFinalSignedPdf(documentId, orgId);
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

const port = Number(process.env.PORT) || 3001;
const server = app.listen(port, () => {
  console.log(`[Background Worker] Listening on port ${port}`);
});

async function shutdown(signal: string) {
  console.log(`[Background Worker] Received ${signal}, shutting down...`);
  await worker.close();
  await pdfWorker.close();
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
