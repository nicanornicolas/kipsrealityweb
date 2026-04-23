import { Landmark, ShieldCheck } from 'lucide-react';
import { ReconciliationWorkspace } from '@/components/finance/ReconciliationWorkspace';

export default function ReconciliationPage() {
  return (
    <div className="space-y-8 p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
            <Landmark className="h-8 w-8 text-blue-600" />
            Bank Reconciliation
          </h1>
          <p className="mt-2 text-slate-600">
            Match imported bank activity to locked journal entries and keep your books audit-ready.
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
            <ShieldCheck className="h-6 w-6 text-blue-700" />
          </div>
          <div>
            <h2 className="text-base font-semibold text-blue-900">Reconciliation Control</h2>
            <p className="mt-1 text-sm text-blue-800">
              Suggested matches are based on amount and date proximity. Review each suggestion before confirming the link.
            </p>
          </div>
        </div>
      </div>

      <ReconciliationWorkspace />
    </div>
  );
}
