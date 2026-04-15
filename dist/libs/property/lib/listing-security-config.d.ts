import { UserRole, ListingPermission, RateLimitConfig } from './listing-auth.types';
/**
 * Security policy configuration
 */
export interface SecurityPolicy {
    requireAuth: boolean;
    requiredRole?: UserRole;
    permissions: ListingPermission[];
    rateLimit?: RateLimitConfig;
    validateInput: boolean;
    sanitizeOutput: boolean;
    logAccess: boolean;
    auditTrail: boolean;
}
/**
 * Operation-specific security policies
 */
export declare const SECURITY_POLICIES: Record<string, SecurityPolicy>;
/**
 * Input validation rules
 */
export declare const VALIDATION_RULES: {
    listing: {
        title: {
            minLength: number;
            maxLength: number;
            pattern: RegExp;
            required: boolean;
        };
        description: {
            minLength: number;
            maxLength: number;
            allowHTML: boolean;
            required: boolean;
        };
        price: {
            min: number;
            max: number;
            decimals: number;
            required: boolean;
        };
        availabilityDate: {
            minDate: Date;
            required: boolean;
        };
        expirationDate: {
            minDate: Date;
            required: boolean;
        };
    };
    bulk: {
        maxUnits: number;
        requiredFields: string[];
        allowedActions: string[];
    };
};
/**
 * Security headers configuration
 */
export declare const SECURITY_HEADERS: {
    'X-Content-Type-Options': string;
    'X-Frame-Options': string;
    'X-XSS-Protection': string;
    'Referrer-Policy': string;
    'Content-Security-Policy': string;
    'Strict-Transport-Security': string;
};
/**
 * Abuse prevention configuration
 */
export declare const ABUSE_PREVENTION: {
    maxFailedAttempts: number;
    banDuration: number;
    suspiciousPatterns: {
        rapidRequests: {
            threshold: number;
            windowMs: number;
        };
        largePayloads: {
            maxSize: number;
        };
        repeatedFailures: {
            threshold: number;
            windowMs: number;
        };
    };
    ipRestrictions: {
        enabled: boolean;
        whitelist: string[];
        blacklist: string[];
        maxRequestsPerIP: number;
        windowMs: number;
    };
};
/**
 * Data retention policies
 */
export declare const DATA_RETENTION: {
    auditLogs: {
        retentionDays: number;
        archiveAfterDays: number;
    };
    accessLogs: {
        retentionDays: number;
        archiveAfterDays: number;
    };
    errorLogs: {
        retentionDays: number;
        archiveAfterDays: number;
    };
    rateLimitData: {
        retentionHours: number;
    };
};
/**
 * Encryption configuration
 */
export declare const ENCRYPTION_CONFIG: {
    algorithm: string;
    keyDerivation: {
        iterations: number;
        keyLength: number;
        digest: string;
    };
    encryptedFields: string[];
};
/**
 * Security monitoring configuration
 */
export declare const MONITORING_CONFIG: {
    alerts: {
        enabled: boolean;
        thresholds: {
            failedAuthAttempts: number;
            suspiciousActivity: number;
            systemErrors: number;
        };
        notificationChannels: string[];
    };
    metrics: {
        enabled: boolean;
        collectInterval: number;
        retentionDays: number;
    };
    healthChecks: {
        enabled: boolean;
        interval: number;
        timeout: number;
    };
};
/**
 * Get security policy for operation
 */
export declare function getSecurityPolicy(operation: string): SecurityPolicy | null;
/**
 * Check if operation requires authentication
 */
export declare function requiresAuth(operation: string): boolean;
/**
 * Get required role for operation
 */
export declare function getRequiredRole(operation: string): UserRole | null;
/**
 * Get rate limit configuration for operation
 */
export declare function getRateLimit(operation: string): RateLimitConfig | null;
