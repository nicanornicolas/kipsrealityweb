/**
 * Unit Test Isolation Firewall
 * 
 * This setup file provides isolation for unit tests by:
 * 1. Mocking external dependencies
 * 2. Providing test utilities
 * 
 * NOTE: beforeEach/afterEach hooks should be in individual test files, not here
 */

import { vi, beforeEach, afterEach } from 'vitest';

// Reset all mocks before each test
beforeEach(() => {
  vi.clearAllMocks();
  // Re-apply defaults after clearAllMocks wipes return values
  mockPrismaInstance.listing.create.mockResolvedValue({ id: 'listing-123', title: 'Test Listing', status: 'ACTIVE', unitId: 'unit-123', organizationId: 'org-123', price: 1000, createdAt: new Date(), updatedAt: new Date() })
  mockPrismaInstance.listing.findMany.mockResolvedValue([{ id: 'listing-123', title: 'Test Listing', createdAt: new Date(), updatedAt: new Date() }])
  mockPrismaInstance.unit.findUnique.mockResolvedValue({ id: 'unit-123', unitNumber: 'A101', propertyId: 'property-123', organizationId: 'org-123', status: 'AVAILABLE', property: { id: 'property-123', name: 'Test Property', organizationId: 'org-123', address: '123 Test St' } })
  mockPrismaInstance.property.findUnique.mockResolvedValue({ id: 'property-123', name: 'Test Property', organizationId: 'org-123', units: [], listings: [] })
  mockPrismaInstance.listingStatus.create.mockResolvedValue({ id: 'status-123', name: 'ACTIVE' })
  mockPrismaInstance.listingStatus.findFirst.mockResolvedValue({ id: 'status-123', name: 'ACTIVE' })
  mockPrismaInstance.$transaction.mockImplementation(async (callback) => callback(mockPrismaInstance))
})

// Restore all mocks after each test
afterEach(() => {
  vi.restoreAllMocks();
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

// Create mock Prisma client instance
// Default mock implementations that return properly shaped objects
const mockPrismaInstance = {
  $connect: vi.fn().mockResolvedValue(undefined),
  $disconnect: vi.fn().mockResolvedValue(undefined),
  $transaction: vi.fn().mockImplementation(async (callback) => callback(mockPrismaInstance)),
  // Organization model
  organization: {
    create: vi.fn().mockResolvedValue({ id: 'org-123', name: 'Test Org', type: 'PROPERTY_MANAGEMENT' }),
    update: vi.fn().mockResolvedValue({ id: 'org-123', name: 'Updated Org' }),
    delete: vi.fn().mockResolvedValue({ id: 'org-123' }),
    findUnique: vi.fn().mockResolvedValue({ id: 'org-123', name: 'Test Org' }),
    findMany: vi.fn().mockResolvedValue([{ id: 'org-123', name: 'Test Org' }]),
    deleteMany: vi.fn().mockResolvedValue({ count: 1 }),
  },
  // User model
  user: {
    create: vi.fn().mockResolvedValue({ id: 'user-123', email: 'test@example.com', name: 'Test User' }),
    update: vi.fn().mockResolvedValue({ id: 'user-123', name: 'Updated User' }),
    delete: vi.fn().mockResolvedValue({ id: 'user-123' }),
    findUnique: vi.fn().mockResolvedValue({ id: 'user-123', email: 'test@example.com' }),
    findMany: vi.fn().mockResolvedValue([{ id: 'user-123', email: 'test@example.com' }]),
    deleteMany: vi.fn().mockResolvedValue({ count: 1 }),
  },
  // OrganizationUser model
  organizationUser: {
    create: vi.fn().mockResolvedValue({ id: 'org-user-123', userId: 'user-123', organizationId: 'org-123', role: 'PROPERTY_MANAGER' }),
    delete: vi.fn().mockResolvedValue({ id: 'org-user-123' }),
    findUnique: vi.fn().mockResolvedValue({ id: 'org-user-123', userId: 'user-123', organizationId: 'org-123' }),
    findMany: vi.fn().mockResolvedValue([{ id: 'org-user-123', userId: 'user-123' }]),
    deleteMany: vi.fn().mockResolvedValue({ count: 1 }),
  },
  // Property model
  property: {
    create: vi.fn().mockResolvedValue({ id: 'property-123', name: 'Test Property', address: '123 Test St', organizationId: 'org-123' }),
    update: vi.fn().mockResolvedValue({ id: 'property-123', name: 'Updated Property' }),
    delete: vi.fn().mockResolvedValue({ id: 'property-123' }),
    findUnique: vi.fn().mockResolvedValue({ id: 'property-123', name: 'Test Property', organizationId: 'org-123', units: [], listings: [] }),
    findMany: vi.fn().mockResolvedValue([{ id: 'property-123', name: 'Test Property' }]),
    deleteMany: vi.fn().mockResolvedValue({ count: 1 }),
  },
  // Unit model
  unit: {
    create: vi.fn().mockResolvedValue({ id: 'unit-123', unitNumber: 'A101', rent: 1500, bedrooms: 2, bathrooms: 1, propertyId: 'property-123', organizationId: 'org-123' }),
    update: vi.fn().mockResolvedValue({ id: 'unit-123', unitNumber: 'A102' }),
    delete: vi.fn().mockResolvedValue({ id: 'unit-123' }),
    findUnique: vi.fn().mockResolvedValue({ id: 'unit-123', unitNumber: 'A101', propertyId: 'property-123', organizationId: 'org-123', status: 'AVAILABLE', property: { id: 'property-123', name: 'Test Property', organizationId: 'org-123', address: '123 Test St' } }),
    findMany: vi.fn().mockResolvedValue([{ id: 'unit-123', unitNumber: 'A101' }]),
    deleteMany: vi.fn().mockResolvedValue({ count: 1 }),
  },
  // Listing model
  listing: {
    create: vi.fn().mockResolvedValue({ id: 'listing-123', title: 'Test Listing', status: 'ACTIVE', unitId: 'unit-123', organizationId: 'org-123', price: 1000, createdAt: new Date(), updatedAt: new Date() }),
    update: vi.fn().mockResolvedValue({ id: 'listing-123', status: 'INACTIVE' }),
    delete: vi.fn().mockResolvedValue({ id: 'listing-123' }),
    findUnique: vi.fn().mockResolvedValue({ id: 'listing-123', title: 'Test Listing', createdAt: new Date(), updatedAt: new Date() }),
    findMany: vi.fn().mockResolvedValue([{ id: 'listing-123', title: 'Test Listing', createdAt: new Date(), updatedAt: new Date() }]),
    count: vi.fn().mockResolvedValue(1),
    deleteMany: vi.fn().mockResolvedValue({ count: 1 }),
    aggregate: vi.fn().mockResolvedValue({ _count: { id: 0 }, _avg: { price: 0 } }),
  },
  // ListingStatus model
  listingStatus: {
    create: vi.fn().mockResolvedValue({ id: 'status-123', name: 'ACTIVE' }),
    upsert: vi.fn().mockResolvedValue({ id: 'status-123', name: 'ACTIVE' }),
    findUnique: vi.fn().mockResolvedValue({ id: 'status-123', name: 'ACTIVE' }),
    findMany: vi.fn().mockResolvedValue([{ id: 'status-123', name: 'ACTIVE' }]),
    findFirst: vi.fn().mockResolvedValue({ id: 'status-123', name: 'ACTIVE' }),
  },
  // ListingAuditEntry model
  listingAuditEntry: {
    create: vi.fn().mockResolvedValue({ id: 'mock-audit-entry-id' }),
    findUnique: vi.fn().mockResolvedValue(null),
    findMany: vi.fn().mockResolvedValue([]),
    deleteMany: vi.fn().mockResolvedValue({ count: 0 }),
  },
  // TenantApplication model - both naming conventions
  tenantapplication: {
    create: vi.fn().mockResolvedValue({ id: 'mock-application-id' }),
    update: vi.fn().mockResolvedValue({ id: 'mock-application-id' }),
    delete: vi.fn().mockResolvedValue({ id: 'mock-application-id' }),
    findUnique: vi.fn().mockResolvedValue(null),
    findMany: vi.fn().mockResolvedValue([]),
    deleteMany: vi.fn().mockResolvedValue({ count: 0 }),
    updateMany: vi.fn().mockResolvedValue({ count: 0 }),
  },
  tenantApplication: {
    create: vi.fn().mockResolvedValue({ id: 'mock-application-id' }),
    update: vi.fn().mockResolvedValue({ id: 'mock-application-id' }),
    delete: vi.fn().mockResolvedValue({ id: 'mock-application-id' }),
    findUnique: vi.fn().mockResolvedValue(null),
    findMany: vi.fn().mockResolvedValue([]),
    deleteMany: vi.fn().mockResolvedValue({ count: 0 }),
    updateMany: vi.fn().mockResolvedValue({ count: 0 }),
  },
  // Lease model
  lease: {
    create: vi.fn().mockResolvedValue({ id: 'mock-lease-id' }),
    update: vi.fn().mockResolvedValue({ id: 'mock-lease-id' }),
    delete: vi.fn().mockResolvedValue({ id: 'mock-lease-id' }),
    findUnique: vi.fn().mockResolvedValue(null),
    findMany: vi.fn().mockResolvedValue([]),
    deleteMany: vi.fn().mockResolvedValue({ count: 0 }),
  },
  // MaintenanceRequest model
  maintenanceRequest: {
    create: vi.fn().mockResolvedValue({ id: 'maintenance-123' }),
    update: vi.fn().mockResolvedValue({ id: 'maintenance-123' }),
    findUnique: vi.fn().mockResolvedValue({ id: 'maintenance-123' }),
    findMany: vi.fn().mockResolvedValue([]),
    deleteMany: vi.fn().mockResolvedValue({ count: 0 }),
  },
  // Priority model
  priority: {
    create: vi.fn().mockResolvedValue({ id: 'priority-123', name: 'HIGH', level: 1 }),
    findMany: vi.fn().mockResolvedValue([
      { id: 'priority-high', name: 'HIGH', level: 1 },
      { id: 'priority-medium', name: 'MEDIUM', level: 2 },
      { id: 'priority-low', name: 'LOW', level: 3 }
    ]),
  },
};

// Mock Prisma client to avoid actual database connections in unit tests
vi.mock('@prisma/client', () => {
  return {
    PrismaClient: class {
      constructor() {
        return mockPrismaInstance;
      }
    },
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
    },
    Priority: {
      HIGH: 'HIGH',
      MEDIUM: 'MEDIUM',
      LOW: 'LOW'
    },
    MaintenanceStatus: {
      PENDING: 'PENDING',
      IN_PROGRESS: 'IN_PROGRESS',
      COMPLETED: 'COMPLETED',
      CANCELLED: 'CANCELLED'
    }
  };
});

// Mock @/lib/db to return the mocked Prisma client
vi.mock('@/lib/db', () => ({
  prisma: mockPrismaInstance,
  db: mockPrismaInstance,
}));
