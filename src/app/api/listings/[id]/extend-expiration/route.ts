// Listing Expiration Extension API
// Allows property managers to extend listing expiration dates

import { NextRequest, NextResponse } from 'next/server';
import { listingService } from '@/lib/listing-service';
import { getCurrentUser } from '@/lib/Getcurrentuser';

interface ExtendExpirationRequest {
    newExpirationDate: string;
    reason?: string;
}

/**
 * PUT /api/listings/[id]/extend-expiration
 * Extends the expiration date of a listing
 */
export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id: listingId } = await params;
        
        // Get current user
        const currentUser = await getCurrentUser();
        if (!currentUser) {
            return NextResponse.json(
                { error: 'Authentication required' },
                { status: 401 }
            );
        }

        // Parse request body
        const body: ExtendExpirationRequest = await request.json();
        
        // Validate request data
        if (!body.newExpirationDate) {
            return NextResponse.json(
                { 
                    error: 'Validation failed',
                    message: 'New expiration date is required'
                },
                { status: 400 }
            );
        }

        // Parse and validate the new expiration date
        const newExpirationDate = new Date(body.newExpirationDate);
        if (isNaN(newExpirationDate.getTime())) {
            return NextResponse.json(
                {
                    error: 'Validation failed',
                    message: 'Invalid expiration date format'
                },
                { status: 400 }
            );
        }

        // Extend the listing expiration
        const result = await listingService.extendListingExpiration(
            listingId,
            newExpirationDate,
            currentUser.id,
            body.reason
        );

        if (!result.success) {
            const statusCode = result.error === 'LISTING_NOT_FOUND' ? 404 : 400;
            return NextResponse.json(
                {
                    error: result.error,
                    message: result.message
                },
                { status: statusCode }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Listing expiration extended successfully',
            data: {
                listingId: result.data.listingId,
                newExpirationDate: newExpirationDate.toISOString(),
                status: result.data.newStatus
            }
        });

    } catch (error) {
        console.error('Error extending listing expiration:', error);
        
        return NextResponse.json(
            {
                error: 'Internal server error',
                message: 'Failed to extend listing expiration'
            },
            { status: 500 }
        );
    }
}