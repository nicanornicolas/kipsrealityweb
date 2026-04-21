import { ListingStatus } from './listing-types';
export interface ApplicationEligibilityResult {
    isEligible: boolean;
    reason?: string;
    listingStatus?: ListingStatus;
    unitId: string;
}
export interface ApplicationControlConfig {
    requireActiveListing: boolean;
    allowedStatuses: ListingStatus[];
    gracePeriodHours?: number;
}
/**
 * Service for controlling tenant application functionality based on listing status
 * Implements business rules for when applications should be enabled/disabled
 */
export declare class ApplicationControlService {
    private config;
    constructor(config?: Partial<ApplicationControlConfig>);
    /**
     * Checks if a unit is eligible for tenant applications
     * Returns detailed eligibility information with reasons
     */
    checkApplicationEligibility(unitId: string): Promise<ApplicationEligibilityResult>;
    /**
     * Checks multiple units for application eligibility
     * Useful for bulk operations and marketplace displays
     */
    checkMultipleUnitsEligibility(unitIds: string[]): Promise<ApplicationEligibilityResult[]>;
    /**
     * Gets all units that are eligible for applications
     * Useful for marketplace filtering and property manager dashboards
     */
    getEligibleUnits(propertyId?: string): Promise<{
        unitId: string;
        unitNumber: string;
        listingStatus: ListingStatus;
    }[]>;
    /**
     * Validates application data integrity
     * Ensures applications maintain proper associations with listings
     */
    validateApplicationDataIntegrity(applicationId: string): Promise<{
        isValid: boolean;
        issues: string[];
    }>;
    /**
     * Handles listing status changes and updates application availability
     * Called when listings are created, removed, or status changes
     */
    handleListingStatusChange(unitId: string, newStatus: ListingStatus, previousStatus?: ListingStatus): Promise<void>;
    /**
     * Cleans up orphaned applications
     * Removes applications for units that no longer meet eligibility criteria
     */
    cleanupOrphanedApplications(): Promise<{
        cleaned: number;
        errors: string[];
    }>;
    /**
     * Handles application state changes when listing status changes
     * Ensures applications remain consistent with listing availability
     */
    handleApplicationStateOnListingChange(unitId: string, newListingStatus: ListingStatus, previousListingStatus?: ListingStatus, reason?: string): Promise<{
        applicationsAffected: number;
        actions: Array<{
            applicationId: string;
            action: 'MAINTAINED' | 'REJECTED' | 'NOTIFIED';
            reason: string;
        }>;
    }>;
    /**
     * Validates and fixes application-listing associations
     * Ensures all applications have proper relationships with units and properties
     */
    validateAndFixApplicationAssociations(): Promise<{
        checked: number;
        fixed: number;
        errors: string[];
    }>;
    /**
     * Gets comprehensive application integrity report
     * Provides detailed analysis of application data consistency
     */
    getApplicationIntegrityReport(propertyId?: string): Promise<{
        summary: {
            totalApplications: number;
            validApplications: number;
            invalidApplications: number;
            orphanedApplications: number;
            inconsistentApplications: number;
        };
        issues: Array<{
            applicationId: string;
            type: 'ORPHANED' | 'INCONSISTENT' | 'MISSING_UNIT' | 'MISSING_PROPERTY';
            description: string;
            severity: 'LOW' | 'MEDIUM' | 'HIGH';
        }>;
    }>;
    /**
     * Checks if a unit had a recent listing (for grace period functionality)
     */
    private checkRecentListing;
    /**
     * Handles applications when a listing becomes inactive
     */
    private handleApplicationsForInactiveListing;
    /**
     * Enables applications when a unit listing becomes active
     */
    private enableApplicationsForUnit;
}
export declare const applicationControlService: ApplicationControlService;
export declare function createApplicationControlService(config: Partial<ApplicationControlConfig>): ApplicationControlService;
