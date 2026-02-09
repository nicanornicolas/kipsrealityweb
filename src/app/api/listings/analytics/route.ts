import { NextRequest, NextResponse } from 'next/server';
import { listingReportingService } from '@/lib/listing-reporting-service';
import { getCurrentUser } from '@/lib/Getcurrentuser';

export async function GET(request: NextRequest) {
    try {
        const user = await getCurrentUser(request);
        if (!user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { searchParams } = new URL(request.url);
        const startDateRaw = searchParams.get('startDate');
        const endDateRaw = searchParams.get('endDate');
        const startDate = startDateRaw ? new Date(startDateRaw) : undefined;
        const endDate = endDateRaw ? new Date(endDateRaw) : undefined;

        if (startDate && Number.isNaN(startDate.getTime())) {
            return NextResponse.json({ error: 'Invalid startDate' }, { status: 400 });
        }
        if (endDate && Number.isNaN(endDate.getTime())) {
            return NextResponse.json({ error: 'Invalid endDate' }, { status: 400 });
        }
        
        // Parse filters from query parameters
        const filters = {
            propertyId: searchParams.get('propertyId') || undefined,
            startDate,
            endDate,
            minDaysListed: searchParams.get('minDaysListed') ? parseInt(searchParams.get('minDaysListed')!) : undefined,
            maxDaysListed: searchParams.get('maxDaysListed') ? parseInt(searchParams.get('maxDaysListed')!) : undefined,
        };

        const analytics = await listingReportingService.getListingAnalytics(filters);

        const jsonSafe = JSON.parse(
            JSON.stringify(analytics, (_, v) => (typeof v === 'bigint' ? Number(v) : v))
        );

        return NextResponse.json({
            success: true,
            data: jsonSafe
        });

    } catch (error) {
        console.error('Error fetching listing analytics:', error);
        return NextResponse.json(
            { error: 'Failed to fetch listing analytics' },
            { status: 500 }
        );
    }
}
