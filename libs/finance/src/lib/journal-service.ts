import { Decimal } from '@prisma/client/runtime/library';
import { PostJournalInput, IFinanceModule } from '../index';
import { PrismaClient } from '@prisma/client';
import { prisma } from '@rentflow/iam';

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
  ): Promise<{ journalEntryId: string }> {
    const { organizationId, date, reference, description, lines } = input;

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
    const entity = await this.prisma.financialEntity.findFirst({
      where: { organizationId },
      include: { accounts: true },
    });

    if (!entity) {
      throw new Error(`Financial Entity not found for Org: ${organizationId}`);
    }

    // 3. Resolve Account IDs from Codes with validation
    const lineData = lines.map((line) => {
      const account = entity.accounts.find((a) => a.code === line.accountCode);
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
    const result = await this.prisma.$transaction(async (tx) => {
      const entry = await tx.journalEntry.create({
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
