'use client';

import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { api } from '@/lib/api-client';

export function PostToLedgerButton({
  invoiceId,
  onComplete,
}: {
  invoiceId: string;
  onComplete?: () => void;
}) {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);

  const handlePost = async () => {
    setLoading(true);
    try {
      const response = await api.post<{ success: boolean; error?: string }>(
        `/api/finance/invoices/${invoiceId}/post`,
      );

      if (response.error || !response.data?.success) {
        throw new Error(response.data?.error || response.error || 'Failed to post invoice');
      }

      toast.success('Invoice posted to General Ledger');
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['finance-invoices'] }),
        queryClient.invalidateQueries({ queryKey: ['finance-summary'] }),
        queryClient.invalidateQueries({ queryKey: ['invoice-detail'] }),
      ]);
      onComplete?.();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to post invoice');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button size="sm" variant="outline" onClick={handlePost} disabled={loading}>
      {loading ? 'Posting...' : 'Post to GL'}
    </Button>
  );
}