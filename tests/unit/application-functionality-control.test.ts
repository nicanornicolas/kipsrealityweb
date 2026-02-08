/**
 * Property-Based Tests for Application Functionality Control
 * 
 * **Feature: marketplace-listing-choice, Property 13: Application Functionality Control**
 * **Validates: Requirements 8.1, 8.2**
 * 
 * Property: For any unit, tenant application functionality should be enabled 
 * if and only if the unit has an active marketplace listing
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { prisma } from '@/lib/db';
import { applicationControlService } from '@/lib/application-control-service';
import { ListingStatus } from '@/lib/listing-types';

// Test data generators for property-based testing
function generateUnitData() {
  return {
    id: `unit-${Math.random().toString(36).substr(2, 9)}`,
    unitNumber: `Unit-${Math.floor(Math.random() * 1000)}`,
    propertyId: `prop-${Math.random().toString(36).substr(2, 9)}`,
    bedrooms: Math.floor(Math.random() * 5) + 1,
    bathrooms: Math.floor(Math.random() * 3) + 1,
    rentAmount: Math.floor(Math.random() * 3000) + 500,
    isOccupied: false
  };
}

function generatePropertyData(managerId: string) {
  return {
    id: `prop-${Math.random().toString(36).substr(2, 9)}`,
    name: `Test Property ${Math.floor(Math.random() * 1000)}`,
    city: 'Test City',
    managerId,
    organizationId: 'test-org'
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

function generateLeaseData(unitId: string, propertyId: string, applicationId: string) {
  return {
    id: `lease-${Math.random().toString(36).substr(2, 9)}`,
    unitId,
    propertyId,
    applicationId,
    leaseStatus: Math.random() > 0.5 ? 'ACTIVE' : 'PENDING',
    startDate: new Date(),
    endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year from now
    rentAmount: Math.floor(Math.random() * 3000) + 500
  };
}

describe('Property 13: Application Functionality Control', () => {
  let testUser: any;
  let testOrganization: any;
  let testManager: any;
  let createdEntities: {
    users: string[];
    organizations: string[];
    organizationUsers: string[];
    properties: string[];
    units: string[];
    listings: string[];
    applications: string[];
    leases: string[];
  };

  beforeEach(async () => {
    // Initialize tracking for cleanup
    createdEntities = {
      users: [],
      organizations: [],
      organizationUsers: [],
      properties: [],
      units: [],
      listings: [],
      applications: [],
      leases: []
    };

    // Create test user
    testUser = await prisma.user.create({
      data: {
        id: `user-${Math.random().toString(36).substr(2, 9)}`,
        email: `test-${Math.random().toString(36).substr(2, 9)}@example.com`,
        passwordHash: 'test-hash',
        firstName: 'Test',
        lastName: 'User'
      }
    });
    createdEntities.users.push(testUser.id);

    // Create test organization
    testOrganization = await prisma.organization.create({
      data: {
        id: `org-${Math.random().toString(36).substr(2, 9)}`,
        name: 'Test Organization',
        slug: `test-org-${Math.random().toString(36).substr(2, 9)}`
      }
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

    if (createdEntities.applications.length > 0) {
      await prisma.tenantapplication.deleteMany({
        where: { id: { in: createdEntities.applications } }
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

  it('Property 13.1: Units with active listings should allow applications', async () => {
    // Run multiple iterations to test the property across different scenarios
    const iterations = 20;
    
    for (let i = 0; i < iterations; i++) {
      // Generate test data
      const propertyData = generatePropertyData(testManager.id);
      const unitData = generateUnitData();
      unitData.propertyId = propertyData.id;

      // Create property
      const property = await prisma.property.create({ data: propertyData });
      createdEntities.properties.push(property.id);

      // Create unit
      const unit = await prisma.unit.create({ data: unitData });
      createdEntities.units.push(unit.id);

      // Create active listing
      const listingData = generateListingData(unit.id, testOrganization.id, testUser.id);
      const listing = await prisma.listing.create({ data: listingData });
      createdEntities.listings.push(listing.id);

      // Update unit to reference listing
      await prisma.unit.update({
        where: { id: unit.id },
        data: { listingId: listing.id }
      });

      // Check application eligibility
      const eligibility = await applicationControlService.checkApplicationEligibility(unit.id);

      // Property assertion: Unit with active listing should be eligible for applications
      expect(eligibility.isEligible).toBe(true);
      expect(eligibility.unitId).toBe(unit.id);
      expect(eligibility.listingStatus).toBe(ListingStatus.ACTIVE);
    }
  });

  it('Property 13.2: Units without listings should not allow applications', async () => {
    const iterations = 15;
    
    for (let i = 0; i < iterations; i++) {
      // Generate test data
      const propertyData = generatePropertyData(testManager.id);
      const unitData = generateUnitData();
      unitData.propertyId = propertyData.id;

      // Create property
      const property = await prisma.property.create({ data: propertyData });
      createdEntities.properties.push(property.id);

      // Create unit WITHOUT listing
      const unit = await prisma.unit.create({ data: unitData });
      createdEntities.units.push(unit.id);

      // Check application eligibility
      const eligibility = await applicationControlService.checkApplicationEligibility(unit.id);

      // Property assertion: Unit without listing should not be eligible for applications
      expect(eligibility.isEligible).toBe(false);
      expect(eligibility.unitId).toBe(unit.id);
      expect(eligibility.listingStatus).toBe(ListingStatus.PRIVATE);
      expect(eligibility.reason).toContain('not currently listed');
    }
  });

  it('Property 13.3: Units with active leases should not allow applications regardless of listing status', async () => {
    const iterations = 10;
    
    for (let i = 0; i < iterations; i++) {
      // Generate test data
      const propertyData = generatePropertyData(testManager.id);
      const unitData = generateUnitData();
      unitData.propertyId = propertyData.id;

      // Create property
      const property = await prisma.property.create({ data: propertyData });
      createdEntities.properties.push(property.id);

      // Create unit
      const unit = await prisma.unit.create({ data: unitData });
      createdEntities.units.push(unit.id);

      // Create listing (even with listing, should not allow applications due to lease)
      const listingData = generateListingData(unit.id, testOrganization.id, testUser.id);
      const listing = await prisma.listing.create({ data: listingData });
      createdEntities.listings.push(listing.id);

      // Update unit to reference listing
      await prisma.unit.update({
        where: { id: unit.id },
        data: { listingId: listing.id }
      });

      // Create application first (required for lease)
      const application = await prisma.tenantapplication.create({
        data: {
          id: `app-${Math.random().toString(36).substr(2, 9)}`,
          fullName: 'Test Tenant',
          email: `tenant-${Math.random().toString(36).substr(2, 9)}@example.com`,
          phone: '1234567890',
          dob: new Date('1990-01-01'),
          leaseType: 'long-term',
          occupancyType: 'single',
          moveInDate: new Date(),
          leaseDuration: '12',
          consent: true,
          unitId: unit.id,
          propertyId: property.id,
          status: 'APPROVED'
        }
      });
      createdEntities.applications.push(application.id);

      // Create active lease
      const leaseData = generateLeaseData(unit.id, property.id, application.id);
      const lease = await prisma.lease.create({ data: leaseData });
      createdEntities.leases.push(lease.id);

      // Check application eligibility
      const eligibility = await applicationControlService.checkApplicationEligibility(unit.id);

      // Property assertion: Unit with active lease should not be eligible regardless of listing
      expect(eligibility.isEligible).toBe(false);
      expect(eligibility.unitId).toBe(unit.id);
      expect(eligibility.reason).toContain('active lease');
    }
  });

  it('Property 13.4: Application eligibility should be consistent across multiple checks', async () => {
    const iterations = 10;
    
    for (let i = 0; i < iterations; i++) {
      // Generate test data
      const propertyData = generatePropertyData(testManager.id);
      const unitData = generateUnitData();
      unitData.propertyId = propertyData.id;

      // Create property
      const property = await prisma.property.create({ data: propertyData });
      createdEntities.properties.push(property.id);

      // Create unit
      const unit = await prisma.unit.create({ data: unitData });
      createdEntities.units.push(unit.id);

      // Randomly decide whether to create listing
      const hasListing = Math.random() > 0.5;
      
      if (hasListing) {
        const listingData = generateListingData(unit.id, testOrganization.id, testUser.id);
        const listing = await prisma.listing.create({ data: listingData });
        createdEntities.listings.push(listing.id);

        await prisma.unit.update({
          where: { id: unit.id },
          data: { listingId: listing.id }
        });
      }

      // Check eligibility multiple times
      const check1 = await applicationControlService.checkApplicationEligibility(unit.id);
      const check2 = await applicationControlService.checkApplicationEligibility(unit.id);
      const check3 = await applicationControlService.checkApplicationEligibility(unit.id);

      // Property assertion: Multiple checks should return consistent results
      expect(check1.isEligible).toBe(check2.isEligible);
      expect(check2.isEligible).toBe(check3.isEligible);
      expect(check1.listingStatus).toBe(check2.listingStatus);
      expect(check2.listingStatus).toBe(check3.listingStatus);
      expect(check1.unitId).toBe(unit.id);
      expect(check2.unitId).toBe(unit.id);
      expect(check3.unitId).toBe(unit.id);

      // Verify expected eligibility based on listing presence
      expect(check1.isEligible).toBe(hasListing);
    }
  });

  it('Property 13.5: Bulk eligibility checks should match individual checks', async () => {
    const numUnits = 8;
    const unitIds: string[] = [];
    const expectedResults: boolean[] = [];

    // Create multiple units with varying listing status
    for (let i = 0; i < numUnits; i++) {
      const propertyData = generatePropertyData(testManager.id);
      const unitData = generateUnitData();
      unitData.propertyId = propertyData.id;

      // Create property
      const property = await prisma.property.create({ data: propertyData });
      createdEntities.properties.push(property.id);

      // Create unit
      const unit = await prisma.unit.create({ data: unitData });
      createdEntities.units.push(unit.id);
      unitIds.push(unit.id);

      // Randomly decide whether to create listing
      const hasListing = Math.random() > 0.5;
      expectedResults.push(hasListing);
      
      if (hasListing) {
        const listingData = generateListingData(unit.id, testOrganization.id, testUser.id);
        const listing = await prisma.listing.create({ data: listingData });
        createdEntities.listings.push(listing.id);

        await prisma.unit.update({
          where: { id: unit.id },
          data: { listingId: listing.id }
        });
      }
    }

    // Perform bulk check
    const bulkResults = await applicationControlService.checkMultipleUnitsEligibility(unitIds);

    // Perform individual checks
    const individualResults = await Promise.all(
      unitIds.map(unitId => applicationControlService.checkApplicationEligibility(unitId))
    );

    // Property assertion: Bulk results should match individual results
    expect(bulkResults).toHaveLength(unitIds.length);
    expect(individualResults).toHaveLength(unitIds.length);

    for (let i = 0; i < unitIds.length; i++) {
      expect(bulkResults[i].isEligible).toBe(individualResults[i].isEligible);
      expect(bulkResults[i].unitId).toBe(individualResults[i].unitId);
      expect(bulkResults[i].listingStatus).toBe(individualResults[i].listingStatus);
      
      // Verify against expected results
      expect(bulkResults[i].isEligible).toBe(expectedResults[i]);
    }
  });

  it('Property 13.6: Non-existent units should consistently return not eligible', async () => {
    const iterations = 10;
    
    for (let i = 0; i < iterations; i++) {
      // Generate random non-existent unit ID
      const nonExistentUnitId = `nonexistent-${Math.random().toString(36).substr(2, 9)}`;

      // Check application eligibility
      const eligibility = await applicationControlService.checkApplicationEligibility(nonExistentUnitId);

      // Property assertion: Non-existent units should not be eligible
      expect(eligibility.isEligible).toBe(false);
      expect(eligibility.unitId).toBe(nonExistentUnitId);
      expect(eligibility.reason).toContain('not found');
    }
  });
});