import { Decimal } from '@prisma/client/runtime/library';
import { PostJournalInput, IFinanceModule, FinanceSummary, InvoiceFilters, InvoiceListItem, InvoiceDetail } from '../index';
import { PrismaClient } from '@prisma/client';
/**
 * JournalService implements the core financial invariants of our Engineering Constitution:
 * 1. Decimal precision (no floating-point math)
 * 2. Exact Debit = Credit validation
 * 3. Absolute immutability (isLocked: true)
 */
export declare class JournalService implements IFinanceModule {
    private prisma;
    constructor(prisma: PrismaClient);
    /**
     * Post a Journal Entry to the General Ledger.
     * THROWS GL_IMBALANCE error if Debits != Credits.
     */
    postJournalEntry(input: PostJournalInput, tx?: any): Promise<{
        journalEntryId: string;
    }>;
    getFinanceSummary(organizationId: string, propertyId?: string): Promise<FinanceSummary>;
    getInvoices(organizationId: string, filters: InvoiceFilters): Promise<{
        data: InvoiceListItem[];
        pagination: {
            total: number;
            page: number;
            limit: number;
        };
    }>;
    getInvoiceDetail(organizationId: string, invoiceId: string): Promise<InvoiceDetail>;
    /**
     * Get vendor compliance list with YTD spend tracking and W-9 status.
     * Used for 1099-MISC risk assessment and IRS threshold monitoring.
     *
     * Returns vendors with:
     * - YTD spend aggregation (posted expenses only)
     * - W-9 collection status
     * - 1099 requirement flag (businessType !== 'CORPORATION' && YTD >= $600)
     */
    getVendorComplianceList(organizationId: string): Promise<{
        id: string;
        name: string;
        category: any;
        businessType: any;
        w9Status: string;
        totalPaidYTD: number;
        requires1099: boolean;
    }[]>;
    generateInvoice(input: any): Promise<{
        invoiceId: string;
    }>;
    getTenantBalance(tenantId: string): Promise<{
        totalOutstanding: Decimal;
    }>;
    recordPayment(invoiceId: string, amount: Decimal, paymentMethodId: string): Promise<void>;
}
export declare const journalService: JournalService;
