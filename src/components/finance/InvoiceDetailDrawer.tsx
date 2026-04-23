'use client';

import { useQuery } from '@tanstack/react-query';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { StatusBadge } from './StatusBadge';

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(value);
}

interface InvoiceDetailDrawerProps {
  invoiceId: string | null;
  onClose: () => void;
}

export function InvoiceDetailDrawer({ invoiceId, onClose }: InvoiceDetailDrawerProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['invoice-detail', invoiceId],
    enabled: Boolean(invoiceId),
    queryFn: async () => {
      const response = await fetch(`/api/finance/invoices/${invoiceId}`, {
        cache: 'no-store',
      });
      const result = await response.json();

      if (!response.ok || !result?.success) {
        throw new Error(result?.error || 'Failed to fetch invoice detail');
      }

      return result.data;
    },
  });

  if (!invoiceId) return null;

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xl border-l border-slate-200 bg-white shadow-2xl">
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Invoice Audit Drawer</p>
            <h2 className="text-lg font-bold text-slate-900">Invoice Details</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close invoice details">
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {isLoading ? (
            <div className="text-sm text-slate-500">Loading Audit Trail...</div>
          ) : isError || !data ? (
            <div className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
              Unable to load invoice audit details.
            </div>
          ) : (
            <div className="space-y-6">
              <section className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  <StatusBadge status={data.status} />
                  <StatusBadge status={data.postingStatus} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">Invoice</p>
                  <p className="text-lg font-semibold text-slate-900">{data.invoiceNumber}</p>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm text-slate-600">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-400">Tenant</p>
                    <p className="font-medium text-slate-900">{data.tenantName}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-400">Property</p>
                    <p className="font-medium text-slate-900">{data.propertyName}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-400">Unit</p>
                    <p className="font-medium text-slate-900">{data.unitNumber}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-400">Due Date</p>
                    <p className="font-medium text-slate-900">{new Date(data.dueDate).toLocaleDateString()}</p>
                  </div>
                </div>
              </section>

              <section className="rounded-lg bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-400">Total Due</p>
                <p className="text-2xl font-bold text-slate-900">{formatCurrency(data.amount)}</p>
              </section>

              <section className="space-y-2">
                <p className="text-xs uppercase tracking-wide text-slate-400">Description</p>
                <p className="text-sm text-slate-700">{data.description || 'No invoice description available.'}</p>
              </section>

              <section className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-tight text-slate-900">General Ledger Handoff</h3>
                {data.ledgerEntries.length > 0 ? (
                  <div className="overflow-hidden rounded-lg border border-slate-200 text-xs">
                    <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-100 px-3 py-2 font-bold text-slate-600">
                      <span>Account</span>
                      <span className="text-right">Debit</span>
                      <span className="text-right">Credit</span>
                    </div>
                    {data.ledgerEntries.map((line) => (
                      <div key={`${line.accountId}-${line.debit}-${line.credit}`} className="grid grid-cols-3 border-b border-slate-100 px-3 py-2 font-mono last:border-0">
                        <span className="text-slate-700">{line.accountId}</span>
                        <span className="text-right text-blue-600">{line.debit > 0 ? formatCurrency(line.debit) : '-'}</span>
                        <span className="text-right text-rose-600">{line.credit > 0 ? formatCurrency(line.credit) : '-'}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-700">
                    Not yet posted to GL. Click “Post to GL” to recognize this revenue.
                  </div>
                )}
              </section>

              <section>
                <p className="text-xs uppercase tracking-wide text-slate-400">Audit Metadata</p>
                <div className="mt-2 grid grid-cols-2 gap-3 text-sm text-slate-600">
                  <div>
                    <p className="text-xs text-slate-400">Created</p>
                    <p className="font-medium text-slate-900">{new Date(data.createdAt).toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Posted</p>
                    <p className="font-medium text-slate-900">{data.postedAt ? new Date(data.postedAt).toLocaleString() : 'Not posted'}</p>
                  </div>
                </div>
              </section>
            </div>
          )}
        </div>

        <Separator />
      </div>
    </div>
  );
}