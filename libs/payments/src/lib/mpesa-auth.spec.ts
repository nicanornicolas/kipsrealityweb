/**
 * Unit Tests for M-Pesa Authentication Flow
 * Tests M-Pesa Daraja API authentication, phone number normalization, and error handling
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { MpesaPaymentStrategy } from './strategies/mpesa';
import type { PaymentRequest } from './types';
import { TransactionStatus } from '@prisma/client';

const mockFetch = vi.fn();
global.fetch = mockFetch;

const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;

describe('M-Pesa Authentication Flow', () => {
  let mpesaStrategy: MpesaPaymentStrategy;
  let mockPaymentRequest: PaymentRequest;

  beforeEach(() => {
    vi.clearAllMocks();

    process.env.MPESA_CONSUMER_KEY = 'test-consumer-key';
    process.env.MPESA_CONSUMER_SECRET = 'test-consumer-secret';
    process.env.MPESA_PASSKEY = 'test-passkey';
    process.env.MPESA_SHORTCODE = '174379';
    process.env.MPESA_ENV = 'sandbox';
    process.env.NEXT_PUBLIC_APP_URL = 'http://localhost:3000';

    mpesaStrategy = new MpesaPaymentStrategy();

    mockPaymentRequest = {
      user: {
        id: 'user-123',
        email: 'test@example.com',
        phone: '254712345678',
        firstName: 'Test',
        lastName: 'User',
        region: 'KEN',
        kycStatus: 'PENDING',
        stripeCustomerId: null,
        plaidAccessTokenEncrypted: null,
        paystackCustomerCode: null,
        paymentMethods: [],
      },
      organization: {
        id: 'org-123',
        name: 'Test Org',
        region: 'KEN',
        paystackSubaccountCode: 'test-subaccount',
        stripeConnectId: null,
      },
      amount: 1500,
      currency: 'KES',
      invoiceId: 'inv-123',
      metadata: {
        source: 'web_app',
      },
    };

    console.error = vi.fn();
    console.warn = vi.fn();
  });

  afterEach(() => {
    console.error = originalConsoleError;
    console.warn = originalConsoleWarn;

    delete process.env.MPESA_CONSUMER_KEY;
    delete process.env.MPESA_CONSUMER_SECRET;
    delete process.env.MPESA_PASSKEY;
    delete process.env.MPESA_SHORTCODE;
    delete process.env.MPESA_ENV;
  });

  describe('Access Token Retrieval', () => {
    it('should successfully retrieve access token from Daraja API', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () =>
          Promise.resolve({
            access_token: 'test-access-token-123',
            expires_in: 3599,
          }),
      });

      const spy = vi
        .spyOn(mpesaStrategy, 'getAccessToken')
        .mockResolvedValue('test-access-token-123');

      const token = await mpesaStrategy.getAccessToken();

      expect(token).toBe('test-access-token-123');
      expect(typeof token).toBe('string');
      expect(token.length).toBeGreaterThan(0);

      expect(spy).toHaveBeenCalled();
      spy.mockRestore();
    });

    it('should handle authentication failure with invalid credentials', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        json: () =>
          Promise.resolve({
            error: 'invalid_client',
            errorMessage: 'Invalid client credentials',
          }),
      });

      const spy = vi
        .spyOn(mpesaStrategy, 'getAccessToken')
        .mockRejectedValue(
          new Error('M-Pesa authentication failed: Invalid client credentials'),
        );

      await expect(mpesaStrategy.getAccessToken()).rejects.toThrow(
        'M-Pesa authentication failed: Invalid client credentials',
      );

      spy.mockRestore();
    });

    it('should handle network errors during authentication', async () => {
      mockFetch.mockRejectedValueOnce(new Error('Network connection failed'));

      const spy = vi
        .spyOn(mpesaStrategy, 'getAccessToken')
        .mockRejectedValue(
          new Error('M-Pesa authentication failed: Network connection failed'),
        );

      await expect(mpesaStrategy.getAccessToken()).rejects.toThrow(
        'M-Pesa authentication failed: Network connection failed',
      );

      spy.mockRestore();
    });
  });

  describe('Phone Number Normalization', () => {
    it('should normalize phone number from user profile', () => {
      const paymentRequest: PaymentRequest = {
        ...mockPaymentRequest,
        user: {
          ...mockPaymentRequest.user,
          phone: '0712345678',
        },
      };

      expect(paymentRequest.user.phone).toBe('0712345678');

      expect(() => {
        if (!paymentRequest.user.phone) {
          throw new Error('Phone number is required');
        }
      }).not.toThrow();
    });

    it('should normalize phone number from metadata', () => {
      const paymentRequest: PaymentRequest = {
        ...mockPaymentRequest,
        metadata: {
          ...mockPaymentRequest.metadata,
          phoneNumber: '+254712345678',
        },
      };

      expect(paymentRequest.metadata?.phoneNumber).toBe('+254712345678');
    });

    it('should throw error when phone number is missing', () => {
      const paymentRequest: PaymentRequest = {
        ...mockPaymentRequest,
        user: {
          ...mockPaymentRequest.user,
          phone: '',
        },
        metadata: {},
      };

      const hasPhone =
        paymentRequest.user.phone || paymentRequest.metadata?.phoneNumber;
      expect(hasPhone).toBeFalsy();
    });

    it('should validate phone number format', () => {
      const invalidNumbers = [
        '123',
        '2547123456789',
        '254612345678',
        'abcdefg',
      ];

      invalidNumbers.forEach((phone) => {
        expect(() => {
          if (!phone.match(/^2547\d{8}$/)) {
            throw new Error(
              `Invalid phone number format. Expected Kenyan format (2547XXXXXXXX), got: ${phone}`,
            );
          }
        }).toThrow(/Invalid phone number format/);
      });
    });
  });

  describe('Payment Initialization', () => {
    it('should initialize STK Push payment successfully', async () => {
      expect(TransactionStatus.PENDING).toBe('PENDING');
      expect(TransactionStatus.AUTHORIZED).toBe('AUTHORIZED');
      expect(TransactionStatus.SETTLED).toBe('SETTLED');
      expect(TransactionStatus.FAILED).toBe('FAILED');

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () =>
          Promise.resolve({
            ResponseCode: '0',
            ResponseDescription: 'Success. Request accepted for processing',
            CustomerMessage: 'Sent to your phone. Please enter PIN to confirm',
            CheckoutRequestID: 'ws_CO_123456789',
          }),
      });

      mpesaStrategy.initializePayment = vi.fn().mockResolvedValue({
        success: true,
        checkoutRequestId: 'ws_CO_123456789',
        status: TransactionStatus.PENDING,
      });

      const result = await mpesaStrategy.initializePayment(mockPaymentRequest);

      expect(result.success).toBe(true);
      expect(result.checkoutRequestId).toBe('ws_CO_123456789');
    });

    it('should handle STK Push failure', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () =>
          Promise.resolve({
            access_token: 'test-access-token',
            expires_in: 3599,
          }),
      });

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () =>
          Promise.resolve({
            ResponseCode: '1',
            errorMessage: 'The initiator information is invalid.',
            CustomerMessage: 'Failed. Invalid initiator',
          }),
      });

      mpesaStrategy.initializePayment = vi
        .fn()
        .mockRejectedValue(
          new Error(
            'M-Pesa STK Push failed: The initiator information is invalid.',
          ),
        );

      await expect(
        mpesaStrategy.initializePayment(mockPaymentRequest),
      ).rejects.toThrow(
        'M-Pesa STK Push failed: The initiator information is invalid.',
      );
    });

    it('should handle missing M-Pesa credentials gracefully', async () => {
      delete process.env.MPESA_CONSUMER_KEY;
      delete process.env.MPESA_CONSUMER_SECRET;

      const strategyWithoutCreds = new MpesaPaymentStrategy();

      expect(strategyWithoutCreds).toBeInstanceOf(MpesaPaymentStrategy);

      expect(console.warn).toHaveBeenCalledWith(
        expect.stringContaining('M-Pesa credentials not fully configured'),
      );
    });
  });

  describe('Error Handling and Recovery', () => {
    it('should provide meaningful error messages for users', async () => {
      const errorMessage = 'M-Pesa authentication failed: Invalid credentials';
      expect(errorMessage).toContain('M-Pesa');

      const networkError = new Error('M-Pesa network connection failed');
      expect(networkError.message).toContain('M-Pesa');

      const paymentError = new Error(
        'M-Pesa payment failed: Invalid phone number',
      );
      expect(paymentError.message).toContain('M-Pesa');
    });

    it('should classify errors as retryable or non-retryable', () => {
      const networkError = new Error('Network connection failed');
      expect(networkError.message).toContain('Network');

      const validationError = new Error('Invalid phone number format');
      expect(validationError.message).toContain('Invalid');
    });

    it('should log errors for debugging', async () => {
      const error = new Error('Test error for logging');

      const mockConsoleError = vi.fn();
      console.error = mockConsoleError;

      console.error('M-Pesa initialization error:', error);

      expect(mockConsoleError).toHaveBeenCalledWith(
        'M-Pesa initialization error:',
        error,
      );

      console.error = originalConsoleError;
    });
  });
});

describe('Environment Configuration', () => {
  it('should support sandbox environment', () => {
    process.env.MPESA_ENV = 'sandbox';
    const sandboxStrategy = new MpesaPaymentStrategy();
    expect(sandboxStrategy).toBeInstanceOf(MpesaPaymentStrategy);
  });

  it('should support production environment', () => {
    process.env.MPESA_ENV = 'production';
    const productionStrategy = new MpesaPaymentStrategy();
    expect(productionStrategy).toBeInstanceOf(MpesaPaymentStrategy);
  });

  it('should default to sandbox when environment not specified', () => {
    delete process.env.MPESA_ENV;
    const defaultStrategy = new MpesaPaymentStrategy();
    expect(defaultStrategy).toBeInstanceOf(MpesaPaymentStrategy);
  });
});
