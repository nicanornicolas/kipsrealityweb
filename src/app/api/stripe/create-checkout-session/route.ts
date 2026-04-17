import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from "@rentflow/iam";
import { SubscriptionService } from '@rentflow/payments';

const subscriptionService = new SubscriptionService();

export async function POST(req: NextRequest) {
  try {
    const user = await getCurrentUser(req);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const rawPlan = typeof body?.plan === 'string' ? body.plan : '';
    const planName = rawPlan.trim().toUpperCase();

    if (!planName || !['BUSINESS', 'ENTERPRISE'].includes(planName)) {
      return NextResponse.json(
        { error: 'Invalid plan. Must be BUSINESS or ENTERPRISE.' },
        { status: 400 }
      );
    }

    const url = await subscriptionService.createCheckoutSession(
      user.id,
      user.email,
      planName
    );

    return NextResponse.json({ url });
  } catch (error: unknown) {
    console.error('[Stripe Checkout Error]', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to create checkout session', details: message },
      { status: 500 }
    );
  }
}
