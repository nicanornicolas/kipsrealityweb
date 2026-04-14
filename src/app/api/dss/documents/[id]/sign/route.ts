import { NextResponse } from 'next/server';
import { getCurrentUser } from "@rentflow/iam";
import { WorkflowService } from "@rentflow/dss";

const workflowService = new WorkflowService();

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // 1. Authenticate the User
    const user = await getCurrentUser(req);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id: documentId } = await params;
    const body = await req.json();
    
    // Optional: Grab IP for audit trail
    const ipAddress = req.headers.get('x-forwarded-for') || 'unknown';

    // 2. Execute the Signature Engine
    const result = await workflowService.signDocument({
      documentId,
      userEmail: user.email, // Identity is bound to their authenticated email!
      signatureHash: body.signatureHash || 'simulated-signature-hash-12345',
      ipAddress
    });

    return NextResponse.json({ success: true, ...result });
    
  } catch (error: any) {
    console.error('[DSS Sign Error]', error.message);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
