import { NextResponse } from 'next/server';
import { DocumentService } from '@rentflow/dss';
import { getCurrentUser, requireRole } from '@rentflow/iam';

const documentService = new DocumentService();

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const authError = await requireRole(['PROPERTY_MANAGER', 'SYSTEM_ADMIN'], req);
  if (authError) return authError;

  const currentUser = await getCurrentUser(req);
  if (!currentUser?.organizationId) {
    return NextResponse.json(
      { error: 'Forbidden - No organization context found.' },
      { status: 403 },
    );
  }

  try {
    const { id: documentId } = await params;
    const document = await documentService.getDocumentForViewing(
      documentId,
      currentUser.organizationId,
    );

    return NextResponse.json({ success: true, document });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Document not found';
    return NextResponse.json({ error: message }, { status: 404 });
  }
}
