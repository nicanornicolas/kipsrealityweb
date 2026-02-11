// Audit Service - Comprehensive Listing Change Tracking
// Handles audit trail creation, retrieval, filtering, and export

import { prisma } from "./db";
import { 
    ListingAction, 
    ListingStatus, 
    ListingAuditEntry 
} from "./listing-types";

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
export class AuditService {
    
    /**
     * Creates a new audit entry for listing operations
     */
    async createAuditEntry(
        data: {
            unitId: string;
            listingId?: string;
            action: ListingAction;
            previousStatus?: ListingStatus;
            newStatus: ListingStatus;
            userId: string;
            reason?: string;
            metadata?: Record<string, any>;
        },
        tx?: any, // Optional transaction client
        options?: { includeRelations?: boolean }
    ): Promise<ListingAuditEntry> {
        const client = tx || prisma;
        const includeRelations = options?.includeRelations ?? !tx;
        
        const auditEntry = await client.listingAuditEntry.create({
            data: {
                unitId: data.unitId,
                listingId: data.listingId,
                action: data.action as any, // Cast to match Prisma enum
                previousStatus: data.previousStatus as any,
                newStatus: data.newStatus as any,
                userId: data.userId,
                reason: data.reason,
                metadata: data.metadata,
                timestamp: new Date()
            },
            ...(includeRelations
                ? {
                      include: {
                          user: {
                              select: {
                                  id: true,
                                  firstName: true,
                                  lastName: true,
                                  email: true
                              }
                          },
                          unit: {
                              select: {
                                  id: true,
                                  unitNumber: true,
                                  property: {
                                      select: {
                                          id: true,
                                          name: true,
                                          address: true
                                      }
                                  }
                              }
                          },
                          listing: {
                              select: {
                                  id: true,
                                  title: true,
                                  price: true
                              }
                          }
                      }
                  }
                : {})
        });

        return this.mapToAuditEntry(auditEntry);
    }

    /**
     * Retrieves audit trail with filtering and pagination
     */
    async getAuditTrail(
        filter: AuditFilter = {}
    ): Promise<PaginatedAuditResult> {
        const {
            unitId,
            listingId,
            userId,
            action,
            status,
            dateFrom,
            dateTo,
            limit = 50,
            offset = 0
        } = filter;

        // Build where clause
        const where: any = {};
        
        if (unitId) where.unitId = unitId;
        if (listingId) where.listingId = listingId;
        if (userId) where.userId = userId;
        if (action) where.action = action as any;
        if (status) where.newStatus = status as any;
        
        if (dateFrom || dateTo) {
            where.timestamp = {};
            if (dateFrom) where.timestamp.gte = dateFrom;
            if (dateTo) where.timestamp.lte = dateTo;
        }

        // Get total count
        const total = await prisma.listingAuditEntry.count({ where });

        // Get entries with pagination
        const entries = await prisma.listingAuditEntry.findMany({
            where,
            include: {
                user: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        email: true
                    }
                },
                unit: {
                    select: {
                        id: true,
                        unitNumber: true,
                        property: {
                            select: {
                                id: true,
                                name: true,
                                address: true
                            }
                        }
                    }
                },
                listing: {
                    select: {
                        id: true,
                        title: true,
                        price: true
                    }
                }
            },
            orderBy: {
                timestamp: 'desc'
            },
            take: limit,
            skip: offset
        });

        const mappedEntries = entries.map(entry => this.mapToAuditEntry(entry));
        const hasMore = offset + limit < total;
        const nextOffset = hasMore ? offset + limit : undefined;

        return {
            entries: mappedEntries,
            total,
            hasMore,
            nextOffset
        };
    }

    /**
     * Gets audit history for a specific unit
     */
    async getUnitAuditHistory(
        unitId: string,
        limit: number = 100
    ): Promise<ListingAuditEntry[]> {
        const result = await this.getAuditTrail({
            unitId,
            limit
        });
        
        return result.entries;
    }

    /**
     * Gets audit history for a specific listing
     */
    async getListingAuditHistory(
        listingId: string,
        limit: number = 100
    ): Promise<ListingAuditEntry[]> {
        const result = await this.getAuditTrail({
            listingId,
            limit
        });
        
        return result.entries;
    }

    /**
     * Exports audit data in specified format
     */
    async exportAuditData(
        filter: AuditFilter,
        options: AuditExportOptions
    ): Promise<string> {
        // Get all matching entries (remove pagination for export)
        const exportFilter = { ...filter, limit: undefined, offset: undefined };
        const result = await this.getAuditTrail(exportFilter);
        
        if (options.format === 'csv') {
            return this.exportToCsv(result.entries, options.includeMetadata);
        } else {
            return this.exportToJson(result.entries, options.includeMetadata);
        }
    }

    /**
     * Gets audit statistics for reporting
     */
    async getAuditStatistics(
        filter: Partial<AuditFilter> = {}
    ): Promise<{
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
    }> {
        const where = this.buildWhereClause(filter);

        // Get total entries
        const totalEntries = await prisma.listingAuditEntry.count({ where });

        // Get action breakdown
        const actionStats = await prisma.listingAuditEntry.groupBy({
            by: ['action'],
            where,
            _count: {
                action: true
            }
        });

        const actionBreakdown = actionStats.reduce((acc: Record<ListingAction, number>, stat: any) => {
            acc[stat.action as ListingAction] = stat._count.action;
            return acc;
        }, {} as Record<ListingAction, number>);

        // Get status breakdown
        const statusStats = await prisma.listingAuditEntry.groupBy({
            by: ['newStatus'],
            where,
            _count: {
                newStatus: true
            }
        });

        const statusBreakdown = statusStats.reduce((acc: Record<ListingStatus, number>, stat: any) => {
            acc[stat.newStatus as ListingStatus] = stat._count.newStatus;
            return acc;
        }, {} as Record<ListingStatus, number>);

        // Get user activity
        const userStats = await prisma.listingAuditEntry.groupBy({
            by: ['userId'],
            where,
            _count: {
                userId: true
            },
            orderBy: {
                _count: {
                    userId: 'desc'
                }
            },
            take: 10
        });

        const userIds = userStats.map(stat => stat.userId);
        const users = await prisma.user.findMany({
            where: {
                id: {
                    in: userIds
                }
            },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true
            }
        });

        const userActivity = userStats.map((stat: any) => {
            const user = users.find(u => u.id === stat.userId);
            return {
                userId: stat.userId,
                userName: user ? `${user.firstName || ''} ${user.lastName || ''}`.trim() || user.email : 'Unknown User',
                actionCount: stat._count.userId
            };
        });

        // Get timeline data (last 30 days)
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const timelineStats = await prisma.listingAuditEntry.groupBy({
            by: ['timestamp'],
            where: {
                ...where,
                timestamp: {
                    gte: thirtyDaysAgo
                }
            },
            _count: {
                timestamp: true
            }
        });

        const timelineData = timelineStats.map((stat: any) => ({
            date: stat.timestamp.toISOString().split('T')[0],
            count: stat._count.timestamp
        }));

        return {
            totalEntries,
            actionBreakdown,
            statusBreakdown,
            userActivity,
            timelineData
        };
    }

    /**
     * Creates audit entries for bulk operations
     */
    async createBulkAuditEntry(
        operations: Array<{
            unitId: string;
            action: ListingAction;
            success: boolean;
            error?: string;
        }>,
        userId: string,
        organizationId: string
    ): Promise<void> {
        const bulkAuditData = {
            id: `bulk-${Date.now()}`,
            userId,
            organizationId,
            timestamp: new Date(),
            operations: operations.map(op => ({
                unitId: op.unitId,
                action: op.action,
                success: op.success,
                error: op.error
            })),
            summary: {
                total: operations.length,
                successful: operations.filter(op => op.success).length,
                failed: operations.filter(op => !op.success).length
            }
        };

        // Create individual audit entries for each operation
        await Promise.all(
            operations.map(op => 
                this.createAuditEntry({
                    unitId: op.unitId,
                    action: op.action,
                    newStatus: op.success ? ListingStatus.ACTIVE : ListingStatus.PRIVATE,
                    userId,
                    reason: op.success ? `Bulk ${op.action} operation` : `Bulk ${op.action} failed: ${op.error}`,
                    metadata: {
                        bulkOperationId: bulkAuditData.id,
                        success: op.success,
                        error: op.error
                    }
                })
            )
        );
    }

    /**
     * Maps database result to ListingAuditEntry interface
     */
    private mapToAuditEntry(entry: any): ListingAuditEntry {
        return {
            id: entry.id,
            unitId: entry.unitId,
            listingId: entry.listingId,
            action: entry.action as ListingAction,
            previousStatus: entry.previousStatus as ListingStatus | undefined,
            newStatus: entry.newStatus as ListingStatus,
            userId: entry.userId,
            timestamp: entry.timestamp,
            reason: entry.reason,
            metadata: entry.metadata
        };
    }

    /**
     * Builds where clause for filtering
     */
    private buildWhereClause(filter: Partial<AuditFilter>): any {
        const where: any = {};
        
        if (filter.unitId) where.unitId = filter.unitId;
        if (filter.listingId) where.listingId = filter.listingId;
        if (filter.userId) where.userId = filter.userId;
        if (filter.action) where.action = filter.action as any;
        if (filter.status) where.newStatus = filter.status as any;
        
        if (filter.dateFrom || filter.dateTo) {
            where.timestamp = {};
            if (filter.dateFrom) where.timestamp.gte = filter.dateFrom;
            if (filter.dateTo) where.timestamp.lte = filter.dateTo;
        }

        return where;
    }

    /**
     * Exports audit entries to CSV format
     */
    private exportToCsv(entries: ListingAuditEntry[], includeMetadata: boolean = false): string {
        const headers = [
            'ID',
            'Unit ID',
            'Listing ID',
            'Action',
            'Previous Status',
            'New Status',
            'User ID',
            'Timestamp',
            'Reason'
        ];

        if (includeMetadata) {
            headers.push('Metadata');
        }

        const csvRows = [headers.join(',')];

        entries.forEach(entry => {
            const row = [
                entry.id,
                entry.unitId,
                entry.listingId || '',
                entry.action,
                entry.previousStatus || '',
                entry.newStatus,
                entry.userId,
                entry.timestamp.toISOString(),
                entry.reason || ''
            ];

            if (includeMetadata) {
                row.push(entry.metadata ? JSON.stringify(entry.metadata) : '');
            }

            csvRows.push(row.map(field => `"${field}"`).join(','));
        });

        return csvRows.join('\n');
    }

    /**
     * Exports audit entries to JSON format
     */
    private exportToJson(entries: ListingAuditEntry[], includeMetadata: boolean = false): string {
        const exportData = entries.map(entry => {
            const data: any = {
                id: entry.id,
                unitId: entry.unitId,
                listingId: entry.listingId,
                action: entry.action,
                previousStatus: entry.previousStatus,
                newStatus: entry.newStatus,
                userId: entry.userId,
                timestamp: entry.timestamp.toISOString(),
                reason: entry.reason
            };

            if (includeMetadata && entry.metadata) {
                data.metadata = entry.metadata;
            }

            return data;
        });

        return JSON.stringify(exportData, null, 2);
    }

    /**
     * Gets audit history for a property (all units in the property)
     * Used for property-level operations like deactivation
     */
    async getPropertyAuditHistory(propertyId: string): Promise<ListingAuditEntry[]> {
        try {
            // Get all units for the property
            const units = await prisma.unit.findMany({
                where: { propertyId },
                select: { id: true }
            });

            const unitIds = units.map(unit => unit.id);

            if (unitIds.length === 0) {
                return [];
            }

            // Get audit entries for all units in the property
            // Note: This is a simplified implementation since we don't have the audit table yet
            // In a full implementation, this would query the actual audit table
            
            // For now, return empty array as placeholder
            // TODO: Implement when audit table is created
            return [];

        } catch (error) {
            console.error('Error getting property audit history:', error);
            return [];
        }
    }
}

// Export singleton instance
export const auditService = new AuditService();
