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
var import_types = require("../types");
var import_client = require("@prisma/client");
class MpesaPaymentStrategy {
  consumerKey;
  consumerSecret;
  passkey;
  shortcode;
  environment;
  baseUrl;
  constructor() {
    this.consumerKey = process.env.MPESA_CONSUMER_KEY || "";
    this.consumerSecret = process.env.MPESA_CONSUMER_SECRET || "";
    this.passkey = process.env.MPESA_PASSKEY || "";
    this.shortcode = process.env.MPESA_SHORTCODE || "";
    this.environment = process.env.MPESA_ENV || "sandbox";
    this.baseUrl = this.environment === "sandbox" ? "https://sandbox.safaricom.co.ke" : "https://api.safaricom.co.ke";
    if (!this.consumerKey || !this.consumerSecret || !this.passkey || !this.shortcode) {
      console.warn("M-Pesa credentials not fully configured. MpesaPaymentStrategy will fail.");
    }
  }
  /**
   * Initialize M-Pesa STK Push payment
   */
  async initializePayment(req) {
    try {
      const accessToken = await this.getAccessToken();
      const phoneNumber = this.extractPhoneNumber(req);
      const timestamp = this.generateTimestamp();
      const password = this.generatePassword(timestamp);
      const amountInCents = Math.round(req.amount * 100);
      const transactionId = `RF${Date.now()}${Math.floor(Math.random() * 1e3)}`;
      const stkPayload = {
        BusinessShortCode: this.shortcode,
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: Math.floor(req.amount),
        // M-Pesa expects whole shillings
        PartyA: phoneNumber,
        PartyB: this.shortcode,
        PhoneNumber: phoneNumber,
        CallBackURL: `${process.env.NEXT_PUBLIC_APP_URL}/api/webhooks/mpesa/callback`,
        AccountReference: `INV-${req.invoiceId.substring(0, 8)}`,
        TransactionDesc: `Payment for invoice ${req.invoiceId}`
      };
      const response = await fetch(`${this.baseUrl}/mpesa/stkpush/v1/processrequest`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(stkPayload)
      });
      const data = await response.json();
      if (!response.ok || data.ResponseCode !== "0") {
        throw new Error(`M-Pesa STK Push failed: ${data.errorMessage || data.ResponseDescription || "Unknown error"}`);
      }
      return {
        transactionId,
        status: import_client.TransactionStatus.PENDING,
        gateway: import_types.PaymentGateway.MPESA_DIRECT,
        checkoutUrl: void 0,
        // No redirect - STK Push is sent to phone
        rawResponse: {
          ...data,
          mpesaCheckoutId: data.CheckoutRequestID,
          customerMessage: data.CustomerMessage
        }
      };
    } catch (error) {
      console.error("M-Pesa initialization error:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      throw new Error(`M-Pesa payment failed: ${errorMessage}`);
    }
  }
  /**
   * Verify M-Pesa transaction status
   */
  async verifyTransaction(reference) {
    try {
      const accessToken = await this.getAccessToken();
      return {
        transactionId: reference,
        status: import_client.TransactionStatus.PENDING,
        gateway: import_types.PaymentGateway.MPESA_DIRECT,
        rawResponse: { message: "Verification not fully implemented" }
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      throw new Error(`M-Pesa verification failed: ${errorMessage}`);
    }
  }
  /**
   * Get OAuth access token from Daraja API
   */
  async getAccessToken() {
    const auth = Buffer.from(`${this.consumerKey}:${this.consumerSecret}`).toString("base64");
    const response = await fetch(`${this.baseUrl}/oauth/v1/generate?grant_type=client_credentials`, {
      method: "GET",
      headers: {
        "Authorization": `Basic ${auth}`
      }
    });
    const data = await response.json();
    if (!response.ok || data.error) {
      throw new Error(`M-Pesa authentication failed: ${data.errorMessage || "Invalid credentials"}`);
    }
    return data.access_token;
  }
  /**
   * Extract phone number from payment request
   * Expected format: 2547XXXXXXXX (Kenyan format)
   */
  extractPhoneNumber(req) {
    if (req.metadata?.phoneNumber) {
      return this.normalizePhoneNumber(req.metadata.phoneNumber);
    }
    if (req.user.phone) {
      return this.normalizePhoneNumber(req.user.phone);
    }
    throw new Error("Phone number is required for M-Pesa payments. Please provide a phone number in metadata.phoneNumber or user profile.");
  }
  /**
   * Normalize phone number to M-Pesa format (2547XXXXXXXX)
   */
  normalizePhoneNumber(phone) {
    let cleaned = phone.replace(/\D/g, "");
    if (cleaned.startsWith("0")) {
      cleaned = "254" + cleaned.substring(1);
    }
    if (cleaned.startsWith("7") && cleaned.length === 9) {
      cleaned = "254" + cleaned;
    }
    if (cleaned.startsWith("+254")) {
      cleaned = cleaned.substring(1);
    }
    if (!cleaned.match(/^2547\d{8}$/)) {
      throw new Error(`Invalid phone number format. Expected Kenyan format (2547XXXXXXXX), got: ${cleaned}`);
    }
    return cleaned;
  }
  /**
   * Generate timestamp in format YYYYMMDDHHMMSS
   */
  generateTimestamp() {
    const now = /* @__PURE__ */ new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `${year}${month}${day}${hours}${minutes}${seconds}`;
  }
  /**
   * Generate password (Base64 encoded)
   * Format: BusinessShortCode + Passkey + Timestamp
   */
  generatePassword(timestamp) {
    const passwordString = `${this.shortcode}${this.passkey}${timestamp}`;
    return Buffer.from(passwordString).toString("base64");
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MpesaPaymentStrategy
});
