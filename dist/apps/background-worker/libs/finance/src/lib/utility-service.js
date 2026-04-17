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
var utility_service_exports = {};
__export(utility_service_exports, {
  utilityService: () => utilityService
});
module.exports = __toCommonJS(utility_service_exports);
var import_iam = require("@rentflow/iam");
var import_library = require("@prisma/client/runtime/library");
var import_types = require("./types");
var import_journal_service = require("./journal-service");
var import_client = require("@prisma/client");
const utilityService = {
  /**
   * Preview utility allocations based on split method.
   */
  async calculateAllocations(utilityBillId) {
    const utilityBill = await import_iam.prisma.utilityBill.findUnique({
      where: { id: utilityBillId },
      include: {
        property: {
          include: {
            units: {
              include: {
                leases: {
                  where: { leaseStatus: "ACTIVE" },
                  include: { tenant: true }
                }
              }
            }
          }
        }
      }
    });
    if (!utilityBill) throw new Error("Utility bill not found");
    if (utilityBill.status === import_client.UtilityBillStatus.POSTED)
      throw new Error("Bill already posted");
    const activeLeases = utilityBill.property.units.flatMap((unit) => unit.leases.map((lease) => ({ ...lease, unit }))).filter((lease) => lease.leaseStatus === "ACTIVE");
    if (activeLeases.length === 0)
      throw new Error("No active leases found for this property");
    const totalAmount = new import_library.Decimal(utilityBill.totalAmount);
    let allocations = [];
    switch (utilityBill.splitMethod) {
      case import_client.UtilitySplitMethod.EQUAL: {
        const count = new import_library.Decimal(activeLeases.length);
        const equalAmount = totalAmount.div(count).toDecimalPlaces(2);
        const equalPercentage = new import_library.Decimal(100).div(count).toDecimalPlaces(2);
        allocations = activeLeases.map((lease) => ({
          leaseId: lease.id,
          tenantId: lease.tenantId,
          tenantName: lease.tenant ? `${lease.tenant.firstName ?? ""} ${lease.tenant.lastName ?? ""}`.trim() || "N/A" : "N/A",
          unitNumber: lease.unit.unitNumber,
          unitId: lease.unit.id,
          amount: equalAmount,
          percentage: equalPercentage
        }));
        break;
      }
      case import_client.UtilitySplitMethod.SQ_FOOTAGE: {
        const totalSqFt = activeLeases.reduce(
          (sum, l) => sum.plus(new import_library.Decimal(l.unit.squareFootage || 0)),
          new import_library.Decimal(0)
        );
        if (totalSqFt.isZero())
          throw new Error("Total square footage is zero or not available");
        allocations = activeLeases.map((lease) => {
          const sqFt = new import_library.Decimal(lease.unit.squareFootage || 0);
          const percentage = sqFt.div(totalSqFt).times(100).toDecimalPlaces(2);
          const amount = totalAmount.times(sqFt).div(totalSqFt).toDecimalPlaces(2);
          return {
            leaseId: lease.id,
            tenantId: lease.tenantId,
            tenantName: lease.tenant ? `${lease.tenant.firstName ?? ""} ${lease.tenant.lastName ?? ""}`.trim() || "N/A" : "N/A",
            unitNumber: lease.unit.unitNumber,
            unitId: lease.unit.id,
            amount,
            percentage
          };
        });
        break;
      }
      case import_client.UtilitySplitMethod.OCCUPANCY_BASED:
      case import_client.UtilitySplitMethod.AI_OPTIMIZED:
      default: {
        const count = new import_library.Decimal(activeLeases.length);
        const equalAmount = totalAmount.div(count).toDecimalPlaces(2);
        const equalPercentage = new import_library.Decimal(100).div(count).toDecimalPlaces(2);
        allocations = activeLeases.map((lease) => ({
          leaseId: lease.id,
          tenantId: lease.tenantId,
          tenantName: lease.tenant ? `${lease.tenant.firstName ?? ""} ${lease.tenant.lastName ?? ""}`.trim() || "N/A" : "N/A",
          unitNumber: lease.unit.unitNumber,
          unitId: lease.unit.id,
          amount: equalAmount,
          percentage: equalPercentage
        }));
        break;
      }
    }
    const allocatedTotal = allocations.reduce(
      (sum, a) => sum.plus(a.amount),
      new import_library.Decimal(0)
    );
    const diff = totalAmount.minus(allocatedTotal);
    if (!diff.isZero() && allocations.length > 0) {
      allocations[allocations.length - 1].amount = allocations[allocations.length - 1].amount.plus(diff);
    }
    return {
      utilityBill,
      allocations,
      totalAmount
    };
  },
  /**
   * Post allocations to GL and create invoices.
   */
  async postAllocations(utilityBillId, allocationsInput) {
    return await import_iam.prisma.$transaction(
      async (tx) => {
        const utilityBill = await tx.utilityBill.findUnique({
          where: { id: utilityBillId },
          include: {
            property: { include: { organization: true } }
          }
        });
        if (!utilityBill) throw new Error("Utility bill not found");
        if (utilityBill.status === import_client.UtilityBillStatus.POSTED)
          throw new Error("Bill already posted");
        if (!utilityBill.property.organizationId)
          throw new Error("Organization not found for property");
        const recoveryResults = await Promise.all(
          allocationsInput.map(async (alloc) => {
            const invoice = await tx.invoice.create({
              data: {
                leaseId: alloc.leaseId,
                type: "UTILITY",
                totalAmount: Number(alloc.amount),
                balance: Number(alloc.amount),
                amountPaid: 0,
                status: "PENDING",
                dueDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1e3),
                // 15 days
                InvoiceItem: {
                  create: {
                    description: `Utility: ${utilityBill.providerName}`,
                    amount: Number(alloc.amount)
                  }
                }
              }
            });
            const allocation = await tx.utilityAllocation.create({
              data: {
                utilityBillId: utilityBill.id,
                unitId: alloc.unitId,
                leaseId: alloc.leaseId,
                tenantId: alloc.tenantId,
                amount: alloc.amount,
                percentage: alloc.percentage,
                invoiceId: invoice.id,
                status: "PENDING"
              }
            });
            return { allocation, invoice };
          })
        );
        const masterGLEntry = await import_journal_service.journalService.postJournalEntry({
          organizationId: utilityBill.property.organizationId,
          date: /* @__PURE__ */ new Date(),
          description: `Utility Bill: ${utilityBill.providerName} - ${utilityBill.property.name || "Property"}`,
          reference: utilityBill.id,
          lines: [
            {
              accountCode: import_types.CHART_OF_ACCOUNTS.UTILITY_EXPENSE,
              debit: utilityBill.totalAmount,
              credit: new import_library.Decimal(0),
              propertyId: utilityBill.propertyId
            },
            {
              accountCode: import_types.CHART_OF_ACCOUNTS.ACCOUNTS_PAYABLE,
              debit: new import_library.Decimal(0),
              credit: utilityBill.totalAmount,
              propertyId: utilityBill.propertyId
            }
          ]
        });
        const recoveryResultsWithJournals = await Promise.all(
          recoveryResults.map(async (res, index) => {
            const alloc = allocationsInput[index];
            const recoveryGLEntry = await import_journal_service.journalService.postJournalEntry({
              organizationId: utilityBill.property.organizationId,
              date: /* @__PURE__ */ new Date(),
              description: `Utility Recovery: ${utilityBill.providerName} - Unit ${alloc.unitNumber}`,
              reference: res.invoice.id,
              lines: [
                {
                  accountCode: import_types.CHART_OF_ACCOUNTS.ACCOUNTS_RECEIVABLE,
                  debit: alloc.amount,
                  credit: new import_library.Decimal(0),
                  propertyId: utilityBill.propertyId,
                  leaseId: alloc.leaseId,
                  unitId: alloc.unitId,
                  tenantId: alloc.tenantId
                },
                {
                  accountCode: import_types.CHART_OF_ACCOUNTS.UTILITY_RECOVERY_INCOME,
                  debit: new import_library.Decimal(0),
                  credit: alloc.amount,
                  propertyId: utilityBill.propertyId,
                  leaseId: alloc.leaseId,
                  unitId: alloc.unitId
                }
              ]
            });
            const updatedInvoice = await tx.invoice.update({
              where: { id: res.invoice.id },
              data: { journalEntryId: recoveryGLEntry.journalEntryId }
            });
            return {
              ...res,
              invoice: updatedInvoice,
              journalEntry: recoveryGLEntry
            };
          })
        );
        const updatedBill = await tx.utilityBill.update({
          where: { id: utilityBill.id },
          data: {
            status: import_client.UtilityBillStatus.POSTED,
            journalEntryId: masterGLEntry.journalEntryId
          }
        });
        return {
          utilityBill: updatedBill,
          results: recoveryResultsWithJournals,
          masterGLEntry
        };
      },
      { timeout: 3e4 }
    );
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  utilityService
});
//# sourceMappingURL=utility-service.js.map
