/**
 * Comprehensive Logging and Monitoring for Listing Management System
 * Provides structured logging, performance monitoring, and debugging capabilities
 */

export enum LogLevel {
    DEBUG = 'DEBUG',
    INFO = 'INFO',
    WARN = 'WARN',
    ERROR = 'ERROR',
    CRITICAL = 'CRITICAL'
}

export enum LogCategory {
    LISTING_OPERATION = 'LISTING_OPERATION',
    BULK_OPERATION = 'BULK_OPERATION',
    STATUS_CHANGE = 'STATUS_CHANGE',
    VALIDATION = 'VALIDATION',
    PERMISSION = 'PERMISSION',
    PERFORMANCE = 'PERFORMANCE',
    AUDIT = 'AUDIT',
    INTEGRATION = 'INTEGRATION',
    ERROR_RECOVERY = 'ERROR_RECOVERY'
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
export class ListingLogger {
    private static instance: ListingLogger;
    private performanceMetrics: Map<string, PerformanceMetrics> = new Map();

    private constructor() {}

    public static getInstance(): ListingLogger {
        if (!ListingLogger.instance) {
            ListingLogger.instance = new ListingLogger();
        }
        return ListingLogger.instance;
    }

    /**
     * Logs a structured entry
     */
    public log(entry: Omit<LogEntry, 'timestamp'>): void {
        const logEntry: LogEntry = {
            ...entry,
            timestamp: new Date()
        };

        // Format and output log entry
        this.outputLog(logEntry);

        // Send to monitoring service in production
        if (process.env.NODE_ENV === 'production') {
            this.sendToMonitoringService(logEntry);
        }
    }

    /**
     * Convenience methods for different log levels
     */
    public debug(
        category: LogCategory,
        message: string,
        context?: Record<string, any>
    ): void {
        this.log({ level: LogLevel.DEBUG, category, message, context });
    }

    public info(
        category: LogCategory,
        message: string,
        context?: Record<string, any>
    ): void {
        this.log({ level: LogLevel.INFO, category, message, context });
    }

    public warn(
        category: LogCategory,
        message: string,
        context?: Record<string, any>
    ): void {
        this.log({ level: LogLevel.WARN, category, message, context });
    }

    public error(
        category: LogCategory,
        message: string,
        error?: Error,
        context?: Record<string, any>
    ): void {
        this.log({
            level: LogLevel.ERROR,
            category,
            message,
            error,
            stack: error?.stack,
            context
        });
    }

    public critical(
        category: LogCategory,
        message: string,
        error?: Error,
        context?: Record<string, any>
    ): void {
        this.log({
            level: LogLevel.CRITICAL,
            category,
            message,
            error,
            stack: error?.stack,
            context
        });
    }

    /**
     * Logs listing operation events
     */
    public logListingOperation(
        operation: string,
        listingId: string,
        unitId: string,
        userId: string,
        success: boolean,
        details?: Record<string, any>
    ): void {
        this.info(LogCategory.LISTING_OPERATION, `Listing ${operation}`, {
            operation,
            listingId,
            unitId,
            userId,
            success,
            ...details
        });
    }

    /**
     * Logs bulk operation events
     */
    public logBulkOperation(
        operation: string,
        unitIds: string[],
        userId: string,
        results: { successful: number; failed: number },
        details?: Record<string, any>
    ): void {
        this.info(LogCategory.BULK_OPERATION, `Bulk ${operation}`, {
            operation,
            unitCount: unitIds.length,
            unitIds,
            userId,
            results,
            ...details
        });
    }

    /**
     * Logs status change events
     */
    public logStatusChange(
        listingId: string,
        unitId: string,
        previousStatus: string,
        newStatus: string,
        userId: string,
        reason?: string
    ): void {
        this.info(LogCategory.STATUS_CHANGE, 'Listing status changed', {
            listingId,
            unitId,
            previousStatus,
            newStatus,
            userId,
            reason
        });
    }

    /**
     * Logs validation events
     */
    public logValidation(
        operation: string,
        success: boolean,
        errors?: string[],
        context?: Record<string, any>
    ): void {
        const level = success ? LogLevel.DEBUG : LogLevel.WARN;
        this.log({
            level,
            category: LogCategory.VALIDATION,
            message: `Validation ${success ? 'passed' : 'failed'} for ${operation}`,
            context: { operation, success, errors, ...context }
        });
    }

    /**
     * Logs permission check events
     */
    public logPermissionCheck(
        operation: string,
        userId: string,
        userRole: string,
        requiredRoles: string[],
        granted: boolean
    ): void {
        const level = granted ? LogLevel.DEBUG : LogLevel.WARN;
        this.log({
            level,
            category: LogCategory.PERMISSION,
            message: `Permission ${granted ? 'granted' : 'denied'} for ${operation}`,
            context: { operation, userId, userRole, requiredRoles, granted }
        });
    }

    /**
     * Starts performance tracking for an operation
     */
    public startPerformanceTracking(
        operationName: string,
        metadata?: Record<string, any>
    ): string {
        const operationId = `${operationName}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        
        this.performanceMetrics.set(operationId, {
            operationName,
            startTime: performance.now(),
            success: false,
            metadata
        });

        this.debug(LogCategory.PERFORMANCE, `Started tracking: ${operationName}`, {
            operationId,
            operationName,
            metadata
        });

        return operationId;
    }

    /**
     * Ends performance tracking for an operation
     */
    public endPerformanceTracking(
        operationId: string,
        success: boolean,
        errorType?: string,
        additionalMetadata?: Record<string, any>
    ): PerformanceMetrics | null {
        const metrics = this.performanceMetrics.get(operationId);
        if (!metrics) {
            this.warn(LogCategory.PERFORMANCE, `Performance tracking not found for operation: ${operationId}`);
            return null;
        }

        const endTime = performance.now();
        const duration = endTime - metrics.startTime;

        const completedMetrics: PerformanceMetrics = {
            ...metrics,
            endTime,
            duration,
            success,
            errorType,
            metadata: { ...metrics.metadata, ...additionalMetadata }
        };

        this.performanceMetrics.delete(operationId);

        // Log performance results
        const level = success ? LogLevel.INFO : LogLevel.WARN;
        this.log({
            level,
            category: LogCategory.PERFORMANCE,
            message: `Completed: ${metrics.operationName}`,
            context: {
                operationId,
                operationName: metrics.operationName,
                duration: Math.round(duration),
                success,
                errorType,
                ...completedMetrics.metadata
            },
            duration: Math.round(duration)
        });

        // Alert on slow operations
        if (duration > 5000) { // 5 seconds
            this.warn(LogCategory.PERFORMANCE, `Slow operation detected: ${metrics.operationName}`, {
                operationId,
                duration: Math.round(duration),
                threshold: 5000
            });
        }

        return completedMetrics;
    }

    /**
     * Logs integration events with external systems
     */
    public logIntegration(
        system: string,
        operation: string,
        success: boolean,
        duration?: number,
        error?: Error,
        context?: Record<string, any>
    ): void {
        const level = success ? LogLevel.INFO : LogLevel.ERROR;
        this.log({
            level,
            category: LogCategory.INTEGRATION,
            message: `${system} integration: ${operation}`,
            error,
            duration,
            context: { system, operation, success, ...context }
        });
    }

    /**
     * Logs error recovery attempts
     */
    public logErrorRecovery(
        operation: string,
        attempt: number,
        maxAttempts: number,
        error: Error,
        willRetry: boolean,
        context?: Record<string, any>
    ): void {
        this.warn(LogCategory.ERROR_RECOVERY, `Error recovery attempt ${attempt}/${maxAttempts}`, {
            operation,
            attempt,
            maxAttempts,
            error: error.message,
            willRetry,
            ...context
        });
    }

    /**
     * Outputs log entry to console with formatting
     */
    private outputLog(entry: LogEntry): void {
        const timestamp = entry.timestamp.toISOString();
        const logMessage = `[${timestamp}] [${entry.level}] [${entry.category}] ${entry.message}`;

        // Color coding for different log levels
        switch (entry.level) {
            case LogLevel.DEBUG:
                console.debug(logMessage, entry.context || '');
                break;
            case LogLevel.INFO:
                console.info(logMessage, entry.context || '');
                break;
            case LogLevel.WARN:
                console.warn(logMessage, entry.context || '');
                break;
            case LogLevel.ERROR:
                console.error(logMessage, entry.error || '', entry.context || '');
                break;
            case LogLevel.CRITICAL:
                console.error('🚨 CRITICAL:', logMessage, entry.error || '', entry.context || '');
                break;
        }
    }

    /**
     * Sends log entry to external monitoring service
     */
    private sendToMonitoringService(entry: LogEntry): void {
        // This would integrate with services like DataDog, New Relic, Sentry, etc.
        // For now, we'll just prepare the data structure
        const monitoringData = {
            timestamp: entry.timestamp.toISOString(),
            level: entry.level,
            category: entry.category,
            message: entry.message,
            context: entry.context,
            userId: entry.userId,
            organizationId: entry.organizationId,
            listingId: entry.listingId,
            unitId: entry.unitId,
            propertyId: entry.propertyId,
            operationId: entry.operationId,
            duration: entry.duration,
            error: entry.error ? {
                name: entry.error.name,
                message: entry.error.message,
                stack: entry.stack
            } : undefined,
            environment: process.env.NODE_ENV,
            service: 'listing-management',
            version: process.env.npm_package_version || '1.0.0'
        };

        // Example: Send to monitoring service
        // monitoringService.log(monitoringData);
        
        // For development, just log the monitoring data structure
        if (process.env.NODE_ENV === 'development' && entry.level === LogLevel.CRITICAL) {
            console.log('Monitoring data:', monitoringData);
        }
    }

    /**
     * Gets performance statistics
     */
    public getPerformanceStats(): {
        activeOperations: number;
        operationNames: string[];
    } {
        const activeOperations = Array.from(this.performanceMetrics.values());
        return {
            activeOperations: activeOperations.length,
            operationNames: activeOperations.map(op => op.operationName)
        };
    }

    /**
     * Clears old performance metrics (cleanup)
     */
    public cleanupOldMetrics(): void {
        const now = performance.now();
        const maxAge = 300000; // 5 minutes

        for (const [operationId, metrics] of this.performanceMetrics.entries()) {
            if (now - metrics.startTime > maxAge) {
                this.warn(LogCategory.PERFORMANCE, `Cleaning up stale performance tracking: ${metrics.operationName}`, {
                    operationId,
                    age: Math.round(now - metrics.startTime)
                });
                this.performanceMetrics.delete(operationId);
            }
        }
    }
}

// Export singleton instance
export const listingLogger = ListingLogger.getInstance();

/**
 * Decorator for automatic performance tracking
 */
export function trackPerformance(operationName?: string) {
    return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
        const method = descriptor.value;
        const trackingName = operationName || `${target.constructor.name}.${propertyName}`;

        descriptor.value = async function (...args: any[]) {
            const operationId = listingLogger.startPerformanceTracking(trackingName, {
                className: target.constructor.name,
                methodName: propertyName,
                argumentCount: args.length
            });

            try {
                const result = await method.apply(this, args);
                listingLogger.endPerformanceTracking(operationId, true);
                return result;
            } catch (error) {
                listingLogger.endPerformanceTracking(
                    operationId, 
                    false, 
                    error instanceof Error ? error.constructor.name : 'UnknownError'
                );
                throw error;
            }
        };

        return descriptor;
    };
}

/**
 * Utility function for logging with context
 */
export function createContextLogger(baseContext: Record<string, any>) {
    return {
        debug: (category: LogCategory, message: string, additionalContext?: Record<string, any>) =>
            listingLogger.debug(category, message, { ...baseContext, ...additionalContext }),
        
        info: (category: LogCategory, message: string, additionalContext?: Record<string, any>) =>
            listingLogger.info(category, message, { ...baseContext, ...additionalContext }),
        
        warn: (category: LogCategory, message: string, additionalContext?: Record<string, any>) =>
            listingLogger.warn(category, message, { ...baseContext, ...additionalContext }),
        
        error: (category: LogCategory, message: string, error?: Error, additionalContext?: Record<string, any>) =>
            listingLogger.error(category, message, error, { ...baseContext, ...additionalContext }),
        
        critical: (category: LogCategory, message: string, error?: Error, additionalContext?: Record<string, any>) =>
            listingLogger.critical(category, message, error, { ...baseContext, ...additionalContext })
    };
}