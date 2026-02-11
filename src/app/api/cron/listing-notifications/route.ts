// Listing Notification Cron Job
// Sends expiration warnings and daily digests

import { NextRequest, NextResponse } from 'next/server';
import { listingNotificationService } from '@/lib/listing-notification-service';

/**
 * POST /api/cron/listing-notifications
 * Sends expiration warnings for listings expiring soon
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

        // Get notification type from query params
        const url = new URL(request.url);
        const notificationType = url.searchParams.get('type') || 'warnings';
        const daysAhead = parseInt(url.searchParams.get('days') || '7');

        console.log(`Processing listing notifications: ${notificationType}`);
        
        let result;
        
        if (notificationType === 'digest') {
            // Send daily digest
            result = await listingNotificationService.sendDailyExpirationDigest();
        } else {
            // Send expiration warnings (default)
            result = await listingNotificationService.sendExpirationWarnings(daysAhead);
        }
        
        // Log results
        console.log('Listing notifications completed:', {
            type: notificationType,
            sent: result.sent,
            errors: result.errors.length,
            timestamp: new Date()
        });

        // Return success response with details
        return NextResponse.json({
            success: true,
            message: `Listing notifications (${notificationType}) processed successfully`,
            data: {
                type: notificationType,
                sent: result.sent,
                errorCount: result.errors.length,
                errors: result.errors.slice(0, 10) // Limit errors in response
            }
        });

    } catch (error) {
        console.error('Error processing listing notifications:', error);
        
        return NextResponse.json(
            {
                success: false,
                error: 'Failed to process listing notifications',
                message: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}