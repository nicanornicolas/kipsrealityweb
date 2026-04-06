import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import Stripe from 'stripe';
import { webhookQueue } from '@rentflow/utilities';

// Force Next.js to use the Node runtime so Stripe's crypto signature verification works
export const dynamic = 'force-dynamic';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
  throw new Error('Stripe not configured: STRIPE_SECRET_KEY is missing');
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2026-01-28.clover',
});

export async function POST(req: Request) {
  const signature = req.headers.get('stripe-signature');
  if (!signature) {
    return NextResponse.json({ error: 'Missing stripe-signature header' }, { status: 400 });
  }

  try {
    const payload = await req.text(); // Raw body required for Stripe
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
    if (!endpointSecret) {
      throw new Error('Stripe webhook secret not configured');
    }

    const event = stripe.webhooks.constructEvent(payload, signature, endpointSecret);

    const webhookEvent = await prisma.webhookEvent.create({
      data: {
        gateway: 'STRIPE',
        eventType: event.type,
        payload: JSON.parse(JSON.stringify(event)),
        status: 'PENDING',
      },
    });

    await webhookQueue.add(event.type, {
      webhookEventId: webhookEvent.id,
      stripeEventId: event.id,
    });

    return NextResponse.json({ received: true, id: webhookEvent.id });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('[Stripe Webhook Error]', message);
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
