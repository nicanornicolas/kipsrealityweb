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

    // Check if user has admin or property manager role
    const userRole = await prisma.organizationUser.findFirst({
      where: {
        userId: user.id,
        role: {
          in: ['SYSTEM_ADMIN', 'PROPERTY_MANAGER']
        }
      }
    });

    if (!userRole) {
      return NextResponse.json(
        { error: 'Insufficient permissions. Only admins and property managers can cleanup orphaned applications.' },
        { status: 403 }
      );
    }

    const { dryRun = false } = await request.json();

    if (dryRun) {
      // Perform a dry run to show what would be cleaned up
      const orphanedApplications = await prisma.tenantapplication.findMany({
        where: {
          unit: {
            listing: null
          },
          status: 'PENDING',
          property: {
            manager: {
              userId: user.id
            }
          }
        },
        include: {
          unit: {
            select: {
              id: true,
              unitNumber: true
            }
          },
          property: {
            select: {
              id: true,
              name: true
            }
          }
        }
      });

      return NextResponse.json({
        dryRun: true,
        wouldCleanup: orphanedApplications.length,
        applications: orphanedApplications.map(app => ({
          id: app.id,
          fullName: app.fullName,
          email: app.email,
          unitId: app.unitId,
          unitNumber: app.unit?.unitNumber,
          propertyName: app.property?.name,
          createdAt: app.createdAt
        }))
      });
    }

    // Perform actual cleanup
    const result = await applicationControlService.cleanupOrphanedApplications();

    return NextResponse.json({
      dryRun: false,
      cleaned: result.cleaned,
      errors: result.errors,
      success: result.errors.length === 0
    });

  } catch (error) {
    console.error('Error cleaning up orphaned applications:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
