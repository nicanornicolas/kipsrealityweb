import { PaymentGateway, TransactionStatus } from '@prisma/client';
import { IPaymentStrategy, PaymentRequest, PaymentResult } from '../types';

export class MpesaPaymentStrategy implements IPaymentStrategy {
  constructor() {
    if (!process.env.MPESA_CONSUMER_KEY || !process.env.MPESA_CONSUMER_SECRET) {
      console.warn('M-Pesa credentials not fully configured');
    }
  }

  async getAccessToken(): Promise<string> {
    const consumerKey = process.env.MPESA_CONSUMER_KEY;
    const consumerSecret = process.env.MPESA_CONSUMER_SECRET;

    if (!consumerKey || !consumerSecret) {
      throw new Error('M-Pesa authentication failed: Missing credentials');
    }

    const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
    const env = process.env.MPESA_ENV === 'production' ? 'api' : 'sandbox';
    const url = `https://${env}.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: { Authorization: `Basic ${auth}` }
      });
      const data = await response.json();

      if (!response.ok || !data?.access_token) {
        const message = data?.errorMessage || data?.error || 'Unknown error';
        throw new Error(`M-Pesa authentication failed: ${message}`);
      }

      return data.access_token;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      if (message.startsWith('M-Pesa authentication failed:')) {
        throw error;
      }
      throw new Error(`M-Pesa authentication failed: ${message}`);
    }
  }

  async initializePayment(_request: PaymentRequest): Promise<PaymentResult> {
    throw new Error('M-Pesa STK Push is not enabled in this deployment');
  }

  async verifyTransaction(reference: string): Promise<PaymentResult> {
    return {
      transactionId: reference,
      status: TransactionStatus.PENDING,
      gateway: PaymentGateway.MPESA_DIRECT,
      rawResponse: { message: 'Verification not implemented in compatibility strategy' }
    };
  }
}
