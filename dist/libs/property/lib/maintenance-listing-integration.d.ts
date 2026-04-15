import { MaintenanceRequestStatus } from '@prisma/client';
/**
 * Service for integrating maintenance workflows with listing management
 * Automatically manages listing visibility during maintenance periods
 */
export declare class MaintenanceListingIntegration {
    /**
     * Handles maintenance request status changes
     * Automatically starts/ends maintenance mode based on request status
     */
    handleMaintenanceStatusChange(maintenanceRequestId: string, newStatus: MaintenanceRequestStatus, userId: string): Promise<void>;
    /**
     * Evaluates whether to start maintenance mode for a maintenance request
     */
    private evaluateMaintenanceModeStart;
    /**
     * Determines if a maintenance request requires the unit to be offline
     */
    private doesMaintenanceRequireOffline;
    /**
     * Gets maintenance-related listing status for a unit
     */
    getMaintenanceListingStatus(unitId: string): Promise<{
        isInMaintenance: boolean;
        maintenanceRequestId?: string;
        canRestore: boolean;
        estimatedEndDate?: Date;
    }>;
    /**
     * Manually starts maintenance mode for a unit
     */
    startMaintenanceModeManually(unitId: string, reason: string, userId: string, estimatedEndDate?: Date, maintenanceRequestId?: string): Promise<{
        success: boolean;
        message?: string;
    }>;
    /**
     * Manually ends maintenance mode for a unit
     */
    endMaintenanceModeManually(unitId: string, userId: string, reason?: string): Promise<{
        success: boolean;
        message?: string;
    }>;
    /**
     * Gets all units currently in maintenance mode
     */
    getUnitsInMaintenanceMode(organizationId: string): Promise<Array<{
        unitId: string;
        unitNumber: string;
        propertyName: string;
        maintenanceRequestId?: string;
        startDate: Date;
        estimatedEndDate?: Date;
        reason: string;
    }>>;
}
export declare const maintenanceListingIntegration: MaintenanceListingIntegration;
