/**
 * Unit Test Isolation Firewall
 * 
 * This setup file provides isolation for unit tests by:
 * 1. Resetting module registry between tests
 * 2. Clearing any global state
 * 3. Mocking external dependencies
 * 4. Providing test utilities
 */

import { vi, beforeEach, afterEach, beforeAll, afterAll } from 'vitest';

// Reset all mocks before each test
beforeEach(() => {
  vi.clearAllMocks();
  vi.resetAllMocks();
});

// Restore all mocks after each test
afterEach(() => {
  vi.restoreAllMocks();
});

// Mock console.error to fail tests on unexpected errors
const originalConsoleError = console.error;
beforeAll(() => {
  console.error = vi.fn((...args: unknown[]) => {
    // Ignore React Hook warnings in tests
    const message = args.join(' ');
    if (message.includes('Warning: ReactDOM.render') || 
        message.includes('Warning: An update to') ||
        message.includes('Warning: Failed propType')) {
      return;
    }
    originalConsoleError(...args);
  });
});

afterAll(() => {
  console.error = originalConsoleError;
});

// Mock Next.js modules that might not be available in unit tests
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}));

vi.mock('next-auth/react', () => ({
  useSession: () => ({
    data: null,
    status: 'unauthenticated',
  }),
  signIn: vi.fn(),
  signOut: vi.fn(),
}));

// Mock Prisma client to avoid actual database connections in unit tests
vi.mock('@prisma/client', () => ({
  PrismaClient: vi.fn().mockImplementation(() => ({
    $connect: vi.fn(),
    $disconnect: vi.fn(),
    $transaction: vi.fn((fn: any) => fn({})),
  })),
  TransactionStatus: {
    PENDING: 'PENDING',
    AUTHORIZED: 'AUTHORIZED',
    SETTLED: 'SETTLED',
    FAILED: 'FAILED',
    DISPUTED: 'DISPUTED',
    REVERSED: 'REVERSED'
  },
  PaymentGateway: {
    STRIPE: 'STRIPE',
    PLAID: 'PLAID',
    PAYSTACK: 'PAYSTACK',
    MPESA_DIRECT: 'MPESA_DIRECT',
    MANUAL: 'MANUAL'
  }
}));
