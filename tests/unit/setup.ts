/**
 * Unit Test Isolation Firewall
 * 
 * This setup file provides isolation for unit tests by:
 * 1. Mocking external dependencies at module level
 * 2. Providing a shared mock instance with all Prisma models
 * 3. Restoring defaults in beforeEach
 * 4. Cleaning up in afterEach
 * 
 * The key is that vi.mock calls must be at module level (top of file)
 * to ensure they're hoisted and applied before any imports.
 */

import { vi, beforeEach, afterEach } from 'vitest';

// ============================================================================
// STEP 1: Create mockPrismaInstance - shared mock with all Prisma models
// Each method is pre-configured with vi.fn().mockResolvedValue(...) 
// so nothing returns undefined by default
// ============================================================================

// Create mock Prisma client instance
// Default mock implementations that return properly shaped objects
const mockPrismaInstance = {
  $connect: vi.fn().mockResolvedValue(undefined),
  $disconnect: vi.fn().mockResolvedValue(undefined),
  $transaction: vi.fn().mockImplementation(async (callback) => callback(mockPrismaInstance)),
  
  // Organization model
  organization: {
    create: vi.fn().mockResolvedValue({ id: 'org-123', name: 'Test Org', type: 'PROPERTY_MANAGEMENT' }),
    update: vi.fn().mockResolvedValue({ id: 'org-123', name: 'Updated Org', type: 'PROPERTY_MANAGEMENT' }),
    delete: vi.fn().mockResolvedValue({ id: 'org-123' }),
    findUnique: vi.fn().mockResolvedValue({ id: 'org-123', name: 'Test Org', type: 'PROPERTY_MANAGEMENT' }),
    findMany: vi.fn().mockResolvedValue([{ id: 'org-123', name: 'Test Org', type: 'PROPERTY_MANAGEMENT' }]),
    deleteMany: vi.fn().mockResolvedValue({ count: 1 }),
  },
  
  // User model
  user: {
    create: vi.fn().mockResolvedValue({ id: 'user-123', email: 'test@example.com', name: 'Test User', role: 'TENANT' }),
    update: vi.fn().mockResolvedValue({ id: 'user-123', name: 'Updated User', email: 'test@example.com', role: 'TENANT' }),
    delete: vi.fn().mockResolvedValue({ id: 'user-123' }),
    findUnique: vi.fn().mockResolvedValue({ id: 'user-123', email: 'test@example.com', name: 'Test User', role: 'TENANT' }),
    findMany: vi.fn().mockResolvedValue([{ id: 'user-123', email: 'test@example.com', name: 'Test User', role: 'TENANT' }]),
    deleteMany: vi.fn().mockResolvedValue({ count: 1 }),
  },
  
  // OrganizationUser model
  organizationUser: {
    create: vi.fn().mockResolvedValue({ id: 'org-user-123', userId: 'user-123', organizationId: 'org-123', role: 'PROPERTY_MANAGER' }),
    delete: vi.fn().mockResolvedValue({ id: 'org-user-123' }),
    findUnique: vi.fn().mockResolvedValue({ id: 'org-user-123', userId: 'user-123', organizationId: 'org-123', role: 'PROPERTY_MANAGER' }),
    findMany: vi.fn().mockResolvedValue([{ id: 'org-user-123', userId: 'user-123', organizationId: 'org-123', role: 'PROPERTY_MANAGER' }]),
    deleteMany: vi.fn().mockResolvedValue({ count: 1 }),
  },
  
  // Property model
  property: {
    create: vi.fn().mockResolvedValue({ id: 'property-123', name: 'Test Property', address: '123 Test St', organizationId: 'org-123' }),
    update: vi.fn().mockResolvedValue({ id: 'property-123', name: 'Updated Property', address: '123 Test St', organizationId: 'org-123' }),
    delete: vi.fn().mockResolvedValue({ id: 'property-123' }),
    findUnique: vi.fn().mockResolvedValue({ id: 'property-123', name: 'Test Property', address: '123 Test St', organizationId: 'org-123', units: [], listings: [] }),
    findMany: vi.fn().mockResolvedValue([{ id: 'property-123', name: 'Test Property', address: '123 Test St', organizationId: 'org-123' }]),
    deleteMany: vi.fn().mockResolvedValue({ count: 1 }),
    count: vi.fn().mockResolvedValue(1),
  },
  
  // Unit model
  unit: {
    create: vi.fn().mockResolvedValue({ id: 'unit-123', unitNumber: 'A101', rent: 1500, bedrooms: 2, bathrooms: 1, propertyId: 'property-123', organizationId: 'org-123', status: 'AVAILABLE' }),
    update: vi.fn().mockResolvedValue({ id: 'unit-123', unitNumber: 'A102', rent: 1500, bedrooms: 2, bathrooms: 1, propertyId: 'property-123', organizationId: 'org-123', status: 'AVAILABLE' }),
    delete: vi.fn().mockResolvedValue({ id: 'unit-123' }),
    findUnique: vi.fn().mockResolvedValue({ 
      id: 'unit-123', 
      unitNumber: 'A101', 
      propertyId: 'property-123', 
      organizationId: 'org-123', 
      status: 'AVAILABLE',
      property: { id: 'property-123', name: 'Test Property', organizationId: 'org-123', address: '123 Test St' } 
    }),
    findMany: vi.fn().mockResolvedValue([{ id: 'unit-123', unitNumber: 'A101', propertyId: 'property-123', organizationId: 'org-123', status: 'AVAILABLE' }]),
    deleteMany: vi.fn().mockResolvedValue({ count: 1 }),
    count: vi.fn().mockResolvedValue(1),
  },
  
  // Listing model
  listing: {
    create: vi.fn().mockResolvedValue({ 
      id: 'listing-123', 
      title: 'Test Listing', 
      status: 'ACTIVE', 
      unitId: 'unit-123', 
      organizationId: 'org-123', 
      price: 1000, 
      createdAt: new Date(), 
      updatedAt: new Date() 
    }),
    update: vi.fn().mockResolvedValue({ 
      id: 'listing-123', 
      title: 'Test Listing', 
      status: 'INACTIVE', 
      unitId: 'unit-123', 
      organizationId: 'org-123', 
      price: 1000, 
      createdAt: new Date(), 
      updatedAt: new Date() 
    }),
    delete: vi.fn().mockResolvedValue({ id: 'listing-123' }),
    findUnique: vi.fn().mockResolvedValue({ 
      id: 'listing-123', 
      title: 'Test Listing', 
      status: 'ACTIVE',
      unitId: 'unit-123', 
      organizationId: 'org-123', 
      price: 1000, 
      createdAt: new Date(), 
      updatedAt: new Date() 
    }),
    findMany: vi.fn().mockResolvedValue([{ 
      id: 'listing-123', 
      title: 'Test Listing', 
      status: 'ACTIVE',
      unitId: 'unit-123', 
      organizationId: 'org-123', 
      price: 1000, 
      createdAt: new Date(), 
      updatedAt: new Date() 
    }]),
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
    update: vi.fn().mockResolvedValue({ id: 'status-123', name: 'INACTIVE' }),
    delete: vi.fn().mockResolvedValue({ id: 'status-123' }),
  },
  
  // ListingAuditEntry model
  listingAuditEntry: {
    create: vi.fn().mockResolvedValue({ id: 'mock-audit-entry-id', listingId: 'listing-123', action: 'CREATE', performedBy: 'user-123', createdAt: new Date() }),
    findUnique: vi.fn().mockResolvedValue({ id: 'mock-audit-entry-id', listingId: 'listing-123', action: 'CREATE', performedBy: 'user-123', createdAt: new Date() }),
    findMany: vi.fn().mockResolvedValue([{ id: 'mock-audit-entry-id', listingId: 'listing-123', action: 'CREATE', performedBy: 'user-123', createdAt: new Date() }]),
    deleteMany: vi.fn().mockResolvedValue({ count: 0 }),
  },
  
  // TenantApplication model - both naming conventions
  tenantapplication: {
    create: vi.fn().mockResolvedValue({ id: 'mock-application-id', status: 'PENDING', applicantId: 'user-123', listingId: 'listing-123' }),
    update: vi.fn().mockResolvedValue({ id: 'mock-application-id', status: 'APPROVED', applicantId: 'user-123', listingId: 'listing-123' }),
    delete: vi.fn().mockResolvedValue({ id: 'mock-application-id' }),
    findUnique: vi.fn().mockResolvedValue({ id: 'mock-application-id', status: 'PENDING', applicantId: 'user-123', listingId: 'listing-123' }),
    findMany: vi.fn().mockResolvedValue([{ id: 'mock-application-id', status: 'PENDING', applicantId: 'user-123', listingId: 'listing-123' }]),
    deleteMany: vi.fn().mockResolvedValue({ count: 0 }),
    updateMany: vi.fn().mockResolvedValue({ count: 0 }),
  },
  tenantApplication: {
    create: vi.fn().mockResolvedValue({ id: 'mock-application-id', status: 'PENDING', applicantId: 'user-123', listingId: 'listing-123' }),
    update: vi.fn().mockResolvedValue({ id: 'mock-application-id', status: 'APPROVED', applicantId: 'user-123', listingId: 'listing-123' }),
    delete: vi.fn().mockResolvedValue({ id: 'mock-application-id' }),
    findUnique: vi.fn().mockResolvedValue({ id: 'mock-application-id', status: 'PENDING', applicantId: 'user-123', listingId: 'listing-123' }),
    findMany: vi.fn().mockResolvedValue([{ id: 'mock-application-id', status: 'PENDING', applicantId: 'user-123', listingId: 'listing-123' }]),
    deleteMany: vi.fn().mockResolvedValue({ count: 0 }),
    updateMany: vi.fn().mockResolvedValue({ count: 0 }),
  },
  
  // Lease model
  lease: {
    create: vi.fn().mockResolvedValue({ id: 'mock-lease-id', status: 'ACTIVE', tenantId: 'user-123', unitId: 'unit-123' }),
    update: vi.fn().mockResolvedValue({ id: 'mock-lease-id', status: 'ACTIVE', tenantId: 'user-123', unitId: 'unit-123' }),
    delete: vi.fn().mockResolvedValue({ id: 'mock-lease-id' }),
    findUnique: vi.fn().mockResolvedValue({ id: 'mock-lease-id', status: 'ACTIVE', tenantId: 'user-123', unitId: 'unit-123' }),
    findMany: vi.fn().mockResolvedValue([{ id: 'mock-lease-id', status: 'ACTIVE', tenantId: 'user-123', unitId: 'unit-123' }]),
    deleteMany: vi.fn().mockResolvedValue({ count: 0 }),
    count: vi.fn().mockResolvedValue(1),
  },
  
  // MaintenanceRequest model
  maintenanceRequest: {
    create: vi.fn().mockResolvedValue({ id: 'maintenance-123', status: 'OPEN', priority: 'MEDIUM', unitId: 'unit-123', description: 'Test maintenance request' }),
    update: vi.fn().mockResolvedValue({ id: 'maintenance-123', status: 'IN_PROGRESS', priority: 'MEDIUM', unitId: 'unit-123', description: 'Test maintenance request' }),
    findUnique: vi.fn().mockResolvedValue({ id: 'maintenance-123', status: 'OPEN', priority: 'MEDIUM', unitId: 'unit-123', description: 'Test maintenance request' }),
    findMany: vi.fn().mockResolvedValue([{ id: 'maintenance-123', status: 'OPEN', priority: 'MEDIUM', unitId: 'unit-123', description: 'Test maintenance request' }]),
    deleteMany: vi.fn().mockResolvedValue({ count: 0 }),
    count: vi.fn().mockResolvedValue(1),
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
  
  // Additional models that might be needed
  invoice: {
    create: vi.fn().mockResolvedValue({ id: 'invoice-123', status: 'PENDING', tenantId: 'user-123', amount: 1000 }),
    update: vi.fn().mockResolvedValue({ id: 'invoice-123', status: 'PAID', tenantId: 'user-123', amount: 1000 }),
    findUnique: vi.fn().mockResolvedValue({ id: 'invoice-123', status: 'PENDING', tenantId: 'user-123', amount: 1000 }),
    findMany: vi.fn().mockResolvedValue([{ id: 'invoice-123', status: 'PENDING', tenantId: 'user-123', amount: 1000 }]),
    deleteMany: vi.fn().mockResolvedValue({ count: 0 }),
  },
  
  payment: {
    create: vi.fn().mockResolvedValue({ id: 'payment-123', status: 'PENDING', amount: 1000, tenantId: 'user-123' }),
    update: vi.fn().mockResolvedValue({ id: 'payment-123', status: 'SETTLED', amount: 1000, tenantId: 'user-123' }),
    findUnique: vi.fn().mockResolvedValue({ id: 'payment-123', status: 'PENDING', amount: 1000, tenantId: 'user-123' }),
    findMany: vi.fn().mockResolvedValue([{ id: 'payment-123', status: 'PENDING', amount: 1000, tenantId: 'user-123' }]),
    deleteMany: vi.fn().mockResolvedValue({ count: 0 }),
  },
  
  vendor: {
    create: vi.fn().mockResolvedValue({ id: 'vendor-123', name: 'Test Vendor', organizationId: 'org-123' }),
    update: vi.fn().mockResolvedValue({ id: 'vendor-123', name: 'Updated Vendor', organizationId: 'org-123' }),
    findUnique: vi.fn().mockResolvedValue({ id: 'vendor-123', name: 'Test Vendor', organizationId: 'org-123' }),
    findMany: vi.fn().mockResolvedValue([{ id: 'vendor-123', name: 'Test Vendor', organizationId: 'org-123' }]),
    deleteMany: vi.fn().mockResolvedValue({ count: 0 }),
  },
  
  utility: {
    create: vi.fn().mockResolvedValue({ id: 'utility-123', type: 'WATER', propertyId: 'property-123' }),
    update: vi.fn().mockResolvedValue({ id: 'utility-123', type: 'WATER', propertyId: 'property-123' }),
    findUnique: vi.fn().mockResolvedValue({ id: 'utility-123', type: 'WATER', propertyId: 'property-123' }),
    findMany: vi.fn().mockResolvedValue([{ id: 'utility-123', type: 'WATER', propertyId: 'property-123' }]),
    deleteMany: vi.fn().mockResolvedValue({ count: 0 }),
  },
  
  // LeaseAuditLog model
  leaseAuditLog: {
    create: vi.fn().mockResolvedValue({ id: 'lease-audit-123', leaseId: 'mock-lease-id', action: 'CREATE', performedBy: 'user-123', createdAt: new Date() }),
    findUnique: vi.fn().mockResolvedValue({ id: 'lease-audit-123', leaseId: 'mock-lease-id', action: 'CREATE', performedBy: 'user-123', createdAt: new Date() }),
    findMany: vi.fn().mockResolvedValue([{ id: 'lease-audit-123', leaseId: 'mock-lease-id', action: 'CREATE', performedBy: 'user-123', createdAt: new Date() }]),
    deleteMany: vi.fn().mockResolvedValue({ count: 0 }),
  },
};

// ============================================================================
// STEP 2: Module-level vi.mock calls
// These MUST be after mockPrismaInstance is defined
// ============================================================================

// Mock @prisma/client - replaces PrismaClient with a constructor mock
// and inlines all enums so tests don't need a real Prisma client
vi.mock('@prisma/client', () => {
  return {
    PrismaClient: class {
      constructor() {
        return mockPrismaInstance;
      }
    },
    // Inline all enums used in tests
    ListingStatus_enum: {
      PRIVATE: 'PRIVATE',
      PUBLIC: 'PUBLIC',
      ACTIVE: 'ACTIVE',
      INACTIVE: 'INACTIVE',
      DRAFT: 'DRAFT',
      ARCHIVED: 'ARCHIVED',
    },
    Priority: {
      LOW: 'LOW',
      MEDIUM: 'MEDIUM',
      HIGH: 'HIGH',
    },
    UserRole: {
      TENANT: 'TENANT',
      LANDLORD: 'LANDLORD',
      PROPERTY_MANAGER: 'PROPERTY_MANAGER',
      ADMIN: 'ADMIN',
      SYSTEM_ADMIN: 'SYSTEM_ADMIN',
    },
    MaintenanceStatus: {
      OPEN: 'OPEN',
      IN_PROGRESS: 'IN_PROGRESS',
      COMPLETED: 'COMPLETED',
      CANCELLED: 'CANCELLED',
    },
    TransactionStatus: {
      PENDING: 'PENDING',
      AUTHORIZED: 'AUTHORIZED',
      SETTLED: 'SETTLED',
      FAILED: 'FAILED',
      DISPUTED: 'DISPUTED',
      REVERSED: 'REVERSED',
    },
    PaymentGateway: {
      STRIPE: 'STRIPE',
      PLAID: 'PLAID',
      PAYSTACK: 'PAYSTACK',
      MPESA_DIRECT: 'MPESA_DIRECT',
      MANUAL: 'MANUAL',
    },
    // Additional enums that might be needed
    ApplicationStatus: {
      PENDING: 'PENDING',
      APPROVED: 'APPROVED',
      REJECTED: 'REJECTED',
    },
    Lease_leaseStatus: {
      DRAFT: 'DRAFT',
      ACTIVE: 'ACTIVE',
      EXPIRED: 'EXPIRED',
      TERMINATED: 'TERMINATED',
    },
    MaintenanceRequest_status: {
      OPEN: 'OPEN',
      IN_PROGRESS: 'IN_PROGRESS',
      COMPLETED: 'COMPLETED',
      CANCELLED: 'CANCELLED',
    },
    RequestCategory: {
      EMERGENCY: 'EMERGENCY',
      ROUTINE: 'ROUTINE',
      PREVENTATIVE: 'PREVENTATIVE',
    },
  };
});

// Mock @/lib/db - makes every import of the database client
// across all test files receive mockPrismaInstance
vi.mock('@/lib/db', () => ({
  prisma: mockPrismaInstance,
  db: mockPrismaInstance,
}));

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

// Export the mock instance so tests can access and customize it
export { mockPrismaInstance };

// ============================================================================
// STEP 3: beforeEach - Restore defaults after vi.clearAllMocks()
// Because vi.clearAllMocks() wipes return values, we need to re-apply
// the most critical defaults after clearing
// ============================================================================

beforeEach(() => {
  vi.clearAllMocks();
  
  // Re-apply defaults after clearAllMocks wipes return values
  // These are the most critical defaults that tests rely on
  mockPrismaInstance.listing.create.mockResolvedValue({ 
    id: 'listing-123', 
    title: 'Test Listing', 
    status: 'ACTIVE', 
    unitId: 'unit-123', 
    organizationId: 'org-123', 
    price: 1000, 
    createdAt: new Date(), 
    updatedAt: new Date() 
  });
  
  mockPrismaInstance.listing.findMany.mockResolvedValue([{ 
    id: 'listing-123', 
    title: 'Test Listing', 
    status: 'ACTIVE',
    unitId: 'unit-123', 
    organizationId: 'org-123', 
    price: 1000, 
    createdAt: new Date(), 
    updatedAt: new Date() 
  }]);
  
  mockPrismaInstance.unit.findUnique.mockResolvedValue({ 
    id: 'unit-123', 
    unitNumber: 'A101', 
    propertyId: 'property-123', 
    organizationId: 'org-123', 
    status: 'AVAILABLE',
    property: { id: 'property-123', name: 'Test Property', organizationId: 'org-123', address: '123 Test St' } 
  });
  
  mockPrismaInstance.property.findUnique.mockResolvedValue({ 
    id: 'property-123', 
    name: 'Test Property', 
    organizationId: 'org-123', 
    units: [], 
    listings: [] 
  });
  
  mockPrismaInstance.listingStatus.create.mockResolvedValue({ id: 'status-123', name: 'ACTIVE' });
  mockPrismaInstance.listingStatus.findFirst.mockResolvedValue({ id: 'status-123', name: 'ACTIVE' });
  
  // Restore $transaction implementation
  mockPrismaInstance.$transaction.mockImplementation(async (callback) => callback(mockPrismaInstance));
});

// ============================================================================
// STEP 4: afterEach - Clean up any spies or overrides
// vi.restoreAllMocks() cleans up any spies or overrides individual tests
// may have set, preventing state from leaking between tests
// ============================================================================

afterEach(() => {
  vi.restoreAllMocks();
});
