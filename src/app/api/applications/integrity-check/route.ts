import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/Getcurrentuser';
import { applicationControlService } from '@/lib/application-control-service';
import { prisma } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { applicationIds } = await request.json();

    if (!applicationIds || !Array.isArray(applicationIds)) {
      return NextResponse.json(
        { error: 'Application IDs array is required' },
        { status: 400 }
      );
    }

    const results = [];

    for (const applicationId of applicationIds) {
      const integrity = await applicationControlService.validateApplicationDataIntegrity(applicationId);
      results.push({
        applicationId,
        ...integrity
      });
    }

    return NextResponse.json({
      results,
      summary: {
        total: results.length,
        valid: results.filter(r => r.isValid).length,
        invalid: results.filter(r => !r.isValid).length
      }
    });

  } catch (error) {
    console.error('Error checking application integrity:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

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

    // Get all applications for the user's properties
    const whereClause: any = {
      property: {
        manager: {
          userId: user.id
        }
      }
    };

    if (propertyId) {
      whereClause.propertyId = propertyId;
    }

    const applications = await prisma.tenantapplication.findMany({
      where: whereClause,
      select: {
        id: true,
        status: true,
        unitId: true,
        propertyId: true,
        createdAt: true
      }
    });

    // Check integrity for all applications
    const integrityResults = await Promise.all(
      applications.map(async (app) => {
        const integrity = await applicationControlService.validateApplicationDataIntegrity(app.id);
        return {
          applicationId: app.id,
          status: app.status,
          unitId: app.unitId,
          propertyId: app.propertyId,
          createdAt: app.createdAt,
          ...integrity
        };
      })
    );

    const invalidApplications = integrityResults.filter(r => !r.isValid);

    return NextResponse.json({
      applications: integrityResults,
      summary: {
        total: integrityResults.length,
        valid: integrityResults.filter(r => r.isValid).length,
        invalid: invalidApplications.length
      },
      invalidApplications
    });

  } catch (error) {
    console.error('Error getting application integrity status:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}