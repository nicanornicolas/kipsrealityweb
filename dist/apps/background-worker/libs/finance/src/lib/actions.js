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
var actions_exports = {};
__export(actions_exports, {
  FinanceActions: () => FinanceActions,
  financeActions: () => financeActions
});
module.exports = __toCommonJS(actions_exports);
var import_library = require("@prisma/client/runtime/library");
var import_journal_service = require("./journal-service");
var import_types = require("./types");
var import_iam = require("@rentflow/iam");
class FinanceActions {
  constructor(db, journalService) {
    this.db = db;
    this.journalService = journalService;
  }
  db;
  journalService;
  async postInvoiceToGL(invoiceId) {
    const invoice = await this.db.invoice.findUnique({
      where: { id: invoiceId },
      include: {
        Lease: {
          include: {
            property: true,
            tenant: true
          }
        }
      }
    });
    if (!invoice) throw new Error(`Invoice ${invoiceId} not found`);
    if (invoice.postingStatus === "POSTED") {
      console.log(
        `[Finance] Invoice ${invoiceId} is already posted. Skipping.`
      );
      return;
    }
    const organizationId = invoice.organizationId ?? invoice.Lease?.property?.organizationId;
    const propertyId = invoice.propertyId ?? invoice.Lease?.propertyId ?? invoice.Lease?.property?.id;
    const tenantId = invoice.tenantId ?? invoice.Lease?.tenantId;
    if (!organizationId) {
      throw new Error(`Invoice ${invoiceId} has no organization assigned`);
    }
    if (!propertyId) {
      throw new Error(`Invoice ${invoiceId} has no property assigned`);
    }
    if (!tenantId) {
      throw new Error(`Invoice ${invoiceId} has no tenant assigned`);
    }
    const rentAmount = new import_library.Decimal(invoice.totalAmount);
    const taxAmount = invoice.taxAmount ? new import_library.Decimal(invoice.taxAmount) : new import_library.Decimal(0);
    const totalReceivable = rentAmount.plus(taxAmount);
    try {
      const lines = [
        // Debit Accounts Receivable (total amount tenant owes)
        {
          accountCode: import_types.CHART_OF_ACCOUNTS.ACCOUNTS_RECEIVABLE,
          debit: totalReceivable,
          credit: new import_library.Decimal(0),
          propertyId,
          tenantId
        },
        // Credit Rental Income (base rent revenue)
        {
          accountCode: import_types.CHART_OF_ACCOUNTS.RENTAL_INCOME,
          debit: new import_library.Decimal(0),
          credit: rentAmount,
          propertyId,
          tenantId
        }
      ];
      if (taxAmount.greaterThan(0)) {
        lines.push({
          accountCode: import_types.CHART_OF_ACCOUNTS.SALES_TAX_PAYABLE,
          debit: new import_library.Decimal(0),
          credit: taxAmount,
          propertyId,
          tenantId
        });
      }
      const { journalEntryId } = await this.journalService.postJournalEntry({
        organizationId,
        date: invoice.createdAt || /* @__PURE__ */ new Date(),
        reference: `INV-${invoiceId.substring(0, 8)}`,
        description: `Automated posting for Invoice ${invoiceId}`,
        lines
      });
      await this.db.invoice.update({
        where: { id: invoiceId },
        data: {
          postingStatus: "POSTED",
          journalEntryId
        }
      });
    } catch (error) {
      await this.db.invoice.update({
        where: { id: invoiceId },
        data: { postingStatus: "FAILED" }
      });
      throw error;
    }
  }
  /**
   * Translates a received Payment into a GAAP-compliant Journal Entry and posts it.
   * Debits Cash (1000) and credits Accounts Receivable (1100).
   */
  async postPaymentToGL(paymentId) {
    const payment = await this.db.payment.findUnique({
      where: { id: paymentId },
      include: {
        invoice: {
          include: {
            Lease: {
              include: {
                property: true,
                tenant: true
              }
            }
          }
        }
      }
    });
    if (!payment) throw new Error(`Payment ${paymentId} not found`);
    if (!payment.invoice) {
      throw new Error(`Payment ${paymentId} is orphaned (no linked invoice)`);
    }
    if (payment.postingStatus === "POSTED") {
      console.log(
        `[Finance] Payment ${paymentId} is already posted. Skipping.`
      );
      return;
    }
    const invoice = payment.invoice;
    const organizationId = invoice.organizationId ?? invoice.Lease?.property?.organizationId;
    const propertyId = invoice.propertyId ?? invoice.Lease?.propertyId;
    const tenantId = invoice.tenantId ?? invoice.Lease?.tenantId;
    if (!organizationId) {
      throw new Error(`Payment ${paymentId} has no organization assigned`);
    }
    if (!propertyId) {
      throw new Error(`Payment ${paymentId} has no property assigned`);
    }
    if (!tenantId) {
      throw new Error(`Payment ${paymentId} has no tenant assigned`);
    }
    const amount = new import_library.Decimal(payment.amount);
    try {
      const lines = [
        // Debit cash because funds were received.
        {
          accountCode: import_types.CHART_OF_ACCOUNTS.CASH_IN_BANK,
          debit: amount,
          credit: new import_library.Decimal(0),
          propertyId,
          tenantId
        },
        // Credit AR to clear what tenant owed.
        {
          accountCode: import_types.CHART_OF_ACCOUNTS.ACCOUNTS_RECEIVABLE,
          debit: new import_library.Decimal(0),
          credit: amount,
          propertyId,
          tenantId
        }
      ];
      const { journalEntryId } = await this.journalService.postJournalEntry({
        organizationId,
        date: payment.paidOn ?? /* @__PURE__ */ new Date(),
        reference: `PAY-${paymentId.substring(0, 8)}`,
        description: `Payment received for Invoice ${payment.invoiceId}`,
        lines
      });
      await this.db.payment.update({
        where: { id: paymentId },
        data: {
          postingStatus: "POSTED",
          journalEntryId
        }
      });
    } catch (error) {
      await this.db.payment.update({
        where: { id: paymentId },
        data: { postingStatus: "FAILED" }
      });
      throw error;
    }
  }
  /**
   * Creates an Invoice for cross-module service billing (DSS signing fees, etc.)
   * and automatically posts it to the General Ledger.
   */
  async billOrganizationForService(params) {
    const invoice = await this.db.invoice.create({
      data: {
        organizationId: params.organizationId,
        type: "FEE",
        totalAmount: params.amount,
        balance: params.amount,
        dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1e3),
        status: "ISSUED",
        referenceType: params.referenceType,
        referenceId: params.referenceId,
        InvoiceItem: {
          create: [
            {
              description: params.description,
              amount: params.amount
            }
          ]
        }
      }
    });
    const amount = new import_library.Decimal(params.amount);
    const incomeAccountCode = params.serviceType === "DSS_SIGNING" ? import_types.CHART_OF_ACCOUNTS.DOCUMENT_SIGNING_INCOME : import_types.CHART_OF_ACCOUNTS.MAINTENANCE_INCOME;
    try {
      const lines = [
        {
          accountCode: import_types.CHART_OF_ACCOUNTS.ACCOUNTS_RECEIVABLE,
          debit: amount,
          credit: new import_library.Decimal(0)
        },
        {
          accountCode: incomeAccountCode,
          debit: new import_library.Decimal(0),
          credit: amount
        }
      ];
      const { journalEntryId } = await this.journalService.postJournalEntry({
        organizationId: params.organizationId,
        date: /* @__PURE__ */ new Date(),
        reference: `SVC-${invoice.id.substring(0, 8)}`,
        description: `Service fee: ${params.description}`,
        lines
      });
      await this.db.invoice.update({
        where: { id: invoice.id },
        data: {
          postingStatus: "POSTED",
          journalEntryId
        }
      });
      return { invoiceId: invoice.id, journalEntryId };
    } catch (error) {
      await this.db.invoice.update({
        where: { id: invoice.id },
        data: { postingStatus: "FAILED" }
      });
      throw error;
    }
  }
}
const financeActions = new FinanceActions(
  import_iam.prisma,
  new import_journal_service.JournalService(import_iam.prisma)
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FinanceActions,
  financeActions
});
//# sourceMappingURL=actions.js.map
