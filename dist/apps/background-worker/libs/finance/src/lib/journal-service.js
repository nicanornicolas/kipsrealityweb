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
var journal_service_exports = {};
__export(journal_service_exports, {
  JournalService: () => JournalService,
  journalService: () => journalService
});
module.exports = __toCommonJS(journal_service_exports);
var import_library = require("@prisma/client/runtime/library");
var import_iam = require("@rentflow/iam");
class JournalService {
  prisma;
  constructor(prisma2) {
    this.prisma = prisma2;
  }
  /**
   * Post a Journal Entry to the General Ledger.
   * THROWS GL_IMBALANCE error if Debits != Credits.
   */
  async postJournalEntry(input, tx) {
    const { organizationId, date, reference, description, lines } = input;
    const db = tx ?? this.prisma;
    let totalDebit = new import_library.Decimal(0);
    let totalCredit = new import_library.Decimal(0);
    lines.forEach((line) => {
      totalDebit = totalDebit.plus(line.debit);
      totalCredit = totalCredit.plus(line.credit);
    });
    if (!totalDebit.equals(totalCredit)) {
      throw new Error(
        `GL IMBALANCE: Debits ($${totalDebit}) do not equal Credits ($${totalCredit}). Transaction blocked.`
      );
    }
    const entity = await db.financialEntity.findFirst({
      where: { organizationId },
      include: { accounts: true }
    });
    if (!entity) {
      throw new Error(`Financial Entity not found for Org: ${organizationId}`);
    }
    const lineData = lines.map((line) => {
      const account = entity.accounts.find((a) => a.code === line.accountCode);
      if (!account) {
        throw new Error(
          `Account Code ${line.accountCode} not configured for this entity.`
        );
      }
      return {
        accountId: account.id,
        description,
        debit: line.debit,
        credit: line.credit,
        propertyId: line.propertyId,
        tenantId: line.tenantId
      };
    });
    const result = tx ? await tx.journalEntry.create({
      data: {
        entityId: entity.id,
        transactionDate: date,
        postedAt: /* @__PURE__ */ new Date(),
        // Now
        description,
        reference,
        isLocked: true,
        // Auto-lock for immutability invariant
        lines: {
          create: lineData
        }
      }
    }) : await this.prisma.$transaction(async (txClient) => {
      const entry = await txClient.journalEntry.create({
        data: {
          entityId: entity.id,
          transactionDate: date,
          postedAt: /* @__PURE__ */ new Date(),
          // Now
          description,
          reference,
          isLocked: true,
          // Auto-lock for immutability invariant
          lines: {
            create: lineData
          }
        }
      });
      return entry;
    });
    return { journalEntryId: result.id };
  }
  // Note: Other IFinanceModule methods will be implemented later
  async generateInvoice(input) {
    throw new Error("Not implemented");
  }
  async getTenantBalance(tenantId) {
    throw new Error("Not implemented");
  }
  async recordPayment(invoiceId, amount, paymentMethodId) {
    throw new Error("Not implemented");
  }
}
const journalService = new JournalService(import_iam.prisma);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  JournalService,
  journalService
});
//# sourceMappingURL=journal-service.js.map
