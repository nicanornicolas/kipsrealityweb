import { Decimal } from '@prisma/client/runtime/library';
export type AccountCode = '1000' | '1100' | '1200' | '1300' | '1400' | '1500' | '2000' | '2100' | '2200' | '2250' | '3000' | '3100' | '3200' | '4000' | '4100' | '4200' | '4300' | '4400' | '5000' | '5100' | '5200' | '5300' | '6000' | '6100' | '6200' | '6300';
export type InvoiceType = 'RENT' | 'UTILITY' | 'DEPOSIT' | 'FEE' | 'TAX';
export type InvoiceStatus = 'DRAFT' | 'ISSUED' | 'PAID' | 'VOID' | 'OVERDUE' | 'CANCELLED';
export type PostingStatus = 'PENDING' | 'POSTED' | 'FAILED';
export interface InvoiceFilters {
    propertyId?: string;
    status?: InvoiceStatus;
    search?: string;
    page?: number;
    limit?: number;
}
export interface InvoiceListItem {
    id: string;
    invoiceNumber: string;
    tenantName: string;
    propertyName: string;
    unitNumber: string;
    amount: number;
    dueDate: Date;
    status: InvoiceStatus;
    postingStatus: PostingStatus;
    journalEntryId?: string | null;
}
export interface InvoiceDetail extends InvoiceListItem {
    description: string;
    createdAt: Date;
    postedAt?: Date;
    ledgerEntries: {
        accountId: string;
        debit: number;
        credit: number;
    }[];
}
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
    unitId?: string;
    leaseId?: string;
}
export interface PostJournalInput {
    organizationId: string;
    date: Date;
    reference: string;
    description: string;
    lines: JournalLineInput[];
}
export interface FinanceSummary {
    cashInBank: Decimal;
    accountsReceivable: Decimal;
    salesTaxLiability: Decimal;
    totalRevenue: Decimal;
    operatingExpenses: Decimal;
    overdueAmount: Decimal;
}
export type W9Status = 'MISSING' | 'COLLECTED' | 'EXPIRED';
export type VendorCategory = 'MAINTENANCE' | 'UTILITY' | 'TAX' | 'MANAGEMENT_FEE';
export type BusinessType = 'INDIVIDUAL' | 'LLC' | 'CORPORATION';
export interface VendorListItem {
    id: string;
    name: string;
    category: VendorCategory;
    businessType: BusinessType;
    w9Status: W9Status;
    totalPaidYTD: number;
    requires1099: boolean;
}
export interface VendorInvoiceItem {
    id: string;
    vendorId: string;
    vendorName: string;
    organizationId: string;
    propertyId: string;
    unitId?: string;
    amount: number;
    category: VendorCategory;
    description?: string;
    dueDate: Date;
    postingStatus: PostingStatus;
    journalEntryId?: string | null;
    createdAt: Date;
}
export interface ExpenseInput {
    organizationId: string;
    vendorId: string;
    amount: Decimal;
    propertyId: string;
    unitId?: string;
    category: VendorCategory;
    description: string;
    dueDate: Date;
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
    postJournalEntry(input: PostJournalInput, tx?: any): Promise<{
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
export * from './lib/reconciliation-service';
