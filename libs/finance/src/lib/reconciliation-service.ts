import { prisma } from '@rentflow/iam';
import { Decimal } from '@prisma/client/runtime/library';

export class ReconciliationService {
  /**
   * Finds likely journal entries for a bank transaction using amount and date proximity.
   */
  async getSuggestedMatches(bankTransactionId: string, organizationId?: string) {
    const tx = await prisma.bankTransaction.findUnique({
      where: { id: bankTransactionId },
    });

    if (!tx) {
      throw new Error('Transaction not found');
    }

    if (organizationId && tx.organizationId !== organizationId) {
      throw new Error('Transaction not found');
    }

    const searchAmount = new Decimal(tx.amount).abs();
    const startDate = new Date(tx.date);
    startDate.setDate(startDate.getDate() - 3);

    const endDate = new Date(tx.date);
    endDate.setDate(endDate.getDate() + 3);

    const candidates = await prisma.journalEntry.findMany({
      where: {
        entity: {
          organizationId: tx.organizationId,
        },
        isLocked: true,
        bankTransaction: null,
        transactionDate: { gte: startDate, lte: endDate },
        lines: {
          some: {
            OR: [
              { debit: searchAmount, credit: new Decimal(0) },
              { debit: new Decimal(0), credit: searchAmount },
            ],
          },
        },
      },
      include: {
        lines: {
          include: {
            account: true,
          },
        },
      },
      orderBy: { transactionDate: 'desc' },
    });

    return candidates;
  }
}
