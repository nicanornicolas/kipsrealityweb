import { ListingAction, ListingStatus, ListingAuditEntry } from './listing-types';
export interface AuditFilter {
    unitId?: string;
    listingId?: string;
    userId?: string;
    action?: ListingAction;
    status?: ListingStatus;
    dateFrom?: Date;
    dateTo?: Date;
    limit?: number;
    offset?: number;
}
export interface AuditExportOptions {
    format: 'json' | 'csv';
    includeMetadata?: boolean;
    dateRange?: {
        from: Date;
        to: Date;
    };
}
export interface PaginatedAuditResult {
    entries: ListingAuditEntry[];
    total: number;
    hasMore: boolean;
    nextOffset?: number;
}
/**
 * Service for managing listing audit trail
 * Provides comprehensive tracking, filtering, and export capabilities
 */
export declare class AuditService {
    /**
     * Creates a new audit entry for listing operations
     */
    createAuditEntry(data: {
        unitId: string;
        listingId?: string;
        action: ListingAction;
        previousStatus?: ListingStatus;
        newStatus: ListingStatus;
        userId: string;
        reason?: string;
        metadata?: Record<string, any>;
    }, tx?: any, // Optional transaction client
    options?: {
        includeRelations?: boolean;
    }): Promise<ListingAuditEntry>;
    /**
     * Retrieves audit trail with filtering and pagination
     */
    getAuditTrail(filter?: AuditFilter): Promise<PaginatedAuditResult>;
    /**
     * Gets audit history for a specific unit
     */
    getUnitAuditHistory(unitId: string, limit?: number): Promise<ListingAuditEntry[]>;
    /**
     * Gets audit history for a specific listing
     */
    getListingAuditHistory(listingId: string, limit?: number): Promise<ListingAuditEntry[]>;
    /**
     * Exports audit data in specified format
     */
    exportAuditData(filter: AuditFilter, options: AuditExportOptions): Promise<string>;
    /**
     * Gets audit statistics for reporting
     */
    getAuditStatistics(filter?: Partial<AuditFilter>): Promise<{
        totalEntries: number;
        actionBreakdown: Record<ListingAction, number>;
        statusBreakdown: Record<ListingStatus, number>;
        userActivity: Array<{
            userId: string;
            userName: string;
            actionCount: number;
        }>;
        timelineData: Array<{
            date: string;
            count: number;
        }>;
    }>;
    /**
     * Creates audit entries for bulk operations
     */
    createBulkAuditEntry(operations: Array<{
        unitId: string;
        action: ListingAction;
        success: boolean;
        error?: string;
    }>, userId: string, organizationId: string): Promise<void>;
    /**
     * Maps database result to ListingAuditEntry interface
     */
    private mapToAuditEntry;
    /**
     * Builds where clause for filtering
     */
    private buildWhereClause;
    /**
     * Exports audit entries to CSV format
     */
    private exportToCsv;
    /**
     * Exports audit entries to JSON format
     */
    private exportToJson;
    /**
     * Gets audit history for a property (all units in the property)
     * Used for property-level operations like deactivation
     */
    getPropertyAuditHistory(propertyId: string): Promise<ListingAuditEntry[]>;
}
export declare const auditService: AuditService;
