import { prisma } from "@rentflow/iam";
import { financeActions } from "@rentflow/finance";
import { NotificationCategory, PaymentMethod, Prisma, TransactionStatus, Payment } from "@prisma/client";
import { NotificationService } from "./notifications/notification-service";
import type Stripe from "stripe";

export async function processMpesaWebhook(payload: unknown) {
  const body = payload as Record<string, unknown>;
  const stkCallback = (body?.Body as Record<string, unknown>)?.stkCallback as
    | Record<string, unknown>
    | undefined;

  if (!stkCallback) {
    throw new Error("Invalid M-Pesa webhook format");
  }

  const checkoutRequestId = stkCallback.CheckoutRequestID as string | undefined;
  const resultCode = stkCallback.ResultCode as number | undefined;
  const resultDesc = stkCallback.ResultDesc as string | undefined;
  const callbackMetadata = stkCallback.CallbackMetadata as unknown;

  if (!checkoutRequestId) {
    throw new Error("Missing CheckoutRequestID");
  }

  if (resultCode !== 0) {
    await updatePaymentStatus(checkoutRequestId, TransactionStatus.FAILED, {
      errorCode: resultCode,
      errorDescription: resultDesc,
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

  const updateData: Prisma.PaymentUpdateInput = {
    status: TransactionStatus.SETTLED,
    gatewayReference: metadata.mpesaReceiptNumber,
    method: PaymentMethod.MPESA,
    paidOn: new Date(),
  };

  const paymentWithMeta = payment as Payment & { metadata?: Record<string, unknown> };
  const existingMetadata = paymentWithMeta.metadata
    ? typeof paymentWithMeta.metadata === "string"
      ? JSON.parse(paymentWithMeta.metadata)
      : paymentWithMeta.metadata
    : {};

  const mpesaMetadata: Record<string, Prisma.InputJsonValue> = {
    ...existingMetadata,
    checkoutRequestId,
    merchantRequestId: stkCallback.MerchantRequestID as string | undefined,
    processedAt: new Date().toISOString(),
  };

  if (metadata.transactionDate !== undefined) {
    mpesaMetadata.mpesaTransactionDate = metadata.transactionDate;
  }
  if (metadata.phoneNumber !== undefined) {
    mpesaMetadata.mpesaPhoneNumber = metadata.phoneNumber;
  }
  if (metadata.amount !== undefined) {
    mpesaMetadata.mpesaAmount = metadata.amount;
  }

  updateData.metadata = mpesaMetadata;

  const updatedPayment = await prisma.payment.update({
    where: { id: payment.id },
    data: updateData,
  });

  try {
    await financeActions.postPaymentToGL(updatedPayment.id);
  } catch (glError) {
    throw new Error(
      `Failed to post payment to GL: ${glError instanceof Error ? glError.message : "Unknown error"}`
    );
  }

  try {
    const paymentWithInvoice = await prisma.payment.findUnique({
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
                    firstName: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    const tenant = paymentWithInvoice?.invoice?.Lease?.tenant;
    if (!tenant?.phone) return;

    const receipt = await prisma.receipt.findFirst({
      where: { paymentId: updatedPayment.id },
      orderBy: { issuedOn: "desc" },
      select: { receiptNo: true },
    });

    const amountNumber = paymentWithInvoice?.amount
      ? Number(paymentWithInvoice.amount)
      : 0;
    const currency = paymentWithInvoice?.currency || "KES";
    const formattedAmount = new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency,
    }).format(amountNumber);

    const receiptRef = receipt?.receiptNo ?? updatedPayment.id;

    await NotificationService.sendSmsNotification({
      userId: tenant.id,
      phoneNumber: tenant.phone,
      message: `Confirmed: RentFlow360 has received your M-Pesa payment of ${formattedAmount}. Receipt Ref: ${receiptRef}. Thank you!`,
      category: NotificationCategory.PAYMENT_RECEIPT,
    });
  } catch (error) {
    console.error("SMS Dispatch Failed:", error);
  }
}

export async function processPaystackWebhook(payload: unknown) {
  const body = payload as { event?: string; data?: Record<string, unknown> };
  if (body.event !== "charge.success") {
    return;
  }

  const reference = body.data?.reference as string | undefined;
  if (!reference) {
    throw new Error("Missing Paystack reference");
  }

  const payment = await prisma.payment.findFirst({
    where: { gatewayReference: reference },
  });

  if (!payment || payment.status === TransactionStatus.SETTLED) {
    return;
  }

  await prisma.payment.update({
    where: { id: payment.id },
    data: { status: TransactionStatus.SETTLED },
  });

  await financeActions.postPaymentToGL(payment.id);
}

export async function processStripeWebhook(payload: unknown) {
  const event = payload as Stripe.Event;
  if (event.type !== "payment_intent.succeeded") {
    return;
  }

  const paymentIntent = event.data.object as Stripe.PaymentIntent;
  const payment = await prisma.payment.findFirst({
    where: { gatewayReference: paymentIntent.id },
  });

  if (!payment || payment.status === TransactionStatus.SETTLED) {
    return;
  }

  await prisma.payment.update({
    where: { id: payment.id },
    data: { status: TransactionStatus.SETTLED },
  });

  await financeActions.postPaymentToGL(payment.id);
}

function extractCallbackMetadata(callbackMetadata: unknown) {
  if (!callbackMetadata || typeof callbackMetadata !== "object") {
    return null;
  }

  const callback = callbackMetadata as Record<string, unknown>;
  if (!callback?.Item || !Array.isArray(callback.Item)) {
    return null;
  }

  const items = callback.Item;
  const metadata: {
    amount?: number;
    mpesaReceiptNumber?: string;
    transactionDate?: number;
    phoneNumber?: number;
  } = {};

  items.forEach((item: unknown) => {
    if (!item || typeof item !== "object") return;
    const itemObj = item as Record<string, unknown>;
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

async function findPaymentByCheckoutId(checkoutRequestId: string) {
  try {
    const paymentByRef = await prisma.payment.findFirst({
      where: {
        gatewayReference: checkoutRequestId,
      },
    });

    if (paymentByRef) {
      return paymentByRef;
    }

    const allPayments = await prisma.payment.findMany({
      where: {
        gateway: "MPESA_DIRECT",
      },
    });

    return allPayments.find((payment) => {
      const paymentWithMeta = payment as Payment & { metadata?: unknown };
      if (!paymentWithMeta.metadata) return false;

      try {
        const meta =
          typeof paymentWithMeta.metadata === "string"
            ? JSON.parse(paymentWithMeta.metadata)
            : paymentWithMeta.metadata;

        return (
          meta?.checkoutRequestId === checkoutRequestId ||
          meta?.CheckoutRequestID === checkoutRequestId
        );
      } catch {
        return false;
      }
    });
  } catch (error) {
    throw new Error(
      `Error finding payment by checkout ID: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

async function updatePaymentStatus(
  checkoutRequestId: string,
  status: TransactionStatus,
  errorDetails?: unknown
) {
  const payment = await findPaymentByCheckoutId(checkoutRequestId);
  if (!payment) return;

  const paymentWithMeta = payment as Payment & { metadata?: Record<string, unknown> };
  const currentMeta = paymentWithMeta.metadata
    ? typeof paymentWithMeta.metadata === "string"
      ? JSON.parse(paymentWithMeta.metadata)
      : paymentWithMeta.metadata
    : {};

  const updateData: Prisma.PaymentUpdateInput = {
    status,
  };

  const metadataUpdate: Record<string, Prisma.InputJsonValue> = {
    ...currentMeta,
    failedAt: new Date().toISOString(),
  };

  if (errorDetails !== undefined) {
    metadataUpdate.errorDetails = errorDetails as Prisma.InputJsonValue;
  }

  updateData.metadata = metadataUpdate;

  await prisma.payment.update({
    where: { id: payment.id },
    data: updateData,
  });
}

