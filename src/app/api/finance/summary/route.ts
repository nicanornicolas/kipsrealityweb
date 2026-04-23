import { NextResponse } from 'next/server';
import { getCurrentUser, prisma } from '@rentflow/iam';
import { JournalService } from '@rentflow/finance';

const journalService = new JournalService(prisma);

export async function GET(req: Request) {
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

    const { searchParams } = new URL(req.url);
    const propertyId = searchParams.get('propertyId') || undefined;

    const summary = await journalService.getFinanceSummary(
      user.organizationId,
      propertyId,
    );

    return NextResponse.json({
      success: true,
      data: summary,
    });
  } catch (error: unknown) {
    console.error('[FINANCE_SUMMARY_API]', error);
    const message =
      error instanceof Error ? error.message : 'Failed to fetch financial summary';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

