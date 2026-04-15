import { ListingStatus } from './listing-types';
/**
 * Ensures all required ListingStatus records exist in the database
 * Returns a map of status names to IDs
 */
export declare function ensureListingStatuses(): Promise<Map<ListingStatus, string>>;
/**
 * Gets the database ID for a ListingStatus enum value
 * Guarantees the status record exists before returning
 */
export declare function getStatusId(status: ListingStatus): Promise<string>;
/**
 * Gets all status IDs at once (for bulk operations)
 */
export declare function getAllStatusIds(): Promise<Record<ListingStatus, string>>;
/**
 * Clears the status ID cache (useful for testing)
 */
export declare function clearStatusCache(): void;
/**
 * Determines the appropriate initial status for a listing
 * Based on availability date and other factors
 */
export declare function determineInitialStatus(availabilityDate?: Date): ListingStatus;
/**
 * Validates that a status transition is allowed
 */
export declare function validateStatusTransition(fromStatus: ListingStatus, toStatus: ListingStatus): boolean;
