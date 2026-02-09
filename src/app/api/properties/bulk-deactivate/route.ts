// Bulk Property Deactivation API
// Handles deactivation of multiple properties with comprehensive reporting

import { NextRequest, NextResponse } from 'next/server';
import { propertyDeactivationService } from '@/lib/property-deactivation-service';
import { getCurrentUser } from '@/lib/Getcurrentuser';

interface BulkDeactivateRequest {
  propertyIds: string[];
  reason: string;
  notifyPropertyManagers?: boolean;
  notifyTenants?: boolean;
  gracePeriodHours?: number;
}

interface BulkDeactivationResult {
  totalProperties: number;
  successful: number;
  failed: number;
  results: Array<{
    propertyId: string;
    success: boolean;
    unitsAffected?: number;
    listingsRemoved?: number;
    applicationsAffected?: number;
    error?: string;
    canRecover?: boolean;
  }>;
  summary: {
    totalUnitsAffected: number;
    totalListingsRemoved: number;
    totalApplicationsAffected: number;
    totalNotificationsSent: number;
  };
}

/**
 * POST /api/properties/bulk-deactivate
 * Deactivates multiple properties and removes all associated listings
 */
export async function POST(request: NextRequest) {
  try {
    // Get current user
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    // Parse request body
    const body: BulkDeactivateRequest = await request.json();
    
    // Validate request data
    if (!body.propertyIds || !Array.isArray(body.propertyIds) || body.propertyIds.length === 0) {
      return NextResponse.json(
        { 
          error: 'Validation failed',
          message: 'Property IDs array is required and cannot be empty'
        },
        { status: 400 }
      );
    }

    if (!body.reason || body.reason.trim().length === 0) {
      return NextResponse.json(
        { 
          error: 'Validation failed',
          message: 'Deactivation reason is required'
        },
        { status: 400 }
      );
    }

    if (body.propertyIds.length > 50) {
      return NextResponse.json(
        { 
          error: 'Validation failed',
          message: 'Cannot deactivate more than 50 properties at once'
        },
        { status: 400 }
      );
    }

    // Initialize result tracking
    const bulkResult: BulkDeactivationResult = {
      totalProperties: body.propertyIds.length,
      successful: 0,
      failed: 0,
      results: [],
      summary: {
        totalUnitsAffected: 0,
        totalListingsRemoved: 0,
        totalApplicationsAffected: 0,
        totalNotificationsSent: 0
      }
    };

    // Process each property
    for (const propertyId of body.propertyIds) {
      try {
        const config = {
          propertyId,
          reason: body.reason.trim(),
          notifyPropertyManagers: body.notifyPropertyManagers ?? true,
          notifyTenants: body.notifyTenants ?? true,
          gracePeriodHours: body.gracePeriodHours ?? 0
        };

        const result = await propertyDeactivationService.deactivateProperty(
          config,
          currentUser.id
        );

        if (result.success) {
          bulkResult.successful++;
          bulkResult.summary.totalUnitsAffected += result.unitsAffected;
          bulkResult.summary.totalListingsRemoved += result.listingsRemoved;
          bulkResult.summary.totalApplicationsAffected += result.applicationsAffected;
          bulkResult.summary.totalNotificationsSent += result.notificationsSent;

          bulkResult.results.push({
            propertyId,
            success: true,
            unitsAffected: result.unitsAffected,
            listingsRemoved: result.listingsRemoved,
            applicationsAffected: result.applicationsAffected,
            canRecover: result.canRecover
          });
        } else {
          bulkResult.failed++;
          bulkResult.results.push({
            propertyId,
            success: false,
            error: result.errors.join(', ')
          });
        }

      } catch (error) {
        bulkResult.failed++;
        bulkResult.results.push({
          propertyId,
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    }

    // Determine response status
    const hasFailures = bulkResult.failed > 0;
    const hasSuccesses = bulkResult.successful > 0;
    
    let statusCode = 200;
    let message = 'All properties deactivated successfully';
    
    if (hasFailures && !hasSuccesses) {
      statusCode = 400;
      message = 'All property deactivations failed';
    } else if (hasFailures && hasSuccesses) {
      statusCode = 207; // Multi-status
      message = 'Some property deactivations failed';
    }

    return NextResponse.json({
      success: !hasFailures || hasSuccesses,
      message,
      data: bulkResult
    }, { status: statusCode });

  } catch (error) {
    console.error('Error in bulk property deactivation:', error);
    
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: 'Failed to process bulk property deactivation'
      },
      { status: 500 }
    );
  }
}