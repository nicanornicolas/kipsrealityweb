import { Region } from '@prisma/client';
import { IPaymentStrategy } from './types';
export declare class PaymentFactory {
    /**
     * Returns the correct payment processor based on the Property/Landlord Region.
     */
    static getStrategy(region: Region): IPaymentStrategy;
}
