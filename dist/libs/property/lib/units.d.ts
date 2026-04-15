import { Unit, UnitFormData } from './types';
export declare const fetchUnits: (propertyId: string) => Promise<Unit[]>;
/**
 * Update specific unit details for a property/unitNumber pair
 */
export declare const updateUnitDetails: (propertyId: string, unitNumber: string, data: Partial<UnitFormData>) => Promise<{
    success: boolean;
    message: string;
    isNewUnit?: boolean;
    unit?: any;
}>;
export declare const fetchUnitDetails: (propertyId: string, unitNumber: string, isServerSide: boolean) => Promise<any>;
