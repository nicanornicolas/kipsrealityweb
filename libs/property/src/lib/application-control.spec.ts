/**
 * Property-Based Tests for Application Functionality Control
 *
 * **Feature: marketplace-listing-choice, Property 13: Application Functionality Control**
 * **Validates: Requirements 8.1, 8.2**
 *
 * Property: For any unit, tenant application functionality should be enabled
 * if and only if the unit has an active marketplace listing
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { applicationControlService } from '@rentflow/property';
import { prisma } from '@rentflow/iam';

// Create mock prisma client at the @prisma/client level first
vi.mock('@prisma/client', () => {
  // Create the mock instance that will be returned
  const mockInstance = {
    $connect: vi.fn().mockResolvedValue(undefined),
    $disconnect: vi.fn().mockResolvedValue(undefined),
    $transaction: vi
      .fn()
      .mockImplementation(async (callback) => callback(mockInstance)),
    user: {
      create: vi.fn(),
      deleteMany: vi.fn(),
    },
    organization: {
      create: vi.fn(),
      deleteMany: vi.fn(),
    },
    organizationUser: {
      create: vi.fn(),
      deleteMany: vi.fn(),
    },
    property: {
      create: vi.fn(),
      deleteMany: vi.fn(),
    },
    unit: {
      create: vi.fn(),
      update: vi.fn(),
      deleteMany: vi.fn(),
      findUnique: vi.fn(),
    },
    listing: {
      create: vi.fn(),
      deleteMany: vi.fn(),
    },
    tenantapplication: {
      create: vi.fn(),
      deleteMany: vi.fn(),
    },
    lease: {
      create: vi.fn(),
      deleteMany: vi.fn(),
    },
  };

  // Return a class constructor that returns the mock instance
  return {
    PrismaClient: class {
      constructor() {
        return mockInstance;
      }
    },
  };
});

// Imports above will use the mocked PrismaClient due to vi.mock hoisting

describe('Property 13: Application Functionality Control', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Unit with active listing', () => {
    it('Property 13.1: Units with active listings should allow applications', async () => {
      const unitId = 'unit-123';

      // Mock prisma.unit.findUnique to return a unit with an active listing
      vi.mocked(prisma.unit.findUnique).mockResolvedValue({
        id: unitId,
        unitNumber: '101',
        propertyId: 'prop-123',
        listing: {
          id: 'listing-123',
          title: 'Test Listing',
          status: 'ACTIVE' as any,
          price: 1500,
          organizationId: 'org-123',
          createdBy: 'user-123',
        },
        leases: [],
        bedrooms: 2,
        bathrooms: 1,
        rentAmount: 1500,
        isOccupied: false,
      });

      const eligibility =
        await applicationControlService.checkApplicationEligibility(unitId);

      // Property assertion: Unit with active listing should be eligible for applications
      expect(eligibility.isEligible).toBe(true);
      expect(eligibility.unitId).toBe(unitId);
      expect(eligibility.listingStatus).toBe('ACTIVE');

      // Verify prisma was called
      expect(prisma.unit.findUnique).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { id: unitId },
          include: expect.objectContaining({
            listing: true,
            leases: expect.anything(),
          }),
        }),
      );
    });
  });

  describe('Unit without listing', () => {
    it('Property 13.2: Units without listings should not allow applications', async () => {
      const unitId = 'unit-456';

      // Mock prisma.unit.findUnique to return a unit without a listing
      vi.mocked(prisma.unit.findUnique).mockResolvedValue({
        id: unitId,
        unitNumber: '102',
        propertyId: 'prop-123',
        listing: null,
        leases: [],
        bedrooms: 1,
        bathrooms: 1,
        rentAmount: 1000,
        isOccupied: false,
      });

      const eligibility =
        await applicationControlService.checkApplicationEligibility(unitId);

      // Property assertion: Unit without listing should not be eligible for applications
      expect(eligibility.isEligible).toBe(false);
      expect(eligibility.unitId).toBe(unitId);
      expect(eligibility.listingStatus).toBe('PRIVATE');
      expect(eligibility.reason).toContain('not currently listed');
    });
  });

  describe('Unit with active lease', () => {
    it('Property 13.3: Units with active leases should not allow applications regardless of listing status', async () => {
      const unitId = 'unit-789';

      // Mock prisma.unit.findUnique to return a unit with an active lease
      vi.mocked(prisma.unit.findUnique).mockResolvedValue({
        id: unitId,
        unitNumber: '103',
        propertyId: 'prop-123',
        listing: {
          id: 'listing-123',
          title: 'Test Listing',
          status: 'ACTIVE' as any,
          price: 1500,
          organizationId: 'org-123',
          createdBy: 'user-123',
        },
        leases: [
          {
            id: 'lease-123',
            unitId: unitId,
            propertyId: 'prop-123',
            leaseStatus: 'ACTIVE',
            startDate: new Date(),
            endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
            rentAmount: 1500,
          },
        ],
        bedrooms: 2,
        bathrooms: 1,
        rentAmount: 1500,
        isOccupied: true,
      });

      const eligibility =
        await applicationControlService.checkApplicationEligibility(unitId);

      // Property assertion: Unit with active lease should not be eligible regardless of listing
      expect(eligibility.isEligible).toBe(false);
      expect(eligibility.unitId).toBe(unitId);
      expect(eligibility.reason).toContain('active lease');
    });
  });

  describe('Consistency checks', () => {
    it('Property 13.4: Application eligibility should be consistent across multiple checks', async () => {
      const unitId = 'unit-consistency-123';

      // Mock prisma.unit.findUnique to return a unit without a listing
      vi.mocked(prisma.unit.findUnique).mockResolvedValue({
        id: unitId,
        unitNumber: '104',
        propertyId: 'prop-123',
        listing: null,
        leases: [],
        bedrooms: 2,
        bathrooms: 1,
        rentAmount: 1200,
        isOccupied: false,
      });

      // Check eligibility multiple times
      const check1 =
        await applicationControlService.checkApplicationEligibility(unitId);
      const check2 =
        await applicationControlService.checkApplicationEligibility(unitId);
      const check3 =
        await applicationControlService.checkApplicationEligibility(unitId);

      // Property assertion: Multiple checks should return consistent results
      expect(check1.isEligible).toBe(check2.isEligible);
      expect(check2.isEligible).toBe(check3.isEligible);
      expect(check1.listingStatus).toBe(check2.listingStatus);
      expect(check2.listingStatus).toBe(check3.listingStatus);
      expect(check1.unitId).toBe(check2.unitId);
      expect(check2.unitId).toBe(check3.unitId);

      // Verify expected eligibility based on listing presence (no listing = not eligible)
      expect(check1.isEligible).toBe(false);
    });
  });

  describe('Non-existent units', () => {
    it('Property 13.6: Non-existent units should consistently return not eligible', async () => {
      const nonExistentUnitId = 'nonexistent-unit-999';

      // Mock prisma.unit.findUnique to return null for non-existent unit
      vi.mocked(prisma.unit.findUnique).mockResolvedValue(null);

      const eligibility =
        await applicationControlService.checkApplicationEligibility(
          nonExistentUnitId,
        );

      // Property assertion: Non-existent units should not be eligible
      expect(eligibility.isEligible).toBe(false);
      expect(eligibility.unitId).toBe(nonExistentUnitId);
      expect(eligibility.reason).toContain('not found');
    });
  });
});

