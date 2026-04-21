export interface NotificationPreferences {
    emailEnabled: boolean;
    inAppEnabled: boolean;
    daysBeforeExpiration: number[];
}
export interface ExpirationNotification {
    listingId: string;
    unitId: string;
    unitNumber: string;
    title: string;
    expirationDate: Date;
    daysUntilExpiration: number;
    propertyManagerEmails: string[];
}
/**
 * Service for managing listing-related notifications
 */
export declare class ListingNotificationService {
    /**
     * Sends expiration warnings for listings expiring soon
     */
    sendExpirationWarnings(daysAhead?: number): Promise<{
        sent: number;
        errors: string[];
    }>;
    /**
     * Sends notification for a specific expiring listing
     */
    private sendExpirationNotification;
    /**
     * Gets property managers for a unit
     */
    private getPropertyManagers;
    /**
     * Sends email notification about expiring listing
     */
    private sendExpirationEmail;
    /**
     * Creates in-app notifications for property managers
     */
    private createInAppNotifications;
    /**
     * Sends daily digest of expiring listings
     */
    sendDailyExpirationDigest(): Promise<{
        sent: number;
        errors: string[];
    }>;
    /**
     * Gets organizations that have listings expiring in the next 30 days
     */
    private getOrganizationsWithExpiringListings;
    /**
     * Sends digest email for an organization
     */
    private sendOrganizationDigest;
}
export declare const listingNotificationService: ListingNotificationService;
