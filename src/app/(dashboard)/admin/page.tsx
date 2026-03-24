"use client";

import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type WebhookQueueMetrics = {
  pending: number;
  processing: number;
  failed: number;
  processed: number;
  retryDue: number;
  oldestPendingAt: string | null;
  timestamp: string;
};

export default function AdminDashboardPage() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "home";

  const { data, isLoading, isError } = useQuery<WebhookQueueMetrics>({
    queryKey: ["webhook-queue-metrics"],
    queryFn: async () => {
      const response = await fetch("/api/internal/process-webhooks");
      if (!response.ok) {
        throw new Error("Failed to load webhook metrics");
      }
      return response.json();
    },
    refetchInterval: 15000,
  });

  const oldestPending = data?.oldestPendingAt
    ? new Date(data.oldestPendingAt).toLocaleString()
    : "None";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Admin Dashboard</h1>
        <p className="text-sm text-slate-500">Current tab: {tab}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Webhook Resilience Queue</CardTitle>
          <CardDescription>
            Monitor backlog and retry health for payment webhooks.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <p className="text-sm text-slate-500">Loading webhook metrics...</p>
          ) : isError ? (
            <p className="text-sm text-red-600">
              Failed to load webhook metrics.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-slate-200 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Pending
                </p>
                <p className="text-2xl font-semibold text-slate-900">
                  {data?.pending ?? 0}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Oldest: {oldestPending}
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Processing
                </p>
                <p className="text-2xl font-semibold text-slate-900">
                  {data?.processing ?? 0}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Retry Due: {data?.retryDue ?? 0}
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Failed
                </p>
                <p className="text-2xl font-semibold text-slate-900">
                  {data?.failed ?? 0}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Processed Total: {data?.processed ?? 0}
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
