'use client';

import { Badge } from '@/components/ui/badge';

const statusClasses: Record<string, string> = {
  PAID: 'bg-emerald-100 text-emerald-700 hover:bg-emerald-100',
  POSTED: 'bg-blue-100 text-blue-700 hover:bg-blue-100',
  DRAFT: 'bg-slate-100 text-slate-700 hover:bg-slate-100',
  PENDING: 'bg-amber-100 text-amber-700 hover:bg-amber-100',
  FAILED: 'bg-rose-100 text-rose-700 hover:bg-rose-100',
  VOID: 'bg-slate-200 text-slate-700 hover:bg-slate-200',
  OVERDUE: 'bg-rose-100 text-rose-700 hover:bg-rose-100',
  CANCELLED: 'bg-slate-200 text-slate-700 hover:bg-slate-200',
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <Badge variant="secondary" className={`border-0 text-[11px] font-semibold uppercase tracking-wide ${statusClasses[status] || statusClasses.DRAFT}`}>
      {status}
    </Badge>
  );
}