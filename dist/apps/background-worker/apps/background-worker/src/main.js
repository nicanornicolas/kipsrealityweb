var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var dotenv = __toESM(require("dotenv"));
var path = __toESM(require("path"));
var import_express = __toESM(require("express"));
var import_bullmq = require("bullmq");
var import_ioredis = __toESM(require("ioredis"));
var import_payments = require("@rentflow/payments");
var import_dss = require("@rentflow/dss");
var import_utilities = require("@rentflow/utilities");
var import_finance = require("@rentflow/finance");
var import_db = require("../../../libs/iam/src/lib/db");
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });
const app = (0, import_express.default)();
app.get("/health", (_req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});
const redisUrl = process.env.REDIS_URL || "redis://localhost:6379";
const redisConnection = new import_ioredis.default(redisUrl, { maxRetriesPerRequest: null });
const worker = new import_bullmq.Worker(
  "stripe-webhooks",
  async (job) => {
    if (job.name === "plaid-initial-sync") {
      const { organizationId, plaidAccessToken } = job.data;
      if (!organizationId || !plaidAccessToken) {
        throw new Error("Missing organizationId or plaidAccessToken for plaid-initial-sync");
      }
      console.log(`Starting initial Plaid sync for Org: ${organizationId}`);
      const syncService = new import_payments.PlaidB2BService();
      const syncedCount = await syncService.syncTransactions(
        organizationId,
        plaidAccessToken
      );
      console.log(
        `Initial sync complete for Org: ${organizationId}. Synced ${syncedCount} transactions.`
      );
      return;
    }
    if (job.name === "plaid-webhook-sync") {
      const { plaidItemId, webhookEventId } = job.data;
      if (!plaidItemId || !webhookEventId) {
        throw new Error("Missing plaidItemId or webhookEventId for plaid-webhook-sync");
      }
      const account = await import_db.prisma.connectedBankAccount.findFirst({
        where: { plaidItemId }
      });
      if (!account) {
        console.error(`No account found for Plaid Item: ${plaidItemId}`);
        await import_db.prisma.webhookEvent.update({
          where: { id: webhookEventId },
          data: {
            status: "FAILED",
            processingError: `No account found for Plaid Item: ${plaidItemId}`
          }
        });
        return;
      }
      const plaidService = new import_payments.PlaidB2BService();
      await plaidService.syncTransactions(account.organizationId, account.plaidAccessToken);
      await import_db.prisma.webhookEvent.update({
        where: { id: webhookEventId },
        data: { status: "PROCESSED" }
      });
      return;
    }
    await (0, import_payments.processStripeWebhookJob)(job);
  },
  {
    connection: redisConnection
  }
);
worker.on("completed", (job) => {
  console.log(`[Stripe Worker] Job ${job.id} completed`);
});
worker.on("failed", (job, err) => {
  console.error(
    `[Stripe Worker] Job ${job?.id ?? "unknown"} failed on attempt ${job?.attemptsMade ?? 0}`,
    err
  );
});
worker.on("stalled", (jobId) => {
  console.warn(`[Stripe Worker] Job ${jobId} stalled and will be retried`);
});
worker.on("error", (err) => {
  console.error("[Stripe Worker] Worker error", err);
});
const pdfWorker = new import_bullmq.Worker(
  "dss-pdf-generation",
  async (job) => {
    const { documentId, orgId } = job.data;
    const pdfResult = await (0, import_dss.generateFinalSignedPdf)(documentId, orgId);
    const organization = await import_db.prisma.organization.findUnique({
      where: { id: orgId },
      include: { plan: true }
    });
    if (organization?.plan?.signingFee && organization.plan.signingFee > 0) {
      const document = await import_db.prisma.dssDocument.findUnique({
        where: { id: documentId },
        select: { title: true }
      });
      console.log(
        `[DSS PDF Worker] Generating invoice for signing fee: $${organization.plan.signingFee}`
      );
      await import_finance.financeActions.billOrganizationForService({
        organizationId: orgId,
        amount: organization.plan.signingFee,
        description: `Document signing fee: ${document?.title || documentId}`,
        referenceType: "DSS_SIGNING",
        referenceId: documentId,
        serviceType: "DSS_SIGNING"
      });
      console.log(`[DSS PDF Worker] Invoice posted to GL successfully`);
    }
    console.log(`[DSS PDF Worker] Dispatching webhooks for document.completed`);
    await import_utilities.outboundWebhookService.dispatchDocumentCompleted(documentId, orgId);
    console.log(`[DSS PDF Worker] Webhooks dispatched`);
    return pdfResult;
  },
  {
    connection: redisConnection
  }
);
pdfWorker.on("completed", (job) => {
  console.log(`[DSS PDF Worker] Job ${job.id} completed`);
});
pdfWorker.on("failed", (job, err) => {
  console.error(
    `[DSS PDF Worker] Job ${job?.id ?? "unknown"} failed on attempt ${job?.attemptsMade ?? 0}`,
    err
  );
});
pdfWorker.on("stalled", (jobId) => {
  console.warn(`[DSS PDF Worker] Job ${jobId} stalled and will be retried`);
});
pdfWorker.on("error", (err) => {
  console.error("[DSS PDF Worker] Worker error", err);
});
const emailWorker = new import_bullmq.Worker(
  "email-notifications",
  async (job) => {
    if (job.name === "send-signature-invite") {
      const { email, documentTitle, documentId, role } = job.data;
      console.log(`[Email Worker] Sending signature invite to ${email}...`);
      await import_utilities.EmailNotificationService.sendSignatureInvitation({
        email,
        documentTitle,
        documentId,
        role
      });
      console.log(`[Email Worker] Invite sent successfully to ${email}`);
    }
  },
  { connection: redisConnection }
);
emailWorker.on("completed", (job) => {
  console.log(`[Email Worker] Job ${job.id} completed`);
});
emailWorker.on("failed", (job, err) => {
  console.error(
    `[Email Worker] Job ${job?.id ?? "unknown"} failed:`,
    err.message
  );
});
emailWorker.on("error", (err) => {
  console.error("[Email Worker] Worker error", err);
});
const webhookWorker = new import_bullmq.Worker(
  "webhooks",
  async (job) => {
    if (job.name === "fire-webhook") {
      const { targetUrl, eventType, payload, secret } = job.data;
      console.log(
        `[Webhook Worker] Firing ${eventType} webhook to ${targetUrl}...`
      );
      const { OutboundWebhookService } = await import("@rentflow/utilities");
      await new OutboundWebhookService().fireEvent(
        targetUrl,
        eventType,
        payload,
        secret
      );
      console.log(`[Webhook Worker] Webhook fired successfully`);
    }
  },
  { connection: redisConnection }
);
webhookWorker.on("completed", (job) => {
  console.log(`[Webhook Worker] Job ${job.id} completed`);
});
webhookWorker.on("failed", (job, err) => {
  console.error(
    `[Webhook Worker] Job ${job?.id ?? "unknown"} failed:`,
    err.message
  );
});
webhookWorker.on("error", (err) => {
  console.error("[Webhook Worker] Worker error", err);
});
const port = Number(process.env.PORT) || 3001;
const server = app.listen(port, () => {
  console.log(`[Background Worker] Listening on port ${port}`);
});
async function shutdown(signal) {
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
process.on("SIGTERM", () => {
  void shutdown("SIGTERM");
});
process.on("SIGINT", () => {
  void shutdown("SIGINT");
});
