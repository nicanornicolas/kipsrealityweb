"use client";
import { useState, useEffect, useCallback } from "react";
import { usePlaidLink, PlaidLinkOnSuccess, PlaidLinkOnExit } from "react-plaid-link";
import { api } from '@/lib/api-client';
import { toast } from 'sonner';

interface ConnectBankProps {
    onConnected: () => void;
}

export default function ConnectBank({ onConnected }: ConnectBankProps) {
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    // 1. Fetch Link Token on Mount
    useEffect(() => {
        async function createLinkToken() {
            try {
                const res = await api.post<{ linkToken?: string; error?: string }>(
                  '/api/finance/plaid/create-link-token',
                );
                const data = res.data;
                if (res.error) {
                  throw new Error(data?.error || res.error || 'Failed to create Plaid link token');
                }

                if (data?.linkToken) {
                    setToken(data.linkToken);
                } else {
                    console.error("Failed to get link token", data);
                }
            } catch (e) {
                toast.error(e instanceof Error ? e.message : 'Error creating link token');
                console.error("Error creating link token", e);
            }
        }
        createLinkToken();
    }, []);

    // 2. Handle Success (User selected bank)
    const onSuccess = useCallback<PlaidLinkOnSuccess>(async (publicToken) => {
        setLoading(true);
        try {
            // metadata contains account_id
            // We typically want the first account for simplicity in this MVP, 
            // or we could let the user select if we support multiple. 
            // Plaid Link usually lets user select one account if we configure it so.
            // metadata.accounts is an array.
            const res = await api.post<{ success?: boolean; error?: string }>(
              '/api/finance/plaid/exchange-token',
              { publicToken },
            );

            if (res.error || res.data?.success === false) {
              throw new Error(res.data?.error || res.error || 'Failed to link bank account');
            }

            onConnected(); // Refresh UI to show "Bank Connected"
            toast.success('Bank account connected successfully');
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Exchange token failed');
            console.error("Exchange token failed", error);
        } finally {
            setLoading(false);
        }
    }, [onConnected]);

    const onExit = useCallback<PlaidLinkOnExit>((error) => {
        if (error) {
            console.error("Plaid Link exited with error", error);
        }
    }, []);

    const config: Parameters<typeof usePlaidLink>[0] = {
        token,
        onSuccess,
        onExit,
    };

    const { open, ready } = usePlaidLink(config);

    return (
        <div className="mt-4">
            <button
                onClick={() => open()}
                disabled={!ready || loading}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded shadow-md transition-colors"
            >
                {loading ? "Connecting..." : "Connect Bank Account (ACH)"}
            </button>
        </div>
    );
}
