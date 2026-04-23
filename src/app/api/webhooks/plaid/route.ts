import { NextResponse } from 'next/server';
import { prisma } from '@rentflow/iam';
import { webhookQueue } from '@rentflow/utilities';
import { verifyPlaidWebhookSignature } from '@rentflow/payments';

export async function POST(req: Request) {
  try {
    const signature = req.headers.get('plaid-verification');
    const timestamp = req.headers.get('plaid-verification-timestamp');
    if (!signature || !timestamp) {
      return NextResponse.json({ error: 'Missing verification headers' }, { status: 400 });
    }

    const rawBody = await req.text();
    const isValid = await verifyPlaidWebhookSignature(rawBody, signature, timestamp);
    if (!isValid) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    let body: Record<string, unknown>;
    try {
      body = JSON.parse(rawBody) as Record<string, unknown>;
    } catch {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }
    const { webhook_type, webhook_code, item_id } = body as {
      webhook_type?: string;
      webhook_code?: string;
      item_id?: string;
    };

    const event = await prisma.webhookEvent.create({
      data: {
        gateway: 'PLAID',
        eventType: `${webhook_type ?? 'UNKNOWN'}.${webhook_code ?? 'UNKNOWN'}`,
        payload: body,
        status: 'PENDING',
      },
    });

    if (
      webhook_type === 'TRANSACTIONS' &&
      webhook_code === 'SYNC_UPDATES_AVAILABLE' &&
      item_id
    ) {
      await webhookQueue.add('plaid-webhook-sync', {
        webhookEventId: event.id,
        plaidItemId: item_id,
      });
    }

    return NextResponse.json({ received: true });
  } catch (error: unknown) {
    console.error('[PLAID_WEBHOOK_ERROR]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}