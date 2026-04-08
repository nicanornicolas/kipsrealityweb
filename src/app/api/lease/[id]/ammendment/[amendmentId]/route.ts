// src/app/api/lease/[id]/ammendment/[ammendmentId]/route.ts
import { getCurrentUser } from "@rentflow/iam";
import { LeaseAmendmentAction, LeaseAmendmentError, leaseAmendmentService } from "@rentflow/lease";
import { NextRequest, NextResponse } from "next/server";

// PATCH: Update amendment (approve/reject/execute)
export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string; amendmentId: string }> }
) {
  try {
    const user = await getCurrentUser(req);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id: leaseId, amendmentId } = await context.params;
    const body = await req.json();
    const { action, notes } = body;
    const updated = await leaseAmendmentService.processAmendmentAction({
      leaseId,
      amendmentId,
      action: action as LeaseAmendmentAction,
      notes,
      userId: user.id,
    });

    return NextResponse.json(updated);
  } catch (error: any) {
    if (error instanceof LeaseAmendmentError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    console.error("Amendment update error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string; amendmentId: string }> }
) {
  try {
    const user = await getCurrentUser(req);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id: leaseId, amendmentId } = await context.params;
    await leaseAmendmentService.deleteAmendment({
      leaseId,
      amendmentId,
      userId: user.id,
    });

    return NextResponse.json({ message: "Amendment deleted" });
  } catch (error: any) {
    if (error instanceof LeaseAmendmentError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    console.error("Amendment deletion error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
