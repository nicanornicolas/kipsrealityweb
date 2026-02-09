// Property Deactivation API
// Handles property deactivation with cascading listing removal

import { NextRequest, NextResponse } from 'next/server';
import { propertyDeactivationService } from '@/lib/property-deactivation-service';
import { getCurrentUser } from '@/lib/Getcurrentuser';

interface DeactivatePropertyRequest {
  reason: string;
  notifyPropertyManagers?: boolean;
  notifyTenants?: boolean;
  gracePeriodHours?: number;
}

/**
 * POST /api/properties/[id]/deactivate
 * Deactivates a property and removes all associated listings
 */
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const propertyId = params.id;
    
    // Get current user
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    // Parse request body
    const body: DeactivatePropertyRequest = await request.json();
    
    // Validate request data
    if (!body.reason || body.reason.trim().length === 0) {
      return NextResponse.json(
        { 
          error: 'Validation failed',
          message: 'Deactivation reason is required'
        },
        { status: 400 }
      );
    }

    // Prepare deactivation config
    const config = {
      propertyId,
      reason: body.reason.trim(),
      notifyPropertyManagers: body.notifyPropertyManagers ?? true,
      notifyTenants: body.notifyTenants ?? true,
      gracePeriodHours: body.gracePeriodHours ?? 0
    };

    // Deactivate the property
    const result = await propertyDeactivationService.deactivateProperty(
      config,
      currentUser.id
    );

    if (!result.success) {
      return NextResponse.json(
        {
          error: 'Deactivation failed',
          message: 'Failed to deactivate property',
          details: result.errors
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Property deactivated successfully',
      data: {
        propertyId: result.propertyId,
        unitsAffected: result.unitsAffected,
        listingsRemoved: result.listingsRemoved,
        applicationsAffected: result.applicationsAffected,
        notificationsSent: result.notificationsSent,
        canRecover: result.canRecover,
        recoveryDataAvailable: !!result.recoveryData
      }
    });

  } catch (error) {
    console.error('Error deactivating property:', error);
    
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: 'Failed to deactivate property'
      },
      { status: 500 }
    );
  }
}