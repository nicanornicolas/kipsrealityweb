// Property Deactivation Service
// Handles automatic listing removal when properties are deactivated

import { prisma } from './db';
import { listingService } from './listing-service';
import { auditService } from './audit-service';
import { ListingAction, ListingStatus } from './listing-types';
import { Prisma } from '@prisma/client';

type PropertyWithRelatedData = Prisma.PropertyGetPayload<{
  include: {
    units: {
      include: {
        listing: true;
        tenantApplications: {
          where: {
            status: {
              in: ['PENDING', 'UNDER_REVIEW', 'APPROVED'];
            };
          };
        };
      };
    };
    organization: {
      include: {
        users: {
          where: { role: 'PROPERTY_MANAGER' };
          include: { user: true };
        };
      };
    };
  };
}>;

export interface PropertyDeactivationConfig {
  propertyId: string;
  reason: string;
  notifyPropertyManagers?: boolean;
  notifyTenants?: boolean;
  gracePeriodHours?: number; // Allow time before actual deactivation
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
export class PropertyDeactivationService {

  /**
   * Deactivates a property and removes all associated listings
   * Implements comprehensive cleanup and notification system
   */
  async deactivateProperty(
    config: PropertyDeactivationConfig,
    userId: string
  ): Promise<PropertyDeactivationResult> {
    const result: PropertyDeactivationResult = {
      success: false,
      propertyId: config.propertyId,
      unitsAffected: 0,
      listingsRemoved: 0,
      applicationsAffected: 0,
      notificationsSent: 0,
      errors: [],
      canRecover: false
    };

    try {
      // Get property with all related data
      const property = await this.getPropertyWithRelatedData(config.propertyId);
      
      if (!property) {
        result.errors.push(`Property ${config.propertyId} not found`);
        return result;
      }

      // Check if property is already deactivated
      if (property.availabilityStatus === 'DEACTIVATED') {
        result.errors.push('Property is already deactivated');
        return result;
      }

      // Collect recovery data before making changes
      const recoveryData = await this.collectRecoveryData(property, userId);
      result.recoveryData = recoveryData;
      result.canRecover = true;

      // Process deactivation in transaction
      await prisma.$transaction(async (tx) => {
        // Update property status
        await tx.property.update({
          where: { id: config.propertyId },
          data: {
            availabilityStatus: 'DEACTIVATED'
          }
        });

        // Remove all listings for units in this property
        const unitsWithListings = property.units.filter(unit => unit.listing);
        result.unitsAffected = property.units.length;
        result.listingsRemoved = unitsWithListings.length;

        for (const unit of unitsWithListings) {
          if (unit.listing) {
            // Remove the listing
            const removeResult = await listingService.removeListing(
              unit.id,
              userId,
              `Property deactivated: ${config.reason}`
            );

            if (!removeResult.success) {
              result.errors.push(`Failed to remove listing for unit ${unit.unitNumber}: ${removeResult.message}`);
            }
          }
        }

        // Handle affected applications
        const affectedApplications = await this.handleAffectedApplications(
          property.units.map((u: { id: string }) => u.id),
          config.reason,
          tx
        );
        result.applicationsAffected = affectedApplications.length;

        // Create comprehensive audit entry
        await auditService.createAuditEntry({
          unitId: 'PROPERTY_LEVEL',
          action: ListingAction.REMOVE,
          previousStatus: ListingStatus.ACTIVE,
          newStatus: ListingStatus.PRIVATE,
          userId,
          reason: `Property deactivated: ${config.reason}`,
          metadata: {
            propertyId: config.propertyId,
            propertyName: property.name,
            unitsAffected: result.unitsAffected,
            listingsRemoved: result.listingsRemoved,
            applicationsAffected: result.applicationsAffected,
            deactivationType: 'PROPERTY_DEACTIVATION',
            recoveryDataId: recoveryData.propertyId
          }
        }, tx);
      });

      // Send notifications
      if (config.notifyPropertyManagers) {
        const pmNotifications = await this.notifyPropertyManagers(property, config, result);
        result.notificationsSent += pmNotifications;
      }

      if (config.notifyTenants) {
        const tenantNotifications = await this.notifyAffectedTenants(property, config, result);
        result.notificationsSent += tenantNotifications;
      }

      result.success = true;
      console.log('Property deactivation completed:', {
        propertyId: config.propertyId,
        unitsAffected: result.unitsAffected,
        listingsRemoved: result.listingsRemoved,
        applicationsAffected: result.applicationsAffected
      });

      return result;

    } catch (error) {
      console.error('Error deactivating property:', error);
      result.errors.push(error instanceof Error ? error.message : 'Unknown error');
      return result;
    }
  }

  /**
   * Recovers a property from accidental deactivation
   * Restores listings and applications based on recovery data
   */
  async recoverProperty(
    propertyId: string,
    recoveryData: PropertyRecoveryData,
    userId: string,
    reason?: string
  ): Promise<PropertyDeactivationResult> {
    const result: PropertyDeactivationResult = {
      success: false,
      propertyId,
      unitsAffected: 0,
      listingsRemoved: 0, // In recovery, this represents listings restored
      applicationsAffected: 0,
      notificationsSent: 0,
      errors: [],
      canRecover: false
    };

    try {
      // Verify property exists and is deactivated
      const property = await prisma.property.findUnique({
        where: { id: propertyId },
        include: {
          units: true,
          organization: {
            include: {
              users: {
                where: { role: 'PROPERTY_MANAGER' },
                include: { user: true }
              }
            }
          }
        }
      });

      if (!property) {
        result.errors.push(`Property ${propertyId} not found`);
        return result;
      }

      if (property.availabilityStatus !== 'DEACTIVATED') {
        result.errors.push('Property is not currently deactivated');
        return result;
      }

      // Process recovery in transaction
      await prisma.$transaction(async (tx) => {
        // Restore property status
        await tx.property.update({
          where: { id: propertyId },
          data: {
            availabilityStatus: recoveryData.originalStatus
          }
        });

        // Restore listings for units that had them
        const unitsToRestore = recoveryData.affectedUnits.filter(unit => unit.hadListing);
        result.unitsAffected = recoveryData.affectedUnits.length;
        result.listingsRemoved = unitsToRestore.length; // Represents restored listings

        for (const unitData of unitsToRestore) {
          if (unitData.listingData) {
            // Recreate the listing
            const createResult = await listingService.createListing(
              unitData.unitId,
              {
                unitId: unitData.unitId,
                title: unitData.listingData.title,
                description: unitData.listingData.description,
                price: unitData.listingData.price,
                availabilityDate: unitData.listingData.availabilityDate,
                expirationDate: unitData.listingData.expirationDate
              },
              userId,
              property.organizationId || 'system'
            );

            if (!createResult.success) {
              result.errors.push(`Failed to restore listing for unit ${unitData.unitNumber}: ${createResult.message}`);
            }
          }
        }

        // Create audit entry for recovery
        await auditService.createAuditEntry({
          unitId: 'PROPERTY_LEVEL',
          action: ListingAction.CREATE,
          previousStatus: ListingStatus.PRIVATE,
          newStatus: ListingStatus.ACTIVE,
          userId,
          reason: reason || `Property recovered from deactivation`,
          metadata: {
            propertyId,
            propertyName: property.name,
            unitsRestored: result.unitsAffected,
            listingsRestored: result.listingsRemoved,
            recoveryType: 'PROPERTY_RECOVERY',
            originalDeactivationDate: recoveryData.deactivationTimestamp
          }
        }, tx);
      });

      // Send recovery notifications
      const notifications = await this.notifyPropertyManagersOfRecovery(property, result);
      result.notificationsSent = notifications;

      result.success = true;
      console.log('Property recovery completed:', {
        propertyId,
        unitsRestored: result.unitsAffected,
        listingsRestored: result.listingsRemoved
      });

      return result;

    } catch (error) {
      console.error('Error recovering property:', error);
      result.errors.push(error instanceof Error ? error.message : 'Unknown error');
      return result;
    }
  }

  /**
   * Gets properties that are scheduled for deactivation
   */
  async getScheduledDeactivations(): Promise<Array<{
    propertyId: string;
    propertyName: string;
    scheduledDate: Date;
    reason: string;
    unitsCount: number;
    listingsCount: number;
  }>> {
    try {
      // In a full implementation, this would check a scheduled deactivations table
      // For now, return empty array as we don't have scheduled deactivations implemented
      return [];

    } catch (error) {
      console.error('Error getting scheduled deactivations:', error);
      return [];
    }
  }

  /**
   * Gets recovery data for a deactivated property
   */
  async getRecoveryData(propertyId: string): Promise<PropertyRecoveryData | null> {
    try {
      // In a full implementation, this would retrieve stored recovery data
      // For now, we'll reconstruct it from audit entries
      const auditEntries = await auditService.getPropertyAuditHistory(propertyId);
      
      const deactivationEntry = auditEntries.find(entry => 
        entry.metadata?.deactivationType === 'PROPERTY_DEACTIVATION'
      );

      if (!deactivationEntry || !deactivationEntry.metadata) {
        return null;
      }

      // Reconstruct recovery data from audit metadata
      const affectedUnits = Array.isArray(deactivationEntry.metadata.affectedUnits) 
        ? deactivationEntry.metadata.affectedUnits as PropertyRecoveryData['affectedUnits']
        : [];
      const affectedApplications = Array.isArray(deactivationEntry.metadata.affectedApplications)
        ? deactivationEntry.metadata.affectedApplications as PropertyRecoveryData['affectedApplications']
        : [];
      
      return {
        propertyId,
        originalStatus: 'ACTIVE', // Default assumption
        deactivationTimestamp: deactivationEntry.timestamp,
        affectedUnits,
        affectedApplications
      };

    } catch (error) {
      console.error('Error getting recovery data:', error);
      return null;
    }
  }

  /**
   * Gets property with all related data needed for deactivation
   */
  private async getPropertyWithRelatedData(
    propertyId: string
  ): Promise<PropertyWithRelatedData | null> {
    const property = await prisma.property.findUnique({
      where: { id: propertyId },
      include: {
        units: {
          include: {
            listing: true,
            tenantApplications: {
              where: {
                status: {
                  in: ['PENDING', 'UNDER_REVIEW', 'APPROVED']
                }
              }
            }
          }
        },
        organization: {
          include: {
            users: {
              where: { role: 'PROPERTY_MANAGER' },
              include: { user: true }
            }
          }
        }
      }
    });
    return property as PropertyWithRelatedData | null;
  }

  /**
   * Collects recovery data before deactivation
   */
  private async collectRecoveryData(property: any, userId: string): Promise<PropertyRecoveryData> {
    const recoveryData: PropertyRecoveryData = {
      propertyId: property.id,
      originalStatus: property.availabilityStatus || 'ACTIVE',
      deactivationTimestamp: new Date(),
      affectedUnits: [],
      affectedApplications: []
    };

    // Collect unit and listing data
    for (const unit of property.units) {
      const unitData = {
        unitId: unit.id,
        unitNumber: unit.unitNumber,
        hadListing: !!unit.listing,
        listingData: unit.listing ? {
          title: unit.listing.title,
          description: unit.listing.description,
          price: unit.listing.price,
          availabilityDate: unit.listing.availabilityDate,
          expirationDate: unit.listing.expirationDate
        } : undefined
      };
      recoveryData.affectedUnits.push(unitData);

      // Collect application data
      for (const application of unit.tenantApplications || []) {
        recoveryData.affectedApplications.push({
          applicationId: application.id,
          unitId: unit.id,
          applicantEmail: application.email,
          status: application.status
        });
      }
    }

    return recoveryData;
  }

  /**
   * Handles affected applications during deactivation
   */
  private async handleAffectedApplications(
    unitIds: string[],
    reason: string,
    tx: any
  ): Promise<string[]> {
    try {
      // Get all pending applications for the units
      const applications = await tx.tenantapplication.findMany({
        where: {
          unitId: { in: unitIds },
          status: {
            in: ['PENDING', 'UNDER_REVIEW', 'APPROVED']
          }
        }
      });

      // Update application status to reflect property deactivation
      if (applications.length > 0) {
        await tx.tenantapplication.updateMany({
          where: {
            id: { in: applications.map((app: { id: string }) => app.id) }
          },
          data: {
            status: 'CANCELLED',
            updatedAt: new Date()
          }
        });
      }

      return applications.map((app: { id: string }) => app.id);

    } catch (error) {
      console.error('Error handling affected applications:', error);
      return [];
    }
  }

  /**
   * Notifies property managers about deactivation
   */
  private async notifyPropertyManagers(
    property: any,
    config: PropertyDeactivationConfig,
    result: PropertyDeactivationResult
  ): Promise<number> {
    try {
      const propertyManagers: Array<{ user: { email: string } }> = property.organization?.users || [];
      
      if (propertyManagers.length === 0) {
        return 0;
      }

      // In a full implementation, this would send actual notifications
      console.log('Property Manager Deactivation Notification:', {
        propertyId: property.id,
        propertyName: property.name,
        reason: config.reason,
        unitsAffected: result.unitsAffected,
        listingsRemoved: result.listingsRemoved,
        applicationsAffected: result.applicationsAffected,
        recipients: propertyManagers.map((pm) => pm.user.email),
        timestamp: new Date()
      });

      return propertyManagers.length;

    } catch (error) {
      console.error('Error notifying property managers:', error);
      return 0;
    }
  }

  /**
   * Notifies affected tenants about deactivation
   */
  private async notifyAffectedTenants(
    property: any,
    config: PropertyDeactivationConfig,
    result: PropertyDeactivationResult
  ): Promise<number> {
    try {
      // Get all applicants for units in this property
      const allApplications = property.units.flatMap((unit: any) => unit.tenantApplications || []);
      
      if (allApplications.length === 0) {
        return 0;
      }

      // In a full implementation, this would send actual notifications
      console.log('Tenant Deactivation Notification:', {
        propertyId: property.id,
        propertyName: property.name,
        reason: config.reason,
        affectedApplications: allApplications.length,
        recipients: allApplications.map((app: any) => app.email),
        timestamp: new Date()
      });

      return allApplications.length;

    } catch (error) {
      console.error('Error notifying affected tenants:', error);
      return 0;
    }
  }

  /**
   * Notifies property managers about recovery
   */
  private async notifyPropertyManagersOfRecovery(
    property: any,
    result: PropertyDeactivationResult
  ): Promise<number> {
    try {
      const propertyManagers: Array<{ user: { email: string } }> = property.organization?.users || [];
      
      if (propertyManagers.length === 0) {
        return 0;
      }

      // In a full implementation, this would send actual notifications
      console.log('Property Manager Recovery Notification:', {
        propertyId: property.id,
        propertyName: property.name,
        unitsRestored: result.unitsAffected,
        listingsRestored: result.listingsRemoved,
        recipients: propertyManagers.map((pm) => pm.user.email),
        timestamp: new Date()
      });

      return propertyManagers.length;

    } catch (error) {
      console.error('Error notifying property managers of recovery:', error);
      return 0;
    }
  }
}

// Export singleton instance
export const propertyDeactivationService = new PropertyDeactivationService();
