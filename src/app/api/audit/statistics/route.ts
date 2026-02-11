import { NextRequest, NextResponse } from 'next/server';
import { auditService } from '@/lib/audit-service';
import { ListingAction, ListingStatus } from '@/lib/listing-types';

/**
 * GET /api/audit/statistics
 * Retrieves audit statistics for reporting and analytics
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Extract filter parameters for statistics
    const unitId = searchParams.get('unitId') || undefined;
    const listingId = searchParams.get('listingId') || undefined;
    const userId = searchParams.get('userId') || undefined;
    const action = searchParams.get('action') as ListingAction | undefined;
    const status = searchParams.get('status') as ListingStatus | undefined;
    const dateFrom = searchParams.get('dateFrom') ? new Date(searchParams.get('dateFrom')!) : undefined;
    const dateTo = searchParams.get('dateTo') ? new Date(searchParams.get('dateTo')!) : undefined;

    // Validate date range
    if (dateFrom && dateTo && dateFrom > dateTo) {
      return NextResponse.json(
        { error: 'dateFrom cannot be after dateTo' },
        { status: 400 }
      );
    }

    // Get audit statistics
    const statistics = await auditService.getAuditStatistics({
      unitId,
      listingId,
      userId,
      action,
      status,
      dateFrom,
      dateTo
    });

    return NextResponse.json({
      success: true,
      data: statistics
    });

  } catch (error) {
    console.error('Error retrieving audit statistics:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to retrieve audit statistics',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

/**
 * POST /api/audit/statistics
 * Creates custom audit statistics report with advanced filtering
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      filters = {},
      groupBy = [],
      dateRange,
      includeTimeline = true,
      includeUserActivity = true
    } = body;

    // Validate groupBy options
    const validGroupByOptions = ['action', 'status', 'userId', 'unitId', 'date'];
    const invalidGroupBy = groupBy.filter((option: string) => !validGroupByOptions.includes(option));
    
    if (invalidGroupBy.length > 0) {
      return NextResponse.json(
        { error: `Invalid groupBy options: ${invalidGroupBy.join(', ')}` },
        { status: 400 }
      );
    }

    // Process date range
    let dateFrom: Date | undefined;
    let dateTo: Date | undefined;
    
    if (dateRange) {
      dateFrom = dateRange.from ? new Date(dateRange.from) : undefined;
      dateTo = dateRange.to ? new Date(dateRange.to) : undefined;
      
      if (dateFrom && dateTo && dateFrom > dateTo) {
        return NextResponse.json(
          { error: 'dateRange.from cannot be after dateRange.to' },
          { status: 400 }
        );
      }
    }

    // Get comprehensive statistics
    const statistics = await auditService.getAuditStatistics({
      ...filters,
      dateFrom,
      dateTo
    });

    // Build custom response based on requested data
    const response: any = {
      totalEntries: statistics.totalEntries,
      summary: {
        actions: statistics.actionBreakdown,
        statuses: statistics.statusBreakdown
      }
    };

    if (includeUserActivity) {
      response.userActivity = statistics.userActivity;
    }

    if (includeTimeline) {
      response.timeline = statistics.timelineData;
    }

    // Add custom groupings if requested
    if (groupBy.length > 0) {
      response.customGroupings = {
        groupedBy: groupBy,
        note: 'Custom groupings would require additional implementation based on specific requirements'
      };
    }

    return NextResponse.json({
      success: true,
      data: response,
      metadata: {
        generatedAt: new Date().toISOString(),
        filters: filters,
        groupBy: groupBy,
        dateRange: dateRange
      }
    });

  } catch (error) {
    console.error('Error creating custom audit statistics:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to create custom audit statistics',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}