// libs/property/src/client.ts
// CLIENT-SAFE EXPORTS ONLY
// This barrel must never import server-only modules (prisma, server-only, next/headers)

// Types from types.ts - all are safe (no external dependencies)
export type {
  Appliance,
  Categories,
  Property,
  ApartmentComplexDetail,
  HouseDetail,
  CondoDetail,
  LandDetail,
  TownhouseDetail,
  PropertyType,
  PropertyFormProps,
  Unit,
  ApplianceInput,
  UnitFormData,
} from './lib/types';

import type {
  Property,
  ApartmentComplexDetail,
  HouseDetail,
} from './lib/types';

// PropertyPayload type (safe - just a type definition)
export type PropertyPayload = Property & {
  propertyDetails?: ApartmentComplexDetail | HouseDetail;
  manager?: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    orgUserId: string;
    organizationId: string;
  };
};

// Types and enums from listing-types.ts - all are safe (no external dependencies)
export {
  ListingStatus,
  ListingAction,
  BulkListingActionType,
  CreateListingError,
  RemoveListingError,
  UpdateStatusError,
  BulkOperationError,
  VALID_STATUS_TRANSITIONS,
  isValidStatusTransition,
} from './lib/listing-types';

export type {
  Result,
  CreateListingData,
  UpdateListingData,
  ListingAuditEntry,
  BulkListingOperation,
  BulkResult,
  UnitWithListingStatus,
  VisibilityStatus,
  MarketplaceData,
  MaintenanceModeConfig,
  MaintenanceModeStatus,
  MaintenanceModeResult,
  ListingPerformanceMetrics,
  CreateListingResult,
  RemoveListingResult,
  UpdateStatusResult,
  BulkUpdateResult,
  ListingHistoryResult,
} from './lib/listing-types';

// API-based functions - safe for client (use fetch, not prisma)
export { fetchPropertyTypes } from './lib/property-type';
export { fetchAppliances } from './lib/appliance';
export { fetchCategories } from './lib/categories';
export { postProperty } from './lib/property-post';
export { updateProperty, deleteProperty } from './lib/property-manager';

// Client-safe unit functions (defined inline to avoid server-only imports)
export const fetchUnitDetails = async (
  propertyId: string,
  unitNumber: string,
  isServerSide: boolean,
) => {
  try {
    let url: string;

    if (isServerSide) {
      const baseUrl =
        process.env.NEXT_PUBLIC_BASE_URL ||
        process.env.NEXTAUTH_URL ||
        process.env.VERCEL_URL ||
        'http://localhost:3000';
      const fullBaseUrl = baseUrl.startsWith('http')
        ? baseUrl
        : `https://${baseUrl}`;
      url = `${fullBaseUrl}/api/units/${propertyId}/${unitNumber}`;
    } else {
      url = `/api/units/${propertyId}/${unitNumber}`;
    }

    const response = await fetch(url);
    if (!response.ok) {
      console.error(
        `API Error: ${response.status} ${response.statusText} for ${url}`,
      );
      throw new Error('Failed to fetch unit details');
    }
    return await response.json();
  } catch (error) {
    console.error('fetchUnitDetails:', error);
    return null;
  }
};

export const updateUnitDetails = async (
  propertyId: string,
  unitNumber: string,
  data: any,
): Promise<{
  success: boolean;
  message: string;
  isNewUnit?: boolean;
  unit?: any;
}> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/units/${propertyId}/${unitNumber}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      },
    );

    if (!response.ok) {
      console.error(`API Error: ${response.status} ${response.statusText}`);
      throw new Error('Failed to update unit');
    }

    const resData = await response.json();
    return {
      success: true,
      message: resData.message || 'Unit updated',
      isNewUnit: resData.isNewUnit,
      unit: resData.unit,
    };
  } catch (error: any) {
    console.error('updateUnitDetails:', error);
    return { success: false, message: error.message || 'Update failed' };
  }
};
