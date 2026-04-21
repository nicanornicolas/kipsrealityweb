import { describe, it, expect, beforeEach, vi } from 'vitest';
import { JournalService } from './journal-service';
import { Decimal } from '@prisma/client/runtime/library';

// We mock Prisma to ensure we are testing pure business logic
const mockPrisma = {
  $transaction: vi.fn((callback) => callback(mockPrisma)),
  financialEntity: {
    findFirst: vi.fn().mockResolvedValue({
      id: 'entity-123',
      accounts: [
        { id: 'acc-1000', code: '1000' },
        { id: 'acc-4000', code: '4000' },
      ],
    }),
  },
  journalEntry: { create: vi.fn() },
};

describe('JournalService - Double Entry Enforcer', () => {
  let journalService: JournalService;

  beforeEach(() => {
    vi.clearAllMocks();
    journalService = new JournalService(mockPrisma as any);
  });

  it('MUST FAIL and throw GL_IMBALANCE if Debits do not equal Credits', async () => {
    const unbalancedInput = {
      organizationId: 'org-123',
      date: new Date(),
      reference: 'TEST-001',
      description: 'Unbalanced Test',
      lines: [
        {
          accountCode: '1000' as const,
          debit: new Decimal(100.0),
          credit: new Decimal(0),
        }, // Dr. Cash $100
        {
          accountCode: '4000' as const,
          debit: new Decimal(0),
          credit: new Decimal(90.0),
        }, // Cr. Revenue $90
      ],
    };

    // Expect the promise to reject with a specific error message
    await expect(
      journalService.postJournalEntry(unbalancedInput),
    ).rejects.toThrowError(
      /GL IMBALANCE: Debits \(\$100\) do not equal Credits \(\$90\)/,
    );

    // Ensure the database was NEVER called
    expect(mockPrisma.journalEntry.create).not.toHaveBeenCalled();
  });

  it('MUST PASS and create locked entry when Debits equal Credits', async () => {
    const balancedInput = {
      organizationId: 'org-123',
      date: new Date(),
      reference: 'TEST-002',
      description: 'Balanced Test',
      lines: [
        {
          accountCode: '1000' as const,
          debit: new Decimal(100.0),
          credit: new Decimal(0),
        }, // Dr. Cash $100
        {
          accountCode: '4000' as const,
          debit: new Decimal(0),
          credit: new Decimal(100.0),
        }, // Cr. Revenue $100
      ],
    };

    mockPrisma.journalEntry.create.mockResolvedValue({ id: 'je-123' });

    const result = await journalService.postJournalEntry(balancedInput);

    expect(result.journalEntryId).toBe('je-123');
    expect(mockPrisma.journalEntry.create).toHaveBeenCalledOnce();

    // Ensure the entry is locked (Immutability invariant)
    const createCallArgs = mockPrisma.journalEntry.create.mock.calls[0][0];
    expect(createCallArgs.data.isLocked).toBe(true);
  });
});
