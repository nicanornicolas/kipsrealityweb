import { useEffect, useState } from 'react';

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
  const [data, setData] = useState<FinanceSummaryView | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isCancelled = false;

    async function fetchFinanceSummary() {
      setIsLoading(true);
      setError(null);

      try {
        const query =
          propertyId && propertyId !== 'all'
            ? `?propertyId=${encodeURIComponent(propertyId)}`
            : '';

        const response = await fetch(`/api/finance/summary${query}`, {
          method: 'GET',
          cache: 'no-store',
        });

        const result = await response.json();

        if (!response.ok || !result?.success) {
          throw new Error(result?.error ?? 'Failed to fetch finance summary');
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

        if (!isCancelled) {
          setData(normalized);
        }
      } catch (err) {
        if (!isCancelled) {
          setError(err instanceof Error ? err.message : 'Network error');
          setData(null);
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    }

    fetchFinanceSummary();

    return () => {
      isCancelled = true;
    };
  }, [propertyId]);

  return { data, isLoading, error };
}
