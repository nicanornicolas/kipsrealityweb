import { Queue, type DefaultJobOptions } from 'bullmq';
import IORedis from 'ioredis';

const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';

// Shared Redis connection for BullMQ queues
export const connection = new IORedis(redisUrl, {
  maxRetriesPerRequest: null,
});

export const defaultJobOptions: DefaultJobOptions = {
  attempts: 3,
  backoff: { type: 'exponential', delay: 2000 },
  removeOnComplete: true,
  removeOnFail: false,
};

// The Webhook Queue
export const webhookQueue = new Queue('stripe-webhooks', {
  connection,
  defaultJobOptions,
});

// Future: The Bulk Invoice Queue
export const invoiceQueue = new Queue('bulk-invoices', {
  connection,
  defaultJobOptions,
});

// Email Notifications Queue
export const emailQueue = new Queue('email-notifications', {
  connection,
  defaultJobOptions,
});
