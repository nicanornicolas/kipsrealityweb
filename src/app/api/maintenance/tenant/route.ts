import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@rentflow/iam';
import { getCurrentUser } from '@rentflow/iam';
import { Priority, RequestCategory } from '@prisma/client';
import { z } from 'zod';

const createMaintenanceSchema = z.object({
  title: z.string().min(5).max(100),
  description: z.string().min(10),
  priority: z.enum(['LOW', 'NORMAL', 'HIGH', 'URGENT', 'EMERGENCY']),
  category: z.enum([
    'PLUMBING',
    'ELECTRICAL',
    'APPLIANCE',
    'HVAC',
    'STRUCTURAL',
    'PEST_CONTROL',
    'OTHER',
  ]),
  imageUrl: z.string().url().optional(),
});

const normalizeStatus = (status: string) => {
  if (status === 'ON_HOLD' || status === 'REJECTED') return 'CLOSED';
  return status;
};

export async function GET(req: NextRequest) {
  try {
    const user = await getCurrentUser(req);

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (user.role !== 'TENANT') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const activeLease = await prisma.lease.findFirst({
      where: {
        tenantId: user.id,
        leaseStatus: 'ACTIVE',
      },
      include: {
        property: true,
      },
    });

    if (!activeLease || !activeLease.property.organizationId) {
      return NextResponse.json({ requests: [] });
    }

    const orgUser = await prisma.organizationUser.findFirst({
      where: {
        userId: user.id,
        organizationId: activeLease.property.organizationId,
      },
    });

    if (!orgUser) {
      return NextResponse.json({ requests: [] });
    }

    const requests = await prisma.maintenanceRequest.findMany({
      where: {
        organizationId: activeLease.property.organizationId,
        requestedById: orgUser.id,
      },
      orderBy: { createdAt: 'desc' },
      include: {
        vendor: {
          select: {
            name: true,
            phone: true,
          },
        },
      },
    });

    return NextResponse.json({
      requests: requests.map((request) => ({
        id: request.id,
        title: request.title,
        description: request.description,
        status: normalizeStatus(request.status),
        priority: request.priority,
        category: request.category,
        createdAt: request.createdAt,
        vendor: request.vendor
          ? {
              name: request.vendor.name,
              phone: request.vendor.phone ?? undefined,
            }
          : undefined,
      })),
    });
  } catch (error) {
    console.error('Tenant maintenance requests error:', error);
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'Failed to fetch maintenance requests';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const user = await getCurrentUser(req);

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (user.role !== 'TENANT') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const body = await req.json();
    const parsed = createMaintenanceSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error:
            parsed.error.issues[0]?.message ?? 'Invalid maintenance request payload',
        },
        { status: 400 },
      );
    }

    const activeLease = await prisma.lease.findFirst({
      where: {
        tenantId: user.id,
        leaseStatus: 'ACTIVE',
      },
      include: {
        property: true,
      },
    });

    if (!activeLease || !activeLease.property.organizationId) {
      return NextResponse.json({ error: 'No active lease found' }, { status: 404 });
    }

    const orgUser = await prisma.organizationUser.findFirst({
      where: {
        userId: user.id,
        organizationId: activeLease.property.organizationId,
      },
    });

    if (!orgUser) {
      return NextResponse.json(
        { error: 'User not found in organization' },
        { status: 403 },
      );
    }

    const payload = parsed.data;

    const persistedPriority: Priority =
      payload.priority === 'EMERGENCY' ? Priority.URGENT : (payload.priority as Priority);

    const newRequest = await prisma.maintenanceRequest.create({
      data: {
        organizationId: activeLease.property.organizationId,
        propertyId: activeLease.propertyId,
        unitId: activeLease.unitId,
        requestedById: orgUser.id,
        title: payload.title,
        description: payload.imageUrl
          ? `${payload.description}\n\nImage:\n- ${payload.imageUrl}`
          : payload.description,
        priority: persistedPriority,
        category: payload.category as RequestCategory,
        status: 'OPEN',
      },
      include: {
        vendor: {
          select: {
            name: true,
            phone: true,
          },
        },
      },
    });

    return NextResponse.json(
      {
        id: newRequest.id,
        title: newRequest.title,
        description: newRequest.description,
        status: normalizeStatus(newRequest.status),
        priority: payload.priority,
        category: newRequest.category,
        createdAt: newRequest.createdAt,
        vendor: newRequest.vendor
          ? {
              name: newRequest.vendor.name,
              phone: newRequest.vendor.phone ?? undefined,
            }
          : undefined,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error('Create maintenance request error:', error);
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'Failed to create maintenance request';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
