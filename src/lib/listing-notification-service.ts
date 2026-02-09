// Listing Notification Service
// Handles notifications for listing events like expiration warnings

import { prisma } from './db';
import { listingService } from './listing-service';

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
export class ListingNotificationService {
    
    /**
     * Sends expiration warnings for listings expiring soon
     */
    async sendExpirationWarnings(daysAhead: number = 7): Promise<{
        sent: number;
        errors: string[];
    }> {
        const result = {
            sent: 0,
            errors: [] as string[]
        };

        try {
            // Get listings expiring soon
            const expiringSoon = await listingService.getExpiringSoonListings(daysAhead);
            
            if (!expiringSoon.success || !expiringSoon.data) {
                result.errors.push('Failed to get expiring listings');
                return result;
            }

            // Process each expiring listing
            for (const listing of expiringSoon.data) {
                try {
                    await this.sendExpirationNotification(listing);
                    result.sent++;
                } catch (error) {
                    const errorMsg = `Failed to send notification for listing ${listing.listingId}: ${error instanceof Error ? error.message : 'Unknown error'}`;
                    result.errors.push(errorMsg);
                    console.error(errorMsg);
                }
            }

            console.log('Expiration warnings sent:', result);
            return result;

        } catch (error) {
            const errorMsg = `Failed to send expiration warnings: ${error instanceof Error ? error.message : 'Unknown error'}`;
            result.errors.push(errorMsg);
            console.error(errorMsg);
            return result;
        }
    }

    /**
     * Sends notification for a specific expiring listing
     */
    private async sendExpirationNotification(listing: {
        listingId: string;
        unitId: string;
        unitNumber: string;
        title: string;
        expirationDate: Date;
        daysUntilExpiration: number;
    }): Promise<void> {
        try {
            // Get property manager details
            const propertyManagers = await this.getPropertyManagers(listing.unitId);
            
            if (propertyManagers.length === 0) {
                console.warn(`No property managers found for unit ${listing.unitId}`);
                return;
            }

            // Create notification data
            const notification: ExpirationNotification = {
                ...listing,
                propertyManagerEmails: propertyManagers.map(pm => pm.email)
            };

            // Send email notifications
            await this.sendExpirationEmail(notification);
            
            // Create in-app notifications
            await this.createInAppNotifications(notification, propertyManagers);

            console.log('Expiration notification sent:', {
                listingId: listing.listingId,
                unitNumber: listing.unitNumber,
                daysUntilExpiration: listing.daysUntilExpiration,
                recipientCount: propertyManagers.length
            });

        } catch (error) {
            console.error('Error sending expiration notification:', error);
            throw error;
        }
    }

    /**
     * Gets property managers for a unit
     */
    private async getPropertyManagers(unitId: string): Promise<Array<{
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
    }>> {
        try {
            const unit = await prisma.unit.findUnique({
                where: { id: unitId },
                include: {
                    property: {
                        include: {
                            organization: {
                                include: {
                                    users: {
                                        where: {
                                            role: 'PROPERTY_MANAGER'
                                        },
                                        include: {
                                            user: {
                                                select: {
                                                    id: true,
                                                    email: true,
                                                    firstName: true,
                                                    lastName: true
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });

            if (!unit?.property?.organization?.users) {
                return [];
            }

            return unit.property.organization.users.map(orgUser => orgUser.user);

        } catch (error) {
            console.error('Error getting property managers:', error);
            return [];
        }
    }

    /**
     * Sends email notification about expiring listing
     */
    private async sendExpirationEmail(notification: ExpirationNotification): Promise<void> {
        try {
            // In a full implementation, this would:
            // 1. Use an email service (SendGrid, AWS SES, etc.)
            // 2. Send personalized emails to each property manager
            // 3. Include listing details and action buttons
            // 4. Track email delivery status

            console.log('Email Notification (Simulated):', {
                to: notification.propertyManagerEmails,
                subject: `Listing Expiring Soon: ${notification.title}`,
                listingId: notification.listingId,
                unitNumber: notification.unitNumber,
                expirationDate: notification.expirationDate,
                daysUntilExpiration: notification.daysUntilExpiration
            });

            // Simulate email sending delay
            await new Promise(resolve => setTimeout(resolve, 100));

        } catch (error) {
            console.error('Error sending expiration email:', error);
            throw error;
        }
    }

    /**
     * Creates in-app notifications for property managers
     */
    private async createInAppNotifications(
        notification: ExpirationNotification,
        propertyManagers: Array<{ id: string; email: string; firstName: string | null; lastName: string | null }>
    ): Promise<void> {
        try {
            // In a full implementation, this would:
            // 1. Create notification records in the database
            // 2. Send real-time notifications via WebSocket
            // 3. Update notification badges in the UI
            // 4. Track notification read status

            console.log('In-App Notifications (Simulated):', {
                recipientIds: propertyManagers.map(pm => pm.id),
                type: 'LISTING_EXPIRING',
                title: 'Listing Expiring Soon',
                message: `Your listing "${notification.title}" (Unit ${notification.unitNumber}) expires in ${notification.daysUntilExpiration} day(s)`,
                listingId: notification.listingId,
                unitId: notification.unitId,
                expirationDate: notification.expirationDate
            });

        } catch (error) {
            console.error('Error creating in-app notifications:', error);
            throw error;
        }
    }

    /**
     * Sends daily digest of expiring listings
     */
    async sendDailyExpirationDigest(): Promise<{
        sent: number;
        errors: string[];
    }> {
        const result = {
            sent: 0,
            errors: [] as string[]
        };

        try {
            // Get all organizations with expiring listings
            const organizations = await this.getOrganizationsWithExpiringListings();

            for (const org of organizations) {
                try {
                    await this.sendOrganizationDigest(org);
                    result.sent++;
                } catch (error) {
                    const errorMsg = `Failed to send digest for organization ${org.id}: ${error instanceof Error ? error.message : 'Unknown error'}`;
                    result.errors.push(errorMsg);
                    console.error(errorMsg);
                }
            }

            return result;

        } catch (error) {
            const errorMsg = `Failed to send daily expiration digest: ${error instanceof Error ? error.message : 'Unknown error'}`;
            result.errors.push(errorMsg);
            console.error(errorMsg);
            return result;
        }
    }

    /**
     * Gets organizations that have listings expiring in the next 30 days
     */
    private async getOrganizationsWithExpiringListings(): Promise<Array<{
        id: string;
        name: string;
        propertyManagers: Array<{
            id: string;
            email: string;
            firstName: string | null;
            lastName: string | null;
        }>;
        expiringListings: Array<{
            listingId: string;
            unitNumber: string;
            title: string;
            expirationDate: Date;
            daysUntilExpiration: number;
        }>;
    }>> {
        try {
            const now = new Date();
            const futureDate = new Date();
            futureDate.setDate(now.getDate() + 30);

            const organizations = await prisma.organization.findMany({
                where: {
                    listings: {
                        some: {
                            expirationDate: {
                                gte: now,
                                lte: futureDate
                            }
                        }
                    }
                },
                include: {
                    users: {
                        where: {
                            role: 'PROPERTY_MANAGER'
                        },
                        include: {
                            user: {
                                select: {
                                    id: true,
                                    email: true,
                                    firstName: true,
                                    lastName: true
                                }
                            }
                        }
                    },
                    listings: {
                        where: {
                            expirationDate: {
                                gte: now,
                                lte: futureDate
                            }
                        },
                        include: {
                            unit: {
                                select: {
                                    unitNumber: true
                                }
                            }
                        },
                        orderBy: {
                            expirationDate: 'asc'
                        }
                    }
                }
            });

            return organizations.map(org => ({
                id: org.id,
                name: org.name,
                propertyManagers: org.users.map(orgUser => orgUser.user),
                expiringListings: org.listings.map(listing => ({
                    listingId: listing.id,
                    unitNumber: listing.unit?.unitNumber || 'Unknown',
                    title: listing.title,
                    expirationDate: listing.expirationDate!,
                    daysUntilExpiration: Math.ceil(
                        (listing.expirationDate!.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
                    )
                }))
            }));

        } catch (error) {
            console.error('Error getting organizations with expiring listings:', error);
            return [];
        }
    }

    /**
     * Sends digest email for an organization
     */
    private async sendOrganizationDigest(org: {
        id: string;
        name: string;
        propertyManagers: Array<{
            id: string;
            email: string;
            firstName: string | null;
            lastName: string | null;
        }>;
        expiringListings: Array<{
            listingId: string;
            unitNumber: string;
            title: string;
            expirationDate: Date;
            daysUntilExpiration: number;
        }>;
    }): Promise<void> {
        try {
            if (org.propertyManagers.length === 0 || org.expiringListings.length === 0) {
                return;
            }

            // In a full implementation, this would send a comprehensive digest email
            console.log('Daily Digest (Simulated):', {
                organizationId: org.id,
                organizationName: org.name,
                recipientEmails: org.propertyManagers.map(pm => pm.email),
                expiringListingsCount: org.expiringListings.length,
                expiringListings: org.expiringListings.slice(0, 5), // Show first 5 in log
                timestamp: new Date()
            });

        } catch (error) {
            console.error('Error sending organization digest:', error);
            throw error;
        }
    }
}

// Export singleton instance
export const listingNotificationService = new ListingNotificationService();