export declare class LeaseStatusChangesError extends Error {
    status: number;
    constructor(message: string, status: number);
}
type ListingActionType = "REMOVED" | "PROMPT_SENT" | "NOTIFICATION_SENT" | "NO_ACTION";
export declare class LeaseStatusChangesService {
    getStatusChanges(params: {
        userId: string;
        propertyId: string | null;
        unitId: string | null;
        limit: number;
    }): Promise<{
        changes: {
            id: string;
            leaseId: string;
            unitNumber: string;
            propertyName: string;
            previousStatus: string;
            newStatus: string;
            timestamp: Date | null;
            listingAction: ListingActionType;
            reason: string;
        }[];
        total: number;
    }>;
    processListingDecision(params: {
        userId: string;
        unitId: string;
        action: "LIST_UNIT" | "KEEP_PRIVATE";
    }): Promise<{
        action: string;
        message: string;
    }>;
}
export declare const leaseStatusChangesService: LeaseStatusChangesService;
export {};
