import { ListingStatus, CreateListingData, CreateListingResult, RemoveListingResult, UpdateStatusResult, ListingHistoryResult, BulkUpdateResult, BulkListingOperation, MaintenanceModeConfig, MaintenanceModeStatus, MaintenanceModeResult } from './listing-types';
/**
 * Core service for marketplace listing management
 * Handles listing creation, removal, status updates, and audit trail
 * Optimized for performance with caching and efficient queries
 */
export declare class ListingService {
    /**
     * Performance-optimized method to get unit with related data
     * Uses selective includes and caching for frequently accessed units
     */
    private getUnitWithRelations;
    /**
     * Clear cache for a specific unit or all cached data
     */
    private clearCache;
    /**
     * Resolve a ListingStatus id by name.
     */
    private getStatusIdByName;
    /**
     * Resolve a marketplace category id by name.
     */
    private getMarketplaceCategoryIdByName;
    /**
     * Creates a new marketplace listing for a unit
     * Validates unit eligibility and creates listing with proper status
     * Includes intelligent default value population and comprehensive validation
     */
    createListing(unitId: string, listingData: CreateListingData, userId: string, organizationId: string): Promise<CreateListingResult>;
    /**
     * Removes a listing from the marketplace with proper cleanup
     */
    removeListing(unitId: string, userId: string, reason?: string): Promise<RemoveListingResult>;
    /**
     * Updates listing status with state machine validation
     */
    updateListingStatus(listingId: string, newStatus: ListingStatus, userId: string, reason?: string): Promise<UpdateStatusResult>;
    /**
     * Retrieves audit trail for a unit's listing history
     */
    getListingHistory(unitId: string, userId: string): Promise<ListingHistoryResult>;
    /**
     * Updates listing information with comprehensive validation and change tracking
     * Ensures marketplace synchronization for all updates
     */
    updateListingInformation(listingId: string, updateData: Partial<CreateListingData>, userId: string): Promise<UpdateStatusResult>;
    /**
     * Processes bulk listing operations with comprehensive error tracking and rollback capabilities
     * Each unit is processed individually with transaction handling for data consistency
     */
    bulkUpdateListings(operations: BulkListingOperation[], userId: string, organizationId: string): Promise<BulkUpdateResult>;
    /**
     * Validates and populates listing data with intelligent defaults
     * Implements comprehensive validation rules for listing information
     */
    private validateAndPopulateListingData;
    /**
     * Generates intelligent default title from unit data
     */
    private generateDefaultTitle;
    /**
     * Generates intelligent default description from unit data
     */
    private generateDefaultDescription;
    /**
     * Generates intelligent default price from unit data
     */
    private generateDefaultPrice;
    /**
     * Validates listing update data
     */
    private validateListingUpdateData;
    /**
     * Tracks changes between current and new listing data
     */
    private trackListingChanges;
    /**
     * Sanitizes text input to prevent XSS and ensure data quality
     */
    private sanitizeText;
    /**
     * Synchronizes listing data with marketplace systems
     * Ensures all external systems reflect the current listing state
     */
    private synchronizeWithMarketplace;
    /**
     * Validates bulk operations before processing
     */
    private validateBulkOperations;
    /**
     * Validates a single operation and collects rollback data
     */
    private validateSingleOperation;
    /**
     * Suspends a listing (implementation for SUSPEND action)
     */
    private suspendListing;
    /**
     * Rolls back successful operations in case of critical failures
     */
    private rollbackBulkOperations;
    /**
     * Creates audit entry for bulk operations
     */
    private createBulkAuditEntry;
    private mapBulkAction;
    /**
     * Starts maintenance mode for a unit
     * Temporarily removes listing from marketplace with restoration capability
     */
    startMaintenanceMode(config: MaintenanceModeConfig, userId: string): Promise<MaintenanceModeResult>;
    /**
     * Ends maintenance mode for a unit
     * Restores listing to marketplace with previous or specified status
     */
    endMaintenanceMode(unitId: string, userId: string, restoreToStatus?: ListingStatus, reason?: string): Promise<MaintenanceModeResult>;
    /**
     * Gets the current maintenance mode status for a unit
     */
    getMaintenanceModeStatus(unitId: string): Promise<MaintenanceModeStatus>;
    /**
     * Automatically starts maintenance mode when a maintenance request is created
     * Integrates with existing maintenance workflow
     */
    handleMaintenanceRequestCreated(maintenanceRequestId: string, unitId: string, userId: string): Promise<void>;
    /**
     * Automatically ends maintenance mode when a maintenance request is completed
     */
    handleMaintenanceRequestCompleted(maintenanceRequestId: string, unitId: string, userId: string): Promise<void>;
    /**
     * Synchronizes maintenance mode status with marketplace systems
     */
    private synchronizeMaintenanceModeWithMarketplace;
    /**
     * Notifies tenants about maintenance mode
     */
    private notifyTenantsOfMaintenance;
    /**
     * Determines initial listing status based on availability date
     */
    private determineInitialStatus;
    /**
     * Processes time-based status transitions for all listings
     * Should be called by a scheduled job/cron
     */
    processTimeBasedTransitions(): Promise<{
        processed: number;
        activated: number;
        expired: number;
        errors: string[];
    }>;
    /**
     * Automatically activates a listing when availability date is reached
     */
    private autoActivateListing;
    /**
     * Automatically expires a listing when expiration date is reached
     */
    private autoExpireListing;
    /**
     * Notifies property manager when a listing expires
     */
    private notifyPropertyManagerOfExpiration;
    /**
     * Gets listings that are expiring soon (within specified days)
     */
    getExpiringSoonListings(daysAhead?: number): Promise<{
        success: boolean;
        data?: Array<{
            listingId: string;
            unitId: string;
            unitNumber: string;
            title: string;
            expirationDate: Date;
            daysUntilExpiration: number;
        }>;
        error?: string;
    }>;
    /**
     * Extends the expiration date of a listing
     */
    extendListingExpiration(listingId: string, newExpirationDate: Date, userId: string, reason?: string): Promise<UpdateStatusResult>;
}
export declare const listingService: ListingService;
