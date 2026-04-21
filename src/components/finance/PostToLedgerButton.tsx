'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export function PostToLedgerButton({
  invoiceId,
  onComplete,
}: {
  invoiceId: string;
  onComplete: () => void;
}) {
  const [loading, setLoading] = useState(false);

  const handlePost = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/finance/invoices/${invoiceId}/post`, {
        method: 'POST',
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to post invoice');
      }

      toast.success('Invoice posted to General Ledger');
      onComplete();
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