import { NextResponse } from 'next/server';
import { getCurrentUser, prisma } from '@rentflow/iam';

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
    const page = Math.max(1, Number(searchParams.get('page')) || 1);
    const limit = Math.max(1, Number(searchParams.get('limit')) || 20);

    const unmatched = await prisma.bankTransaction.findMany({
      where: {
        organizationId: user.organizationId,
        status: 'UNMATCHED',
      },
      orderBy: { date: 'desc' },
      skip: (page - 1) * limit,
      take: limit,
    });

    return NextResponse.json({ success: true, data: unmatched, page, limit });
  } catch (error: unknown) {
    console.error('[RECONCILIATION_UNMATCHED_API]', error);
    const message =
      error instanceof Error ? error.message : 'Failed to fetch unmatched transactions';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
