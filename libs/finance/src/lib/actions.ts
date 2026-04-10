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
    const organizationId =
      invoice.organizationId ?? invoice.Lease?.property?.organizationId;
    const propertyId = invoice.propertyId ?? invoice.Lease?.propertyId;
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

    // Convert to Decimal for precise calculations (totalAmount is the invoice total)
    const rentAmount = new Decimal(invoice.totalAmount);
    const taxAmount = invoice.taxAmount
      ? new Decimal(invoice.taxAmount)
      : new Decimal(0);
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
          accountCode: CHART_OF_ACCOUNTS.SALES_TAX_PAYABLE,
          debit: new Decimal(0),
          credit: taxAmount,
          propertyId,
          tenantId,
        });
      }

      // Post to the General Ledger
      const { journalEntryId } = await this.journalService.postJournalEntry({
        organizationId,
        date: invoice.createdAt,
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
      (invoice as any).organizationId ?? invoice.Lease?.property?.organizationId;
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
}

// Export the singleton for Next.js API routes to consume easily
export const financeActions = new FinanceActions(
  prisma,
  new JournalService(prisma),
);
