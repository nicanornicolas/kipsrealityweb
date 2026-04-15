/**
 * Advanced input sanitization and security utilities for listing operations
 * Provides comprehensive protection against XSS, injection attacks, and data corruption
 */
/**
 * SQL injection prevention utilities
 */
export declare class SQLSanitizer {
    private static readonly SQL_INJECTION_PATTERNS;
    /**
     * Detects potential SQL injection attempts
     */
    static containsSQLInjection(input: string): boolean;
    /**
     * Sanitizes input to prevent SQL injection
     */
    static sanitize(input: string): string;
}
/**
 * XSS prevention utilities
 */
export declare class XSSSanitizer {
    private static readonly XSS_PATTERNS;
    private static readonly ALLOWED_TAGS;
    /**
     * Detects potential XSS attempts
     */
    static containsXSS(input: string): boolean;
    /**
     * Sanitizes HTML content to prevent XSS
     */
    static sanitizeHTML(input: string): string;
    /**
     * Strips all HTML tags
     */
    static stripHTML(input: string): string;
}
/**
 * Path traversal prevention utilities
 */
export declare class PathSanitizer {
    static readonly PATH_TRAVERSAL_PATTERNS: RegExp[];
    /**
     * Detects path traversal attempts
     */
    static containsPathTraversal(input: string): boolean;
    /**
     * Sanitizes file paths
     */
    static sanitizePath(input: string): string;
}
/**
 * Comprehensive input sanitizer
 */
export declare class ListingSanitizer {
    /**
     * Sanitizes text input with multiple security checks
     */
    static sanitizeText(input: string, options?: {
        maxLength?: number;
        allowHTML?: boolean;
        strictMode?: boolean;
    }): string;
    /**
     * Sanitizes numeric input
     */
    static sanitizeNumber(input: any, options?: {
        min?: number;
        max?: number;
        decimals?: number;
        allowNegative?: boolean;
    }): number | null;
    /**
     * Sanitizes email addresses
     */
    static sanitizeEmail(input: string): string | null;
    /**
     * Sanitizes phone numbers
     */
    static sanitizePhone(input: string): string | null;
    /**
     * Sanitizes URLs
     */
    static sanitizeURL(input: string): string | null;
    /**
     * Sanitizes date inputs
     */
    static sanitizeDate(input: any): Date | null;
    /**
     * Sanitizes boolean inputs
     */
    static sanitizeBoolean(input: any): boolean;
    /**
     * Sanitizes array inputs
     */
    static sanitizeArray(input: any, itemSanitizer: (item: any) => any): any[];
    /**
     * Comprehensive object sanitization
     */
    static sanitizeObject(input: any, schema: Record<string, (value: any) => any>): any;
}
/**
 * Security audit utilities
 */
export declare class SecurityAuditor {
    /**
     * Performs comprehensive security audit on input data
     */
    static auditInput(input: any, context: {
        operation: string;
        userId: string;
        timestamp: Date;
    }): {
        passed: boolean;
        violations: string[];
        riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
    };
}
