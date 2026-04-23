'use client';

import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SummaryCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  description: string;
  type?: 'positive' | 'negative' | 'neutral';
}

const toneClasses: Record<NonNullable<SummaryCardProps['type']>, string> = {
  positive: 'text-emerald-700 bg-emerald-50 border-emerald-100',
  negative: 'text-rose-700 bg-rose-50 border-rose-100',
  neutral: 'text-sky-700 bg-sky-50 border-sky-100',
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

export function SummaryCard({
  title,
  value,
  icon: Icon,
  description,
  type = 'neutral',
}: SummaryCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{title}</p>
          <p className="mt-1 text-[11px] text-slate-400">{description}</p>
        </div>
        <div className={cn('rounded-lg border p-2', toneClasses[type])}>
          <Icon className="h-4 w-4" />
        </div>
      </div>
      <p className="text-2xl font-bold text-slate-900">{formatCurrency(value)}</p>
    </div>
  );
}
