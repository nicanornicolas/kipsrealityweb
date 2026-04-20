//app/api/lease/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from '@rentflow/iam';
import { LeaseManagementError, leaseManagementService } from "@rentflow/lease";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const lease = await leaseManagementService.createLease(data);

    return NextResponse.json(lease, { status: 201 });
  } catch (error: any) {
    if (error instanceof LeaseManagementError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    console.error("Lease creation error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const user = await getCurrentUser(req);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const url = new URL(req.url);
    const propertyId = url.searchParams.get("propertyId");

    const leasesWithFinancials = await leaseManagementService.listLeases({
      userId: user.id,
      propertyId,
    });

    return NextResponse.json(leasesWithFinancials);
  } catch (error) {
    if (error instanceof LeaseManagementError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    console.error("Error fetching leases:", error);
    return NextResponse.json(
      { error: "Failed to fetch leases" },
      { status: 500 }
    );
  }
}

