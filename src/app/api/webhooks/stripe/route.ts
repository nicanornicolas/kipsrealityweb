import { NextResponse } from 'next/server';
import { SubscriptionService } from '@rentflow/payments';

// Force Next.js to use the Node runtime so Stripe's crypto signature verification works
export const dynamic = 'force-dynamic';

const subscriptionService = new SubscriptionService();

export async function POST(req: Request) {
  const signature = req.headers.get('stripe-signature');
  if (!signature) {
    return NextResponse.json({ error: 'Missing stripe-signature header' }, { status: 400 });
  }

  try {
    const payload = await req.text(); // Raw body required for Stripe
    await subscriptionService.processWebhook(payload, signature);
    return NextResponse.json({ received: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('[Stripe Webhook Error]', message);
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
