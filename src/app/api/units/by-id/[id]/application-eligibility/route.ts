import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { ListingStatus } from "@/lib/listing-types";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!id) {
    return NextResponse.json(
      { isEligible: false, reason: "Missing unit id" },
      { status: 400 }
    );
  }

  const unit = await prisma.unit.findUnique({
    where: { id },
    include: {
      listing: {
        include: {
          status: true
        }
      },
      leases: {
        where: {
          leaseStatus: "ACTIVE"
        },
        select: { id: true }
      }
    }
  });

  if (!unit) {
    return NextResponse.json(
      { isEligible: false, reason: "Unit not found" },
      { status: 404 }
    );
  }

  if (!unit.listing) {
    return NextResponse.json(
      { isEligible: false, reason: "This unit is not listed on the marketplace." },
      { status: 200 }
    );
  }

  const statusName = unit.listing.status?.name as ListingStatus | undefined;
  const isVisible =
    statusName === ListingStatus.ACTIVE ||
    statusName === ListingStatus.COMING_SOON ||
    statusName === undefined;

  if (!isVisible) {
    return NextResponse.json(
      { isEligible: false, reason: "This unit is not currently available for applications." },
      { status: 200 }
    );
  }

  if (unit.isOccupied) {
    return NextResponse.json(
      { isEligible: false, reason: "This unit is currently occupied." },
      { status: 200 }
    );
  }

  if (unit.leases && unit.leases.length > 0) {
    return NextResponse.json(
      { isEligible: false, reason: "This unit has an active lease." },
      { status: 200 }
    );
  }

  return NextResponse.json(
    { isEligible: true },
    { status: 200 }
  );
}
