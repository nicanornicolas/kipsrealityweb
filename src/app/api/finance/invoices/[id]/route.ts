import { NextResponse } from 'next/server';
import { getCurrentUser, prisma } from '@rentflow/iam';
import { JournalService } from '@rentflow/finance';

const journalService = new JournalService(prisma);

export async function GET(req: Request, { params }: { params: { id: string } }) {
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

    const detail = await journalService.getInvoiceDetail(user.organizationId, params.id);

    return NextResponse.json({ success: true, data: detail });
  } catch (error) {
    console.error('[FINANCE_INVOICE_DETAIL_API]', error);
    const message = error instanceof Error ? error.message : 'Failed to fetch invoice detail';
    const status = message === 'Invoice not found' ? 404 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}