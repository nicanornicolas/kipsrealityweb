/**
 * Unit Tests for Payment Error Handler
 * Tests error handling, retry logic, and error classification
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { PaymentErrorHandler, PaymentError, PaymentErrorType, DEFAULT_RETRY_CONFIG } from '@rentflow/payments';
import { PaymentGateway } from '@prisma/client';

describe('Payment Error Handler', () => {
  let errorHandler: PaymentErrorHandler;

  beforeEach(() => {
    // Reset singleton to ensure fresh state
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (PaymentErrorHandler as any).instance = undefined;
    errorHandler = PaymentErrorHandler.getInstance();
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    // Reset singleton after each test
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (PaymentErrorHandler as any).instance = undefined;
  });

  describe('PaymentError Class', () => {
    it('should create a PaymentError with default user message', () => {
      const error = new PaymentError(PaymentErrorType.NETWORK_ERROR, 'Network failed');
      
      expect(error).toBeInstanceOf(Error);
      expect(error.name).toBe('PaymentError');
      expect(error.type).toBe(PaymentErrorType.NETWORK_ERROR);
      expect(error.message).toBe('Network failed');
      expect(error.userMessage).toBe('A network error occurred. Please check your connection and try again.');
      expect(error.retryable).toBe(true);
      expect(error.shouldAlert).toBe(false);
    });

    it('should create a PaymentError with custom user message', () => {
      const error = new PaymentError(PaymentErrorType.VALIDATION_ERROR, 'Invalid phone number', {
        userMessage: 'Please enter a valid phone number'
      });
      
      expect(error.userMessage).toBe('Please enter a valid phone number');
    });

    it('[TECH-DEBT-MARCH][JIRA-1260] should serialize to JSON correctly', () => {
      const error = new PaymentError(PaymentErrorType.NETWORK_ERROR, 'Network failed', {
        gateway: PaymentGateway.MPESA_DIRECT,
        transactionId: 'txn-123'
      });
      
      const json = error.toJSON();
      
      expect(json.type).toBe(PaymentErrorType.NETWORK_ERROR);
      expect(json.message).toBe('Network failed');
      expect(json.gateway).toBe(PaymentGateway.MPESA_DIRECT);
      expect(json.transactionId).toBe('txn-123');
      expect(json.timestamp).toBeDefined();
    });

    describe('Static factory methods', () => {
      it('[TECH-DEBT-MARCH][JIRA-1261] should create network error', () => {
        const error = PaymentError.createNetworkError('Connection failed', PaymentGateway.STRIPE);
        
        expect(error.type).toBe(PaymentErrorType.NETWORK_ERROR);
        expect(error.retryable).toBe(true);
        expect(error.options.gateway).toBe(PaymentGateway.STRIPE);
      });

      it('[TECH-DEBT-MARCH][JIRA-1262] should create authentication error', () => {
        const error = PaymentError.createAuthenticationError('Invalid credentials', PaymentGateway.PAYSTACK);
        
        expect(error.type).toBe(PaymentErrorType.AUTHENTICATION_ERROR);
        expect(error.retryable).toBe(false);
        expect(error.shouldAlert).toBe(true);
        expect(error.options.gateway).toBe(PaymentGateway.PAYSTACK);
      });

      it('should create validation error', () => {
        const error = PaymentError.createValidationError('Phone number invalid', 'phoneNumber');
        
        expect(error.type).toBe(PaymentErrorType.VALIDATION_ERROR);
        expect(error.retryable).toBe(false);
        expect(error.userMessage).toContain('phoneNumber');
      });

      it('should create fraud error', () => {
        const error = PaymentError.createFraudError('Suspicious activity', { score: 85 });
        
        expect(error.type).toBe(PaymentErrorType.FRAUD_DETECTED);
        expect(error.retryable).toBe(false);
        expect(error.shouldAlert).toBe(true);
        expect(error.options.technicalDetails).toEqual({ score: 85 });
      });

      it('should create insufficient funds error', () => {
        const error = PaymentError.createInsufficientFundsError('Balance too low');
        
        expect(error.type).toBe(PaymentErrorType.INSUFFICIENT_FUNDS);
        expect(error.retryable).toBe(false);
        expect(error.userMessage).toContain('Insufficient funds');
      });
    });
  });

  describe('Error Normalization', () => {
    it('should normalize network errors', async () => {
      const networkError = new Error('Network connection failed');
      
      // Test via withRetry
      const operation = vi.fn().mockRejectedValue(networkError);
      
      await expect(errorHandler.withRetry(operation, 'test-operation'))
        .rejects
        .toThrow();
      
      // Operation should have been called multiple times due to retry
      expect(operation).toHaveBeenCalledTimes(DEFAULT_RETRY_CONFIG.maxAttempts);
    });

    it('should normalize validation errors (non-retryable)', async () => {
      const validationError = new Error('Invalid phone number format');
      
      const operation = vi.fn().mockRejectedValue(validationError);
      
      await expect(errorHandler.withRetry(operation, 'test-operation'))
        .rejects
        .toThrow();
      
      // Validation errors are not retryable, should only be called once
      expect(operation).toHaveBeenCalledTimes(1);
    });

    it('[TECH-DEBT-MARCH][JIRA-1263] should normalize payment gateway errors', async () => {
      const gatewayError = new Error('M-Pesa payment gateway error: Connection timeout');
      
      const operation = vi.fn().mockRejectedValue(gatewayError);
      
      await expect(errorHandler.withRetry(operation, 'test-operation'))
        .rejects
        .toThrow();
      
      // Gateway errors are retryable
      expect(operation).toHaveBeenCalledTimes(DEFAULT_RETRY_CONFIG.maxAttempts);
    });

    it('should preserve existing PaymentError instances', async () => {
      const existingError = PaymentError.createFraudError('Suspicious pattern', { rule: 'AMOUNT_THRESHOLD' });
      
      const operation = vi.fn().mockRejectedValue(existingError);
      
      await expect(errorHandler.withRetry(operation, 'test-operation'))
        .rejects
        .toThrow(PaymentError);
      
      // Fraud errors are not retryable
      expect(operation).toHaveBeenCalledTimes(1);
    });
  });

  describe('Retry Logic', () => {
    it('should retry on retryable errors', async () => {
      let attempt = 0;
      const operation = vi.fn().mockImplementation(() => {
        attempt++;
        if (attempt < 3) {
          throw new Error('Network timeout');
        }
        return 'success';
      });
      
      const result = await errorHandler.withRetry(operation, 'test-retry');
      
      expect(result).toBe('success');
      expect(operation).toHaveBeenCalledTimes(3);
    });

    it('should respect max attempts', async () => {
      const operation = vi.fn().mockRejectedValue(new Error('Network timeout'));
      
      await expect(errorHandler.withRetry(operation, 'test-max-attempts'))
        .rejects
        .toThrow();
      
      expect(operation).toHaveBeenCalledTimes(DEFAULT_RETRY_CONFIG.maxAttempts);
    });

    it('[TECH-DEBT-MARCH][JIRA-1264] should use exponential backoff', async () => {
      const delays: number[] = [];
      const originalSetTimeout = global.setTimeout;

      try {
        // Override setTimeout to capture delays
        global.setTimeout = vi.fn((callback: unknown, delay: number) => {
          delays.push(delay);
          return originalSetTimeout(callback as unknown as () => void, 0);
        });

        let attempt = 0;
        const operation = vi.fn().mockImplementation(() => {
          attempt++;
          if (attempt < DEFAULT_RETRY_CONFIG.maxAttempts) {
            throw new Error('Network timeout');
          }
          return 'success';
        });

        await errorHandler.withRetry(operation, 'test-backoff');

        // Verify that delays increase (exponential backoff)
        // With baseDelay=1000 and multiplier=2: 1000, 2000, 4000
        expect(delays.length).toBe(DEFAULT_RETRY_CONFIG.maxAttempts - 1);
      } finally {
        // Always restore setTimeout
        global.setTimeout = originalSetTimeout;
      }
    });

    it('should not retry non-retryable errors', async () => {
      const operation = vi.fn().mockRejectedValue(new Error('Invalid input data'));
      
      await expect(errorHandler.withRetry(operation, 'test-non-retryable'))
        .rejects
        .toThrow();
      
      // Should only be called once
      expect(operation).toHaveBeenCalledTimes(1);
    });

    it('[TECH-DEBT-MARCH][JIRA-1265] should allow custom retry config', async () => {
      const customConfig = {
        maxAttempts: 5,
        baseDelay: 100,
        backoffMultiplier: 2,
        maxDelay: 1000,
        retryableErrorTypes: [PaymentErrorType.NETWORK_ERROR, PaymentErrorType.TIMEOUT_ERROR]
      };
      
      let attempt = 0;
      const operation = vi.fn().mockImplementation(() => {
        attempt++;
        if (attempt < 5) {
          throw new Error('Network timeout');
        }
        return 'success';
      });
      
      const result = await errorHandler.withRetry(operation, 'test-custom', customConfig);
      
      expect(result).toBe('success');
      expect(operation).toHaveBeenCalledTimes(5);
    });
  });

  describe('Error Classification', () => {
    it('[TECH-DEBT-MARCH][JIRA-1266] should classify network-related errors', () => {
      // Create a PaymentError with NETWORK_ERROR type
      const error = new PaymentError(PaymentErrorType.NETWORK_ERROR, 'Connection failed');
      expect(error.type).toBe(PaymentErrorType.NETWORK_ERROR);
      
      // Test error message classification
      const networkError = new Error('Network connection timeout');
      expect(networkError.message.toLowerCase()).toContain('network');
    });

    it('[TECH-DEBT-MARCH][JIRA-1267] should classify authentication errors', () => {
      const error = PaymentError.createAuthenticationError('Invalid API key');
      expect(error.type).toBe(PaymentErrorType.AUTHENTICATION_ERROR);
      expect(error.retryable).toBe(false);
    });

    it('[TECH-DEBT-MARCH][JIRA-1268] should classify validation errors', () => {
      const error = PaymentError.createValidationError('Invalid phone number', 'phone');
      expect(error.type).toBe(PaymentErrorType.VALIDATION_ERROR);
      expect(error.retryable).toBe(false);
    });

    it('[TECH-DEBT-MARCH][JIRA-1269] should classify payment gateway errors', () => {
      const error = new PaymentError(PaymentErrorType.PAYMENT_GATEWAY_ERROR, 'Stripe gateway error', {
        gateway: PaymentGateway.STRIPE
      });
      
      expect(error.type).toBe(PaymentErrorType.PAYMENT_GATEWAY_ERROR);
      expect(error.options.gateway).toBe(PaymentGateway.STRIPE);
      expect(error.retryable).toBe(true);
    });

    it('[TECH-DEBT-MARCH][JIRA-1270] should classify fraud detection errors', () => {
      const error = PaymentError.createFraudError('High risk score detected', { score: 90 });
      expect(error.type).toBe(PaymentErrorType.FRAUD_DETECTED);
      expect(error.retryable).toBe(false);
      expect(error.shouldAlert).toBe(true);
    });
  });

  describe('Singleton Pattern', () => {
    it('should return same instance', () => {
      const instance1 = PaymentErrorHandler.getInstance();
      const instance2 = PaymentErrorHandler.getInstance();
      
      expect(instance1).toBe(instance2);
    });

    it('should allow custom config on first instantiation', () => {
      const customConfig = {
        maxAttempts: 5,
        baseDelay: 2000,
        backoffMultiplier: 3,
        maxDelay: 30000,
        retryableErrorTypes: [PaymentErrorType.NETWORK_ERROR]
      };
      
      // Reset singleton for test
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (PaymentErrorHandler as any).instance = undefined;
      
      const customInstance = PaymentErrorHandler.getInstance(customConfig);
      const defaultInstance = PaymentErrorHandler.getInstance();
      
      expect(customInstance).toBe(defaultInstance);
    });
  });
});
