import { NextResponse } from 'next/server';
import { prisma } from '@rentflow/iam';
import { getCurrentUser } from '@rentflow/iam';

export async function GET(req: Request) {
  try {
    const user = await getCurrentUser(req);

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (user.role !== 'TENANT') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const lease = await prisma.lease.findFirst({
      where: {
        tenantId: user.id,
        leaseStatus: 'ACTIVE',
      },
      include: {
        property: {
          select: {
            address: true,
            city: true,
          },
        },
        unit: {
          select: {
            unitNumber: true,
          },
        },
      },
      orderBy: {
        endDate: 'asc',
      },
    });

    if (!lease) {
      return NextResponse.json({ error: 'No active lease found' }, { status: 404 });
    }

    return NextResponse.json({
      id: lease.id,
      startDate: lease.startDate,
      endDate: lease.endDate,
      rentAmount: Number(lease.rentAmount || 0),
      status: lease.leaseStatus,
      property: {
        address: lease.property?.address || '',
        city: lease.property?.city || '',
      },
      unit: lease.unit
        ? {
            unitNumber: lease.unit.unitNumber || '',
          }
        : undefined,
    });
  } catch (error) {
    console.error('Failed to fetch tenant active lease:', error);
    return NextResponse.json({ error: 'Failed to fetch active lease' }, { status: 500 });
  }
}
