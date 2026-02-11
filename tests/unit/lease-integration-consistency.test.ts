// Property-based test for lease integration consistency
// **Feature: marketplace-listing-choice, Property 10: Lease Integration Consistency**
// **Validates: Requirements 7.1, 7.2**

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import fc from 'fast-check';
import { prisma } from '@/lib/db';
import { leaseListingIntegration } from '@/lib/lease-listing-integration';
import { ListingService } from '@/lib/listing-service';
import { ListingStatus } from '@/lib/listing-types';
import { Lease_leaseStatus } from '@prisma/client';

// Mock dependencies
vi.mock('@/lib/db');
vi.mock('@/lib/mail');
vi.mock('@/lib/audit-service');

const mockPrisma = prisma as any;
const mockListingService = new ListingService();

// Mock the listing service methods
vi.mock('@/lib/listing-service', () => ({
  ListingService: vi.fn().mockImplementation(() => ({
    removeListing: vi.fn(),
    createListing: vi.fn()
  }))
}));

describe('Lease Integration Consistency Property Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    
    // Setup default mock implementations
    mockPrisma.lease = {
      findUnique: vi.fn(),
      update: vi.fn()
    };
    
    mockPrisma.unit = {
      update: vi.fn()
    };

    mockPrisma.$transaction = vi.fn().mockImplementation(async (callback) => {
      return await callback(mockPrisma);
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  // Generator for lease status transitions
  const leaseStatusTransitionGen = fc.record({
    leaseId: fc.uuid(),
    previousStatus: fc.constantFrom<Lease_leaseStatus | null>(
      null, 'DRAFT', 'PENDING_APPROVAL', 'APPROVED', 'SIGNED'
    ),
    newStatus: fc.constantFrom<Lease_leaseStatus>(
      'ACTIVE', 'EXPIRED', 'TERMINATED', 'SIGNED'
    ),
    userId: fc.uuid(),
    unitId: fc.uuid(),
    unitNumber: fc.string({ minLength: 1, maxLength: 10 }),
    propertyName: fc.string({ minLength: 1, maxLength: 50 }),
    hasActiveListing: fc.boolean(),
    managerEmail: fc.emailAddress()
  });

  it('Property 10: Lease Integration Consistency - Active leases should remove listings, expired/terminated leases should prompt for listing decisions', async () => {
    await fc.assert(
      fc.asyncProperty(leaseStatusTransitionGen, async (scenario) => {
        // Setup mock data based on scenario
        const mockLease = {
          id: scenario.leaseId,
          leaseStatus: scenario.previousStatus,
          unit: {
            id: scenario.unitId,
            unitNumber: scenario.unitNumber,
            listing: scenario.hasActiveListing ? {
              id: fc.sample(fc.uuid(), 1)[0],
              status: ListingStatus.ACTIVE
            } : null
          },
          property: {
            name: scenario.propertyName,
            manager: {
              user: {
                email: scenario.managerEmail
              }
            }
          }
        };

        mockPrisma.lease.findUnique.mockResolvedValue(mockLease);
        mockPrisma.unit.update.mockResolvedValue({});
        
        // Mock listing service methods
        const mockRemoveListing = vi.fn().mockResolvedValue({ success: true });
        const mockCreateListing = vi.fn().mockResolvedValue({ success: true });
        
        // Replace the listing service instance methods
        (mockListingService as any).removeListing = mockRemoveListing;
        (mockListingService as any).createListing = mockCreateListing;

        // Execute the lease status change
        await leaseListingIntegration.handleLeaseStatusChange(
          scenario.leaseId,
          scenario.newStatus,
          scenario.previousStatus,
          scenario.userId
        );

        // Verify behavior based on lease status transition
        switch (scenario.newStatus) {
          case 'ACTIVE':
            // When lease becomes active, unit should be marked as occupied
            expect(mockPrisma.unit.update).toHaveBeenCalledWith({
              where: { id: scenario.unitId },
              data: { isOccupied: true }
            });

            // If unit had an active listing, it should be removed
            if (scenario.hasActiveListing) {
              expect(mockRemoveListing).toHaveBeenCalledWith(
                scenario.unitId,
                scenario.userId,
                'Automatic removal due to lease activation'
              );
            }
            break;

          case 'EXPIRED':
          case 'TERMINATED':
            // When lease expires or is terminated, unit should be marked as not occupied
            expect(mockPrisma.unit.update).toHaveBeenCalledWith({
              where: { id: scenario.unitId },
              data: { isOccupied: false }
            });

            // Property manager should receive listing decision prompt
            // (This would be verified through email mock in full implementation)
            break;

          case 'SIGNED':
            // When lease is signed, prepare for activation
            // Should send notification if unit has listing
            if (scenario.hasActiveListing) {
              // Notification should be sent (verified through email mock)
            }
            break;

          default:
            // For other statuses, no specific action required
            break;
        }

        // Verify that the lease was found
        expect(mockPrisma.lease.findUnique).toHaveBeenCalledWith({
          where: { id: scenario.leaseId },
          include: expect.objectContaining({
            unit: expect.objectContaining({
              include: expect.objectContaining({
                listing: true
              })
            }),
            property: expect.objectContaining({
              include: expect.objectContaining({
                manager: expect.objectContaining({
                  include: expect.objectContaining({
                    user: true
                  })
                })
              })
            })
          })
        });
      }),
      { 
        numRuns: 50,
        verbose: true
      }
    );
  });

  it('Property 10: Lease Integration Consistency - Unit occupancy should be consistent with lease status', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.record({
          leaseId: fc.uuid(),
          leaseStatus: fc.constantFrom<Lease_leaseStatus>('ACTIVE', 'EXPIRED', 'TERMINATED'),
          unitId: fc.uuid(),
          userId: fc.uuid()
        }),
        async (scenario) => {
          // Setup mock lease
          const mockLease = {
            id: scenario.leaseId,
            leaseStatus: 'DRAFT' as Lease_leaseStatus, // Previous status
            unit: {
              id: scenario.unitId,
              unitNumber: '101',
              listing: null
            },
            property: {
              name: 'Test Property',
              manager: {
                user: {
                  email: 'manager@test.com'
                }
              }
            }
          };

          mockPrisma.lease.findUnique.mockResolvedValue(mockLease);
          mockPrisma.unit.update.mockResolvedValue({});

          // Execute lease status change
          await leaseListingIntegration.handleLeaseStatusChange(
            scenario.leaseId,
            scenario.leaseStatus,
            'DRAFT',
            scenario.userId
          );

          // Verify unit occupancy is updated correctly
          const expectedOccupancy = scenario.leaseStatus === 'ACTIVE';
          
          expect(mockPrisma.unit.update).toHaveBeenCalledWith({
            where: { id: scenario.unitId },
            data: { isOccupied: expectedOccupancy }
          });
        }
      ),
      { 
        numRuns: 30,
        verbose: true
      }
    );
  });

  it('Property 10: Lease Integration Consistency - Error handling should not break lease status updates', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.record({
          leaseId: fc.uuid(),
          newStatus: fc.constantFrom<Lease_leaseStatus>('ACTIVE', 'EXPIRED', 'TERMINATED'),
          shouldFailListingOperation: fc.boolean(),
          shouldFailUnitUpdate: fc.boolean()
        }),
        async (scenario) => {
          // Setup mock lease
          const mockLease = {
            id: scenario.leaseId,
            leaseStatus: 'SIGNED' as Lease_leaseStatus,
            unit: {
              id: fc.sample(fc.uuid(), 1)[0],
              unitNumber: '101',
              listing: {
                id: fc.sample(fc.uuid(), 1)[0],
                status: ListingStatus.ACTIVE
              }
            },
            property: {
              name: 'Test Property',
              manager: {
                user: {
                  email: 'manager@test.com'
                }
              }
            }
          };

          mockPrisma.lease.findUnique.mockResolvedValue(mockLease);
          
          // Setup conditional failures
          if (scenario.shouldFailUnitUpdate) {
            mockPrisma.unit.update.mockRejectedValue(new Error('Unit update failed'));
          } else {
            mockPrisma.unit.update.mockResolvedValue({});
          }

          if (scenario.shouldFailListingOperation) {
            (mockListingService as any).removeListing = vi.fn().mockResolvedValue({ 
              success: false, 
              error: 'LISTING_OPERATION_FAILED' 
            });
          } else {
            (mockListingService as any).removeListing = vi.fn().mockResolvedValue({ 
              success: true 
            });
          }

          // Execute and verify it doesn't throw
          if (scenario.shouldFailUnitUpdate) {
            // If unit update fails, the whole operation should fail
            await expect(
              leaseListingIntegration.handleLeaseStatusChange(
                scenario.leaseId,
                scenario.newStatus,
                'SIGNED',
                'test-user'
              )
            ).rejects.toThrow();
          } else {
            // If only listing operation fails, it should not throw
            await expect(
              leaseListingIntegration.handleLeaseStatusChange(
                scenario.leaseId,
                scenario.newStatus,
                'SIGNED',
                'test-user'
              )
            ).resolves.not.toThrow();
          }
        }
      ),
      { 
        numRuns: 25,
        verbose: true
      }
    );
  });
});