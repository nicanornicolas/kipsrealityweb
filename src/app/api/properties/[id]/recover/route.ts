// Property Recovery API
// Handles recovery from accidental property deactivation

import { NextRequest, NextResponse } from 'next/server';
import { propertyDeactivationService } from '@/lib/property-deactivation-service';
import { getCurrentUser } from '@/lib/Getcurrentuser';

interface RecoverPropertyRequest {
  reason?: string;
  useStoredRecoveryData?: boolean;
}

/**
 * POST /api/properties/[id]/recover
 * Recovers a property from deactivation and restores listings
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: propertyId } = await params;
    
    // Get current user
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    // Parse request body
    const body: RecoverPropertyRequest = await request.json();
    
    // Get recovery data
    const recoveryData = await propertyDeactivationService.getRecoveryData(propertyId);
    
    if (!recoveryData) {
      return NextResponse.json(
        {
          error: 'Recovery not possible',
          message: 'No recovery data found for this property. It may not have been deactivated or recovery data may have expired.'
        },
        { status: 404 }
      );
    }

    // Recover the property
    const result = await propertyDeactivationService.recoverProperty(
      propertyId,
      recoveryData,
      currentUser.id,
      body.reason || 'Property recovered from accidental deactivation'
    );

    if (!result.success) {
      return NextResponse.json(
        {
          error: 'Recovery failed',
          message: 'Failed to recover property',
          details: result.errors
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Property recovered successfully',
      data: {
        propertyId: result.propertyId,
        unitsRestored: result.unitsAffected,
        listingsRestored: result.listingsRemoved, // In recovery context, this means restored
        notificationsSent: result.notificationsSent,
        originalDeactivationDate: recoveryData.deactivationTimestamp
      }
    });

  } catch (error) {
    console.error('Error recovering property:', error);
    
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: 'Failed to recover property'
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/properties/[id]/recover
 * Gets recovery information for a property
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: propertyId } = await params;
    
    // Get current user
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    // Get recovery data
    const recoveryData = await propertyDeactivationService.getRecoveryData(propertyId);
    
    if (!recoveryData) {
      return NextResponse.json(
        {
          canRecover: false,
          message: 'No recovery data available for this property'
        }
      );
    }

    return NextResponse.json({
      canRecover: true,
      recoveryData: {
        propertyId: recoveryData.propertyId,
        originalStatus: recoveryData.originalStatus,
        deactivationDate: recoveryData.deactivationTimestamp,
        unitsAffected: recoveryData.affectedUnits.length,
        listingsToRestore: recoveryData.affectedUnits.filter(u => u.hadListing).length,
        applicationsAffected: recoveryData.affectedApplications.length
      }
    });

  } catch (error) {
    console.error('Error getting recovery information:', error);
    
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: 'Failed to get recovery information'
      },
      { status: 500 }
    );
  }
}