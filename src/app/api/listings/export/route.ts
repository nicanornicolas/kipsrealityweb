import { NextRequest, NextResponse } from 'next/server';
import { listingReportingService } from '@/lib/listing-reporting-service';
import { getCurrentUser } from '@/lib/Getcurrentuser';

export async function POST(request: NextRequest) {
    try {
        const user = await getCurrentUser(request);
        if (!user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await request.json();
        const { filters, options } = body;

        // Validate export format
        const validFormats = ['CSV', 'JSON', 'PDF'];
        if (options?.format && !validFormats.includes(options.format)) {
            return NextResponse.json(
                { error: 'Invalid export format. Supported formats: CSV, JSON, PDF' },
                { status: 400 }
            );
        }

        const exportData = await listingReportingService.exportListingData(filters, options);

        // Set appropriate headers based on format
        const format = options?.format || 'JSON';
        let contentType = 'application/json';
        let filename = `listing-report-${new Date().toISOString().split('T')[0]}`;

        switch (format) {
            case 'CSV':
                contentType = 'text/csv';
                filename += '.csv';
                break;
            case 'PDF':
                contentType = 'application/pdf';
                filename += '.pdf';
                break;
            case 'JSON':
            default:
                contentType = 'application/json';
                filename += '.json';
                break;
        }

        const response = new NextResponse(
            typeof exportData === 'string' ? exportData : new Uint8Array(exportData)
        );
        response.headers.set('Content-Type', contentType);
        response.headers.set('Content-Disposition', `attachment; filename="${filename}"`);

        return response;

    } catch (error) {
        console.error('Error exporting listing data:', error);
        return NextResponse.json(
            { error: 'Failed to export listing data' },
            { status: 500 }
        );
    }
}
