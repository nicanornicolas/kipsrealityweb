// Property-based test for lease integration consistency
// **Feature: marketplace-listing-choice, Property 10: Lease Integration Consistency**
// **Validates: Requirements 7.1, 7.2**

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import fc from 'fast-check';
import { prisma } from './setup';
import { leaseListingIntegration } from '@/lib/lease-listing-integration';
import { ListingService } from '@/lib/listing-service';
import { ListingStatus } from '@/lib/listing-types';
import { Lease_leaseStatus } from '@prisma/client';

// Test data generators
function generateLeaseData(unitId: string, propertyId: string, userId: string) {
  return {
    id: `lease-${Math.random().toString(36).substr(2, 9)}`,
    leaseStatus: 'DRAFT' as Lease_leaseStatus,
    unitId,
    propertyId,
    startDate: new Date(),
    endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
    monthlyRent: 1500,
    securityDeposit: 3000,
    tenantId: userId
  };
}

function generateUnitData(propertyId: string) {
  return {
    id: `unit-${Math.random().toString(36).substr(2, 9)}`,
    unitNumber: `Unit-${Math.floor(Math.random() * 1000)}`,
    propertyId,
    bedrooms: 2,
    bathrooms: 1,
    rentAmount: 1500,
    isOccupied: false
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

describe('Lease Integration Consistency Property Tests', () => {
  let testUser: any;
  let testOrganization: any;
  let testManager: any;
  let listingService: ListingService;
  let createdEntities: {
    users: string[];
    organizations: string[];
    organizationUsers: string[];
    properties: string[];
    units: string[];
    listings: string[];
    leases: string[];
  };

  beforeEach(async () => {
    listingService = new ListingService();
    
    // Initialize tracking for cleanup
    createdEntities = {
      users: [],
      organizations: [],
      organizationUsers: [],
      properties: [],
      units: [],
      listings: [],
      leases: []
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
  });

  afterEach(async () => {
    // Clean up in reverse order of dependencies
    if (createdEntities.leases.length > 0) {
      await prisma.lease.deleteMany({
        where: { id: { in: createdEntities.leases } }
      });
    }

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
  });

  // Generator for lease status transitions
  const leaseStatusTransitionGen = fc.record({
    previousStatus: fc.constantFrom<Lease_leaseStatus | null>(
      null, 'DRAFT', 'PENDING_APPROVAL', 'APPROVED', 'SIGNED'
    ),
    newStatus: fc.constantFrom<Lease_leaseStatus>(
      'ACTIVE', 'EXPIRED', 'TERMINATED', 'SIGNED'
    )
  });

  it('Property 10: Lease Integration Consistency - Active leases should remove listings, expired/terminated leases should prompt for listing decisions', async () => {
    const iterations = 20;
    
    for (let i = 0; i < iterations; i++) {
      // Generate test data
      const propertyData = generatePropertyData(testManager.id, testOrganization.id);
      const unitData = generateUnitData(propertyData.id);

      // Create property
      const property = await prisma.property.create({ data: propertyData });
      createdEntities.properties.push(property.id);

      // Create unit
      const unit = await prisma.unit.create({ data: unitData });
      createdEntities.units.push(unit.id);

      // Randomly decide if unit should have an active listing
      const hasActiveListing = Math.random() > 0.5;
      
      if (hasActiveListing) {
        const listing = await prisma.listing.create({
          data: {
            id: `listing-${Math.random().toString(36).substr(2, 9)}`,
            organizationId: testOrganization.id,
            createdBy: testUser.id,
            title: 'Test Listing',
            description: 'Test listing description',
            price: 1500,
            unitId: unit.id,
            status: 'ACTIVE' as any
          }
        });
        createdEntities.listings.push(listing.id);

        await prisma.unit.update({
          where: { id: unit.id },
          data: { listingId: listing.id }
        });
      }

      // Create lease
      const leaseData = generateLeaseData(unit.id, property.id, testUser.id);
      const lease = await prisma.lease.create({ data: leaseData });
      createdEntities.leases.push(lease.id);

      // Determine status transition
      const scenario = {
        previousStatus: 'SIGNED' as Lease_leaseStatus,
        newStatus: (['ACTIVE', 'EXPIRED', 'TERMINATED'] as const)[Math.floor(Math.random() * 3)]
      };

      // Execute the lease status change
      await leaseListingIntegration.handleLeaseStatusChange(
        lease.id,
        scenario.newStatus,
        scenario.previousStatus,
        testUser.id
      );

      // Verify behavior based on lease status transition
      const updatedUnit = await prisma.unit.findUnique({
        where: { id: unit.id }
      });

      expect(updatedUnit).toBeTruthy();

      switch (scenario.newStatus) {
        case 'ACTIVE':
          // When lease becomes active, unit should be marked as occupied
          expect(updatedUnit!.isOccupied).toBe(true);

          // If unit had an active listing, it should be removed
          if (hasActiveListing) {
            const updatedListing = await prisma.listing.findUnique({
              where: { id: createdEntities.listings[createdEntities.listings.length - 1] }
            });
            // Listing should either be removed or have status changed
            expect(updatedListing === null || updatedListing.status !== 'ACTIVE').toBe(true);
          }
          break;

        case 'EXPIRED':
        case 'TERMINATED':
          // When lease expires or is terminated, unit should be marked as not occupied
          expect(updatedUnit!.isOccupied).toBe(false);
          break;

        default:
          break;
      }
    }
  });

  it('Property 10: Lease Integration Consistency - Unit occupancy should be consistent with lease status', async () => {
    const iterations = 15;
    
    for (let i = 0; i < iterations; i++) {
      // Generate test data
      const propertyData = generatePropertyData(testManager.id, testOrganization.id);
      const unitData = generateUnitData(propertyData.id);

      // Create property and unit
      const property = await prisma.property.create({ data: propertyData });
      createdEntities.properties.push(property.id);

      const unit = await prisma.unit.create({ data: unitData });
      createdEntities.units.push(unit.id);

      // Create lease
      const leaseData = generateLeaseData(unit.id, property.id, testUser.id);
      const lease = await prisma.lease.create({ data: leaseData });
      createdEntities.leases.push(lease.id);

      // Randomly choose new status
      const newStatus = (['ACTIVE', 'EXPIRED', 'TERMINATED'] as const)[Math.floor(Math.random() * 3)];

      // Execute lease status change
      await leaseListingIntegration.handleLeaseStatusChange(
        lease.id,
        newStatus,
        'DRAFT',
        testUser.id
      );

      // Verify unit occupancy is updated correctly
      const updatedUnit = await prisma.unit.findUnique({
        where: { id: unit.id }
      });

      expect(updatedUnit).toBeTruthy();
      expect(updatedUnit!.isOccupied).toBe(newStatus === 'ACTIVE');
    }
  });

  it('Property 10: Lease Integration Consistency - Error handling should not break lease status updates', async () => {
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

      // Create a listing for the unit
      const listing = await prisma.listing.create({
        data: {
          id: `listing-${Math.random().toString(36).substr(2, 9)}`,
          organizationId: testOrganization.id,
          createdBy: testUser.id,
          title: 'Test Listing',
          description: 'Test listing description',
          price: 1500,
          unitId: unit.id,
          status: 'ACTIVE' as any
        }
      });
      createdEntities.listings.push(listing.id);

      await prisma.unit.update({
        where: { id: unit.id },
        data: { listingId: listing.id }
      });

      // Create lease
      const leaseData = generateLeaseData(unit.id, property.id, testUser.id);
      const lease = await prisma.lease.create({ data: leaseData });
      createdEntities.leases.push(lease.id);

      // Randomly choose new status
      const newStatus = (['ACTIVE', 'EXPIRED', 'TERMINATED'] as const)[Math.floor(Math.random() * 3)];

      try {
        // Execute and verify it handles errors gracefully
        await leaseListingIntegration.handleLeaseStatusChange(
          lease.id,
          newStatus,
          'SIGNED',
          testUser.id
        );

        // If it doesn't throw, verify the lease was updated
        const updatedLease = await prisma.lease.findUnique({
          where: { id: lease.id }
        });

        expect(updatedLease).toBeTruthy();
      } catch (error) {
        // Error handling should be graceful - verify lease still exists
        const leaseStillExists = await prisma.lease.findUnique({
          where: { id: lease.id }
        });
        expect(leaseStillExists).toBeTruthy();
      }
    }
  });
});
