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
    const result = await journalService.getInvoices(user.organizationId, {
      propertyId: searchParams.get('propertyId') || undefined,
      status: (searchParams.get('status') as any) || undefined,
      search: searchParams.get('search') || undefined,
      page: Number(searchParams.get('page') || 1),
      limit: Number(searchParams.get('limit') || 10),
    });

    return NextResponse.json({ success: true, ...result });
  } catch (error) {
    console.error('[FINANCE_INVOICES_API]', error);
    return NextResponse.json(
      { error: 'Failed to fetch invoice list' },
      { status: 500 },
    );
  }
}