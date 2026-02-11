// Property Test: Property Deactivation Cascade
// **Feature: marketplace-listing-choice, Property 12: Property Deactivation Cascade**
// **Validates: Requirements 7.5**

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { prisma } from '@/lib/db';
import { propertyDeactivationService } from '@/lib/property-deactivation-service';
import { listingService } from '@/lib/listing-service';
import { CreateListingData } from '@/lib/listing-types';

// Property-based test generators
function generatePropertyData() {
  return {
    name: `Test Property ${Date.now()}`,
    address: `${Math.floor(Math.random() * 9999)} Test St`,
    city: 'Test City',
    state: 'TS',
    zipCode: '12345',
    country: 'US'
  };
}

function generateUnitData(propertyId: string, unitNumber: string) {
  return {
    propertyId,
    unitNumber,
    rentAmount: 1000 + Math.floor(Math.random() * 2000),
    bedrooms: Math.floor(Math.random() * 4) + 1,
    bathrooms: Math.floor(Math.random() * 3) + 1,
    squareFootage: 500 + Math.floor(Math.random() * 1500)
  };
}

function generateListingData(unitId: string, price: number): CreateListingData {
  return {
    unitId,
    title: `Test Listing for Unit ${unitId.slice(-8)}`,
    description: 'Test listing description for property deactivation testing',
    price,
    availabilityDate: new Date(),
    expirationDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days from now
  };
}

describe('Property 12: Property Deactivation Cascade', () => {
  let testOrganizationId: string;
  let testUserId: string;
  let testPropertyIds: string[] = [];
  let testUnitIds: string[] = [];

  beforeEach(async () => {
    // Create test organization
    const organization = await prisma.organization.create({
      data: {
        name: 'Test Property Management Co',
        slug: `test-org-${Date.now()}`
      }
    });
    testOrganizationId = organization.id;

    // Create test user
    const user = await prisma.user.create({
      data: {
        email: `test-${Date.now()}@example.com`,
        passwordHash: 'hashed_password'
      }
    });
    testUserId = user.id;

    // Create organization user relationship
    await prisma.organizationUser.create({
      data: {
        userId: testUserId,
        organizationId: testOrganizationId,
        role: 'PROPERTY_MANAGER'
      }
    });
  });

  afterEach(async () => {
    // Clean up test data
    if (testUnitIds.length > 0) {
      await prisma.listing.deleteMany({
        where: { unitId: { in: testUnitIds } }
      });
      await prisma.unit.deleteMany({
        where: { id: { in: testUnitIds } }
      });
    }
    
    if (testPropertyIds.length > 0) {
      await prisma.property.deleteMany({
        where: { id: { in: testPropertyIds } }
      });
    }
    
    await prisma.organizationUser.deleteMany({
      where: { organizationId: testOrganizationId }
    });
    
    await prisma.user.deleteMany({
      where: { id: testUserId }
    });
    
    await prisma.organization.deleteMany({
      where: { id: testOrganizationId }
    });

    testPropertyIds = [];
    testUnitIds = [];
  });

  /**
   * Property: For any property being deactivated, 
   * all associated units should be automatically removed from marketplace listings
   */
  it('should remove all listings when property is deactivated', async () => {
    // Generate test cases with different property configurations
    const testCases = [
      { unitsCount: 1, listingsCount: 1 },
      { unitsCount: 3, listingsCount: 2 }, // Some units without listings
      { unitsCount: 5, listingsCount: 5 }, // All units with listings
      { unitsCount: 10, listingsCount: 7 } // Mixed scenario
    ];

    for (const testCase of testCases) {
      // Create property
      const propertyData = generatePropertyData();
      const property = await prisma.property.create({
        data: {
          ...propertyData,
          organizationId: testOrganizationId
        }
      });
      testPropertyIds.push(property.id);

      // Create units
      const units = [];
      for (let i = 0; i < testCase.unitsCount; i++) {
        const unitData = generateUnitData(property.id, `Unit-${i + 1}`);
        const unit = await prisma.unit.create({
          data: unitData
        });
        units.push(unit);
        testUnitIds.push(unit.id);
      }

      // Create listings for some units
      const createdListings = [];
      for (let i = 0; i < testCase.listingsCount; i++) {
        const unit = units[i];
        const listingData = generateListingData(unit.id, unit.rentAmount || 1500);
        
        const result = await listingService.createListing(
          unit.id,
          listingData,
          testUserId,
          testOrganizationId
        );
        
        expect(result.success).toBe(true);
        createdListings.push(result.data!.listingId);
      }

      // Verify listings exist before deactivation
      const listingsBeforeDeactivation = await prisma.listing.findMany({
        where: { unitId: { in: units.map(u => u.id) } }
      });
      expect(listingsBeforeDeactivation.length).toBe(testCase.listingsCount);

      // Deactivate property
      const deactivationResult = await propertyDeactivationService.deactivateProperty(
        {
          propertyId: property.id,
          reason: `Test deactivation for property with ${testCase.unitsCount} units and ${testCase.listingsCount} listings`,
          notifyPropertyManagers: false,
          notifyTenants: false
        },
        testUserId
      );

      // Verify deactivation was successful
      expect(deactivationResult.success).toBe(true);
      expect(deactivationResult.unitsAffected).toBe(testCase.unitsCount);
      expect(deactivationResult.listingsRemoved).toBe(testCase.listingsCount);

      // Verify all listings were removed
      const listingsAfterDeactivation = await prisma.listing.findMany({
        where: { unitId: { in: units.map(u => u.id) } }
      });
      expect(listingsAfterDeactivation.length).toBe(0);

      // Verify property status was updated
      const updatedProperty = await prisma.property.findUnique({
        where: { id: property.id }
      });
      expect(updatedProperty?.availabilityStatus).toBe('DEACTIVATED');

      // Verify units no longer reference listings
      const updatedUnits = await prisma.unit.findMany({
        where: { id: { in: units.map(u => u.id) } }
      });
      for (const unit of updatedUnits) {
        expect(unit.listingId).toBeNull();
      }
    }
  });

  it('should handle properties with no listings gracefully', async () => {
    // Create property with units but no listings
    const propertyData = generatePropertyData();
    const property = await prisma.property.create({
      data: {
        ...propertyData,
        organizationId: testOrganizationId
      }
    });
    testPropertyIds.push(property.id);

    // Create units without listings
    const unitsCount = 3;
    for (let i = 0; i < unitsCount; i++) {
      const unitData = generateUnitData(property.id, `Unit-${i + 1}`);
      const unit = await prisma.unit.create({
        data: unitData
      });
      testUnitIds.push(unit.id);
    }

    // Deactivate property
    const deactivationResult = await propertyDeactivationService.deactivateProperty(
      {
        propertyId: property.id,
        reason: 'Test deactivation for property with no listings',
        notifyPropertyManagers: false,
        notifyTenants: false
      },
      testUserId
    );

    // Verify deactivation was successful
    expect(deactivationResult.success).toBe(true);
    expect(deactivationResult.unitsAffected).toBe(unitsCount);
    expect(deactivationResult.listingsRemoved).toBe(0); // No listings to remove
    expect(deactivationResult.errors.length).toBe(0);

    // Verify property status was updated
    const updatedProperty = await prisma.property.findUnique({
      where: { id: property.id }
    });
    expect(updatedProperty?.availabilityStatus).toBe('DEACTIVATED');
  });

  it('should provide recovery capability for deactivated properties', async () => {
    // Create property with units and listings
    const propertyData = generatePropertyData();
    const property = await prisma.property.create({
      data: {
        ...propertyData,
        organizationId: testOrganizationId
      }
    });
    testPropertyIds.push(property.id);

    // Create units with listings
    const unitsCount = 3;
    const originalListings = [];
    
    for (let i = 0; i < unitsCount; i++) {
      const unitData = generateUnitData(property.id, `Unit-${i + 1}`);
      const unit = await prisma.unit.create({
        data: unitData
      });
      testUnitIds.push(unit.id);

      const listingData = generateListingData(unit.id, unit.rentAmount || 1500);
      const result = await listingService.createListing(
        unit.id,
        listingData,
        testUserId,
        testOrganizationId
      );
      
      expect(result.success).toBe(true);
      originalListings.push({
        unitId: unit.id,
        listingId: result.data!.listingId,
        title: listingData.title,
        description: listingData.description,
        price: listingData.price
      });
    }

    // Deactivate property
    const deactivationResult = await propertyDeactivationService.deactivateProperty(
      {
        propertyId: property.id,
        reason: 'Test deactivation for recovery testing',
        notifyPropertyManagers: false,
        notifyTenants: false
      },
      testUserId
    );

    expect(deactivationResult.success).toBe(true);
    expect(deactivationResult.canRecover).toBe(true);
    expect(deactivationResult.recoveryData).toBeDefined();

    // Verify recovery data contains correct information
    const recoveryData = deactivationResult.recoveryData!;
    expect(recoveryData.propertyId).toBe(property.id);
    expect(recoveryData.affectedUnits.length).toBe(unitsCount);
    expect(recoveryData.affectedUnits.filter(u => u.hadListing).length).toBe(unitsCount);

    // Test recovery
    const recoveryResult = await propertyDeactivationService.recoverProperty(
      property.id,
      recoveryData,
      testUserId,
      'Test recovery operation'
    );

    expect(recoveryResult.success).toBe(true);
    expect(recoveryResult.unitsAffected).toBe(unitsCount);
    expect(recoveryResult.listingsRemoved).toBe(unitsCount); // In recovery context, this means restored

    // Verify property status was restored
    const restoredProperty = await prisma.property.findUnique({
      where: { id: property.id }
    });
    expect(restoredProperty?.availabilityStatus).toBe('ACTIVE');

    // Verify listings were restored
    const restoredListings = await prisma.listing.findMany({
      where: { unitId: { in: testUnitIds } }
    });
    expect(restoredListings.length).toBe(unitsCount);
  });

  it('should handle tenant applications during deactivation', async () => {
    // Create property with units and listings
    const propertyData = generatePropertyData();
    const property = await prisma.property.create({
      data: {
        ...propertyData,
        organizationId: testOrganizationId
      }
    });
    testPropertyIds.push(property.id);

    // Create units with listings and applications
    const unitsCount = 2;
    const applicationIds = [];
    
    for (let i = 0; i < unitsCount; i++) {
      const unitData = generateUnitData(property.id, `Unit-${i + 1}`);
      const unit = await prisma.unit.create({
        data: unitData
      });
      testUnitIds.push(unit.id);

      // Create listing
      const listingData = generateListingData(unit.id, unit.rentAmount || 1500);
      const result = await listingService.createListing(
        unit.id,
        listingData,
        testUserId,
        testOrganizationId
      );
      expect(result.success).toBe(true);

      // Create tenant application
      const application = await prisma.tenantapplication.create({
        data: {
          unitId: unit.id,
          propertyId: property.id,
          fullName: `Test Applicant ${i + 1}`,
          email: `applicant${i + 1}-${Date.now()}@example.com`,
          phone: '555-0123',
          status: 'PENDING',
          desiredMoveInDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
        }
      });
      applicationIds.push(application.id);
    }

    // Verify applications exist before deactivation
    const applicationsBeforeDeactivation = await prisma.tenantapplication.findMany({
      where: { id: { in: applicationIds } }
    });
    expect(applicationsBeforeDeactivation.length).toBe(unitsCount);
    expect(applicationsBeforeDeactivation.every(app => app.status === 'PENDING')).toBe(true);

    // Deactivate property
    const deactivationResult = await propertyDeactivationService.deactivateProperty(
      {
        propertyId: property.id,
        reason: 'Test deactivation with applications',
        notifyPropertyManagers: false,
        notifyTenants: true
      },
      testUserId
    );

    expect(deactivationResult.success).toBe(true);
    expect(deactivationResult.applicationsAffected).toBe(unitsCount);

    // Verify applications were handled appropriately
    const applicationsAfterDeactivation = await prisma.tenantapplication.findMany({
      where: { id: { in: applicationIds } }
    });
    
    // Applications should still exist but may have updated status
    expect(applicationsAfterDeactivation.length).toBe(unitsCount);
    
    // Clean up applications
    await prisma.tenantapplication.deleteMany({
      where: { id: { in: applicationIds } }
    });
  });

  it('should handle bulk property deactivation correctly', async () => {
    // Create multiple properties with different configurations
    const propertyConfigs = [
      { unitsCount: 2, listingsCount: 2 },
      { unitsCount: 3, listingsCount: 1 },
      { unitsCount: 1, listingsCount: 0 }
    ];

    const propertiesToDeactivate = [];

    for (const config of propertyConfigs) {
      // Create property
      const propertyData = generatePropertyData();
      const property = await prisma.property.create({
        data: {
          ...propertyData,
          organizationId: testOrganizationId
        }
      });
      testPropertyIds.push(property.id);
      propertiesToDeactivate.push(property.id);

      // Create units
      const units = [];
      for (let i = 0; i < config.unitsCount; i++) {
        const unitData = generateUnitData(property.id, `Unit-${i + 1}`);
        const unit = await prisma.unit.create({
          data: unitData
        });
        units.push(unit);
        testUnitIds.push(unit.id);
      }

      // Create listings
      for (let i = 0; i < config.listingsCount; i++) {
        const unit = units[i];
        const listingData = generateListingData(unit.id, unit.rentAmount || 1500);
        
        const result = await listingService.createListing(
          unit.id,
          listingData,
          testUserId,
          testOrganizationId
        );
        expect(result.success).toBe(true);
      }
    }

    // Perform bulk deactivation using individual calls
    // (In a full implementation, this would use the bulk API)
    const deactivationResults = [];
    
    for (const propertyId of propertiesToDeactivate) {
      const result = await propertyDeactivationService.deactivateProperty(
        {
          propertyId,
          reason: 'Bulk deactivation test',
          notifyPropertyManagers: false,
          notifyTenants: false
        },
        testUserId
      );
      deactivationResults.push(result);
    }

    // Verify all deactivations were successful
    expect(deactivationResults.every(result => result.success)).toBe(true);

    // Calculate totals
    const totalUnitsAffected = deactivationResults.reduce((sum, result) => sum + result.unitsAffected, 0);
    const totalListingsRemoved = deactivationResults.reduce((sum, result) => sum + result.listingsRemoved, 0);

    expect(totalUnitsAffected).toBe(propertyConfigs.reduce((sum, config) => sum + config.unitsCount, 0));
    expect(totalListingsRemoved).toBe(propertyConfigs.reduce((sum, config) => sum + config.listingsCount, 0));

    // Verify all properties are deactivated
    const deactivatedProperties = await prisma.property.findMany({
      where: { 
        id: { in: propertiesToDeactivate },
        availabilityStatus: 'DEACTIVATED'
      }
    });
    expect(deactivatedProperties.length).toBe(propertiesToDeactivate.length);

    // Verify no listings remain
    const remainingListings = await prisma.listing.findMany({
      where: { unitId: { in: testUnitIds } }
    });
    expect(remainingListings.length).toBe(0);
  });

  it('should validate property exists before deactivation', async () => {
    const nonExistentPropertyId = 'non-existent-property-id';

    const deactivationResult = await propertyDeactivationService.deactivateProperty(
      {
        propertyId: nonExistentPropertyId,
        reason: 'Test with non-existent property',
        notifyPropertyManagers: false,
        notifyTenants: false
      },
      testUserId
    );

    expect(deactivationResult.success).toBe(false);
    expect(deactivationResult.errors.length).toBeGreaterThan(0);
    expect(deactivationResult.errors[0]).toContain('not found');
  });

  it('should prevent double deactivation of the same property', async () => {
    // Create property
    const propertyData = generatePropertyData();
    const property = await prisma.property.create({
      data: {
        ...propertyData,
        organizationId: testOrganizationId,
        availabilityStatus: 'DEACTIVATED' // Already deactivated
      }
    });
    testPropertyIds.push(property.id);

    // Attempt to deactivate already deactivated property
    const deactivationResult = await propertyDeactivationService.deactivateProperty(
      {
        propertyId: property.id,
        reason: 'Test double deactivation',
        notifyPropertyManagers: false,
        notifyTenants: false
      },
      testUserId
    );

    expect(deactivationResult.success).toBe(false);
    expect(deactivationResult.errors.some(error => error.includes('already deactivated'))).toBe(true);
  });
});