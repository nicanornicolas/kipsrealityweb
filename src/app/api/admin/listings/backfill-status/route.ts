import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/Getcurrentuser";
import { ListingStatus } from "@/lib/listing-types";

async function ensureStatusId(status: ListingStatus): Promise<string> {
  const existing = await prisma.listingStatus.findFirst({
    where: { name: { equals: status } }
  });
  if (existing?.id) return existing.id;

  const created = await prisma.listingStatus.create({
    data: { name: status }
  });
  return created.id;
}

export async function POST(req: Request) {
  const user = await getCurrentUser(req);
  if (!user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const allowedRoles = ["SUPER_ADMIN", "ADMIN", "PROPERTY_MANAGER"];
  if (!allowedRoles.includes(user.role)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const activeStatusId = await ensureStatusId(ListingStatus.ACTIVE);
  const comingSoonStatusId = await ensureStatusId(ListingStatus.COMING_SOON);

  const now = new Date();
  const orgFilter = user.organizationId ? { organizationId: user.organizationId } : {};

  const baseWhere = {
    ...orgFilter,
    statusId: null,
    OR: [{ unitId: { not: null } }, { propertyId: { not: null } }]
  };

  const comingSoonResult = await prisma.listing.updateMany({
    where: {
      ...baseWhere,
      availabilityDate: { gt: now }
    },
    data: { statusId: comingSoonStatusId }
  });

  const activeResult = await prisma.listing.updateMany({
    where: {
      ...baseWhere,
      OR: [
        { availabilityDate: null },
        { availabilityDate: { lte: now } }
      ]
    },
    data: { statusId: activeStatusId }
  });

  return NextResponse.json({
    success: true,
    updated: {
      active: activeResult.count,
      comingSoon: comingSoonResult.count
    }
  });
}
