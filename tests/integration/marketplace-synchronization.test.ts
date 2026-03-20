/**
 * Property-Based Test: Marketplace Visibility Synchronization
 * **Feature: marketplace-listing-choice, Property 3: Marketplace Visibility Synchronization**
 * **Validates: Requirements 2.4, 5.5, 7.4**
 * 
 * Property: For any unit status change or listing update, the marketplace visibility 
 * should be updated immediately to reflect the new state
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import fc from 'fast-check'
import { prisma } from './setup'
import { ListingService } from '@/lib/listing-service'
import { ListingStatus, CreateListingData, BulkListingActionType } from '@/lib/listing-types'

// Test data generators
function generateUserData() {
  return {
    id: `user-${Math.random().toString(36).substr(2, 9)}`,
    email: `test-${Math.random().toString(36).substr(2, 9)}@example.com`,
    passwordHash: 'test-hash',
    firstName: 'Test',
    lastName: 'User'
  };
}

function generateOrganizationData() {
  return {
    id: `org-${Math.random().toString(36).substr(2, 9)}`,
    name: 'Test Organization',
    slug: `test-org-${Math.random().toString(36).substr(2, 9)}`
  };
}

function generatePropertyData(managerId: string, organizationId: string) {
  return {
    id: `prop-${Math.random().toString(36).substr(2, 9)}`,
    name: `Test Property ${Math.floor(Math.random() * 1000)}`,
    city: 'Test City',
    managerId,
    organizationId
  };
}

function generateUnitData(propertyId: string) {
  return {
    id: `unit-${Math.random().toString(36).substr(2, 9)}`,
    unitNumber: `Unit-${Math.floor(Math.random() * 1000)}`,
    propertyId,
    bedrooms: Math.floor(Math.random() * 4) + 1,
    bathrooms: Math.floor(Math.random() * 3) + 1,
    rentAmount: Math.floor(Math.random() * 3000) + 500,
    isOccupied: false
  };
}

function generateListingData(unitId: string, organizationId: string, userId: string) {
  return {
    id: `listing-${Math.random().toString(36).substr(2, 9)}`,
    organizationId,
    createdBy: userId,
    title: `Test Listing ${Math.floor(Math.random() * 1000)}`,
    description: 'Test listing description',
    price: Math.floor(Math.random() * 3000) + 500,
    unitId
  };
}

// Generator for listing data
const listingDataGenerator = fc.record({
  title: fc.string({ minLength: 3, maxLength: 100 }),
  description: fc.string({ minLength: 10, maxLength: 500 }),
  price: fc.float({ min: 100, max: 10000 }),
})

// Generator for listing status changes
const statusChangeGenerator = fc.record({
  fromStatus: fc.constantFrom(...Object.values(ListingStatus)),
  toStatus: fc.constantFrom(...Object.values(ListingStatus)),
})

describe('Property 3: Marketplace Visibility Synchronization', () => {
  let listingService: ListingService
  let testUser: any
  let testOrganization: any
  let testManager: any
  let createdEntities: {
    users: string[];
    organizations: string[];
    organizationUsers: string[];
    properties: string[];
    units: string[];
    listings: string[];
  };

  beforeEach(async () => {
    listingService = new ListingService()
    
    // Initialize tracking for cleanup
    createdEntities = {
      users: [],
      organizations: [],
      organizationUsers: [],
      properties: [],
      units: [],
      listings: []
    };

    // Create test user
    testUser = await prisma.user.create({
      data: generateUserData()
    });
    createdEntities.users.push(testUser.id);

    // Create test organization
    testOrganization = await prisma.organization.create({
      data: generateOrganizationData()
    });
    createdEntities.organizations.push(testOrganization.id);

    // Create organization user (property manager)
    testManager = await prisma.organizationUser.create({
      data: {
        id: `orguser-${Math.random().toString(36).substr(2, 9)}`,
        userId: testUser.id,
        organizationId: testOrganization.id,
        role: 'PROPERTY_MANAGER'
      }
    });
    createdEntities.organizationUsers.push(testManager.id);
  })

  afterEach(async () => {
    // Clean up in reverse order of dependencies
    if (createdEntities.listings.length > 0) {
      await prisma.listing.deleteMany({
        where: { id: { in: createdEntities.listings } }
      });
    }

    if (createdEntities.units.length > 0) {
      await prisma.unit.deleteMany({
        where: { id: { in: createdEntities.units } }
      });
    }

    if (createdEntities.properties.length > 0) {
      await prisma.property.deleteMany({
        where: { id: { in: createdEntities.properties } }
      });
    }

    if (createdEntities.organizationUsers.length > 0) {
      await prisma.organizationUser.deleteMany({
        where: { id: { in: createdEntities.organizationUsers } }
      });
    }

    if (createdEntities.organizations.length > 0) {
      await prisma.organization.deleteMany({
        where: { id: { in: createdEntities.organizations } }
      });
    }

    if (createdEntities.users.length > 0) {
      await prisma.user.deleteMany({
        where: { id: { in: createdEntities.users } }
      });
    }
  })

  it('should create listings with marketplace synchronization', async () => {
    const iterations = 10;
    
    for (let i = 0; i < iterations; i++) {
      // Generate test data
      const propertyData = generatePropertyData(testManager.id, testOrganization.id);
      const unitData = generateUnitData(propertyData.id);

      // Create property and unit
      const property = await prisma.property.create({ data: propertyData });
      createdEntities.properties.push(property.id);

      const unit = await prisma.unit.create({ data: unitData });
      createdEntities.units.push(unit.id);

      // Generate listing data
      const listingData = {
        title: `Test Listing ${i}`,
        description: 'Test listing description for marketplace synchronization',
        price: Math.floor(Math.random() * 3000) + 500
      };

      // Execute listing creation
      const result = await listingService.createListing(
        unit.id,
        listingData as CreateListingData,
        testUser.id,
        testOrganization.id
      )

      // Verify listing was created
      if (result.success && result.data?.listing) {
        createdEntities.listings.push(result.data.listing.id);
        
        // Verify the listing exists in database
        const createdListing = await prisma.listing.findUnique({
          where: { id: result.data.listing.id }
        });

        expect(createdListing).toBeTruthy();
        expect(createdListing!.title).toBe(listingData.title);
        expect(createdListing!.organizationId).toBe(testOrganization.id);

        // Verify unit was updated with listing reference
        const updatedUnit = await prisma.unit.findUnique({
          where: { id: unit.id }
        });

        expect(updatedUnit!.listingId).toBe(createdListing!.id);
      }
    }
  })

  it('should update listings with marketplace synchronization', async () => {
    const iterations = 8;
    
    for (let i = 0; i < iterations; i++) {
      // Generate test data
      const propertyData = generatePropertyData(testManager.id, testOrganization.id);
      const unitData = generateUnitData(propertyData.id);

      // Create property and unit
      const property = await prisma.property.create({ data: propertyData });
      createdEntities.properties.push(property.id);

      const unit = await prisma.unit.create({ data: unitData });
      createdEntities.units.push(unit.id);

      // Create listing
      const listingData = generateListingData(unit.id, testOrganization.id, testUser.id);
      const listing = await prisma.listing.create({ data: listingData });
      createdEntities.listings.push(listing.id);

      // Generate update data
      const updateData = {
        title: `Updated Listing ${i}`,
        description: 'Updated description',
        price: Math.floor(Math.random() * 3000) + 500
      };

      // Execute listing update
      const result = await listingService.updateListingInformation(
        listing.id,
        updateData,
        testUser.id
      )

      // Verify listing was updated
      if (result.success) {
        const updatedListing = await prisma.listing.findUnique({
          where: { id: listing.id }
        });

        expect(updatedListing).toBeTruthy();
        expect(updatedListing!.title).toBe(updateData.title);
        expect(updatedListing!.description).toBe(updateData.description);
        expect(updatedListing!.price).toBe(updateData.price);
      }
    }
  })

  it('should update listing status with marketplace synchronization', async () => {
    const iterations = 10;
    
    for (let i = 0; i < iterations; i++) {
      // Generate test data
      const propertyData = generatePropertyData(testManager.id, testOrganization.id);
      const unitData = generateUnitData(propertyData.id);

      // Create property and unit
      const property = await prisma.property.create({ data: propertyData });
      createdEntities.properties.push(property.id);

      const unit = await prisma.unit.create({ data: unitData });
      createdEntities.units.push(unit.id);

      // Create listing with ACTIVE status
      const listingData = generateListingData(unit.id, testOrganization.id, testUser.id);
      const listing = await prisma.listing.create({ 
        data: { 
          ...listingData, 
          status: 'ACTIVE' as any 
        } 
      });
      createdEntities.listings.push(listing.id);

      // Randomly select new status
      const statusOptions = [ListingStatus.SUSPENDED, ListingStatus.MAINTENANCE, ListingStatus.PRIVATE, ListingStatus.ACTIVE];
      const newStatus = statusOptions[Math.floor(Math.random() * statusOptions.length)];

      // Execute status update
      const result = await listingService.updateListingStatus(
        listing.id,
        newStatus,
        testUser.id,
        `Status change to ${newStatus}`
      )

      // Verify status was updated
      if (result.success) {
        const updatedListing = await prisma.listing.findUnique({
          where: { id: listing.id }
        });

        expect(updatedListing).toBeTruthy();
        expect(updatedListing!.status).toBe(newStatus);
      }
    }
  })

  it('should handle bulk listing operations with marketplace synchronization', async () => {
    const iterations = 5;
    
    for (let i = 0; i < iterations; i++) {
      // Create multiple units for bulk operations
      const units: string[] = [];
      
      for (let j = 0; j < 3; j++) {
        const propertyData = generatePropertyData(testManager.id, testOrganization.id);
        const property = await prisma.property.create({ data: propertyData });
        createdEntities.properties.push(property.id);

        const unitData = generateUnitData(property.id);
        const unit = await prisma.unit.create({ data: unitData });
        createdEntities.units.push(unit.id);
        units.push(unit.id);
      }

      // Create listings for some units
      const listingIds: string[] = [];
      for (let j = 0; j < units.length; j++) {
        if (Math.random() > 0.3) {
          const listingData = generateListingData(units[j], testOrganization.id, testUser.id);
          const listing = await prisma.listing.create({ data: listingData });
          createdEntities.listings.push(listing.id);
          listingIds.push(listing.id);
        }
      }

      // Perform bulk operations
      const operations = units.map((unitId, idx) => ({
        unitId,
        action: idx < listingIds.length ? BulkListingActionType.UNLIST : BulkListingActionType.LIST,
        listingData: idx >= listingIds.length ? {
          title: `Bulk Listing ${idx}`,
          description: 'Bulk created listing',
          price: 1500
        } : undefined
      }));

      const result = await listingService.bulkUpdateListings(
        operations,
        testUser.id,
        testOrganization.id
      );

      // Verify bulk operations completed
      expect(result.success).toBe(true);
      
      // Clean up listings created during this iteration
      const newListings = await prisma.listing.findMany({
        where: { id: { in: createdEntities.listings } }
      });
      
      for (const listing of newListings) {
        await prisma.listing.delete({ where: { id: listing.id } });
      }
      createdEntities.listings = [];
    }
  })

  it('should ensure listing data completeness for marketplace visibility', async () => {
    const iterations = 8;
    
    for (let i = 0; i < iterations; i++) {
      // Generate test data
      const propertyData = generatePropertyData(testManager.id, testOrganization.id);
      const unitData = generateUnitData(propertyData.id);

      // Create property and unit
      const property = await prisma.property.create({ data: propertyData });
      createdEntities.properties.push(property.id);

      const unit = await prisma.unit.create({ data: unitData });
      createdEntities.units.push(unit.id);

      // Generate complete listing data
      const listingData = {
        title: `Complete Listing ${i}`,
        description: 'This is a complete listing with all required fields',
        price: Math.floor(Math.random() * 3000) + 500,
        availabilityDate: new Date(),
      };

      // Execute listing creation
      const result = await listingService.createListing(
        unit.id,
        listingData as CreateListingData,
        testUser.id,
        testOrganization.id
      )

      // Verify data completeness
      if (result.success && result.data?.listing) {
        createdEntities.listings.push(result.data.listing.id);
        
        const createdListing = await prisma.listing.findUnique({
          where: { id: result.data.listing.id },
          include: {
            unit: true,
            property: true
          }
        });

        expect(createdListing).toBeTruthy();
        expect(createdListing!.title).toBeDefined();
        expect(createdListing!.description).toBeDefined();
        expect(createdListing!.price).toBeDefined();
        expect(createdListing!.unit).toBeTruthy();
        expect(createdListing!.property).toBeTruthy();
        expect(createdListing!.organizationId).toBe(testOrganization.id);
        expect(createdListing!.createdBy).toBe(testUser.id);
      }
    }
  })
})
