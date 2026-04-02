import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface AccessCheckResult {
  allowed: boolean;
  remaining: number;
  reason?: string;
  limit?: number;
  used?: number;
}

export class UsageService {
  /**
   * Checks if an organization is allowed to consume a feature.
   * Returns { allowed: boolean, remaining: number, reason?: string }
   */
  async checkAccess(
    organizationId: string,
    featureKey: string,
    quantity: number = 1
  ): Promise<AccessCheckResult> {
    const now = new Date();
    const periodStart = new Date(now.getFullYear(), now.getMonth(), 1);

    // 1. Get the Org's Plan and the specific Feature Limit
    const org = await prisma.organization.findUnique({
      where: { id: organizationId },
      include: {
        plan: {
          include: {
            featureLimits: {
              where: { feature: { key: featureKey } },
              include: { feature: true }
            }
          }
        }
      }
    });

    if (!org || !org.plan) {
      return {
        allowed: false,
        remaining: 0,
        reason: "No active subscription plan."
      };
    }

    const featureLimit = org.plan.featureLimits[0];

    // If no limit is explicitly defined for this plan, feature is not included
    if (!featureLimit) {
      return {
        allowed: false,
        remaining: 0,
        reason: `Feature ${featureKey} not included in ${org.plan.name} plan.`
      };
    }

    // 0 means unlimited in our schema design
    if (featureLimit.limit === 0) {
      return { allowed: true, remaining: Infinity };
    }

    // 2. Check current usage for the period
    const usage = await prisma.usageMetric.findUnique({
      where: {
        organizationId_featureKey_periodStart: {
          organizationId,
          featureKey,
          periodStart
        }
      }
    });

    const currentUsed = usage?.usedCount || 0;
    const remaining = featureLimit.limit - currentUsed;

    if (currentUsed + quantity > featureLimit.limit) {
      return {
        allowed: false,
        remaining,
        limit: featureLimit.limit,
        used: currentUsed,
        reason: `Limit reached. Your ${org.plan.name} plan allows ${featureLimit.limit} ${featureKey} per month. You have used ${currentUsed}.`
      };
    }

    return {
      allowed: true,
      remaining,
      limit: featureLimit.limit,
      used: currentUsed
    };
  }

  /**
   * Safely increments the usage counter after a successful business action
   */
  async recordUsage(
    organizationId: string,
    featureKey: string,
    quantity: number = 1
  ) {
    const now = new Date();
    const periodStart = new Date(now.getFullYear(), now.getMonth(), 1);

    return await prisma.usageMetric.upsert({
      where: {
        organizationId_featureKey_periodStart: {
          organizationId,
          featureKey,
          periodStart
        }
      },
      update: {
        usedCount: { increment: quantity }
      },
      create: {
        organizationId,
        featureKey,
        periodStart,
        period: "monthly",
        usedCount: quantity,
        limit: 0
      }
    });
  }

  /**
   * Gets current usage statistics for an organization
   */
  async getUsageStats(organizationId: string) {
    const now = new Date();
    const periodStart = new Date(now.getFullYear(), now.getMonth(), 1);

    return await prisma.usageMetric.findMany({
      where: {
        organizationId,
        periodStart
      },
      include: {
        organization: {
          include: {
            plan: {
              include: {
                featureLimits: true
              }
            }
          }
        }
      }
    });
  }
}
