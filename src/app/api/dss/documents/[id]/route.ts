import { NextResponse } from 'next/server';
import { verifyAccessToken } from '@rentflow/iam'; // Adjust path if needed
import { cookies } from 'next/headers';
import { canUserSignNow, getDocumentForViewing } from '@rentflow/dss'; // The logic we built in Phase 2

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }, // Next.js 15 Params are Promises
) {
  try {
    // 1. Get Document ID
    const { id: documentId } = await params;

    // 2. Authentication Check
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    let user;
    try {
      // Decode token to get User ID and Email
      user = verifyAccessToken(token);
    } catch {
      return NextResponse.json({ error: 'Invalid Token' }, { status: 401 });
    }

    // 3. Fetch Document & Generate Signed URL
    const viewingPayload = await getDocumentForViewing(documentId);
    const document = viewingPayload?.document;

    if (!document) {
      return NextResponse.json(
        { error: 'Document not found' },
        { status: 404 },
      );
    }

    // 4. Access Control (Security Layer)
    // User must be a Participant OR the Org Admin who created it
    const isParticipant = document.participants.some(
      (p) => p.email === user.email,
    );
    const isOwner = document.organizationId === user.organizationId; // Assuming token has orgId

    if (!isParticipant && !isOwner) {
      return NextResponse.json(
        { error: 'Forbidden: You are not a party to this document.' },
        { status: 403 },
      );
    }

    // 5. Workflow Logic (The "Brain")
    // Ask workflow.ts: "Is it this specific user's turn right now?"
    let canSign = false;

    // Only check workflow if they are a participant (Admins can view but maybe not sign unless added)
    if (isParticipant) {
      canSign = await canUserSignNow(documentId, user.email);
    }

    // 6. Return Data
    return NextResponse.json({
      success: true,
      document: {
        id: document.id,
        title: document.title,
        status: document.status,
        originalFileUrl: viewingPayload?.originalFileUrl ?? null, // Signed URL for PDF Viewer
        currentStep: document.currentStep,
        participants: document.participants.map((p) => ({
          name: p.fullName,
          email: p.email,
          role: p.role,
          status: p.hasSigned ? 'SIGNED' : 'PENDING',
          signedAt: p.signedAt,
        })),
        fields:
          (document as any).fields?.map((f: any) => ({
            id: f.id,
            type: f.type,
            pageNumber: f.pageNumber,
            x: f.x,
            y: f.y,
            width: f.width,
            height: f.height,
            participantId: f.participantId,
            value: f.value,
          })) ?? [],
        finalFileUrl: (document as any).finalFileUrl ?? null,
      },
      canSign: canSign, // Frontend uses this to Enable/Disable the "Sign" button
    });
  } catch (error: unknown) {
    console.error('[DSS GET Doc Error]', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
