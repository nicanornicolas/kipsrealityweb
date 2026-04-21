import { Property, ApartmentComplexDetail, HouseDetail } from './types';
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
export declare const postProperty: (propertyData: PropertyPayload) => Promise<any>;
export declare const getProperties: (managerId?: string, organizationId?: string) => Promise<PropertyPayload[]>;
export declare const getPropertyById: (id: string) => Promise<PropertyPayload>;
export declare const updateProperty: (id: string, updatedData: PropertyPayload) => Promise<any>;
export declare const deleteProperty: (id: string) => Promise<any>;
