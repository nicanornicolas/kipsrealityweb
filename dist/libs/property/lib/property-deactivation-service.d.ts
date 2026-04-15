export interface PropertyDeactivationConfig {
    propertyId: string;
    reason: string;
    notifyPropertyManagers?: boolean;
    notifyTenants?: boolean;
    gracePeriodHours?: number;
}
export interface PropertyDeactivationResult {
    success: boolean;
    propertyId: string;
    unitsAffected: number;
    listingsRemoved: number;
    applicationsAffected: number;
    notificationsSent: number;
    errors: string[];
    canRecover: boolean;
    recoveryData?: PropertyRecoveryData;
}
export interface PropertyRecoveryData {
    propertyId: string;
    originalStatus: string;
    deactivationTimestamp: Date;
    affectedUnits: Array<{
        unitId: string;
        unitNumber: string;
        hadListing: boolean;
        listingData?: {
            title: string;
            description: string;
            price: number;
            availabilityDate?: Date;
            expirationDate?: Date;
        };
    }>;
    affectedApplications: Array<{
        applicationId: string;
        unitId: string;
        applicantEmail: string;
        status: string;
    }>;
}
/**
 * Service for managing property deactivation and its cascading effects
 */
export declare class PropertyDeactivationService {
    /**
     * Deactivates a property and removes all associated listings
     * Implements comprehensive cleanup and notification system
     */
    deactivateProperty(config: PropertyDeactivationConfig, userId: string): Promise<PropertyDeactivationResult>;
    /**
     * Recovers a property from accidental deactivation
     * Restores listings and applications based on recovery data
     */
    recoverProperty(propertyId: string, recoveryData: PropertyRecoveryData, userId: string, reason?: string): Promise<PropertyDeactivationResult>;
    /**
     * Gets properties that are scheduled for deactivation
     */
    getScheduledDeactivations(): Promise<Array<{
        propertyId: string;
        propertyName: string;
        scheduledDate: Date;
        reason: string;
        unitsCount: number;
        listingsCount: number;
    }>>;
    /**
     * Gets recovery data for a deactivated property
     */
    getRecoveryData(propertyId: string): Promise<PropertyRecoveryData | null>;
    /**
     * Gets property with all related data needed for deactivation
     */
    private getPropertyWithRelatedData;
    /**
     * Collects recovery data before deactivation
     */
    private collectRecoveryData;
    /**
     * Handles affected applications during deactivation
     */
    private handleAffectedApplications;
    /**
     * Notifies property managers about deactivation
     */
    private notifyPropertyManagers;
    /**
     * Notifies affected tenants about deactivation
     */
    private notifyAffectedTenants;
    /**
     * Notifies property managers about recovery
     */
    private notifyPropertyManagersOfRecovery;
}
export declare const propertyDeactivationService: PropertyDeactivationService;
