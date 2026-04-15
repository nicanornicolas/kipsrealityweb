export interface Appliance {
    id: string;
    name: string;
    description?: string;
    createdAt?: string;
}
export interface Categories {
    id: string;
    name: string;
    description: string;
}
export interface Property {
    id?: string;
    listingId?: string;
    managerId?: string;
    name?: string;
    organizationId?: string;
    propertyTypeId: string;
    locationId?: string;
    city: string;
    address: string;
    country?: string;
    zipCode?: string;
    latitude?: number;
    longitude?: number;
    contactPhone?: string;
    contactEmail?: string;
    amenities?: string;
    isFurnished?: boolean;
    availabilityStatus?: string;
    createdAt?: string;
    apartmentComplexDetail?: ApartmentComplexDetail;
    houseDetail?: HouseDetail;
    condoDetail?: CondoDetail;
    landDetail?: LandDetail;
    townhouseDetail?: TownhouseDetail;
    applianceIds?: string[];
    images?: FileList;
}
export interface ApartmentComplexDetail {
    id: string;
    propertyId: string;
    buildingName?: string;
    totalFloors?: number;
    unitNumber?: string;
    size?: number;
    bedrooms?: number;
    bathrooms?: number;
    totalUnits?: number;
    zoning?: string;
}
export interface HouseDetail {
    numberOfFloors?: number;
    bedrooms?: number;
    bathrooms?: number;
    houseName?: string;
    size?: number;
    totalUnits?: number;
}
export interface CondoDetail {
    buildingName?: string;
    floorNumber?: number;
    unitNumber?: string;
    totalFloorsInBuilding?: number;
    bedrooms?: number;
    bathrooms?: number;
    size?: number;
    hoaFees?: number;
    hasBalcony?: boolean;
    amenities?: string;
}
export interface LandDetail {
    lotSize?: number;
    zoning?: string;
    isSubdivided?: boolean;
    hasUtilities?: boolean;
    topography?: string;
    soilType?: string;
    accessRoad?: boolean;
    landUse?: string;
}
export interface TownhouseDetail {
    townhouseName?: string;
    numberOfFloors?: number;
    bedrooms?: number;
    bathrooms?: number;
    size?: number;
    unitNumber?: string;
    endUnit?: boolean;
    hasGarage?: boolean;
    garageSpaces?: number;
    hasBackyard?: boolean;
    backyardSize?: number;
    hoaFees?: number;
    zoning?: string;
}
export interface PropertyType {
    id: string;
    name: string;
    description: string;
}
export interface PropertyFormProps {
    initialData?: any;
    mode?: "create" | "edit";
    onSuccess?: () => void;
}
export interface Unit {
    id: string;
    propertyId: string;
    complexDetailId?: string | null;
    houseDetailId?: string | null;
    unitNumber: string;
    floorNumber?: number | null;
    bedrooms?: number | null;
    bathrooms?: number | null;
    isOccupied: boolean;
    rentAmount?: number | null;
    unitName?: string | null;
    currency?: string | null;
    createdAt: string;
    appliances?: Appliance[];
    listing?: {
        id: string;
        status?: {
            name?: string;
        } | null;
    } | null;
}
export interface ApplianceInput {
    name: string;
}
export interface UnitFormData {
    bedrooms: number;
    bathrooms: number;
    floorNumber?: number | null;
    rentAmount?: number | null;
    unitName?: string;
    currency?: string;
    isOccupied?: boolean;
    appliances?: ApplianceInput[];
}
