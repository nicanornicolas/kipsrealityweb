export declare class LeaseWorkflowError extends Error {
    status: number;
    constructor(message: string, status: number);
}
export declare class LeaseRenewalEscalationService {
    renewLease(params: {
        leaseId: string;
        managerOrganizationUserId?: string;
        userId: string;
        newEndDate: string;
        newRentAmount?: number;
        renewalType?: string;
        negotiationNotes?: string;
    }): Promise<{
        id: string;
        createdAt: Date | null;
        leaseId: string;
        status: import("@prisma/client").$Enums.LeaseRenewalStatus | null;
        executedBy: string | null;
        executedAt: Date | null;
        renewalType: import("@prisma/client").$Enums.LeaseRenewalType;
        oldEndDate: Date;
        newEndDate: Date;
        oldRentAmount: number;
        newRentAmount: number;
        notificationSentAt: Date | null;
        tenantResponseAt: Date | null;
        tenantResponse: import("@prisma/client").$Enums.LeaseRenewalTenantResponse | null;
        negotiationNotes: string | null;
    }>;
    applyEscalation(params: {
        leaseId: string;
        managerOrganizationUserId?: string;
        userId: string;
        escalationRate: number;
        effectiveDate: string;
        escalationType: string;
    }): Promise<{
        escalation: {
            id: string;
            leaseId: string;
            escalationType: import("@prisma/client").$Enums.RentEscalationType;
            escalationRate: number | null;
            effectiveDate: Date;
            previousRent: number;
            newRent: number;
            calculationNote: string | null;
            appliedAt: Date | null;
            appliedBy: string;
        };
        updatedLease: {
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
        };
    }>;
}
export declare const leaseRenewalEscalationService: LeaseRenewalEscalationService;
