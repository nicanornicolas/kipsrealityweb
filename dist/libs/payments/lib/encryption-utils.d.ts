/**
 * Payment Encryption Utilities
 * Provides encryption for non-PCI payment data (metadata, user info, etc.)
 * Note: PCI data (card numbers, CVV) should NEVER be handled by this application
 */
export declare enum EncryptionPurpose {
    PAYMENT_METADATA = "PAYMENT_METADATA",
    USER_INFO = "USER_INFO",
    TRANSACTION_DETAILS = "TRANSACTION_DETAILS",
    WEBHOOK_PAYLOAD = "WEBHOOK_PAYLOAD"
}
export interface EncryptionConfig {
    algorithm: string;
    keyLength: number;
    ivLength: number;
    authTagLength: number;
    encoding: BufferEncoding;
}
export declare class PaymentEncryptionError extends Error {
    readonly purpose: EncryptionPurpose;
    readonly operation: 'encrypt' | 'decrypt' | 'key_validation';
    readonly cause?: Error | undefined;
    constructor(message: string, purpose: EncryptionPurpose, operation: 'encrypt' | 'decrypt' | 'key_validation', cause?: Error | undefined);
}
export declare class PaymentEncryptionUtils {
    private static instance;
    private config;
    private keyCache;
    private constructor();
    static getInstance(config?: EncryptionConfig): PaymentEncryptionUtils;
    /**
     * Get encryption key for a specific purpose
     */
    private getKey;
    /**
     * Get environment variable name for a specific encryption purpose
     */
    private getEnvKeyName;
    /**
     * Encrypt data for a specific purpose
     */
    encrypt(data: string | object, purpose: EncryptionPurpose): string;
    /**
     * Decrypt data that was encrypted for a specific purpose
     */
    decrypt(encryptedString: string, expectedPurpose?: EncryptionPurpose): string;
    /**
     * Decrypt and parse JSON data
     */
    decryptJson<T = Record<string, unknown>>(encryptedString: string, expectedPurpose?: EncryptionPurpose): T;
    /**
     * Get purpose from prefix
     */
    private getPurposeFromPrefix;
    /**
     * Validate if a string appears to be encrypted
     */
    isEncrypted(encryptedString: string): boolean;
    /**
     * Encrypt sensitive fields in an object
     */
    encryptObjectFields<T extends Record<string, unknown>>(obj: T, fieldsToEncrypt: string[], purpose?: EncryptionPurpose): T;
    /**
     * Decrypt encrypted fields in an object
     */
    decryptObjectFields<T extends Record<string, unknown>>(obj: T, fieldsToDecrypt: string[], purpose?: EncryptionPurpose): T;
    /**
     * Generate a new encryption key
     */
    static generateKey(): string;
    /**
     * Generate multiple keys for different purposes
     */
    static generateKeys(): Record<EncryptionPurpose, string>;
    /**
     * Clear key cache (useful for testing or key rotation)
     */
    clearCache(): void;
}
export declare const paymentEncryptionUtils: PaymentEncryptionUtils;
export declare const paymentEncryption: {
    /**
     * Encrypt payment metadata (non-PCI data like phone, email references)
     */
    encryptMetadata(metadata: Record<string, unknown>): string;
    /**
     * Decrypt payment metadata
     */
    decryptMetadata(encryptedMetadata: string): Record<string, unknown>;
    /**
     * Encrypt user information (non-PCI)
     */
    encryptUserInfo(userInfo: Record<string, unknown>): string;
    /**
     * Decrypt user information
     */
    decryptUserInfo(encryptedUserInfo: string): Record<string, unknown>;
    /**
     * Encrypt transaction details
     */
    encryptTransactionDetails(details: Record<string, unknown>): string;
    /**
     * Decrypt transaction details
     */
    decryptTransactionDetails(encryptedDetails: string): Record<string, unknown>;
    /**
     * Generate all required encryption keys for environment setup
     */
    generateEnvironmentKeys(): string;
};
