import { PrismaClient } from '@prisma/client';
import { JournalService } from './journal-service';
export declare class FinanceActions {
    private db;
    private journalService;
    constructor(db: PrismaClient, journalService: JournalService);
    postInvoiceToGL(invoiceId: string): Promise<void>;
    /**
     * Translates a received Payment into a GAAP-compliant Journal Entry and posts it.
     * Debits Cash (1000) and credits Accounts Receivable (1100).
     */
    postPaymentToGL(paymentId: string): Promise<void>;
    /**
     * Creates an Invoice for cross-module service billing (DSS signing fees, etc.)
     * and automatically posts it to the General Ledger.
     */
    billOrganizationForService(params: {
        organizationId: string;
        amount: number;
        description: string;
        referenceType: string;
        referenceId: string;
        serviceType: 'DSS_SIGNING' | 'BACKGROUND_CHECK';
    }): Promise<{
        invoiceId: string;
        journalEntryId: string;
    }>;
}
export declare const financeActions: FinanceActions;
