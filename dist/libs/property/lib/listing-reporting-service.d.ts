import { ListingStatus } from './listing-types';
export interface ListingPerformanceReport {
    listingId: string;
    unitId: string;
    unitNumber: string;
    propertyName: string;
    daysListed: number;
    applicationCount: number;
    viewCount: number;
    conversionRate: number;
    averageTimeToApplication: number;
    currentStatus: ListingStatus;
    totalRevenue: number;
    createdAt: Date;
    lastStatusChange: Date;
}
export interface PropertyPerformanceReport {
    propertyId: string;
    propertyName: string;
    totalUnits: number;
    listedUnits: number;
    privateUnits: number;
    averageDaysToLease: number;
    totalApplications: number;
    conversionRate: number;
    totalRevenue: number;
    occupancyRate: number;
}
export interface ListingAnalytics {
    totalListings: number;
    activeListings: number;
    averageDaysListed: number;
    totalApplications: number;
    overallConversionRate: number;
    monthlyTrends: MonthlyTrend[];
    statusDistribution: StatusDistribution[];
    topPerformingProperties: PropertyPerformanceReport[];
}
export interface MonthlyTrend {
    month: string;
    year: number;
    newListings: number;
    applications: number;
    conversions: number;
    averageDaysListed: number;
}
export interface StatusDistribution {
    status: ListingStatus;
    count: number;
    percentage: number;
}
export interface ReportFilters {
    propertyId?: string;
    startDate?: Date;
    endDate?: Date;
    status?: ListingStatus[];
    minDaysListed?: number;
    maxDaysListed?: number;
}
export interface ExportOptions {
    format: 'CSV' | 'JSON' | 'PDF';
    includeCharts?: boolean;
    includeDetails?: boolean;
    customFields?: string[];
    groupBy?: 'property' | 'status' | 'month';
    dateRange?: {
        start: Date;
        end: Date;
    };
}
/**
 * Service for generating listing performance reports and analytics
 */
export declare class ListingReportingService {
    /**
     * Gets performance metrics for a specific listing
     */
    getListingPerformance(listingId: string): Promise<ListingPerformanceReport | null>;
    /**
     * Gets performance metrics for all listings in a property
     */
    getPropertyPerformance(propertyId: string): Promise<PropertyPerformanceReport | null>;
    /**
     * Gets comprehensive analytics across all listings
     */
    getListingAnalytics(filters?: ReportFilters): Promise<ListingAnalytics>;
    /**
     * Generates monthly trend data
     */
    private generateMonthlyTrends;
    /**
     * Generates status distribution data
     */
    private generateStatusDistribution;
    /**
     * Gets top performing properties by conversion rate
     */
    private getTopPerformingProperties;
    /**
     * Exports listing data in specified format with enhanced customization
     */
    exportListingData(filters?: ReportFilters, options?: ExportOptions): Promise<string | Buffer>;
    /**
     * Gets detailed listing data for exports
     */
    private getDetailedListingData;
    /**
     * Generates enhanced JSON export with grouping and custom fields
     */
    private generateEnhancedJSONExport;
    /**
     * Generates enhanced CSV export with custom fields
     */
    private generateEnhancedCSVExport;
    /**
     * Generates enhanced PDF export with charts and detailed analysis
     */
    private generateEnhancedPDFExport;
    /**
     * Groups listing data by specified criteria
     */
    private groupListingData;
    /**
     * Generates CSV export of listing data
     */
    private generateCSVExport;
    /**
     * Generates detailed CSV from analytics data
     */
    private generateDetailedCSVFromAnalytics;
    /**
     * Generates PDF export of listing data
     */
    private generatePDFExport;
    /**
     * Maps Prisma status name to ListingStatus enum
     */
    private mapPrismaStatusToEnum;
}
export declare const listingReportingService: ListingReportingService;
