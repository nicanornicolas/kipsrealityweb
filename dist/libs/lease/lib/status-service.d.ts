import { LeaseStatus, Prisma } from '@prisma/client';
export declare class LeaseStatusError extends Error {
    status: number;
    constructor(message: string, status: number);
}
export declare class LeaseStatusService {
    updateStatus(params: {
        leaseId: string;
        status: LeaseStatus;
        reason: string | undefined;
        userId: string;
    }): Promise<{
        id: string;
        leaseStatus: import("@prisma/client").$Enums.LeaseStatus | null;
        previousStatus: import("@prisma/client").$Enums.LeaseStatus | null;
        unitNumber: string;
        propertyName: string | null;
    }>;
    getStatusDetails(params: {
        leaseId: string;
        userId: string;
    }): Promise<{
        id: string;
        currentStatus: import("@prisma/client").$Enums.LeaseStatus | null;
        unitNumber: string;
        propertyName: string | null;
        hasActiveListing: boolean;
        isUnitOccupied: boolean;
        statusHistory: {
            action: string;
            timestamp: Date | null;
            performedBy: string;
            changes: Prisma.JsonValue;
        }[];
    }>;
}
export declare const leaseStatusService: LeaseStatusService;
