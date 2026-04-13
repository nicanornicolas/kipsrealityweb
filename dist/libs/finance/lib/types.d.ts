import { Decimal } from '@prisma/client/runtime/library';
export declare const CHART_OF_ACCOUNTS: {
    readonly CASH_IN_BANK: "1000";
    readonly ACCOUNTS_RECEIVABLE: "1100";
    readonly UNDEPOSITED_FUNDS: "1200";
    readonly SECURITY_DEPOSITS_LIABILITY: "2100";
    readonly ACCOUNTS_PAYABLE: "2200";
    readonly SALES_TAX_PAYABLE: "2250";
    readonly PREPAID_RENT: "2300";
    readonly OWNER_EQUITY: "3000";
    readonly RENTAL_INCOME: "4000";
    readonly UTILITY_RECOVERY_INCOME: "4100";
    readonly LATE_FEES_INCOME: "4200";
    readonly MAINTENANCE_INCOME: "4300";
    readonly DOCUMENT_SIGNING_INCOME: "4400";
    readonly MAINTENANCE_EXPENSE: "5100";
    readonly UTILITY_EXPENSE: "5200";
    readonly MANAGEMENT_FEES: "5300";
};
export type AccountCode = keyof typeof CHART_OF_ACCOUNTS;
export interface JournalLineInput {
    accountCode: string;
    description?: string;
    debit: number | Decimal;
    credit: number | Decimal;
    propertyId?: string;
    unitId?: string;
    leaseId?: string;
    tenantId?: string;
}
export interface PostJournalEntryInput {
    organizationId: string;
    date: Date;
    description: string;
    reference?: string;
    lines: JournalLineInput[];
}
