import { PaymentGateway, TransactionStatus, User, Organization } from '@prisma/client';
export { PaymentGateway, TransactionStatus };
export interface PaymentRequest {
    user: User;
    organization: Organization;
    amount: number;
    currency: string;
    invoiceId: string;
    metadata?: any;
}
export interface PaymentResult {
    transactionId: string;
    status: TransactionStatus;
    gateway: PaymentGateway;
    checkoutUrl?: string;
    clientSecret?: string;
    rawResponse?: any;
}
export interface IPaymentStrategy {
    initializePayment(request: PaymentRequest): Promise<PaymentResult>;
    verifyTransaction(reference: string): Promise<PaymentResult>;
}
