import { Decimal } from '@prisma/client/runtime/library';
export declare const maintenanceService: {
    /**
     * Finalize a maintenance request and post to GL.
     * DR: Maintenance Expense (5100), CR: Accounts Payable (2200)
     * If tenantChargeable: DR: AR (1100), CR: Maintenance Recovery (4300) + Tenant Invoice
     */
    postMaintenanceBill(requestId: string): Promise<{
        request: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            organizationId: string;
            title: string;
            description: string;
            propertyId: string;
            unitId: string | null;
            requestedById: string;
            priority: import("@prisma/client").$Enums.Priority;
            status: import("@prisma/client").$Enums.MaintenanceRequestStatus;
            category: import("@prisma/client").$Enums.RequestCategory;
            assignedVendorId: string | null;
            cost: Decimal | null;
            assignedAt: Date | null;
            invoiceId: string | null;
            isTenantChargeable: boolean;
            journalEntryId: string | null;
        };
        expenseGLEntry: {
            journalEntryId: string;
        };
        invoiceId: string | undefined;
    }>;
};
