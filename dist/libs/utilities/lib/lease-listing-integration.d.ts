import { LeaseStatus } from '@prisma/client';
export declare class LeaseListingIntegration {
    private listingService;
    constructor();
    /**
     * Handle lease activation - automatically remove unit from marketplace
     */
    handleLeaseActivation(leaseId: string, userId?: string): Promise<void>;
    /**
     * Handle lease expiration - prompt property manager for listing decision
     */
    handleLeaseExpiration(leaseId: string, userId?: string): Promise<void>;
    /**
     * Handle lease termination (early termination)
     */
    handleLeaseTermination(leaseId: string, userId?: string): Promise<void>;
    /**
     * Handle any lease status change - main entry point for lease lifecycle management
     */
    handleLeaseStatusChange(leaseId: string, newStatus: LeaseStatus, previousStatus: LeaseStatus | null, userId?: string): Promise<void>;
    /**
     * Prepare for lease activation (when lease is signed but not yet active)
     */
    private prepareForLeaseActivation;
    /**
     * Check for units that need listing decisions after lease changes
     * This can be called periodically or triggered by lease status changes
     */
    processUnitsNeedingListingDecisions(): Promise<void>;
}
export declare const leaseListingIntegration: LeaseListingIntegration;
