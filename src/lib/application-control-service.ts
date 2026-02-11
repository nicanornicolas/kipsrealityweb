// Application Control Service - Manages tenant application functionality based on listing status
// Ensures applications are only enabled for units with active marketplace listings

import { prisma } from "./db";
import { ListingStatus } from "./listing-types";

export interface ApplicationEligibilityResult {
  isEligible: boolean;
  reason?: string;
  listingStatus?: ListingStatus;
  unitId: string;
}

export interface ApplicationControlConfig {
  requireActiveListing: boolean;
  allowedStatuses: ListingStatus[];
  gracePeriodHours?: number; // Allow applications for recently delisted units
}

/**
 * Service for controlling tenant application functionality based on listing status
 * Implements business rules for when applications should be enabled/disabled
 */
export class ApplicationControlService {
  private config: ApplicationControlConfig;

  constructor(config?: Partial<ApplicationControlConfig>) {
    this.config = {
      requireActiveListing: true,
      allowedStatuses: [ListingStatus.ACTIVE],
      gracePeriodHours: 0, // No grace period by default
      ...config
    };
  }

  /**
   * Checks if a unit is eligible for tenant applications
   * Returns detailed eligibility information with reasons
   */
  async checkApplicationEligibility(unitId: string): Promise<ApplicationEligibilityResult> {
    try {
      // Get unit with listing information
      const unit = await prisma.unit.findUnique({
        where: { id: unitId },
        include: {
          listing: true,
          leases: {
            where: {
              leaseStatus: {
                in: ['ACTIVE', 'PENDING_APPROVAL']
              }
            }
          }
        }
      });

      if (!unit) {
        return {
          isEligible: false,
          reason: 'Unit not found',
          unitId
        };
      }

      // Check if unit has active lease (should not accept applications)
      if (unit.leases && unit.leases.length > 0) {
        return {
          isEligible: false,
          reason: 'Unit has an active lease and is not available for applications',
          unitId
        };
      }

      // If no listing requirement, unit is eligible
      if (!this.config.requireActiveListing) {
        return {
          isEligible: true,
          unitId
        };
      }

      // Check if unit has a listing
      if (!unit.listing) {
        // Check if there was a recent listing (grace period)
        if (this.config.gracePeriodHours && this.config.gracePeriodHours > 0) {
          const recentListing = await this.checkRecentListing(unitId);
          if (recentListing) {
            return {
              isEligible: true,
              reason: 'Unit recently delisted but still within grace period',
              listingStatus: ListingStatus.PRIVATE,
              unitId
            };
          }
        }

        return {
          isEligible: false,
          reason: 'Unit is not currently listed on the marketplace',
          listingStatus: ListingStatus.PRIVATE,
          unitId
        };
      }

      // Determine listing status based on availability date
      // Current schema doesn't have status field, so we need to infer it
      let listingStatus = ListingStatus.ACTIVE;
      
      if (unit.listing.availabilityDate) {
        const now = new Date();
        const availDate = new Date(unit.listing.availabilityDate);
        
        if (availDate > now) {
          listingStatus = ListingStatus.COMING_SOON;
        }
      }

      // Check if listing status is allowed
      if (!this.config.allowedStatuses.includes(listingStatus)) {
        let reason = `Unit listing status (${listingStatus}) does not allow applications`;
        
        // Provide specific reasons for different statuses
        if (listingStatus === ListingStatus.COMING_SOON) {
          const availDate = unit.listing.availabilityDate ? new Date(unit.listing.availabilityDate) : null;
          const availDateStr = availDate ? availDate.toLocaleDateString() : 'a future date';
          reason = `Unit is listed as "Coming Soon" and will be available for applications on ${availDateStr}`;
        }
        
        return {
          isEligible: false,
          reason,
          listingStatus,
          unitId
        };
      }

      return {
        isEligible: true,
        listingStatus,
        unitId
      };

    } catch (error) {
      console.error('Error checking application eligibility:', error);
      return {
        isEligible: false,
        reason: 'Error checking unit eligibility',
        unitId
      };
    }
  }

  /**
   * Checks multiple units for application eligibility
   * Useful for bulk operations and marketplace displays
   */
  async checkMultipleUnitsEligibility(unitIds: string[]): Promise<ApplicationEligibilityResult[]> {
    const results = await Promise.all(
      unitIds.map(unitId => this.checkApplicationEligibility(unitId))
    );
    return results;
  }

  /**
   * Gets all units that are eligible for applications
   * Useful for marketplace filtering and property manager dashboards
   */
  async getEligibleUnits(propertyId?: string): Promise<{
    unitId: string;
    unitNumber: string;
    listingStatus: ListingStatus;
  }[]> {
    try {
      const whereClause: any = {
        listing: {
          isNot: null // Only units with listings
        },
        leases: {
          none: {
            leaseStatus: {
              in: ['ACTIVE', 'PENDING_APPROVAL']
            }
          }
        }
      };

      if (propertyId) {
        whereClause.propertyId = propertyId;
      }

      const units = await prisma.unit.findMany({
        where: whereClause,
        select: {
          id: true,
          unitNumber: true,
          listing: {
            select: {
              id: true,
              createdAt: true
            }
          }
        }
      });

      return units.map(unit => ({
        unitId: unit.id,
        unitNumber: unit.unitNumber,
        listingStatus: ListingStatus.ACTIVE // Current schema assumption
      }));

    } catch (error) {
      console.error('Error getting eligible units:', error);
      return [];
    }
  }

  /**
   * Validates application data integrity
   * Ensures applications maintain proper associations with listings
   */
  async validateApplicationDataIntegrity(applicationId: string): Promise<{
    isValid: boolean;
    issues: string[];
  }> {
    try {
      const application = await prisma.tenantapplication.findUnique({
        where: { id: applicationId },
        include: {
          unit: {
            include: {
              listing: true,
              property: true
            }
          },
          property: true
        }
      });

      if (!application) {
        return {
          isValid: false,
          issues: ['Application not found']
        };
      }

      const issues: string[] = [];

      // Check unit association
      if (!application.unit) {
        issues.push('Application has no associated unit');
      } else {
        // Check if unit still has listing (if required)
        if (this.config.requireActiveListing && !application.unit.listing) {
          issues.push('Application unit no longer has an active listing');
        }

        // Check property consistency
        if (application.propertyId !== application.unit.propertyId) {
          issues.push('Application property ID does not match unit property ID');
        }
      }

      // Check property association
      if (!application.property) {
        issues.push('Application has no associated property');
      }

      return {
        isValid: issues.length === 0,
        issues
      };

    } catch (error) {
      console.error('Error validating application data integrity:', error);
      return {
        isValid: false,
        issues: ['Error validating application data']
      };
    }
  }

  /**
   * Handles listing status changes and updates application availability
   * Called when listings are created, removed, or status changes
   */
  async handleListingStatusChange(
    unitId: string,
    newStatus: ListingStatus,
    previousStatus?: ListingStatus
  ): Promise<void> {
    try {
      // Log the status change for audit purposes
      console.log('Application Control - Listing Status Change:', {
        unitId,
        previousStatus,
        newStatus,
        timestamp: new Date()
      });

      // If listing becomes inactive, handle existing applications
      if (previousStatus === ListingStatus.ACTIVE && newStatus !== ListingStatus.ACTIVE) {
        await this.handleApplicationsForInactiveListing(unitId, newStatus);
      }

      // If listing becomes active, enable applications
      if (newStatus === ListingStatus.ACTIVE && previousStatus !== ListingStatus.ACTIVE) {
        await this.enableApplicationsForUnit(unitId);
      }

    } catch (error) {
      console.error('Error handling listing status change:', error);
    }
  }

  /**
   * Cleans up orphaned applications
   * Removes applications for units that no longer meet eligibility criteria
   */
  async cleanupOrphanedApplications(): Promise<{
    cleaned: number;
    errors: string[];
  }> {
    try {
      const errors: string[] = [];
      let cleaned = 0;

      // Find applications for units without listings (if listings are required)
      if (this.config.requireActiveListing) {
        const orphanedApplications = await prisma.tenantapplication.findMany({
          where: {
            unit: {
              listing: null
            },
            status: 'PENDING' // Only clean up pending applications
          },
          include: {
            unit: true
          }
        });

        for (const application of orphanedApplications) {
          try {
            // Check if application is within grace period
            if (this.config.gracePeriodHours && this.config.gracePeriodHours > 0) {
              const recentListing = await this.checkRecentListing(application.unitId || '');
              if (recentListing) {
                continue; // Skip cleanup for applications within grace period
              }
            }

            // Update application status to indicate unit is no longer available
            await prisma.tenantapplication.update({
              where: { id: application.id },
              data: {
                status: 'REJECTED',
                // Note: Current schema doesn't have rejection reason field
                // In a full implementation, this would be added
              }
            });

            cleaned++;
          } catch (error) {
            errors.push(`Failed to clean up application ${application.id}: ${error instanceof Error ? error.message : 'Unknown error'}`);
          }
        }
      }

      return { cleaned, errors };

    } catch (error) {
      console.error('Error cleaning up orphaned applications:', error);
      return {
        cleaned: 0,
        errors: [`Cleanup failed: ${error instanceof Error ? error.message : 'Unknown error'}`]
      };
    }
  }

  /**
   * Handles application state changes when listing status changes
   * Ensures applications remain consistent with listing availability
   */
  async handleApplicationStateOnListingChange(
    unitId: string,
    newListingStatus: ListingStatus,
    previousListingStatus?: ListingStatus,
    reason?: string
  ): Promise<{
    applicationsAffected: number;
    actions: Array<{
      applicationId: string;
      action: 'MAINTAINED' | 'REJECTED' | 'NOTIFIED';
      reason: string;
    }>;
  }> {
    try {
      const actions: Array<{
        applicationId: string;
        action: 'MAINTAINED' | 'REJECTED' | 'NOTIFIED';
        reason: string;
      }> = [];

      // Get all pending applications for this unit
      const pendingApplications = await prisma.tenantapplication.findMany({
        where: {
          unitId,
          status: 'PENDING'
        }
      });

      for (const application of pendingApplications) {
        let action: 'MAINTAINED' | 'REJECTED' | 'NOTIFIED' = 'MAINTAINED';
        let actionReason = reason || 'Listing status changed';

        // Determine action based on new listing status
        switch (newListingStatus) {
          case ListingStatus.PRIVATE:
            // Unit made private - reject pending applications
            await prisma.tenantapplication.update({
              where: { id: application.id },
              data: { status: 'REJECTED' }
            });
            action = 'REJECTED';
            actionReason = 'Unit removed from marketplace';
            break;

          case ListingStatus.SUSPENDED:
            // Unit suspended - notify applicants but keep applications pending
            action = 'NOTIFIED';
            actionReason = 'Unit temporarily suspended';
            break;

          case ListingStatus.MAINTENANCE:
            // Unit in maintenance - notify applicants, keep applications pending
            action = 'NOTIFIED';
            actionReason = 'Unit temporarily unavailable for maintenance';
            break;

          case ListingStatus.EXPIRED:
            // Listing expired - reject applications
            await prisma.tenantapplication.update({
              where: { id: application.id },
              data: { status: 'REJECTED' }
            });
            action = 'REJECTED';
            actionReason = 'Listing has expired';
            break;

          case ListingStatus.ACTIVE:
            // Unit became active - maintain applications
            action = 'MAINTAINED';
            actionReason = 'Unit is now available for applications';
            break;

          default:
            // Unknown status - maintain applications but log warning
            console.warn(`Unknown listing status: ${newListingStatus} for unit ${unitId}`);
            action = 'MAINTAINED';
            actionReason = 'Status change processed';
        }

        actions.push({
          applicationId: application.id,
          action,
          reason: actionReason
        });

        // Log the action for audit purposes
        console.log(`Application ${application.id} ${action.toLowerCase()} due to listing status change: ${previousListingStatus} -> ${newListingStatus}`);
      }

      return {
        applicationsAffected: pendingApplications.length,
        actions
      };

    } catch (error) {
      console.error('Error handling application state on listing change:', error);
      return {
        applicationsAffected: 0,
        actions: []
      };
    }
  }

  /**
   * Validates and fixes application-listing associations
   * Ensures all applications have proper relationships with units and properties
   */
  async validateAndFixApplicationAssociations(): Promise<{
    checked: number;
    fixed: number;
    errors: string[];
  }> {
    try {
      const errors: string[] = [];
      let checked = 0;
      let fixed = 0;

      // Get all applications with their relationships
      const applications = await prisma.tenantapplication.findMany({
        include: {
          unit: {
            include: {
              property: true
            }
          },
          property: true
        }
      });

      for (const application of applications) {
        checked++;

        try {
          let needsUpdate = false;
          const updateData: any = {};

          // Check unit-property consistency
          if (application.unit && application.unit.property) {
            if (application.propertyId !== application.unit.property.id) {
              updateData.propertyId = application.unit.property.id;
              needsUpdate = true;
            }
          }

          // Check if unit exists but property reference is missing
          if (application.unit && !application.property) {
            if (application.unit.property) {
              updateData.propertyId = application.unit.property.id;
              needsUpdate = true;
            }
          }

          // Check if property exists but unit reference is inconsistent
          if (application.property && application.unit) {
            if (application.unit.propertyId !== application.property.id) {
              // This is a more serious inconsistency - log as error
              errors.push(`Application ${application.id} has inconsistent unit-property relationship`);
            }
          }

          // Apply fixes if needed
          if (needsUpdate) {
            await prisma.tenantapplication.update({
              where: { id: application.id },
              data: updateData
            });
            fixed++;
          }

        } catch (error) {
          errors.push(`Failed to validate application ${application.id}: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
      }

      return { checked, fixed, errors };

    } catch (error) {
      console.error('Error validating application associations:', error);
      return {
        checked: 0,
        fixed: 0,
        errors: [`Validation failed: ${error instanceof Error ? error.message : 'Unknown error'}`]
      };
    }
  }

  /**
   * Gets comprehensive application integrity report
   * Provides detailed analysis of application data consistency
   */
  async getApplicationIntegrityReport(propertyId?: string): Promise<{
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
  }> {
    try {
      const whereClause: any = {};
      if (propertyId) {
        whereClause.propertyId = propertyId;
      }

      const applications = await prisma.tenantapplication.findMany({
        where: whereClause,
        include: {
          unit: {
            include: {
              listing: true,
              property: true
            }
          },
          property: true
        }
      });

      const issues: Array<{
        applicationId: string;
        type: 'ORPHANED' | 'INCONSISTENT' | 'MISSING_UNIT' | 'MISSING_PROPERTY';
        description: string;
        severity: 'LOW' | 'MEDIUM' | 'HIGH';
      }> = [];

      let validApplications = 0;
      let orphanedApplications = 0;
      let inconsistentApplications = 0;

      for (const application of applications) {
        let isValid = true;

        // Check for missing unit
        if (!application.unit) {
          issues.push({
            applicationId: application.id,
            type: 'MISSING_UNIT',
            description: 'Application has no associated unit',
            severity: 'HIGH'
          });
          isValid = false;
        }

        // Check for missing property
        if (!application.property) {
          issues.push({
            applicationId: application.id,
            type: 'MISSING_PROPERTY',
            description: 'Application has no associated property',
            severity: 'HIGH'
          });
          isValid = false;
        }

        // Check for orphaned applications (unit without listing)
        if (application.unit && !application.unit.listing && this.config.requireActiveListing) {
          issues.push({
            applicationId: application.id,
            type: 'ORPHANED',
            description: 'Application for unit without active listing',
            severity: 'MEDIUM'
          });
          orphanedApplications++;
          isValid = false;
        }

        // Check for inconsistent relationships
        if (application.unit && application.property) {
          if (application.unit.propertyId !== application.property.id) {
            issues.push({
              applicationId: application.id,
              type: 'INCONSISTENT',
              description: 'Unit and property references are inconsistent',
              severity: 'HIGH'
            });
            inconsistentApplications++;
            isValid = false;
          }
        }

        if (isValid) {
          validApplications++;
        }
      }

      return {
        summary: {
          totalApplications: applications.length,
          validApplications,
          invalidApplications: applications.length - validApplications,
          orphanedApplications,
          inconsistentApplications
        },
        issues
      };

    } catch (error) {
      console.error('Error generating application integrity report:', error);
      return {
        summary: {
          totalApplications: 0,
          validApplications: 0,
          invalidApplications: 0,
          orphanedApplications: 0,
          inconsistentApplications: 0
        },
        issues: []
      };
    }
  }

  /**
   * Checks if a unit had a recent listing (for grace period functionality)
   */
  private async checkRecentListing(unitId: string): Promise<boolean> {
    if (!this.config.gracePeriodHours || this.config.gracePeriodHours <= 0) {
      return false;
    }

    try {
      // In a full implementation, this would check the audit trail
      // For now, return false since we don't have historical listing data
      return false;
    } catch (error) {
      console.error('Error checking recent listing:', error);
      return false;
    }
  }

  /**
   * Handles applications when a listing becomes inactive
   */
  private async handleApplicationsForInactiveListing(
    unitId: string,
    newStatus: ListingStatus
  ): Promise<void> {
    try {
      // Find pending applications for this unit
      const pendingApplications = await prisma.tenantapplication.findMany({
        where: {
          unitId,
          status: 'PENDING'
        }
      });

      // Update applications based on new status
      for (const application of pendingApplications) {
        if (newStatus === ListingStatus.MAINTENANCE) {
          // For maintenance, keep applications but notify applicants
          console.log(`Unit ${unitId} in maintenance - application ${application.id} remains pending`);
        } else if (newStatus === ListingStatus.PRIVATE) {
          // For private status, reject pending applications
          await prisma.tenantapplication.update({
            where: { id: application.id },
            data: { status: 'REJECTED' }
          });
          console.log(`Unit ${unitId} made private - application ${application.id} rejected`);
        }
      }

    } catch (error) {
      console.error('Error handling applications for inactive listing:', error);
    }
  }

  /**
   * Enables applications when a unit listing becomes active
   */
  private async enableApplicationsForUnit(unitId: string): Promise<void> {
    try {
      console.log(`Applications enabled for unit ${unitId} - listing is now active`);
      // In a full implementation, this might:
      // 1. Send notifications to interested tenants
      // 2. Update search indexes
      // 3. Trigger marketing campaigns
    } catch (error) {
      console.error('Error enabling applications for unit:', error);
    }
  }
}

// Export singleton instance with default configuration
export const applicationControlService = new ApplicationControlService();

// Export factory function for custom configurations
export function createApplicationControlService(config: Partial<ApplicationControlConfig>): ApplicationControlService {
  return new ApplicationControlService(config);
}
