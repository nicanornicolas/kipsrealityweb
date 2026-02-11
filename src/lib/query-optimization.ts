/**
 * Database query optimization utilities
 * Provides optimized queries and batch operations for listing management
 */

import { prisma } from "./db";
import { cacheManager, CacheKeys, CacheInvalidator } from "./cache-utils";

/**
 * Optimized query builder for units with selective includes
 */
export class UnitQueryBuilder {
  private includes: Record<string, any> = {};
  private where: Record<string, any> = {};
  private orderByClause: Record<string, any> = { unitNumber: "asc" };

  /**
   * Include property information (optimized selection)
   */
  includeProperty(fields?: string[]): this {
    this.includes.property = {
      select: fields ? Object.fromEntries(fields.map(f => [f, true])) : {
        id: true,
        name: true,
        address: true,
        city: true,
        state: true,
        propertyManagerId: true
      }
    };
    return this;
  }

  /**
   * Include listing information
   */
  includeListing(): this {
    this.includes.listing = {
      select: {
        id: true,
        status: true,
        title: true,
        description: true,
        price: true,
        createdAt: true,
        updatedAt: true,
        availabilityDate: true,
        expirationDate: true
      }
    };
    return this;
  }

  /**
   * Include active lease information only
   */
  includeActiveLease(): this {
    this.includes.leases = {
      where: { leaseStatus: "ACTIVE" },
      select: {
        id: true,
        leaseStatus: true,
        startDate: true,
        endDate: true,
        rentAmount: true
      },
      take: 1
    };
    return this;
  }

  /**
   * Include tenant applications
   */
  includeApplications(limit?: number): this {
    this.includes.tenantApplications = {
      select: {
        id: true,
        status: true,
        createdAt: true,
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true
          }
        }
      },
      orderBy: { createdAt: "desc" },
      ...(limit && { take: limit })
    };
    return this;
  }

  /**
   * Filter by property
   */
  forProperty(propertyId: string): this {
    this.where.propertyId = propertyId;
    return this;
  }

  /**
   * Filter by property manager
   */
  forPropertyManager(propertyManagerId: string): this {
    this.where.property = {
      propertyManagerId
    };
    return this;
  }

  /**
   * Filter by listing status
   */
  withListingStatus(status: string): this {
    this.where.listing = {
      status
    };
    return this;
  }

  /**
   * Filter units without listings
   */
  withoutListing(): this {
    this.where.listing = null;
    return this;
  }

  /**
   * Filter units without active leases
   */
  withoutActiveLease(): this {
    this.where.leases = {
      none: {
        leaseStatus: "ACTIVE"
      }
    };
    return this;
  }

  /**
   * Set custom ordering
   */
  orderBy(field: string, direction: "asc" | "desc" = "asc"): this {
    this.orderByClause = { [field]: direction };
    return this;
  }

  /**
   * Execute the query with caching
   */
  async execute(useCache: boolean = true): Promise<any[]> {
    const cacheKey = CacheKeys.unitsByProperty(
      this.where.propertyId || "all",
      Object.keys(this.includes)
    );

    if (useCache) {
      const cached = cacheManager.get<any[]>(cacheKey);
      if (cached) return cached;
    }

    const result = await prisma.unit.findMany({
      where: this.where,
      include: this.includes,
      orderBy: this.orderByClause
    });

    if (useCache) {
      cacheManager.set(cacheKey, result);
    }

    return result;
  }

  /**
   * Execute query for a single unit
   */
  async findUnique(unitId: string, useCache: boolean = true): Promise<any> {
    const cacheKey = CacheKeys.unit(unitId, Object.keys(this.includes));

    if (useCache) {
      const cached = cacheManager.get<any>(cacheKey);
      if (cached) return cached;
    }

    const result = await prisma.unit.findUnique({
      where: { id: unitId },
      include: this.includes
    });

    if (useCache && result) {
      cacheManager.set(cacheKey, result);
    }

    return result;
  }
}

/**
 * Optimized listing queries
 */
export class ListingQueryBuilder {
  private includes: Record<string, any> = {};
  private where: Record<string, any> = {};
  private orderBy: Record<string, any> = { updatedAt: "desc" };

  /**
   * Include unit and property information
   */
  includeUnitAndProperty(): this {
    this.includes.unit = {
      select: {
        id: true,
        unitNumber: true,
        bedrooms: true,
        bathrooms: true,
        rent: true,
        property: {
          select: {
            id: true,
            name: true,
            address: true,
            city: true,
            state: true
          }
        }
      }
    };
    return this;
  }

  /**
   * Include performance metrics
   */
  includePerformanceMetrics(): this {
    this.includes.applications = {
      select: {
        id: true,
        status: true,
        createdAt: true
      }
    };
    return this;
  }

  /**
   * Filter by status
   */
  withStatus(status: string): this {
    this.where.status = status;
    return this;
  }

  /**
   * Filter by property manager
   */
  forPropertyManager(propertyManagerId: string): this {
    this.where.unit = {
      property: {
        propertyManagerId
      }
    };
    return this;
  }

  /**
   * Filter by date range
   */
  createdBetween(startDate: Date, endDate: Date): this {
    this.where.createdAt = {
      gte: startDate,
      lte: endDate
    };
    return this;
  }

  /**
   * Execute the query
   */
  async execute(useCache: boolean = true): Promise<any[]> {
    const cacheKey = `listings:${JSON.stringify(this.where)}:${JSON.stringify(this.includes)}`;

    if (useCache) {
      const cached = cacheManager.get<any[]>(cacheKey);
      if (cached) return cached;
    }

    const result = await prisma.listing.findMany({
      where: this.where,
      include: this.includes,
      orderBy: this.orderBy
    });

    if (useCache) {
      cacheManager.set(cacheKey, result);
    }

    return result;
  }
}

/**
 * Batch operation utilities
 */
export class BatchOperations {
  /**
   * Batch create listings with optimized queries
   */
  static async batchCreateListings(
    operations: Array<{
      unitId: string;
      listingData: any;
    }>
  ): Promise<{ successful: string[]; failed: Array<{ unitId: string; error: string }> }> {
    const results = {
      successful: [] as string[],
      failed: [] as Array<{ unitId: string; error: string }>
    };

    // Get all units in a single query
    const unitIds = operations.map(op => op.unitId);
    const units = await prisma.unit.findMany({
      where: {
        id: { in: unitIds }
      },
      include: {
        listing: true,
        leases: {
          where: { leaseStatus: "ACTIVE" },
          take: 1
        }
      }
    });

    const unitMap = new Map(units.map(unit => [unit.id, unit]));

    // Process operations in batches
    const batchSize = 10;
    for (let i = 0; i < operations.length; i += batchSize) {
      const batch = operations.slice(i, i + batchSize);
      
      const batchPromises = batch.map(async (operation) => {
        try {
          const unit = unitMap.get(operation.unitId);
          
          if (!unit) {
            throw new Error("Unit not found");
          }

          if (unit.listing) {
            throw new Error("Unit already has a listing");
          }

          if (unit.leases && unit.leases.length > 0) {
            throw new Error("Unit has active lease");
          }

          const listing = await prisma.listing.create({
            data: {
              unitId: operation.unitId,
              ...operation.listingData,
              status: "ACTIVE"
            }
          });

          results.successful.push(operation.unitId);
          
          // Invalidate cache for this unit
          CacheInvalidator.invalidateUnit(operation.unitId);
          
          return listing;
        } catch (error) {
          results.failed.push({
            unitId: operation.unitId,
            error: error instanceof Error ? error.message : "Unknown error"
          });
        }
      });

      await Promise.allSettled(batchPromises);
    }

    return results;
  }

  /**
   * Batch update listing statuses
   */
  static async batchUpdateStatuses(
    updates: Array<{
      listingId: string;
      status: string;
    }>
  ): Promise<{ successful: string[]; failed: Array<{ listingId: string; error: string }> }> {
    const results = {
      successful: [] as string[],
      failed: [] as Array<{ listingId: string; error: string }>
    };

    // Process in batches to avoid overwhelming the database
    const batchSize = 20;
    for (let i = 0; i < updates.length; i += batchSize) {
      const batch = updates.slice(i, i + batchSize);
      
      try {
        await prisma.$transaction(
          batch.map(update => 
            prisma.listing.update({
              where: { id: update.listingId },
              data: { 
                status: update.status
                  ? { connect: { name: update.status } }
                  : undefined,
                updatedAt: new Date()
              }
            })
          )
        );

        results.successful.push(...batch.map(b => b.listingId));
      } catch (error) {
        // If batch fails, try individual updates
        for (const update of batch) {
          try {
            await prisma.listing.update({
              where: { id: update.listingId },
              data: { 
                status: update.status
                  ? { connect: { name: update.status } }
                  : undefined,
                updatedAt: new Date()
              }
            });
            results.successful.push(update.listingId);
          } catch (individualError) {
            results.failed.push({
              listingId: update.listingId,
              error: individualError instanceof Error ? individualError.message : "Unknown error"
            });
          }
        }
      }
    }

    // Invalidate relevant caches
    CacheInvalidator.invalidateAllListings();

    return results;
  }
}

/**
 * Query performance monitoring
 */
export class QueryPerformanceMonitor {
  private static queryTimes = new Map<string, number[]>();

  static startTimer(queryName: string): () => void {
    const startTime = Date.now();
    
    return () => {
      const duration = Date.now() - startTime;
      
      if (!this.queryTimes.has(queryName)) {
        this.queryTimes.set(queryName, []);
      }
      
      const times = this.queryTimes.get(queryName)!;
      times.push(duration);
      
      // Keep only last 100 measurements
      if (times.length > 100) {
        times.shift();
      }
      
      // Log slow queries
      if (duration > 1000) {
        console.warn(`Slow query detected: ${queryName} took ${duration}ms`);
      }
    };
  }

  static getStats(queryName?: string) {
    if (queryName) {
      const times = this.queryTimes.get(queryName) || [];
      return {
        count: times.length,
        average: times.reduce((a, b) => a + b, 0) / times.length || 0,
        min: Math.min(...times) || 0,
        max: Math.max(...times) || 0
      };
    }

    const allStats: Record<string, any> = {};
    for (const [name, times] of this.queryTimes.entries()) {
      allStats[name] = {
        count: times.length,
        average: times.reduce((a, b) => a + b, 0) / times.length || 0,
        min: Math.min(...times) || 0,
        max: Math.max(...times) || 0
      };
    }
    return allStats;
  }
}

// Export convenience functions
export const createUnitQuery = () => new UnitQueryBuilder();
export const createListingQuery = () => new ListingQueryBuilder();
