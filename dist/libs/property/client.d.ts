import { Property, ApartmentComplexDetail, HouseDetail } from './lib/types';
export type { Appliance, Categories, Property, ApartmentComplexDetail, HouseDetail, CondoDetail, LandDetail, TownhouseDetail, PropertyType, PropertyFormProps, Unit, ApplianceInput, UnitFormData, } from './lib/types';
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
export { ListingStatus, ListingAction, BulkListingActionType, CreateListingError, RemoveListingError, UpdateStatusError, BulkOperationError, VALID_STATUS_TRANSITIONS, isValidStatusTransition, } from './lib/listing-types';
export type { Result, CreateListingData, UpdateListingData, ListingAuditEntry, BulkListingOperation, BulkResult, UnitWithListingStatus, VisibilityStatus, MarketplaceData, MaintenanceModeConfig, MaintenanceModeStatus, MaintenanceModeResult, ListingPerformanceMetrics, CreateListingResult, RemoveListingResult, UpdateStatusResult, BulkUpdateResult, ListingHistoryResult, } from './lib/listing-types';
export { fetchPropertyTypes } from './lib/property-type';
export { fetchAppliances } from './lib/appliance';
export { fetchCategories } from './lib/categories';
export { postProperty } from './lib/property-post';
export { updateProperty, deleteProperty } from './lib/property-manager';
export declare const fetchUnitDetails: (propertyId: string, unitNumber: string, isServerSide: boolean) => Promise<any>;
export declare const updateUnitDetails: (propertyId: string, unitNumber: string, data: any) => Promise<{
    success: boolean;
    message: string;
    isNewUnit?: boolean;
    unit?: any;
}>;
