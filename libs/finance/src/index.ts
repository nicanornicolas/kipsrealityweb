import { Decimal } from '@prisma/client/runtime/library';

// Explicit USA/GAAP typings
export type AccountCode =
  | '1000'
  | '1100'
  | '2100'
  | '2200'
  | '2250'
  | '4000'
  | '4100'
  | '4200'
  | '4300'
  | '4400'
  | '5100'
  | '5200'
  | '5300';
export type InvoiceType = 'RENT' | 'UTILITY' | 'DEPOSIT' | 'FEE' | 'TAX';

export interface CreateInvoiceInput {
  organizationId: string;
  tenantId: string;
  leaseId?: string;
  propertyId: string;
  unitId?: string;
  amount: Decimal;
  taxAmount?: Decimal; // USA Tax readiness
  type: InvoiceType;
  dueDate: Date;
  description: string;
}

export interface JournalLineInput {
  accountCode: AccountCode;
  debit: Decimal;
  credit: Decimal;
  propertyId?: string; // Dimension tracking
  tenantId?: string; // Dimension tracking
}

export interface PostJournalInput {
  organizationId: string;
  date: Date;
  reference: string;
  description: string;
  lines: JournalLineInput[];
}

/**
 * SQUAD 1 - CORE FINANCIAL CONTRACT
 * Strict GAAP-compliant operations.
 */
export interface IFinanceModule {
  // Invoices & Receivables
  generateInvoice(input: CreateInvoiceInput): Promise<{ invoiceId: string }>;
  getTenantBalance(tenantId: string): Promise<{ totalOutstanding: Decimal }>;

  // Double-Entry Ledger
  postJournalEntry(
    input: PostJournalInput,
  ): Promise<{ journalEntryId: string }>;

  // Payment Allocation
  recordPayment(
    invoiceId: string,
    amount: Decimal,
    paymentMethodId: string,
  ): Promise<void>;
}

// Export the concrete implementations as we build them
export * from './lib/journal-service';
export * from './lib/actions';
