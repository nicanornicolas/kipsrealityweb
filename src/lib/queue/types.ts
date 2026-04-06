export interface StripeWebhookJobData {
  eventType: string;
  payload: Record<string, unknown>;
  webhookEventId: string;
  receivedAt: string;
}
