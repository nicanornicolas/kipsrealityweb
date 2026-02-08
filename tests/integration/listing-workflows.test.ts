import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { db } from "@/lib/db";
import { ListingService } from "@/lib/listing-service";
import { AuditService } from "@/lib/audit-service";
import { ListingStatus } from "@/lib/listing-types";

describe("Listing Workflows Integration Tests", () => {
  let listingService: ListingService;
  let auditService: AuditService;
  let testPropertyId: string;
  let testUnitId: string;
  let testUserId: string;

  beforeEach(async () => {
    listingService = new ListingService();
    auditService = new AuditService();

    // Create test user
    const testUser = await db.user.create({
      data: {
        email: "test-pm@example.com",
        firstName: "Test",
        lastName: "PropertyManager",
        role: "PROPERTY_MANAGER",
        emailVerified: new Date(),
      }
    });
    testUserId = testUser.id;

    // Create test property
    const testProperty = await db.property.create({
      data: {
        name: "Test Property",
        address: "123 Test St",
        city: "Test City",
        state: "TS",
        zipCode: "12345",
        propertyManagerId: testUserId,
        propertyType: "APARTMENT_COMPLEX"
      }
    });
    testPropertyId = testProperty.id;

    // Create test unit
    const testUnit = await db.unit.create({
      data: {
        unitNumber: "101",
        bedrooms: 2,
        bathrooms: 1,
        rent: 1500,
        propertyId: testPropertyId
      }
    });
    testUnitId = testUnit.id;
  });

  afterEach(async () => {
    // Clean up test data
    await db.listing.deleteMany({
      where: { unitId: testUnitId }
    });
    await db.unit.deleteMany({
      where: { id: testUnitId }
    });
    await db.property.deleteMany({
      where: { id: testPropertyId }
    });
    await db.user.deleteMany({
      where: { id: testUserId }
    });
  });

  describe("End-to-End Listing Creation Workflow", () => {
    it("should create listing from unit creation to marketplace visibility", async () => {
      // Step 1: Create listing
      const listing = await listingService.createListing(testUnitId, {
        title: "Beautiful 2BR Apartment",
        description: "Spacious apartment in great location",
        price: 1500
      });

      expect(listing).toBeDefined();
      expect(listing.status).toBe(ListingStatus.ACTIVE);
      expect(listing.title).toBe("Beautiful 2BR Apartment");
      expect(listing.price).toBe(1500);

      // Step 2: Verify unit is linked to listing
      const unit = await db.unit.findUnique({
        where: { id: testUnitId },
        include: { listing: true }
      });

      expect(unit?.listing).toBeDefined();
      expect(unit?.listing?.id).toBe(listing.id);

      // Step 3: Verify audit trail
      const auditEntries = await auditService.getListingHistory(testUnitId);
      expect(auditEntries.length).toBeGreaterThan(0);
      expect(auditEntries[0].action).toBe("LISTING_CREATED");
      expect(auditEntries[0].newStatus).toBe(ListingStatus.ACTIVE);

      // Step 4: Update listing status
      const updatedListing = await listingService.updateListingStatus(
        listing.id,
        ListingStatus.SUSPENDED
      );

      expect(updatedListing.status).toBe(ListingStatus.SUSPENDED);

      // Step 5: Verify status change audit
      const updatedAuditEntries = await auditService.getListingHistory(testUnitId);
      expect(updatedAuditEntries.length).toBeGreaterThan(1);
      expect(updatedAuditEntries[0].action).toBe("STATUS_CHANGED");
      expect(updatedAuditEntries[0].previousStatus).toBe(ListingStatus.ACTIVE);
      expect(updatedAuditEntries[0].newStatus).toBe(ListingStatus.SUSPENDED);

      // Step 6: Remove listing
      await listingService.removeListing(testUnitId);

      // Step 7: Verify listing is removed
      const finalUnit = await db.unit.findUnique({
        where: { id: testUnitId },
        include: { listing: true }
      });

      expect(finalUnit?.listing).toBeNull();

      // Step 8: Verify removal audit
      const finalAuditEntries = await auditService.getListingHistory(testUnitId);
      expect(finalAuditEntries[0].action).toBe("LISTING_REMOVED");
    });

    it("should handle listing creation with default values", async () => {
      // Create listing with minimal data
      const listing = await listingService.createListing(testUnitId, {});

      expect(listing).toBeDefined();
      expect(listing.status).toBe(ListingStatus.ACTIVE);
      expect(listing.title).toContain("Test Property");
      expect(listing.title).toContain("Unit 101");
      expect(listing.price).toBe(1500); // Should use unit rent as default
    });
  });

  describe("Cross-System Integration", () => {
    it("should prevent listing creation when unit has active lease", async () => {
      // Create active lease
      await db.lease.create({
        data: {
          unitId: testUnitId,
          tenantId: testUserId, // Using test user as tenant for simplicity
          startDate: new Date(),
          endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year from now
          monthlyRent: 1500,
          status: "ACTIVE"
        }
      });

      // Attempt to create listing
      await expect(
        listingService.createListing(testUnitId, {
          title: "Test Listing",
          price: 1500
        })
      ).rejects.toThrow("Cannot create listing for unit with active lease");
    });

    it("should handle application integration correctly", async () => {
      // Create listing
      const listing = await listingService.createListing(testUnitId, {
        title: "Test Listing",
        price: 1500
      });

      // Create tenant application
      const application = await db.tenantApplication.create({
        data: {
          unitId: testUnitId,
          tenantId: testUserId,
          firstName: "Test",
          lastName: "Tenant",
          email: "tenant@example.com",
          phone: "555-0123",
          status: "PENDING"
        }
      });

      // Verify application is linked to unit with listing
      const unitWithApplication = await db.unit.findUnique({
        where: { id: testUnitId },
        include: {
          listing: true,
          applications: true
        }
      });

      expect(unitWithApplication?.listing?.id).toBe(listing.id);
      expect(unitWithApplication?.applications).toHaveLength(1);
      expect(unitWithApplication?.applications[0].id).toBe(application.id);

      // Remove listing
      await listingService.removeListing(testUnitId);

      // Verify application handling after listing removal
      const finalApplication = await db.tenantApplication.findUnique({
        where: { id: application.id }
      });

      expect(finalApplication).toBeDefined(); // Application should still exist
    });
  });

  describe("Bulk Operations Integration", () => {
    let additionalUnitIds: string[] = [];

    beforeEach(async () => {
      // Create additional test units
      for (let i = 2; i <= 4; i++) {
        const unit = await db.unit.create({
          data: {
            unitNumber: `10${i}`,
            bedrooms: 2,
            bathrooms: 1,
            rent: 1500 + (i * 100),
            propertyId: testPropertyId
          }
        });
        additionalUnitIds.push(unit.id);
      }
    });

    afterEach(async () => {
      // Clean up additional units
      await db.listing.deleteMany({
        where: { unitId: { in: additionalUnitIds } }
      });
      await db.unit.deleteMany({
        where: { id: { in: additionalUnitIds } }
      });
      additionalUnitIds = [];
    });

    it("should handle bulk listing creation", async () => {
      const allUnitIds = [testUnitId, ...additionalUnitIds];
      
      // Create bulk operations
      const operations = allUnitIds.map(unitId => ({
        unitId,
        action: "LIST" as const,
        listingData: {
          title: `Bulk Listed Unit`,
          description: "Bulk created listing",
          price: 1600
        }
      }));

      const result = await listingService.bulkUpdateListings(operations);

      expect(result.summary.total).toBe(4);
      expect(result.summary.succeeded).toBe(4);
      expect(result.summary.failed).toBe(0);
      expect(result.successful).toHaveLength(4);

      // Verify all listings were created
      const listings = await db.listing.findMany({
        where: { unitId: { in: allUnitIds } }
      });

      expect(listings).toHaveLength(4);
      listings.forEach(listing => {
        expect(listing.status).toBe(ListingStatus.ACTIVE);
        expect(listing.title).toBe("Bulk Listed Unit");
        expect(listing.price).toBe(1600);
      });

      // Verify audit entries
      for (const unitId of allUnitIds) {
        const auditEntries = await auditService.getListingHistory(unitId);
        expect(auditEntries.length).toBeGreaterThan(0);
        expect(auditEntries[0].action).toBe("BULK_LISTING_CREATED");
      }
    });

    it("should handle partial failures in bulk operations", async () => {
      // Create listing for first unit
      await listingService.createListing(testUnitId, {
        title: "Existing Listing",
        price: 1500
      });

      const allUnitIds = [testUnitId, ...additionalUnitIds];
      
      // Attempt bulk listing (should fail for first unit)
      const operations = allUnitIds.map(unitId => ({
        unitId,
        action: "LIST" as const,
        listingData: {
          title: "Bulk Listed Unit",
          price: 1600
        }
      }));

      const result = await listingService.bulkUpdateListings(operations);

      expect(result.summary.total).toBe(4);
      expect(result.summary.succeeded).toBe(3); // 3 new listings
      expect(result.summary.failed).toBe(1); // 1 already had listing
      expect(result.failed).toHaveLength(1);
      expect(result.failed[0].unitId).toBe(testUnitId);
      expect(result.failed[0].error).toContain("already has a listing");
    });
  });

  describe("Data Consistency Integration", () => {
    it("should maintain data consistency across concurrent operations", async () => {
      // Create listing
      const listing = await listingService.createListing(testUnitId, {
        title: "Concurrent Test Listing",
        price: 1500
      });

      // Simulate concurrent status updates
      const statusUpdates = [
        listingService.updateListingStatus(listing.id, ListingStatus.SUSPENDED),
        listingService.updateListingStatus(listing.id, ListingStatus.ACTIVE)
      ];

      // Wait for all updates to complete
      const results = await Promise.allSettled(statusUpdates);

      // At least one should succeed
      const successfulUpdates = results.filter(r => r.status === "fulfilled");
      expect(successfulUpdates.length).toBeGreaterThan(0);

      // Verify final state is consistent
      const finalListing = await db.listing.findUnique({
        where: { id: listing.id }
      });

      expect(finalListing).toBeDefined();
      expect([ListingStatus.SUSPENDED, ListingStatus.ACTIVE]).toContain(
        finalListing!.status as ListingStatus
      );

      // Verify audit trail captures all changes
      const auditEntries = await auditService.getListingHistory(testUnitId);
      expect(auditEntries.length).toBeGreaterThan(1); // At least creation + one status change
    });

    it("should handle database transaction rollbacks correctly", async () => {
      // This test would require more complex setup to simulate transaction failures
      // For now, we'll test basic error handling
      
      // Attempt to create listing for non-existent unit
      await expect(
        listingService.createListing("non-existent-unit-id", {
          title: "Invalid Listing",
          price: 1500
        })
      ).rejects.toThrow();

      // Verify no orphaned data was created
      const orphanedListings = await db.listing.findMany({
        where: { unitId: "non-existent-unit-id" }
      });

      expect(orphanedListings).toHaveLength(0);
    });
  });

  describe("Performance Integration", () => {
    it("should handle large dataset operations efficiently", async () => {
      // Create multiple units for performance testing
      const unitIds: string[] = [];
      
      for (let i = 0; i < 20; i++) {
        const unit = await db.unit.create({
          data: {
            unitNumber: `200${i}`,
            bedrooms: 2,
            bathrooms: 1,
            rent: 1500,
            propertyId: testPropertyId
          }
        });
        unitIds.push(unit.id);
      }

      const startTime = Date.now();

      // Perform bulk listing creation
      const operations = unitIds.map(unitId => ({
        unitId,
        action: "LIST" as const,
        listingData: {
          title: "Performance Test Listing",
          price: 1500
        }
      }));

      const result = await listingService.bulkUpdateListings(operations);
      
      const endTime = Date.now();
      const duration = endTime - startTime;

      // Should complete within reasonable time (adjust threshold as needed)
      expect(duration).toBeLessThan(5000); // 5 seconds
      expect(result.summary.succeeded).toBe(20);

      // Clean up
      await db.listing.deleteMany({
        where: { unitId: { in: unitIds } }
      });
      await db.unit.deleteMany({
        where: { id: { in: unitIds } }
      });
    });
  });
});