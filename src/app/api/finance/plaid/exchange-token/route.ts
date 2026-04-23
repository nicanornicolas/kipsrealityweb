import { NextResponse } from 'next/server';
import { getCurrentUser, requireRole } from '@rentflow/iam';
import { PlaidB2BService } from '@rentflow/payments';
import { webhookQueue } from '@rentflow/utilities';

const plaidService = new PlaidB2BService();

export async function POST(req: Request) {
  const authError = await requireRole(['PROPERTY_MANAGER', 'SYSTEM_ADMIN'], req);
  if (authError) {
    return authError;
  }

  const user = await getCurrentUser(req);
  if (!user?.organizationId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { publicToken } = await req.json();
    if (!publicToken) {
      return NextResponse.json({ error: 'Missing publicToken' }, { status: 400 });
    }

    const connectedAccount = await plaidService.exchangeAndSaveAccount(
      publicToken,
      user.organizationId,
    );

    await webhookQueue.add('plaid-initial-sync', {
      organizationId: user.organizationId,
      accountId: connectedAccount.id,
    });

    return NextResponse.json({
      success: true,
      institution: connectedAccount.institutionName,
      mask: connectedAccount.mask,
    });
  } catch (error: unknown) {
    console.error('[PLAID_EXCHANGE_ERROR]', error);
    const message = error instanceof Error ? error.message : 'Failed to exchange Plaid token';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
