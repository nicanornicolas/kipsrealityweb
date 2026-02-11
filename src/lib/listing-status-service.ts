/**
 * Listing Status Service - Guarantees status consistency across the application
 * Provides reliable mapping between TypeScript ListingStatus enum and database records
 */

import { prisma } from "./db";
import { ListingStatus } from "./listing-types";

// Cache for status IDs to reduce database queries
const statusIdCache = new Map<ListingStatus, string>();

/**
 * Ensures all required ListingStatus records exist in the database
 * Returns a map of status names to IDs
 */
export async function ensureListingStatuses(): Promise<Map<ListingStatus, string>> {
  const requiredStatuses = [
    { name: 'PRIVATE', description: 'Unit exists but not listed' },
    { name: 'ACTIVE', description: 'Listed and visible in marketplace' },
    { name: 'SUSPENDED', description: 'Temporarily hidden from marketplace' },
    { name: 'PENDING', description: 'Listing created but not yet active' },
    { name: 'EXPIRED', description: 'Listing has expired' },
    { name: 'MAINTENANCE', description: 'Temporarily removed for maintenance' },
    { name: 'COMING_SOON', description: 'Listed but not yet available' },
  ];

  const statusMap = new Map<ListingStatus, string>();

  for (const { name, description } of requiredStatuses) {
    const statusName = name as ListingStatus;
    
    // Use upsert to guarantee existence
    const status = await prisma.listingStatus.upsert({
      where: { name },
      update: { description },
      create: { name, description },
    });

    statusMap.set(statusName, status.id);
    statusIdCache.set(statusName, status.id);
  }

  return statusMap;
}

/**
 * Gets the database ID for a ListingStatus enum value
 * Guarantees the status record exists before returning
 */
export async function getStatusId(status: ListingStatus): Promise<string> {
  // Check cache first
  const cachedId = statusIdCache.get(status);
  if (cachedId) {
    return cachedId;
  }

  // Try to find existing status (case-sensitive search)
  const existingStatus = await prisma.listingStatus.findFirst({
    where: {
      name: {
        equals: status
      }
    }
  });

  if (existingStatus) {
    statusIdCache.set(status, existingStatus.id);
    return existingStatus.id;
  }

  // Create missing status
  const newStatus = await prisma.listingStatus.create({
    data: {
      name: status,
      description: getDefaultDescription(status),
    }
  });

  statusIdCache.set(status, newStatus.id);
  return newStatus.id;
}

/**
 * Gets all status IDs at once (for bulk operations)
 */
export async function getAllStatusIds(): Promise<Record<ListingStatus, string>> {
  const statuses = await prisma.listingStatus.findMany();
  const result: Partial<Record<ListingStatus, string>> = {};

  for (const status of statuses) {
    const statusEnum = status.name as ListingStatus;
    result[statusEnum] = status.id;
    statusIdCache.set(statusEnum, status.id);
  }

  // Ensure any missing statuses are created
  const requiredStatuses: ListingStatus[] = [
    ListingStatus.PRIVATE,
    ListingStatus.ACTIVE,
    ListingStatus.SUSPENDED,
    ListingStatus.PENDING,
    ListingStatus.EXPIRED,
    ListingStatus.MAINTENANCE,
    ListingStatus.COMING_SOON
  ];

  for (const status of requiredStatuses) {
    if (!result[status]) {
      result[status] = await getStatusId(status);
    }
  }

  return result as Record<ListingStatus, string>;
}

/**
 * Clears the status ID cache (useful for testing)
 */
export function clearStatusCache(): void {
  statusIdCache.clear();
}

/**
 * Determines the appropriate initial status for a listing
 * Based on availability date and other factors
 */
export function determineInitialStatus(availabilityDate?: Date): ListingStatus {
  if (!availabilityDate) {
    return ListingStatus.ACTIVE;
  }

  const now = new Date();
  const availDate = new Date(availabilityDate);
  
  // If availability date is in the future, set as COMING_SOON
  if (availDate > now) {
    return ListingStatus.COMING_SOON;
  }

  return ListingStatus.ACTIVE;
}

/**
 * Maps a listing status to a human-readable description
 */
function getDefaultDescription(status: ListingStatus): string {
  switch (status) {
    case ListingStatus.PRIVATE:
      return 'Unit exists but not listed';
    case ListingStatus.ACTIVE:
      return 'Listed and visible in marketplace';
    case ListingStatus.SUSPENDED:
      return 'Temporarily hidden from marketplace';
    case ListingStatus.PENDING:
      return 'Listing created but not yet active';
    case ListingStatus.EXPIRED:
      return 'Listing has expired';
    case ListingStatus.MAINTENANCE:
      return 'Temporarily removed for maintenance';
    case ListingStatus.COMING_SOON:
      return 'Listed but not yet available';
    default:
      return 'Unknown listing status';
  }
}

/**
 * Validates that a status transition is allowed
 */
export function validateStatusTransition(
  fromStatus: ListingStatus,
  toStatus: ListingStatus
): boolean {
  const validTransitions: Record<ListingStatus, ListingStatus[]> = {
    [ListingStatus.PRIVATE]: [ListingStatus.ACTIVE, ListingStatus.PENDING, ListingStatus.COMING_SOON],
    [ListingStatus.PENDING]: [ListingStatus.ACTIVE, ListingStatus.PRIVATE, ListingStatus.COMING_SOON],
    [ListingStatus.COMING_SOON]: [ListingStatus.ACTIVE, ListingStatus.PRIVATE, ListingStatus.SUSPENDED],
    [ListingStatus.ACTIVE]: [ListingStatus.PRIVATE, ListingStatus.SUSPENDED, ListingStatus.EXPIRED, ListingStatus.MAINTENANCE],
    [ListingStatus.SUSPENDED]: [ListingStatus.ACTIVE, ListingStatus.PRIVATE, ListingStatus.MAINTENANCE],
    [ListingStatus.EXPIRED]: [ListingStatus.ACTIVE, ListingStatus.PRIVATE, ListingStatus.COMING_SOON],
    [ListingStatus.MAINTENANCE]: [ListingStatus.ACTIVE, ListingStatus.PRIVATE, ListingStatus.SUSPENDED]
  };

  return validTransitions[fromStatus]?.includes(toStatus) ?? false;
}