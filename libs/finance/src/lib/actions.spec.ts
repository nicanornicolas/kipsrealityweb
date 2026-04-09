// libs/finance/src/lib/actions.spec.ts
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { FinanceActions } from './actions';
import { Decimal } from '@prisma/client/runtime/library';

const mockPrisma = {
  invoice: {
    findUnique: vi.fn(),
    update: vi.fn(),
  },
  payment: {
    findUnique: vi.fn(),
    update: vi.fn(),
  },
};

const mockJournalService = {
  postJournalEntry: vi.fn(),
};

describe('FinanceActions - postInvoiceToGL', () => {
  let actions: FinanceActions;

  beforeEach(() => {
    vi.clearAllMocks();
    actions = new FinanceActions(mockPrisma as any, mockJournalService as any);
  });

  it('MUST ABORT if the invoice is already POSTED (Idempotency)', async () => {
    mockPrisma.invoice.findUnique.mockResolvedValue({
      id: 'inv-123',
      postingStatus: 'POSTED',
      totalAmount: 1000, // Float, not Decimal in Prisma schema
      taxAmount: null,
      createdAt: new Date(),
      Lease: null
    });

    await actions.postInvoiceToGL('inv-123');

    expect(mockJournalService.postJournalEntry).not.toHaveBeenCalled();
    expect(mockPrisma.invoice.update).not.toHaveBeenCalled();
  });

  it('MUST DEBIT Accounts Receivable and CREDIT Rental Income and Tax Payable', async () => {
    mockPrisma.invoice.findUnique.mockResolvedValue({
      id: 'inv-123',
      totalAmount: 1000, // Float in Prisma schema
      taxAmount: new Decimal(50), // Decimal in Prisma schema
      postingStatus: 'PENDING',
      createdAt: new Date(),
      Lease: {
        property: {
          organizationId: 'org-1',
          id: 'prop-1'
        },
        propertyId: 'prop-1',
        tenantId: 'tenant-1',
        tenant: { id: 'tenant-1' }
      }
    });

    mockJournalService.postJournalEntry.mockResolvedValue({ journalEntryId: 'je-1' });

    await actions.postInvoiceToGL('inv-123');

    expect(mockJournalService.postJournalEntry).toHaveBeenCalledOnce();
    const journalInput = mockJournalService.postJournalEntry.mock.calls[0][0];

    // Verify GAAP Rules
    expect(journalInput.lines).toEqual(expect.arrayContaining([
      expect.objectContaining({ accountCode: '1100', debit: new Decimal(1050), credit: new Decimal(0) }), // Total AR
      expect.objectContaining({ accountCode: '4000', debit: new Decimal(0), credit: new Decimal(1000) }), // Rent Revenue
      expect.objectContaining({ accountCode: '2250', debit: new Decimal(0), credit: new Decimal(50) })    // Tax Payable
    ]));

    // Verify Status Update
    expect(mockPrisma.invoice.update).toHaveBeenCalledWith({
      where: { id: 'inv-123' },
      data: { postingStatus: 'POSTED', journalEntryId: 'je-1' }
    });
  });
});

describe('FinanceActions - postPaymentToGL', () => {
  let actions: FinanceActions;

  beforeEach(() => {
    vi.clearAllMocks();
    actions = new FinanceActions(mockPrisma as any, mockJournalService as any);
  });

  it('MUST ABORT if the payment is already POSTED (Idempotency)', async () => {
    mockPrisma.payment.findUnique.mockResolvedValue({
      id: 'pay-123',
      postingStatus: 'POSTED',
      amount: new Decimal(1050),
      invoice: {
        Lease: {
          property: { organizationId: 'org-1' },
          propertyId: 'prop-1',
          tenantId: 'tenant-1',
        },
      },
    });

    await actions.postPaymentToGL('pay-123');

    expect(mockJournalService.postJournalEntry).not.toHaveBeenCalled();
    expect(mockPrisma.payment.update).not.toHaveBeenCalled();
  });

  it('MUST DEBIT Cash in Bank and CREDIT Accounts Receivable', async () => {
    mockPrisma.payment.findUnique.mockResolvedValue({
      id: 'pay-123',
      invoiceId: 'inv-123',
      amount: new Decimal(1050),
      paidOn: new Date(),
      postingStatus: 'PENDING',
      invoice: {
        Lease: {
          property: {
            organizationId: 'org-1',
          },
          propertyId: 'prop-1',
          tenantId: 'tenant-1',
        },
      },
    });

    mockJournalService.postJournalEntry.mockResolvedValue({
      journalEntryId: 'je-2',
    });

    await actions.postPaymentToGL('pay-123');

    expect(mockJournalService.postJournalEntry).toHaveBeenCalledOnce();
    const journalInput = mockJournalService.postJournalEntry.mock.calls[0][0];

    // Verify GAAP rules for cash collection.
    expect(journalInput.lines).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          accountCode: '1000',
          debit: new Decimal(1050),
          credit: new Decimal(0),
        }),
        expect.objectContaining({
          accountCode: '1100',
          debit: new Decimal(0),
          credit: new Decimal(1050),
        }),
      ]),
    );

    // Verify status update.
    expect(mockPrisma.payment.update).toHaveBeenCalledWith({
      where: { id: 'pay-123' },
      data: { postingStatus: 'POSTED', journalEntryId: 'je-2' },
    });
  });
});
