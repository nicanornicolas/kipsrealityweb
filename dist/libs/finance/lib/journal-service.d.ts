import { Decimal } from '@prisma/client/runtime/library';
import { PostJournalInput, IFinanceModule } from '../index';
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
    generateInvoice(input: any): Promise<{
        invoiceId: string;
    }>;
    getTenantBalance(tenantId: string): Promise<{
        totalOutstanding: Decimal;
    }>;
    recordPayment(invoiceId: string, amount: Decimal, paymentMethodId: string): Promise<void>;
}
export declare const journalService: JournalService;
