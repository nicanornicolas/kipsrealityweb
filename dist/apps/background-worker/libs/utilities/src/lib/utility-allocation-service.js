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
var utility_allocation_service_exports = {};
__export(utility_allocation_service_exports, {
  UtilityAllocationService: () => UtilityAllocationService,
  allocateUtilityBill: () => allocateUtilityBill,
  getAllocationsForBill: () => getAllocationsForBill
});
module.exports = __toCommonJS(utility_allocation_service_exports);
var import_iam = require("@rentflow/iam");
var import_utility_types = require("./utility-types");
var import_utility_validators = require("./utility-validators");
function normalizeBillStatus(prismaStatus) {
  switch (prismaStatus) {
    case import_utility_types.UtilityBillStatus.DRAFT:
      return import_utility_types.UtilityBillStatus.DRAFT;
    case import_utility_types.UtilityBillStatus.PROCESSING:
      return import_utility_types.UtilityBillStatus.PROCESSING;
    case import_utility_types.UtilityBillStatus.APPROVED:
      return import_utility_types.UtilityBillStatus.APPROVED;
    case import_utility_types.UtilityBillStatus.POSTED:
      return import_utility_types.UtilityBillStatus.POSTED;
    default:
      return import_utility_types.UtilityBillStatus.DRAFT;
  }
}
function normalizeSplitMethod(prismaMethod) {
  switch (prismaMethod) {
    case "EQUAL":
      return import_utility_types.UtilitySplitMethod.EQUAL;
    case "OCCUPANCY_BASED":
      return import_utility_types.UtilitySplitMethod.OCCUPANCY_BASED;
    case "SQ_FOOTAGE":
      return import_utility_types.UtilitySplitMethod.SQ_FOOTAGE;
    case "SUB_METERED":
      return import_utility_types.UtilitySplitMethod.SUB_METERED;
    case "CUSTOM_RATIO":
      return import_utility_types.UtilitySplitMethod.CUSTOM_RATIO;
    case "AI_OPTIMIZED":
      return import_utility_types.UtilitySplitMethod.AI_OPTIMIZED;
    default:
      return import_utility_types.UtilitySplitMethod.EQUAL;
  }
}
function toBillForGuard(bill2) {
  return {
    id: bill2.id,
    status: normalizeBillStatus(bill2.status),
    totalAmount: Number(bill2.totalAmount)
  };
}
function allocateEqualUsage(contexts, totalAmount) {
  const count = contexts.length;
  if (count === 0) return [];
  const baseAmount = Math.floor(totalAmount / count * 100) / 100;
  const percentage = Math.round(100 / count * 100) / 100;
  return contexts.map((ctx) => ({
    unitId: ctx.unitId,
    amount: baseAmount,
    percentage
  }));
}
function allocateBySqFootage(contexts, totalAmount) {
  const totalSqFt = contexts.reduce((sum, ctx) => sum + (ctx.sqFootage ?? 0), 0);
  if (totalSqFt === 0) return null;
  return contexts.map((ctx) => {
    const sqFt = ctx.sqFootage ?? 0;
    const percentage = Math.round(sqFt / totalSqFt * 1e4) / 100;
    const amount = Math.floor(sqFt / totalSqFt * totalAmount * 100) / 100;
    return { unitId: ctx.unitId, amount, percentage };
  });
}
function allocateByOccupancy(contexts, totalAmount) {
  const totalOccupants = contexts.reduce((sum, ctx) => sum + (ctx.occupantCount ?? 0), 0);
  if (totalOccupants === 0) return null;
  return contexts.map((ctx) => {
    const occupants = ctx.occupantCount ?? 0;
    const percentage = Math.round(occupants / totalOccupants * 1e4) / 100;
    const amount = Math.floor(occupants / totalOccupants * totalAmount * 100) / 100;
    return { unitId: ctx.unitId, amount, percentage };
  });
}
function allocateSubMetered(contexts, totalAmount) {
  const totalUsage = contexts.reduce((sum, ctx) => sum + (ctx.meterReading ?? 0), 0);
  if (totalUsage === 0) return null;
  return contexts.map((ctx) => {
    const usage = ctx.meterReading ?? 0;
    const percentage = Math.round(usage / totalUsage * 1e4) / 100;
    const amount = Math.floor(usage / totalUsage * totalAmount * 100) / 100;
    return { unitId: ctx.unitId, amount, percentage };
  });
}
function allocateCustomRatio(contexts, totalAmount) {
  const totalRatio = contexts.reduce((sum, ctx) => sum + (ctx.customRatio ?? 0), 0);
  if (Math.abs(totalRatio - 1) > 1e-4) return null;
  return contexts.map((ctx) => {
    const ratio = ctx.customRatio ?? 0;
    const percentage = Math.round(ratio * 1e4) / 100;
    const amount = Math.floor(ratio * totalAmount * 100) / 100;
    return { unitId: ctx.unitId, amount, percentage };
  });
}
function applyRoundingCorrection(allocations, totalAmount) {
  if (allocations.length === 0) return allocations;
  const currentSum = allocations.reduce((sum, a) => sum + a.amount, 0);
  const diff = Math.round((totalAmount - currentSum) * 100) / 100;
  if (Math.abs(diff) < 0.01) return allocations;
  const corrected = [...allocations];
  const lastIndex = corrected.length - 1;
  corrected[lastIndex] = {
    ...corrected[lastIndex],
    amount: Math.round((corrected[lastIndex].amount + diff) * 100) / 100
  };
  return corrected;
}
async function fetchMeterUsageForLeases(leaseIds) {
  if (leaseIds.length === 0) return {};
  const leaseUtilities = await import_iam.prisma.leaseUtility.findMany({
    where: { leaseId: { in: leaseIds } },
    include: {
      utilityReadings: {
        orderBy: { readingDate: "desc" },
        take: 2
        // Need 2 readings to compute delta
      }
    }
  });
  const usageMap = {};
  for (const leaseUtility of leaseUtilities) {
    const readings = leaseUtility.utilityReadings;
    if (readings.length < 2) {
      return null;
    }
    const latest = readings[0].readingValue;
    const previous = readings[1].readingValue;
    const usage = latest - previous;
    if (usage < 0) return null;
    usageMap[leaseUtility.leaseId] = usage;
  }
  for (const leaseId of leaseIds) {
    if (!(leaseId in usageMap)) {
      return null;
    }
  }
  return usageMap;
}
async function buildSplitContexts(units, splitMethod) {
  let meterUsageMap = null;
  if (splitMethod === import_utility_types.UtilitySplitMethod.SUB_METERED) {
    const leaseIds = units.map((u) => u.leases[0]?.id).filter((id) => id !== void 0);
    meterUsageMap = await fetchMeterUsageForLeases(leaseIds);
    if (!meterUsageMap) return null;
  }
  const contexts = units.map((unit) => {
    const lease = unit.leases[0] ?? null;
    return {
      unitId: unit.id,
      leaseId: lease?.id ?? null,
      sqFootage: unit.property.houseDetail?.size ?? null,
      occupantCount: lease?.application?.occupants ?? null,
      meterReading: lease?.id && meterUsageMap ? meterUsageMap[lease.id] ?? null : null,
      customRatio: null
      // Requires separate input mechanism
    };
  });
  return contexts;
}
async function allocateUtilityBill(billId) {
  const bill2 = await import_iam.prisma.utilityBill.findUnique({
    where: { id: billId },
    include: {
      property: {
        include: {
          units: {
            include: {
              leases: {
                where: { leaseStatus: "ACTIVE" },
                take: 1,
                include: {
                  application: { select: { occupants: true } }
                }
              },
              property: {
                include: {
                  houseDetail: { select: { size: true } }
                }
              }
            }
          }
        }
      },
      allocations: { select: { id: true } }
    }
  });
  if (!bill2) {
    return { success: false, error: import_utility_types.AllocateError.BILL_NOT_FOUND };
  }
  const normalizedBill = {
    id: bill2.id,
    status: normalizeBillStatus(bill2.status),
    totalAmount: bill2.totalAmount.toNumber()
  };
  (0, import_utility_validators.assertNotPosted)(normalizedBill);
  const canAllocate = (0, import_utility_validators.canAllocateBill)(normalizedBill);
  if (!canAllocate.allowed) {
    return { success: false, error: canAllocate.error };
  }
  if (bill2.allocations.length > 0) {
    return { success: false, error: import_utility_types.AllocateError.ALREADY_ALLOCATED };
  }
  const units = bill2.property.units;
  if (units.length === 0) {
    return { success: false, error: import_utility_types.AllocateError.NO_UNITS_FOUND };
  }
  const splitMethod = normalizeSplitMethod(bill2.splitMethod);
  const totalAmount = Number(bill2.totalAmount);
  if (!Number.isFinite(totalAmount) || totalAmount <= 0) {
    return { success: false, error: import_utility_types.AllocateError.INVALID_AMOUNT };
  }
  if (splitMethod === import_utility_types.UtilitySplitMethod.CUSTOM_RATIO) {
    return {
      success: false,
      error: import_utility_types.AllocateError.MISSING_SPLIT_DATA,
      message: "Custom ratio allocation requires explicit ratio input (not yet implemented)"
    };
  }
  const contexts = await buildSplitContexts(units, splitMethod);
  if (!contexts) {
    return { success: false, error: import_utility_types.AllocateError.MISSING_SPLIT_DATA };
  }
  let rawAllocations = null;
  switch (splitMethod) {
    case import_utility_types.UtilitySplitMethod.EQUAL:
      rawAllocations = allocateEqualUsage(contexts, totalAmount);
      break;
    case import_utility_types.UtilitySplitMethod.SQ_FOOTAGE:
      rawAllocations = allocateBySqFootage(contexts, totalAmount);
      break;
    case import_utility_types.UtilitySplitMethod.OCCUPANCY_BASED:
      rawAllocations = allocateByOccupancy(contexts, totalAmount);
      break;
    case import_utility_types.UtilitySplitMethod.SUB_METERED:
      rawAllocations = allocateSubMetered(contexts, totalAmount);
      break;
  }
  if (!rawAllocations) {
    return { success: false, error: import_utility_types.AllocateError.MISSING_SPLIT_DATA };
  }
  const allocations = applyRoundingCorrection(rawAllocations, totalAmount);
  const sumCheck = (0, import_utility_validators.validateAllocationSum)(allocations, totalAmount);
  if (!sumCheck.valid) {
    return { success: false, error: import_utility_types.AllocateError.SUM_MISMATCH };
  }
  await import_iam.prisma.$transaction(async (tx) => {
    for (const alloc of allocations) {
      await tx.utilityAllocation.create({
        data: {
          utilityBillId: billId,
          unitId: alloc.unitId,
          amount: alloc.amount,
          percentage: alloc.percentage
        }
      });
    }
    await tx.utilityBill.update({
      where: { id: billId },
      data: {
        status: import_utility_types.UtilityBillStatus.PROCESSING,
        updatedAt: /* @__PURE__ */ new Date()
      }
    });
  });
  return {
    success: true,
    data: {
      allocations,
      status: import_utility_types.UtilityBillStatus.PROCESSING
    }
  };
}
async function getAllocationsForBill(billId) {
  const allocations = await import_iam.prisma.utilityAllocation.findMany({
    where: { utilityBillId: billId },
    select: { unitId: true, amount: true, percentage: true }
  });
  return allocations.map((a) => ({
    unitId: a.unitId,
    amount: Number(a.amount),
    percentage: Number(a.percentage ?? 0)
  }));
}
class UtilityAllocationService {
  /**
   * Calculates utility splits for a property.
   * In the future, if method === 'AI_SUGGESTED', this will ping the Python FastAPI sidecar.
   */
  static async calculateAllocations(propertyId, billId, providerName, totalAmount, dueDate, method) {
    const units = await import_iam.prisma.unit.findMany({
      where: { propertyId, isOccupied: true },
      include: {
        leases: {
          where: { leaseStatus: "ACTIVE" },
          take: 1,
          include: {
            application: { select: { occupants: true } }
          }
        }
      }
    });
    if (units.length === 0) {
      throw new Error("No occupied units found for allocation.");
    }
    const allocations = [];
    if (method === "EQUAL_SPLIT") {
      const splitAmount = totalAmount / units.length;
      const percentage = 1 / units.length * 100;
      for (const unit of units) {
        const lease = unit.leases[0];
        allocations.push({
          unitId: unit.id,
          tenantId: lease?.tenantId ?? "UNKNOWN",
          amount: Number(splitAmount.toFixed(2)),
          percentage: Number(percentage.toFixed(2)),
          explanation: `Equal split across ${units.length} occupied units.`
        });
      }
    } else if (method === "RUBS_OCCUPANCY") {
      const totalOccupants = units.reduce((sum, unit) => {
        const headcount = unit.leases[0]?.application?.occupants ?? 1;
        return sum + headcount;
      }, 0);
      for (const unit of units) {
        const headcount = unit.leases[0]?.application?.occupants ?? 1;
        const percentage = headcount / totalOccupants * 100;
        const amount = totalAmount * percentage / 100;
        allocations.push({
          unitId: unit.id,
          tenantId: unit.leases[0]?.tenantId ?? "UNKNOWN",
          amount: Number(amount.toFixed(2)),
          percentage: Number(percentage.toFixed(2)),
          explanation: `Calculated based on ${headcount} occupant(s) out of ${totalOccupants} total in building.`
        });
      }
    } else if (method === "SQUARE_FOOTAGE") {
      const totalSqFt = units.reduce((sum, unit) => sum + (unit.squareFootage ?? 0), 0);
      if (totalSqFt === 0) {
        throw new Error("Square footage data missing for allocation.");
      }
      for (const unit of units) {
        const sqFt = unit.squareFootage ?? 0;
        const percentage = sqFt / totalSqFt * 100;
        const amount = totalAmount * percentage / 100;
        allocations.push({
          unitId: unit.id,
          tenantId: unit.leases[0]?.tenantId ?? "UNKNOWN",
          amount: Number(amount.toFixed(2)),
          percentage: Number(percentage.toFixed(2)),
          explanation: `Allocated by square footage (${sqFt.toFixed(0)} sq ft).`
        });
      }
    } else {
      const splitAmount = totalAmount / units.length;
      const percentage = 1 / units.length * 100;
      for (const unit of units) {
        const lease = unit.leases[0];
        allocations.push({
          unitId: unit.id,
          tenantId: lease?.tenantId ?? "UNKNOWN",
          amount: Number(splitAmount.toFixed(2)),
          percentage: Number(percentage.toFixed(2)),
          explanation: `Defaulted to equal split pending AI method.`
        });
      }
    }
    return {
      utilityBillId: billId,
      propertyId,
      providerName,
      totalAmount,
      dueDate,
      splitMethod: method,
      confidenceScore: 1,
      allocations
    };
  }
}
const bill = {
  id: "bill-123",
  status: import_utility_types.UtilityBillStatus.DRAFT,
  totalAmount: 1e3
  // Replaced Decimal with number
};
const billForGuard = toBillForGuard({
  id: bill.id,
  status: normalizeBillStatus(bill.status),
  totalAmount: bill.totalAmount
  // Use number directly
});
(0, import_utility_validators.assertNotPosted)(billForGuard);
const customRatioAllocation = allocateCustomRatio(
  [
    {
      unitId: "unit-123",
      leaseId: "lease-456",
      sqFootage: 1200,
      occupantCount: 3,
      meterReading: 150,
      customRatio: 0.25
    }
  ],
  bill.totalAmount
  // Pass totalAmount as a number
);
console.log("Custom Ratio Allocation:", customRatioAllocation);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UtilityAllocationService,
  allocateUtilityBill,
  getAllocationsForBill
});
