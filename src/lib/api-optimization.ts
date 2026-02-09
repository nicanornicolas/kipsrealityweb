/**
 * API optimization utilities
 * Provides pagination, filtering, and response optimization for API endpoints
 */

import { NextRequest } from "next/server";

export interface PaginationParams {
  page: number;
  limit: number;
  offset: number;
}

export interface FilterParams {
  search?: string;
  status?: string;
  propertyId?: string;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
  filters?: FilterParams;
}

/**
 * Parse pagination parameters from request
 */
export function parsePaginationParams(request: NextRequest): PaginationParams {
  const { searchParams } = new URL(request.url);
  
  const page = Math.max(1, parseInt(searchParams.get("page") || "1"));
  const limit = Math.min(100, Math.max(1, parseInt(searchParams.get("limit") || "20")));
  const offset = (page - 1) * limit;

  return { page, limit, offset };
}

/**
 * Parse filter parameters from request
 */
export function parseFilterParams(request: NextRequest): FilterParams {
  const { searchParams } = new URL(request.url);
  
  const filters: FilterParams = {};

  if (searchParams.has("search")) {
    filters.search = searchParams.get("search")!;
  }

  if (searchParams.has("status")) {
    filters.status = searchParams.get("status")!;
  }

  if (searchParams.has("propertyId")) {
    filters.propertyId = searchParams.get("propertyId")!;
  }

  if (searchParams.has("dateFrom")) {
    filters.dateFrom = new Date(searchParams.get("dateFrom")!);
  }

  if (searchParams.has("dateTo")) {
    filters.dateTo = new Date(searchParams.get("dateTo")!);
  }

  if (searchParams.has("sortBy")) {
    filters.sortBy = searchParams.get("sortBy")!;
  }

  if (searchParams.has("sortOrder")) {
    filters.sortOrder = searchParams.get("sortOrder") as "asc" | "desc";
  }

  return filters;
}

/**
 * Build Prisma where clause from filters
 */
export function buildWhereClause(filters: FilterParams): any {
  const where: any = {};

  if (filters.search) {
    where.OR = [
      { title: { contains: filters.search, mode: "insensitive" } },
      { description: { contains: filters.search, mode: "insensitive" } },
      { unit: { unitNumber: { contains: filters.search, mode: "insensitive" } } },
      { unit: { property: { name: { contains: filters.search, mode: "insensitive" } } } }
    ];
  }

  if (filters.status) {
    where.status = filters.status;
  }

  if (filters.propertyId) {
    where.unit = {
      ...where.unit,
      propertyId: filters.propertyId
    };
  }

  if (filters.dateFrom || filters.dateTo) {
    where.createdAt = {};
    if (filters.dateFrom) {
      where.createdAt.gte = filters.dateFrom;
    }
    if (filters.dateTo) {
      where.createdAt.lte = filters.dateTo;
    }
  }

  return where;
}

/**
 * Build Prisma orderBy clause from filters
 */
export function buildOrderByClause(filters: FilterParams): any {
  if (filters.sortBy) {
    return { [filters.sortBy]: filters.sortOrder || "desc" };
  }
  
  return { updatedAt: "desc" };
}

/**
 * Create paginated response
 */
export function createPaginatedResponse<T>(
  data: T[],
  total: number,
  pagination: PaginationParams,
  filters?: FilterParams
): PaginatedResponse<T> {
  const totalPages = Math.ceil(total / pagination.limit);
  
  return {
    data,
    pagination: {
      page: pagination.page,
      limit: pagination.limit,
      total,
      totalPages,
      hasNext: pagination.page < totalPages,
      hasPrev: pagination.page > 1
    },
    filters
  };
}

/**
 * Response optimization utilities
 */
export class ResponseOptimizer {
  /**
   * Compress response data by removing unnecessary fields
   */
  static optimizeListingResponse(listing: any): any {
    return {
      id: listing.id,
      status: listing.status,
      title: listing.title,
      description: listing.description,
      price: listing.price,
      createdAt: listing.createdAt,
      updatedAt: listing.updatedAt,
      availabilityDate: listing.availabilityDate,
      expirationDate: listing.expirationDate,
      unit: listing.unit ? {
        id: listing.unit.id,
        unitNumber: listing.unit.unitNumber,
        bedrooms: listing.unit.bedrooms,
        bathrooms: listing.unit.bathrooms,
        rent: listing.unit.rent,
        property: listing.unit.property ? {
          id: listing.unit.property.id,
          name: listing.unit.property.name,
          address: listing.unit.property.address,
          city: listing.unit.property.city,
          state: listing.unit.property.state
        } : null
      } : null,
      _meta: {
        applicationCount: listing.unit?.tenantApplications?.length || 0,
        hasActiveLease: listing.unit?.leases?.length > 0,
        daysSinceListed: listing.createdAt ? 
          Math.floor((Date.now() - new Date(listing.createdAt).getTime()) / (1000 * 60 * 60 * 24)) : 0
      }
    };
  }

  /**
   * Optimize unit response
   */
  static optimizeUnitResponse(unit: any): any {
    return {
      id: unit.id,
      unitNumber: unit.unitNumber,
      bedrooms: unit.bedrooms,
      bathrooms: unit.bathrooms,
      rent: unit.rentAmount,
      property: unit.property ? {
        id: unit.property.id,
        name: unit.property.name,
        address: unit.property.address,
        city: unit.property.city,
        state: unit.property.state
      } : null,
      listing: unit.listing ? this.optimizeListingResponse(unit.listing) : null,
      lease: unit.leases?.length > 0 ? {
        id: unit.leases[0].id,
        status: unit.leases[0].leaseStatus,
        startDate: unit.leases[0].startDate,
        endDate: unit.leases[0].endDate
      } : null,
      _meta: {
        isAvailableForListing: !unit.listing && (!unit.leases || unit.leases.length === 0),
        listingStatus: unit.listing?.status || "PRIVATE",
        applicationCount: unit.tenantApplications?.length || 0
      }
    };
  }

  /**
   * Optimize bulk operation response
   */
  static optimizeBulkResponse(result: any): any {
    return {
      summary: result.summary,
      successful: result.successful,
      failed: result.failed.map((failure: any) => ({
        unitId: failure.unitId,
        error: failure.error,
        code: this.getErrorCode(failure.error)
      })),
      _meta: {
        executionTime: result.executionTime,
        timestamp: new Date().toISOString()
      }
    };
  }

  /**
   * Get standardized error codes
   */
  private static getErrorCode(error: string): string {
    if (error.includes("already has a listing")) return "DUPLICATE_LISTING";
    if (error.includes("active lease")) return "ACTIVE_LEASE";
    if (error.includes("not found")) return "NOT_FOUND";
    if (error.includes("permission")) return "PERMISSION_DENIED";
    return "UNKNOWN_ERROR";
  }
}

/**
 * Request validation utilities
 */
export class RequestValidator {
  /**
   * Validate pagination parameters
   */
  static validatePagination(params: PaginationParams): string[] {
    const errors: string[] = [];

    if (params.page < 1) {
      errors.push("Page must be greater than 0");
    }

    if (params.limit < 1 || params.limit > 100) {
      errors.push("Limit must be between 1 and 100");
    }

    return errors;
  }

  /**
   * Validate filter parameters
   */
  static validateFilters(filters: FilterParams): string[] {
    const errors: string[] = [];

    if (filters.search && filters.search.length < 2) {
      errors.push("Search term must be at least 2 characters");
    }

    if (filters.status && !["PRIVATE", "ACTIVE", "SUSPENDED", "PENDING", "EXPIRED"].includes(filters.status)) {
      errors.push("Invalid status value");
    }

    if (filters.sortBy && !["createdAt", "updatedAt", "title", "price", "status"].includes(filters.sortBy)) {
      errors.push("Invalid sortBy field");
    }

    if (filters.sortOrder && !["asc", "desc"].includes(filters.sortOrder)) {
      errors.push("Invalid sortOrder value");
    }

    if (filters.dateFrom && filters.dateTo && filters.dateFrom > filters.dateTo) {
      errors.push("dateFrom must be before dateTo");
    }

    return errors;
  }

  /**
   * Validate bulk operation request
   */
  static validateBulkRequest(body: any): string[] {
    const errors: string[] = [];

    if (!body.action) {
      errors.push("Action is required");
    }

    if (!Array.isArray(body.unitIds) || body.unitIds.length === 0) {
      errors.push("Unit IDs array is required and must not be empty");
    }

    if (body.unitIds && body.unitIds.length > 50) {
      errors.push("Cannot process more than 50 units at once");
    }

    if (!["LIST", "UNLIST", "SUSPEND", "ACTIVATE"].includes(body.action)) {
      errors.push("Invalid action");
    }

    return errors;
  }
}

/**
 * Performance monitoring for API endpoints
 */
export class APIPerformanceMonitor {
  private static metrics = new Map<string, {
    count: number;
    totalTime: number;
    avgTime: number;
    maxTime: number;
    minTime: number;
  }>();

  static startTimer(endpoint: string): () => void {
    const startTime = Date.now();
    
    return () => {
      const duration = Date.now() - startTime;
      this.recordMetric(endpoint, duration);
    };
  }

  private static recordMetric(endpoint: string, duration: number): void {
    const existing = this.metrics.get(endpoint) || {
      count: 0,
      totalTime: 0,
      avgTime: 0,
      maxTime: 0,
      minTime: Infinity
    };

    existing.count++;
    existing.totalTime += duration;
    existing.avgTime = existing.totalTime / existing.count;
    existing.maxTime = Math.max(existing.maxTime, duration);
    existing.minTime = Math.min(existing.minTime, duration);

    this.metrics.set(endpoint, existing);

    // Log slow requests
    if (duration > 2000) {
      console.warn(`Slow API request: ${endpoint} took ${duration}ms`);
    }
  }

  static getMetrics(): Record<string, any> {
    const result: Record<string, any> = {};
    for (const [endpoint, metrics] of this.metrics.entries()) {
      result[endpoint] = { ...metrics };
    }
    return result;
  }

  static resetMetrics(): void {
    this.metrics.clear();
  }
}
