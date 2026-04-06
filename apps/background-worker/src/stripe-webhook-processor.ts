import { PrismaClient } from '@prisma/client';
import type { Job } from 'bullmq';
import Stripe from 'stripe';
import { SubscriptionService } from '@rentflow/payments';

interface StripeWebhookJobData {
  webhookEventId: string;
  stripeEventId?: string;
}

const prisma = new PrismaClient();
const subscriptionService = new SubscriptionService();

export async function processStripeWebhookJob(
  job: Job<StripeWebhookJobData>
): Promise<void> {
  const { webhookEventId, stripeEventId } = job.data;
  const eventType = job.name;

  console.log(
    `[Stripe Worker] Starting job ${job.id} (attempt ${job.attemptsMade + 1}) for ${eventType}`
  );

  await prisma.webhookEvent.update({
    where: { id: webhookEventId },
    data: { status: 'PROCESSING', retryCount: { increment: 1 } },
  });

  try {
    const webhookEvent = await prisma.webhookEvent.findUnique({
      where: { id: webhookEventId },
    });

    if (!webhookEvent) {
      throw new Error(`Webhook event ${webhookEventId} not found`);
    }

    const event = webhookEvent.payload as unknown as Stripe.Event;
    if (eventType && event.type !== eventType) {
      console.warn(
        `[Stripe Worker] Event type mismatch for ${webhookEventId}: job=${eventType}, payload=${event.type}`
      );
    }

    await subscriptionService.processEvent(event);

    await prisma.webhookEvent.update({
      where: { id: webhookEventId },
      data: { status: 'PROCESSED' },
    });
    console.log(
      `[Stripe Worker] Completed job ${job.id} for ${eventType} (${stripeEventId ?? 'no-stripe-id'})`
    );
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
