/**
 * Enhanced security middleware for listing API routes
 * Implements authentication, authorization, validation, rate limiting, and abuse prevention
 */

import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from './Getcurrentuser';
import { ListingValidationService } from './listing-validation';
import { UserRole } from './listing-auth.types';
import { ListingLogger, LogCategory } from './listing-logger';
import { AbusePreventionService } from './listing-abuse-prevention';
import { SecurityAuditor } from './listing-sanitizer';
import { SECURITY_HEADERS } from './listing-security-config';

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
export class ListingSecurityMiddleware {
    private validationService: ListingValidationService;
    private logger: ListingLogger;
    private abusePreventionService: AbusePreventionService;

    constructor() {
        this.validationService = ListingValidationService.getInstance();
        this.logger = ListingLogger.getInstance();
        this.abusePreventionService = AbusePreventionService.getInstance();
    }

    /**
     * Main security middleware function with comprehensive protection
     */
    public async validateRequest(
        request: NextRequest,
        options: SecurityOptions
    ): Promise<{
        success: boolean;
        context?: SecurityContext;
        sanitizedData?: any;
        response?: NextResponse;
    }> {
        const startTime = Date.now();
        
        try {
            // Extract request metadata
            const ip = this.extractIP(request);
            const userAgent = request.headers.get('user-agent') || 'unknown';
            const payloadSize = parseInt(request.headers.get('content-length') || '0');

            // 1. IP-based abuse prevention check
            if (options.preventAbuse) {
                const ipRateLimit = this.abusePreventionService.checkIPRateLimit(ip);
                if (!ipRateLimit.allowed) {
                    return {
                        success: false,
                        response: this.createRateLimitResponse(ipRateLimit)
                    };
                }
            }

            // 2. Authentication check
            const authResult = await this.checkAuthentication(request, options.requireAuth);
            if (!authResult.success) {
                if (options.preventAbuse && authResult.context) {
                    this.abusePreventionService.recordFailedAttempt(
                        authResult.context.userId, 
                        ip, 
                        'Authentication failed'
                    );
                }
                return {
                    success: false,
                    response: authResult.response
                };
            }

            const context: SecurityContext = {
                ...authResult.context!,
                ip,
                userAgent
            };

            // 3. Ban check
            if (options.preventAbuse) {
                const banStatus = this.abusePreventionService.isBanned(context.userId, ip);
                if (banStatus.banned) {
                    return {
                        success: false,
                        response: this.createBanResponse(banStatus)
                    };
                }
            }

            // 4. Authorization check
            if (options.requiredRole) {
                const authzResult = this.checkAuthorization(context, options.requiredRole);
                if (!authzResult.success) {
                    if (options.preventAbuse) {
                        this.abusePreventionService.recordFailedAttempt(
                            context.userId, 
                            ip, 
                            'Authorization failed'
                        );
                    }
                    return {
                        success: false,
                        response: authzResult.response
                    };
                }
            }

            // 5. Suspicious activity detection
            if (options.preventAbuse) {
                const suspiciousCheck = this.abusePreventionService.detectSuspiciousActivity(
                    context.userId, 
                    ip, 
                    {
                        operation: options.operation,
                        payloadSize,
                        userAgent,
                        requestCount: 1,
                        timeWindow: 60000
                    }
                );

                if (suspiciousCheck.suspicious && suspiciousCheck.severity === 'CRITICAL') {
                    return {
                        success: false,
                        response: NextResponse.json(
                            { 
                                error: 'Suspicious activity detected',
                                reasons: suspiciousCheck.reasons
                            },
                            { status: 403 }
                        )
                    };
                }
            }

            // 6. Rate limiting check
            if (options.checkRateLimit) {
                const rateLimitResult = this.checkRateLimit(context.userId, options.operation);
                if (!rateLimitResult.success) {
                    return {
                        success: false,
                        response: rateLimitResult.response
                    };
                }
            }

            // 7. Data validation and sanitization
            let sanitizedData;
            if (options.validateData && request.method !== 'GET') {
                const validationResult = await this.validateRequestData(request, context, options);
                if (!validationResult.success) {
                    if (options.preventAbuse) {
                        this.abusePreventionService.recordFailedAttempt(
                            context.userId, 
                            ip, 
                            'Data validation failed'
                        );
                    }
                    return {
                        success: false,
                        response: validationResult.response
                    };
                }
                sanitizedData = validationResult.sanitizedData;
            }

            // 8. Input security audit
            if (options.auditInput && sanitizedData) {
                const auditResult = SecurityAuditor.auditInput(sanitizedData, {
                    operation: options.operation,
                    userId: context.userId,
                    timestamp: new Date()
                });

                if (!auditResult.passed && auditResult.riskLevel === 'CRITICAL') {
                    this.logger.error(
                        LogCategory.AUDIT,
                        'Critical security audit failure',
                        undefined,
                        {
                            userId: context.userId,
                            ip,
                            violations: auditResult.violations,
                            riskLevel: auditResult.riskLevel
                        }
                    );

                    return {
                        success: false,
                        response: NextResponse.json(
                            { 
                                error: 'Security audit failed',
                                violations: auditResult.violations
                            },
                            { status: 400 }
                        )
                    };
                }
            }

            // 9. Access logging
            if (options.logAccess) {
                await this.logAccess(request, context, options.operation, Date.now() - startTime);
            }

            return {
                success: true,
                context,
                sanitizedData
            };

        } catch (error) {
            this.logger.error(
                LogCategory.ERROR_RECOVERY,
                'Security middleware error',
                error instanceof Error ? error : undefined,
                { 
                    operation: options.operation,
                    processingTime: Date.now() - startTime
                }
            );
            
            return {
                success: false,
                response: this.createSecurityHeaders(NextResponse.json(
                    { error: 'Internal security error' },
                    { status: 500 }
                ))
            };
        }
    }

    /**
     * Extract client IP address
     */
    private extractIP(request: NextRequest): string {
        return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
               request.headers.get('x-real-ip') ||
               request.headers.get('cf-connecting-ip') ||
               'unknown';
    }

    /**
     * Check user authentication with enhanced security
     */
    private async checkAuthentication(
        request: NextRequest,
        requireAuth: boolean = true
    ): Promise<{
        success: boolean;
        context?: SecurityContext;
        response?: NextResponse;
    }> {
        if (!requireAuth) {
            return {
                success: true,
                context: {
                    userId: 'anonymous',
                    userRole: UserRole.TENANT,
                    isAuthenticated: false,
                    ip: this.extractIP(request),
                    userAgent: request.headers.get('user-agent') || 'unknown'
                }
            };
        }

        try {
            const user = await getCurrentUser(request);

            if (!user) {
                return {
                    success: false,
                    response: this.createSecurityHeaders(NextResponse.json(
                        { error: 'Authentication required' },
                        { status: 401 }
                    ))
                };
            }

            // Extract user information from JWT payload
            const userId = user.id || user.email || 'unknown';
            const userRole = (user.role as UserRole) || UserRole.TENANT;

            // Additional session validation
            if (!userId || userId === 'unknown') {
                return {
                    success: false,
                    response: this.createSecurityHeaders(NextResponse.json(
                        { error: 'Invalid session data' },
                        { status: 401 }
                    ))
                };
            }

            return {
                success: true,
                context: {
                    userId,
                    userRole,
                    isAuthenticated: true,
                    ip: this.extractIP(request),
                    userAgent: request.headers.get('user-agent') || 'unknown'
                }
            };

        } catch (error) {
            this.logger.error(
                LogCategory.PERMISSION,
                'Authentication check failed',
                error instanceof Error ? error : undefined
            );
            return {
                success: false,
                response: this.createSecurityHeaders(NextResponse.json(
                    { error: 'Authentication failed' },
                    { status: 401 }
                ))
            };
        }
    }

    /**
     * Check user authorization with role hierarchy
     */
    private checkAuthorization(
        context: SecurityContext,
        requiredRole: UserRole
    ): {
        success: boolean;
        response?: NextResponse;
    } {
        // Role hierarchy check
        const roleHierarchy = {
            [UserRole.TENANT]: 0,
            [UserRole.VENDOR]: 1,
            [UserRole.PROPERTY_MANAGER]: 2,
            [UserRole.ADMIN]: 3,
            [UserRole.SUPER_ADMIN]: 4
        };

        const userLevel = roleHierarchy[context.userRole] || 0;
        const requiredLevel = roleHierarchy[requiredRole] || 0;

        if (userLevel < requiredLevel) {
            return {
                success: false,
                response: this.createSecurityHeaders(NextResponse.json(
                    { error: 'Insufficient permissions' },
                    { status: 403 }
                ))
            };
        }

        return { success: true };
    }

    /**
     * Check rate limits with enhanced tracking
     */
    private checkRateLimit(
        userId: string,
        operation: string
    ): {
        success: boolean;
        response?: NextResponse;
    } {
        const rateLimitResult = this.validationService.checkRateLimit(userId, operation);
        
        if (!rateLimitResult.allowed) {
            const resetTime = rateLimitResult.resetTime || Date.now() + 60000;
            const retryAfter = Math.ceil((resetTime - Date.now()) / 1000);

            return {
                success: false,
                response: this.createSecurityHeaders(NextResponse.json(
                    { 
                        error: 'Rate limit exceeded',
                        retryAfter,
                        resetTime: new Date(resetTime).toISOString()
                    },
                    { 
                        status: 429,
                        headers: {
                            'Retry-After': retryAfter.toString(),
                            'X-RateLimit-Remaining': '0',
                            'X-RateLimit-Reset': resetTime.toString()
                        }
                    }
                ))
            };
        }

        return { success: true };
    }

    /**
     * Validate request data with comprehensive checks
     */
    private async validateRequestData(
        request: NextRequest,
        context: SecurityContext,
        options: SecurityOptions
    ): Promise<{
        success: boolean;
        sanitizedData?: any;
        response?: NextResponse;
    }> {
        try {
            // Parse request body with size limit
            let requestData;
            try {
                const bodyText = await request.text();
                if (bodyText.length > 1024 * 1024) { // 1MB limit
                    return {
                        success: false,
                        response: this.createSecurityHeaders(NextResponse.json(
                            { error: 'Request payload too large' },
                            { status: 413 }
                        ))
                    };
                }
                requestData = bodyText ? JSON.parse(bodyText) : {};
            } catch (error) {
                return {
                    success: false,
                    response: this.createSecurityHeaders(NextResponse.json(
                        { error: 'Invalid JSON in request body' },
                        { status: 400 }
                    ))
                };
            }

            // Extract unit IDs from URL or request data
            const url = new URL(request.url);
            const unitIds = requestData.unitIds || (url.pathname.includes('/units/') ? [url.pathname.split('/units/')[1]] : []);

            // Comprehensive validation
            const validationResult = await this.validationService.validateListingOperation({
                userId: context.userId,
                userRole: context.userRole,
                operation: options.operation,
                data: requestData,
                unitIds
            });

            if (!validationResult.isValid) {
                return {
                    success: false,
                    response: this.createSecurityHeaders(NextResponse.json(
                        { 
                            error: 'Validation failed',
                            details: validationResult.errors
                        },
                        { status: 400 }
                    ))
                };
            }

            return {
                success: true,
                sanitizedData: validationResult.sanitizedData
            };

        } catch (error) {
            this.logger.error(
                LogCategory.VALIDATION,
                'Data validation failed',
                error instanceof Error ? error : undefined,
                { operation: options.operation }
            );
            return {
                success: false,
                response: this.createSecurityHeaders(NextResponse.json(
                    { error: 'Data validation error' },
                    { status: 400 }
                ))
            };
        }
    }

    /**
     * Log access attempts with enhanced metadata
     */
    private async logAccess(
        request: NextRequest,
        context: SecurityContext,
        operation: string,
        processingTime: number
    ): Promise<void> {
        try {
            const url = new URL(request.url);
            
            this.logger.info(LogCategory.LISTING_OPERATION, 'API access', {
                userId: context.userId,
                userRole: context.userRole,
                operation,
                method: request.method,
                path: url.pathname,
                query: Object.fromEntries(url.searchParams),
                userAgent: context.userAgent,
                ip: context.ip,
                processingTime,
                timestamp: new Date().toISOString()
            });
        } catch (error) {
            // Don't fail the request if logging fails
            console.error('Access logging failed:', error);
        }
    }

    /**
     * Create rate limit response
     */
    private createRateLimitResponse(rateLimitResult: any): NextResponse {
        const resetTime = rateLimitResult.resetTime || Date.now() + 60000;
        const retryAfter = Math.ceil((resetTime - Date.now()) / 1000);

        return this.createSecurityHeaders(NextResponse.json(
            { 
                error: 'IP rate limit exceeded',
                retryAfter,
                resetTime: new Date(resetTime).toISOString()
            },
            { 
                status: 429,
                headers: {
                    'Retry-After': retryAfter.toString(),
                    'X-RateLimit-Remaining': '0',
                    'X-RateLimit-Reset': resetTime.toString()
                }
            }
        ));
    }

    /**
     * Create ban response
     */
    private createBanResponse(banStatus: any): NextResponse {
        return this.createSecurityHeaders(NextResponse.json(
            { 
                error: 'Access denied',
                reason: banStatus.reason,
                expiresAt: banStatus.expiresAt?.toISOString(),
                permanent: banStatus.permanent
            },
            { status: 403 }
        ));
    }

    /**
     * Add security headers to response
     */
    private createSecurityHeaders(response: NextResponse): NextResponse {
        Object.entries(SECURITY_HEADERS).forEach(([key, value]) => {
            response.headers.set(key, value);
        });
        return response;
    }
}

/**
 * Convenience function to create enhanced security middleware
 */
export function createSecurityMiddleware(options: SecurityOptions) {
    const middleware = new ListingSecurityMiddleware();
    
    return async (request: NextRequest) => {
        return await middleware.validateRequest(request, options);
    };
}

/**
 * Higher-order function to wrap API handlers with enhanced security
 */
export function withSecurity(
    handler: (request: NextRequest, context: SecurityContext, sanitizedData?: any) => Promise<NextResponse>,
    options: SecurityOptions
) {
    return async (request: NextRequest, ...args: any[]) => {
        const middleware = new ListingSecurityMiddleware();
        const result = await middleware.validateRequest(request, {
            ...options,
            preventAbuse: true,
            auditInput: true
        });
        
        if (!result.success) {
            return result.response!;
        }
        
        try {
            const response = await handler(request, result.context!, result.sanitizedData);
            
            // Add security headers to successful responses
            Object.entries(SECURITY_HEADERS).forEach(([key, value]) => {
                response.headers.set(key, value);
            });
            
            return response;
        } catch (error) {
            const logger = ListingLogger.getInstance();
            logger.error(
                LogCategory.ERROR_RECOVERY,
                'Handler execution failed',
                error instanceof Error ? error : undefined,
                { 
                    operation: options.operation,
                    userId: result.context?.userId
                }
            );
            
            return NextResponse.json(
                { error: 'Internal server error' },
                { status: 500 }
            );
        }
    };
}
