import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@rentflow/iam";
import {
  LeaseWorkflowAction,
  LeaseWorkflowActionError,
  leaseWorkflowService,
} from "@rentflow/lease";

// POST: Approve lease and transition to APPROVED/ACTIVE/TERMINATED
export async function POST(req: NextRequest) {
  try {
    const user = await getCurrentUser(req);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { leaseId, action } = await req.json();

    if (!leaseId || !action) {
      return NextResponse.json(
        { error: "Missing leaseId or action" },
        { status: 400 }
      );
    }

    const updatedLease = await leaseWorkflowService.executeAction({
      leaseId,
      action: action as LeaseWorkflowAction,
      organizationUserId: user.organizationUserId,
      userId: user.id,
    });

    return NextResponse.json(updatedLease);
  } catch (error: any) {
    if (error instanceof LeaseWorkflowActionError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    console.error("Workflow error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

