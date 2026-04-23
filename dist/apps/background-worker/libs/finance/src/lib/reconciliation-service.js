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
var reconciliation_service_exports = {};
__export(reconciliation_service_exports, {
  ReconciliationService: () => ReconciliationService
});
module.exports = __toCommonJS(reconciliation_service_exports);
var import_iam = require("@rentflow/iam");
var import_library = require("@prisma/client/runtime/library");
class ReconciliationService {
  /**
   * Finds likely journal entries for a bank transaction using amount and date proximity.
   */
  async getSuggestedMatches(bankTransactionId, organizationId) {
    const tx = await import_iam.prisma.bankTransaction.findUnique({
      where: { id: bankTransactionId }
    });
    if (!tx) {
      throw new Error("Transaction not found");
    }
    if (organizationId && tx.organizationId !== organizationId) {
      throw new Error("Transaction not found");
    }
    const searchAmount = new import_library.Decimal(tx.amount).abs();
    const startDate = new Date(tx.date);
    startDate.setDate(startDate.getDate() - 3);
    const endDate = new Date(tx.date);
    endDate.setDate(endDate.getDate() + 3);
    const candidates = await import_iam.prisma.journalEntry.findMany({
      where: {
        entity: {
          organizationId: tx.organizationId
        },
        isLocked: true,
        bankTransaction: null,
        transactionDate: { gte: startDate, lte: endDate },
        lines: {
          some: {
            OR: [
              { debit: searchAmount, credit: new import_library.Decimal(0) },
              { debit: new import_library.Decimal(0), credit: searchAmount }
            ]
          }
        }
      },
      include: {
        lines: {
          include: {
            account: true
          }
        }
      },
      orderBy: { transactionDate: "desc" }
    });
    return candidates;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ReconciliationService
});
