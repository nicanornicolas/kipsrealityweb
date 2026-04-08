// src/app/api/lease/[id]/escalate/route.ts
import { getCurrentUser } from "@rentflow/iam";
import { LeaseWorkflowError, leaseRenewalEscalationService } from "@rentflow/lease";
import { NextRequest, NextResponse } from "next/server";

async function internalApplyRentEscalation(req: NextRequest, leaseId: string) {
  try {
    const user = await getCurrentUser(req);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const { escalationRate, effectiveDate, escalationType } = body;
    const { escalation, updatedLease } =
      await leaseRenewalEscalationService.applyEscalation({
        leaseId,
        managerOrganizationUserId: user.organizationUserId,
        userId: user.id,
        escalationRate,
        effectiveDate,
        escalationType,
      });

    return NextResponse.json({ escalation, updatedLease, message: "Rent escalation applied" });
  } catch (error: unknown) {
    if (error instanceof LeaseWorkflowError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    console.error("Escalation error:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  return internalApplyRentEscalation(req, id);
}
