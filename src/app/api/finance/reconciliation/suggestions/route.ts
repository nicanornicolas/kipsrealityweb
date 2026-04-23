import { NextResponse } from 'next/server';
import { getCurrentUser } from '@rentflow/iam';
import { ReconciliationService } from '@rentflow/finance';

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
    const txId = searchParams.get('bankTransactionId');
    if (!txId) {
      return NextResponse.json({ error: 'Missing bankTransactionId' }, { status: 400 });
    }

    const service = new ReconciliationService();
    const suggestions = await service.getSuggestedMatches(txId, user.organizationId);

    return NextResponse.json({ success: true, data: suggestions });
  } catch (error: unknown) {
    console.error('[RECONCILIATION_SUGGESTIONS_API]', error);
    const message =
      error instanceof Error ? error.message : 'Failed to fetch reconciliation suggestions';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
