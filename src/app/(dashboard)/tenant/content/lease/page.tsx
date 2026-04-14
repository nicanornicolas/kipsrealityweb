'use client';

import Link from 'next/link';
import { useLease } from '@/hooks/useLease';
import { useInvoices } from '@/hooks/useInvoice';
import { CalendarDays, CreditCard, Home } from 'lucide-react';

const dayMs = 1000 * 60 * 60 * 24;

export default function TenantLeaseSnapshotPage() {
  const { activeLease, loading, error } = useLease();
  const { invoices } = useInvoices();

  const nextRentInvoice = invoices
    .filter((invoice) => invoice.type === 'RENT' && invoice.balance > 0)
    .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())[0];

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-xl rounded-xl border border-red-200 bg-red-50 p-5 text-red-700">
        {error}
      </div>
    );
  }

  if (!activeLease) {
    return (
      <div className="mx-auto max-w-xl rounded-xl border border-slate-200 bg-white p-6 text-center">
        <p className="text-slate-600">No active lease found.</p>
      </div>
    );
  }

  const endDate = new Date(activeLease.endDate);
  const daysRemaining = Math.max(0, Math.ceil((endDate.getTime() - Date.now()) / dayMs));

  return (
    <div className="mx-auto max-w-2xl space-y-4 p-4 sm:p-6">
      <h1 className="text-2xl font-bold text-slate-900">Lease Snapshot</h1>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-50 p-2">
              <Home className="h-5 w-5 text-blue-700" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Current Home</p>
              <h2 className="text-lg font-semibold text-slate-900">
                {activeLease.property.propertyName || 'Active Lease'}
              </h2>
            </div>
          </div>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
            {activeLease.leaseStatus}
          </span>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-xs text-slate-500">Days Remaining</p>
            <p className="text-2xl font-bold text-slate-900">{daysRemaining}</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-xs text-slate-500">Next Payment Due</p>
            <p className="text-sm font-semibold text-slate-900">
              {nextRentInvoice
                ? new Date(nextRentInvoice.dueDate).toLocaleDateString()
                : 'No due invoice'}
            </p>
          </div>
          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-xs text-slate-500">Rent Amount</p>
            <p className="text-sm font-semibold text-slate-900">
              ${Number(activeLease.rentAmount || 0).toLocaleString()}
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <Link
            href="/tenant/content/invoices"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            <CreditCard className="h-4 w-4" />
            Pay
          </Link>
          <Link
            href={`/tenant/content/lease/${activeLease.id}`}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            <CalendarDays className="h-4 w-4" />
            View Documents
          </Link>
        </div>
      </div>
    </div>
  );
}
