/**
 * Centralized security configuration for listing operations
 * Defines security policies, rate limits, and validation rules
 */

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
export const SECURITY_POLICIES: Record<string, SecurityPolicy> = {
    // Listing creation
    'listing:create': {
        requireAuth: true,
        requiredRole: UserRole.PROPERTY_MANAGER,
        permissions: [ListingPermission.CREATE_LISTING],
        rateLimit: { windowMs: 60000, maxRequests: 10 },
        validateInput: true,
        sanitizeOutput: true,
        logAccess: true,
        auditTrail: true
    },

    // Listing updates
    'listing:update': {
        requireAuth: true,
        requiredRole: UserRole.PROPERTY_MANAGER,
        permissions: [ListingPermission.UPDATE_LISTING],
        rateLimit: { windowMs: 60000, maxRequests: 20 },
        validateInput: true,
        sanitizeOutput: true,
        logAccess: true,
        auditTrail: true
    },

    // Listing deletion
    'listing:delete': {
        requireAuth: true,
        requiredRole: UserRole.PROPERTY_MANAGER,
        permissions: [ListingPermission.DELETE_LISTING],
        rateLimit: { windowMs: 300000, maxRequests: 5 },
        validateInput: true,
        sanitizeOutput: true,
        logAccess: true,
        auditTrail: true
    },

    // Listing viewing
    'listing:view': {
        requireAuth: false,
        permissions: [ListingPermission.VIEW_LISTING],
        rateLimit: { windowMs: 60000, maxRequests: 100 },
        validateInput: false,
        sanitizeOutput: true,
        logAccess: false,
        auditTrail: false
    },

    // Bulk operations
    'listing:bulk': {
        requireAuth: true,
        requiredRole: UserRole.PROPERTY_MANAGER,
        permissions: [ListingPermission.BULK_OPERATIONS],
        rateLimit: { windowMs: 300000, maxRequests: 5 },
        validateInput: true,
        sanitizeOutput: true,
        logAccess: true,
        auditTrail: true
    },

    // Status management
    'listing:status': {
        requireAuth: true,
        requiredRole: UserRole.PROPERTY_MANAGER,
        permissions: [ListingPermission.MANAGE_STATUS],
        rateLimit: { windowMs: 60000, maxRequests: 30 },
        validateInput: true,
        sanitizeOutput: true,
        logAccess: true,
        auditTrail: true
    },

    // Analytics and reporting
    'listing:analytics': {
        requireAuth: true,
        requiredRole: UserRole.PROPERTY_MANAGER,
        permissions: [ListingPermission.VIEW_ANALYTICS],
        rateLimit: { windowMs: 300000, maxRequests: 10 },
        validateInput: false,
        sanitizeOutput: true,
        logAccess: true,
        auditTrail: false
    },

    // Data export
    'listing:export': {
        requireAuth: true,
        requiredRole: UserRole.PROPERTY_MANAGER,
        permissions: [ListingPermission.EXPORT_DATA],
        rateLimit: { windowMs: 300000, maxRequests: 3 },
        validateInput: false,
        sanitizeOutput: true,
        logAccess: true,
        auditTrail: true
    }
};

/**
 * Input validation rules
 */
export const VALIDATION_RULES = {
    listing: {
        title: {
            minLength: 1,
            maxLength: 200,
            pattern: /^[a-zA-Z0-9\s\-.,!?()]+$/,
            required: true
        },
        description: {
            minLength: 10,
            maxLength: 2000,
            allowHTML: true,
            required: true
        },
        price: {
            min: 1,
            max: 50000,
            decimals: 2,
            required: true
        },
        availabilityDate: {
            minDate: new Date(),
            required: false
        },
        expirationDate: {
            minDate: new Date(),
            required: false
        }
    },
    bulk: {
        maxUnits: 50,
        requiredFields: ['unitIds', 'action'],
        allowedActions: ['LIST', 'UNLIST', 'SUSPEND', 'ACTIVATE']
    }
};

/**
 * Security headers configuration
 */
export const SECURITY_HEADERS = {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';",
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
};

/**
 * Abuse prevention configuration
 */
export const ABUSE_PREVENTION = {
    // Maximum failed attempts before temporary ban
    maxFailedAttempts: 5,
    
    // Ban duration in milliseconds
    banDuration: 15 * 60 * 1000, // 15 minutes
    
    // Suspicious activity patterns
    suspiciousPatterns: {
        rapidRequests: {
            threshold: 100,
            windowMs: 60000
        },
        largePayloads: {
            maxSize: 1024 * 1024 // 1MB
        },
        repeatedFailures: {
            threshold: 10,
            windowMs: 300000 // 5 minutes
        }
    },
    
    // IP-based restrictions
    ipRestrictions: {
        enabled: true,
        whitelist: [] as string[], // Add trusted IPs here
        blacklist: [] as string[], // Add blocked IPs here
        maxRequestsPerIP: 1000,
        windowMs: 3600000 // 1 hour
    }
};

/**
 * Data retention policies
 */
export const DATA_RETENTION = {
    // Audit logs retention
    auditLogs: {
        retentionDays: 365,
        archiveAfterDays: 90
    },
    
    // Access logs retention
    accessLogs: {
        retentionDays: 30,
        archiveAfterDays: 7
    },
    
    // Error logs retention
    errorLogs: {
        retentionDays: 90,
        archiveAfterDays: 30
    },
    
    // Rate limit data retention
    rateLimitData: {
        retentionHours: 24
    }
};

/**
 * Encryption configuration
 */
export const ENCRYPTION_CONFIG = {
    // Algorithm for sensitive data encryption
    algorithm: 'aes-256-gcm',
    
    // Key derivation settings
    keyDerivation: {
        iterations: 100000,
        keyLength: 32,
        digest: 'sha256'
    },
    
    // Fields that require encryption
    encryptedFields: [
        'personalData',
        'paymentInfo',
        'sensitiveNotes'
    ]
};

/**
 * Security monitoring configuration
 */
export const MONITORING_CONFIG = {
    // Real-time alerts
    alerts: {
        enabled: true,
        thresholds: {
            failedAuthAttempts: 10,
            suspiciousActivity: 5,
            systemErrors: 20
        },
        notificationChannels: ['email', 'slack']
    },
    
    // Metrics collection
    metrics: {
        enabled: true,
        collectInterval: 60000, // 1 minute
        retentionDays: 30
    },
    
    // Health checks
    healthChecks: {
        enabled: true,
        interval: 30000, // 30 seconds
        timeout: 5000 // 5 seconds
    }
};

/**
 * Get security policy for operation
 */
export function getSecurityPolicy(operation: string): SecurityPolicy | null {
    return SECURITY_POLICIES[operation] || null;
}

/**
 * Check if operation requires authentication
 */
export function requiresAuth(operation: string): boolean {
    const policy = getSecurityPolicy(operation);
    return policy?.requireAuth ?? true;
}

/**
 * Get required role for operation
 */
export function getRequiredRole(operation: string): UserRole | null {
    const policy = getSecurityPolicy(operation);
    return policy?.requiredRole || null;
}

/**
 * Get rate limit configuration for operation
 */
export function getRateLimit(operation: string): RateLimitConfig | null {
    const policy = getSecurityPolicy(operation);
    return policy?.rateLimit || null;
}
