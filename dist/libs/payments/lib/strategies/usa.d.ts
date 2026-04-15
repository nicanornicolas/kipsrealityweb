import { IPaymentStrategy, PaymentRequest, PaymentResult } from '../types';
export declare class UsaPaymentStrategy implements IPaymentStrategy {
    private stripe;
    constructor();
    initializePayment(req: PaymentRequest): Promise<PaymentResult>;
    verifyTransaction(reference: string): Promise<PaymentResult>;
}
