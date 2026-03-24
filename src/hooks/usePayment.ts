"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import type {
  PaymentInitializationRequest,
  PaymentInitializationResponse,
} from "@/lib/payment/client-types";
import { useMemo } from "react";

function createIdempotencyKey(invoiceId: string) {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return `${invoiceId}-${crypto.randomUUID()}`;
  }
  return `${invoiceId}-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

export function useInitializePayment() {
  useMemo(() => createIdempotencyKey("payment"), []);

  return useMutation({
    mutationFn: async (
      payload: PaymentInitializationRequest
    ): Promise<PaymentInitializationResponse> => {
      const key = createIdempotencyKey(payload.invoiceId) || idempotencyKey;
      const response = await fetch("/api/payments/initialize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Idempotency-Key": key,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        const message =
          errorData?.message ||
          errorData?.error ||
          "Failed to initialize payment";
        throw new Error(message);
      }

      return response.json();
    },
    onError: (error) => {
      toast.error(
        error instanceof Error
          ? error.message
          : "An error occurred during payment initialization."
      );
    },
  });
}

export function usePaymentStatus(paymentId: string | null, enabled = true) {
  return useQuery({
    queryKey: ["payment-status", paymentId],
    queryFn: async () => {
      if (!paymentId) {
        throw new Error("Missing payment id");
      }
      const response = await fetch(`/api/payments/${paymentId}`, {
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch payment status");
      }
      return response.json();
    },
    enabled: Boolean(paymentId) && enabled,
    refetchInterval: (query) => {
      const status = query.state.data?.status;
      if (status === "SETTLED" || status === "FAILED") {
        return false;
      }
      return 3000;
    },
  });
}
