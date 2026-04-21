// libs/finance/src/lib/actions.ts
import { PrismaClient } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { JournalService } from './journal-service';
import { CHART_OF_ACCOUNTS } from './types';
import { prisma } from '@rentflow/iam';

export class FinanceActions {
  constructor(
    private db: PrismaClient,
    private journalService: JournalService,
  ) {}

  async postInvoiceToGL(invoiceId: string): Promise<void> {
    const invoice = await this.db.invoice.findUnique({
      where: { id: invoiceId },
      include: {
        Lease: {
          include: {
            property: true,
            tenant: true,
          },
        },
      },
    });

    if (!invoice) throw new Error(`Invoice ${invoiceId} not found`);

    // Idempotency check - skip if already posted
    if (invoice.postingStatus === 'POSTED') {
      console.log(
        `[Finance] Invoice ${invoiceId} is already posted. Skipping.`,
      );
      return;
    }

    // Get dimensions from invoice or relationships
    // Note: Invoice model doesn't have organizationId, propertyId, or tenantId directly
    // They come through Lease -> Property -> organizationId and Lease -> tenantId
    const organizationId = invoice.Lease?.property?.organizationId;
    const propertyId =
      (invoice as any).propertyId ??
      (invoice.Lease as any)?.propertyId ??
      (invoice.Lease as any)?.property?.id;
    const tenantId = (invoice as any).tenantId ?? (invoice.Lease as any)?.tenantId;

    if (!organizationId) {
      throw new Error(`Invoice ${invoiceId} has no organization assigned`);
    }
    if (!propertyId) {
      throw new Error(`Invoice ${invoiceId} has no property assigned`);
    }
    if (!tenantId) {
      throw new Error(`Invoice ${invoiceId} has no tenant assigned`);
    }

    // Convert to Decimal for precise calculations (totalAmount is the invoice total)
    const rentAmount = new Decimal(invoice.totalAmount);
    const taxAmount = new Decimal(0);
    const totalReceivable = rentAmount.plus(taxAmount);

    try {
      // Build GAAP-compliant journal lines
      const lines = [
        // Debit Accounts Receivable (total amount tenant owes)
        {
          accountCode: CHART_OF_ACCOUNTS.ACCOUNTS_RECEIVABLE,
          debit: totalReceivable,
          credit: new Decimal(0),
          propertyId,
          tenantId,
        },
        // Credit Rental Income (base rent revenue)
        {
          accountCode: CHART_OF_ACCOUNTS.RENTAL_INCOME,
          debit: new Decimal(0),
          credit: rentAmount,
          propertyId,
          tenantId,
        },
      ];

      // Credit Sales Tax Payable if tax applies (USA tax compliance)
      if (taxAmount.greaterThan(0)) {
        lines.push({
          accountCode: CHART_OF_ACCOUNTS.SALES_TAX_PAYABLE as any,
          debit: new Decimal(0),
          credit: taxAmount,
          propertyId,
          tenantId,
        });
      }

      // Post to the General Ledger
      const { journalEntryId } = await this.journalService.postJournalEntry({
        organizationId,
        date: invoice.createdAt || new Date(),
        reference: `INV-${invoiceId.substring(0, 8)}`,
        description: `Automated posting for Invoice ${invoiceId}`,
        lines,
      });

      // Mark invoice as posted with journal entry reference
      await this.db.invoice.update({
        where: { id: invoiceId },
        data: {
          postingStatus: 'POSTED',
          journalEntryId,
        },
      });
    } catch (error) {
      // If GL posting fails, mark invoice as FAILED for manual review
      await this.db.invoice.update({
        where: { id: invoiceId },
        data: { postingStatus: 'FAILED' },
      });
      throw error;
    }
  }

  /**
   * Translates a received Payment into a GAAP-compliant Journal Entry and posts it.
   * Debits Cash (1000) and credits Accounts Receivable (1100).
   */
  async postPaymentToGL(paymentId: string): Promise<void> {
    const payment = await this.db.payment.findUnique({
      where: { id: paymentId },
      include: {
        invoice: {
          include: {
            Lease: {
              include: {
                property: true,
                tenant: true,
              },
            },
          },
        },
      },
    });

    if (!payment) throw new Error(`Payment ${paymentId} not found`);
    if (!payment.invoice) {
      throw new Error(`Payment ${paymentId} is orphaned (no linked invoice)`);
    }

    // Idempotency check - skip if already posted
    if (payment.postingStatus === 'POSTED') {
      console.log(
        `[Finance] Payment ${paymentId} is already posted. Skipping.`,
      );
      return;
    }

    const invoice = payment.invoice;
    const organizationId =
      (invoice as any).organizationId ??
      invoice.Lease?.property?.organizationId;
    const propertyId = (invoice as any).propertyId ?? invoice.Lease?.propertyId;
    const tenantId = (invoice as any).tenantId ?? invoice.Lease?.tenantId;

    if (!organizationId) {
      throw new Error(`Payment ${paymentId} has no organization assigned`);
    }
    if (!propertyId) {
      throw new Error(`Payment ${paymentId} has no property assigned`);
    }
    if (!tenantId) {
      throw new Error(`Payment ${paymentId} has no tenant assigned`);
    }

    const amount = new Decimal(payment.amount);

    try {
      const lines = [
        // Debit cash because funds were received.
        {
          accountCode: CHART_OF_ACCOUNTS.CASH_IN_BANK,
          debit: amount,
          credit: new Decimal(0),
          propertyId,
          tenantId,
        },
        // Credit AR to clear what tenant owed.
        {
          accountCode: CHART_OF_ACCOUNTS.ACCOUNTS_RECEIVABLE,
          debit: new Decimal(0),
          credit: amount,
          propertyId,
          tenantId,
        },
      ];

      const { journalEntryId } = await this.journalService.postJournalEntry({
        organizationId,
        date: payment.paidOn ?? new Date(),
        reference: `PAY-${paymentId.substring(0, 8)}`,
        description: `Payment received for Invoice ${payment.invoiceId}`,
        lines,
      });

      await this.db.payment.update({
        where: { id: paymentId },
        data: {
          postingStatus: 'POSTED',
          journalEntryId,
        },
      });
    } catch (error) {
      await this.db.payment.update({
        where: { id: paymentId },
        data: { postingStatus: 'FAILED' },
      });
      throw error;
    }
  }

  /**
   * Creates an Invoice for cross-module service billing (DSS signing fees, etc.)
   * and automatically posts it to the General Ledger.
   */
  async billOrganizationForService(params: {
    organizationId: string;
    leaseId?: string;
    amount: number;
    description: string;
    referenceType: string;
    referenceId: string;
    serviceType: 'DSS_SIGNING' | 'BACKGROUND_CHECK';
  }): Promise<{ invoiceId: string; journalEntryId: string }> {
    const leaseId =
      params.leaseId ??
      (
        await this.db.lease.findFirst({
          where: { property: { organizationId: params.organizationId } },
          select: { id: true },
        })
      )?.id;

    if (!leaseId) {
      throw new Error(
        `Cannot create service invoice: no lease found for organization ${params.organizationId}`,
      );
    }

    const invoice = await this.db.invoice.create({
      data: {
        leaseId,
        type: 'MAINTENANCE',
        totalAmount: params.amount,
        balance: params.amount,
        dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        status: 'PENDING',
        InvoiceItem: {
          create: [
            {
              description: `${params.referenceType}:${params.referenceId} - ${params.description}`,
              amount: params.amount,
            },
          ],
        },
      },
    });

    const amount = new Decimal(params.amount);
    const incomeAccountCode: string =
      params.serviceType === 'DSS_SIGNING'
        ? CHART_OF_ACCOUNTS.DOCUMENT_SIGNING_INCOME
        : CHART_OF_ACCOUNTS.MAINTENANCE_INCOME;

    try {
      const lines = [
        {
          accountCode: CHART_OF_ACCOUNTS.ACCOUNTS_RECEIVABLE,
          debit: amount,
          credit: new Decimal(0),
        },
        {
          accountCode: incomeAccountCode,
          debit: new Decimal(0),
          credit: amount,
        },
      ];

      const { journalEntryId } = await this.journalService.postJournalEntry({
        organizationId: params.organizationId,
        date: new Date(),
        reference: `SVC-${invoice.id.substring(0, 8)}`,
        description: `Service fee: ${params.description}`,
        lines: lines as any,
      });

      await this.db.invoice.update({
        where: { id: invoice.id },
        data: {
          postingStatus: 'POSTED',
          journalEntryId,
        },
      });

      return { invoiceId: invoice.id, journalEntryId };
    } catch (error) {
      await this.db.invoice.update({
        where: { id: invoice.id },
        data: { postingStatus: 'FAILED' },
      });
      throw error;
    }
  }

  /**
   * Recognizes a Vendor Expense (Liability) to GL.
   * Dr. 5100 Maintenance Expense (or 5200 for Utility)
   * Cr. 2200 Accounts Payable
   *
   * USA Compliance: This posts the expense amount, tracking YTD spend for 1099-MISC eligibility.
   */
  async postExpenseToGL(vendorInvoiceId: string): Promise<void> {
    const invoice = await this.db.vendorInvoice.findUnique({
      where: { id: vendorInvoiceId },
      include: { vendor: true },
    });

    if (!invoice) throw new Error('Vendor invoice not found');

    // Idempotency check - skip if already posted
    if (invoice.postingStatus === 'POSTED') {
      console.log(
        `[Finance] Vendor invoice ${vendorInvoiceId} is already posted. Skipping.`,
      );
      return;
    }

    const { organizationId, propertyId, amount, category, vendor } = invoice;

    if (!organizationId) {
      throw new Error(
        `Vendor invoice ${vendorInvoiceId} has no organization assigned`,
      );
    }

    if (!propertyId) {
      throw new Error(
        `Vendor invoice ${vendorInvoiceId} has no property assigned`,
      );
    }

    const expenseAmount = new Decimal(amount);

    // Determine which expense account based on category
    const expenseAccountCode =
      category === 'UTILITY'
        ? CHART_OF_ACCOUNTS.UTILITY_EXPENSE
        : category === 'TAX'
          ? '5300' // Tax expense (not in CHART_OF_ACCOUNTS, but defined)
          : category === 'MANAGEMENT_FEE'
            ? CHART_OF_ACCOUNTS.MANAGEMENT_FEES
            : CHART_OF_ACCOUNTS.MAINTENANCE_EXPENSE;

    try {
      // Build GAAP-compliant journal lines
      const lines = [
        // Debit Expense Account
        {
          accountCode: expenseAccountCode as any,
          debit: expenseAmount,
          credit: new Decimal(0),
          propertyId,
        },
        // Credit Accounts Payable (liability for vendor payment)
        {
          accountCode: CHART_OF_ACCOUNTS.ACCOUNTS_PAYABLE,
          debit: new Decimal(0),
          credit: expenseAmount,
          propertyId,
        },
      ];

      // Post to the General Ledger
      const { journalEntryId } = await this.journalService.postJournalEntry({
        organizationId,
        date: invoice.createdAt || new Date(),
        reference: `VEND-${vendorInvoiceId.substring(0, 8)}`,
        description: `Vendor Bill: ${vendor.companyName} - ${invoice.description || 'Expense'}`,
        lines,
      });

      // Mark invoice as posted with journal entry reference
      await this.db.vendorInvoice.update({
        where: { id: vendorInvoiceId },
        data: {
          postingStatus: 'POSTED',
          journalEntryId,
        },
      });
    } catch (error) {
      // If GL posting fails, mark invoice as FAILED for manual review
      await this.db.vendorInvoice.update({
        where: { id: vendorInvoiceId },
        data: { postingStatus: 'FAILED' },
      });
      throw error;
    }
  }
}

// Export the singleton for Next.js API routes to consume easily
export const financeActions = new FinanceActions(
  prisma,
  new JournalService(prisma),
);
