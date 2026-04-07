/**
 * Abuse prevention and security monitoring for listing operations
 * Implements IP-based restrictions, suspicious activity detection, and automated blocking
 */

import { ListingLogger, LogCategory } from './listing-logger';
import { ABUSE_PREVENTION } from './listing-security-config';

interface SuspiciousActivity {
    userId: string;
    ip: string;
    activity: string;
    timestamp: Date;
    severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
    metadata?: Record<string, any>;
}

interface UserBan {
    userId: string;
    ip: string;
    reason: string;
    bannedAt: Date;
    expiresAt: Date;
    permanent: boolean;
}

interface RateLimitEntry {
    count: number;
    resetTime: number;
    violations: number;
}

/**
 * Abuse prevention service
 */
export class AbusePreventionService {
    private static instance: AbusePreventionService;
    private logger: ListingLogger;
    
    // In-memory stores (in production, use Redis or database)
    private failedAttempts = new Map<string, number>();
    private bannedUsers = new Map<string, UserBan>();
    private bannedIPs = new Map<string, UserBan>();
    private suspiciousActivities: SuspiciousActivity[] = [];
    private ipRequestCounts = new Map<string, RateLimitEntry>();

    private constructor() {
        this.logger = ListingLogger.getInstance();
        this.startCleanupInterval();
    }

    public static getInstance(): AbusePreventionService {
        if (!AbusePreventionService.instance) {
            AbusePreventionService.instance = new AbusePreventionService();
        }
        return AbusePreventionService.instance;
    }

    /**
     * Check if user or IP is banned
     */
    public isBanned(userId: string, ip: string): {
        banned: boolean;
        reason?: string;
        expiresAt?: Date;
        permanent?: boolean;
    } {
        const now = new Date();

        // Check user ban
        const userBan = this.bannedUsers.get(userId);
        if (userBan && (userBan.permanent || userBan.expiresAt > now)) {
            return {
                banned: true,
                reason: userBan.reason,
                expiresAt: userBan.expiresAt,
                permanent: userBan.permanent
            };
        }

        // Check IP ban
        const ipBan = this.bannedIPs.get(ip);
        if (ipBan && (ipBan.permanent || ipBan.expiresAt > now)) {
            return {
                banned: true,
                reason: ipBan.reason,
                expiresAt: ipBan.expiresAt,
                permanent: ipBan.permanent
            };
        }

        return { banned: false };
    }

    /**
     * Record failed attempt
     */
    public recordFailedAttempt(userId: string, ip: string, reason: string): void {
        const key = `${userId}:${ip}`;
        const currentCount = this.failedAttempts.get(key) || 0;
        const newCount = currentCount + 1;
        
        this.failedAttempts.set(key, newCount);

        this.logger.warn(LogCategory.PERMISSION, 'Failed attempt recorded', {
            userId,
            ip,
            reason,
            attemptCount: newCount
        });

        // Check if ban threshold reached
        if (newCount >= ABUSE_PREVENTION.maxFailedAttempts) {
            this.banUser(userId, ip, `Too many failed attempts: ${reason}`, false);
        }

        // Record as suspicious activity
        this.recordSuspiciousActivity({
            userId,
            ip,
            activity: `Failed attempt: ${reason}`,
            timestamp: new Date(),
            severity: newCount > 3 ? 'HIGH' : 'MEDIUM',
            metadata: { attemptCount: newCount, reason }
        });
    }

    /**
     * Ban user temporarily or permanently
     */
    public banUser(userId: string, ip: string, reason: string, permanent: boolean = false): void {
        const now = new Date();
        const expiresAt = permanent ? new Date('2099-12-31') : new Date(now.getTime() + ABUSE_PREVENTION.banDuration);

        const ban: UserBan = {
            userId,
            ip,
            reason,
            bannedAt: now,
            expiresAt,
            permanent
        };

        this.bannedUsers.set(userId, ban);
        this.bannedIPs.set(ip, ban);

        this.logger.error(LogCategory.ERROR_RECOVERY, 'User banned', undefined, {
            userId,
            ip,
            reason,
            permanent,
            expiresAt: expiresAt.toISOString()
        });

        // Record as critical suspicious activity
        this.recordSuspiciousActivity({
            userId,
            ip,
            activity: `User banned: ${reason}`,
            timestamp: now,
            severity: 'CRITICAL',
            metadata: { permanent, expiresAt }
        });
    }

    /**
     * Check IP-based rate limiting
     */
    public checkIPRateLimit(ip: string): {
        allowed: boolean;
        resetTime?: number;
        remainingRequests?: number;
    } {
        if (!ABUSE_PREVENTION.ipRestrictions.enabled) {
            return { allowed: true };
        }

        // Check whitelist
        if (ABUSE_PREVENTION.ipRestrictions.whitelist.includes(ip)) {
            return { allowed: true };
        }

        // Check blacklist
        if (ABUSE_PREVENTION.ipRestrictions.blacklist.includes(ip)) {
            return { allowed: false };
        }

        const now = Date.now();
        const entry = this.ipRequestCounts.get(ip);

        if (!entry || now > entry.resetTime) {
            // Reset or initialize
            this.ipRequestCounts.set(ip, {
                count: 1,
                resetTime: now + ABUSE_PREVENTION.ipRestrictions.windowMs,
                violations: entry?.violations || 0
            });
            return {
                allowed: true,
                resetTime: now + ABUSE_PREVENTION.ipRestrictions.windowMs,
                remainingRequests: ABUSE_PREVENTION.ipRestrictions.maxRequestsPerIP - 1
            };
        }

        if (entry.count >= ABUSE_PREVENTION.ipRestrictions.maxRequestsPerIP) {
            // Rate limit exceeded
            entry.violations++;
            this.ipRequestCounts.set(ip, entry);

            // Auto-ban if too many violations
            if (entry.violations >= 3) {
                this.banUser('unknown', ip, 'Repeated rate limit violations', false);
            }

            return {
                allowed: false,
                resetTime: entry.resetTime,
                remainingRequests: 0
            };
        }

        // Increment count
        entry.count++;
        this.ipRequestCounts.set(ip, entry);

        return {
            allowed: true,
            resetTime: entry.resetTime,
            remainingRequests: ABUSE_PREVENTION.ipRestrictions.maxRequestsPerIP - entry.count
        };
    }

    /**
     * Detect suspicious activity patterns
     */
    public detectSuspiciousActivity(userId: string, ip: string, activity: {
        operation: string;
        payloadSize?: number;
        userAgent?: string;
        requestCount?: number;
        timeWindow?: number;
    }): {
        suspicious: boolean;
        reasons: string[];
        severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
    } {
        const reasons: string[] = [];
        let severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL' = 'LOW';

        // Check for rapid requests
        if (activity.requestCount && activity.timeWindow) {
            const requestRate = activity.requestCount / (activity.timeWindow / 1000);
            if (requestRate > ABUSE_PREVENTION.suspiciousPatterns.rapidRequests.threshold / 60) {
                reasons.push('Unusually high request rate');
                severity = 'HIGH';
            }
        }

        // Check for large payloads
        if (activity.payloadSize && activity.payloadSize > ABUSE_PREVENTION.suspiciousPatterns.largePayloads.maxSize) {
            reasons.push('Unusually large request payload');
            severity = severity === 'HIGH' ? 'HIGH' : 'MEDIUM';
        }

        // Check for suspicious user agents
        if (activity.userAgent) {
            const suspiciousAgents = ['bot', 'crawler', 'spider', 'scraper', 'curl', 'wget'];
            if (suspiciousAgents.some(agent => activity.userAgent!.toLowerCase().includes(agent))) {
                reasons.push('Suspicious user agent detected');
                severity = severity === 'HIGH' ? 'HIGH' : 'MEDIUM';
            }
        }

        // Check recent activity history
        const recentActivities = this.suspiciousActivities.filter(
            sa => sa.userId === userId && 
                  sa.timestamp > new Date(Date.now() - 300000) // Last 5 minutes
        );

        if (recentActivities.length > 10) {
            reasons.push('High frequency of suspicious activities');
            severity = 'CRITICAL';
        }

        const suspicious = reasons.length > 0;

        if (suspicious) {
            this.recordSuspiciousActivity({
                userId,
                ip,
                activity: `Suspicious ${activity.operation}`,
                timestamp: new Date(),
                severity,
                metadata: { reasons, ...activity }
            });
        }

        return { suspicious, reasons, severity };
    }

    /**
     * Record suspicious activity
     */
    private recordSuspiciousActivity(activity: SuspiciousActivity): void {
        this.suspiciousActivities.push(activity);

        // Keep only recent activities (last 24 hours)
        const cutoff = new Date(Date.now() - 24 * 60 * 60 * 1000);
        this.suspiciousActivities = this.suspiciousActivities.filter(
            sa => sa.timestamp > cutoff
        );

        this.logger.warn(LogCategory.AUDIT, 'Suspicious activity detected', activity);

        // Auto-ban for critical activities
        if (activity.severity === 'CRITICAL') {
            const recentCritical = this.suspiciousActivities.filter(
                sa => sa.userId === activity.userId && 
                      sa.severity === 'CRITICAL' &&
                      sa.timestamp > new Date(Date.now() - 300000) // Last 5 minutes
            );

            if (recentCritical.length >= 3) {
                this.banUser(activity.userId, activity.ip, 'Multiple critical security violations', false);
            }
        }
    }

    /**
     * Get user security status
     */
    public getUserSecurityStatus(userId: string, ip: string): {
        banned: boolean;
        failedAttempts: number;
        suspiciousActivities: number;
        riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
    } {
        const banStatus = this.isBanned(userId, ip);
        const failedAttempts = this.failedAttempts.get(`${userId}:${ip}`) || 0;
        
        const recentSuspicious = this.suspiciousActivities.filter(
            sa => sa.userId === userId && 
                  sa.timestamp > new Date(Date.now() - 3600000) // Last hour
        );

        let riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL' = 'LOW';
        
        if (banStatus.banned) {
            riskLevel = 'CRITICAL';
        } else if (failedAttempts >= 3 || recentSuspicious.some(sa => sa.severity === 'CRITICAL')) {
            riskLevel = 'HIGH';
        } else if (failedAttempts >= 1 || recentSuspicious.some(sa => sa.severity === 'HIGH')) {
            riskLevel = 'MEDIUM';
        }

        return {
            banned: banStatus.banned,
            failedAttempts,
            suspiciousActivities: recentSuspicious.length,
            riskLevel
        };
    }

    /**
     * Clear failed attempts for user
     */
    public clearFailedAttempts(userId: string, ip: string): void {
        const key = `${userId}:${ip}`;
        this.failedAttempts.delete(key);
        
        this.logger.info(LogCategory.AUDIT, 'Failed attempts cleared', { userId, ip });
    }

    /**
     * Unban user
     */
    public unbanUser(userId: string, ip: string, reason: string): void {
        this.bannedUsers.delete(userId);
        this.bannedIPs.delete(ip);
        this.clearFailedAttempts(userId, ip);
        
        this.logger.info(LogCategory.AUDIT, 'User unbanned', { userId, ip, reason });
    }

    /**
     * Get security statistics
     */
    public getSecurityStats(): {
        totalBannedUsers: number;
        totalBannedIPs: number;
        suspiciousActivitiesLast24h: number;
        failedAttemptsLast24h: number;
        topSuspiciousIPs: Array<{ ip: string; count: number }>;
    } {
        const now = new Date();
        const last24h = new Date(now.getTime() - 24 * 60 * 60 * 1000);

        const recentSuspicious = this.suspiciousActivities.filter(sa => sa.timestamp > last24h);
        
        // Count suspicious activities by IP
        const ipCounts = new Map<string, number>();
        recentSuspicious.forEach(sa => {
            ipCounts.set(sa.ip, (ipCounts.get(sa.ip) || 0) + 1);
        });

        const topSuspiciousIPs = Array.from(ipCounts.entries())
            .map(([ip, count]) => ({ ip, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 10);

        return {
            totalBannedUsers: this.bannedUsers.size,
            totalBannedIPs: this.bannedIPs.size,
            suspiciousActivitiesLast24h: recentSuspicious.length,
            failedAttemptsLast24h: Array.from(this.failedAttempts.values()).reduce((sum, count) => sum + count, 0),
            topSuspiciousIPs
        };
    }

    /**
     * Start cleanup interval to remove expired data
     */
    private startCleanupInterval(): void {
        setInterval(() => {
            this.cleanup();
        }, 60000); // Run every minute
    }

    /**
     * Clean up expired data
     */
    private cleanup(): void {
        const now = new Date();

        // Remove expired bans
        for (const [key, ban] of this.bannedUsers.entries()) {
            if (!ban.permanent && ban.expiresAt <= now) {
                this.bannedUsers.delete(key);
            }
        }

        for (const [key, ban] of this.bannedIPs.entries()) {
            if (!ban.permanent && ban.expiresAt <= now) {
                this.bannedIPs.delete(key);
            }
        }

        // Remove old suspicious activities (older than 24 hours)
        const cutoff = new Date(now.getTime() - 24 * 60 * 60 * 1000);
        this.suspiciousActivities = this.suspiciousActivities.filter(
            sa => sa.timestamp > cutoff
        );

        // Remove expired IP rate limit entries
        for (const [ip, entry] of this.ipRequestCounts.entries()) {
            if (now.getTime() > entry.resetTime) {
                this.ipRequestCounts.delete(ip);
            }
        }
    }
}
