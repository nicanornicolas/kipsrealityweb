export type LeaseAmendmentAction = "APPROVE" | "REJECT" | "EXECUTE";
export declare class LeaseAmendmentError extends Error {
    status: number;
    constructor(message: string, status: number);
}
export declare class LeaseAmendmentService {
    createAmendment(params: {
        leaseId: string;
        amendmentType: string;
        effectiveDate: string;
        description: string;
        changes: Record<string, unknown>;
        requiresSignature?: boolean;
        userId: string;
        organizationUserId?: string;
    }): Promise<{
        id: string;
        createdAt: Date | null;
        leaseId: string;
        createdBy: string;
        description: string | null;
        status: import("@prisma/client").$Enums.LeaseAmendmentStatus | null;
        approvedAt: Date | null;
        approvedBy: string | null;
        amendmentType: import("@prisma/client").$Enums.LeaseAmendmentType;
        effectiveDate: Date;
        changes: import('@prisma/client/runtime/library').JsonValue | null;
        previousValues: import('@prisma/client/runtime/library').JsonValue | null;
        executedBy: string | null;
        executedAt: Date | null;
        documentUrl: string | null;
    }>;
    listAmendments(leaseId: string): Promise<{
        id: string;
        createdAt: Date | null;
        leaseId: string;
        createdBy: string;
        description: string | null;
        status: import("@prisma/client").$Enums.LeaseAmendmentStatus | null;
        approvedAt: Date | null;
        approvedBy: string | null;
        amendmentType: import("@prisma/client").$Enums.LeaseAmendmentType;
        effectiveDate: Date;
        changes: import('@prisma/client/runtime/library').JsonValue | null;
        previousValues: import('@prisma/client/runtime/library').JsonValue | null;
        executedBy: string | null;
        executedAt: Date | null;
        documentUrl: string | null;
    }[]>;
    processAmendmentAction(params: {
        leaseId: string;
        amendmentId: string;
        action: LeaseAmendmentAction;
        notes?: string;
        userId: string;
    }): Promise<{
        id: string;
        createdAt: Date | null;
        leaseId: string;
        createdBy: string;
        description: string | null;
        status: import("@prisma/client").$Enums.LeaseAmendmentStatus | null;
        approvedAt: Date | null;
        approvedBy: string | null;
        amendmentType: import("@prisma/client").$Enums.LeaseAmendmentType;
        effectiveDate: Date;
        changes: import('@prisma/client/runtime/library').JsonValue | null;
        previousValues: import('@prisma/client/runtime/library').JsonValue | null;
        executedBy: string | null;
        executedAt: Date | null;
        documentUrl: string | null;
    }>;
    deleteAmendment(params: {
        leaseId: string;
        amendmentId: string;
        userId: string;
    }): Promise<void>;
}
export declare const leaseAmendmentService: LeaseAmendmentService;
