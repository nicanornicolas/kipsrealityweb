import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import Stripe from "stripe";

let stripeClient: Stripe | null = null;

function getStripeClient() {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey) {
    throw new Error("Stripe not configured: STRIPE_SECRET_KEY is missing");
  }

  if (!stripeClient) {
    stripeClient = new Stripe(stripeSecretKey, {
      apiVersion: "2026-01-28.clover",
    });
  }

  return stripeClient;
}

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig || !endpointSecret) {
    return NextResponse.json({ error: "Missing Signature or Secret" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    const stripe = getStripeClient();
    const text = await req.text();
    event = stripe.webhooks.constructEvent(text, sig, endpointSecret);
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    console.error(`Webhook Signature Error: ${errorMessage}`);
    return NextResponse.json({ error: `Webhook Error: ${errorMessage}` }, { status: 400 });
  }

  await prisma.webhookEvent.create({
    data: {
      gateway: "STRIPE",
      eventType: event.type,
      payload: event,
      status: "PENDING",
    },
  });

  return NextResponse.json({ received: true });
}
