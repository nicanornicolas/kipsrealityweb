// libs/finance/src/client.ts
// CLIENT-SAFE EXPORTS ONLY
// This barrel must never import server-only modules (prisma, server-only, next/headers)

// Safe type aliases (string literal unions)
export type AccountCode =
  | '1000'
  | '1100'
  | '1200'
  | '1300'
  | '1400'
  | '1500'
  | '2000'
  | '2100'
  | '2200'
  | '2250'
  | '3000'
  | '3100'
  | '3200'
  | '4000'
  | '4100'
  | '4200'
  | '4300'
  | '4400'
  | '5000'
  | '5100'
  | '5200'
  | '5300'
  | '6000'
  | '6100'
  | '6200'
  | '6300';

export type InvoiceType = 'RENT' | 'UTILITY' | 'DEPOSIT' | 'FEE' | 'TAX';

// Interface definitions only (no prisma dependencies in these interfaces)
// Note: The actual implementations (journal-service, actions) are server-only
