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
var mpesa_exports = {};
__export(mpesa_exports, {
  MpesaPaymentStrategy: () => MpesaPaymentStrategy
});
module.exports = __toCommonJS(mpesa_exports);
var import_client = require("@prisma/client");
class MpesaPaymentStrategy {
  constructor() {
    if (!process.env.MPESA_CONSUMER_KEY || !process.env.MPESA_CONSUMER_SECRET) {
      console.warn("M-Pesa credentials not fully configured");
    }
  }
  async getAccessToken() {
    const consumerKey = process.env.MPESA_CONSUMER_KEY;
    const consumerSecret = process.env.MPESA_CONSUMER_SECRET;
    if (!consumerKey || !consumerSecret) {
      throw new Error("M-Pesa authentication failed: Missing credentials");
    }
    const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64");
    const env = process.env.MPESA_ENV === "production" ? "api" : "sandbox";
    const url = `https://${env}.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: { Authorization: `Basic ${auth}` }
      });
      const data = await response.json();
      if (!response.ok || !data?.access_token) {
        const message = data?.errorMessage || data?.error || "Unknown error";
        throw new Error(`M-Pesa authentication failed: ${message}`);
      }
      return data.access_token;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      if (message.startsWith("M-Pesa authentication failed:")) {
        throw error;
      }
      throw new Error(`M-Pesa authentication failed: ${message}`);
    }
  }
  async initializePayment(_request) {
    throw new Error("M-Pesa STK Push is not enabled in this deployment");
  }
  async verifyTransaction(reference) {
    return {
      transactionId: reference,
      status: import_client.TransactionStatus.PENDING,
      gateway: import_client.PaymentGateway.MPESA_DIRECT,
      rawResponse: { message: "Verification not implemented in compatibility strategy" }
    };
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MpesaPaymentStrategy
});
