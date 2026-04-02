'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, FileCheck, Calculator, AlertTriangle, ShieldCheck } from 'lucide-react';
import { UtilityBillState, UtilityAllocationPayload } from '@/lib/utilities/utility-types';
import { toast } from 'sonner';

interface Props {
  utilityId: string;
  propertyId?: string;
  initialBillId?: string;
}

export function UtilityAllocationProcessor({ utilityId, propertyId, initialBillId }: Props) {
  const [step, setStep] = useState<UtilityBillState>('DRAFT');
  const [allocationData, setAllocationData] = useState<UtilityAllocationPayload | null>(null);
  const [activeBillId, setActiveBillId] = useState<string | null>(initialBillId ?? null);
  const [resolvedPropertyId, setResolvedPropertyId] = useState<string | null>(propertyId ?? null);
  const [activeBill, setActiveBill] = useState<{
    id: string;
    propertyId: string;
    providerName: string;
    totalAmount: number;
    dueDate: string;
    splitMethod: string;
  } | null>(null);
  const [isResolvingBill, setIsResolvingBill] = useState(false);
  const [billError, setBillError] = useState<string | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [jobId, setJobId] = useState<string | null>(null);
  const [confidenceScore, setConfidenceScore] = useState<number | null>(null);
  const [flags, setFlags] = useState<Array<{ type: 'WARNING' | 'INFO'; message: string }>>([]);

  const pollingRef = useRef<number | null>(null);
  const pollAttemptsRef = useRef(0);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const mapSplitMethod = (splitMethod?: string) => {
    switch (splitMethod) {
      case 'OCCUPANCY_BASED':
        return 'RUBS_OCCUPANCY';
      case 'SQ_FOOTAGE':
        return 'SQUARE_FOOTAGE';
      case 'AI_OPTIMIZED':
        return 'AI_SUGGESTED';
      case 'EQUAL':
      default:
        return 'EQUAL_SPLIT';
    }
  };

  useEffect(() => {
    let isMounted = true;

    const loadActiveBill = async () => {
      if (!utilityId) return;
      if (initialBillId && propertyId) return;

      try {
        setIsResolvingBill(true);
        setBillError(null);

        const res = await fetch(`/api/utilities/${utilityId}/active-bill`);
        if (!res.ok) {
          throw new Error('Failed to resolve active bill');
        }

        const data = await res.json();
        if (!isMounted) return;

        if (data?.data?.id) {
          setActiveBillId(data.data.id);
          setResolvedPropertyId(data.data.propertyId ?? propertyId ?? null);
          setActiveBill({
            id: data.data.id,
            propertyId: data.data.propertyId,
            providerName: data.data.providerName,
            totalAmount: Number(data.data.totalAmount ?? 0),
            dueDate: new Date(data.data.dueDate).toISOString(),
            splitMethod: mapSplitMethod(data.data.splitMethod),
          });
        } else {
          setActiveBillId(null);
        }
      } catch (error) {
        if (!isMounted) return;
        setBillError('No active bill found for the current cycle.');
      } finally {
        if (isMounted) setIsResolvingBill(false);
      }
    };

    loadActiveBill();
    return () => {
      isMounted = false;
    };
  }, [utilityId, initialBillId, propertyId]);

  useEffect(() => {
    return () => stopPolling();
  }, []);

  const stopPolling = () => {
    if (pollingRef.current) {
      window.clearInterval(pollingRef.current);
      pollingRef.current = null;
    }
  };

  const startPolling = (pollingUrl: string) => {
    stopPolling();
    pollAttemptsRef.current = 0;

    pollingRef.current = window.setInterval(async () => {
      pollAttemptsRef.current += 1;
      if (pollAttemptsRef.current > 10) {
        stopPolling();
        toast.info('AI processing endpoint is not configured yet.');
        setStep('DRAFT');
        return;
      }

      try {
        const res = await fetch(pollingUrl);
        if (!res.ok) return;

        const data = await res.json();
        if (data?.status === 'PENDING_REVIEW' && data?.payload) {
          setAllocationData(data.payload);
          setResolvedPropertyId(data.payload.propertyId ?? resolvedPropertyId);
          setConfidenceScore(data.confidenceScore ?? data.payload.confidenceScore ?? null);
          setFlags(data.flags ?? []);
          setJobId(data.jobId ?? jobId);
          setStep('PENDING_REVIEW');
          stopPolling();
        }
      } catch (error) {
        // Keep polling until max attempts reached.
      }
    }, 2000);
  };

  // SIMULATED: In the future, uploading a PDF sets state to 'PROCESSING_AI' and polls a webhook.
  // Today, this button triggers your manual backend calculation engine.
  const handleCalculateSplit = async () => {
    if (!activeBillId) {
      toast.error('No active bill found for allocation.');
      return;
    }

    setStep('PROCESSING_AI');

    try {
      const res = await fetch('/api/utilities/allocations/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ billId: activeBillId }),
      });

      if (!res.ok) {
        throw new Error('Failed to calculate allocations');
      }

      const data = await res.json();
      const payload: UtilityAllocationPayload | null = data?.data ?? null;

      if (!payload) {
        throw new Error('Allocation payload missing');
      }

      setAllocationData(payload);
      setResolvedPropertyId(payload.propertyId ?? resolvedPropertyId);
      setConfidenceScore(payload.confidenceScore ?? 1.0);
      setFlags(payload.flags ?? []);
      setJobId(crypto.randomUUID());
      setStep('PENDING_REVIEW');
    } catch (error) {
      toast.error('Failed to calculate allocations');
      setStep('DRAFT');
    }
  };

  const handlePdfUpload = (file: File | null) => {
    if (!file || !activeBillId || !resolvedPropertyId || !activeBill) return;

    setSelectedFileName(file.name);
    setStep('PROCESSING_AI');

    const upload = async () => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('billId', activeBillId);
      formData.append('propertyId', resolvedPropertyId);
      formData.append('providerName', activeBill.providerName ?? 'OTHER');
      formData.append('method', activeBill.splitMethod ?? 'EQUAL_SPLIT');
      formData.append('totalAmount', String(activeBill.totalAmount ?? 0));
      formData.append('dueDate', activeBill.dueDate);

      const res = await fetch('/api/utilities/allocations/upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        throw new Error('Failed to upload bill PDF');
      }

      const data = await res.json();
      setJobId(data?.data?.jobId ?? null);
      startPolling(data?.data?.statusUrl ?? `/api/utilities/allocations/status?jobId=${data?.data?.jobId}`);
    };

    upload().catch(() => {
      toast.error('Failed to upload PDF for AI processing');
      setStep('DRAFT');
    });
  };

  const handleApproveAndPost = async () => {
    if (!activeBillId) {
      toast.error('No bill ID found to approve.');
      return;
    }

    try {
      setStep('PROCESSING_AI'); // Reuse loading state while approving

      const res = await fetch(`/api/utilities/allocations/${activeBillId}/approve`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        throw new Error(errorData?.error || 'Failed to approve allocation');
      }

      const data = await res.json();

      if (data.success) {
        toast.success(`Allocations Approved! ${data.result.invoicesGenerated} invoice(s) generated and posted to GL.`);
        setStep('POSTED');
      } else {
        throw new Error('Approval response was not successful');
      }
    } catch (error) {
      console.error('Approval error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to approve allocations. Please try again.');
      setStep('PENDING_REVIEW'); // Return to review state on error
    }
  };

  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm">
      <h3 className="text-lg font-semibold mb-4 border-b pb-2">Allocation Engine</h3>
      {isResolvingBill && (
        <p className="text-sm text-slate-500 mb-4">Resolving active billing cycle...</p>
      )}
      {billError && (
        <p className="text-sm text-amber-600 mb-4">{billError}</p>
      )}

      {step === 'DRAFT' && (
        <div className="flex flex-col items-center justify-center py-12 text-slate-500">
          <Calculator className="h-12 w-12 mb-4 text-slate-300" />
          <p className="mb-4 text-center max-w-sm">
            Enter the master utility bill details to calculate tenant splits based on occupancy (RUBS) or square footage.
          </p>
          <div className="flex flex-wrap items-center gap-3 justify-center">
            <Button onClick={handleCalculateSplit} disabled={!activeBillId || isResolvingBill}>
              Calculate Tenant Allocations
            </Button>
            <Button
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
              disabled={!activeBillId || isResolvingBill}
            >
              Upload KPLC PDF
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={(e) => handlePdfUpload(e.target.files?.[0] ?? null)}
            />
          </div>
          {selectedFileName && (
            <p className="text-xs text-slate-400 mt-3">Queued: {selectedFileName}</p>
          )}
        </div>
      )}

      {step === 'PROCESSING_AI' && (
        <div className="flex flex-col items-center justify-center py-12 text-blue-600">
          <Loader2 className="h-12 w-12 mb-4 animate-spin" />
          <p className="font-medium">Calculating splits and checking for anomalies...</p>
          {jobId && <p className="text-xs text-blue-500 mt-2">Job ID: {jobId}</p>}
        </div>
      )}

      {step === 'PENDING_REVIEW' && allocationData && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {(jobId || confidenceScore !== null || flags.length > 0) && (
            <div className="mb-4 grid gap-3 md:grid-cols-3 text-sm">
              <div className="rounded-md border bg-slate-50 p-3">
                <p className="text-xs uppercase text-slate-500">Job ID</p>
                <p className="font-medium text-slate-900 truncate">{jobId ?? 'Manual run'}</p>
              </div>
              <div className="rounded-md border bg-slate-50 p-3">
                <p className="text-xs uppercase text-slate-500">AI Confidence</p>
                <p className="font-medium text-slate-900">
                  {confidenceScore !== null ? `${Math.round(confidenceScore * 100)}%` : 'N/A'}
                </p>
              </div>
              <div className="rounded-md border bg-slate-50 p-3">
                <p className="text-xs uppercase text-slate-500">Review Status</p>
                <p className="font-medium text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-green-600" />
                  Human approval required
                </p>
              </div>
            </div>
          )}

          {flags.length > 0 && (
            <div className="mb-4 rounded-md border border-amber-200 bg-amber-50 p-3 text-amber-800 text-sm flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 mt-0.5" />
              <div>
                <p className="font-semibold">Review Flags</p>
                <ul className="list-disc pl-5">
                  {flags.map((flag, idx) => (
                    <li key={`${flag.type}-${idx}`}>{flag.message}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="flex justify-between items-center bg-blue-50 p-4 rounded-md mb-6">
            <div>
              <p className="text-sm text-blue-800 font-medium">Total Master Bill</p>
              <p className="text-2xl font-bold text-blue-900">KES {allocationData.totalAmount.toLocaleString()}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-blue-800 font-medium">Split Method</p>
              <p className="text-lg font-semibold text-blue-900">{allocationData.splitMethod.replace('_', ' ')}</p>
            </div>
          </div>

          <table className="w-full text-left mb-6">
            <thead className="bg-slate-50 border-y">
              <tr>
                <th className="p-3 font-medium text-sm">Unit</th>
                <th className="p-3 font-medium text-sm">Amount (KES)</th>
                <th className="p-3 font-medium text-sm">Split %</th>
                <th className="p-3 font-medium text-sm">Explanation</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {allocationData.allocations.map((alloc) => (
                <tr key={alloc.unitId} className="hover:bg-slate-50">
                  <td className="p-3 font-medium">{alloc.unitId}</td>
                  <td className="p-3 font-semibold">{alloc.amount.toLocaleString()}</td>
                  <td className="p-3 text-slate-600">{alloc.percentage}%</td>
                  <td className="p-3 text-sm text-slate-500">{alloc.explanation}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-end space-x-4 border-t pt-4">
            <Button variant="outline" onClick={() => setStep('DRAFT')}>
              Discard & Recalculate
            </Button>
            <Button onClick={handleApproveAndPost} className="bg-green-600 hover:bg-green-700">
              <FileCheck className="mr-2 h-4 w-4" /> Approve & Generate Invoices
            </Button>
          </div>
        </div>
      )}

      {step === 'POSTED' && (
        <div className="flex flex-col items-center justify-center py-12 text-green-600">
          <FileCheck className="h-16 w-16 mb-4" />
          <h4 className="text-xl font-bold mb-2">Allocations Posted</h4>
          <p className="text-slate-600 text-center max-w-md">
            Tenant invoices have been generated and the General Ledger has been updated. The blockchain hash has been secured.
          </p>
        </div>
      )}
    </div>
  );
}
