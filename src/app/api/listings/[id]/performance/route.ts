import { NextRequest, NextResponse } from 'next/server';
import { listingReportingService } from '@/lib/listing-reporting-service';
import { getCurrentUser } from '@/lib/Getcurrentuser';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id: listingId } = await params;
        const user = await getCurrentUser(request);
        if (!user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        const performance = await listingReportingService.getListingPerformance(listingId);

        if (!performance) {
            return NextResponse.json(
                { error: 'Listing not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            data: performance
        });

    } catch (error) {
        console.error('Error fetching listing performance:', error);
        return NextResponse.json(
            { error: 'Failed to fetch listing performance' },
            { status: 500 }
        );
    }
}
