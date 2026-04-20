import { NextResponse } from "next/server";
import { getCurrentUser } from '@rentflow/iam';
import { requireRole } from '@rentflow/iam';
import { WorkflowService } from "@rentflow/dss";

const workflowService = new WorkflowService();

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const authError = await requireRole(["PROPERTY_MANAGER", "SYSTEM_ADMIN"], req);
  if (authError) return authError;

  const currentUser = await getCurrentUser(req);
  if (!currentUser?.organizationId) {
    return NextResponse.json(
      { error: "Forbidden - No organization context found." },
      { status: 403 }
    );
  }

  try {
    const { id: documentId } = await params;
    const document = await workflowService.sendDocument(documentId, currentUser.organizationId);
    return NextResponse.json({ success: true, document });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to send document";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
