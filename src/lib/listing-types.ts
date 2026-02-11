// Marketplace Listing Management - Shared Type Contracts
// Zero external dependencies. Framework-agnostic.

/** Listing lifecycle states */
export enum ListingStatus {
    PRIVATE = "PRIVATE",           // Unit exists but not listed
    ACTIVE = "ACTIVE",             // Listed and visible in marketplace
    SUSPENDED = "SUSPENDED",       // Temporarily hidden from marketplace
    PENDING = "PENDING",           // Listing created but not yet active
    EXPIRED = "EXPIRED",           // Listing has expired
    MAINTENANCE = "MAINTENANCE",   // Temporarily removed for maintenance
    COMING_SOON = "COMING_SOON"   // Listed but not yet available
}

/** Actions that can be performed on listings */
export enum ListingAction {
    CREATE = "CREATE",
    REMOVE = "REMOVE",
    SUSPEND = "SUSPEND",
    ACTIVATE = "ACTIVATE",
    UPDATE = "UPDATE",
    EXPIRE = "EXPIRE",
    MAINTENANCE_START = "MAINTENANCE_START",
    MAINTENANCE_END = "MAINTENANCE_END",
    AUTO_ACTIVATE = "AUTO_ACTIVATE",
    AUTO_EXPIRE = "AUTO_EXPIRE",
    SET_COMING_SOON = "SET_COMING_SOON"
}

/** Bulk operation types */
export enum BulkListingActionType {
    LIST = "LIST",
    UNLIST = "UNLIST",
    SUSPEND = "SUSPEND",
    MAINTENANCE_START = "MAINTENANCE_START",
    MAINTENANCE_END = "MAINTENANCE_END"
}

/** Discriminated union for typed success/error handling */
export type Result<T, E extends string> =
    | { success: true; data: T }
    | { success: false; error: E; message?: string };

/** Input for creating a new listing */
export interface CreateListingData {
    unitId: string;
    title?: string;
    description?: string;
    price?: number;
    availabilityDate?: Date;
    expirationDate?: Date;
    reason?: string; // For maintenance operations
}

/** Input for updating an existing listing */
export interface UpdateListingData {
    title?: string;
    description?: string;
    price?: number;
    availabilityDate?: Date;
    expirationDate?: Date;
}

/** Audit entry for listing changes */
export interface ListingAuditEntry {
    id: string;
    unitId: string;
    listingId?: string;
    action: ListingAction;
    previousStatus?: ListingStatus;
    newStatus: ListingStatus;
    userId: string;
    timestamp: Date;
    reason?: string;
    metadata?: Record<string, unknown>;
}

/** Bulk operation definition */
export interface BulkListingOperation {
    unitId: string;
    action: BulkListingActionType;
    listingData?: CreateListingData;
}

/** Result of a bulk operation */
export interface BulkResult {
    successful: string[];
    failed: Array<{
        unitId: string;
        error: string;
    }>;
    summary: {
        total: number;
        succeeded: number;
        failed: number;
    };
}

/** Extended unit data with listing information */
export interface UnitWithListingStatus {
    id: string;
    unitNumber: string;
    propertyId: string;
    rentAmount?: number;
    bedrooms?: number;
    bathrooms?: number;
    squareFootage?: number;
    listing?: {
        id: string;
        status: ListingStatus;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        price: number;
        availabilityDate?: Date;
        expirationDate?: Date;
    };
    listingHistory?: ListingAuditEntry[];
}

/** Marketplace visibility status */
export interface VisibilityStatus {
    isVisible: boolean;
    status: ListingStatus;
    lastUpdated: Date;
}

/** Marketplace data for synchronization */
export interface MarketplaceData {
    title: string;
    description: string;
    price: number;
    unitDetails: {
        unitNumber: string;
        bedrooms?: number;
        bathrooms?: number;
        squareFootage?: number;
    };
    propertyDetails: {
        name?: string;
        address: string;
        city: string;
        amenities?: string;
    };
}

/** Maintenance mode configuration */
export interface MaintenanceModeConfig {
    unitId: string;
    maintenanceRequestId?: string;
    startDate: Date;
    estimatedEndDate?: Date;
    reason: string;
    notifyTenants?: boolean;
    autoRestore?: boolean;
}

/** Maintenance mode status */
export interface MaintenanceModeStatus {
    isInMaintenance: boolean;
    maintenanceRequestId?: string;
    startDate?: Date;
    estimatedEndDate?: Date;
    reason?: string;
    previousStatus?: ListingStatus;
    canRestore: boolean;
}

/** Result of maintenance mode operations */
export type MaintenanceModeResult = Result<
    { unitId: string; status: ListingStatus; maintenanceRequestId?: string },
    "UNIT_NOT_FOUND" | "LISTING_NOT_FOUND" | "INVALID_TRANSITION" | "PERMISSION_DENIED" | "VALIDATION_FAILED"
>;

/** Listing performance metrics */
export interface ListingPerformanceMetrics {
    listingId: string;
    unitId: string;
    daysListed: number;
    applicationCount: number;
    viewCount?: number;
    conversionRate?: number;
    averageTimeToApplication?: number;
}

/** Errors during listing creation */
export enum CreateListingError {
    UNIT_NOT_FOUND = "UNIT_NOT_FOUND",
    UNIT_HAS_ACTIVE_LEASE = "UNIT_HAS_ACTIVE_LEASE",
    UNIT_ALREADY_LISTED = "UNIT_ALREADY_LISTED",
    INVALID_UNIT_DATA = "INVALID_UNIT_DATA",
    PERMISSION_DENIED = "PERMISSION_DENIED",
    VALIDATION_FAILED = "VALIDATION_FAILED"
}

/** Errors during listing removal */
export enum RemoveListingError {
    LISTING_NOT_FOUND = "LISTING_NOT_FOUND",
    UNIT_NOT_FOUND = "UNIT_NOT_FOUND",
    PERMISSION_DENIED = "PERMISSION_DENIED",
    CLEANUP_FAILED = "CLEANUP_FAILED"
}

/** Errors during status updates */
export enum UpdateStatusError {
    LISTING_NOT_FOUND = "LISTING_NOT_FOUND",
    INVALID_TRANSITION = "INVALID_TRANSITION",
    PERMISSION_DENIED = "PERMISSION_DENIED",
    VALIDATION_FAILED = "VALIDATION_FAILED"
}

/** Errors during bulk operations */
export enum BulkOperationError {
    INVALID_INPUT = "INVALID_INPUT",
    PERMISSION_DENIED = "PERMISSION_DENIED",
    PARTIAL_FAILURE = "PARTIAL_FAILURE",
    TRANSACTION_FAILED = "TRANSACTION_FAILED"
}

/** Result of createListing() */
export type CreateListingResult = Result<
    { listingId: string; status: ListingStatus },
    CreateListingError
>;

/** Result of removeListing() */
export type RemoveListingResult = Result<
    { success: true },
    RemoveListingError
>;

/** Result of updateListingStatus() */
export type UpdateStatusResult = Result<
    { listingId: string; newStatus: ListingStatus },
    UpdateStatusError
>;

/** Result of bulkUpdateListings() */
export type BulkUpdateResult = Result<
    BulkResult,
    BulkOperationError
>;

/** Result of getListingHistory() */
export type ListingHistoryResult = Result<
    ListingAuditEntry[],
    "UNIT_NOT_FOUND" | "PERMISSION_DENIED"
>;

/** Valid state transitions for listing status */
export const VALID_STATUS_TRANSITIONS: Record<ListingStatus, ListingStatus[]> = {
    [ListingStatus.PRIVATE]: [ListingStatus.ACTIVE, ListingStatus.PENDING, ListingStatus.COMING_SOON],
    [ListingStatus.PENDING]: [ListingStatus.ACTIVE, ListingStatus.PRIVATE, ListingStatus.COMING_SOON],
    [ListingStatus.COMING_SOON]: [ListingStatus.ACTIVE, ListingStatus.PRIVATE, ListingStatus.SUSPENDED],
    [ListingStatus.ACTIVE]: [ListingStatus.PRIVATE, ListingStatus.SUSPENDED, ListingStatus.EXPIRED, ListingStatus.MAINTENANCE],
    [ListingStatus.SUSPENDED]: [ListingStatus.ACTIVE, ListingStatus.PRIVATE, ListingStatus.MAINTENANCE],
    [ListingStatus.EXPIRED]: [ListingStatus.ACTIVE, ListingStatus.PRIVATE, ListingStatus.COMING_SOON],
    [ListingStatus.MAINTENANCE]: [ListingStatus.ACTIVE, ListingStatus.PRIVATE, ListingStatus.SUSPENDED]
};

/** Helper function to validate status transitions */
export function isValidStatusTransition(from: ListingStatus, to: ListingStatus): boolean {
    return VALID_STATUS_TRANSITIONS[from].includes(to);
}