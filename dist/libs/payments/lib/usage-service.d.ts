export interface AccessCheckResult {
    allowed: boolean;
    remaining: number;
    reason?: string;
    limit?: number;
    used?: number;
}
export declare class UsageService {
    /**
     * Checks if an organization is allowed to consume a feature.
     * Returns { allowed: boolean, remaining: number, reason?: string }
     */
    checkAccess(organizationId: string, featureKey: string, quantity?: number): Promise<AccessCheckResult>;
    /**
     * Safely increments the usage counter after a successful business action
     */
    recordUsage(organizationId: string, featureKey: string, quantity?: number): Promise<{
        id: string;
        limit: number;
        period: string;
        organizationId: string;
        featureKey: string;
        periodStart: Date;
        usedCount: number;
    }>;
    /**
     * Gets current usage statistics for an organization
     */
    getUsageStats(organizationId: string): Promise<({
        organization: {
            plan: ({
                featureLimits: {
                    id: number;
                    planId: number;
                    limit: number;
                    featureId: number;
                    period: string;
                }[];
            } & {
                id: number;
                name: string;
                createdAt: Date;
                updatedAt: Date | null;
                description: string | null;
                badge: string | null;
                monthlyPrice: number;
                yearlyPrice: number;
                gradient: string | null;
                stripePriceIdMonthly: string | null;
                stripePriceIdYearly: string | null;
                trialDays: number;
            }) | null;
        } & {
            id: string;
            slug: string;
            name: string;
            logoUrl: string | null;
            website: string | null;
            phone: string | null;
            address: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            planId: number | null;
            paystackSubaccountCode: string | null;
            region: import("@prisma/client").$Enums.Region | null;
            stripeConnectId: string | null;
        };
    } & {
        id: string;
        limit: number;
        period: string;
        organizationId: string;
        featureKey: string;
        periodStart: Date;
        usedCount: number;
    })[]>;
}
