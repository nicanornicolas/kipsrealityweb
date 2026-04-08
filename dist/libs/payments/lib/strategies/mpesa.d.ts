import { IPaymentStrategy, PaymentRequest, PaymentResult } from '../types';
/**
 * M-Pesa Direct Integration (Daraja API) Strategy
 * This handles STK Push for direct M-Pesa payments without Paystack intermediary
 */
export declare class MpesaPaymentStrategy implements IPaymentStrategy {
    private consumerKey;
    private consumerSecret;
    private passkey;
    private shortcode;
    private environment;
    private baseUrl;
    constructor();
    /**
     * Initialize M-Pesa STK Push payment
     */
    initializePayment(req: PaymentRequest): Promise<PaymentResult>;
    /**
     * Verify M-Pesa transaction status
     */
    verifyTransaction(reference: string): Promise<PaymentResult>;
    /**
     * Get OAuth access token from Daraja API
     */
    private getAccessToken;
    /**
     * Extract phone number from payment request
     * Expected format: 2547XXXXXXXX (Kenyan format)
     */
    private extractPhoneNumber;
    /**
     * Normalize phone number to M-Pesa format (2547XXXXXXXX)
     */
    private normalizePhoneNumber;
    /**
     * Generate timestamp in format YYYYMMDDHHMMSS
     */
    private generateTimestamp;
    /**
     * Generate password (Base64 encoded)
     * Format: BusinessShortCode + Passkey + Timestamp
     */
    private generatePassword;
}
