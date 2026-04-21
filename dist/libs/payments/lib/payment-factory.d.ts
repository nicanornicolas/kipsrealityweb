import { IPaymentStrategy } from './types';
export declare class PaymentFactory {
    /**
     * @deprecated region parameter is no longer used. System is strictly USA-focused.
     */
    static getStrategy(region?: string): IPaymentStrategy;
}
