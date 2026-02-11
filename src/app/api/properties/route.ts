import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getCurrentUser } from '@/lib/Getcurrentuser'

export async function GET(req: NextRequest) {
  try {
    const user = await getCurrentUser(req);
    const url = new URL(req.url);
    const organizationId = user?.organizationId || url.searchParams.get('organizationId');

    if (!organizationId) {
      return NextResponse.json({ error: 'organizationId is required' }, { status: 400 });
    }

    const properties = await prisma.property.findMany({
      where: { organizationId },
      select: {
        id: true,
        name: true,
        address: true,
        city: true,
        apartmentComplexDetail: {
          select: {
            buildingName: true
          }
        },
        houseDetail: {
          select: {
            houseName: true
          }
        },
        units: {
          select: {
            id: true,
            unitNumber: true,
            unitName: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(properties);
  } catch (error) {
    console.error('Fetch properties error', error);
    return NextResponse.json({ error: 'Failed to fetch properties' }, { status: 500 });
  }
}
