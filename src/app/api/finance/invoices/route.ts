import { NextResponse } from 'next/server';
import { getCurrentUser, prisma } from '@rentflow/iam';
import { InvoiceStatus, JournalService } from '@rentflow/finance';

const journalService = new JournalService(prisma);
const validStatuses: readonly InvoiceStatus[] = [
  'DRAFT',
  'PENDING',
  'PAID',
  'OVERDUE',
  'CANCELLED',
];

function isInvoiceStatus(value: string): value is InvoiceStatus {
  return validStatuses.includes(value as InvoiceStatus);
}

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
    const statusParam = searchParams.get('status');
    if (statusParam && !isInvoiceStatus(statusParam)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    }

    const pageRaw = Number(searchParams.get('page'));
    const limitRaw = Number(searchParams.get('limit'));
    const page = Number.isFinite(pageRaw) && pageRaw > 0 ? pageRaw : 1;
    const limit = Number.isFinite(limitRaw) && limitRaw > 0 ? limitRaw : 10;

    const result = await journalService.getInvoices(user.organizationId, {
      propertyId: searchParams.get('propertyId') || undefined,
      status: statusParam || undefined,
      search: searchParams.get('search') || undefined,
      page,
      limit,
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
