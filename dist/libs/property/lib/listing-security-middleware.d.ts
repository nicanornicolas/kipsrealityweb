import { NextRequest, NextResponse } from 'next/server';
import { UserRole } from './listing-auth.types';
export interface SecurityContext {
    userId: string;
    userRole: UserRole;
    isAuthenticated: boolean;
    ip: string;
    userAgent: string;
}
export interface SecurityOptions {
    requireAuth?: boolean;
    requiredRole?: UserRole;
    operation: string;
    validateData?: boolean;
    checkRateLimit?: boolean;
    logAccess?: boolean;
    preventAbuse?: boolean;
    auditInput?: boolean;
}
/**
 * Enhanced security middleware for listing operations
 */
export declare class ListingSecurityMiddleware {
    private validationService;
    private logger;
    private abusePreventionService;
    constructor();
    /**
     * Main security middleware function with comprehensive protection
     */
    validateRequest(request: NextRequest, options: SecurityOptions): Promise<{
        success: boolean;
        context?: SecurityContext;
        sanitizedData?: any;
        response?: NextResponse;
    }>;
    /**
     * Extract client IP address
     */
    private extractIP;
    /**
     * Check user authentication with enhanced security
     */
    private checkAuthentication;
    /**
     * Check user authorization with role hierarchy
     */
    private checkAuthorization;
    /**
     * Check rate limits with enhanced tracking
     */
    private checkRateLimit;
    /**
     * Validate request data with comprehensive checks
     */
    private validateRequestData;
    /**
     * Log access attempts with enhanced metadata
     */
    private logAccess;
    /**
     * Create rate limit response
     */
    private createRateLimitResponse;
    /**
     * Create ban response
     */
    private createBanResponse;
    /**
     * Add security headers to response
     */
    private createSecurityHeaders;
}
/**
 * Convenience function to create enhanced security middleware
 */
export declare function createSecurityMiddleware(options: SecurityOptions): (request: NextRequest) => Promise<{
    success: boolean;
    context?: SecurityContext;
    sanitizedData?: any;
    response?: NextResponse;
}>;
/**
 * Higher-order function to wrap API handlers with enhanced security
 */
export declare function withSecurity(handler: (request: NextRequest, context: SecurityContext, sanitizedData?: any) => Promise<NextResponse>, options: SecurityOptions): (request: NextRequest, ...args: any[]) => Promise<NextResponse<unknown>>;
