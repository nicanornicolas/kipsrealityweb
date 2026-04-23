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
var import_types = require("./types");
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
  async getFinanceSummary(organizationId, propertyId) {
    const targetCodes = [
      import_types.CHART_OF_ACCOUNTS.CASH_IN_BANK,
      import_types.CHART_OF_ACCOUNTS.ACCOUNTS_RECEIVABLE,
      import_types.CHART_OF_ACCOUNTS.SALES_TAX_PAYABLE,
      import_types.CHART_OF_ACCOUNTS.RENTAL_INCOME,
      import_types.CHART_OF_ACCOUNTS.MAINTENANCE_EXPENSE,
      import_types.CHART_OF_ACCOUNTS.UTILITY_EXPENSE,
      import_types.CHART_OF_ACCOUNTS.MANAGEMENT_FEES
    ];
    const entity = await this.prisma.financialEntity.findFirst({
      where: { organizationId },
      include: {
        accounts: {
          where: {
            code: { in: targetCodes }
          },
          select: {
            id: true,
            code: true
          }
        }
      }
    });
    if (!entity) {
      return {
        cashInBank: new import_library.Decimal(0),
        accountsReceivable: new import_library.Decimal(0),
        salesTaxLiability: new import_library.Decimal(0),
        totalRevenue: new import_library.Decimal(0),
        operatingExpenses: new import_library.Decimal(0),
        overdueAmount: new import_library.Decimal(0)
      };
    }
    const accountIdByCode = /* @__PURE__ */ new Map();
    for (const account of entity.accounts) {
      accountIdByCode.set(account.code, account.id);
    }
    const accountIds = entity.accounts.map((account) => account.id);
    const aggregates = accountIds.length > 0 ? await this.prisma.journalLine.groupBy({
      by: ["accountId"],
      where: {
        accountId: { in: accountIds },
        ...propertyId ? { propertyId } : {},
        journalEntry: {
          entityId: entity.id,
          isLocked: true
        }
      },
      _sum: {
        debit: true,
        credit: true
      }
    }) : [];
    const balanceByAccountId = /* @__PURE__ */ new Map();
    for (const row of aggregates) {
      const dr = new import_library.Decimal(row._sum.debit ?? 0);
      const cr = new import_library.Decimal(row._sum.credit ?? 0);
      balanceByAccountId.set(row.accountId, dr.minus(cr));
    }
    const getBalance = (code) => {
      const accountId = accountIdByCode.get(code);
      if (!accountId) return new import_library.Decimal(0);
      const debitNormal = code.startsWith("1") || code.startsWith("5");
      const drMinusCr = balanceByAccountId.get(accountId) ?? new import_library.Decimal(0);
      return debitNormal ? drMinusCr : drMinusCr.negated();
    };
    const overdueInvoices = await this.prisma.invoice.aggregate({
      where: {
        postingStatus: "POSTED",
        status: {
          not: "PAID"
        },
        dueDate: {
          lt: /* @__PURE__ */ new Date()
        },
        Lease: {
          property: {
            organizationId
          },
          ...propertyId ? { propertyId } : {}
        }
      },
      _sum: {
        totalAmount: true
      }
    });
    const operatingExpenses = [
      import_types.CHART_OF_ACCOUNTS.MAINTENANCE_EXPENSE,
      import_types.CHART_OF_ACCOUNTS.UTILITY_EXPENSE,
      import_types.CHART_OF_ACCOUNTS.MANAGEMENT_FEES
    ].reduce((total, code) => total.plus(getBalance(code)), new import_library.Decimal(0));
    return {
      cashInBank: getBalance(import_types.CHART_OF_ACCOUNTS.CASH_IN_BANK),
      accountsReceivable: getBalance(import_types.CHART_OF_ACCOUNTS.ACCOUNTS_RECEIVABLE),
      salesTaxLiability: getBalance(import_types.CHART_OF_ACCOUNTS.SALES_TAX_PAYABLE),
      totalRevenue: getBalance(import_types.CHART_OF_ACCOUNTS.RENTAL_INCOME),
      operatingExpenses,
      overdueAmount: new import_library.Decimal(overdueInvoices._sum.totalAmount ?? 0)
    };
  }
  async getInvoices(organizationId, filters) {
    const page = Math.max(1, filters.page ?? 1);
    const limit = Math.min(Math.max(filters.limit ?? 10, 1), 100);
    const normalizedStatus = filters.status === "VOID" ? "CANCELLED" : filters.status;
    const search = filters.search?.trim();
    const where = {
      Lease: {
        property: {
          organizationId
        },
        ...filters.propertyId && filters.propertyId !== "all" ? { propertyId: filters.propertyId } : {}
      },
      ...normalizedStatus ? {
        status: normalizedStatus
      } : {},
      ...search ? {
        OR: [
          { id: { contains: search } },
          { Lease: { property: { name: { contains: search } } } },
          { Lease: { property: { address: { contains: search } } } },
          { Lease: { unit: { unitNumber: { contains: search } } } },
          { Lease: { tenant: { firstName: { contains: search } } } },
          { Lease: { tenant: { lastName: { contains: search } } } }
        ]
      } : {}
    };
    const [items, total] = await Promise.all([
      this.prisma.invoice.findMany({
        where,
        include: {
          Lease: {
            include: {
              property: true,
              unit: true,
              tenant: true
            }
          }
        },
        orderBy: { dueDate: "desc" },
        skip: (page - 1) * limit,
        take: limit
      }),
      this.prisma.invoice.count({ where })
    ]);
    const data = items.map((invoice) => {
      const tenantFirstName = invoice.Lease?.tenant?.firstName?.trim() ?? "";
      const tenantLastName = invoice.Lease?.tenant?.lastName?.trim() ?? "";
      const tenantName = [tenantFirstName, tenantLastName].filter(Boolean).join(" ") || "N/A";
      const propertyName = invoice.Lease?.property?.name?.trim() || invoice.Lease?.property?.address?.trim() || "N/A";
      const unitNumber = invoice.Lease?.unit?.unitNumber?.trim() || "N/A";
      return {
        id: invoice.id,
        invoiceNumber: `INV-${invoice.id.substring(0, 8).toUpperCase()}`,
        tenantName,
        propertyName,
        unitNumber,
        amount: Number(invoice.totalAmount ?? 0),
        dueDate: invoice.dueDate,
        status: invoice.status === "CANCELLED" ? "VOID" : invoice.status ?? "DRAFT",
        postingStatus: invoice.postingStatus,
        journalEntryId: invoice.journalEntryId
      };
    });
    return {
      data,
      pagination: {
        total,
        page,
        limit
      }
    };
  }
  async getInvoiceDetail(organizationId, invoiceId) {
    const invoice = await this.prisma.invoice.findFirst({
      where: {
        id: invoiceId,
        Lease: {
          property: {
            organizationId
          }
        }
      },
      include: {
        Lease: {
          include: {
            property: true,
            unit: true,
            tenant: true
          }
        },
        InvoiceItem: true,
        journalEntry: {
          include: {
            lines: true
          }
        }
      }
    });
    if (!invoice) {
      throw new Error("Invoice not found");
    }
    const tenantFirstName = invoice.Lease?.tenant?.firstName?.trim() ?? "";
    const tenantLastName = invoice.Lease?.tenant?.lastName?.trim() ?? "";
    const tenantName = [tenantFirstName, tenantLastName].filter(Boolean).join(" ") || "N/A";
    const propertyName = invoice.Lease?.property?.name?.trim() || invoice.Lease?.property?.address?.trim() || "N/A";
    const unitNumber = invoice.Lease?.unit?.unitNumber?.trim() || "N/A";
    const description = invoice.InvoiceItem[0]?.description?.trim() || "";
    return {
      id: invoice.id,
      invoiceNumber: `INV-${invoice.id.substring(0, 8).toUpperCase()}`,
      tenantName,
      propertyName,
      unitNumber,
      amount: Number(invoice.totalAmount ?? 0),
      dueDate: invoice.dueDate,
      status: invoice.status === "CANCELLED" ? "VOID" : invoice.status ?? "DRAFT",
      postingStatus: invoice.postingStatus,
      journalEntryId: invoice.journalEntryId,
      description,
      createdAt: invoice.createdAt ?? /* @__PURE__ */ new Date(),
      postedAt: invoice.journalEntry?.postedAt ?? void 0,
      ledgerEntries: invoice.journalEntry?.lines.map((line) => ({
        accountId: line.accountId,
        debit: Number(line.debit ?? 0),
        credit: Number(line.credit ?? 0)
      })) ?? []
    };
  }
  /**
   * Get vendor compliance list with YTD spend tracking and W-9 status.
   * Used for 1099-MISC risk assessment and IRS threshold monitoring.
   *
   * Returns vendors with:
   * - YTD spend aggregation (posted expenses only)
   * - W-9 collection status
   * - 1099 requirement flag (businessType !== 'CORPORATION' && YTD >= $600)
   */
  async getVendorComplianceList(organizationId) {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const startOfYear = new Date(currentYear, 0, 1);
    const vendors = await this.prisma.vendor.findMany({
      where: { organizationId },
      include: {
        taxInfo: true,
        invoices: {
          where: {
            postingStatus: "POSTED",
            createdAt: { gte: startOfYear }
          },
          select: { amount: true }
        }
      }
    });
    return vendors.map((vendor) => {
      const totalPaidYTD = vendor.invoices.reduce(
        (sum, inv) => sum.plus(new import_library.Decimal(inv.amount)),
        new import_library.Decimal(0)
      );
      const w9Collected = vendor.taxInfo?.isTaxExempt ?? false;
      const requires1099 = vendor.businessType !== "CORPORATION" && totalPaidYTD.greaterThanOrEqualTo(600);
      return {
        id: vendor.id,
        name: vendor.companyName,
        category: vendor.serviceType,
        businessType: vendor.businessType,
        w9Status: w9Collected ? "COLLECTED" : "MISSING",
        totalPaidYTD: Number(totalPaidYTD),
        requires1099
      };
    });
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
