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
var usa_exports = {};
__export(usa_exports, {
  UsaPaymentStrategy: () => UsaPaymentStrategy
});
module.exports = __toCommonJS(usa_exports);
var import_types = require("../types");
var import_client = require("@prisma/client");
var import_stripe = __toESM(require("stripe"));
var import_iam = require("@rentflow/iam");
var import_plaid_service = require("../services/plaid-service");
class UsaPaymentStrategy {
  stripe;
  constructor() {
    this.stripe = new import_stripe.default(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2026-02-25.clover"
    });
  }
  async initializePayment(req) {
    const amountInCents = Math.round(req.amount * 100);
    const paymentMethod = await import_iam.prisma.tenantPaymentMethod.findFirst({
      where: {
        userId: req.user.id,
        type: "ACH",
        isDefault: true
      }
    });
    if (paymentMethod && paymentMethod.plaidAccessToken && paymentMethod.plaidAccountId) {
      try {
        const balanceCheck = await (0, import_plaid_service.checkBalance)(
          paymentMethod.plaidAccessToken,
          // In prod, decrypt this first
          paymentMethod.plaidAccountId,
          req.amount
        );
        if (balanceCheck.risk === "HIGH") {
          throw new Error("Insufficient funds in linked bank account.");
        }
        const params2 = {
          amount: amountInCents,
          currency: "usd",
          customer: req.user.stripeCustomerId,
          // Must exist if bad method exists
          payment_method: paymentMethod.stripePaymentMethodId,
          // The ACH Source
          off_session: true,
          // We are charging saved method
          confirm: true,
          // Auto-confirm because it's ACH
          metadata: {
            invoiceId: req.invoiceId,
            userId: req.user.id
          }
        };
        if (req.organization.stripeConnectId) {
          params2.transfer_data = {
            destination: req.organization.stripeConnectId
          };
        }
        const intent2 = await this.stripe.paymentIntents.create(params2);
        return {
          transactionId: intent2.id,
          status: import_client.TransactionStatus.PENDING,
          // ACH takes 3-5 days
          gateway: import_types.PaymentGateway.STRIPE,
          // Or create a new enum value STRIPE_ACH if needed
          rawResponse: intent2
        };
      } catch (error) {
        console.warn("ACH Payment failed, falling back to Card:", error);
      }
    }
    const params = {
      amount: amountInCents,
      currency: "usd",
      metadata: {
        invoiceId: req.invoiceId,
        userId: req.user.id
      },
      automatic_payment_methods: { enabled: true }
      // Enables Apple Pay, Google Pay, ACH (if configured in Dashboard)
    };
    if (req.organization.stripeConnectId) {
      params.transfer_data = {
        destination: req.organization.stripeConnectId
      };
    }
    const intent = await this.stripe.paymentIntents.create(params);
    return {
      transactionId: intent.id,
      status: import_client.TransactionStatus.PENDING,
      gateway: import_types.PaymentGateway.STRIPE,
      clientSecret: intent.client_secret,
      // Frontend uses this to render Elements
      rawResponse: intent
    };
  }
  async verifyTransaction(reference) {
    return {};
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UsaPaymentStrategy
});
