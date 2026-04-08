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
var payment_error_handler_exports = {};
__export(payment_error_handler_exports, {
  DEFAULT_RETRY_CONFIG: () => DEFAULT_RETRY_CONFIG,
  PaymentError: () => PaymentError,
  PaymentErrorHandler: () => PaymentErrorHandler,
  PaymentErrorType: () => PaymentErrorType,
  paymentErrorHandler: () => paymentErrorHandler
});
module.exports = __toCommonJS(payment_error_handler_exports);
var import_client = require("@prisma/client");
var PaymentErrorType = /* @__PURE__ */ ((PaymentErrorType2) => {
  PaymentErrorType2["NETWORK_ERROR"] = "NETWORK_ERROR";
  PaymentErrorType2["AUTHENTICATION_ERROR"] = "AUTHENTICATION_ERROR";
  PaymentErrorType2["VALIDATION_ERROR"] = "VALIDATION_ERROR";
  PaymentErrorType2["PAYMENT_GATEWAY_ERROR"] = "PAYMENT_GATEWAY_ERROR";
  PaymentErrorType2["FRAUD_DETECTED"] = "FRAUD_DETECTED";
  PaymentErrorType2["INSUFFICIENT_FUNDS"] = "INSUFFICIENT_FUNDS";
  PaymentErrorType2["TIMEOUT_ERROR"] = "TIMEOUT_ERROR";
  PaymentErrorType2["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
  return PaymentErrorType2;
})(PaymentErrorType || {});
class PaymentError extends Error {
  constructor(type, message, options = {}) {
    super(message);
    this.type = type;
    this.options = options;
    this.name = "PaymentError";
  }
  type;
  options;
  get userMessage() {
    return this.options.userMessage || this.getDefaultUserMessage();
  }
  get retryable() {
    return this.options.retryable ?? this.isRetryableByDefault();
  }
  get shouldAlert() {
    return this.options.shouldAlert ?? this.shouldAlertByDefault();
  }
  getDefaultUserMessage() {
    const messages = {
      ["NETWORK_ERROR" /* NETWORK_ERROR */]: "A network error occurred. Please check your connection and try again.",
      ["AUTHENTICATION_ERROR" /* AUTHENTICATION_ERROR */]: "Payment authentication failed. Please try again or contact support.",
      ["VALIDATION_ERROR" /* VALIDATION_ERROR */]: "Please check your payment information and try again.",
      ["PAYMENT_GATEWAY_ERROR" /* PAYMENT_GATEWAY_ERROR */]: "The payment service is temporarily unavailable. Please try again later.",
      ["FRAUD_DETECTED" /* FRAUD_DETECTED */]: "This transaction has been flagged for security review. Please contact support.",
      ["INSUFFICIENT_FUNDS" /* INSUFFICIENT_FUNDS */]: "Insufficient funds. Please check your account balance.",
      ["TIMEOUT_ERROR" /* TIMEOUT_ERROR */]: "The payment request timed out. Please try again.",
      ["UNKNOWN_ERROR" /* UNKNOWN_ERROR */]: "An unexpected error occurred. Please try again or contact support."
    };
    return messages[this.type];
  }
  isRetryableByDefault() {
    const retryableTypes = [
      "NETWORK_ERROR" /* NETWORK_ERROR */,
      "TIMEOUT_ERROR" /* TIMEOUT_ERROR */,
      "PAYMENT_GATEWAY_ERROR" /* PAYMENT_GATEWAY_ERROR */
    ];
    return retryableTypes.includes(this.type);
  }
  shouldAlertByDefault() {
    const alertTypes = [
      "FRAUD_DETECTED" /* FRAUD_DETECTED */,
      "AUTHENTICATION_ERROR" /* AUTHENTICATION_ERROR */,
      "PAYMENT_GATEWAY_ERROR" /* PAYMENT_GATEWAY_ERROR */
    ];
    return alertTypes.includes(this.type);
  }
  toJSON() {
    return {
      type: this.type,
      message: this.message,
      userMessage: this.userMessage,
      retryable: this.retryable,
      gateway: this.options.gateway,
      transactionId: this.options.transactionId,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
  }
  /**
   * Creates specific error types for common payment scenarios
   */
  static createNetworkError(message, gateway) {
    return new PaymentError("NETWORK_ERROR" /* NETWORK_ERROR */, message, {
      userMessage: "Network connection failed. Please check your internet connection and try again.",
      retryable: true,
      gateway
    });
  }
  static createAuthenticationError(message, gateway) {
    return new PaymentError("AUTHENTICATION_ERROR" /* AUTHENTICATION_ERROR */, message, {
      userMessage: "Payment authentication failed. Please check your payment details or contact support.",
      retryable: false,
      gateway,
      shouldAlert: true
    });
  }
  static createValidationError(message, field) {
    return new PaymentError("VALIDATION_ERROR" /* VALIDATION_ERROR */, message, {
      userMessage: field ? `Please check the ${field} field and try again.` : "Please check your payment information and try again.",
      retryable: false
    });
  }
  static createFraudError(message, details) {
    return new PaymentError("FRAUD_DETECTED" /* FRAUD_DETECTED */, message, {
      userMessage: "This transaction has been flagged for security review. Please contact support if you believe this is an error.",
      retryable: false,
      shouldAlert: true,
      technicalDetails: details
    });
  }
  static createInsufficientFundsError(message) {
    return new PaymentError("INSUFFICIENT_FUNDS" /* INSUFFICIENT_FUNDS */, message, {
      userMessage: "Insufficient funds. Please check your account balance and try again.",
      retryable: false
    });
  }
}
const DEFAULT_RETRY_CONFIG = {
  maxAttempts: 3,
  baseDelay: 1e3,
  backoffMultiplier: 2,
  maxDelay: 1e4,
  retryableErrorTypes: [
    "NETWORK_ERROR" /* NETWORK_ERROR */,
    "TIMEOUT_ERROR" /* TIMEOUT_ERROR */,
    "PAYMENT_GATEWAY_ERROR" /* PAYMENT_GATEWAY_ERROR */
  ]
};
class PaymentErrorHandler {
  static instance;
  retryConfig;
  constructor(retryConfig = DEFAULT_RETRY_CONFIG) {
    this.retryConfig = retryConfig;
  }
  static getInstance(retryConfig) {
    if (!PaymentErrorHandler.instance) {
      PaymentErrorHandler.instance = new PaymentErrorHandler(retryConfig);
    }
    return PaymentErrorHandler.instance;
  }
  /**
   * Wraps an async payment operation with error handling and retry logic
   */
  async withRetry(operation, context, customConfig) {
    const config = { ...this.retryConfig, ...customConfig };
    let lastError;
    for (let attempt = 1; attempt <= config.maxAttempts; attempt++) {
      try {
        return await operation();
      } catch (error) {
        lastError = error;
        const paymentError = this.normalizeError(error, context);
        if (attempt < config.maxAttempts && paymentError.retryable && config.retryableErrorTypes.includes(paymentError.type)) {
          const delay = this.calculateDelay(attempt, config);
          console.warn(`Payment operation failed (attempt ${attempt}/${config.maxAttempts}), retrying in ${delay}ms:`, {
            context,
            error: paymentError.message,
            type: paymentError.type,
            retryable: paymentError.retryable
          });
          await this.sleep(delay);
          continue;
        }
        this.logError(paymentError, context, attempt);
        throw paymentError;
      }
    }
    throw lastError;
  }
  /**
   * Normalizes various error types to PaymentError
   */
  normalizeError(error, context) {
    if (error instanceof PaymentError) {
      return error;
    }
    const err = error;
    const errorMessage = err.message || "Unknown error";
    let type = "UNKNOWN_ERROR" /* UNKNOWN_ERROR */;
    let gateway;
    let retryable = false;
    if (errorMessage.includes("network") || errorMessage.includes("fetch") || errorMessage.includes("connection")) {
      type = "NETWORK_ERROR" /* NETWORK_ERROR */;
      retryable = true;
    } else if (errorMessage.includes("timeout") || errorMessage.includes("timed out")) {
      type = "TIMEOUT_ERROR" /* TIMEOUT_ERROR */;
      retryable = true;
    } else if (errorMessage.includes("auth") || errorMessage.includes("unauthorized") || errorMessage.includes("invalid credentials")) {
      type = "AUTHENTICATION_ERROR" /* AUTHENTICATION_ERROR */;
    } else if (errorMessage.includes("invalid") || errorMessage.includes("validation") || errorMessage.includes("required")) {
      type = "VALIDATION_ERROR" /* VALIDATION_ERROR */;
    } else if (errorMessage.includes("paystack") || errorMessage.includes("stripe") || errorMessage.includes("mpesa") || errorMessage.includes("gateway")) {
      type = "PAYMENT_GATEWAY_ERROR" /* PAYMENT_GATEWAY_ERROR */;
      retryable = true;
      if (errorMessage.toLowerCase().includes("paystack")) {
        gateway = import_client.PaymentGateway.PAYSTACK;
      } else if (errorMessage.toLowerCase().includes("stripe")) {
        gateway = import_client.PaymentGateway.STRIPE;
      } else if (errorMessage.toLowerCase().includes("mpesa")) {
        gateway = import_client.PaymentGateway.MPESA_DIRECT;
      }
    } else if (errorMessage.includes("fraud") || errorMessage.includes("suspicious")) {
      type = "FRAUD_DETECTED" /* FRAUD_DETECTED */;
    } else if (errorMessage.includes("insufficient") || errorMessage.includes("funds")) {
      type = "INSUFFICIENT_FUNDS" /* INSUFFICIENT_FUNDS */;
    }
    return new PaymentError(type, errorMessage, {
      userMessage: this.getUserErrorMessage(type, context),
      retryable,
      gateway,
      technicalDetails: {
        originalError: errorMessage,
        stack: err.stack,
        context
      }
    });
  }
  getUserErrorMessage(type, context) {
    const baseMessage = new PaymentError(type, "").userMessage;
    if (context.includes("initialization") || context.includes("initialize")) {
      return `Failed to start payment: ${baseMessage.toLowerCase()}`;
    }
    if (context.includes("verification") || context.includes("verify")) {
      return `Failed to verify payment: ${baseMessage.toLowerCase()}`;
    }
    return baseMessage;
  }
  calculateDelay(attempt, config) {
    const delay = config.baseDelay * Math.pow(config.backoffMultiplier, attempt - 1);
    return Math.min(delay, config.maxDelay);
  }
  async sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  logError(error, context, attempt) {
    const logLevel = error.shouldAlert ? "error" : "warn";
    console[logLevel](`Payment operation failed after ${attempt} attempt(s):`, {
      context,
      errorType: error.type,
      message: error.message,
      userMessage: error.userMessage,
      retryable: error.retryable,
      gateway: error.options.gateway,
      transactionId: error.options.transactionId,
      shouldAlert: error.shouldAlert,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
    if (error.shouldAlert) {
      this.sendAlert(error, context);
    }
  }
  sendAlert(error, context) {
    console.error("ALERT: Payment error requiring attention:", {
      errorType: error.type,
      context,
      message: error.message,
      gateway: error.options.gateway,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
  }
}
const paymentErrorHandler = PaymentErrorHandler.getInstance();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DEFAULT_RETRY_CONFIG,
  PaymentError,
  PaymentErrorHandler,
  PaymentErrorType,
  paymentErrorHandler
});
