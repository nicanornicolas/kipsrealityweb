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
var maintenance_service_exports = {};
__export(maintenance_service_exports, {
  maintenanceService: () => maintenanceService
});
module.exports = __toCommonJS(maintenance_service_exports);
var import_iam = require("@rentflow/iam");
var import_library = require("@prisma/client/runtime/library");
var import_types = require("./types");
var import_journal_service = require("./journal-service");
var import_client = require("@prisma/client");
const maintenanceService = {
  /**
   * Finalize a maintenance request and post to GL.
   * DR: Maintenance Expense (5100), CR: Accounts Payable (2200)
   * If tenantChargeable: DR: AR (1100), CR: Maintenance Recovery (4300) + Tenant Invoice
   */
  async postMaintenanceBill(requestId) {
    return await import_iam.prisma.$transaction(
      async (tx) => {
        const request = await tx.maintenanceRequest.findUnique({
          where: { id: requestId },
          include: {
            property: { include: { organization: true } },
            unit: {
              include: {
                leases: {
                  where: { leaseStatus: "ACTIVE" },
                  take: 1
                }
              }
            }
          }
        });
        if (!request) throw new Error("Maintenance request not found");
        if (request.status !== import_client.MaintenanceRequestStatus.COMPLETED) {
          throw new Error("Only completed requests can be billed");
        }
        if (!request.cost || Number(request.cost) <= 0) {
          throw new Error("Maintenance cost must be greater than zero to post");
        }
        if (request.journalEntryId)
          throw new Error("Request already posted to ledger");
        const orgId = request.organizationId;
        const cost = request.cost;
        const expenseGLEntry = await import_journal_service.journalService.postJournalEntry(
          {
            organizationId: orgId,
            date: /* @__PURE__ */ new Date(),
            description: `Maintenance Cost: ${request.title} - ${request.property.name}`,
            reference: request.id,
            lines: [
              {
                accountCode: import_types.CHART_OF_ACCOUNTS.MAINTENANCE_EXPENSE,
                debit: cost,
                credit: new import_library.Decimal(0),
                propertyId: request.propertyId,
                unitId: request.unitId || void 0
              },
              {
                accountCode: import_types.CHART_OF_ACCOUNTS.ACCOUNTS_PAYABLE,
                debit: new import_library.Decimal(0),
                credit: cost,
                propertyId: request.propertyId,
                unitId: request.unitId || void 0
              }
            ]
          },
          tx
        );
        let invoiceId;
        if (request.isTenantChargeable) {
          const activeLease = request.unit?.leases[0];
          if (!activeLease) {
            throw new Error("No active lease found for tenant chargeback");
          }
          const invoice = await tx.invoice.create({
            data: {
              leaseId: activeLease.id,
              type: "MAINTENANCE",
              totalAmount: Number(cost),
              balance: Number(cost),
              amountPaid: 0,
              status: "PENDING",
              dueDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1e3),
              // 15 days
              maintenanceRequest: {
                connect: { id: request.id }
              },
              InvoiceItem: {
                create: {
                  description: `Maintenance Chargeback: ${request.title}`,
                  amount: Number(cost)
                }
              }
            }
          });
          invoiceId = invoice.id;
          const recoveryGLEntry = await import_journal_service.journalService.postJournalEntry(
            {
              organizationId: orgId,
              date: /* @__PURE__ */ new Date(),
              description: `Maintenance Chargeback: ${request.title} - Unit ${request.unit?.unitNumber}`,
              reference: invoice.id,
              lines: [
                {
                  accountCode: import_types.CHART_OF_ACCOUNTS.ACCOUNTS_RECEIVABLE,
                  debit: cost,
                  credit: new import_library.Decimal(0),
                  propertyId: request.propertyId,
                  unitId: request.unitId || void 0,
                  leaseId: activeLease.id,
                  tenantId: activeLease.tenantId || void 0
                },
                {
                  accountCode: import_types.CHART_OF_ACCOUNTS.MAINTENANCE_INCOME,
                  debit: new import_library.Decimal(0),
                  credit: cost,
                  propertyId: request.propertyId,
                  unitId: request.unitId || void 0,
                  leaseId: activeLease.id
                }
              ]
            },
            tx
          );
          await tx.invoice.update({
            where: { id: invoice.id },
            data: { journalEntryId: recoveryGLEntry.journalEntryId }
          });
        }
        const updatedRequest = await tx.maintenanceRequest.update({
          where: { id: request.id },
          data: {
            journalEntryId: expenseGLEntry.journalEntryId,
            invoiceId
          }
        });
        return {
          request: updatedRequest,
          expenseGLEntry,
          invoiceId
        };
      },
      { timeout: 3e4 }
    );
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  maintenanceService
});
//# sourceMappingURL=maintenance-service.js.map
