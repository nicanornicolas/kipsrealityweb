/**
 * Property-Based Test: Error Handling Preservation
 * **Feature: marketplace-listing-choice, Property 5: Error Handling Preservation**
 * **Validates: Requirements 3.4, 3.5**
 * 
 * For any listing operation that fails, the unit should remain in its previous state 
 * and appropriate error feedback should be provided
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { prisma } from '@/lib/db';
import { listingService } from '@/lib/listing-service';
import { ListingStatus } from '@/lib/listing-types';
import { ListingError, ListingErrorType } from '@/lib/listing-error-handler';
import fc from 'fast-check';

describe('Property 5: Error Handling Preservation', () => {
    let testOrganizationId: string;
    let testUserId: string;
    let testPropertyId: string;
    let testStatusIds: Record<ListingStatus, string>;

    beforeEach(async () => {
        // Create test organization
        const organization = await prisma.organization.create({
            data: {
                name: 'Test Org',
                type: 'PROPERTY_MANAGEMENT'
            }
        });
        testOrganizationId = organization.id;

        // Create test user
        const user = await prisma.user.create({
            data: {
                email: `test-${Date.now()}@example.com`,
                name: 'Test User',
                password: 'hashedpassword'
            }
        });
        testUserId = user.id;

        // Create organization user
        await prisma.organizationUser.create({
            data: {
                userId: testUserId,
                organizationId: testOrganizationId,
                role: 'PROPERTY_MANAGER'
            }
        });

        // Create test property
        const property = await prisma.property.create({
            data: {
                name: 'Test Property',
                address: '123 Test St',
                organizationId: testOrganizationId
            }
        });
        testPropertyId = property.id;

        // Create listing statuses
        testStatusIds = {} as Record<ListingStatus, string>;
        for (const status of Object.values(ListingStatus)) {
            const statusRecord = await prisma.listingStatus.upsert({
                where: { name: status },
                update: {},
                create: {
                    name: status,
                    description: `${status} status`
                }
            });
            testStatusIds[status] = statusRecord.id;
        }
    });

    afterEach(async () => {
        // Clean up test data
        await prisma.listingAuditEntry.deleteMany({});
        await prisma.tenantApplication.deleteMany({});
        await prisma.lease.deleteMany({});
        await prisma.listing.deleteMany({});
        await prisma.unit.deleteMany({});
        await prisma.property.deleteMany({});
        await prisma.organizationUser.deleteMany({});
        await prisma.user.deleteMany({});
        await prisma.organization.deleteMany({});
    });

    it('should preserve unit state when listing creation fails', async () => {
        await fc.assert(
            fc.asyncProperty(
                fc.record({
                    unitNumber: fc.string({ minLength: 1, maxLength: 10 }),
                    rent: fc.float({ min: 500, max: 5000 }),
                    bedrooms: fc.integer({ min: 0, max: 5 }),
                    bathrooms: fc.float({ min: 1, max: 4 }),
                    hasActiveLease: fc.boolean(),
                    hasExistingListing: fc.boolean()
                }),
                fc.record({
                    title: fc.oneof(
                        fc.string({ minLength: 1, maxLength: 100 }),
                        fc.constant(''), // Invalid empty title
                        fc.constant(null as any) // Invalid null title
                    ),
                    description: fc.oneof(
                        fc.string({ minLength: 1, maxLength: 500 }),
                        fc.constant(''), // Invalid empty description
                        fc.constant(null as any) // Invalid null description
                    ),
                    price: fc.oneof(
                        fc.float({ min: 100, max: 10000 }),
                        fc.constant(-100), // Invalid negative price
                        fc.constant(0), // Invalid zero price
                        fc.constant(null as any) // Invalid null price
                    )
                }),
                async (unitConfig, listingData) => {
                    // Create unit with specified configuration
                    const unit = await prisma.unit.create({
                        data: {
                            unitNumber: unitConfig.unitNumber,
                            rent: unitConfig.rent,
                            bedrooms: unitConfig.bedrooms,
                            bathrooms: unitConfig.bathrooms,
                            propertyId: testPropertyId,
                            organizationId: testOrganizationId
                        }
                    });

                    // Create active lease if specified
                    if (unitConfig.hasActiveLease) {
                        await prisma.lease.create({
                            data: {
                                unitId: unit.id,
                                tenantId: testUserId,
                                startDate: new Date(),
                                endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
                                monthlyRent: unitConfig.rent,
                                leaseStatus: 'ACTIVE',
                                organizationId: testOrganizationId
                            }
                        });
                    }

                    // Create existing listing if specified
                    if (unitConfig.hasExistingListing) {
                        await prisma.listing.create({
                            data: {
                                title: 'Existing Listing',
                                description: 'Existing Description',
                                price: unitConfig.rent,
                                unitId: unit.id,
                                organizationId: testOrganizationId,
                                createdBy: testUserId,
                                statusId: testStatusIds[ListingStatus.ACTIVE]
                            }
                        });
                    }

                    // Capture initial state
                    const initialUnit = await prisma.unit.findUnique({
                        where: { id: unit.id },
                        include: {
                            listing: true,
                            leases: true,
                            tenantApplications: true
                        }
                    });

                    // Attempt to create listing (may fail due to invalid data or conflicts)
                    let createResult;
                    let threwError = false;
                    let caughtError: any = null;

                    try {
                        createResult = await listingService.createListing(
                            unit.id,
                            listingData,
                            testUserId,
                            testOrganizationId
                        );
                    } catch (error) {
                        threwError = true;
                        caughtError = error;
                    }

                    // Capture final state
                    const finalUnit = await prisma.unit.findUnique({
                        where: { id: unit.id },
                        include: {
                            listing: true,
                            leases: true,
                            tenantApplications: true
                        }
                    });

                    // Determine if operation should have failed
                    const shouldFail = 
                        !listingData.title || 
                        !listingData.description || 
                        !listingData.price || 
                        listingData.price <= 0 ||
                        unitConfig.hasActiveLease ||
                        unitConfig.hasExistingListing;

                    if (shouldFail) {
                        // Operation should have failed
                        if (threwError) {
                            // Error was thrown - verify it's the right type
                            expect(caughtError).toBeInstanceOf(ListingError);
                            expect(caughtError.type).toBeOneOf([
                                ListingErrorType.VALIDATION_ERROR,
                                ListingErrorType.CONFLICT_ERROR,
                                ListingErrorType.NOT_FOUND_ERROR
                            ]);
                        } else {
                            // Result should indicate failure
                            expect(createResult).toBeDefined();
                            expect(createResult.success).toBe(false);
                            expect(createResult.error).toBeDefined();
                        }

                        // Verify unit state is preserved
                        expect(finalUnit).toBeDefined();
                        expect(finalUnit!.id).toBe(initialUnit!.id);
                        expect(finalUnit!.unitNumber).toBe(initialUnit!.unitNumber);
                        expect(finalUnit!.rent).toBe(initialUnit!.rent);
                        expect(finalUnit!.bedrooms).toBe(initialUnit!.bedrooms);
                        expect(finalUnit!.bathrooms).toBe(initialUnit!.bathrooms);

                        // Verify listing state is preserved
                        if (initialUnit!.listing) {
                            expect(finalUnit!.listing).toBeDefined();
                            expect(finalUnit!.listing!.id).toBe(initialUnit!.listing!.id);
                        } else {
                            expect(finalUnit!.listing).toBeNull();
                        }

                        // Verify lease state is preserved
                        expect(finalUnit!.leases.length).toBe(initialUnit!.leases.length);
                        if (initialUnit!.leases.length > 0) {
                            expect(finalUnit!.leases[0].id).toBe(initialUnit!.leases[0].id);
                            expect(finalUnit!.leases[0].leaseStatus).toBe(initialUnit!.leases[0].leaseStatus);
                        }

                        // Verify applications are preserved
                        expect(finalUnit!.tenantApplications.length).toBe(initialUnit!.tenantApplications.length);
                    } else {
                        // Operation should have succeeded
                        if (threwError) {
                            // Unexpected error - this is a test failure
                            throw new Error(`Unexpected error for valid data: ${caughtError.message}`);
                        }

                        expect(createResult).toBeDefined();
                        expect(createResult.success).toBe(true);
                        expect(finalUnit!.listing).toBeDefined();
                    }

                    // Clean up created data
                    await prisma.lease.deleteMany({
                        where: { unitId: unit.id }
                    });
                    await prisma.listing.deleteMany({
                        where: { unitId: unit.id }
                    });
                    await prisma.unit.delete({
                        where: { id: unit.id }
                    });
                }
            ),
            { numRuns: 20 }
        );
    });

    it('should preserve listing state when status updates fail', async () => {
        await fc.assert(
            fc.asyncProperty(
                fc.record({
                    initialStatus: fc.constantFrom(...Object.values(ListingStatus)),
                    targetStatus: fc.constantFrom(...Object.values(ListingStatus)),
                    hasActiveLease: fc.boolean(),
                    isExpired: fc.boolean()
                }),
                async (config) => {
                    // Create unit and listing
                    const unit = await prisma.unit.create({
                        data: {
                            unitNumber: 'A101',
                            rent: 1500,
                            bedrooms: 2,
                            bathrooms: 1,
                            propertyId: testPropertyId,
                            organizationId: testOrganizationId
                        }
                    });

                    const listing = await prisma.listing.create({
                        data: {
                            title: 'Test Listing',
                            description: 'Test Description',
                            price: 1500,
                            unitId: unit.id,
                            organizationId: testOrganizationId,
                            createdBy: testUserId,
                            statusId: testStatusIds[config.initialStatus],
                            ...(config.isExpired && {
                                expirationDate: new Date(Date.now() - 24 * 60 * 60 * 1000) // Yesterday
                            })
                        }
                    });

                    // Create active lease if specified
                    if (config.hasActiveLease) {
                        await prisma.lease.create({
                            data: {
                                unitId: unit.id,
                                tenantId: testUserId,
                                startDate: new Date(),
                                endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
                                monthlyRent: 1500,
                                leaseStatus: 'ACTIVE',
                                organizationId: testOrganizationId
                            }
                        });
                    }

                    // Capture initial state
                    const initialListing = await prisma.listing.findUnique({
                        where: { id: listing.id },
                        include: {
                            status: true,
                            unit: {
                                include: {
                                    leases: true
                                }
                            }
                        }
                    });

                    // Attempt status update
                    let updateResult;
                    let threwError = false;
                    let caughtError: any = null;

                    try {
                        updateResult = await listingService.updateListingStatus(
                            listing.id,
                            config.targetStatus,
                            testUserId,
                            'Test status change'
                        );
                    } catch (error) {
                        threwError = true;
                        caughtError = error;
                    }

                    // Capture final state
                    const finalListing = await prisma.listing.findUnique({
                        where: { id: listing.id },
                        include: {
                            status: true,
                            unit: {
                                include: {
                                    leases: true
                                }
                            }
                        }
                    });

                    // Determine if operation should have failed
                    const shouldFail = 
                        (config.targetStatus === ListingStatus.ACTIVE && config.hasActiveLease) ||
                        (config.initialStatus === config.targetStatus) ||
                        (config.isExpired && config.targetStatus === ListingStatus.ACTIVE);

                    if (shouldFail) {
                        // Operation should have failed
                        if (threwError) {
                            expect(caughtError).toBeInstanceOf(ListingError);
                            expect(caughtError.type).toBeOneOf([
                                ListingErrorType.VALIDATION_ERROR,
                                ListingErrorType.CONFLICT_ERROR
                            ]);
                        } else {
                            expect(updateResult).toBeDefined();
                            expect(updateResult.success).toBe(false);
                        }

                        // Verify listing state is preserved
                        expect(finalListing).toBeDefined();
                        expect(finalListing!.id).toBe(initialListing!.id);
                        expect(finalListing!.title).toBe(initialListing!.title);
                        expect(finalListing!.description).toBe(initialListing!.description);
                        expect(finalListing!.price).toBe(initialListing!.price);
                        expect(finalListing!.statusId).toBe(initialListing!.statusId);
                        expect(finalListing!.status?.name).toBe(initialListing!.status?.name);
                    } else {
                        // Operation should have succeeded
                        if (threwError) {
                            throw new Error(`Unexpected error for valid status change: ${caughtError.message}`);
                        }

                        expect(updateResult).toBeDefined();
                        expect(updateResult.success).toBe(true);
                        expect(finalListing!.status?.name).toBe(config.targetStatus);
                    }

                    // Clean up created data
                    await prisma.lease.deleteMany({
                        where: { unitId: unit.id }
                    });
                    await prisma.listing.delete({
                        where: { id: listing.id }
                    });
                    await prisma.unit.delete({
                        where: { id: unit.id }
                    });
                }
            ),
            { numRuns: 15 }
        );
    });

    it('should preserve system state during bulk operation failures', async () => {
        await fc.assert(
            fc.asyncProperty(
                fc.array(
                    fc.record({
                        unitNumber: fc.string({ minLength: 1, maxLength: 10 }),
                        rent: fc.float({ min: 500, max: 5000 }),
                        hasActiveLease: fc.boolean(),
                        hasExistingListing: fc.boolean(),
                        shouldCauseError: fc.boolean()
                    }),
                    { minLength: 2, maxLength: 5 }
                ),
                fc.constantFrom('LIST', 'UNLIST', 'SUSPEND'),
                async (unitConfigs, operation) => {
                    // Create units with specified configurations
                    const createdUnits = [];
                    for (const config of unitConfigs) {
                        const unit = await prisma.unit.create({
                            data: {
                                unitNumber: config.unitNumber,
                                rent: config.rent,
                                bedrooms: 2,
                                bathrooms: 1,
                                propertyId: testPropertyId,
                                organizationId: testOrganizationId
                            }
                        });

                        if (config.hasActiveLease) {
                            await prisma.lease.create({
                                data: {
                                    unitId: unit.id,
                                    tenantId: testUserId,
                                    startDate: new Date(),
                                    endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
                                    monthlyRent: config.rent,
                                    leaseStatus: 'ACTIVE',
                                    organizationId: testOrganizationId
                                }
                            });
                        }

                        if (config.hasExistingListing) {
                            await prisma.listing.create({
                                data: {
                                    title: `Listing for ${config.unitNumber}`,
                                    description: 'Test Description',
                                    price: config.rent,
                                    unitId: unit.id,
                                    organizationId: testOrganizationId,
                                    createdBy: testUserId,
                                    statusId: testStatusIds[ListingStatus.ACTIVE]
                                }
                            });
                        }

                        createdUnits.push({ ...unit, config });
                    }

                    // Capture initial state
                    const initialStates = await Promise.all(
                        createdUnits.map(unit =>
                            prisma.unit.findUnique({
                                where: { id: unit.id },
                                include: {
                                    listing: true,
                                    leases: true
                                }
                            })
                        )
                    );

                    // Prepare bulk operation data
                    const bulkOperations = createdUnits.map(unit => ({
                        unitId: unit.id,
                        action: operation,
                        ...(operation === 'LIST' && {
                            listingData: {
                                title: unit.config.shouldCauseError ? '' : `Bulk Listing ${unit.unitNumber}`,
                                description: unit.config.shouldCauseError ? '' : 'Bulk Description',
                                price: unit.config.shouldCauseError ? -100 : unit.rent
                            }
                        })
                    }));

                    // Attempt bulk operation
                    let bulkResult;
                    let threwError = false;
                    let caughtError: any = null;

                    try {
                        bulkResult = await listingService.bulkUpdateListings(
                            bulkOperations,
                            testUserId,
                            testOrganizationId
                        );
                    } catch (error) {
                        threwError = true;
                        caughtError = error;
                    }

                    // Capture final state
                    const finalStates = await Promise.all(
                        createdUnits.map(unit =>
                            prisma.unit.findUnique({
                                where: { id: unit.id },
                                include: {
                                    listing: true,
                                    leases: true
                                }
                            })
                        )
                    );

                    // Verify that failed operations preserve state
                    for (let i = 0; i < createdUnits.length; i++) {
                        const unit = createdUnits[i];
                        const initialState = initialStates[i];
                        const finalState = finalStates[i];
                        const config = unit.config;

                        // Determine if this specific unit operation should have failed
                        const shouldFailForUnit = 
                            (operation === 'LIST' && (config.hasActiveLease || config.hasExistingListing || config.shouldCauseError)) ||
                            (operation === 'UNLIST' && !config.hasExistingListing) ||
                            (operation === 'SUSPEND' && !config.hasExistingListing);

                        if (shouldFailForUnit) {
                            // This unit's operation should have failed - state should be preserved
                            expect(finalState).toBeDefined();
                            expect(finalState!.id).toBe(initialState!.id);
                            expect(finalState!.unitNumber).toBe(initialState!.unitNumber);
                            expect(finalState!.rent).toBe(initialState!.rent);

                            // Listing state should be preserved
                            if (initialState!.listing) {
                                expect(finalState!.listing).toBeDefined();
                                expect(finalState!.listing!.id).toBe(initialState!.listing!.id);
                            } else {
                                expect(finalState!.listing).toBeNull();
                            }

                            // Lease state should be preserved
                            expect(finalState!.leases.length).toBe(initialState!.leases.length);
                        }
                    }

                    // Verify bulk result structure
                    if (!threwError) {
                        expect(bulkResult).toBeDefined();
                        expect(bulkResult.summary).toBeDefined();
                        expect(bulkResult.summary.total).toBe(createdUnits.length);
                        expect(bulkResult.summary.succeeded + bulkResult.summary.failed).toBe(createdUnits.length);
                        expect(Array.isArray(bulkResult.successful)).toBe(true);
                        expect(Array.isArray(bulkResult.failed)).toBe(true);
                    }

                    // Clean up created data
                    await prisma.lease.deleteMany({
                        where: { unitId: { in: createdUnits.map(u => u.id) } }
                    });
                    await prisma.listing.deleteMany({
                        where: { unitId: { in: createdUnits.map(u => u.id) } }
                    });
                    await prisma.unit.deleteMany({
                        where: { id: { in: createdUnits.map(u => u.id) } }
                    });
                }
            ),
            { numRuns: 10 }
        );
    });

    it('should provide appropriate error feedback for all failure scenarios', async () => {
        await fc.assert(
            fc.asyncProperty(
                fc.oneof(
                    fc.constant('INVALID_UNIT_ID'),
                    fc.constant('MISSING_REQUIRED_FIELDS'),
                    fc.constant('UNIT_HAS_LEASE'),
                    fc.constant('UNIT_ALREADY_LISTED'),
                    fc.constant('INVALID_STATUS_TRANSITION')
                ),
                async (errorScenario) => {
                    let unit;
                    let listing;
                    let operationPromise;

                    switch (errorScenario) {
                        case 'INVALID_UNIT_ID':
                            operationPromise = listingService.createListing(
                                'invalid-unit-id',
                                {
                                    title: 'Test Listing',
                                    description: 'Test Description',
                                    price: 1500
                                },
                                testUserId,
                                testOrganizationId
                            );
                            break;

                        case 'MISSING_REQUIRED_FIELDS':
                            unit = await prisma.unit.create({
                                data: {
                                    unitNumber: 'A101',
                                    rent: 1500,
                                    bedrooms: 2,
                                    bathrooms: 1,
                                    propertyId: testPropertyId,
                                    organizationId: testOrganizationId
                                }
                            });

                            operationPromise = listingService.createListing(
                                unit.id,
                                {
                                    title: '', // Missing required field
                                    description: '',
                                    price: 0
                                },
                                testUserId,
                                testOrganizationId
                            );
                            break;

                        case 'UNIT_HAS_LEASE':
                            unit = await prisma.unit.create({
                                data: {
                                    unitNumber: 'A101',
                                    rent: 1500,
                                    bedrooms: 2,
                                    bathrooms: 1,
                                    propertyId: testPropertyId,
                                    organizationId: testOrganizationId
                                }
                            });

                            await prisma.lease.create({
                                data: {
                                    unitId: unit.id,
                                    tenantId: testUserId,
                                    startDate: new Date(),
                                    endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
                                    monthlyRent: 1500,
                                    leaseStatus: 'ACTIVE',
                                    organizationId: testOrganizationId
                                }
                            });

                            operationPromise = listingService.createListing(
                                unit.id,
                                {
                                    title: 'Test Listing',
                                    description: 'Test Description',
                                    price: 1500
                                },
                                testUserId,
                                testOrganizationId
                            );
                            break;

                        case 'UNIT_ALREADY_LISTED':
                            unit = await prisma.unit.create({
                                data: {
                                    unitNumber: 'A101',
                                    rent: 1500,
                                    bedrooms: 2,
                                    bathrooms: 1,
                                    propertyId: testPropertyId,
                                    organizationId: testOrganizationId
                                }
                            });

                            await prisma.listing.create({
                                data: {
                                    title: 'Existing Listing',
                                    description: 'Existing Description',
                                    price: 1500,
                                    unitId: unit.id,
                                    organizationId: testOrganizationId,
                                    createdBy: testUserId,
                                    statusId: testStatusIds[ListingStatus.ACTIVE]
                                }
                            });

                            operationPromise = listingService.createListing(
                                unit.id,
                                {
                                    title: 'New Listing',
                                    description: 'New Description',
                                    price: 1500
                                },
                                testUserId,
                                testOrganizationId
                            );
                            break;

                        case 'INVALID_STATUS_TRANSITION':
                            unit = await prisma.unit.create({
                                data: {
                                    unitNumber: 'A101',
                                    rent: 1500,
                                    bedrooms: 2,
                                    bathrooms: 1,
                                    propertyId: testPropertyId,
                                    organizationId: testOrganizationId
                                }
                            });

                            listing = await prisma.listing.create({
                                data: {
                                    title: 'Test Listing',
                                    description: 'Test Description',
                                    price: 1500,
                                    unitId: unit.id,
                                    organizationId: testOrganizationId,
                                    createdBy: testUserId,
                                    statusId: testStatusIds[ListingStatus.EXPIRED]
                                }
                            });

                            operationPromise = listingService.updateListingStatus(
                                listing.id,
                                ListingStatus.ACTIVE, // Invalid transition from EXPIRED to ACTIVE
                                testUserId,
                                'Invalid transition'
                            );
                            break;
                    }

                    // Verify that appropriate error is thrown or returned
                    let result;
                    let threwError = false;
                    let caughtError: any = null;

                    try {
                        result = await operationPromise;
                    } catch (error) {
                        threwError = true;
                        caughtError = error;
                    }

                    // Verify error feedback is provided
                    if (threwError) {
                        expect(caughtError).toBeInstanceOf(ListingError);
                        expect(caughtError.type).toBeDefined();
                        expect(caughtError.userMessage).toBeDefined();
                        expect(caughtError.userMessage.length).toBeGreaterThan(0);
                        expect(caughtError.retryable).toBeDefined();
                    } else {
                        expect(result).toBeDefined();
                        expect(result.success).toBe(false);
                        expect(result.error).toBeDefined();
                        expect(result.message).toBeDefined();
                        expect(result.message.length).toBeGreaterThan(0);
                    }

                    // Clean up
                    if (unit) {
                        await prisma.lease.deleteMany({ where: { unitId: unit.id } });
                        await prisma.listing.deleteMany({ where: { unitId: unit.id } });
                        await prisma.unit.delete({ where: { id: unit.id } });
                    }
                }
            ),
            { numRuns: 10 }
        );
    });
});