import { PrismaClient } from '@prisma/client';
import type { Job } from 'bullmq';
import Stripe from 'stripe';
import { SubscriptionService } from '@rentflow/payments';

interface StripeWebhookJobData {
  eventType: string;
  payload: Record<string, unknown>;
  webhookEventId: string;
  receivedAt: string;
}

const prisma = new PrismaClient();
const subscriptionService = new SubscriptionService();

export async function processStripeWebhookJob(
  job: Job<StripeWebhookJobData>
): Promise<void> {
  const { webhookEventId, payload, eventType } = job.data;

  console.log(
    `[Stripe Worker] Starting job ${job.id} (attempt ${job.attemptsMade + 1}) for ${eventType}`
  );

  await prisma.webhookEvent.update({
    where: { id: webhookEventId },
    data: { status: 'PROCESSING' },
  });

  try {
    const event = payload as Stripe.Event;
    await subscriptionService.processEvent(event);

    await prisma.webhookEvent.update({
      where: { id: webhookEventId },
      data: { status: 'PROCESSED' },
    });
    console.log(`[Stripe Worker] Completed job ${job.id} for ${eventType}`);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error(
      `[Stripe Worker] Failed job ${job.id} for ${eventType}: ${message}`,
      error
    );
    await prisma.webhookEvent.update({
      where: { id: webhookEventId },
      data: {
        status: 'FAILED',
        processingError: message,
      },
    });

    throw error;
  }
}
