export interface PaymentInitializationRequest {
  invoiceId: string;
  amount: number;
  currency: string;
  region: "USA" | "KEN" | "NGA" | "GHA";
  paymentMethod?: "CARD" | "MPESA" | "ACH";
  phoneNumber?: string;
}

export interface PaymentInitializationResponse {
  paymentId: string;
  gateway: "STRIPE" | "PAYSTACK" | "MPESA" | "PLAID";
  clientSecret?: string;
  checkoutUrl?: string;
  requiresAction?: boolean;
  message?: string;
}
