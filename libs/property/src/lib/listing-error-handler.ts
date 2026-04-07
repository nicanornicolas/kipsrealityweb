/**
 * Comprehensive Error Handling for Listing Management System
 * Provides error boundaries, retry mechanisms, user-friendly messages,
 * and comprehensive logging for debugging and monitoring
 */

import { NextResponse } from 'next/server';

// Error types for listing operations
export enum ListingErrorType {
    VALIDATION_ERROR = 'VALIDATION_ERROR',
    PERMISSION_ERROR = 'PERMISSION_ERROR',
    NOT_FOUND_ERROR = 'NOT_FOUND_ERROR',
    CONFLICT_ERROR = 'CONFLICT_ERROR',
    DATABASE_ERROR = 'DATABASE_ERROR',
    NETWORK_ERROR = 'NETWORK_ERROR',
    RATE_LIMIT_ERROR = 'RATE_LIMIT_ERROR',
    EXTERNAL_SERVICE_ERROR = 'EXTERNAL_SERVICE_ERROR',
    UNKNOWN_ERROR = 'UNKNOWN_ERROR'
}

// Error severity levels
export enum ErrorSeverity {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
    CRITICAL = 'CRITICAL'
}

// Custom error class for listing operations
export class ListingError extends Error {
    public readonly type: ListingErrorType;
    public readonly severity: ErrorSeverity;
    public readonly code: string;
    public readonly userMessage: string;
    public readonly technicalDetails: any;
    public readonly retryable: boolean;
    public readonly timestamp: Date;

    constructor(
        type: ListingErrorType,
        message: string,
        options: {
            severity?: ErrorSeverity;
            code?: string;
            userMessage?: string;
            technicalDetails?: any;
            retryable?: boolean;
            cause?: Error;
        } = {}
    ) {
        super(message);
        this.name = 'ListingError';
        this.type = type;
        this.severity = options.severity || ErrorSeverity.MEDIUM;
        this.code = options.code || type;
        this.userMessage = options.userMessage || this.getDefaultUserMessage(type);
        this.technicalDetails = options.technicalDetails;
        this.retryable = options.retryable || this.isRetryableByDefault(type);
        this.timestamp = new Date();

        if (options.cause) {
            this.cause = options.cause;
        }
    }

    private getDefaultUserMessage(type: ListingErrorType): string {
        switch (type) {
            case ListingErrorType.VALIDATION_ERROR:
                return 'Please check your input and try again.';
            case ListingErrorType.PERMISSION_ERROR:
                return 'You do not have permission to perform this action.';
            case ListingErrorType.NOT_FOUND_ERROR:
                return 'The requested item could not be found.';
            case ListingErrorType.CONFLICT_ERROR:
                return 'This action conflicts with the current state. Please refresh and try again.';
            case ListingErrorType.DATABASE_ERROR:
                return 'A database error occurred. Please try again later.';
            case ListingErrorType.NETWORK_ERROR:
                return 'Network connection failed. Please check your connection and try again.';
            case ListingErrorType.RATE_LIMIT_ERROR:
                return 'Too many requests. Please wait a moment and try again.';
            case ListingErrorType.EXTERNAL_SERVICE_ERROR:
                return 'An external service is temporarily unavailable. Please try again later.';
            default:
                return 'An unexpected error occurred. Please try again or contact support.';
        }
    }

    private isRetryableByDefault(type: ListingErrorType): boolean {
        return [
            ListingErrorType.DATABASE_ERROR,
            ListingErrorType.NETWORK_ERROR,
            ListingErrorType.EXTERNAL_SERVICE_ERROR
        ].includes(type);
    }

    toJSON() {
        return {
            name: this.name,
            type: this.type,
            severity: this.severity,
            code: this.code,
            message: this.message,
            userMessage: this.userMessage,
            technicalDetails: this.technicalDetails,
            retryable: this.retryable,
            timestamp: this.timestamp,
            stack: this.stack
        };
    }
}

// Retry configuration
export interface RetryConfig {
    maxAttempts: number;
    baseDelay: number; // milliseconds
    maxDelay: number; // milliseconds
    backoffMultiplier: number;
    retryableErrors: ListingErrorType[];
}

export const DEFAULT_RETRY_CONFIG: RetryConfig = {
    maxAttempts: 3,
    baseDelay: 1000,
    maxDelay: 10000,
    backoffMultiplier: 2,
    retryableErrors: [
        ListingErrorType.DATABASE_ERROR,
        ListingErrorType.NETWORK_ERROR,
        ListingErrorType.EXTERNAL_SERVICE_ERROR
    ]
};

// Error handler class
export class ListingErrorHandler {
    private static instance: ListingErrorHandler;
    private retryConfig: RetryConfig;

    private constructor(retryConfig: RetryConfig = DEFAULT_RETRY_CONFIG) {
        this.retryConfig = retryConfig;
    }

    public static getInstance(retryConfig?: RetryConfig): ListingErrorHandler {
        if (!ListingErrorHandler.instance) {
            ListingErrorHandler.instance = new ListingErrorHandler(retryConfig);
        }
        return ListingErrorHandler.instance;
    }

    /**
     * Wraps an async operation with error handling and retry logic
     */
    public async withRetry<T>(
        operation: () => Promise<T>,
        context: string,
        customConfig?: Partial<RetryConfig>
    ): Promise<T> {
        const config = { ...this.retryConfig, ...customConfig };
        let lastError: Error;

        for (let attempt = 1; attempt <= config.maxAttempts; attempt++) {
            try {
                return await operation();
            } catch (error) {
                lastError = error as Error;
                const listingError = this.normalizeError(error, context);

                // Log the error
                this.logError(listingError, { attempt, context });

                // Check if we should retry
                if (
                    attempt < config.maxAttempts &&
                    listingError.retryable &&
                    config.retryableErrors.includes(listingError.type)
                ) {
                    const delay = this.calculateDelay(attempt, config);
                    await this.sleep(delay);
                    continue;
                }

                // No more retries, throw the error
                throw listingError;
            }
        }

        throw this.normalizeError(lastError!, context);
    }

    /**
     * Normalizes any error into a ListingError
     */
    public normalizeError(error: any, context?: string): ListingError {
        if (error instanceof ListingError) {
            return error;
        }

        // Handle Prisma errors
        if (error.code && typeof error.code === 'string') {
            return this.handlePrismaError(error, context);
        }

        // Handle network errors
        if (error.name === 'NetworkError' || error.code === 'ECONNREFUSED') {
            return new ListingError(
                ListingErrorType.NETWORK_ERROR,
                `Network error in ${context}: ${error.message}`,
                {
                    severity: ErrorSeverity.HIGH,
                    technicalDetails: { originalError: error },
                    cause: error
                }
            );
        }

        // Handle validation errors
        if (error.name === 'ValidationError' || error.message?.includes('validation')) {
            return new ListingError(
                ListingErrorType.VALIDATION_ERROR,
                `Validation error in ${context}: ${error.message}`,
                {
                    severity: ErrorSeverity.LOW,
                    technicalDetails: { originalError: error },
                    cause: error
                }
            );
        }

        // Default to unknown error
        return new ListingError(
            ListingErrorType.UNKNOWN_ERROR,
            `Unknown error in ${context}: ${error.message || 'Unknown error'}`,
            {
                severity: ErrorSeverity.MEDIUM,
                technicalDetails: { originalError: error },
                cause: error
            }
        );
    }

    /**
     * Handles Prisma-specific errors
     */
    private handlePrismaError(error: any, context?: string): ListingError {
        switch (error.code) {
            case 'P2002': // Unique constraint violation
                return new ListingError(
                    ListingErrorType.CONFLICT_ERROR,
                    `Duplicate entry in ${context}`,
                    {
                        severity: ErrorSeverity.LOW,
                        userMessage: 'This item already exists. Please use a different value.',
                        technicalDetails: { prismaError: error },
                        retryable: false
                    }
                );

            case 'P2025': // Record not found
                return new ListingError(
                    ListingErrorType.NOT_FOUND_ERROR,
                    `Record not found in ${context}`,
                    {
                        severity: ErrorSeverity.LOW,
                        technicalDetails: { prismaError: error },
                        retryable: false
                    }
                );

            case 'P2003': // Foreign key constraint violation
                return new ListingError(
                    ListingErrorType.VALIDATION_ERROR,
                    `Invalid reference in ${context}`,
                    {
                        severity: ErrorSeverity.MEDIUM,
                        userMessage: 'Invalid reference. Please check your input.',
                        technicalDetails: { prismaError: error },
                        retryable: false
                    }
                );

            case 'P1001': // Database connection error
            case 'P1002': // Database timeout
                return new ListingError(
                    ListingErrorType.DATABASE_ERROR,
                    `Database connection error in ${context}`,
                    {
                        severity: ErrorSeverity.HIGH,
                        technicalDetails: { prismaError: error },
                        retryable: true
                    }
                );

            default:
                return new ListingError(
                    ListingErrorType.DATABASE_ERROR,
                    `Database error in ${context}: ${error.message}`,
                    {
                        severity: ErrorSeverity.MEDIUM,
                        technicalDetails: { prismaError: error }
                    }
                );
        }
    }

    /**
     * Creates an HTTP response for an error
     */
    public createErrorResponse(error: ListingError): NextResponse {
        const statusCode = this.getHttpStatusCode(error.type);
        
        const responseBody = {
            success: false,
            error: {
                type: error.type,
                code: error.code,
                message: error.userMessage,
                retryable: error.retryable,
                timestamp: error.timestamp
            },
            ...(process.env.NODE_ENV === 'development' && {
                debug: {
                    technicalMessage: error.message,
                    technicalDetails: error.technicalDetails,
                    stack: error.stack
                }
            })
        };

        return NextResponse.json(responseBody, { status: statusCode });
    }

    /**
     * Maps error types to HTTP status codes
     */
    private getHttpStatusCode(errorType: ListingErrorType): number {
        switch (errorType) {
            case ListingErrorType.VALIDATION_ERROR:
                return 400;
            case ListingErrorType.PERMISSION_ERROR:
                return 403;
            case ListingErrorType.NOT_FOUND_ERROR:
                return 404;
            case ListingErrorType.CONFLICT_ERROR:
                return 409;
            case ListingErrorType.RATE_LIMIT_ERROR:
                return 429;
            case ListingErrorType.DATABASE_ERROR:
            case ListingErrorType.EXTERNAL_SERVICE_ERROR:
                return 503;
            case ListingErrorType.NETWORK_ERROR:
                return 502;
            default:
                return 500;
        }
    }

    /**
     * Logs errors with appropriate level and context
     */
    private logError(error: ListingError, context?: any): void {
        const logData = {
            timestamp: error.timestamp,
            type: error.type,
            severity: error.severity,
            code: error.code,
            message: error.message,
            userMessage: error.userMessage,
            technicalDetails: error.technicalDetails,
            context,
            stack: error.stack
        };

        switch (error.severity) {
            case ErrorSeverity.CRITICAL:
                console.error('CRITICAL ERROR:', logData);
                // In production, send to error monitoring service
                break;
            case ErrorSeverity.HIGH:
                console.error('HIGH SEVERITY ERROR:', logData);
                break;
            case ErrorSeverity.MEDIUM:
                console.warn('MEDIUM SEVERITY ERROR:', logData);
                break;
            case ErrorSeverity.LOW:
                console.info('LOW SEVERITY ERROR:', logData);
                break;
        }
    }

    /**
     * Calculates exponential backoff delay
     */
    private calculateDelay(attempt: number, config: RetryConfig): number {
        const delay = config.baseDelay * Math.pow(config.backoffMultiplier, attempt - 1);
        return Math.min(delay, config.maxDelay);
    }

    /**
     * Sleep utility for retry delays
     */
    private sleep(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Utility functions for common error scenarios
export const listingErrorHandler = ListingErrorHandler.getInstance();

/**
 * Decorator for API route handlers to provide consistent error handling
 */
export function withErrorHandling(handler: Function) {
    return async (request: Request, context?: any) => {
        try {
            return await handler(request, context);
        } catch (error) {
            const listingError = listingErrorHandler.normalizeError(
                error,
                `API Handler: ${handler.name || 'anonymous'}`
            );
            return listingErrorHandler.createErrorResponse(listingError);
        }
    };
}

/**
 * Validates required fields and throws appropriate errors
 */
export function validateRequiredFields(
    data: Record<string, any>,
    requiredFields: string[],
    context: string = 'validation'
): void {
    const missingFields = requiredFields.filter(field => 
        data[field] === undefined || data[field] === null || data[field] === ''
    );

    if (missingFields.length > 0) {
        throw new ListingError(
            ListingErrorType.VALIDATION_ERROR,
            `Missing required fields in ${context}: ${missingFields.join(', ')}`,
            {
                severity: ErrorSeverity.LOW,
                userMessage: `Please provide the following required fields: ${missingFields.join(', ')}`,
                technicalDetails: { missingFields, providedData: data },
                retryable: false
            }
        );
    }
}

/**
 * Validates user permissions for listing operations
 */
export function validatePermissions(
    userRole: string,
    requiredRoles: string[],
    operation: string
): void {
    if (!requiredRoles.includes(userRole)) {
        throw new ListingError(
            ListingErrorType.PERMISSION_ERROR,
            `Insufficient permissions for ${operation}`,
            {
                severity: ErrorSeverity.MEDIUM,
                userMessage: `You do not have permission to ${operation}. Please contact your administrator.`,
                technicalDetails: { userRole, requiredRoles, operation },
                retryable: false
            }
        );
    }
}

/**
 * Creates a not found error for specific resources
 */
export function createNotFoundError(resourceType: string, resourceId: string): ListingError {
    return new ListingError(
        ListingErrorType.NOT_FOUND_ERROR,
        `${resourceType} not found: ${resourceId}`,
        {
            severity: ErrorSeverity.LOW,
            userMessage: `The requested ${resourceType.toLowerCase()} could not be found.`,
            technicalDetails: { resourceType, resourceId },
            retryable: false
        }
    );
}

/**
 * Creates a conflict error for state violations
 */
export function createConflictError(
    operation: string,
    currentState: string,
    requiredState: string
): ListingError {
    return new ListingError(
        ListingErrorType.CONFLICT_ERROR,
        `Cannot ${operation}: current state is ${currentState}, required state is ${requiredState}`,
        {
            severity: ErrorSeverity.MEDIUM,
            userMessage: `This action cannot be performed in the current state. Please refresh and try again.`,
            technicalDetails: { operation, currentState, requiredState },
            retryable: false
        }
    );
}