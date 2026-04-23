import { Decimal } from '@prisma/client/runtime/library';
export declare class ReconciliationService {
    /**
     * Finds likely journal entries for a bank transaction using amount and date proximity.
     */
    getSuggestedMatches(bankTransactionId: string, organizationId?: string): Promise<({
        lines: ({
            account: {
                name: string;
                id: string;
                entityId: string;
                code: string;
                type: import("@prisma/client").$Enums.AccountType;
                isSystem: boolean;
            };
        } & {
            id: string;
            leaseId: string | null;
            description: string | null;
            propertyId: string | null;
            unitId: string | null;
            journalEntryId: string;
            vendorId: string | null;
            accountId: string;
            debit: Decimal;
            credit: Decimal;
            tenantId: string | null;
        })[];
    } & {
        id: string;
        description: string;
        entityId: string;
        transactionDate: Date;
        postedAt: Date | null;
        reference: string | null;
        isLocked: boolean;
    })[]>;
}
