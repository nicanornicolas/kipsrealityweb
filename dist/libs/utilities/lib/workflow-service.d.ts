export type LeaseWorkflowAction = "APPROVE" | "ACTIVATE" | "TERMINATE";
export declare class LeaseWorkflowActionError extends Error {
    status: number;
    constructor(message: string, status: number);
}
export declare class LeaseWorkflowService {
    executeAction(params: {
        leaseId: string;
        action: LeaseWorkflowAction;
        organizationUserId?: string;
        userId: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        propertyId: string;
        unitId: string;
        tenantId: string | null;
        applicationId: string;
        startDate: Date;
        endDate: Date;
        rentAmount: number;
        securityDeposit: number | null;
        leaseStatus: import("@prisma/client").$Enums.LeaseStatus | null;
        earlyTerminationFee: number | null;
        gracePeriodDays: number | null;
        landlordResponsibilities: string | null;
        landlordSignedAt: Date | null;
        lateFeeDaily: number | null;
        lateFeeFlat: number | null;
        leaseTerm: string | null;
        paymentDueDay: number | null;
        paymentFrequency: string;
        tenantPaysElectric: boolean;
        tenantPaysInternet: boolean;
        tenantPaysTrash: boolean;
        tenantPaysWater: boolean;
        tenantResponsibilities: string | null;
        usageType: string | null;
        hasRenewalOption: boolean | null;
        renewalNoticeDays: number | null;
        renewalTermMonths: number | null;
        renewalRentIncrease: number | null;
        autoRenew: boolean | null;
        hasRentEscalation: boolean | null;
        escalationType: import("@prisma/client").$Enums.LeaseEscalationType | null;
        escalationRate: number | null;
        escalationFrequency: string | null;
        nextEscalationDate: Date | null;
        documentVersion: number | null;
        lastDocumentUpdate: Date | null;
        complianceCheckDate: Date | null;
        complianceStatus: import("@prisma/client").$Enums.LeaseComplianceStatus | null;
        complianceNotes: string | null;
        tenantSignedAt: Date | null;
    }>;
}
export declare const leaseWorkflowService: LeaseWorkflowService;
