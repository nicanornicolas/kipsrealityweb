// libs/utilities/src/client.ts
// CLIENT-SAFE EXPORTS ONLY
// This barrel must never import server-only modules (prisma, server-only, next/headers)

// Enums and types from utility-types.ts - all are safe (no external dependencies)
export {
  UtilityBillStatus,
  UtilitySplitMethod,
  UtilityImportMethod,
  CreateBillError,
  ReadingError,
  AllocateError,
  TransitionError,
  ApproveError,
  InvoiceError,
  PostError,
} from './lib/utility-types';

export type {
  Result,
  CreateUtilityBillInput,
  CreateUtilityReadingInput,
  UtilitySplitContext,
  UtilityAllocationResult,
  CreateBillResult,
  CreateReadingResult,
  AllocateBillResult,
  ApproveBillResult,
  GenerateInvoicesResult,
  PostBillResult,
  UtilityBillState,
  AllocationMethod,
  UnitAllocation,
  UtilityAllocationPayload,
} from './lib/utility-types';

// Re-export the split method type and utility allocation payload from index.ts
export type { SplitMethod } from './index';
export type { UtilityAllocationPayload as OldUtilityAllocationPayload } from './index';
