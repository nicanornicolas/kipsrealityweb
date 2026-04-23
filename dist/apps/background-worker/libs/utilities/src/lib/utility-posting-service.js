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
var utility_posting_service_exports = {};
__export(utility_posting_service_exports, {
  isBillPosted: () => isBillPosted,
  postUtilityBill: () => postUtilityBill
});
module.exports = __toCommonJS(utility_posting_service_exports);
var import_iam = require("@rentflow/iam");
var import_client = require("@prisma/client");
var import_crypto = require("crypto");
var import_utility_types = require("./utility-types");
var import_utility_validators = require("./utility-validators");
var import_utility_allocation_service = require("./utility-allocation-service");
var import_finance = require("@rentflow/finance");
const journalService = new import_finance.JournalService(import_iam.prisma);
const ACCOUNT_CODES = {
  UTILITY_EXPENSE: "6100",
  ACCOUNTS_PAYABLE: "2000"
};
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
function toBillForGuard(bill) {
  return {
    id: bill.id,
    status: normalizeBillStatus(bill.status),
    totalAmount: Number(bill.totalAmount)
  };
}
function computeAllocationHash(allocations) {
  const payload = allocations.map((a) => `${a.unitId}:${a.amount}:${a.percentage}`).sort().join("|");
  return (0, import_crypto.createHash)("sha256").update(payload).digest("hex");
}
async function postUtilityBill(billId, organizationId) {
  const bill = await import_iam.prisma.utilityBill.findUnique({
    where: { id: billId },
    include: {
      property: { select: { id: true } }
    }
  });
  if (!bill) {
    return { success: false, error: import_utility_types.PostError.BILL_NOT_FOUND };
  }
  try {
    (0, import_utility_validators.assertNotPosted)(toBillForGuard(bill));
  } catch {
    return { success: false, error: import_utility_types.PostError.ALREADY_POSTED };
  }
  if (bill.status !== import_utility_types.UtilityBillStatus.APPROVED) {
    return { success: false, error: import_utility_types.PostError.NOT_APPROVED };
  }
  const allocations = await (0, import_utility_allocation_service.getAllocationsForBill)(billId);
  if (allocations.length === 0) {
    return { success: false, error: import_utility_types.PostError.NO_ALLOCATIONS };
  }
  const blockchainHash = computeAllocationHash(allocations);
  const totalAmount = Number(bill.totalAmount);
  let journalEntryId;
  try {
    const journalEntry = await journalService.postJournalEntry({
      organizationId,
      date: bill.billDate,
      reference: `UTIL-${billId.slice(0, 8)}`,
      description: `Utility Bill: ${bill.providerName}`,
      lines: [
        {
          accountCode: ACCOUNT_CODES.UTILITY_EXPENSE,
          debit: new import_client.Prisma.Decimal(totalAmount),
          credit: new import_client.Prisma.Decimal(0),
          propertyId: bill.propertyId
        },
        {
          accountCode: ACCOUNT_CODES.ACCOUNTS_PAYABLE,
          debit: new import_client.Prisma.Decimal(0),
          credit: new import_client.Prisma.Decimal(totalAmount),
          propertyId: bill.propertyId
        }
      ]
    });
    journalEntryId = journalEntry.journalEntryId;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    if (message.includes("Financial Entity")) {
      return { success: false, error: import_utility_types.PostError.NO_FINANCIAL_ENTITY };
    }
    return {
      success: false,
      error: import_utility_types.PostError.JOURNAL_FAILED,
      message
    };
  }
  await import_iam.prisma.$transaction(async (tx) => {
    await tx.utilityBill.update({
      where: { id: billId },
      data: {
        status: import_utility_types.UtilityBillStatus.POSTED,
        journalEntryId,
        blockchainHash,
        updatedAt: /* @__PURE__ */ new Date()
      }
    });
  });
  return {
    success: true,
    data: {
      billId,
      status: import_utility_types.UtilityBillStatus.POSTED,
      journalEntryId,
      blockchainHash
    }
  };
}
async function isBillPosted(billId) {
  const bill = await import_iam.prisma.utilityBill.findUnique({
    where: { id: billId },
    select: { status: true }
  });
  return bill?.status === import_utility_types.UtilityBillStatus.POSTED;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  isBillPosted,
  postUtilityBill
});
