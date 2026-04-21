import { AllocateBillResult, UtilityAllocationResult, UtilityAllocationPayload, AllocationMethod } from './utility-types';
export declare function allocateUtilityBill(billId: string): Promise<AllocateBillResult>;
export declare function getAllocationsForBill(billId: string): Promise<UtilityAllocationResult[]>;
export declare class UtilityAllocationService {
    /**
     * Calculates utility splits for a property.
     * In the future, if method === 'AI_SUGGESTED', this will ping the Python FastAPI sidecar.
     */
    static calculateAllocations(propertyId: string, billId: string, providerName: "KPLC" | "NAIROBI_WATER" | "OTHER", totalAmount: number, dueDate: string, method: AllocationMethod): Promise<UtilityAllocationPayload>;
}
