import { UserRole } from './listing-auth.types';
interface ValidationInput {
    userId: string;
    userRole: UserRole;
    operation: string;
    data: any;
    unitIds?: string[];
}
interface ValidationResult {
    isValid: boolean;
    errors: string[];
    sanitizedData?: any;
}
export declare class ListingValidationService {
    private static instance;
    private logger;
    private rateLimitStore;
    private constructor();
    static getInstance(): ListingValidationService;
    /**
     * Simple in-memory rate limit check per user + operation
     */
    checkRateLimit(userId: string, operation: string): {
        allowed: boolean;
        resetTime?: number;
    };
    /**
     * Validate and sanitize listing operations
     */
    validateListingOperation(input: ValidationInput): Promise<ValidationResult>;
}
export {};
