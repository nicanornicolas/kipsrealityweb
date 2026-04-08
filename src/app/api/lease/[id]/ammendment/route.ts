import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@rentflow/iam";
import { LeaseAmendmentError, leaseAmendmentService } from "@rentflow/lease";

// POST: Create a new amendment
export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const user = await getCurrentUser(req);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id: leaseId } = await params;
    const body = await req.json();
    const { amendmentType, effectiveDate, description, changes, requiresSignature = true } = body;

    const amendment = await leaseAmendmentService.createAmendment({
      leaseId,
      amendmentType,
      effectiveDate,
      description,
      changes,
      requiresSignature,
      userId: user.id,
      organizationUserId: user.organizationUserId,
    });

    return NextResponse.json(amendment, { status: 201 });
  } catch (error: any) {
    if (error instanceof LeaseAmendmentError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    console.error("Amendment creation error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// GET: Fetch all amendments for a lease
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id: leaseId } = await params;

    const user = await getCurrentUser(req);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const amendments = await leaseAmendmentService.listAmendments(leaseId);

    return NextResponse.json(amendments);
  } catch (error: any) {
    if (error instanceof LeaseAmendmentError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    console.error("Fetch amendments error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
