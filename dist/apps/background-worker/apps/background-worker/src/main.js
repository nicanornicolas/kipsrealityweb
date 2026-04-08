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
var import_express = __toESM(require("express"));
var import_bullmq = require("bullmq");
var import_ioredis = __toESM(require("ioredis"));
var import_payments = require("@rentflow/payments");
const app = (0, import_express.default)();
app.get("/health", (_req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});
const redisUrl = process.env.REDIS_URL || "redis://localhost:6379";
const redisConnection = new import_ioredis.default(redisUrl, { maxRetriesPerRequest: null });
const worker = new import_bullmq.Worker("stripe-webhooks", import_payments.processStripeWebhookJob, {
  connection: redisConnection
});
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
const port = Number(process.env.PORT) || 3001;
const server = app.listen(port, () => {
  console.log(`[Background Worker] Listening on port ${port}`);
});
async function shutdown(signal) {
  console.log(`[Background Worker] Received ${signal}, shutting down...`);
  await worker.close();
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
