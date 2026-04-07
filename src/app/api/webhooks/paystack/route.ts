import { NextResponse } from "next/server";
import { prisma } from "@rentflow/iam";
import crypto from "crypto";

export async function POST(req: Request) {
  const secret = process.env.PAYSTACK_SECRET_KEY!;
  const signature = req.headers.get("x-paystack-signature");

  if (!secret) {
    return NextResponse.json({ error: "Server Misconfigured" }, { status: 500 });
  }

  try {
    const body = await req.json();
    const hash = crypto
      .createHmac("sha512", secret)
      .update(JSON.stringify(body))
      .digest("hex");

    if (hash !== signature) {
      return NextResponse.json({ error: "Invalid Signature" }, { status: 401 });
    }

    await prisma.webhookEvent.create({
      data: {
        gateway: "PAYSTACK",
        eventType: body.event ?? null,
        payload: body,
        status: "PENDING",
      },
    });

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Paystack Webhook Error:", error);
    return NextResponse.json({ error: "Webhook Failed" }, { status: 500 });
  }
}

