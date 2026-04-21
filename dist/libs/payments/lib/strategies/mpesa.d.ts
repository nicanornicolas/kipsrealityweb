import { IPaymentStrategy, PaymentRequest, PaymentResult } from '../types';
export declare class MpesaPaymentStrategy implements IPaymentStrategy {
    constructor();
    getAccessToken(): Promise<string>;
    initializePayment(_request: PaymentRequest): Promise<PaymentResult>;
    verifyTransaction(reference: string): Promise<PaymentResult>;
}
