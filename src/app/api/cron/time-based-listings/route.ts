// Time-Based Listing Management - Cron Job Endpoint
// Processes automatic status transitions based on availability and expiration dates

import { NextRequest, NextResponse } from 'next/server';
import { listingService } from '@/lib/listing-service';

/**
 * POST /api/cron/time-based-listings
 * Processes time-based listing status transitions
 * Should be called by a scheduled cron job
 */
export async function POST(request: NextRequest) {
    try {
        // Verify this is a legitimate cron request
        const authHeader = request.headers.get('authorization');
        const cronSecret = process.env.CRON_SECRET;
        
        if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            );
        }

        console.log('Processing time-based listing transitions...');
        
        // Process all time-based transitions
        const result = await listingService.processTimeBasedTransitions();
        
        // Log results
        console.log('Time-based transitions completed:', {
            processed: result.processed,
            activated: result.activated,
            expired: result.expired,
            errors: result.errors.length,
            timestamp: new Date()
        });

        // Return success response with details
        return NextResponse.json({
            success: true,
            message: 'Time-based transitions processed successfully',
            data: {
                processed: result.processed,
                activated: result.activated,
                expired: result.expired,
                errorCount: result.errors.length,
                errors: result.errors.slice(0, 10) // Limit errors in response
            }
        });

    } catch (error) {
        console.error('Error processing time-based transitions:', error);
        
        return NextResponse.json(
            {
                success: false,
                error: 'Failed to process time-based transitions',
                message: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}

/**
 * GET /api/cron/time-based-listings
 * Returns information about upcoming transitions (for monitoring)
 */
export async function GET(request: NextRequest) {
    try {
        // Verify authorization
        const authHeader = request.headers.get('authorization');
        const cronSecret = process.env.CRON_SECRET;
        
        if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            );
        }

        // Get listings expiring in the next 7 days
        const expiringSoon = await listingService.getExpiringSoonListings(7);
        
        if (!expiringSoon.success) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Failed to get expiring listings',
                    message: expiringSoon.error
                },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            data: {
                expiringSoon: expiringSoon.data,
                summary: {
                    expiringSoonCount: expiringSoon.data?.length || 0,
                    nextExpirationDate: expiringSoon.data?.[0]?.expirationDate || null
                }
            }
        });

    } catch (error) {
        console.error('Error getting time-based listing info:', error);
        
        return NextResponse.json(
            {
                success: false,
                error: 'Failed to get time-based listing information',
                message: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}