import { NextResponse } from 'next/server';
import { getCurrentUser, prisma } from '@rentflow/iam';
import { financeActions } from '@rentflow/finance';

function isValidationError(error: unknown): error is Error {
  if (!(error instanceof Error)) {
    return false;
  }

  const message = error.message.toLowerCase();
  return (
    message.includes('not found') ||
    message.includes('no organization') ||
    message.includes('no property') ||
    message.includes('no tenant') ||
    message.includes('organization required')
  );
}

export async function POST(req: Request, { params }: { params: { id: string } }) {
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

    const invoice = await prisma.invoice.findUnique({
      where: { id: params.id },
      include: {
        Lease: {
          include: {
            property: true,
          },
        },
      },
    });

    if (!invoice) {
      return NextResponse.json({ error: 'Invoice not found' }, { status: 404 });
    }

    const invoiceOrgId = invoice.organizationId ?? invoice.Lease?.property?.organizationId;
    if (!invoiceOrgId || invoiceOrgId !== user.organizationId) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    await financeActions.postInvoiceToGL(params.id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[FINANCE_INVOICE_POST_API]', error);
    if (isValidationError(error)) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}