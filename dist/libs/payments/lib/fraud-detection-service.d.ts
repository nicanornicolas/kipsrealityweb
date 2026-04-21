import { PaymentRequest } from './types';
export interface FraudDetectionRule {
    name: string;
    description: string;
    check: (request: PaymentRequest, context: FraudDetectionContext) => Promise<FraudDetectionResult>;
    severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
    enabled: boolean;
}
export interface FraudDetectionContext {
    userId: string;
    userEmail: string;
    userIp?: string;
    userAgent?: string;
    previousTransactions: TransactionHistory[];
    organizationId: string;
    timestamp: Date;
}
export interface TransactionHistory {
    id: string;
    amount: number;
    currency: string;
    status: string;
    gateway: string;
    timestamp: Date;
    metadata?: Record<string, unknown>;
}
export interface FraudDetectionResult {
    passed: boolean;
    ruleName: string;
    severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
    message: string;
    details?: Record<string, unknown>;
    score: number;
}
export interface FraudDetectionReport {
    transactionId: string;
    overallScore: number;
    passed: boolean;
    rulesChecked: number;
    rulesFailed: number;
    results: FraudDetectionResult[];
    timestamp: Date;
    recommendation: 'ALLOW' | 'REVIEW' | 'BLOCK';
    [key: string]: unknown;
}
export declare class FraudDetectionService {
    private rules;
    constructor();
    /**
     * Initialize default fraud detection rules
     */
    private initializeDefaultRules;
    /**
     * Check payment request for fraud indicators
     */
    checkPayment(request: PaymentRequest, context: FraudDetectionContext): Promise<FraudDetectionReport>;
    /**
     * Get recommendation based on fraud score
     */
    private getRecommendation;
    /**
     * Get severity multiplier for score calculation
     */
    private getSeverityMultiplier;
    /**
     * Rule: Check if transaction amount exceeds typical limits
     */
    private checkAmountThreshold;
    /**
     * Rule: Detect multiple transactions in short time period
     */
    private checkRapidTransactions;
    /**
     * Rule: Check if transaction occurs at unusual hours
     */
    private checkUnusualTime;
    /**
     * Rule: Validate email domain for suspicious patterns
     */
    private checkEmailDomain;
    /**
     * Rule: Check if IP location matches user profile region
     */
    private checkIpLocation;
    /**
     * Rule: Check for unusual device patterns
     */
    private checkDeviceFingerprint;
    /**
     * Rule: Check if currency matches user/organization region
     */
    private checkCurrencyMismatch;
    /**
     * Rule: Address Verification System check
     */
    private checkAvs;
    /**
     * Rule: Check against known fraudster lists
     */
    private checkBlacklist;
    /**
     * Enable/disable specific rule
     */
    setRuleEnabled(ruleName: string, enabled: boolean): void;
    /**
     * Get all rules with their current status
     */
    getRules(): FraudDetectionRule[];
    /**
     * Add custom rule
     */
    addRule(rule: FraudDetectionRule): void;
    /**
     * Remove rule by name
     */
    removeRule(ruleName: string): void;
}
export declare const fraudDetectionService: FraudDetectionService;
/**
 * Middleware to integrate fraud detection with payment flow
 */
export declare function checkForFraud(paymentRequest: PaymentRequest, context: Partial<FraudDetectionContext>): Promise<void>;
