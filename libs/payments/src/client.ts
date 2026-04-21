// libs/payments/src/client.ts
// CLIENT-SAFE EXPORTS ONLY
// This barrel must never import server-only modules (prisma, server-only, next/headers)

// Client-safe types from client-types.ts
export type {
  PaymentInitializationRequest,
  PaymentInitializationResponse,
} from './lib/client-types';
