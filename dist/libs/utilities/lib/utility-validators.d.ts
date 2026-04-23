import { z } from 'zod';
import { UtilitySplitMethod, UtilityImportMethod, ReadingError, AllocateError, ApproveError, PostError, CreateUtilityBillInput, CreateUtilityReadingInput, UtilityAllocationResult } from './utility-types';
export declare const CreateUtilityBillInputSchema: z.ZodObject<{
    propertyId: z.ZodString;
    providerName: z.ZodString;
    totalAmount: z.ZodNumber;
    billDate: z.ZodDate;
    dueDate: z.ZodDate;
    splitMethod: z.ZodEnum<typeof UtilitySplitMethod>;
    importMethod: z.ZodOptional<z.ZodEnum<typeof UtilityImportMethod>>;
    fileUrl: z.ZodOptional<z.ZodString>;
    ocrConfidence: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const CreateUtilityReadingInputSchema: z.ZodObject<{
    leaseUtilityId: z.ZodString;
    readingValue: z.ZodNumber;
    readingDate: z.ZodOptional<z.ZodDate>;
}, z.core.$strip>;
interface BillForGuard {
    id: string;
    status: string;
    totalAmount: number;
}
export declare function canAllocateBill(bill: BillForGuard): {
    allowed: true;
} | {
    allowed: false;
    error: AllocateError;
};
export declare function canApproveBill(bill: BillForGuard, allocations: UtilityAllocationResult[]): {
    allowed: true;
} | {
    allowed: false;
    error: ApproveError;
};
export declare function canPostBill(bill: BillForGuard): {
    allowed: true;
} | {
    allowed: false;
    error: PostError;
};
export declare function assertNotPosted(bill: BillForGuard): void;
export declare class PostedBillError extends Error {
    readonly billId: string;
    readonly code: "BILL_ALREADY_POSTED";
    constructor(billId: string);
}
export declare function validateAllocationSum(allocations: UtilityAllocationResult[], billTotal: number): {
    valid: true;
} | {
    valid: false;
    difference: number;
};
export declare function validatePercentageSum(percentages: number[]): {
    valid: true;
} | {
    valid: false;
    sum: number;
};
export declare function validateCustomRatio(ratio: number): {
    valid: true;
} | {
    valid: false;
    error: string;
};
export declare function validateMonotonicReading(newReading: number, previousReading: number | null): {
    valid: true;
} | {
    valid: false;
    error: ReadingError;
};
export declare function validateNonNegativeReading(value: number): {
    valid: true;
} | {
    valid: false;
    error: ReadingError;
};
export declare function validateNewReading(value: number, previousReading: number | null): {
    valid: true;
} | {
    valid: false;
    error: ReadingError;
};
export declare function parseCreateBillInput(input: unknown): {
    success: true;
    data: CreateUtilityBillInput;
} | {
    success: false;
    errors: z.ZodError;
};
export declare function parseCreateReadingInput(input: unknown): {
    success: true;
    data: CreateUtilityReadingInput;
} | {
    success: false;
    errors: z.ZodError;
};
export {};
