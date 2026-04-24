export interface LeaseNotificationConfig {
    enableEmailNotifications: boolean;
    enableInAppNotifications: boolean;
    notificationPreferences: {
        leaseActivation: boolean;
        leaseExpiration: boolean;
        leaseTermination: boolean;
        listingRemoval: boolean;
        listingDecisionRequired: boolean;
    };
}
export interface NotificationTemplate {
    subject: string;
    textContent: string;
    htmlContent?: string;
}
export declare class LeaseNotificationService {
    private defaultConfig;
    /**
     * Send notification for lease activation
     */
    sendLeaseActivationNotification(managerEmail: string, unitNumber: string, propertyName: string, leaseId: string): Promise<void>;
    /**
     * Send notification for lease expiration with listing decision prompt
     */
    sendLeaseExpirationNotification(managerEmail: string, unitNumber: string, propertyName: string, unitId: string, leaseId: string): Promise<void>;
    /**
     * Send notification for lease termination with listing decision prompt
     */
    sendLeaseTerminationNotification(managerEmail: string, unitNumber: string, propertyName: string, unitId: string, leaseId: string): Promise<void>;
    /**
     * Send notification when lease is signed (preparation for activation)
     */
    sendLeaseSignedNotification(managerEmail: string, unitNumber: string, propertyName: string, leaseStartDate: Date, leaseId: string): Promise<void>;
    /**
     * Send batch notifications for multiple lease events
     */
    sendBatchNotifications(notifications: Array<{
        type: 'activation' | 'expiration' | 'termination' | 'signed';
        managerEmail: string;
        unitNumber: string;
        propertyName: string;
        leaseId: string;
        unitId?: string;
        leaseStartDate?: Date;
    }>): Promise<void>;
    /**
     * Get user notification preferences
     */
    getUserNotificationConfig(userId: string): Promise<LeaseNotificationConfig>;
    /**
     * Update user notification preferences
     */
    updateUserNotificationConfig(userId: string, config: Partial<LeaseNotificationConfig>): Promise<void>;
    /**
     * Core notification sending method
     */
    private sendNotification;
    /**
     * Log notification in database for audit trail
     */
    private logNotification;
    /**
     * Template for lease activation notification
     */
    private getLeaseActivationTemplate;
    /**
     * Template for lease expiration notification
     */
    private getLeaseExpirationTemplate;
    /**
     * Template for lease termination notification
     */
    private getLeaseTerminationTemplate;
    /**
     * Template for lease signed notification
     */
    private getLeaseSignedTemplate;
}
export declare const leaseNotificationService: LeaseNotificationService;
