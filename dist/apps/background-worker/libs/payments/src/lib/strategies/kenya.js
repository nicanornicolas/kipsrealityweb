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
var kenya_exports = {};
__export(kenya_exports, {
  KenyaPaymentStrategy: () => KenyaPaymentStrategy
});
module.exports = __toCommonJS(kenya_exports);
var import_client = require("@prisma/client");
class KenyaPaymentStrategy {
  secretKey = process.env.PAYSTACK_SECRET_KEY;
  async initializePayment(req) {
    const amountInSubunits = Math.round(req.amount * 100);
    const payload = {
      email: req.user.email,
      amount: amountInSubunits,
      currency: "KES",
      reference: `REF-${Date.now()}-${req.invoiceId.substring(0, 8)}`,
      callback_url: `${process.env.NEXT_PUBLIC_APP_URL}/api/payment/callback/paystack`,
      metadata: {
        invoiceId: req.invoiceId,
        userId: req.user.id,
        custom_fields: [
          { display_name: "Invoice ID", variable_name: "invoice_id", value: req.invoiceId }
        ]
      },
      // SPLIT LOGIC: If landlord has a subaccount, split the money here
      subaccount: req.organization.paystackSubaccountCode || void 0,
      channels: ["card", "mobile_money"]
      // Enables M-Pesa option on checkout
    };
    const response = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.secretKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    if (!data.status) {
      throw new Error(`Paystack Init Failed: ${data.message}`);
    }
    return {
      transactionId: data.data.reference,
      status: import_client.TransactionStatus.PENDING,
      gateway: import_client.PaymentGateway.PAYSTACK,
      checkoutUrl: data.data.authorization_url,
      // Redirect user here to pay via M-Pesa/Card
      rawResponse: data
    };
  }
  async verifyTransaction(reference) {
    return {};
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  KenyaPaymentStrategy
});
