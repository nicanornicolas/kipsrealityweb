import { useQuery } from '@tanstack/react-query';
import { useApiMutation } from '@/hooks/use-api-mutation';

export interface Lease {
  id: string;
  startDate: string;
  endDate: string;
  rentAmount: number;
  status: 'ACTIVE' | 'EXPIRED' | 'TERMINATED' | 'PENDING';
  property: { address: string; city: string };
  unit?: { unitNumber: string };
}

export const useActiveLease = () => {
  return useQuery({
    queryKey: ['tenant-active-lease'],
    queryFn: async (): Promise<Lease | null> => {
      const res = await fetch('/api/lease/tenant/active');
      if (!res.ok) {
        if (res.status === 404) return null;
        throw new Error('Failed to fetch active lease');
      }
      return res.json();
    },
  });
};

export const useLeaseAction = () => {
  return useApiMutation<
    { leaseId: string; action: 'RENEW' | 'TERMINATE'; reason?: string },
    unknown
  >(
    async ({ leaseId, action, reason }) => {
      const res = await fetch(`/api/lease/${leaseId}/tenant-action`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, reason }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(
          error.message || error.error || `Failed to submit ${action.toLowerCase()} request`,
        );
      }
      return res.json();
    },
    {
      successMessage: 'Your request has been submitted to the property manager.',
      invalidateQueries: ['tenant-active-lease'],
    },
  );
};

export const useSignDocument = () => {
  return useApiMutation<
    { documentId: string; signatureHash: string; fieldId?: string },
    unknown
  >(
    async ({ documentId, signatureHash, fieldId }) => {
      const res = await fetch(`/api/dss/documents/${documentId}/sign`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ signatureHash, fieldId }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || error.error || 'Failed to apply digital signature');
      }
      return res.json();
    },
    {
      successMessage: 'Document signed successfully!',
      invalidateQueries: ['tenant-document', 'tenant-active-lease'],
    },
  );
};
