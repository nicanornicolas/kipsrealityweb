var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var utility_validators_exports = {};
__export(utility_validators_exports, {
  CreateUtilityBillInputSchema: () => CreateUtilityBillInputSchema,
  CreateUtilityReadingInputSchema: () => CreateUtilityReadingInputSchema,
  PostedBillError: () => PostedBillError,
  assertNotPosted: () => assertNotPosted,
  canAllocateBill: () => canAllocateBill,
  canApproveBill: () => canApproveBill,
  canPostBill: () => canPostBill,
  parseCreateBillInput: () => parseCreateBillInput,
  parseCreateReadingInput: () => parseCreateReadingInput,
  validateAllocationSum: () => validateAllocationSum,
  validateCustomRatio: () => validateCustomRatio,
  validateMonotonicReading: () => validateMonotonicReading,
  validateNewReading: () => validateNewReading,
  validateNonNegativeReading: () => validateNonNegativeReading,
  validatePercentageSum: () => validatePercentageSum
});
module.exports = __toCommonJS(utility_validators_exports);
var import_zod = require("zod");
var import_utility_types = require("./utility-types");
const CreateUtilityBillInputSchema = import_zod.z.object({
  propertyId: import_zod.z.string().min(1, "Property ID is required"),
  providerName: import_zod.z.string().min(1, "Provider name is required"),
  totalAmount: import_zod.z.number().positive("Bill amount must be positive"),
  billDate: import_zod.z.date(),
  dueDate: import_zod.z.date(),
  splitMethod: import_zod.z.nativeEnum(import_utility_types.UtilitySplitMethod),
  importMethod: import_zod.z.nativeEnum(import_utility_types.UtilityImportMethod).optional(),
  fileUrl: import_zod.z.string().url().optional(),
  ocrConfidence: import_zod.z.number().min(0).max(1).optional()
}).refine(
  (data) => data.dueDate >= data.billDate,
  { message: "Due date must be on or after bill date", path: ["dueDate"] }
);
const CreateUtilityReadingInputSchema = import_zod.z.object({
  leaseUtilityId: import_zod.z.string().min(1, "Lease utility ID is required"),
  readingValue: import_zod.z.number().nonnegative("Reading value cannot be negative"),
  readingDate: import_zod.z.date().optional()
});
function canAllocateBill(bill) {
  if (bill.status !== import_utility_types.UtilityBillStatus.DRAFT) {
    return { allowed: false, error: import_utility_types.AllocateError.INVALID_STATUS };
  }
  return { allowed: true };
}
function canApproveBill(bill, allocations) {
  if (bill.status !== import_utility_types.UtilityBillStatus.PROCESSING) {
    return { allowed: false, error: import_utility_types.ApproveError.INVALID_STATUS };
  }
  if (!allocations || allocations.length === 0) {
    return { allowed: false, error: import_utility_types.ApproveError.NO_ALLOCATIONS };
  }
  const sumCheck = validateAllocationSum(allocations, bill.totalAmount);
  if (!sumCheck.valid) {
    return { allowed: false, error: import_utility_types.ApproveError.ALLOCATION_SUM_MISMATCH };
  }
  return { allowed: true };
}
function canPostBill(bill) {
  if (bill.status !== import_utility_types.UtilityBillStatus.APPROVED) {
    return { allowed: false, error: import_utility_types.PostError.NOT_APPROVED };
  }
  return { allowed: true };
}
function assertNotPosted(bill) {
  if (bill.status === import_utility_types.UtilityBillStatus.POSTED) {
    throw new PostedBillError(bill.id);
  }
}
class PostedBillError extends Error {
  billId;
  code = "BILL_ALREADY_POSTED";
  constructor(billId) {
    super(`Cannot modify bill ${billId}: already posted to financials`);
    this.billId = billId;
    this.name = "PostedBillError";
  }
}
const MONETARY_PRECISION = 0.01;
function validateAllocationSum(allocations, billTotal) {
  const sum = allocations.reduce((acc, a) => acc + a.amount, 0);
  const difference = Math.abs(sum - billTotal);
  if (difference > MONETARY_PRECISION) {
    return { valid: false, difference };
  }
  return { valid: true };
}
function validatePercentageSum(percentages) {
  const sum = percentages.reduce((acc, p) => acc + p, 0);
  const difference = Math.abs(sum - 1);
  if (difference > 1e-4) {
    return { valid: false, sum };
  }
  return { valid: true };
}
function validateCustomRatio(ratio) {
  if (ratio < 0 || ratio > 1) {
    return { valid: false, error: `Ratio ${ratio} must be between 0.0 and 1.0` };
  }
  return { valid: true };
}
function validateMonotonicReading(newReading, previousReading) {
  if (previousReading === null) {
    return { valid: true };
  }
  if (newReading < previousReading) {
    return { valid: false, error: import_utility_types.ReadingError.DECREASING_VALUE };
  }
  return { valid: true };
}
function validateNonNegativeReading(value) {
  if (value < 0) {
    return { valid: false, error: import_utility_types.ReadingError.NEGATIVE_VALUE };
  }
  return { valid: true };
}
function validateNewReading(value, previousReading) {
  const nonNegativeCheck = validateNonNegativeReading(value);
  if (!nonNegativeCheck.valid) return nonNegativeCheck;
  const monotonicCheck = validateMonotonicReading(value, previousReading);
  if (!monotonicCheck.valid) return monotonicCheck;
  return { valid: true };
}
function parseCreateBillInput(input) {
  const result = CreateUtilityBillInputSchema.safeParse(input);
  if (result.success) {
    return { success: true, data: result.data };
  }
  return { success: false, errors: result.error };
}
function parseCreateReadingInput(input) {
  const result = CreateUtilityReadingInputSchema.safeParse(input);
  if (result.success) {
    return { success: true, data: result.data };
  }
  return { success: false, errors: result.error };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateUtilityBillInputSchema,
  CreateUtilityReadingInputSchema,
  PostedBillError,
  assertNotPosted,
  canAllocateBill,
  canApproveBill,
  canPostBill,
  parseCreateBillInput,
  parseCreateReadingInput,
  validateAllocationSum,
  validateCustomRatio,
  validateMonotonicReading,
  validateNewReading,
  validateNonNegativeReading,
  validatePercentageSum
});
