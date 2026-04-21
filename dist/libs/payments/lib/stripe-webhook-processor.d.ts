import { Job } from 'bullmq';
export interface StripeWebhookJobData {
    webhookEventId: string;
    stripeEventId?: string;
}
export declare function processStripeWebhookJob(job: Job<StripeWebhookJobData>): Promise<void>;
