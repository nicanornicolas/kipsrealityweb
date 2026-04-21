import { Decimal } from '@prisma/client/runtime/library';
import {
  PostJournalInput,
  IFinanceModule,
  FinanceSummary,
  InvoiceFilters,
  InvoiceListItem,
  InvoiceDetail,
  VendorListItem,
} from '../index';
import { Prisma, PrismaClient } from '@prisma/client';
import { prisma } from '@rentflow/iam';
import { CHART_OF_ACCOUNTS } from './types';

/**
 * JournalService implements the core financial invariants of our Engineering Constitution:
 * 1. Decimal precision (no floating-point math)
 * 2. Exact Debit = Credit validation
 * 3. Absolute immutability (isLocked: true)
 */
export class JournalService implements IFinanceModule {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  /**
   * Post a Journal Entry to the General Ledger.
   * THROWS GL_IMBALANCE error if Debits != Credits.
   */
  async postJournalEntry(
    input: PostJournalInput,
    tx?: any,
  ): Promise<{ journalEntryId: string }> {
    const { organizationId, date, reference, description, lines } = input;
    const db = tx ?? this.prisma;

    // 1. Validate Double-Entry Math with Decimal precision
    let totalDebit = new Decimal(0);
    let totalCredit = new Decimal(0);

    lines.forEach((line) => {
      totalDebit = totalDebit.plus(line.debit);
      totalCredit = totalCredit.plus(line.credit);
    });

    // Exact validation: Debits MUST equal Credits
    if (!totalDebit.equals(totalCredit)) {
      throw new Error(
        `GL IMBALANCE: Debits ($${totalDebit}) do not equal Credits ($${totalCredit}). Transaction blocked.`,
      );
    }

    // 2. Get Financial Entity for this Organization
    const entity = await db.financialEntity.findFirst({
      where: { organizationId },
      include: { accounts: true },
    });

    if (!entity) {
      throw new Error(`Financial Entity not found for Org: ${organizationId}`);
    }

    // 3. Resolve Account IDs from Codes with validation
    const lineData = lines.map((line) => {
      const account = entity.accounts.find((a: { code: string }) => a.code === line.accountCode);
      if (!account) {
        throw new Error(
          `Account Code ${line.accountCode} not configured for this entity.`,
        );
      }

      return {
        accountId: account.id,
        description,
        debit: line.debit,
        credit: line.credit,
        propertyId: line.propertyId,
        tenantId: line.tenantId,
      };
    });

    // 4. Write to Database with absolute immutability (isLocked: true)
    const result = tx
      ? await tx.journalEntry.create({
          data: {
            entityId: entity.id,
            transactionDate: date,
            postedAt: new Date(), // Now
            description,
            reference,
            isLocked: true, // Auto-lock for immutability invariant
            lines: {
              create: lineData,
            },
          },
        })
      : await this.prisma.$transaction(async (txClient) => {
          const entry = await txClient.journalEntry.create({
            data: {
              entityId: entity.id,
              transactionDate: date,
              postedAt: new Date(), // Now
              description,
              reference,
              isLocked: true, // Auto-lock for immutability invariant
              lines: {
                create: lineData,
              },
            },
          });
          return entry;
        });

    return { journalEntryId: result.id };
  }

  async getFinanceSummary(
    organizationId: string,
    propertyId?: string,
  ): Promise<FinanceSummary> {
    const targetCodes = [
      CHART_OF_ACCOUNTS.CASH_IN_BANK,
      CHART_OF_ACCOUNTS.ACCOUNTS_RECEIVABLE,
      CHART_OF_ACCOUNTS.SALES_TAX_PAYABLE,
      CHART_OF_ACCOUNTS.RENTAL_INCOME,
      CHART_OF_ACCOUNTS.MAINTENANCE_EXPENSE,
      CHART_OF_ACCOUNTS.UTILITY_EXPENSE,
      CHART_OF_ACCOUNTS.MANAGEMENT_FEES,
    ];

    const entity = await this.prisma.financialEntity.findFirst({
      where: { organizationId },
      include: {
        accounts: {
          where: {
            code: { in: targetCodes },
          },
          select: {
            id: true,
            code: true,
          },
        },
      },
    });

    if (!entity) {
      return {
        cashInBank: new Decimal(0),
        accountsReceivable: new Decimal(0),
        salesTaxLiability: new Decimal(0),
        totalRevenue: new Decimal(0),
        operatingExpenses: new Decimal(0),
        overdueAmount: new Decimal(0),
      };
    }

    const accountIdByCode = new Map<string, string>();
    for (const account of entity.accounts) {
      accountIdByCode.set(account.code, account.id);
    }

    const accountIds = entity.accounts.map((account) => account.id);
    const aggregates =
      accountIds.length > 0
        ? await this.prisma.journalLine.groupBy({
            by: ['accountId'],
            where: {
              accountId: { in: accountIds },
              ...(propertyId ? { propertyId } : {}),
              journalEntry: {
                entityId: entity.id,
                isLocked: true,
              },
            },
            _sum: {
              debit: true,
              credit: true,
            },
          })
        : [];

    const balanceByAccountId = new Map<string, Decimal>();
    for (const row of aggregates) {
      const dr = new Decimal(row._sum.debit ?? 0);
      const cr = new Decimal(row._sum.credit ?? 0);
      balanceByAccountId.set(row.accountId, dr.minus(cr));
    }

    const getBalance = (code: string): Decimal => {
      const accountId = accountIdByCode.get(code);
      if (!accountId) return new Decimal(0);

      const debitNormal = code.startsWith('1') || code.startsWith('5');
      const drMinusCr = balanceByAccountId.get(accountId) ?? new Decimal(0);
      return debitNormal ? drMinusCr : drMinusCr.negated();
    };

    const overdueInvoices = await this.prisma.invoice.aggregate({
      where: {
        postingStatus: 'POSTED',
        status: {
          not: 'PAID',
        },
        dueDate: {
          lt: new Date(),
        },
        Lease: {
          property: {
            organizationId,
          },
          ...(propertyId ? { propertyId } : {}),
        },
      },
      _sum: {
        totalAmount: true,
      },
    });

    const operatingExpenses = [
      CHART_OF_ACCOUNTS.MAINTENANCE_EXPENSE,
      CHART_OF_ACCOUNTS.UTILITY_EXPENSE,
      CHART_OF_ACCOUNTS.MANAGEMENT_FEES,
    ].reduce((total, code) => total.plus(getBalance(code)), new Decimal(0));

    return {
      cashInBank: getBalance(CHART_OF_ACCOUNTS.CASH_IN_BANK),
      accountsReceivable: getBalance(CHART_OF_ACCOUNTS.ACCOUNTS_RECEIVABLE),
      salesTaxLiability: getBalance(CHART_OF_ACCOUNTS.SALES_TAX_PAYABLE),
      totalRevenue: getBalance(CHART_OF_ACCOUNTS.RENTAL_INCOME),
      operatingExpenses,
      overdueAmount: new Decimal(overdueInvoices._sum.totalAmount ?? 0),
    };
  }

  async getInvoices(
    organizationId: string,
    filters: InvoiceFilters,
  ): Promise<{ data: InvoiceListItem[]; pagination: { total: number; page: number; limit: number } }> {
    const page = Math.max(1, filters.page ?? 1);
    const limit = Math.min(Math.max(filters.limit ?? 10, 1), 100);
    const normalizedStatus = filters.status === 'VOID' ? 'CANCELLED' : filters.status;
    const search = filters.search?.trim();

    const where: Prisma.InvoiceWhereInput = {
      Lease: {
        property: {
          organizationId,
        },
        ...(filters.propertyId && filters.propertyId !== 'all'
          ? { propertyId: filters.propertyId }
          : {}),
      },
      ...(normalizedStatus
        ? {
            status: normalizedStatus as any,
          }
        : {}),
      ...(search
        ? {
            OR: [
              { id: { contains: search } },
              { Lease: { property: { name: { contains: search } } } },
              { Lease: { property: { address: { contains: search } } } },
              { Lease: { unit: { unitNumber: { contains: search } } } },
              { Lease: { tenant: { firstName: { contains: search } } } },
              { Lease: { tenant: { lastName: { contains: search } } } },
            ],
          }
        : {}),
    };

    const [items, total] = await Promise.all([
      this.prisma.invoice.findMany({
        where,
        include: {
          Lease: {
            include: {
              property: true,
              unit: true,
              tenant: true,
            },
          },
        },
        orderBy: { dueDate: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.invoice.count({ where }),
    ]);

    const data = items.map((invoice) => {
      const tenantFirstName = invoice.Lease?.tenant?.firstName?.trim() ?? '';
      const tenantLastName = invoice.Lease?.tenant?.lastName?.trim() ?? '';
      const tenantName = [tenantFirstName, tenantLastName].filter(Boolean).join(' ') || 'N/A';
      const propertyName = invoice.Lease?.property?.name?.trim()
        || invoice.Lease?.property?.address?.trim()
        || 'N/A';
      const unitNumber = invoice.Lease?.unit?.unitNumber?.trim() || 'N/A';

      return {
        id: invoice.id,
        invoiceNumber: `INV-${invoice.id.substring(0, 8).toUpperCase()}`,
        tenantName,
        propertyName,
        unitNumber,
        amount: Number(invoice.totalAmount ?? 0),
        dueDate: invoice.dueDate,
        status: (invoice.status === 'CANCELLED' ? 'VOID' : (invoice.status ?? 'DRAFT')) as InvoiceListItem['status'],
        postingStatus: invoice.postingStatus as InvoiceListItem['postingStatus'],
        journalEntryId: invoice.journalEntryId,
      };
    });

    return {
      data,
      pagination: {
        total,
        page,
        limit,
      },
    };
  }

  async getInvoiceDetail(
    organizationId: string,
    invoiceId: string,
  ): Promise<InvoiceDetail> {
    const invoice = await this.prisma.invoice.findFirst({
      where: {
        id: invoiceId,
        Lease: {
          property: {
            organizationId,
          },
        },
      },
      include: {
        Lease: {
          include: {
            property: true,
            unit: true,
            tenant: true,
          },
        },
        InvoiceItem: true,
        journalEntry: {
          include: {
            lines: true,
          },
        },
      },
    });

    if (!invoice) {
      throw new Error('Invoice not found');
    }

    const tenantFirstName = invoice.Lease?.tenant?.firstName?.trim() ?? '';
    const tenantLastName = invoice.Lease?.tenant?.lastName?.trim() ?? '';
    const tenantName = [tenantFirstName, tenantLastName].filter(Boolean).join(' ') || 'N/A';
    const propertyName = invoice.Lease?.property?.name?.trim()
      || invoice.Lease?.property?.address?.trim()
      || 'N/A';
    const unitNumber = invoice.Lease?.unit?.unitNumber?.trim() || 'N/A';
    const description = invoice.InvoiceItem[0]?.description?.trim()
      || '';

    return {
      id: invoice.id,
      invoiceNumber: `INV-${invoice.id.substring(0, 8).toUpperCase()}`,
      tenantName,
      propertyName,
      unitNumber,
      amount: Number(invoice.totalAmount ?? 0),
      dueDate: invoice.dueDate,
      status: (invoice.status === 'CANCELLED' ? 'VOID' : (invoice.status ?? 'DRAFT')) as InvoiceDetail['status'],
      postingStatus: invoice.postingStatus as InvoiceDetail['postingStatus'],
      journalEntryId: invoice.journalEntryId,
      description,
      createdAt: invoice.createdAt ?? new Date(),
      postedAt: invoice.journalEntry?.postedAt ?? undefined,
      ledgerEntries: invoice.journalEntry?.lines.map((line) => ({
        accountId: line.accountId,
        debit: Number(line.debit ?? 0),
        credit: Number(line.credit ?? 0),
      })) ?? [],
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
  async getVendorComplianceList(organizationId: string) {
    const currentYear = new Date().getFullYear();
    const startOfYear = new Date(currentYear, 0, 1);

    const vendors = await this.prisma.vendor.findMany({
      where: { organizationId },
      include: {
        taxInfo: true,
        invoices: {
          where: {
            postingStatus: 'POSTED',
            createdAt: { gte: startOfYear },
          },
          select: { amount: true },
        },
      },
    });

    return vendors.map((vendor) => {
      const totalPaidYTD = vendor.invoices.reduce(
        (sum, inv) => sum.plus(new Decimal(inv.amount)),
        new Decimal(0),
      );

      const w9Collected = vendor.taxInfo?.isTaxExempt ?? false;
      const requires1099 = vendor.businessType !== 'CORPORATION' 
        && totalPaidYTD.greaterThanOrEqualTo(600);

      return {
        id: vendor.id,
        name: vendor.companyName,
        category: vendor.serviceType as any,
        businessType: vendor.businessType as any,
        w9Status: w9Collected ? 'COLLECTED' : 'MISSING' as const,
        totalPaidYTD: Number(totalPaidYTD),
        requires1099,
      };
    });
  }

  // Note: Other IFinanceModule methods will be implemented later
  async generateInvoice(input: any): Promise<{ invoiceId: string }> {
    throw new Error('Not implemented');
  }

  async getTenantBalance(
    tenantId: string,
  ): Promise<{ totalOutstanding: Decimal }> {
    throw new Error('Not implemented');
  }

  async recordPayment(
    invoiceId: string,
    amount: Decimal,
    paymentMethodId: string,
  ): Promise<void> {
    throw new Error('Not implemented');
  }
}

export const journalService = new JournalService(prisma);
