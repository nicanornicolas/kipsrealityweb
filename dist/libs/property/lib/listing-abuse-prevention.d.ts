/**
 * Abuse prevention and security monitoring for listing operations
 * Implements IP-based restrictions, suspicious activity detection, and automated blocking
 */
/**
 * Abuse prevention service
 */
export declare class AbusePreventionService {
    private static instance;
    private logger;
    private failedAttempts;
    private bannedUsers;
    private bannedIPs;
    private suspiciousActivities;
    private ipRequestCounts;
    private constructor();
    static getInstance(): AbusePreventionService;
    /**
     * Check if user or IP is banned
     */
    isBanned(userId: string, ip: string): {
        banned: boolean;
        reason?: string;
        expiresAt?: Date;
        permanent?: boolean;
    };
    /**
     * Record failed attempt
     */
    recordFailedAttempt(userId: string, ip: string, reason: string): void;
    /**
     * Ban user temporarily or permanently
     */
    banUser(userId: string, ip: string, reason: string, permanent?: boolean): void;
    /**
     * Check IP-based rate limiting
     */
    checkIPRateLimit(ip: string): {
        allowed: boolean;
        resetTime?: number;
        remainingRequests?: number;
    };
    /**
     * Detect suspicious activity patterns
     */
    detectSuspiciousActivity(userId: string, ip: string, activity: {
        operation: string;
        payloadSize?: number;
        userAgent?: string;
        requestCount?: number;
        timeWindow?: number;
    }): {
        suspicious: boolean;
        reasons: string[];
        severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
    };
    /**
     * Record suspicious activity
     */
    private recordSuspiciousActivity;
    /**
     * Get user security status
     */
    getUserSecurityStatus(userId: string, ip: string): {
        banned: boolean;
        failedAttempts: number;
        suspiciousActivities: number;
        riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
    };
    /**
     * Clear failed attempts for user
     */
    clearFailedAttempts(userId: string, ip: string): void;
    /**
     * Unban user
     */
    unbanUser(userId: string, ip: string, reason: string): void;
    /**
     * Get security statistics
     */
    getSecurityStats(): {
        totalBannedUsers: number;
        totalBannedIPs: number;
        suspiciousActivitiesLast24h: number;
        failedAttemptsLast24h: number;
        topSuspiciousIPs: Array<{
            ip: string;
            count: number;
        }>;
    };
    /**
     * Start cleanup interval to remove expired data
     */
    private startCleanupInterval;
    /**
     * Clean up expired data
     */
    private cleanup;
}
