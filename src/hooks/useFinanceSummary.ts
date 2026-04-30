import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api-client';

export interface FinanceSummaryView {
  cashInBank: number;
  accountsReceivable: number;
  salesTaxLiability: number;
  totalRevenue: number;
  operatingExpenses: number;
  overdueAmount: number;
}

interface FinanceSummaryApi {
  cashInBank: number | string;
  accountsReceivable: number | string;
  salesTaxLiability: number | string;
  totalRevenue: number | string;
  operatingExpenses?: number | string;
  overdueAmount: number | string;
}

const toNumber = (value: number | string | undefined): number => {
  if (typeof value === 'number') return value;
  if (typeof value === 'string') {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }
  return 0;
};

export function useFinanceSummary(propertyId?: string) {
  const scopedPropertyId = propertyId && propertyId !== 'all' ? propertyId : 'all';

  const { data, isLoading, error } = useQuery({
    queryKey: ['finance-summary', scopedPropertyId],
    queryFn: async () => {
      const query =
        scopedPropertyId !== 'all'
          ? `?propertyId=${encodeURIComponent(scopedPropertyId)}`
          : '';

      const response = await api.get<{
        success: boolean;
        data: FinanceSummaryApi;
        error?: string;
      }>(`/api/finance/summary${query}`);
      const result = response.data;

      if (response.error || !result?.success) {
        throw new Error(result?.error ?? response.error ?? 'Failed to fetch finance summary');
      }

      const payload = result.data as FinanceSummaryApi;
      const normalized: FinanceSummaryView = {
        cashInBank: toNumber(payload.cashInBank),
        accountsReceivable: toNumber(payload.accountsReceivable),
        salesTaxLiability: toNumber(payload.salesTaxLiability),
        totalRevenue: toNumber(payload.totalRevenue),
        operatingExpenses: toNumber(payload.operatingExpenses),
        overdueAmount: toNumber(payload.overdueAmount),
      };

      return normalized;
    },
    staleTime: 30_000,
  });

  return {
    data: data ?? null,
    isLoading,
    error: error instanceof Error ? error.message : null,
  };
}
