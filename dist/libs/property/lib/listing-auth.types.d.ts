/**
 * Shared types for listing authentication and authorization
 * Safe to import in both client and server components
 */
export declare enum UserRole {
    PROPERTY_MANAGER = "PROPERTY_MANAGER",
    ADMIN = "ADMIN",
    SUPER_ADMIN = "SUPER_ADMIN",
    TENANT = "TENANT",
    VENDOR = "VENDOR"
}
export declare enum ListingPermission {
    CREATE_LISTING = "CREATE_LISTING",
    UPDATE_LISTING = "UPDATE_LISTING",
    DELETE_LISTING = "DELETE_LISTING",
    VIEW_LISTING = "VIEW_LISTING",
    BULK_OPERATIONS = "BULK_OPERATIONS",
    VIEW_ANALYTICS = "VIEW_ANALYTICS",
    EXPORT_DATA = "EXPORT_DATA",
    MANAGE_STATUS = "MANAGE_STATUS"
}
export interface RateLimitConfig {
    windowMs: number;
    maxRequests: number;
    skipSuccessfulRequests?: boolean;
    skipFailedRequests?: boolean;
}
