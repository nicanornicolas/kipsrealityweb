import { PaymentGateway } from '@prisma/client';
export declare enum PaymentErrorType {
    NETWORK_ERROR = "NETWORK_ERROR",
    AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR",
    VALIDATION_ERROR = "VALIDATION_ERROR",
    PAYMENT_GATEWAY_ERROR = "PAYMENT_GATEWAY_ERROR",
    FRAUD_DETECTED = "FRAUD_DETECTED",
    INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS",
    TIMEOUT_ERROR = "TIMEOUT_ERROR",
    UNKNOWN_ERROR = "UNKNOWN_ERROR"
}
export declare class PaymentError extends Error {
    readonly type: PaymentErrorType;
    readonly options: {
        userMessage?: string;
        retryable?: boolean;
        gateway?: PaymentGateway;
        transactionId?: string;
        technicalDetails?: Record<string, unknown>;
        shouldAlert?: boolean;
    };
    constructor(type: PaymentErrorType, message: string, options?: {
        userMessage?: string;
        retryable?: boolean;
        gateway?: PaymentGateway;
        transactionId?: string;
        technicalDetails?: Record<string, unknown>;
        shouldAlert?: boolean;
    });
    get userMessage(): string;
    get retryable(): boolean;
    get shouldAlert(): boolean;
    private getDefaultUserMessage;
    private isRetryableByDefault;
    private shouldAlertByDefault;
    toJSON(): {
        type: PaymentErrorType;
        message: string;
        userMessage: string;
        retryable: boolean;
        gateway: import("@prisma/client").$Enums.PaymentGateway | undefined;
        transactionId: string | undefined;
        timestamp: string;
    };
    /**
     * Creates specific error types for common payment scenarios
     */
    static createNetworkError(message: string, gateway?: PaymentGateway): PaymentError;
    static createAuthenticationError(message: string, gateway?: PaymentGateway): PaymentError;
    static createValidationError(message: string, field?: string): PaymentError;
    static createFraudError(message: string, details?: Record<string, unknown>): PaymentError;
    static createInsufficientFundsError(message: string): PaymentError;
}
export interface RetryConfig {
    maxAttempts: number;
    baseDelay: number;
    backoffMultiplier: number;
    maxDelay: number;
    retryableErrorTypes: PaymentErrorType[];
}
export declare const DEFAULT_RETRY_CONFIG: RetryConfig;
export declare class PaymentErrorHandler {
    private static instance;
    private retryConfig;
    private constructor();
    static getInstance(retryConfig?: RetryConfig): PaymentErrorHandler;
    /**
     * Wraps an async payment operation with error handling and retry logic
     */
    withRetry<T>(operation: () => Promise<T>, context: string, customConfig?: Partial<RetryConfig>): Promise<T>;
    /**
     * Normalizes various error types to PaymentError
     */
    private normalizeError;
    private getUserErrorMessage;
    private calculateDelay;
    private sleep;
    private logError;
    private sendAlert;
}
export declare const paymentErrorHandler: PaymentErrorHandler;
