var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var queue_exports = {};
__export(queue_exports, {
  connection: () => connection,
  defaultJobOptions: () => defaultJobOptions,
  emailQueue: () => emailQueue,
  invoiceQueue: () => invoiceQueue,
  webhookQueue: () => webhookQueue
});
module.exports = __toCommonJS(queue_exports);
var import_bullmq = require("bullmq");
var import_ioredis = __toESM(require("ioredis"));
const redisUrl = process.env.REDIS_URL || "redis://localhost:6379";
const isBuildPhase = process.env.NEXT_PHASE === "phase-production-build" || process.env.npm_lifecycle_event === "build";
const connection = isBuildPhase ? null : new import_ioredis.default(redisUrl, {
  maxRetriesPerRequest: null,
  lazyConnect: true,
  retryStrategy: (attempts) => Math.min(attempts * 50, 3e3)
});
if (!isBuildPhase) {
  connection.on("error", (err) => {
    if (process.env.NODE_ENV === "production") throw err;
    console.warn("[Redis] Connection error:", err.message);
  });
}
const defaultJobOptions = {
  attempts: 3,
  backoff: { type: "exponential", delay: 2e3 },
  removeOnComplete: true,
  removeOnFail: false
};
const webhookQueue = isBuildPhase ? null : new import_bullmq.Queue("stripe-webhooks", {
  connection,
  defaultJobOptions
});
const invoiceQueue = isBuildPhase ? null : new import_bullmq.Queue("bulk-invoices", {
  connection,
  defaultJobOptions
});
const emailQueue = isBuildPhase ? null : new import_bullmq.Queue("email-notifications", {
  connection,
  defaultJobOptions
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  connection,
  defaultJobOptions,
  emailQueue,
  invoiceQueue,
  webhookQueue
});
