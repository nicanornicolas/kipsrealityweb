import { NextResponse } from "next/server";
import { prisma } from "@rentflow/iam";
import {
  processMpesaWebhook,
  processPaystackWebhook,
  processStripeWebhook,
} from "../../../../lib/webhooks/processors";

const RETRY_DELAYS_SECONDS = [60, 300, 900, 3600, 14400];

function getNextRetryAt(retryCount: number) {
  const delaySeconds =
    RETRY_DELAYS_SECONDS[Math.min(retryCount, RETRY_DELAYS_SECONDS.length - 1)];
  return new Date(Date.now() + delaySeconds * 1000);
}

export async function POST(req: Request) {
  const processorKey = process.env.INTERNAL_WEBHOOK_PROCESSOR_KEY;
  if (processorKey) {
    const provided = req.headers.get("x-internal-key");
    if (provided !== processorKey) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  const now = new Date();
  const events = await prisma.webhookEvent.findMany({
    where: {
      OR: [
        { status: "PENDING" },
        {
          status: "FAILED",
          nextRetryAt: { lte: now },
        },
      ],
    },
    orderBy: { createdAt: "asc" },
    take: 50,
  });

  const results: Array<{ id: string; status: string; error?: string }> = [];

  for (const event of events) {
    const claimed = await prisma.webhookEvent.updateMany({
      where: { id: event.id, status: event.status },
      data: { status: "PROCESSING" },
    });

    if (claimed.count === 0) {
      continue;
    }

    try {
      console.log(
        JSON.stringify({
          webhookEventId: event.id,
          gateway: event.gateway,
          eventType: event.eventType,
          status: "PROCESSING",
          attempt: event.retryCount + 1,
        })
      );

      switch (event.gateway) {
        case "MPESA":
          await processMpesaWebhook(event.payload);
          break;
        case "PAYSTACK":
          await processPaystackWebhook(event.payload);
          break;
        case "STRIPE":
          await processStripeWebhook(event.payload);
          break;
        default:
          throw new Error(`Unsupported gateway: ${event.gateway}`);
      }

      await prisma.webhookEvent.update({
        where: { id: event.id },
        data: {
          status: "PROCESSED",
          processingError: null,
          nextRetryAt: null,
        },
      });

      console.log(
        JSON.stringify({
          webhookEventId: event.id,
          gateway: event.gateway,
          eventType: event.eventType,
          status: "PROCESSED",
          attempt: event.retryCount + 1,
        })
      );

      results.push({ id: event.id, status: "PROCESSED" });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      const nextRetryAt = getNextRetryAt(event.retryCount);

      await prisma.webhookEvent.update({
        where: { id: event.id },
        data: {
          status: "FAILED",
          processingError: message,
          retryCount: event.retryCount + 1,
          nextRetryAt,
        },
      });

      console.log(
        JSON.stringify({
          webhookEventId: event.id,
          gateway: event.gateway,
          eventType: event.eventType,
          status: "FAILED",
          attempt: event.retryCount + 1,
          error: message,
          nextRetryAt: nextRetryAt.toISOString(),
        })
      );

      results.push({ id: event.id, status: "FAILED", error: message });
    }
  }

  return NextResponse.json({
    processed: results.length,
    results,
  });
}

export async function GET() {
  const now = new Date();
  const grouped = await prisma.webhookEvent.groupBy({
    by: ["status"],
    _count: { _all: true },
  });

  const counts = grouped.reduce(
    (acc, row) => {
      acc[row.status] = row._count._all;
      return acc;
    },
    {} as Record<string, number>
  );

  const retryDue = await prisma.webhookEvent.count({
    where: {
      status: "FAILED",
      nextRetryAt: { lte: now },
    },
  });

  const oldestPending = await prisma.webhookEvent.findFirst({
    where: { status: "PENDING" },
    orderBy: { createdAt: "asc" },
    select: { createdAt: true },
  });

  return NextResponse.json({
    pending: counts.PENDING ?? 0,
    processing: counts.PROCESSING ?? 0,
    failed: counts.FAILED ?? 0,
    processed: counts.PROCESSED ?? 0,
    retryDue,
    oldestPendingAt: oldestPending?.createdAt ?? null,
    timestamp: now.toISOString(),
  });
}

