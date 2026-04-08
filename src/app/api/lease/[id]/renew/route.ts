// src/app/api/lease/[id]/renew/route.ts
import { getCurrentUser } from "@rentflow/iam";
import { LeaseWorkflowError, leaseRenewalEscalationService } from "@rentflow/lease";
import { NextRequest, NextResponse } from "next/server";

async function internalRenewLease(req: NextRequest, leaseId: string) {
  try {
    const user = await getCurrentUser(req);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const { newEndDate, newRentAmount, renewalType = "MANUAL", negotiationNotes } = body;
    const renewal = await leaseRenewalEscalationService.renewLease({
      leaseId,
      managerOrganizationUserId: user.organizationUserId,
      userId: user.id,
      newEndDate,
      newRentAmount,
      renewalType,
      negotiationNotes,
    });

    return NextResponse.json({ renewal, message: "Renewal initiated" });
  } catch (error: unknown) {
    if (error instanceof LeaseWorkflowError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    console.error("Renewal error:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  return internalRenewLease(req, id);
}
