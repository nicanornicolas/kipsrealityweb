import { NextResponse } from "next/server";
import { DssParticipantRole } from "@prisma/client";
import { DocumentService } from "@rentflow/dss";
import { getCurrentUser } from '@rentflow/iam';
import { requireRole } from '@rentflow/iam';

const documentService = new DocumentService();

interface ParticipantPayload {
  email: string;
  fullName: string;
  role: string;
  stepOrder: number;
}

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
    const body = (await req.json()) as ParticipantPayload;

    if (!body.email || !body.fullName || !body.role || !Number.isInteger(body.stepOrder)) {
      return NextResponse.json(
        { error: "email, fullName, role, and integer stepOrder are required" },
        { status: 400 }
      );
    }

    if (!(body.role in DssParticipantRole)) {
      return NextResponse.json({ error: "Invalid participant role" }, { status: 400 });
    }

    const participant = await documentService.addParticipant(documentId, currentUser.organizationId, {
      email: body.email,
      fullName: body.fullName,
      role: body.role as DssParticipantRole,
      stepOrder: body.stepOrder,
    });

    return NextResponse.json({ success: true, participant });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to add participant";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
