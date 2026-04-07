import { NextResponse } from "next/server";
import { prisma } from "@rentflow/iam";

/**
 * M-Pesa Daraja API STK Push Callback Handler
 * Store and ACK pattern: persist payload quickly and process asynchronously.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    await prisma.webhookEvent.create({
      data: {
        gateway: "MPESA",
        eventType: "stkCallback",
        payload: body,
        status: "PENDING",
      },
    });

    return NextResponse.json({
      ResultCode: 0,
      ResultDesc: "Accepted",
    });
  } catch (error) {
    console.error("M-Pesa Webhook Error:", error);
    return NextResponse.json(
      { error: "Webhook ingestion failed" },
      { status: 500 }
    );
  }
}

