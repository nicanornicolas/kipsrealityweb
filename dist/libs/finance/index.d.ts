import { Decimal } from '@prisma/client/runtime/library';
export type AccountCode = '1000' | '1100' | '1200' | '1300' | '1400' | '1500' | '2000' | '2100' | '2200' | '2250' | '3000' | '3100' | '3200' | '4000' | '4100' | '4200' | '4300' | '4400' | '5000' | '5100' | '5200' | '5300' | '6000' | '6100' | '6200' | '6300';
export type InvoiceType = 'RENT' | 'UTILITY' | 'DEPOSIT' | 'FEE' | 'TAX';
export interface CreateInvoiceInput {
    organizationId: string;
    tenantId: string;
    leaseId?: string;
    propertyId: string;
    unitId?: string;
    amount: Decimal;
    taxAmount?: Decimal;
    type: InvoiceType;
    dueDate: Date;
    description: string;
}
export interface JournalLineInput {
    accountCode: AccountCode;
    debit: Decimal;
    credit: Decimal;
    propertyId?: string;
    tenantId?: string;
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
    generateInvoice(input: CreateInvoiceInput): Promise<{
        invoiceId: string;
    }>;
    getTenantBalance(tenantId: string): Promise<{
        totalOutstanding: Decimal;
    }>;
    postJournalEntry(input: PostJournalInput): Promise<{
        journalEntryId: string;
    }>;
    recordPayment(invoiceId: string, amount: Decimal, paymentMethodId: string): Promise<void>;
}
export * from './lib/journal-service';
export * from './lib/actions';
export * from './lib/types';
export * from './lib/setup';
export * from './lib/maintenance-service';
export * from './lib/utility-service';
