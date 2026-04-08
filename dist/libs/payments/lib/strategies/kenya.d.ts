import { IPaymentStrategy, PaymentRequest, PaymentResult } from '../types';
export declare class KenyaPaymentStrategy implements IPaymentStrategy {
    private secretKey;
    initializePayment(req: PaymentRequest): Promise<PaymentResult>;
    verifyTransaction(reference: string): Promise<PaymentResult>;
}
