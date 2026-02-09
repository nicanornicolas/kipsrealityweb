import { NextRequest, NextResponse } from 'next/server';
import { listingReportingService } from '@/lib/listing-reporting-service';
import { getCurrentUser } from '@/lib/Getcurrentuser';

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const user = await getCurrentUser(request);
        if (!user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const propertyId = params.id;
        const performance = await listingReportingService.getPropertyPerformance(propertyId);

        if (!performance) {
            return NextResponse.json(
                { error: 'Property not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            data: performance
        });

    } catch (error) {
        console.error('Error fetching property performance:', error);
        return NextResponse.json(
            { error: 'Failed to fetch property performance' },
            { status: 500 }
        );
    }
}
