// libs/utilities/src/index.ts

export type SplitMethod = 'RUBS_OCCUPANCY' | 'SQUARE_FOOTAGE' | 'EQUAL' | 'DIRECT_METER';

/**
 * This interface perfectly matches the JSON payload that the future
 * Python FastAPI Sidecar will send via webhook, AND the payload the
 * manual Next.js UI will generate.
 */
export interface UtilityAllocationPayload {
  utilityBillId: string;
  propertyId: string;
  fileUrl?: string; // Optional for manual entry, required for AI
  splitMethod: SplitMethod;
  billingPeriodStart: Date;
  billingPeriodEnd: Date;
  
  // AI Metadata (Nullable for manual entry)
  aiConfidenceScore?: number;
  anomalyFlag?: boolean;
  
  allocations: {
    unitId: string;
    tenantId: string;
    amount: number;
    percentage: number;
    explanation: string; // E.g., "Calculated based on 4 occupants for 28 days."
  }[];
}

// The Facade that Next.js API routes will call
export interface IUtilityService {
  /**
   * Saves the allocation as a DRAFT for Property Manager review
   */
  stageAllocation(payload: UtilityAllocationPayload): Promise<{ billId: string; status: string }>;
  
  /**
   * Approves the draft, generates Tenant Invoices via the Finance module, 
   * and posts to the General Ledger.
   */
  approveAllocation(utilityBillId: string, managerId: string): Promise<{ billId: string; status: string; invoicesGenerated: number }>;
}

// Export the concrete implementation
export { UtilityService } from './lib/utility-service';
export * from './lib/utility-ai-job-store';
export * from './lib/utility-allocation-service';
export * from './lib/utility-bill-service';
export * from './lib/utility-posting-service';
export * from './lib/utility-reading-service';
export * from './lib/utility-types';
export * from './lib/utility-validators';
export * from './lib/notifications/notification-service';
export * from './lib/notifications/sms-factory';

// Re-export the finance module interface for consumers who need to wire up the dependency
export type { IFinanceModule } from '@rentflow/finance';

export * from './lib/utilities';
export * from './lib/queue';
export * from './lib/mail';
export * from './lib/webhook-processors';
