import { NextResponse } from 'next/server';
import { prisma } from '@rentflow/iam';
import { getCurrentUser } from '@rentflow/iam';
import { StorageService } from '@rentflow/dss';
import { DssDocumentStatus } from '@prisma/client';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const currentUser = await getCurrentUser(req);
  if (!currentUser) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id: documentId } = await params;

    const document = await prisma.dssDocument.findFirst({
      where: { id: documentId },
      include: {
        participants: true,
      },
    });

    if (!document) {
      return NextResponse.json(
        { error: 'Document not found' },
        { status: 404 },
      );
    }

    const isParticipant = document.participants.some(
      (p) => p.email === currentUser.email,
    );
    const isOwner = document.organizationId === currentUser.organizationId;

    if (!isParticipant && !isOwner) {
      return NextResponse.json(
        { error: 'Forbidden: You are not a party to this document.' },
        { status: 403 },
      );
    }

    if (document.status !== DssDocumentStatus.COMPLETED) {
      return NextResponse.json(
        {
          error:
            'Document is not yet completed. Download is only available for completed documents.',
        },
        { status: 400 },
      );
    }

    if (!document.finalFileUrl) {
      return NextResponse.json(
        {
          error:
            'Final document is not yet available. Please wait for the signing process to complete.',
        },
        { status: 400 },
      );
    }

    const filename = `${document.title.replace(/[^a-zA-Z0-9_-]/g, '_')}_signed.pdf`;
    const downloadUrl = await StorageService.getDownloadUrl(
      document.finalFileUrl,
      filename,
    );

    return NextResponse.json({ success: true, downloadUrl });
  } catch (error) {
    console.error('[DSS Download Error]', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
