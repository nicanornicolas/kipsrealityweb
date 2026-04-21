var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var usage_service_exports = {};
__export(usage_service_exports, {
  UsageService: () => UsageService
});
module.exports = __toCommonJS(usage_service_exports);
var import_client = require("@prisma/client");
const prisma = new import_client.PrismaClient();
class UsageService {
  /**
   * Checks if an organization is allowed to consume a feature.
   * Returns { allowed: boolean, remaining: number, reason?: string }
   */
  async checkAccess(organizationId, featureKey, quantity = 1) {
    const now = /* @__PURE__ */ new Date();
    const periodStart = new Date(now.getFullYear(), now.getMonth(), 1);
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
    if (!featureLimit) {
      return {
        allowed: false,
        remaining: 0,
        reason: `Feature ${featureKey} not included in ${org.plan.name} plan.`
      };
    }
    if (featureLimit.limit === 0) {
      return { allowed: true, remaining: Infinity };
    }
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
  async recordUsage(organizationId, featureKey, quantity = 1) {
    const now = /* @__PURE__ */ new Date();
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
  async getUsageStats(organizationId) {
    const now = /* @__PURE__ */ new Date();
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UsageService
});
