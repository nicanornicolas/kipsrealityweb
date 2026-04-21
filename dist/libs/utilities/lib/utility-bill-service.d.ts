import { TransitionError, UtilityBillStatus, UtilitySplitMethod, CreateUtilityBillInput, CreateBillResult, ApproveBillResult, GenerateInvoicesResult, UtilityAllocationResult, Result } from './utility-types';
type TransitionResult = Result<{
    status: UtilityBillStatus;
}, TransitionError>;
export interface UtilityBillDTO {
    id: string;
    propertyId: string;
    providerName: string;
    totalAmount: number;
    billDate: Date;
    dueDate: Date;
    status: UtilityBillStatus;
    splitMethod: UtilitySplitMethod;
    createdAt: Date;
}
export declare function createBill(input: CreateUtilityBillInput): Promise<CreateBillResult>;
export declare function getBillById(billId: string): Promise<UtilityBillDTO | null>;
export declare function transitionToProcessing(billId: string): Promise<TransitionResult>;
export declare function approveBill(billId: string): Promise<ApproveBillResult>;
export declare function generateInvoicesForBill(billId: string): Promise<GenerateInvoicesResult>;
export declare function getAllocationsForBillFromBillService(billId: string): Promise<UtilityAllocationResult[]>;
export {};
