var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stripe_webhook_processor_exports = {};
__export(stripe_webhook_processor_exports, {
  processStripeWebhookJob: () => processStripeWebhookJob
});
module.exports = __toCommonJS(stripe_webhook_processor_exports);
var import_client = require("@prisma/client");
var import_subscription_service = require("./subscription-service");
const prisma = new import_client.PrismaClient();
async function processStripeWebhookJob(job) {
  const subscriptionService = new import_subscription_service.SubscriptionService();
  const { webhookEventId, stripeEventId } = job.data;
  const eventType = job.name;
  console.log(
    `[Stripe Worker] Starting job ${job.id} (attempt ${job.attemptsMade + 1}) for ${eventType}`
  );
  await prisma.webhookEvent.update({
    where: { id: webhookEventId },
    data: { status: "PROCESSING", retryCount: { increment: 1 } }
  });
  try {
    const webhookEvent = await prisma.webhookEvent.findUnique({
      where: { id: webhookEventId }
    });
    if (!webhookEvent) {
      throw new Error(`Webhook event ${webhookEventId} not found`);
    }
    const event = webhookEvent.payload;
    if (eventType && event.type !== eventType) {
      console.warn(
        `[Stripe Worker] Event type mismatch for ${webhookEventId}: job=${eventType}, payload=${event.type}`
      );
    }
    await subscriptionService.processEvent(event);
    await prisma.webhookEvent.update({
      where: { id: webhookEventId },
      data: { status: "PROCESSED" }
    });
    console.log(
      `[Stripe Worker] Completed job ${job.id} for ${eventType} (${stripeEventId ?? "no-stripe-id"})`
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error(
      `[Stripe Worker] Failed job ${job.id} for ${eventType}: ${message}`,
      error
    );
    await prisma.webhookEvent.update({
      where: { id: webhookEventId },
      data: {
        status: "FAILED",
        processingError: message
      }
    });
    throw error;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  processStripeWebhookJob
});
//# sourceMappingURL=stripe-webhook-processor.js.map
