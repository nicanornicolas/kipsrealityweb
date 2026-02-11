import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/Getcurrentuser';
import { applicationControlService } from '@/lib/application-control-service';

export async function GET(request: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const url = new URL(request.url);
    const propertyId = url.searchParams.get('propertyId');

    // Generate comprehensive integrity report
    const report = await applicationControlService.getApplicationIntegrityReport(
      propertyId || undefined
    );

    return NextResponse.json(report);

  } catch (error) {
    console.error('Error generating application integrity report:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { action } = await request.json();

    if (action === 'fix-associations') {
      // Fix application-listing associations
      const result = await applicationControlService.validateAndFixApplicationAssociations();
      
      return NextResponse.json({
        action: 'fix-associations',
        ...result
      });
    }

    return NextResponse.json(
      { error: 'Invalid action. Supported actions: fix-associations' },
      { status: 400 }
    );

  } catch (error) {
    console.error('Error performing integrity action:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}