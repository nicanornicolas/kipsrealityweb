import { NextResponse } from 'next/server';
export declare enum ListingErrorType {
    VALIDATION_ERROR = "VALIDATION_ERROR",
    PERMISSION_ERROR = "PERMISSION_ERROR",
    NOT_FOUND_ERROR = "NOT_FOUND_ERROR",
    CONFLICT_ERROR = "CONFLICT_ERROR",
    DATABASE_ERROR = "DATABASE_ERROR",
    NETWORK_ERROR = "NETWORK_ERROR",
    RATE_LIMIT_ERROR = "RATE_LIMIT_ERROR",
    EXTERNAL_SERVICE_ERROR = "EXTERNAL_SERVICE_ERROR",
    UNKNOWN_ERROR = "UNKNOWN_ERROR"
}
export declare enum ErrorSeverity {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH",
    CRITICAL = "CRITICAL"
}
export declare class ListingError extends Error {
    readonly type: ListingErrorType;
    readonly severity: ErrorSeverity;
    readonly code: string;
    readonly userMessage: string;
    readonly technicalDetails: any;
    readonly retryable: boolean;
    readonly timestamp: Date;
    constructor(type: ListingErrorType, message: string, options?: {
        severity?: ErrorSeverity;
        code?: string;
        userMessage?: string;
        technicalDetails?: any;
        retryable?: boolean;
        cause?: Error;
    });
    private getDefaultUserMessage;
    private isRetryableByDefault;
    toJSON(): {
        name: string;
        type: ListingErrorType;
        severity: ErrorSeverity;
        code: string;
        message: string;
        userMessage: string;
        technicalDetails: any;
        retryable: boolean;
        timestamp: Date;
        stack: string | undefined;
    };
}
export interface RetryConfig {
    maxAttempts: number;
    baseDelay: number;
    maxDelay: number;
    backoffMultiplier: number;
    retryableErrors: ListingErrorType[];
}
export declare const DEFAULT_RETRY_CONFIG: RetryConfig;
export declare class ListingErrorHandler {
    private static instance;
    private retryConfig;
    private constructor();
    static getInstance(retryConfig?: RetryConfig): ListingErrorHandler;
    /**
     * Wraps an async operation with error handling and retry logic
     */
    withRetry<T>(operation: () => Promise<T>, context: string, customConfig?: Partial<RetryConfig>): Promise<T>;
    /**
     * Normalizes any error into a ListingError
     */
    normalizeError(error: any, context?: string): ListingError;
    /**
     * Handles Prisma-specific errors
     */
    private handlePrismaError;
    /**
     * Creates an HTTP response for an error
     */
    createErrorResponse(error: ListingError): NextResponse;
    /**
     * Maps error types to HTTP status codes
     */
    private getHttpStatusCode;
    /**
     * Logs errors with appropriate level and context
     */
    private logError;
    /**
     * Calculates exponential backoff delay
     */
    private calculateDelay;
    /**
     * Sleep utility for retry delays
     */
    private sleep;
}
export declare const listingErrorHandler: ListingErrorHandler;
/**
 * Decorator for API route handlers to provide consistent error handling
 */
export declare function withErrorHandling(handler: Function): (request: Request, context?: any) => Promise<any>;
/**
 * Validates required fields and throws appropriate errors
 */
export declare function validateRequiredFields(data: Record<string, any>, requiredFields: string[], context?: string): void;
/**
 * Validates user permissions for listing operations
 */
export declare function validatePermissions(userRole: string, requiredRoles: string[], operation: string): void;
/**
 * Creates a not found error for specific resources
 */
export declare function createNotFoundError(resourceType: string, resourceId: string): ListingError;
/**
 * Creates a conflict error for state violations
 */
export declare function createConflictError(operation: string, currentState: string, requiredState: string): ListingError;
