import { Queue } from 'bullmq';
import { getRedisConnection } from './connection';
import type { StripeWebhookJobData } from './types';

export const stripeWebhookQueue = new Queue<StripeWebhookJobData>('stripe-webhooks', {
  connection: getRedisConnection(),
  defaultJobOptions: {
    attempts: 5,
    backoff: {
      type: 'exponential',
      delay: 2000,
    },
    removeOnComplete: true,
  },
});
