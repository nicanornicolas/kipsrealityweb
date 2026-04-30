'use client';

import { useEffect, useMemo, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { formatCurrency } from '@/lib/format-currency';
import { api } from '@/lib/api-client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, CircleSlash2, RefreshCw } from 'lucide-react';

interface BankTransactionItem {
  id: string;
  amount: number;
  description: string | null;
  date: string;
  status: string;
}

interface JournalLineItem {
  id: string;
  debit: number | string;
  credit: number | string;
  account?: {
    id: string;
    name: string;
    code: string;
  } | null;
}

interface SuggestedJournalEntry {
  id: string;
  transactionDate: string;
  memo: string | null;
  lines: JournalLineItem[];
}

const unmatchedQueryKey = ['reconciliation-unmatched'] as const;
const suggestionsQueryKey = (bankTransactionId: string | null) =>
  ['reconciliation-suggestions', bankTransactionId || 'none'] as const;

async function fetchUnmatched(): Promise<BankTransactionItem[]> {
  const res = await api.get<{ success: boolean; data: BankTransactionItem[]; error?: string }>(
    '/api/finance/reconciliation/unmatched',
  );
  const json = res.data;
  if (res.error || !json?.success) {
    throw new Error(json?.error || res.error || 'Failed to fetch unmatched transactions');
  }
  return json.data || [];
}

async function fetchSuggestions(bankTransactionId: string): Promise<SuggestedJournalEntry[]> {
  const res = await api.get<{ success: boolean; data: SuggestedJournalEntry[]; error?: string }>(
    `/api/finance/reconciliation/suggestions?bankTransactionId=${encodeURIComponent(bankTransactionId)}`,
  );
  const json = res.data;
  if (res.error || !json?.success) {
    throw new Error(json?.error || res.error || 'Failed to fetch suggestions');
  }
  return json.data || [];
}

export function ReconciliationWorkspace() {
  const queryClient = useQueryClient();
  const [selectedBankTransactionId, setSelectedBankTransactionId] = useState<string | null>(null);

  const {
    data: unmatched = [],
    isLoading: isLoadingUnmatched,
    isFetching: isRefreshingUnmatched,
  } = useQuery({
    queryKey: unmatchedQueryKey,
    queryFn: fetchUnmatched,
    staleTime: 15_000,
  });

  const activeBankTransaction = useMemo(
    () => unmatched.find((item) => item.id === selectedBankTransactionId) || null,
    [selectedBankTransactionId, unmatched],
  );

  const { data: suggestions = [], isLoading: isLoadingSuggestions } = useQuery({
    queryKey: suggestionsQueryKey(selectedBankTransactionId),
    queryFn: () => fetchSuggestions(selectedBankTransactionId as string),
    enabled: Boolean(selectedBankTransactionId),
    placeholderData: (previous) => previous,
    staleTime: 10_000,
  });

  useEffect(() => {
    if (!selectedBankTransactionId) return;
    const stillPresent = unmatched.some((item) => item.id === selectedBankTransactionId);
    if (!stillPresent) {
      setSelectedBankTransactionId(null);
    }
  }, [selectedBankTransactionId, unmatched]);

  const matchMutation = useMutation({
    mutationFn: async ({ bankTransactionId, journalEntryId }: { bankTransactionId: string; journalEntryId: string }) => {
      const res = await api.post<{ success: boolean; error?: string }>(
        '/api/finance/reconciliation/match',
        { bankTransactionId, journalEntryId },
      );
      const json = res.data;
      if (res.error || !json?.success) {
        throw new Error(json?.error || res.error || 'Failed to match transaction');
      }
      return json;
    },
    onMutate: async ({ bankTransactionId }) => {
      await queryClient.cancelQueries({ queryKey: unmatchedQueryKey, exact: true });
      const previousUnmatched = queryClient.getQueryData<BankTransactionItem[]>(unmatchedQueryKey) || [];
      queryClient.setQueryData<BankTransactionItem[]>(
        unmatchedQueryKey,
        previousUnmatched.filter((item) => item.id !== bankTransactionId),
      );
      return { previousUnmatched };
    },
    onError: (error: unknown, _variables, context) => {
      if (context?.previousUnmatched) {
        queryClient.setQueryData(unmatchedQueryKey, context.previousUnmatched);
      }
      toast.error(error instanceof Error ? error.message : 'Failed to match transaction');
    },
    onSuccess: async () => {
      toast.success('Transaction matched successfully');
      setSelectedBankTransactionId(null);
      await queryClient.invalidateQueries({ queryKey: unmatchedQueryKey, exact: true });
      await queryClient.invalidateQueries({ queryKey: suggestionsQueryKey(selectedBankTransactionId), exact: true });
    },
  });

  const ignoreMutation = useMutation({
    mutationFn: async (bankTransactionId: string) => {
      const res = await api.post<{ success: boolean; error?: string }>(
        '/api/finance/reconciliation/ignore',
        { bankTransactionId },
      );
      const json = res.data;
      if (res.error || !json?.success) {
        throw new Error(json?.error || res.error || 'Failed to ignore transaction');
      }
      return json;
    },
    onMutate: async (bankTransactionId: string) => {
      await queryClient.cancelQueries({ queryKey: unmatchedQueryKey, exact: true });
      const previousUnmatched = queryClient.getQueryData<BankTransactionItem[]>(unmatchedQueryKey) || [];
      queryClient.setQueryData<BankTransactionItem[]>(
        unmatchedQueryKey,
        previousUnmatched.filter((item) => item.id !== bankTransactionId),
      );
      return { previousUnmatched };
    },
    onError: (error: unknown, _variables, context) => {
      if (context?.previousUnmatched) {
        queryClient.setQueryData(unmatchedQueryKey, context.previousUnmatched);
      }
      toast.error(error instanceof Error ? error.message : 'Failed to ignore transaction');
    },
    onSuccess: async () => {
      toast.success('Transaction marked as ignored');
      setSelectedBankTransactionId(null);
      await queryClient.invalidateQueries({ queryKey: unmatchedQueryKey, exact: true });
      await queryClient.invalidateQueries({ queryKey: suggestionsQueryKey(selectedBankTransactionId), exact: true });
    },
  });

  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-5">
      <Card className="xl:col-span-2 border-slate-200 shadow-sm">
        <CardHeader>
          <div className="flex items-center justify-between gap-3">
            <div>
              <CardTitle className="text-base font-semibold text-slate-900">Unmatched Bank Transactions</CardTitle>
              <p className="mt-1 text-sm text-slate-500">
                Select a transaction to review matching journal entries.
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => queryClient.invalidateQueries({ queryKey: unmatchedQueryKey, exact: true })}
              disabled={isLoadingUnmatched || isRefreshingUnmatched}
              className="gap-2"
            >
              <RefreshCw className={`h-4 w-4 ${isRefreshingUnmatched ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {isLoadingUnmatched ? (
            <p className="text-sm text-slate-500">Loading transactions...</p>
          ) : unmatched.length === 0 ? (
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
              All bank transactions are reconciled.
            </div>
          ) : (
            <div className="space-y-2">
              {unmatched.map((tx) => {
                const isActive = tx.id === selectedBankTransactionId;
                return (
                  <button
                    key={tx.id}
                    type="button"
                    onClick={() => setSelectedBankTransactionId(tx.id)}
                    className={`w-full rounded-lg border p-4 text-left transition-colors ${
                      isActive
                        ? 'border-blue-300 bg-blue-50'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-slate-900">
                          {tx.description || 'Bank transaction'}
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          {new Date(tx.date).toLocaleDateString()}
                        </p>
                      </div>
                      <span className="text-sm font-semibold text-slate-800">
                        {formatCurrency(Number(tx.amount), 'USD')}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="xl:col-span-3 border-slate-200 shadow-sm">
        <CardHeader>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <CardTitle className="text-base font-semibold text-slate-900">Suggested Journal Matches</CardTitle>
              <p className="mt-1 text-sm text-slate-500">
                Amount and posting date proximity suggestions from locked journal entries.
              </p>
            </div>
            {activeBankTransaction && (
              <Badge variant="outline" className="border-blue-200 text-blue-700">
                {formatCurrency(Number(activeBankTransaction.amount), 'USD')} selected
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {!selectedBankTransactionId ? (
            <div className="rounded-lg border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500">
              Choose a bank transaction from the left panel to view suggestions.
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
                <span className="font-medium">Selected:</span>
                <span>{activeBankTransaction?.description || 'Bank transaction'}</span>
                <span className="text-slate-400">•</span>
                <span>{activeBankTransaction ? new Date(activeBankTransaction.date).toLocaleDateString() : ''}</span>
                <span className="text-slate-400">•</span>
                <span className="font-semibold text-slate-900">
                  {activeBankTransaction ? formatCurrency(Number(activeBankTransaction.amount), 'USD') : ''}
                </span>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="ml-auto gap-2"
                  disabled={ignoreMutation.isPending}
                  onClick={() => ignoreMutation.mutate(selectedBankTransactionId)}
                >
                  <CircleSlash2 className="h-4 w-4" />
                  Ignore
                </Button>
              </div>

              {isLoadingSuggestions ? (
                <p className="text-sm text-slate-500">Loading suggestions...</p>
              ) : suggestions.length === 0 ? (
                <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-700">
                  No suggestions found for this transaction. You can ignore it for now or post a matching entry in the journal.
                </div>
              ) : (
                <div className="space-y-3">
                  {suggestions.map((entry) => (
                    <div key={entry.id} className="rounded-lg border border-slate-200 p-4">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {entry.memo || 'Journal entry'}
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            {new Date(entry.transactionDate).toLocaleDateString()} • {entry.id}
                          </p>
                        </div>
                        <Button
                          type="button"
                          size="sm"
                          className="gap-2 bg-emerald-600 hover:bg-emerald-700"
                          disabled={matchMutation.isPending}
                          onClick={() =>
                            matchMutation.mutate({
                              bankTransactionId: selectedBankTransactionId,
                              journalEntryId: entry.id,
                            })
                          }
                        >
                          <CheckCircle2 className="h-4 w-4" />
                          Match
                        </Button>
                      </div>

                      <div className="mt-3 overflow-x-auto rounded border border-slate-200">
                        <table className="min-w-full text-sm">
                          <thead className="bg-slate-50">
                            <tr>
                              <th className="px-3 py-2 text-left font-medium text-slate-600">Account</th>
                              <th className="px-3 py-2 text-right font-medium text-slate-600">Debit</th>
                              <th className="px-3 py-2 text-right font-medium text-slate-600">Credit</th>
                            </tr>
                          </thead>
                          <tbody>
                            {entry.lines.map((line) => (
                              <tr key={line.id} className="border-t border-slate-200">
                                <td className="px-3 py-2 text-slate-800">
                                  {line.account?.code ? `${line.account.code} - ${line.account.name}` : line.account?.name || 'Account'}
                                </td>
                                <td className="px-3 py-2 text-right text-slate-700">
                                  {formatCurrency(Number(line.debit || 0), 'USD')}
                                </td>
                                <td className="px-3 py-2 text-right text-slate-700">
                                  {formatCurrency(Number(line.credit || 0), 'USD')}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
