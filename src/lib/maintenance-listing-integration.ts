// Maintenance-Listing Integration Service
// Handles automatic listing management during maintenance workflows

import { prisma } from "./db";
import { listingService } from "./listing-service";
import { MaintenanceRequest_status } from "@prisma/client";

/**
 * Service for integrating maintenance workflows with listing management
 * Automatically manages listing visibility during maintenance periods
 */
export class MaintenanceListingIntegration {

    /**
     * Handles maintenance request status changes
     * Automatically starts/ends maintenance mode based on request status
     */
    async handleMaintenanceStatusChange(
        maintenanceRequestId: string,
        newStatus: MaintenanceRequest_status,
        userId: string
    ): Promise<void> {
        try {
            const maintenanceRequest = await prisma.maintenanceRequest.findUnique({
                where: { id: maintenanceRequestId },
                include: {
                    unit: {
                        include: {
                            listing: true
                        }
                    }
                }
            });

            if (!maintenanceRequest || !maintenanceRequest.unit) {
                console.warn(`Maintenance request ${maintenanceRequestId} not found or has no unit`);
                return;
            }

            const unitId = maintenanceRequest.unit.id;

            switch (newStatus) {
                case MaintenanceRequest_status.IN_PROGRESS:
                case MaintenanceRequest_status.ON_HOLD:
                    // Start maintenance mode for high-priority or unit-affecting requests
                    await this.evaluateMaintenanceModeStart(maintenanceRequest, userId);
                    break;

                case MaintenanceRequest_status.COMPLETED:
                    // End maintenance mode if it was started for this request
                    await listingService.handleMaintenanceRequestCompleted(
                        maintenanceRequestId,
                        unitId,
                        userId
                    );
                    break;

                case MaintenanceRequest_status.CANCELLED:
                    // End maintenance mode if it was started for this request
                    await listingService.handleMaintenanceRequestCompleted(
                        maintenanceRequestId,
                        unitId,
                        userId
                    );
                    break;
            }

        } catch (error) {
            console.error('Error handling maintenance status change:', error);
        }
    }

    /**
     * Evaluates whether to start maintenance mode for a maintenance request
     */
    private async evaluateMaintenanceModeStart(
        maintenanceRequest: any,
        userId: string
    ): Promise<void> {
        // Check if unit has an active listing
        if (!maintenanceRequest.unit.listing) {
            return; // No listing to manage
        }

        // Determine if maintenance requires unit to be offline
        const requiresOffline = this.doesMaintenanceRequireOffline(maintenanceRequest);
        
        if (requiresOffline) {
            await listingService.handleMaintenanceRequestCreated(
                maintenanceRequest.id,
                maintenanceRequest.unit.id,
                userId
            );
        }
    }

    /**
     * Determines if a maintenance request requires the unit to be offline
     */
    private doesMaintenanceRequireOffline(maintenanceRequest: any): boolean {
        // High priority requests typically require unit offline
        if (maintenanceRequest.priority === 'HIGH' || maintenanceRequest.priority === 'URGENT') {
            return true;
        }

        // Check description for keywords that indicate unit needs to be offline
        const description = (maintenanceRequest.description || '').toLowerCase();
        const title = (maintenanceRequest.title || '').toLowerCase();
        
        const offlineKeywords = [
            'offline', 'unavailable', 'not available', 'out of service',
            'major repair', 'renovation', 'remodel', 'flooring', 'painting',
            'electrical work', 'plumbing work', 'hvac replacement',
            'appliance replacement', 'kitchen', 'bathroom', 'water damage',
            'mold', 'pest control', 'fumigation', 'inspection'
        ];

        return offlineKeywords.some(keyword => 
            description.includes(keyword) || title.includes(keyword)
        );
    }

    /**
     * Gets maintenance-related listing status for a unit
     */
    async getMaintenanceListingStatus(unitId: string): Promise<{
        isInMaintenance: boolean;
        maintenanceRequestId?: string;
        canRestore: boolean;
        estimatedEndDate?: Date;
    }> {
        try {
            const status = await listingService.getMaintenanceModeStatus(unitId);
            return {
                isInMaintenance: status.isInMaintenance,
                maintenanceRequestId: status.maintenanceRequestId,
                canRestore: status.canRestore,
                estimatedEndDate: status.estimatedEndDate
            };
        } catch (error) {
            console.error('Error getting maintenance listing status:', error);
            return {
                isInMaintenance: false,
                canRestore: false
            };
        }
    }

    /**
     * Manually starts maintenance mode for a unit
     */
    async startMaintenanceModeManually(
        unitId: string,
        reason: string,
        userId: string,
        estimatedEndDate?: Date,
        maintenanceRequestId?: string
    ): Promise<{ success: boolean; message?: string }> {
        try {
            const config = {
                unitId,
                startDate: new Date(),
                reason,
                estimatedEndDate,
                maintenanceRequestId,
                notifyTenants: true,
                autoRestore: false
            };

            const result = await listingService.startMaintenanceMode(config, userId);
            
            return {
                success: result.success,
                message: result.success ? 'Maintenance mode started successfully' : result.message
            };

        } catch (error) {
            console.error('Error starting maintenance mode manually:', error);
            return {
                success: false,
                message: `Failed to start maintenance mode: ${error instanceof Error ? error.message : 'Unknown error'}`
            };
        }
    }

    /**
     * Manually ends maintenance mode for a unit
     */
    async endMaintenanceModeManually(
        unitId: string,
        userId: string,
        reason?: string
    ): Promise<{ success: boolean; message?: string }> {
        try {
            const result = await listingService.endMaintenanceMode(
                unitId,
                userId,
                undefined,
                reason || 'Maintenance completed manually'
            );

            return {
                success: result.success,
                message: result.success ? 'Maintenance mode ended successfully' : result.message
            };

        } catch (error) {
            console.error('Error ending maintenance mode manually:', error);
            return {
                success: false,
                message: `Failed to end maintenance mode: ${error instanceof Error ? error.message : 'Unknown error'}`
            };
        }
    }

    /**
     * Gets all units currently in maintenance mode
     */
    async getUnitsInMaintenanceMode(organizationId: string): Promise<Array<{
        unitId: string;
        unitNumber: string;
        propertyName: string;
        maintenanceRequestId?: string;
        startDate: Date;
        estimatedEndDate?: Date;
        reason: string;
    }>> {
        try {
            // Get all units for the organization
            const units = await prisma.unit.findMany({
                where: {
                    property: {
                        organizationId
                    },
                    listing: {
                        isNot: null
                    }
                },
                include: {
                    property: true,
                    listing: true
                }
            });

            const maintenanceUnits = [];

            // Check maintenance status for each unit
            for (const unit of units) {
                const status = await listingService.getMaintenanceModeStatus(unit.id);
                
                if (status.isInMaintenance) {
                    maintenanceUnits.push({
                        unitId: unit.id,
                        unitNumber: unit.unitNumber,
                        propertyName: unit.property.name || 'Unknown Property',
                        maintenanceRequestId: status.maintenanceRequestId,
                        startDate: status.startDate || new Date(),
                        estimatedEndDate: status.estimatedEndDate,
                        reason: status.reason || 'Maintenance in progress'
                    });
                }
            }

            return maintenanceUnits;

        } catch (error) {
            console.error('Error getting units in maintenance mode:', error);
            return [];
        }
    }
}

// Export singleton instance
export const maintenanceListingIntegration = new MaintenanceListingIntegration();
