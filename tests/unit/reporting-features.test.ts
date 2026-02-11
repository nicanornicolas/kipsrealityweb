/**
 * Unit Tests: Reporting Features
 * Tests performance metric calculations, report generation accuracy, 
 * and data export functionality
 * **Validates: Requirements 10.2, 10.3, 10.5**
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { prisma } from '@/lib/db';
import { listingReportingService } from '@/lib/listing-reporting-service';
import { ListingStatus } from '@/lib/listing-types';

describe('Reporting Features Unit Tests', () => {
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

    describe('Performance Metric Calculations', () => {
        it('should calculate listing performance metrics correctly', async () => {
            // Create test unit and listing
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

            const createdAt = new Date();
            createdAt.setDate(createdAt.getDate() - 30); // 30 days ago

            const listing = await prisma.listing.create({
                data: {
                    title: 'Test Listing',
                    description: 'Test Description',
                    price: 1500,
                    unitId: unit.id,
                    organizationId: testOrganizationId,
                    createdBy: testUserId,
                    statusId: testStatusIds[ListingStatus.ACTIVE],
                    createdAt
                }
            });

            // Create test applications
            await prisma.tenantApplication.create({
                data: {
                    unitId: unit.id,
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'john@example.com',
                    phone: '555-0123',
                    status: 'APPROVED',
                    organizationId: testOrganizationId
                }
            });

            await prisma.tenantApplication.create({
                data: {
                    unitId: unit.id,
                    firstName: 'Jane',
                    lastName: 'Smith',
                    email: 'jane@example.com',
                    phone: '555-0124',
                    status: 'PENDING',
                    organizationId: testOrganizationId
                }
            });

            // Get performance report
            const report = await listingReportingService.getListingPerformance(listing.id);

            expect(report).toBeDefined();
            expect(report!.listingId).toBe(listing.id);
            expect(report!.unitId).toBe(unit.id);
            expect(report!.unitNumber).toBe('A101');
            expect(report!.daysListed).toBeGreaterThan(25); // Should be around 30 days
            expect(report!.applicationCount).toBe(2);
            expect(report!.conversionRate).toBe(50); // 1 approved out of 2 applications
            expect(report!.totalRevenue).toBe(1500); // 1 approved application * $1500
            expect(report!.currentStatus).toBe(ListingStatus.ACTIVE);
        });

        it('should calculate property performance metrics correctly', async () => {
            // Create multiple units with different scenarios
            const unit1 = await prisma.unit.create({
                data: {
                    unitNumber: 'A101',
                    rent: 1500,
                    bedrooms: 2,
                    bathrooms: 1,
                    propertyId: testPropertyId,
                    organizationId: testOrganizationId
                }
            });

            const unit2 = await prisma.unit.create({
                data: {
                    unitNumber: 'A102',
                    rent: 1600,
                    bedrooms: 2,
                    bathrooms: 1,
                    propertyId: testPropertyId,
                    organizationId: testOrganizationId
                }
            });

            const unit3 = await prisma.unit.create({
                data: {
                    unitNumber: 'A103',
                    rent: 1400,
                    bedrooms: 1,
                    bathrooms: 1,
                    propertyId: testPropertyId,
                    organizationId: testOrganizationId
                }
            });

            // Create listings for unit1 and unit2 (unit3 stays private)
            await prisma.listing.create({
                data: {
                    title: 'Unit A101',
                    description: 'Nice unit',
                    price: 1500,
                    unitId: unit1.id,
                    organizationId: testOrganizationId,
                    createdBy: testUserId,
                    statusId: testStatusIds[ListingStatus.ACTIVE]
                }
            });

            await prisma.listing.create({
                data: {
                    title: 'Unit A102',
                    description: 'Great unit',
                    price: 1600,
                    unitId: unit2.id,
                    organizationId: testOrganizationId,
                    createdBy: testUserId,
                    statusId: testStatusIds[ListingStatus.ACTIVE]
                }
            });

            // Create applications
            await prisma.tenantApplication.create({
                data: {
                    unitId: unit1.id,
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'john@example.com',
                    phone: '555-0123',
                    status: 'APPROVED',
                    organizationId: testOrganizationId
                }
            });

            await prisma.tenantApplication.create({
                data: {
                    unitId: unit2.id,
                    firstName: 'Jane',
                    lastName: 'Smith',
                    email: 'jane@example.com',
                    phone: '555-0124',
                    status: 'PENDING',
                    organizationId: testOrganizationId
                }
            });

            // Create active lease for unit1
            await prisma.lease.create({
                data: {
                    unitId: unit1.id,
                    tenantId: testUserId,
                    startDate: new Date(),
                    endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
                    monthlyRent: 1500,
                    leaseStatus: 'ACTIVE',
                    organizationId: testOrganizationId
                }
            });

            // Get property performance report
            const report = await listingReportingService.getPropertyPerformance(testPropertyId);

            expect(report).toBeDefined();
            expect(report!.propertyId).toBe(testPropertyId);
            expect(report!.totalUnits).toBe(3);
            expect(report!.listedUnits).toBe(2); // unit1 and unit2 are listed
            expect(report!.privateUnits).toBe(1); // unit3 is private
            expect(report!.totalApplications).toBe(2);
            expect(report!.conversionRate).toBe(50); // 1 approved out of 2 applications
            expect(report!.occupancyRate).toBeCloseTo(33.33, 1); // 1 occupied out of 3 units
        });

        it('should calculate monthly trends correctly', async () => {
            // Create listings from different months
            const unit1 = await prisma.unit.create({
                data: {
                    unitNumber: 'A101',
                    rent: 1500,
                    bedrooms: 2,
                    bathrooms: 1,
                    propertyId: testPropertyId,
                    organizationId: testOrganizationId
                }
            });

            const unit2 = await prisma.unit.create({
                data: {
                    unitNumber: 'A102',
                    rent: 1600,
                    bedrooms: 2,
                    bathrooms: 1,
                    propertyId: testPropertyId,
                    organizationId: testOrganizationId
                }
            });

            // Create listing from last month
            const lastMonth = new Date();
            lastMonth.setMonth(lastMonth.getMonth() - 1);

            await prisma.listing.create({
                data: {
                    title: 'Unit A101',
                    description: 'Nice unit',
                    price: 1500,
                    unitId: unit1.id,
                    organizationId: testOrganizationId,
                    createdBy: testUserId,
                    statusId: testStatusIds[ListingStatus.ACTIVE],
                    createdAt: lastMonth
                }
            });

            // Create listing from this month
            await prisma.listing.create({
                data: {
                    title: 'Unit A102',
                    description: 'Great unit',
                    price: 1600,
                    unitId: unit2.id,
                    organizationId: testOrganizationId,
                    createdBy: testUserId,
                    statusId: testStatusIds[ListingStatus.ACTIVE]
                }
            });

            // Get analytics
            const analytics = await listingReportingService.getListingAnalytics();

            expect(analytics.monthlyTrends).toBeDefined();
            expect(analytics.monthlyTrends.length).toBeGreaterThan(0);
            
            // Check that trends have required fields
            analytics.monthlyTrends.forEach(trend => {
                expect(trend.month).toBeDefined();
                expect(trend.year).toBeDefined();
                expect(typeof trend.newListings).toBe('number');
                expect(typeof trend.applications).toBe('number');
                expect(typeof trend.conversions).toBe('number');
                expect(typeof trend.averageDaysListed).toBe('number');
            });
        });
    });

    describe('Report Generation Accuracy', () => {
        it('should generate accurate listing analytics', async () => {
            // Create test data with known values
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

            await prisma.listing.create({
                data: {
                    title: 'Test Listing',
                    description: 'Test Description',
                    price: 1500,
                    unitId: unit.id,
                    organizationId: testOrganizationId,
                    createdBy: testUserId,
                    statusId: testStatusIds[ListingStatus.ACTIVE]
                }
            });

            const analytics = await listingReportingService.getListingAnalytics();

            expect(analytics.totalListings).toBe(1);
            expect(analytics.activeListings).toBe(1);
            expect(analytics.averageDaysListed).toBeGreaterThanOrEqual(0);
            expect(analytics.totalApplications).toBe(0);
            expect(analytics.overallConversionRate).toBe(0);
            expect(Array.isArray(analytics.monthlyTrends)).toBe(true);
            expect(Array.isArray(analytics.statusDistribution)).toBe(true);
            expect(Array.isArray(analytics.topPerformingProperties)).toBe(true);
        });

        it('should generate accurate status distribution', async () => {
            // Create units with different statuses
            const units = await Promise.all([
                prisma.unit.create({
                    data: {
                        unitNumber: 'A101',
                        rent: 1500,
                        bedrooms: 2,
                        bathrooms: 1,
                        propertyId: testPropertyId,
                        organizationId: testOrganizationId
                    }
                }),
                prisma.unit.create({
                    data: {
                        unitNumber: 'A102',
                        rent: 1600,
                        bedrooms: 2,
                        bathrooms: 1,
                        propertyId: testPropertyId,
                        organizationId: testOrganizationId
                    }
                }),
                prisma.unit.create({
                    data: {
                        unitNumber: 'A103',
                        rent: 1400,
                        bedrooms: 1,
                        bathrooms: 1,
                        propertyId: testPropertyId,
                        organizationId: testOrganizationId
                    }
                })
            ]);

            // Create listings with different statuses
            await prisma.listing.create({
                data: {
                    title: 'Active Listing',
                    description: 'Active',
                    price: 1500,
                    unitId: units[0].id,
                    organizationId: testOrganizationId,
                    createdBy: testUserId,
                    statusId: testStatusIds[ListingStatus.ACTIVE]
                }
            });

            await prisma.listing.create({
                data: {
                    title: 'Suspended Listing',
                    description: 'Suspended',
                    price: 1600,
                    unitId: units[1].id,
                    organizationId: testOrganizationId,
                    createdBy: testUserId,
                    statusId: testStatusIds[ListingStatus.SUSPENDED]
                }
            });

            // units[2] has no listing (private)

            const analytics = await listingReportingService.getListingAnalytics();

            expect(analytics.statusDistribution).toBeDefined();
            expect(analytics.statusDistribution.length).toBeGreaterThan(0);

            const activeStatus = analytics.statusDistribution.find(s => s.status === ListingStatus.ACTIVE);
            const suspendedStatus = analytics.statusDistribution.find(s => s.status === ListingStatus.SUSPENDED);

            expect(activeStatus).toBeDefined();
            expect(activeStatus!.count).toBe(1);
            expect(activeStatus!.percentage).toBe(50); // 1 out of 2 listings

            expect(suspendedStatus).toBeDefined();
            expect(suspendedStatus!.count).toBe(1);
            expect(suspendedStatus!.percentage).toBe(50); // 1 out of 2 listings
        });
    });

    describe('Data Export Functionality', () => {
        it('should export data in JSON format correctly', async () => {
            // Create test data
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

            await prisma.listing.create({
                data: {
                    title: 'Test Listing',
                    description: 'Test Description',
                    price: 1500,
                    unitId: unit.id,
                    organizationId: testOrganizationId,
                    createdBy: testUserId,
                    statusId: testStatusIds[ListingStatus.ACTIVE]
                }
            });

            const exportData = await listingReportingService.exportListingData(
                {},
                { format: 'JSON' }
            );

            expect(typeof exportData).toBe('string');
            const parsedData = JSON.parse(exportData as string);
            expect(parsedData).toBeDefined();
            expect(parsedData.exportedAt).toBeDefined();
            expect(parsedData.summary).toBeDefined();
            expect(parsedData.summary.totalListings).toBe(1);
        });

        it('should export data in CSV format correctly', async () => {
            // Create test data
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

            await prisma.listing.create({
                data: {
                    title: 'Test Listing',
                    description: 'Test Description',
                    price: 1500,
                    unitId: unit.id,
                    organizationId: testOrganizationId,
                    createdBy: testUserId,
                    statusId: testStatusIds[ListingStatus.ACTIVE]
                }
            });

            const exportData = await listingReportingService.exportListingData(
                {},
                { format: 'CSV', includeDetails: true }
            );

            expect(typeof exportData).toBe('string');
            const csvContent = exportData as string;
            expect(csvContent).toContain('Listing ID');
            expect(csvContent).toContain('Unit Number');
            expect(csvContent).toContain('Property Name');
            expect(csvContent).toContain('A101'); // Should contain our test unit
        });

        it('should export data with custom fields correctly', async () => {
            // Create test data
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

            await prisma.listing.create({
                data: {
                    title: 'Test Listing',
                    description: 'Test Description',
                    price: 1500,
                    unitId: unit.id,
                    organizationId: testOrganizationId,
                    createdBy: testUserId,
                    statusId: testStatusIds[ListingStatus.ACTIVE]
                }
            });

            const exportData = await listingReportingService.exportListingData(
                {},
                { 
                    format: 'CSV', 
                    includeDetails: true,
                    customFields: ['availabilityDate', 'expirationDate']
                }
            );

            expect(typeof exportData).toBe('string');
            const csvContent = exportData as string;
            expect(csvContent).toContain('availabilityDate');
            expect(csvContent).toContain('expirationDate');
        });

        it('should validate export format correctly', async () => {
            await expect(
                listingReportingService.exportListingData(
                    {},
                    { format: 'INVALID' as any }
                )
            ).rejects.toThrow('Unsupported export format');
        });

        it('should handle empty data sets correctly', async () => {
            // No test data created - should handle empty results
            const analytics = await listingReportingService.getListingAnalytics();

            expect(analytics.totalListings).toBe(0);
            expect(analytics.activeListings).toBe(0);
            expect(analytics.averageDaysListed).toBe(0);
            expect(analytics.totalApplications).toBe(0);
            expect(analytics.overallConversionRate).toBe(0);
            expect(analytics.monthlyTrends).toBeDefined();
            expect(analytics.statusDistribution).toBeDefined();
            expect(analytics.topPerformingProperties).toBeDefined();

            const exportData = await listingReportingService.exportListingData(
                {},
                { format: 'JSON' }
            );

            expect(exportData).toBeDefined();
            const parsedData = JSON.parse(exportData as string);
            expect(parsedData.summary.totalListings).toBe(0);
        });
    });

    describe('Filter Functionality', () => {
        it('should filter data by property correctly', async () => {
            // Create second property
            const property2 = await prisma.property.create({
                data: {
                    name: 'Test Property 2',
                    address: '456 Test Ave',
                    organizationId: testOrganizationId
                }
            });

            // Create units in both properties
            const unit1 = await prisma.unit.create({
                data: {
                    unitNumber: 'A101',
                    rent: 1500,
                    bedrooms: 2,
                    bathrooms: 1,
                    propertyId: testPropertyId,
                    organizationId: testOrganizationId
                }
            });

            const unit2 = await prisma.unit.create({
                data: {
                    unitNumber: 'B101',
                    rent: 1600,
                    bedrooms: 2,
                    bathrooms: 1,
                    propertyId: property2.id,
                    organizationId: testOrganizationId
                }
            });

            // Create listings for both units
            await prisma.listing.create({
                data: {
                    title: 'Listing 1',
                    description: 'Description 1',
                    price: 1500,
                    unitId: unit1.id,
                    organizationId: testOrganizationId,
                    createdBy: testUserId,
                    statusId: testStatusIds[ListingStatus.ACTIVE]
                }
            });

            await prisma.listing.create({
                data: {
                    title: 'Listing 2',
                    description: 'Description 2',
                    price: 1600,
                    unitId: unit2.id,
                    organizationId: testOrganizationId,
                    createdBy: testUserId,
                    statusId: testStatusIds[ListingStatus.ACTIVE]
                }
            });

            // Get analytics for all properties
            const allAnalytics = await listingReportingService.getListingAnalytics();
            expect(allAnalytics.totalListings).toBe(2);

            // Get analytics filtered by first property
            const filteredAnalytics = await listingReportingService.getListingAnalytics({
                propertyId: testPropertyId
            });
            expect(filteredAnalytics.totalListings).toBe(1);
        });

        it('should filter data by date range correctly', async () => {
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

            // Create listing from last month
            const lastMonth = new Date();
            lastMonth.setMonth(lastMonth.getMonth() - 1);

            await prisma.listing.create({
                data: {
                    title: 'Old Listing',
                    description: 'Old Description',
                    price: 1500,
                    unitId: unit.id,
                    organizationId: testOrganizationId,
                    createdBy: testUserId,
                    statusId: testStatusIds[ListingStatus.ACTIVE],
                    createdAt: lastMonth
                }
            });

            // Get analytics with date filter (last 7 days)
            const sevenDaysAgo = new Date();
            sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

            const recentAnalytics = await listingReportingService.getListingAnalytics({
                startDate: sevenDaysAgo,
                endDate: new Date()
            });

            expect(recentAnalytics.totalListings).toBe(0); // No listings in last 7 days

            // Get analytics with broader date filter
            const thirtyDaysAgo = new Date();
            thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 45);

            const broaderAnalytics = await listingReportingService.getListingAnalytics({
                startDate: thirtyDaysAgo,
                endDate: new Date()
            });

            expect(broaderAnalytics.totalListings).toBe(1); // Should include the old listing
        });
    });
});