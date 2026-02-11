/**
 * Property-Based Test: Reporting Data Completeness
 * **Feature: marketplace-listing-choice, Property 16: Reporting Data Completeness**
 * **Validates: Requirements 10.2, 10.3, 10.4, 10.5**
 * 
 * For any generated report or data export, listing status information and 
 * performance metrics should be included and accurate
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { prisma } from '@/lib/db';
import { listingReportingService } from '@/lib/listing-reporting-service';
import { ListingStatus } from '@/lib/listing-types';
import fc from 'fast-check';

describe('Property 16: Reporting Data Completeness', () => {
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
        await prisma.listing.deleteMany({});
        await prisma.unit.deleteMany({});
        await prisma.property.deleteMany({});
        await prisma.organizationUser.deleteMany({});
        await prisma.user.deleteMany({});
        await prisma.organization.deleteMany({});
    });

    it('should include all required fields in listing analytics', async () => {
        await fc.assert(
            fc.asyncProperty(
                fc.array(
                    fc.record({
                        unitNumber: fc.string({ minLength: 1, maxLength: 10 }),
                        rent: fc.float({ min: 500, max: 5000 }),
                        bedrooms: fc.integer({ min: 0, max: 5 }),
                        bathrooms: fc.float({ min: 1, max: 4 }),
                        status: fc.constantFrom(...Object.values(ListingStatus)),
                        daysAgo: fc.integer({ min: 1, max: 365 })
                    }),
                    { minLength: 1, maxLength: 10 }
                ),
                async (unitConfigs) => {
                    // Create units and listings based on configurations
                    const createdUnits = [];
                    for (const config of unitConfigs) {
                        const unit = await prisma.unit.create({
                            data: {
                                unitNumber: config.unitNumber,
                                rent: config.rent,
                                bedrooms: config.bedrooms,
                                bathrooms: config.bathrooms,
                                propertyId: testPropertyId,
                                organizationId: testOrganizationId
                            }
                        });

                        if (config.status !== ListingStatus.PRIVATE) {
                            const createdAt = new Date();
                            createdAt.setDate(createdAt.getDate() - config.daysAgo);

                            const listing = await prisma.listing.create({
                                data: {
                                    title: `Unit ${config.unitNumber}`,
                                    description: `Listing for unit ${config.unitNumber}`,
                                    price: config.rent,
                                    unitId: unit.id,
                                    organizationId: testOrganizationId,
                                    createdBy: testUserId,
                                    statusId: testStatusIds[config.status],
                                    createdAt
                                }
                            });

                            // Create some applications for variety
                            const applicationCount = Math.floor(Math.random() * 5);
                            for (let i = 0; i < applicationCount; i++) {
                                await prisma.tenantApplication.create({
                                    data: {
                                        unitId: unit.id,
                                        firstName: `Applicant${i}`,
                                        lastName: 'Test',
                                        email: `applicant${i}-${Date.now()}@example.com`,
                                        phone: '555-0123',
                                        status: Math.random() > 0.7 ? 'APPROVED' : 'PENDING',
                                        organizationId: testOrganizationId
                                    }
                                });
                            }
                        }

                        createdUnits.push(unit);
                    }

                    // Get analytics
                    const analytics = await listingReportingService.getListingAnalytics();

                    // Verify all required fields are present and valid
                    expect(analytics).toBeDefined();
                    expect(typeof analytics.totalListings).toBe('number');
                    expect(analytics.totalListings).toBeGreaterThanOrEqual(0);
                    
                    expect(typeof analytics.activeListings).toBe('number');
                    expect(analytics.activeListings).toBeGreaterThanOrEqual(0);
                    expect(analytics.activeListings).toBeLessThanOrEqual(analytics.totalListings);
                    
                    expect(typeof analytics.averageDaysListed).toBe('number');
                    expect(analytics.averageDaysListed).toBeGreaterThanOrEqual(0);
                    
                    expect(typeof analytics.totalApplications).toBe('number');
                    expect(analytics.totalApplications).toBeGreaterThanOrEqual(0);
                    
                    expect(typeof analytics.overallConversionRate).toBe('number');
                    expect(analytics.overallConversionRate).toBeGreaterThanOrEqual(0);
                    expect(analytics.overallConversionRate).toBeLessThanOrEqual(100);
                    
                    expect(Array.isArray(analytics.monthlyTrends)).toBe(true);
                    expect(Array.isArray(analytics.statusDistribution)).toBe(true);
                    expect(Array.isArray(analytics.topPerformingProperties)).toBe(true);

                    // Verify monthly trends structure
                    analytics.monthlyTrends.forEach(trend => {
                        expect(typeof trend.month).toBe('string');
                        expect(typeof trend.year).toBe('number');
                        expect(typeof trend.newListings).toBe('number');
                        expect(typeof trend.applications).toBe('number');
                        expect(typeof trend.conversions).toBe('number');
                        expect(typeof trend.averageDaysListed).toBe('number');
                        expect(trend.newListings).toBeGreaterThanOrEqual(0);
                        expect(trend.applications).toBeGreaterThanOrEqual(0);
                        expect(trend.conversions).toBeGreaterThanOrEqual(0);
                        expect(trend.conversions).toBeLessThanOrEqual(trend.applications);
                    });

                    // Verify status distribution structure
                    analytics.statusDistribution.forEach(status => {
                        expect(typeof status.status).toBe('string');
                        expect(Object.values(ListingStatus)).toContain(status.status);
                        expect(typeof status.count).toBe('number');
                        expect(typeof status.percentage).toBe('number');
                        expect(status.count).toBeGreaterThanOrEqual(0);
                        expect(status.percentage).toBeGreaterThanOrEqual(0);
                        expect(status.percentage).toBeLessThanOrEqual(100);
                    });

                    // Verify top performing properties structure
                    analytics.topPerformingProperties.forEach(property => {
                        expect(typeof property.propertyId).toBe('string');
                        expect(typeof property.propertyName).toBe('string');
                        expect(typeof property.totalUnits).toBe('number');
                        expect(typeof property.listedUnits).toBe('number');
                        expect(typeof property.privateUnits).toBe('number');
                        expect(typeof property.averageDaysToLease).toBe('number');
                        expect(typeof property.totalApplications).toBe('number');
                        expect(typeof property.conversionRate).toBe('number');
                        expect(typeof property.totalRevenue).toBe('number');
                        expect(typeof property.occupancyRate).toBe('number');
                        
                        expect(property.totalUnits).toBeGreaterThanOrEqual(0);
                        expect(property.listedUnits).toBeGreaterThanOrEqual(0);
                        expect(property.privateUnits).toBeGreaterThanOrEqual(0);
                        expect(property.listedUnits + property.privateUnits).toBeLessThanOrEqual(property.totalUnits);
                        expect(property.conversionRate).toBeGreaterThanOrEqual(0);
                        expect(property.conversionRate).toBeLessThanOrEqual(100);
                        expect(property.occupancyRate).toBeGreaterThanOrEqual(0);
                        expect(property.occupancyRate).toBeLessThanOrEqual(100);
                    });

                    // Clean up created data
                    await prisma.tenantApplication.deleteMany({
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

    it('should include all required fields in property performance reports', async () => {
        await fc.assert(
            fc.asyncProperty(
                fc.array(
                    fc.record({
                        unitNumber: fc.string({ minLength: 1, maxLength: 10 }),
                        rent: fc.float({ min: 500, max: 5000 }),
                        hasListing: fc.boolean(),
                        hasLease: fc.boolean(),
                        applicationCount: fc.integer({ min: 0, max: 10 })
                    }),
                    { minLength: 1, maxLength: 5 }
                ),
                async (unitConfigs) => {
                    // Create units based on configurations
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

                        if (config.hasListing) {
                            await prisma.listing.create({
                                data: {
                                    title: `Unit ${config.unitNumber}`,
                                    description: `Listing for unit ${config.unitNumber}`,
                                    price: config.rent,
                                    unitId: unit.id,
                                    organizationId: testOrganizationId,
                                    createdBy: testUserId,
                                    statusId: testStatusIds[ListingStatus.ACTIVE]
                                }
                            });
                        }

                        if (config.hasLease) {
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

                        // Create applications
                        for (let i = 0; i < config.applicationCount; i++) {
                            await prisma.tenantApplication.create({
                                data: {
                                    unitId: unit.id,
                                    firstName: `Applicant${i}`,
                                    lastName: 'Test',
                                    email: `applicant${i}-${unit.id}@example.com`,
                                    phone: '555-0123',
                                    status: i < config.applicationCount / 2 ? 'APPROVED' : 'PENDING',
                                    organizationId: testOrganizationId
                                }
                            });
                        }

                        createdUnits.push(unit);
                    }

                    // Get property performance report
                    const report = await listingReportingService.getPropertyPerformance(testPropertyId);

                    // Verify all required fields are present and valid
                    expect(report).toBeDefined();
                    expect(report!.propertyId).toBe(testPropertyId);
                    expect(typeof report!.propertyName).toBe('string');
                    expect(typeof report!.totalUnits).toBe('number');
                    expect(typeof report!.listedUnits).toBe('number');
                    expect(typeof report!.privateUnits).toBe('number');
                    expect(typeof report!.averageDaysToLease).toBe('number');
                    expect(typeof report!.totalApplications).toBe('number');
                    expect(typeof report!.conversionRate).toBe('number');
                    expect(typeof report!.totalRevenue).toBe('number');
                    expect(typeof report!.occupancyRate).toBe('number');

                    // Verify data consistency
                    expect(report!.totalUnits).toBe(unitConfigs.length);
                    expect(report!.listedUnits + report!.privateUnits).toBeLessThanOrEqual(report!.totalUnits);
                    expect(report!.conversionRate).toBeGreaterThanOrEqual(0);
                    expect(report!.conversionRate).toBeLessThanOrEqual(100);
                    expect(report!.occupancyRate).toBeGreaterThanOrEqual(0);
                    expect(report!.occupancyRate).toBeLessThanOrEqual(100);
                    expect(report!.totalRevenue).toBeGreaterThanOrEqual(0);

                    // Clean up created data
                    await prisma.lease.deleteMany({
                        where: { unitId: { in: createdUnits.map(u => u.id) } }
                    });
                    await prisma.tenantApplication.deleteMany({
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

    it('should include all required fields in data exports', async () => {
        await fc.assert(
            fc.asyncProperty(
                fc.constantFrom('CSV', 'JSON', 'PDF'),
                fc.array(
                    fc.record({
                        unitNumber: fc.string({ minLength: 1, maxLength: 10 }),
                        rent: fc.float({ min: 500, max: 5000 }),
                        status: fc.constantFrom(...Object.values(ListingStatus))
                    }),
                    { minLength: 1, maxLength: 3 }
                ),
                async (exportFormat, unitConfigs) => {
                    // Create test data
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

                        if (config.status !== ListingStatus.PRIVATE) {
                            await prisma.listing.create({
                                data: {
                                    title: `Unit ${config.unitNumber}`,
                                    description: `Listing for unit ${config.unitNumber}`,
                                    price: config.rent,
                                    unitId: unit.id,
                                    organizationId: testOrganizationId,
                                    createdBy: testUserId,
                                    statusId: testStatusIds[config.status]
                                }
                            });
                        }

                        createdUnits.push(unit);
                    }

                    // Export data
                    const exportData = await listingReportingService.exportListingData(
                        { propertyId: testPropertyId },
                        { format: exportFormat as 'CSV' | 'JSON' | 'PDF' }
                    );

                    // Verify export data is not empty
                    expect(exportData).toBeDefined();
                    expect(exportData.toString().length).toBeGreaterThan(0);

                    // For JSON exports, verify structure
                    if (exportFormat === 'JSON') {
                        const parsedData = JSON.parse(exportData.toString());
                        expect(parsedData).toBeDefined();
                        expect(typeof parsedData.totalListings).toBe('number');
                        expect(typeof parsedData.activeListings).toBe('number');
                        expect(Array.isArray(parsedData.topPerformingProperties)).toBe(true);
                    }

                    // For CSV exports, verify headers are present
                    if (exportFormat === 'CSV') {
                        const csvContent = exportData.toString();
                        expect(csvContent).toContain('Property Name');
                        expect(csvContent).toContain('Total Units');
                        expect(csvContent).toContain('Conversion Rate');
                    }

                    // Clean up created data
                    await prisma.listing.deleteMany({
                        where: { unitId: { in: createdUnits.map(u => u.id) } }
                    });
                    await prisma.unit.deleteMany({
                        where: { id: { in: createdUnits.map(u => u.id) } }
                    });
                }
            ),
            { numRuns: 5 }
        );
    });
});