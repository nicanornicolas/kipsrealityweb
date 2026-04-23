import { NextResponse } from 'next/server';
import { getCurrentUser, prisma } from '@rentflow/iam';

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser(req);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const allowedRoles = ['PROPERTY_MANAGER', 'SYSTEM_ADMIN'];
    if (!allowedRoles.includes(user.role)) {
      return NextResponse.json(
        { error: 'Forbidden - Requires PROPERTY_MANAGER or SYSTEM_ADMIN' },
        { status: 403 },
      );
    }

    if (!user.organizationId) {
      return NextResponse.json({ error: 'Organization required' }, { status: 403 });
    }

    const { bankTransactionId, journalEntryId } = await req.json();
    if (!bankTransactionId || !journalEntryId) {
      return NextResponse.json(
        { error: 'bankTransactionId and journalEntryId are required' },
        { status: 400 },
      );
    }

    const journalEntry = await prisma.journalEntry.findFirst({
      where: {
        id: journalEntryId,
        entity: { organizationId: user.organizationId },
      },
      select: { id: true },
    });

    if (!journalEntry) {
      return NextResponse.json({ error: 'Journal entry not found' }, { status: 404 });
    }

    const updated = await prisma.bankTransaction.updateMany({
      where: {
        id: bankTransactionId,
        organizationId: user.organizationId,
      },
      data: {
        matchedJournalId: journalEntryId,
        status: 'MATCHED',
      },
    });

    if (updated.count === 0) {
      return NextResponse.json({ error: 'Bank transaction not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error('[RECONCILIATION_MATCH_API]', error);
    const message = error instanceof Error ? error.message : 'Failed to match transaction';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
