const CURRENCY_MAP = {
  USA: 'USD',
  KEN: 'KES',
  NGA: 'NGN',
  GHA: 'GHS',
} as const;

export function formatCurrency(
  amount: number,
  currency: keyof typeof CURRENCY_MAP | string = 'USD',
): string {
  const currencyCode =
    CURRENCY_MAP[currency as keyof typeof CURRENCY_MAP] || currency || 'USD';

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: currencyCode === 'KES' ? 0 : 2,
    maximumFractionDigits: currencyCode === 'KES' ? 2 : 2,
  }).format(amount);
}

export function formatCompactCurrency(amount: number): string {
  if (amount >= 1_000_000) {
    return `${(amount / 1_000_000).toFixed(1)}M`;
  }
  if (amount >= 1_000) {
    return `${(amount / 1_000).toFixed(0)}K`;
  }
  return amount.toString();
}
