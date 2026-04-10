import { UsaPaymentStrategy } from './strategies/usa';
import { IPaymentStrategy } from '../types';

export class PaymentFactory {
  /**
   * @deprecated region parameter is no longer used. System is strictly USA-focused.
   */
  static getStrategy(region?: string): IPaymentStrategy {
    // We completely bypass the switch statement. USA is the only strategy.
    return new UsaPaymentStrategy();
  }
}
