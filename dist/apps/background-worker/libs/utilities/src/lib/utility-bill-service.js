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
var utility_bill_service_exports = {};
__export(utility_bill_service_exports, {
  approveBill: () => approveBill,
  createBill: () => createBill,
  generateInvoicesForBill: () => generateInvoicesForBill,
  getAllocationsForBillFromBillService: () => getAllocationsForBillFromBillService,
  getBillById: () => getBillById,
  transitionToProcessing: () => transitionToProcessing
});
module.exports = __toCommonJS(utility_bill_service_exports);
var import_iam = require("@rentflow/iam");
var import_client = require("@prisma/client");
var import_utility_types = require("./utility-types");
var import_utility_validators = require("./utility-validators");
function normalizeBillStatus(prismaStatus) {
  switch (prismaStatus) {
    case "DRAFT":
      return import_utility_types.UtilityBillStatus.DRAFT;
    case "PROCESSING":
      return import_utility_types.UtilityBillStatus.PROCESSING;
    case "REVIEW_REQUIRED":
      return import_utility_types.UtilityBillStatus.REVIEW_REQUIRED;
    case "APPROVED":
      return import_utility_types.UtilityBillStatus.APPROVED;
    case "POSTED":
      return import_utility_types.UtilityBillStatus.POSTED;
    case "REJECTED":
      return import_utility_types.UtilityBillStatus.REJECTED;
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
function toBillForGuard(bill) {
  return {
    id: bill.id,
    status: normalizeBillStatus(bill.status),
    totalAmount: Number(bill.totalAmount)
  };
}
async function createBill(input) {
  const parsed = (0, import_utility_validators.parseCreateBillInput)(input);
  if (!parsed.success) {
    return {
      success: false,
      error: import_utility_types.CreateBillError.INVALID_AMOUNT,
      message: parsed.errors.issues[0]?.message
    };
  }
  const {
    propertyId,
    providerName,
    totalAmount,
    billDate,
    dueDate,
    splitMethod,
    importMethod,
    fileUrl,
    ocrConfidence
  } = parsed.data;
  const property = await import_iam.prisma.property.findUnique({
    where: { id: propertyId },
    select: { id: true }
  });
  if (!property) {
    return { success: false, error: import_utility_types.CreateBillError.PROPERTY_NOT_FOUND };
  }
  const bill = await import_iam.prisma.$transaction(async (tx) => {
    return tx.utilityBill.create({
      data: {
        propertyId,
        providerName,
        totalAmount,
        billDate,
        dueDate,
        // ✅ FIX: Use camelCase field names (splitMethod, not split_method)
        splitMethod,
        importMethod: importMethod ?? "MANUAL_ENTRY",
        fileUrl: fileUrl ?? null,
        // ✅ CamelCase
        ocrConfidence: ocrConfidence ?? null,
        status: import_client.UtilityBillStatus.DRAFT,
        updatedAt: /* @__PURE__ */ new Date()
        // ✅ CamelCase
      }
    });
  });
  return {
    success: true,
    data: {
      billId: bill.id,
      status: import_utility_types.UtilityBillStatus.DRAFT
    }
  };
}
async function getBillById(billId) {
  const bill = await import_iam.prisma.utilityBill.findUnique({
    where: { id: billId }
  });
  if (!bill) return null;
  return {
    id: bill.id,
    propertyId: bill.propertyId,
    providerName: bill.providerName,
    totalAmount: Number(bill.totalAmount),
    billDate: bill.billDate,
    dueDate: bill.dueDate,
    status: normalizeBillStatus(bill.status),
    // ✅ FIX: Access via camelCase
    splitMethod: normalizeSplitMethod(bill.splitMethod),
    createdAt: bill.createdAt
  };
}
async function transitionToProcessing(billId) {
  const bill = await import_iam.prisma.utilityBill.findUnique({
    where: { id: billId },
    select: { id: true, status: true, totalAmount: true }
  });
  if (!bill) {
    return { success: false, error: import_utility_types.TransitionError.BILL_NOT_FOUND };
  }
  (0, import_utility_validators.assertNotPosted)(toBillForGuard(bill));
  if (bill.status !== import_utility_types.UtilityBillStatus.DRAFT) {
    return { success: false, error: import_utility_types.TransitionError.INVALID_STATUS };
  }
  await import_iam.prisma.utilityBill.update({
    where: { id: billId },
    data: {
      status: import_utility_types.UtilityBillStatus.PROCESSING,
      updatedAt: /* @__PURE__ */ new Date()
      // ✅ CamelCase
    }
  });
  return { success: true, data: { status: import_utility_types.UtilityBillStatus.PROCESSING } };
}
async function approveBill(billId) {
  const bill = await import_iam.prisma.utilityBill.findUnique({
    where: { id: billId },
    include: {
      allocations: {
        select: { unitId: true, amount: true, percentage: true }
      }
    }
  });
  if (!bill) {
    return { success: false, error: import_utility_types.ApproveError.BILL_NOT_FOUND };
  }
  (0, import_utility_validators.assertNotPosted)(toBillForGuard(bill));
  const allocations = bill.allocations.map((a) => ({
    unitId: a.unitId,
    amount: Number(a.amount),
    percentage: Number(a.percentage ?? 0)
  }));
  const canApprove = (0, import_utility_validators.canApproveBill)(toBillForGuard(bill), allocations);
  if (!canApprove.allowed) {
    return { success: false, error: canApprove.error };
  }
  await import_iam.prisma.$transaction(async (tx) => {
    await tx.utilityBill.update({
      where: { id: billId },
      data: {
        status: import_client.UtilityBillStatus.APPROVED,
        updatedAt: /* @__PURE__ */ new Date(),
        // ✅ CamelCase
        approvedAt: /* @__PURE__ */ new Date()
        // ✅ Added tracking
      }
    });
  });
  return {
    success: true,
    data: {
      billId: bill.id,
      status: import_utility_types.UtilityBillStatus.APPROVED
    }
  };
}
async function generateInvoicesForBill(billId) {
  const bill = await import_iam.prisma.utilityBill.findUnique({
    where: { id: billId },
    include: {
      allocations: {
        include: {
          unit: {
            include: {
              leases: {
                where: { leaseStatus: "ACTIVE" },
                take: 1
              }
            }
          }
        }
      }
    }
  });
  if (!bill) {
    return { success: false, error: import_utility_types.InvoiceError.BILL_NOT_FOUND };
  }
  (0, import_utility_validators.assertNotPosted)(toBillForGuard(bill));
  if (bill.status !== import_utility_types.UtilityBillStatus.APPROVED) {
    return { success: false, error: import_utility_types.InvoiceError.INVALID_STATUS };
  }
  if (bill.allocations.length === 0) {
    return { success: false, error: import_utility_types.InvoiceError.NO_ALLOCATIONS };
  }
  for (const alloc of bill.allocations) {
    if (!alloc.unit.leases[0]) {
      return {
        success: false,
        error: import_utility_types.InvoiceError.ALLOCATION_MISSING_LEASE,
        message: `Unit ${alloc.unitId} has no active lease`
      };
    }
  }
  const existingInvoices = await import_iam.prisma.invoice.count({
    where: { utilityBillId: billId }
  });
  if (existingInvoices > 0) {
    return { success: false, error: import_utility_types.InvoiceError.ALREADY_EXISTS };
  }
  const invoiceIds = await import_iam.prisma.$transaction(async (tx) => {
    const ids = [];
    for (const alloc of bill.allocations) {
      const lease = alloc.unit.leases[0];
      const invoice = await tx.invoice.create({
        data: {
          leaseId: lease.id,
          type: import_client.invoice_type.UTILITY,
          totalAmount: Number(alloc.amount),
          // Map Decimal to Float (Legacy compat)
          amountPaid: 0,
          balance: Number(alloc.amount),
          dueDate: bill.dueDate,
          utilityBillId: bill.id,
          status: "PENDING"
          // Explicit default
        }
      });
      await tx.utilityAllocation.update({
        where: { id: alloc.id },
        data: { invoiceId: invoice.id }
      });
      ids.push(invoice.id);
    }
    return ids;
  });
  return {
    success: true,
    data: {
      invoiceIds,
      count: invoiceIds.length
    }
  };
}
async function getAllocationsForBillFromBillService(billId) {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  approveBill,
  createBill,
  generateInvoicesForBill,
  getAllocationsForBillFromBillService,
  getBillById,
  transitionToProcessing
});
