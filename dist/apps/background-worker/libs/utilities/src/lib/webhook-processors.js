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
var webhook_processors_exports = {};
__export(webhook_processors_exports, {
  processMpesaWebhook: () => processMpesaWebhook,
  processPaystackWebhook: () => processPaystackWebhook,
  processStripeWebhook: () => processStripeWebhook
});
module.exports = __toCommonJS(webhook_processors_exports);
var import_iam = require("@rentflow/iam");
var import_finance = require("@rentflow/finance");
var import_client = require("@prisma/client");
var import_notification_service = require("./notifications/notification-service");
async function processMpesaWebhook(payload) {
  const body = payload;
  const stkCallback = body?.Body?.stkCallback;
  if (!stkCallback) {
    throw new Error("Invalid M-Pesa webhook format");
  }
  const checkoutRequestId = stkCallback.CheckoutRequestID;
  const resultCode = stkCallback.ResultCode;
  const resultDesc = stkCallback.ResultDesc;
  const callbackMetadata = stkCallback.CallbackMetadata;
  if (!checkoutRequestId) {
    throw new Error("Missing CheckoutRequestID");
  }
  if (resultCode !== 0) {
    await updatePaymentStatus(checkoutRequestId, import_client.TransactionStatus.FAILED, {
      errorCode: resultCode,
      errorDescription: resultDesc
    });
    return;
  }
  const metadata = extractCallbackMetadata(callbackMetadata);
  if (!metadata) {
    throw new Error("Missing payment metadata");
  }
  const payment = await findPaymentByCheckoutId(checkoutRequestId);
  if (!payment) {
    throw new Error(`Payment not found for CheckoutRequestID: ${checkoutRequestId}`);
  }
  const updateData = {
    status: import_client.TransactionStatus.SETTLED,
    gatewayReference: metadata.mpesaReceiptNumber,
    method: import_client.PaymentMethod.MPESA,
    paidOn: /* @__PURE__ */ new Date()
  };
  const paymentWithMeta = payment;
  const existingMetadata = paymentWithMeta.metadata ? typeof paymentWithMeta.metadata === "string" ? JSON.parse(paymentWithMeta.metadata) : paymentWithMeta.metadata : {};
  const mpesaMetadata = {
    ...existingMetadata,
    checkoutRequestId,
    merchantRequestId: stkCallback.MerchantRequestID,
    processedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  if (metadata.transactionDate !== void 0) {
    mpesaMetadata.mpesaTransactionDate = metadata.transactionDate;
  }
  if (metadata.phoneNumber !== void 0) {
    mpesaMetadata.mpesaPhoneNumber = metadata.phoneNumber;
  }
  if (metadata.amount !== void 0) {
    mpesaMetadata.mpesaAmount = metadata.amount;
  }
  updateData.metadata = mpesaMetadata;
  const updatedPayment = await import_iam.prisma.payment.update({
    where: { id: payment.id },
    data: updateData
  });
  try {
    await import_finance.financeActions.postPaymentToGL(updatedPayment.id);
  } catch (glError) {
    throw new Error(
      `Failed to post payment to GL: ${glError instanceof Error ? glError.message : "Unknown error"}`
    );
  }
  try {
    const paymentWithInvoice = await import_iam.prisma.payment.findUnique({
      where: { id: updatedPayment.id },
      select: {
        amount: true,
        currency: true,
        invoice: {
          select: {
            id: true,
            Lease: {
              select: {
                tenant: {
                  select: {
                    id: true,
                    phone: true,
                    firstName: true
                  }
                }
              }
            }
          }
        }
      }
    });
    const tenant = paymentWithInvoice?.invoice?.Lease?.tenant;
    if (!tenant?.phone) return;
    const receipt = await import_iam.prisma.receipt.findFirst({
      where: { paymentId: updatedPayment.id },
      orderBy: { issuedOn: "desc" },
      select: { receiptNo: true }
    });
    const amountNumber = paymentWithInvoice?.amount ? Number(paymentWithInvoice.amount) : 0;
    const currency = paymentWithInvoice?.currency || "KES";
    const formattedAmount = new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency
    }).format(amountNumber);
    const receiptRef = receipt?.receiptNo ?? updatedPayment.id;
    await import_notification_service.NotificationService.sendSmsNotification({
      userId: tenant.id,
      phoneNumber: tenant.phone,
      message: `Confirmed: RentFlow360 has received your M-Pesa payment of ${formattedAmount}. Receipt Ref: ${receiptRef}. Thank you!`,
      category: import_client.NotificationCategory.PAYMENT_RECEIPT
    });
  } catch (error) {
    console.error("SMS Dispatch Failed:", error);
  }
}
async function processPaystackWebhook(payload) {
  const body = payload;
  if (body.event !== "charge.success") {
    return;
  }
  const reference = body.data?.reference;
  if (!reference) {
    throw new Error("Missing Paystack reference");
  }
  const payment = await import_iam.prisma.payment.findFirst({
    where: { gatewayReference: reference }
  });
  if (!payment || payment.status === import_client.TransactionStatus.SETTLED) {
    return;
  }
  await import_iam.prisma.payment.update({
    where: { id: payment.id },
    data: { status: import_client.TransactionStatus.SETTLED }
  });
  await import_finance.financeActions.postPaymentToGL(payment.id);
}
async function processStripeWebhook(payload) {
  const event = payload;
  if (event.type !== "payment_intent.succeeded") {
    return;
  }
  const paymentIntent = event.data.object;
  const payment = await import_iam.prisma.payment.findFirst({
    where: { gatewayReference: paymentIntent.id }
  });
  if (!payment || payment.status === import_client.TransactionStatus.SETTLED) {
    return;
  }
  await import_iam.prisma.payment.update({
    where: { id: payment.id },
    data: { status: import_client.TransactionStatus.SETTLED }
  });
  await import_finance.financeActions.postPaymentToGL(payment.id);
}
function extractCallbackMetadata(callbackMetadata) {
  if (!callbackMetadata || typeof callbackMetadata !== "object") {
    return null;
  }
  const callback = callbackMetadata;
  if (!callback?.Item || !Array.isArray(callback.Item)) {
    return null;
  }
  const items = callback.Item;
  const metadata = {};
  items.forEach((item) => {
    if (!item || typeof item !== "object") return;
    const itemObj = item;
    const name = itemObj.Name;
    const value = itemObj.Value;
    switch (name) {
      case "Amount":
        if (typeof value === "number") metadata.amount = value;
        break;
      case "MpesaReceiptNumber":
        if (typeof value === "string") metadata.mpesaReceiptNumber = value;
        break;
      case "TransactionDate":
        if (typeof value === "number") metadata.transactionDate = value;
        break;
      case "PhoneNumber":
        if (typeof value === "number") metadata.phoneNumber = value;
        break;
    }
  });
  return metadata.amount && metadata.mpesaReceiptNumber ? metadata : null;
}
async function findPaymentByCheckoutId(checkoutRequestId) {
  try {
    const paymentByRef = await import_iam.prisma.payment.findFirst({
      where: {
        gatewayReference: checkoutRequestId
      }
    });
    if (paymentByRef) {
      return paymentByRef;
    }
    const allPayments = await import_iam.prisma.payment.findMany({
      where: {
        gateway: "MPESA_DIRECT"
      }
    });
    return allPayments.find((payment) => {
      const paymentWithMeta = payment;
      if (!paymentWithMeta.metadata) return false;
      try {
        const meta = typeof paymentWithMeta.metadata === "string" ? JSON.parse(paymentWithMeta.metadata) : paymentWithMeta.metadata;
        return meta?.checkoutRequestId === checkoutRequestId || meta?.CheckoutRequestID === checkoutRequestId;
      } catch {
        return false;
      }
    });
  } catch (error) {
    throw new Error(
      `Error finding payment by checkout ID: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}
async function updatePaymentStatus(checkoutRequestId, status, errorDetails) {
  const payment = await findPaymentByCheckoutId(checkoutRequestId);
  if (!payment) return;
  const paymentWithMeta = payment;
  const currentMeta = paymentWithMeta.metadata ? typeof paymentWithMeta.metadata === "string" ? JSON.parse(paymentWithMeta.metadata) : paymentWithMeta.metadata : {};
  const updateData = {
    status
  };
  const metadataUpdate = {
    ...currentMeta,
    failedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  if (errorDetails !== void 0) {
    metadataUpdate.errorDetails = errorDetails;
  }
  updateData.metadata = metadataUpdate;
  await import_iam.prisma.payment.update({
    where: { id: payment.id },
    data: updateData
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  processMpesaWebhook,
  processPaystackWebhook,
  processStripeWebhook
});
//# sourceMappingURL=webhook-processors.js.map
