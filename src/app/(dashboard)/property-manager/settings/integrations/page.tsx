"use client";

import { useCallback, useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, PlugZap, RefreshCw, ShieldCheck } from "lucide-react";
import { api } from "@/lib/api-client";
import ConnectBank from "@/components/payment/USA/ConnectBank";

type PlaidStatus = "checking" | "connected" | "not-connected";

export default function IntegrationsPage() {
  const [plaidStatus, setPlaidStatus] = useState<PlaidStatus>("checking");
  const [isConnecting, setIsConnecting] = useState(false);

  const checkPlaidAvailability = useCallback(async () => {
    setPlaidStatus("checking");
    const response = await api.post<{ linkToken?: string; error?: string }>(
      "/api/finance/plaid/create-link-token",
    );

    if (response.error || !response.data?.linkToken) {
      setPlaidStatus("not-connected");
      return;
    }

    setPlaidStatus("connected");
  }, []);

  useEffect(() => {
    void checkPlaidAvailability();
  }, [checkPlaidAvailability]);

  return (
    <div className="container mx-auto max-w-5xl space-y-6 py-10">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Integrations</h1>
        <p className="mt-1 text-slate-600">
          Manage financial integrations for reconciliation and payment operations.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PlugZap className="h-5 w-5 text-blue-600" />
            Plaid Bank Connectivity
          </CardTitle>
          <CardDescription>
            Link your bank account to unlock automated reconciliation suggestions.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-slate-600" />
              <span className="text-sm font-medium text-slate-800">Plaid Status</span>
            </div>
            {plaidStatus === "checking" ? (
              <Badge variant="outline">Checking...</Badge>
            ) : plaidStatus === "connected" ? (
              <Badge className="bg-emerald-100 text-emerald-700">Connected</Badge>
            ) : (
              <Badge variant="outline">Not Connected</Badge>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {!isConnecting ? (
              <Button onClick={() => setIsConnecting(true)}>
                Connect Plaid Account
              </Button>
            ) : (
              <ConnectBank
                onConnected={() => {
                  setIsConnecting(false);
                  setPlaidStatus("connected");
                }}
              />
            )}

            <Button variant="outline" onClick={() => void checkPlaidAvailability()}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh Status
            </Button>
          </div>

          <div className="rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm text-blue-900">
            <div className="flex items-start gap-2">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" />
              <p>
                Plaid credentials are exchanged server-side and persisted securely. This integration powers
                unmatched bank line ingestion for the finance reconciliation workspace.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
