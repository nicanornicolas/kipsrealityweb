import { ListingStatus, ListingAction } from './listing-types';
export interface ListingChangeEvent {
    unitId: string;
    listingId?: string;
    action: ListingAction;
    previousStatus?: ListingStatus;
    newStatus: ListingStatus;
    userId: string;
    reason?: string;
    timestamp: Date;
}
/**
 * Service for managing the integration between listing changes and application state
 * Ensures applications remain consistent when listing status changes
 */
export declare class ApplicationListingIntegrationService {
    /**
     * Handles listing status changes and updates application state accordingly
     * This is the main integration point called when listings change
     */
    handleListingStatusChange(event: ListingChangeEvent): Promise<void>;
    /**
     * Handles listing creation events
     */
    handleListingCreated(event: ListingChangeEvent): Promise<void>;
    /**
     * Handles listing removal events
     */
    handleListingRemoved(event: ListingChangeEvent): Promise<void>;
    /**
     * Handles maintenance mode events
     */
    handleMaintenanceMode(event: ListingChangeEvent): Promise<void>;
    /**
     * Validates application-listing consistency across the system
     * Can be run as a scheduled job to ensure data integrity
     */
    validateSystemIntegrity(): Promise<{
        unitsChecked: number;
        applicationsChecked: number;
        issuesFound: number;
        issuesFixed: number;
        errors: string[];
    }>;
    /**
     * Processes applications that were waiting for a unit to be listed
     */
    private processWaitingApplications;
    /**
     * Notifies applicants affected by listing status changes
     */
    private notifyAffectedApplicants;
    /**
     * Creates audit entry for integration events
     */
    private createIntegrationAuditEntry;
}
export declare const applicationListingIntegration: ApplicationListingIntegrationService;
export declare function createListingChangeEvent(unitId: string, action: ListingAction, newStatus: ListingStatus, userId: string, options?: {
    listingId?: string;
    previousStatus?: ListingStatus;
    reason?: string;
}): ListingChangeEvent;
