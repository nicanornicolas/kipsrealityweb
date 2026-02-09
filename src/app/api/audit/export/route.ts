import { NextRequest, NextResponse } from 'next/server';
import { auditService } from '@/lib/audit-service';
import { ListingAction, ListingStatus } from '@/lib/listing-types';

/**
 * GET /api/audit/export
 * Exports audit data in CSV or JSON format
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Extract parameters
    const format = searchParams.get('format') as 'csv' | 'json' || 'json';
    const includeMetadata = searchParams.get('includeMetadata') === 'true';
    
    // Extract filter parameters
    const unitId = searchParams.get('unitId') || undefined;
    const listingId = searchParams.get('listingId') || undefined;
    const userId = searchParams.get('userId') || undefined;
    const action = searchParams.get('action') as ListingAction | undefined;
    const status = searchParams.get('status') as ListingStatus | undefined;
    const dateFrom = searchParams.get('dateFrom') ? new Date(searchParams.get('dateFrom')!) : undefined;
    const dateTo = searchParams.get('dateTo') ? new Date(searchParams.get('dateTo')!) : undefined;

    // Validate format
    if (!['csv', 'json'].includes(format)) {
      return NextResponse.json(
        { error: 'Format must be either "csv" or "json"' },
        { status: 400 }
      );
    }

    // Validate date range
    if (dateFrom && dateTo && dateFrom > dateTo) {
      return NextResponse.json(
        { error: 'dateFrom cannot be after dateTo' },
        { status: 400 }
      );
    }

    // Export audit data
    const exportData = await auditService.exportAuditData(
      {
        unitId,
        listingId,
        userId,
        action,
        status,
        dateFrom,
        dateTo
      },
      {
        format,
        includeMetadata,
        dateRange: dateFrom && dateTo ? { from: dateFrom, to: dateTo } : undefined
      }
    );

    // Set appropriate headers for file download
    const filename = `listing-audit-${new Date().toISOString().split('T')[0]}.${format}`;
    const contentType = format === 'csv' ? 'text/csv' : 'application/json';

    return new NextResponse(exportData, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });

  } catch (error) {
    console.error('Error exporting audit data:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to export audit data',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}