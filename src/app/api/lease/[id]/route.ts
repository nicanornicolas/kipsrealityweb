//app/api/lease/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@rentflow/iam";
import { LeaseDetailsError, leaseDetailsService } from "@rentflow/lease";

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const data = await req.json();

    const lease = await leaseDetailsService.updateLease(id, data);

    return NextResponse.json(lease);
  } catch (error: unknown) {
    console.error("Lease update error:", error);
    const err = error as { code?: string; message?: string };

    if (err.code === "P2025") {
      return NextResponse.json({ error: "Lease not found" }, { status: 404 });
    }

    return NextResponse.json(
      { error: err.message ?? "Failed to update lease" },
      { status: 500 }
    );
  }
}

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");

    let user = null;

    try {
      user = await getCurrentUser(req);
    } catch (error) {
      console.log("User not authenticated, checking for invite token");
    }

    const result = await leaseDetailsService.getLeaseDetails({
      leaseId: id,
      token,
      user,
    });

    return NextResponse.json(result);
  } catch (error) {
    if (error instanceof LeaseDetailsError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    console.error("Error fetching lease:", error);
    return NextResponse.json({ error: "Failed to fetch lease" }, { status: 500 });
  }
}
