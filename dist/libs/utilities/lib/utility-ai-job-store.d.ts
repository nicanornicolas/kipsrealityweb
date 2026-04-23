import { AllocationMethod, UtilityAllocationPayload } from './utility-types';
export type UtilityAiJobStatus = 'PROCESSING_AI' | 'PENDING_REVIEW' | 'FAILED';
export interface UtilityAiJob {
    id: string;
    billId: string;
    propertyId: string;
    providerName: 'KPLC' | 'NAIROBI_WATER' | 'OTHER';
    method: AllocationMethod;
    totalAmount: number;
    dueDate: string;
    createdAt: string;
    status: UtilityAiJobStatus;
    filePath: string;
    confidenceScore?: number;
    flags?: Array<{
        type: 'WARNING' | 'INFO';
        message: string;
    }>;
    payload?: UtilityAllocationPayload;
    error?: string;
}
export declare const utilityAiJobStore: {
    create(job: UtilityAiJob): Promise<UtilityAiJob>;
    get(jobId: string): Promise<UtilityAiJob | null>;
    update(jobId: string, patch: Partial<UtilityAiJob>): Promise<UtilityAiJob | null>;
};
