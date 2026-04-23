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
var outbound_webhook_exports = {};
__export(outbound_webhook_exports, {
  OutboundWebhookService: () => OutboundWebhookService,
  outboundWebhookService: () => outboundWebhookService
});
module.exports = __toCommonJS(outbound_webhook_exports);
var import_iam = require("@rentflow/iam");
var import_queue = require("./queue");
class OutboundWebhookService {
  async fireEvent(targetUrl, eventType, payload, secret) {
    const webhookPayload = {
      event: eventType,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      data: payload
    };
    const body = JSON.stringify(webhookPayload);
    const headers = {
      "Content-Type": "application/json",
      "X-Webhook-Event": eventType,
      "X-Webhook-Timestamp": webhookPayload.timestamp
    };
    if (secret) {
      const crypto = await import("crypto");
      const signature = crypto.createHmac("sha256", secret).update(body).digest("hex");
      headers["X-Webhook-Signature"] = signature;
    }
    const response = await fetch(targetUrl, {
      method: "POST",
      headers,
      body
    });
    if (!response.ok) {
      throw new Error(
        `Webhook failed with status ${response.status}: ${response.statusText}`
      );
    }
  }
  async queueWebhook(organizationId, eventType, payload) {
    const webhooks = await import_iam.prisma.organizationWebhook.findMany({
      where: {
        organizationId,
        isActive: true
      }
    });
    const matchingWebhooks = webhooks.filter((webhook) => {
      const events = Array.isArray(webhook.events) ? webhook.events : typeof webhook.events === "string" ? JSON.parse(webhook.events) : [];
      return events.includes(eventType);
    });
    for (const webhook of matchingWebhooks) {
      await import_queue.webhookQueue.add(
        "fire-webhook",
        {
          targetUrl: webhook.url,
          eventType,
          payload,
          secret: webhook.secret,
          webhookId: webhook.id,
          organizationId
        },
        {
          attempts: 3,
          backoff: {
            type: "exponential",
            delay: 2e3
          }
        }
      );
    }
  }
  async dispatchDocumentCompleted(documentId, organizationId) {
    const document = await import_iam.prisma.dssDocument.findUnique({
      where: { id: documentId },
      include: {
        signatures: {
          include: {
            participant: true
          }
        }
      }
    });
    if (!document) {
      throw new Error(`Document ${documentId} not found`);
    }
    const payload = {
      documentId: document.id,
      title: document.title,
      status: document.status,
      completedAt: document.completedAt,
      organizationId: document.organizationId,
      finalFileUrl: document.originalFileUrl,
      signatures: document.signatures.map((s) => ({
        participantEmail: s.participant.email,
        participantName: s.participant.fullName,
        role: s.participant.role,
        signedAt: s.signedAt,
        signatureHash: s.signatureHash
      }))
    };
    await this.queueWebhook(organizationId, "document.completed", payload);
  }
}
const outboundWebhookService = new OutboundWebhookService();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  OutboundWebhookService,
  outboundWebhookService
});
