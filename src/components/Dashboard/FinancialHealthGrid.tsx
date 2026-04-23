'use client';

import { Landmark, Receipt, AlertTriangle, TrendingUp } from 'lucide-react';
import { useFinanceSummary } from '@/hooks/useFinanceSummary';
import { SummaryCard } from '@/components/finance/SummaryCard';

interface FinancialHealthGridProps {
  selectedProperty?: string;
}

export function FinancialHealthGrid({ selectedProperty }: FinancialHealthGridProps) {
  const { data, isLoading, error } = useFinanceSummary(selectedProperty);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 animate-pulse">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-32 rounded-xl border border-slate-200 bg-slate-100" />
        ))}
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
        Financial Health data unavailable right now.
      </div>
    );
  }

  const noi = data.totalRevenue - data.operatingExpenses;

  return (
    <section className="space-y-4 py-2">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-800">
          Financial Health <span className="ml-2 rounded bg-blue-50 px-2 py-0.5 text-xs font-normal text-blue-600">v2.0 GAAP</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <SummaryCard
          title="Cash Position"
          value={data.cashInBank}
          icon={Landmark}
          type="positive"
          description="Liquid cash in bank (Acc 1000)"
        />
        <SummaryCard
          title="Net Operating Income"
          value={noi}
          icon={TrendingUp}
          type={noi >= 0 ? 'positive' : 'negative'}
          description="Revenue minus operating costs"
        />
        <SummaryCard
          title="Tax Liability"
          value={data.salesTaxLiability}
          icon={Receipt}
          type="neutral"
          description="Sales tax to be remitted (Acc 2250)"
        />
        <SummaryCard
          title="Overdue Arrears"
          value={data.overdueAmount}
          icon={AlertTriangle}
          type="negative"
          description="Unpaid rent past due date"
        />
      </div>
    </section>
  );
}
