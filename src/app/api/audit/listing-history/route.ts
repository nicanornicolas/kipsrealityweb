import { NextRequest, NextResponse } from 'next/server';
import { auditService } from '@/lib/audit-service';
import { ListingAction, ListingStatus } from '@/lib/listing-types';

/**
 * GET /api/audit/listing-history
 * Retrieves audit trail with filtering and pagination
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Extract filter parameters
    const unitId = searchParams.get('unitId') || undefined;
    const listingId = searchParams.get('listingId') || undefined;
    const userId = searchParams.get('userId') || undefined;
    const action = searchParams.get('action') as ListingAction | undefined;
    const status = searchParams.get('status') as ListingStatus | undefined;
    const dateFrom = searchParams.get('dateFrom') ? new Date(searchParams.get('dateFrom')!) : undefined;
    const dateTo = searchParams.get('dateTo') ? new Date(searchParams.get('dateTo')!) : undefined;
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : 50;
    const offset = searchParams.get('offset') ? parseInt(searchParams.get('offset')!) : 0;

    // Validate parameters
    if (limit > 100) {
      return NextResponse.json(
        { error: 'Limit cannot exceed 100' },
        { status: 400 }
      );
    }

    if (dateFrom && dateTo && dateFrom > dateTo) {
      return NextResponse.json(
        { error: 'dateFrom cannot be after dateTo' },
        { status: 400 }
      );
    }

    // Get audit trail
    const result = await auditService.getAuditTrail({
      unitId,
      listingId,
      userId,
      action,
      status,
      dateFrom,
      dateTo,
      limit,
      offset
    });

    return NextResponse.json({
      success: true,
      data: result
    });

  } catch (error) {
    console.error('Error retrieving audit trail:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to retrieve audit trail',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}