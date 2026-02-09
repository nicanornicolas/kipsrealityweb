// Application-Listing Integration Service
// Handles the integration between listing status changes and application management

import { applicationControlService } from './application-control-service';
import { ListingStatus, ListingAction } from './listing-types';
import { prisma } from './db';

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
export class ApplicationListingIntegrationService {
  
  /**
   * Handles listing status changes and updates application state accordingly
   * This is the main integration point called when listings change
   */
  async handleListingStatusChange(event: ListingChangeEvent): Promise<void> {
    try {
      console.log('Processing listing change event:', {
        unitId: event.unitId,
        action: event.action,
        previousStatus: event.previousStatus,
        newStatus: event.newStatus,
        timestamp: event.timestamp
      });

      // Update application control service about the status change
      await applicationControlService.handleListingStatusChange(
        event.unitId,
        event.newStatus,
        event.previousStatus
      );

      // Handle application state changes
      const applicationResult = await applicationControlService.handleApplicationStateOnListingChange(
        event.unitId,
        event.newStatus,
        event.previousStatus,
        event.reason
      );

      // Log the results
      console.log(`Listing change processed: ${applicationResult.applicationsAffected} applications affected`);
      
      // Send notifications if needed
      if (applicationResult.applicationsAffected > 0) {
        await this.notifyAffectedApplicants(event.unitId, event.newStatus, applicationResult.actions);
      }

      // Create audit entry for the integration
      await this.createIntegrationAuditEntry(event, applicationResult);

    } catch (error) {
      console.error('Error handling listing status change:', error);
      // Don't throw - integration failures shouldn't break listing operations
    }
  }

  /**
   * Handles listing creation events
   */
  async handleListingCreated(event: ListingChangeEvent): Promise<void> {
    try {
      console.log(`Listing created for unit ${event.unitId} - applications now enabled`);
      
      // Enable applications for the unit
      await applicationControlService.handleListingStatusChange(
        event.unitId,
        ListingStatus.ACTIVE
      );

      // Check if there are any existing applications that were waiting for this unit to be listed
      await this.processWaitingApplications(event.unitId);

    } catch (error) {
      console.error('Error handling listing creation:', error);
    }
  }

  /**
   * Handles listing removal events
   */
  async handleListingRemoved(event: ListingChangeEvent): Promise<void> {
    try {
      console.log(`Listing removed for unit ${event.unitId} - applications now disabled`);
      
      // Handle application state for removed listing
      const applicationResult = await applicationControlService.handleApplicationStateOnListingChange(
        event.unitId,
        ListingStatus.PRIVATE,
        event.previousStatus,
        event.reason || 'Listing removed from marketplace'
      );

      // Notify affected applicants
      if (applicationResult.applicationsAffected > 0) {
        await this.notifyAffectedApplicants(event.unitId, ListingStatus.PRIVATE, applicationResult.actions);
      }

    } catch (error) {
      console.error('Error handling listing removal:', error);
    }
  }

  /**
   * Handles maintenance mode events
   */
  async handleMaintenanceMode(event: ListingChangeEvent): Promise<void> {
    try {
      const isStarting = event.action === ListingAction.MAINTENANCE_START;
      const newStatus = isStarting ? ListingStatus.MAINTENANCE : ListingStatus.ACTIVE;
      
      console.log(`Maintenance mode ${isStarting ? 'started' : 'ended'} for unit ${event.unitId}`);
      
      // Handle application state for maintenance mode
      const applicationResult = await applicationControlService.handleApplicationStateOnListingChange(
        event.unitId,
        newStatus,
        event.previousStatus,
        event.reason || `Maintenance mode ${isStarting ? 'started' : 'ended'}`
      );

      // Notify affected applicants about maintenance
      if (applicationResult.applicationsAffected > 0) {
        await this.notifyAffectedApplicants(event.unitId, newStatus, applicationResult.actions);
      }

    } catch (error) {
      console.error('Error handling maintenance mode:', error);
    }
  }

  /**
   * Validates application-listing consistency across the system
   * Can be run as a scheduled job to ensure data integrity
   */
  async validateSystemIntegrity(): Promise<{
    unitsChecked: number;
    applicationsChecked: number;
    issuesFound: number;
    issuesFixed: number;
    errors: string[];
  }> {
    try {
      console.log('Starting system integrity validation...');
      
      const errors: string[] = [];
      let unitsChecked = 0;
      let applicationsChecked = 0;
      let issuesFound = 0;
      let issuesFixed = 0;

      // Get integrity report
      const report = await applicationControlService.getApplicationIntegrityReport();
      applicationsChecked = report.summary.totalApplications;
      issuesFound = report.summary.invalidApplications;

      // Fix application associations
      const fixResult = await applicationControlService.validateAndFixApplicationAssociations();
      issuesFixed = fixResult.fixed;
      errors.push(...fixResult.errors);

      // Clean up orphaned applications
      const cleanupResult = await applicationControlService.cleanupOrphanedApplications();
      issuesFixed += cleanupResult.cleaned;
      errors.push(...cleanupResult.errors);

      // Count units checked (approximate based on applications)
      const units = await prisma.unit.findMany({
        select: { id: true }
      });
      unitsChecked = units.length;

      console.log('System integrity validation completed:', {
        unitsChecked,
        applicationsChecked,
        issuesFound,
        issuesFixed,
        errorCount: errors.length
      });

      return {
        unitsChecked,
        applicationsChecked,
        issuesFound,
        issuesFixed,
        errors
      };

    } catch (error) {
      console.error('Error validating system integrity:', error);
      return {
        unitsChecked: 0,
        applicationsChecked: 0,
        issuesFound: 0,
        issuesFixed: 0,
        errors: [error instanceof Error ? error.message : 'Unknown error']
      };
    }
  }

  /**
   * Processes applications that were waiting for a unit to be listed
   */
  private async processWaitingApplications(unitId: string): Promise<void> {
    try {
      // In a full implementation, this would:
      // 1. Check for applications in a "WAITING" status
      // 2. Notify applicants that the unit is now available
      // 3. Update application status to "PENDING"
      
      console.log(`Processing waiting applications for unit ${unitId}`);
      
    } catch (error) {
      console.error('Error processing waiting applications:', error);
    }
  }

  /**
   * Notifies applicants affected by listing status changes
   */
  private async notifyAffectedApplicants(
    unitId: string,
    newStatus: ListingStatus,
    actions: Array<{
      applicationId: string;
      action: 'MAINTAINED' | 'REJECTED' | 'NOTIFIED';
      reason: string;
    }>
  ): Promise<void> {
    try {
      // Get unit and property information for notifications
      const unit = await prisma.unit.findUnique({
        where: { id: unitId },
        include: {
          property: {
            select: {
              name: true,
              city: true
            }
          }
        }
      });

      if (!unit) {
        console.warn(`Unit ${unitId} not found for notifications`);
        return;
      }

      // Get applications that need notification
      const applicationIds = actions
        .filter(action => action.action === 'NOTIFIED' || action.action === 'REJECTED')
        .map(action => action.applicationId);

      if (applicationIds.length === 0) {
        return;
      }

      const applications = await prisma.tenantapplication.findMany({
        where: {
          id: { in: applicationIds }
        },
        select: {
          id: true,
          fullName: true,
          email: true
        }
      });

      // Send notifications (in a full implementation)
      for (const application of applications) {
        const action = actions.find(a => a.applicationId === application.id);
        if (!action) continue;

        console.log(`Notification: ${application.email} - ${action.reason} for unit ${unit.unitNumber}`);
        
        // In a full implementation, this would send actual emails/notifications
        // await notificationService.sendApplicationStatusUpdate({
        //   to: application.email,
        //   applicantName: application.fullName,
        //   unitNumber: unit.unitNumber,
        //   propertyName: unit.property?.name,
        //   status: newStatus,
        //   reason: action.reason
        // });
      }

    } catch (error) {
      console.error('Error notifying affected applicants:', error);
    }
  }

  /**
   * Creates audit entry for integration events
   */
  private async createIntegrationAuditEntry(
    event: ListingChangeEvent,
    applicationResult: {
      applicationsAffected: number;
      actions: Array<{
        applicationId: string;
        action: 'MAINTAINED' | 'REJECTED' | 'NOTIFIED';
        reason: string;
      }>;
    }
  ): Promise<void> {
    try {
      // In a full implementation, this would create audit entries
      // for the integration events to track how listing changes
      // affected applications
      
      console.log('Integration audit entry:', {
        unitId: event.unitId,
        listingAction: event.action,
        applicationsAffected: applicationResult.applicationsAffected,
        timestamp: event.timestamp
      });

    } catch (error) {
      console.error('Error creating integration audit entry:', error);
    }
  }
}

// Export singleton instance
export const applicationListingIntegration = new ApplicationListingIntegrationService();

// Helper function to create listing change events
export function createListingChangeEvent(
  unitId: string,
  action: ListingAction,
  newStatus: ListingStatus,
  userId: string,
  options?: {
    listingId?: string;
    previousStatus?: ListingStatus;
    reason?: string;
  }
): ListingChangeEvent {
  return {
    unitId,
    listingId: options?.listingId,
    action,
    previousStatus: options?.previousStatus,
    newStatus,
    userId,
    reason: options?.reason,
    timestamp: new Date()
  };
}