/**
 * Comprehensive Logging and Monitoring for Listing Management System
 * Provides structured logging, performance monitoring, and debugging capabilities
 */
export declare enum LogLevel {
    DEBUG = "DEBUG",
    INFO = "INFO",
    WARN = "WARN",
    ERROR = "ERROR",
    CRITICAL = "CRITICAL"
}
export declare enum LogCategory {
    LISTING_OPERATION = "LISTING_OPERATION",
    BULK_OPERATION = "BULK_OPERATION",
    STATUS_CHANGE = "STATUS_CHANGE",
    VALIDATION = "VALIDATION",
    PERMISSION = "PERMISSION",
    PERFORMANCE = "PERFORMANCE",
    AUDIT = "AUDIT",
    INTEGRATION = "INTEGRATION",
    ERROR_RECOVERY = "ERROR_RECOVERY"
}
export interface LogEntry {
    timestamp: Date;
    level: LogLevel;
    category: LogCategory;
    message: string;
    context?: Record<string, any>;
    userId?: string;
    organizationId?: string;
    listingId?: string;
    unitId?: string;
    propertyId?: string;
    operationId?: string;
    duration?: number;
    error?: Error;
    stack?: string;
}
export interface PerformanceMetrics {
    operationName: string;
    startTime: number;
    endTime?: number;
    duration?: number;
    success: boolean;
    errorType?: string;
    metadata?: Record<string, any>;
}
/**
 * Structured logger for listing management operations
 */
export declare class ListingLogger {
    private static instance;
    private performanceMetrics;
    private constructor();
    static getInstance(): ListingLogger;
    /**
     * Logs a structured entry
     */
    log(entry: Omit<LogEntry, 'timestamp'>): void;
    /**
     * Convenience methods for different log levels
     */
    debug(category: LogCategory, message: string, context?: Record<string, any>): void;
    info(category: LogCategory, message: string, context?: Record<string, any>): void;
    warn(category: LogCategory, message: string, context?: Record<string, any>): void;
    error(category: LogCategory, message: string, error?: Error, context?: Record<string, any>): void;
    critical(category: LogCategory, message: string, error?: Error, context?: Record<string, any>): void;
    /**
     * Logs listing operation events
     */
    logListingOperation(operation: string, listingId: string, unitId: string, userId: string, success: boolean, details?: Record<string, any>): void;
    /**
     * Logs bulk operation events
     */
    logBulkOperation(operation: string, unitIds: string[], userId: string, results: {
        successful: number;
        failed: number;
    }, details?: Record<string, any>): void;
    /**
     * Logs status change events
     */
    logStatusChange(listingId: string, unitId: string, previousStatus: string, newStatus: string, userId: string, reason?: string): void;
    /**
     * Logs validation events
     */
    logValidation(operation: string, success: boolean, errors?: string[], context?: Record<string, any>): void;
    /**
     * Logs permission check events
     */
    logPermissionCheck(operation: string, userId: string, userRole: string, requiredRoles: string[], granted: boolean): void;
    /**
     * Starts performance tracking for an operation
     */
    startPerformanceTracking(operationName: string, metadata?: Record<string, any>): string;
    /**
     * Ends performance tracking for an operation
     */
    endPerformanceTracking(operationId: string, success: boolean, errorType?: string, additionalMetadata?: Record<string, any>): PerformanceMetrics | null;
    /**
     * Logs integration events with external systems
     */
    logIntegration(system: string, operation: string, success: boolean, duration?: number, error?: Error, context?: Record<string, any>): void;
    /**
     * Logs error recovery attempts
     */
    logErrorRecovery(operation: string, attempt: number, maxAttempts: number, error: Error, willRetry: boolean, context?: Record<string, any>): void;
    /**
     * Outputs log entry to console with formatting
     */
    private outputLog;
    /**
     * Sends log entry to external monitoring service
     */
    private sendToMonitoringService;
    /**
     * Gets performance statistics
     */
    getPerformanceStats(): {
        activeOperations: number;
        operationNames: string[];
    };
    /**
     * Clears old performance metrics (cleanup)
     */
    cleanupOldMetrics(): void;
}
export declare const listingLogger: ListingLogger;
/**
 * Decorator for automatic performance tracking
 */
export declare function trackPerformance(operationName?: string): (target: any, propertyName: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
/**
 * Utility function for logging with context
 */
export declare function createContextLogger(baseContext: Record<string, any>): {
    debug: (category: LogCategory, message: string, additionalContext?: Record<string, any>) => void;
    info: (category: LogCategory, message: string, additionalContext?: Record<string, any>) => void;
    warn: (category: LogCategory, message: string, additionalContext?: Record<string, any>) => void;
    error: (category: LogCategory, message: string, error?: Error, additionalContext?: Record<string, any>) => void;
    critical: (category: LogCategory, message: string, error?: Error, additionalContext?: Record<string, any>) => void;
};
