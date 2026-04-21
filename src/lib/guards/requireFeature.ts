import { NextResponse } from 'next/server';
import { UsageService } from '@rentflow/payments';

const usageService = new UsageService();

/**
 * Wraps API routes to enforce SaaS tier limits before business logic executes.
 * Returns null if access is granted, or a NextResponse with 402 if denied.
 */
export async function enforceFeatureLimit(
  organizationId: string,
  featureKey: string,
  quantity: number = 1
): Promise<NextResponse | null> {

  const access = await usageService.checkAccess(organizationId, featureKey, quantity);

  if (!access.allowed) {
    return NextResponse.json(
      {
        error: "Upgrade Required",
        message: access.reason,
        code: "PAYMENT_REQUIRED",
        featureKey,
        limit: access.limit,
        used: access.used,
        remaining: access.remaining
      },
      { status: 402 } // HTTP 402 Payment Required is perfect for SaaS gating
    );
  }

  return null; // Null means access granted, proceed with route
}

/**
 * Helper to get usage info for display in frontend
 */
export async function getFeatureUsage(
  organizationId: string,
  featureKey: string
) {
  return usageService.checkAccess(organizationId, featureKey);
}
