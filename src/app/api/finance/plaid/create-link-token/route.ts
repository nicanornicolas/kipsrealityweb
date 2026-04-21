import { NextResponse } from 'next/server';
import { requireRole, getCurrentUser } from '@rentflow/iam';
import { PlaidB2BService } from '@rentflow/payments';

const plaidService = new PlaidB2BService();

export async function POST(req: Request) {
  const authError = await requireRole(['PROPERTY_MANAGER', 'SYSTEM_ADMIN'], req);
  if (authError) {
    return authError;
  }

  const user = await getCurrentUser(req);
  if (!user?.organizationId || !user.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const token = await plaidService.createBusinessLinkToken(user.organizationId, user.id);
    return NextResponse.json({ linkToken: token });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to create Plaid link token';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}