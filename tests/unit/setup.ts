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

// ============================================================================
// STORAGE: Track created entities for mock lookup
// This allows findUnique to return the data that was created via create
// ============================================================================

const createdUnits = new Map<string, any>();
const createdListings = new Map<string, any>();
const createdProperties = new Map<string, any>();
const createdOrganizationUsers = new Map<string, any>();
const createdUsers = new Map<string, any>();

// Clear all tracking maps - call in beforeEach
function clearStorage() {
  createdUnits.clear();
  createdListings.clear();
  createdProperties.clear();
  createdOrganizationUsers.clear();
}

// Helper to get listing from unit's listingId
function getUnitWithListing(unit: any) {
  if (!unit) return unit;
  const result = { ...unit };
  // If unit has a listingId, try to find the listing
  if (unit.listingId) {
    result.listing = createdListings.get(unit.listingId) || null;
  }
  return result;
}

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
  
  // User model - with tracking
  user: {
    create: vi.fn().mockImplementation((args: any) => {
      const id = `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const created = {
        id,
        email: args?.data?.email || 'test@example.com',
        name: args?.data?.name || 'Test User',
        role: args?.data?.role || 'TENANT',
        ...args?.data,
      };
      createdUsers.set(id, created);
      return Promise.resolve(created);
    }),
    update: vi.fn().mockImplementation((args: any) => {
      const id = args?.where?.id || 'user-123';
      const existing = createdUsers.get(id) || { id, email: 'test@example.com', name: 'Test User', role: 'TENANT' };
      const updated = { ...existing, ...args?.data, id };
      createdUsers.set(id, updated);
      return Promise.resolve(updated);
    }),
    delete: vi.fn().mockResolvedValue({ id: 'user-123' }),
    findUnique: vi.fn().mockImplementation((args: any) => {
      const id = args?.where?.id;
      if (id && createdUsers.has(id)) {
        return Promise.resolve(createdUsers.get(id));
      }
      return Promise.resolve({ id: 'user-123', email: 'test@example.com', name: 'Test User', role: 'TENANT' });
    }),
    findMany: vi.fn().mockImplementation((args?: any) => {
      const tracked = Array.from(createdUsers.values());
      if (tracked.length > 0) return Promise.resolve(tracked);
      return Promise.resolve([{ id: 'user-123', email: 'test@example.com', name: 'Test User', role: 'TENANT' }]);
    }),
    deleteMany: vi.fn().mockResolvedValue({ count: 1 }),
  },
  
  // OrganizationUser model
  organizationUser: {
    create: vi.fn().mockImplementation((args: any) => {
      const id = `org-user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const created = {
        id,
        userId: args?.data?.userId || 'user-123',
        organizationId: args?.data?.organizationId || 'org-123',
        role: args?.data?.role || 'PROPERTY_MANAGER',
        ...args?.data,
      };
      createdOrganizationUsers.set(id, created);
      return Promise.resolve(created);
    }),
    delete: vi.fn().mockResolvedValue({ id: 'org-user-123' }),
    findUnique: vi.fn().mockImplementation((args: any) => {
      const id = args?.where?.id;
      if (id && createdOrganizationUsers.has(id)) {
        return Promise.resolve(createdOrganizationUsers.get(id));
      }
      // Also check by userId/organizationId composite
      if (args?.where?.userId && args?.where?.organizationId) {
        const found = Array.from(createdOrganizationUsers.values()).find(
          (ou: any) => ou.userId === args.where.userId && ou.organizationId === args.where.organizationId
        );
        if (found) return Promise.resolve(found);
      }
      return Promise.resolve({ id: 'org-user-123', userId: 'user-123', organizationId: 'org-123', role: 'PROPERTY_MANAGER' });
    }),
    findMany: vi.fn().mockImplementation((args?: any) => {
      // Return tracked org users plus default
      const tracked = Array.from(createdOrganizationUsers.values());
      const defaultOrgUser = [{ id: 'org-user-123', userId: 'user-123', organizationId: 'org-123', role: 'PROPERTY_MANAGER' }];
      
      // If there's a where clause for organizationId, filter
      if (args?.where?.organizationId) {
        const orgId = args.where.organizationId;
        const filtered = tracked.filter((ou: any) => ou.organizationId === orgId);
        if (filtered.length > 0) return Promise.resolve(filtered);
      }
      
      // If there's a where clause for userId, filter
      if (args?.where?.userId) {
        const userId = args.where.userId;
        const filtered = tracked.filter((ou: any) => ou.userId === userId);
        if (filtered.length > 0) return Promise.resolve(filtered);
      }
      
      return Promise.resolve(tracked.length > 0 ? tracked : defaultOrgUser);
    }),
    deleteMany: vi.fn().mockResolvedValue({ count: 1 }),
  },
  
  // Property model - with tracking for units
  property: {
    create: vi.fn().mockImplementation((args: any) => {
      const id = `property-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const created = {
        id,
        name: args?.data?.name || 'Test Property',
        address: args?.data?.address || '123 Test St',
        organizationId: args?.data?.organizationId || 'org-123',
        availabilityStatus: 'ACTIVE',
        ...args?.data,
      };
      createdProperties.set(id, created);
      return Promise.resolve(created);
    }),
    update: vi.fn().mockImplementation((args: any) => {
      const id = args?.where?.id || 'property-123';
      return Promise.resolve({
        id,
        name: args?.data?.name || 'Test Property',
        address: args?.data?.address || '123 Test St',
        organizationId: 'org-123',
        availabilityStatus: args?.data?.availabilityStatus || 'ACTIVE',
        ...args?.data,
      });
    }),
    delete: vi.fn().mockResolvedValue({ id: 'property-123' }),
    findUnique: vi.fn().mockImplementation((args: any) => {
      const id = args?.where?.id;
      
      // First check if we have a tracked property
      if (id && createdProperties.has(id)) {
        const property = createdProperties.get(id);
        
        // Check if include is requesting units
        const include = args?.include;
        const includeUnits = include?.units === true || (include?.units && typeof include.units === 'object');
        const includeListings = include?.listings === true || (include?.listings && typeof include.listings === 'object');
        
        // Get units for this property
        let units: any[] = [];
        let listings: any[] = [];
        
        if (includeUnits) {
          units = Array.from(createdUnits.values()).filter(
            (u: any) => u.propertyId === id
          );
          
          // If include units with listing, add listing to each unit
          if (include?.units?.include?.listing) {
            units = units.map((u: any) => ({
              ...u,
              listing: u.listingId ? createdListings.get(u.listingId) : null,
              tenantApplications: [],
              leases: [],
            }));
          } else {
            // Add leases array to units even without listing include
            units = units.map((u: any) => ({
              ...u,
              leases: [],
            }));
          }
        }
        
        if (includeListings) {
          listings = Array.from(createdListings.values()).filter(
            (l: any) => l.propertyId === id
          );
        }
        
        return Promise.resolve({
          ...property,
          units,
          listings,
        });
      }
      
      // Check if include is requesting units
      const include = args?.include;
      const includeUnits = include?.units === true || (include?.units && typeof include.units === 'object');
      
      // Get units for this property
      let units: any[] = [];
      if (includeUnits) {
        // Get all units that belong to this property from our tracking
        units = Array.from(createdUnits.values()).filter(
          (u: any) => u.propertyId === id || !id || id === 'property-123'
        );
        
        // If include units with listing, add listing to each unit
        if (include?.units?.include?.listing) {
          units = units.map((u: any) => ({
            ...u,
            listing: u.listingId ? createdListings.get(u.listingId) : null,
            tenantApplications: [],
            leases: [],
          }));
        } else {
          // Add leases array to units even without listing include
          units = units.map((u: any) => ({
            ...u,
            leases: [],
          }));
        }
      }
      
      // Return property with units if requested
      if (includeUnits) {
        return Promise.resolve({
          id: id || 'property-123',
          name: 'Test Property',
          address: '123 Test St',
          organizationId: 'org-123',
          availabilityStatus: 'ACTIVE',
          units,
          listings: [],
        });
      }
      
      // Default response without include
      return Promise.resolve({ 
        id: id || 'property-123', 
        name: 'Test Property', 
        address: '123 Test St', 
        organizationId: 'org-123',
        availabilityStatus: 'ACTIVE',
        units: [], 
        listings: [] 
      });
    }),
    findMany: vi.fn().mockImplementation((args?: any) => {
      // Return tracked properties plus the default
      const tracked = Array.from(createdProperties.values());
      const defaultProp = { 
        id: 'property-123', 
        name: 'Test Property', 
        address: '123 Test St', 
        organizationId: 'org-123',
        availabilityStatus: 'ACTIVE',
      };
      
      // If there's a where clause, filter by organizationId
      if (args?.where?.organizationId) {
        const orgId = args.where.organizationId;
        const filtered = tracked.filter(p => p.organizationId === orgId);
        if (filtered.length > 0) {
          return Promise.resolve(filtered);
        }
      }
      
      // Return tracked properties or default
      return Promise.resolve(tracked.length > 0 ? tracked : [defaultProp]);
    }),
    deleteMany: vi.fn().mockResolvedValue({ count: 1 }),
    count: vi.fn().mockResolvedValue(1),
  },
  
  // Unit model - with tracking
  unit: {
    create: vi.fn().mockImplementation((args: any) => {
      const id = `unit-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const created = {
        id,
        unitNumber: args?.data?.unitNumber || 'A101',
        propertyId: args?.data?.propertyId || 'property-123',
        organizationId: args?.data?.organizationId || 'org-123',
        status: 'AVAILABLE',
        listingId: null,
        listing: null,
        property: { id: 'property-123', name: 'Test Property', organizationId: 'org-123', address: '123 Test St' },
        ...args?.data,
      };
      createdUnits.set(id, created);
      return Promise.resolve(created);
    }),
    update: vi.fn().mockImplementation((args: any) => {
      const id = args?.where?.id || 'unit-123';
      const existing = createdUnits.get(id) || { id, unitNumber: 'A101', propertyId: 'property-123', organizationId: 'org-123', status: 'AVAILABLE' };
      const updated = { ...existing, ...args?.data, id };
      createdUnits.set(id, updated);
      return Promise.resolve(updated);
    }),
    delete: vi.fn().mockResolvedValue({ id: 'unit-123' }),
    findUnique: vi.fn().mockImplementation((args: any) => {
      const id = args?.where?.id;
      // First check if we have a tracked unit
      if (id && createdUnits.has(id)) {
        const unit = createdUnits.get(id);
        // Include listing if present
        const listing = unit.listingId ? createdListings.get(unit.listingId) : null;
        return Promise.resolve({
          ...unit,
          listing,
          leases: [],  // Include leases field for application control service
        });
      }
      // Fall back to default
      return Promise.resolve({ 
        id: 'unit-123', 
        unitNumber: 'A101', 
        propertyId: 'property-123', 
        organizationId: 'org-123', 
        status: 'AVAILABLE',
        listing: null,  // Include listing field for application control service
        leases: [],     // Include leases field for application control service
        property: { id: 'property-123', name: 'Test Property', organizationId: 'org-123', address: '123 Test St' } 
      });
    }),
    findMany: vi.fn().mockImplementation((args?: any) => {
      const created = Array.from(createdUnits.values());
      // If no units created yet, return default
      if (created.length === 0) {
        return Promise.resolve([{ 
          id: 'unit-123', 
          unitNumber: 'A101', 
          propertyId: 'property-123', 
          organizationId: 'org-123', 
          status: 'AVAILABLE' 
        }]);
      }
      return Promise.resolve(created);
    }),
    deleteMany: vi.fn().mockResolvedValue({ count: 1 }),
    count: vi.fn().mockResolvedValue(1),
  },
  
  // Listing model - with tracking
  listing: {
    create: vi.fn().mockImplementation((args: any) => {
      const id = `listing-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const created = {
        id,
        title: args?.data?.title || 'Test Listing',
        status: args?.data?.status || 'ACTIVE',
        unitId: args?.data?.unitId || 'unit-123',
        organizationId: args?.data?.organizationId || 'org-123',
        price: args?.data?.price || 1000,
        availabilityDate: args?.data?.availabilityDate || null,
        expirationDate: args?.data?.expirationDate || null,
        createdAt: new Date(),
        updatedAt: new Date(),
        ...args?.data,
      };
      createdListings.set(id, created);
      
      // Also update the unit's listingId reference if unitId is provided
      if (created.unitId && createdUnits.has(created.unitId)) {
        const unit = createdUnits.get(created.unitId);
        unit.listingId = id;
        unit.listing = created;
        createdUnits.set(created.unitId, unit);
      }
      
      return Promise.resolve(created);
    }),
    update: vi.fn().mockImplementation((args: any) => {
      const id = args?.where?.id || 'listing-123';
      const existing = createdListings.get(id) || { 
        id, title: 'Test Listing', status: 'ACTIVE', unitId: 'unit-123', organizationId: 'org-123', price: 1000 
      };
      const updated = { ...existing, ...args?.data, id, updatedAt: new Date() };
      createdListings.set(id, updated);
      return Promise.resolve(updated);
    }),
    delete: vi.fn().mockResolvedValue({ id: 'listing-123' }),
    findUnique: vi.fn().mockImplementation((args: any) => {
      const id = args?.where?.id;
      if (id && createdListings.has(id)) {
        return Promise.resolve(createdListings.get(id));
      }
      // Fall back to default
      return Promise.resolve({ 
        id: 'listing-123', 
        title: 'Test Listing', 
        status: 'ACTIVE',
        unitId: 'unit-123', 
        organizationId: 'org-123', 
        price: 1000, 
        availabilityDate: null,
        expirationDate: null,
        createdAt: new Date(), 
        updatedAt: new Date() 
      });
    }),
    findMany: vi.fn().mockImplementation((args?: any) => {
      const created = Array.from(createdListings.values());
      // If no listings created yet, return default
      if (created.length === 0) {
        return Promise.resolve([{ 
          id: 'listing-123', 
          title: 'Test Listing', 
          status: 'ACTIVE',
          unitId: 'unit-123', 
          organizationId: 'org-123', 
          price: 1000,
          availabilityDate: null,
          expirationDate: null,
          createdAt: new Date(), 
          updatedAt: new Date() 
        }]);
      }
      if (args?.where?.unitId) {
        return Promise.resolve(created.filter((l: any) => l.unitId === args.where.unitId));
      }
      return Promise.resolve(created);
    }),
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
    create: vi.fn().mockImplementation((args: any) => {
      const id = `maintenance-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      return Promise.resolve({
        id,
        status: args?.data?.status || 'OPEN',
        priority: args?.data?.priority || 'MEDIUM',
        unitId: args?.data?.unitId || 'unit-123',
        description: args?.data?.description || 'Test maintenance request',
        ...args?.data,
      });
    }),
    update: vi.fn().mockResolvedValue({ id: 'maintenance-123', status: 'IN_PROGRESS', priority: 'MEDIUM', unitId: 'unit-123', description: 'Test maintenance request' }),
    delete: vi.fn().mockResolvedValue({ id: 'maintenance-123' }),
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
  
  // Clear tracking maps for fresh test state
  createdUnits.clear();
  createdListings.clear();
  createdProperties.clear();
  createdOrganizationUsers.clear();
  
  // Re-apply defaults after clearAllMocks wipes return values
  // These are the most critical defaults that tests rely on
  // Note: We don't reset property.findUnique because our tracking implementation
  // handles both created properties and defaults properly
  
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
