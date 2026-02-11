import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { GET, POST, PATCH } from "@/app/api/listings/route";
import { POST as BulkPOST } from "@/app/api/listings/bulk/route";
import { PATCH as StatusPATCH } from "@/app/api/listings/[id]/status/route";

// Mock next-auth
vi.mock("next-auth", () => ({
  getServerSession: vi.fn(() => Promise.resolve({
    user: { id: "test-user-id", role: "PROPERTY_MANAGER" }
  }))
}));

describe("Listing API Integration Tests", () => {
  let testPropertyId: string;
  let testUnitId: string;
  let testUserId: string;

  beforeEach(async () => {
    // Create test user
    const testUser = await db.user.create({
      data: {
        id: "test-user-id",
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

  describe("Listings API Route", () => {
    it("should create listing via POST request", async () => {
      const request = new NextRequest("http://localhost/api/listings", {
        method: "POST",
        body: JSON.stringify({
          unitId: testUnitId,
          action: "CREATE",
          listingData: {
            title: "API Test Listing",
            description: "Created via API",
            price: 1600
          }
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.id).toBeDefined();
      expect(data.title).toBe("API Test Listing");
      expect(data.price).toBe(1600);
      expect(data.status).toBe("ACTIVE");

      // Verify in database
      const listing = await db.listing.findUnique({
        where: { id: data.id }
      });
      expect(listing).toBeDefined();
      expect(listing?.unitId).toBe(testUnitId);
    });

    it("should remove listing via POST request", async () => {
      // First create a listing
      const listing = await db.listing.create({
        data: {
          unitId: testUnitId,
          title: "Test Listing",
          description: "Test Description",
          price: 1500,
          status: "ACTIVE"
        }
      });

      const request = new NextRequest("http://localhost/api/listings", {
        method: "POST",
        body: JSON.stringify({
          unitId: testUnitId,
          action: "REMOVE"
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.success).toBe(true);

      // Verify listing is removed from database
      const removedListing = await db.listing.findUnique({
        where: { id: listing.id }
      });
      expect(removedListing).toBeNull();
    });

    it("should fetch listings via GET request", async () => {
      // Create test listing
      await db.listing.create({
        data: {
          unitId: testUnitId,
          title: "Test Listing",
          description: "Test Description",
          price: 1500,
          status: "ACTIVE"
        }
      });

      const request = new NextRequest("http://localhost/api/listings");
      const response = await GET(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(Array.isArray(data)).toBe(true);
      expect(data.length).toBeGreaterThan(0);
      expect(data[0].title).toBe("Test Listing");
      expect(data[0].unit).toBeDefined();
      expect(data[0].unit.property).toBeDefined();
    });

    it("should update listing via PATCH request", async () => {
      // Create test listing
      const listing = await db.listing.create({
        data: {
          unitId: testUnitId,
          title: "Original Title",
          description: "Original Description",
          price: 1500,
          status: "ACTIVE"
        }
      });

      const request = new NextRequest("http://localhost/api/listings", {
        method: "PATCH",
        body: JSON.stringify({
          listingId: listing.id,
          updates: {
            title: "Updated Title",
            price: 1600,
            status: "SUSPENDED"
          }
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const response = await PATCH(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.title).toBe("Updated Title");
      expect(data.price).toBe(1600);
      expect(data.status).toBe("SUSPENDED");

      // Verify in database
      const updatedListing = await db.listing.findUnique({
        where: { id: listing.id }
      });
      expect(updatedListing?.title).toBe("Updated Title");
      expect(updatedListing?.price).toBe(1600);
      expect(updatedListing?.status).toBe("SUSPENDED");
    });
  });

  describe("Bulk Operations API", () => {
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
      
      const request = new NextRequest("http://localhost/api/listings/bulk", {
        method: "POST",
        body: JSON.stringify({
          action: "LIST",
          unitIds: allUnitIds,
          listingData: {
            title: "Bulk API Listing",
            description: "Created via bulk API",
            price: 1700
          }
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const response = await BulkPOST(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.summary.total).toBe(4);
      expect(data.summary.succeeded).toBe(4);
      expect(data.summary.failed).toBe(0);
      expect(data.successful).toHaveLength(4);

      // Verify listings were created
      const listings = await db.listing.findMany({
        where: { unitId: { in: allUnitIds } }
      });
      expect(listings).toHaveLength(4);
    });

    it("should handle bulk status updates", async () => {
      // Create listings for all units first
      const allUnitIds = [testUnitId, ...additionalUnitIds];
      for (const unitId of allUnitIds) {
        await db.listing.create({
          data: {
            unitId,
            title: "Test Listing",
            description: "Test Description",
            price: 1500,
            status: "ACTIVE"
          }
        });
      }

      const request = new NextRequest("http://localhost/api/listings/bulk", {
        method: "POST",
        body: JSON.stringify({
          action: "SUSPEND",
          unitIds: allUnitIds
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const response = await BulkPOST(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.summary.succeeded).toBe(4);

      // Verify all listings are suspended
      const listings = await db.listing.findMany({
        where: { unitId: { in: allUnitIds } }
      });
      listings.forEach(listing => {
        expect(listing.status).toBe("SUSPENDED");
      });
    });
  });

  describe("Status Management API", () => {
    let testListingId: string;

    beforeEach(async () => {
      const listing = await db.listing.create({
        data: {
          unitId: testUnitId,
          title: "Status Test Listing",
          description: "For status testing",
          price: 1500,
          status: "ACTIVE"
        }
      });
      testListingId = listing.id;
    });

    it("should update listing status", async () => {
      const request = new NextRequest(`http://localhost/api/listings/${testListingId}/status`, {
        method: "PATCH",
        body: JSON.stringify({
          status: "SUSPENDED",
          reason: "Maintenance required"
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const response = await StatusPATCH(request, { params: { id: testListingId } });
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
      expect(data.listing.status).toBe("SUSPENDED");

      // Verify in database
      const updatedListing = await db.listing.findUnique({
        where: { id: testListingId }
      });
      expect(updatedListing?.status).toBe("SUSPENDED");
    });

    it("should reject invalid status transitions", async () => {
      const request = new NextRequest(`http://localhost/api/listings/${testListingId}/status`, {
        method: "PATCH",
        body: JSON.stringify({
          status: "INVALID_STATUS"
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const response = await StatusPATCH(request, { params: { id: testListingId } });
      
      expect(response.status).toBe(400);
    });
  });

  describe("Error Handling", () => {
    it("should handle unauthorized requests", async () => {
      // Mock unauthorized session
      vi.mocked(require("next-auth").getServerSession).mockResolvedValueOnce(null);

      const request = new NextRequest("http://localhost/api/listings", {
        method: "GET"
      });

      const response = await GET(request);
      expect(response.status).toBe(401);
    });

    it("should handle invalid unit IDs", async () => {
      const request = new NextRequest("http://localhost/api/listings", {
        method: "POST",
        body: JSON.stringify({
          unitId: "invalid-unit-id",
          action: "CREATE"
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const response = await POST(request);
      expect(response.status).toBe(404);
    });

    it("should handle malformed request bodies", async () => {
      const request = new NextRequest("http://localhost/api/listings", {
        method: "POST",
        body: "invalid json",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const response = await POST(request);
      expect(response.status).toBe(500);
    });
  });

  describe("Data Validation", () => {
    it("should validate required fields", async () => {
      const request = new NextRequest("http://localhost/api/listings", {
        method: "POST",
        body: JSON.stringify({
          // Missing unitId and action
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const response = await POST(request);
      expect(response.status).toBe(400);
    });

    it("should prevent duplicate listings", async () => {
      // Create initial listing
      await db.listing.create({
        data: {
          unitId: testUnitId,
          title: "Existing Listing",
          description: "Already exists",
          price: 1500,
          status: "ACTIVE"
        }
      });

      // Attempt to create another listing for same unit
      const request = new NextRequest("http://localhost/api/listings", {
        method: "POST",
        body: JSON.stringify({
          unitId: testUnitId,
          action: "CREATE",
          listingData: {
            title: "Duplicate Listing",
            price: 1600
          }
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const response = await POST(request);
      expect(response.status).toBe(400);
    });
  });
});