import { useQuery } from '@tanstack/react-query';
import { useApiMutation } from '@/hooks/use-api-mutation';

export interface Invoice {
  id: string;
  amount: number;
  status: 'DRAFT' | 'ISSUED' | 'PAID' | 'VOID' | 'OVERDUE' | 'PENDING';
  postingStatus: 'DRAFT' | 'PENDING' | 'POSTED' | 'FAILED';
  description: string;
  dueDate: string;
  createdAt: string;
}

export interface Payment {
  id: string;
  amount: number;
  status: 'PENDING' | 'COMPLETED' | 'FAILED';
  paidOn: string;
  reference: string;
  invoice: {
    description: string;
  };
}

export const useTenantInvoices = (status?: 'PENDING' | 'PAID') => {
  return useQuery({
    queryKey: ['tenant-invoices', status],
    queryFn: async (): Promise<Invoice[]> => {
      const url = status
        ? `/api/invoices/tenant?status=${status}`
        : '/api/invoices/tenant';
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch invoices');
      const data = await res.json();
      return data.invoices;
    },
  });
};

export const useTenantPayments = () => {
  return useQuery({
    queryKey: ['tenant-payments'],
    queryFn: async (): Promise<Payment[]> => {
      const res = await fetch('/api/payments');
      if (!res.ok) throw new Error('Failed to fetch payment history');
      const data = await res.json();
      return data.payments;
    },
  });
};

export const useInitializePayment = () => {
  return useApiMutation<string, { url: string }>(
    async (invoiceId) => {
      const res = await fetch('/api/payments/initialize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          invoiceId,
          region: 'USA',
        }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || error.error || 'Failed to initialize payment');
      }

      return res.json();
    },
    {
      onSuccess: (data) => {
        if (data.url) {
          window.location.href = data.url;
        }
      },
    },
  );
};
