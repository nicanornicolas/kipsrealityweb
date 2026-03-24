import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const startedAt = Date.now();
  const authHeader = req.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    console.log(
      JSON.stringify({
        route: "/api/cron/process-webhooks",
        status: "UNAUTHORIZED",
        durationMs: Date.now() - startedAt,
      })
    );
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL;
  const internalKey = process.env.INTERNAL_WEBHOOK_PROCESSOR_KEY;

  if (!appUrl || !internalKey) {
    console.log(
      JSON.stringify({
        route: "/api/cron/process-webhooks",
        status: "MISCONFIGURED",
        durationMs: Date.now() - startedAt,
      })
    );
    return NextResponse.json(
      { error: "Server Misconfigured" },
      { status: 500 }
    );
  }

  const response = await fetch(`${appUrl}/api/internal/process-webhooks`, {
    method: "POST",
    headers: {
      "x-internal-key": internalKey,
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();

  console.log(
    JSON.stringify({
      route: "/api/cron/process-webhooks",
      status: response.ok ? "OK" : "ERROR",
      upstreamStatus: response.status,
      processed: result?.processed ?? null,
      durationMs: Date.now() - startedAt,
    })
  );

  return NextResponse.json(
    {
      ok: response.ok,
      processed: result?.processed ?? null,
      results: result?.results ?? null,
    },
    { status: response.status }
  );
}
