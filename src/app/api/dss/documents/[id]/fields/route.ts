import { NextResponse } from 'next/server';
import { prisma } from '@rentflow/iam';
import { getCurrentUser } from '@rentflow/iam';
import { requireRole } from '@rentflow/iam';

interface FieldPayload {
  id?: string;
  participantId: string;
  type: 'SIGNATURE' | 'DATE' | 'INITIALS' | 'TEXT';
  pageNumber: number;
  x: number;
  y: number;
  width: number;
  height: number;
  value?: string;
}

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const authError = await requireRole(
    ['PROPERTY_MANAGER', 'SYSTEM_ADMIN'],
    req,
  );
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

    const document = await prisma.dssDocument.findFirst({
      where: {
        id: documentId,
        organizationId: currentUser.organizationId,
      },
    });

    if (!document) {
      return NextResponse.json(
        { error: 'Document not found' },
        { status: 404 },
      );
    }

    const fields = await prisma.dssField.findMany({
      where: { documentId },
      include: {
        participant: true,
      },
      orderBy: [{ pageNumber: 'asc' }, { y: 'desc' }],
    });

    return NextResponse.json({ success: true, fields });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Failed to fetch fields';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const authError = await requireRole(
    ['PROPERTY_MANAGER', 'SYSTEM_ADMIN'],
    req,
  );
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
    const body = (await req.json()) as FieldPayload | FieldPayload[];

    const document = await prisma.dssDocument.findFirst({
      where: {
        id: documentId,
        organizationId: currentUser.organizationId,
      },
    });

    if (!document) {
      return NextResponse.json(
        { error: 'Document not found' },
        { status: 404 },
      );
    }

    const fieldsArray = Array.isArray(body) ? body : [body];

    for (const field of fieldsArray) {
      if (
        !field.participantId ||
        !field.type ||
        !field.pageNumber ||
        field.x === undefined ||
        field.y === undefined ||
        field.width === undefined ||
        field.height === undefined
      ) {
        return NextResponse.json(
          {
            error:
              'participantId, type, pageNumber, x, y, width, height are required',
          },
          { status: 400 },
        );
      }

      const validTypes = ['SIGNATURE', 'DATE', 'INITIALS', 'TEXT'];
      if (!validTypes.includes(field.type)) {
        return NextResponse.json(
          { error: 'Invalid field type' },
          { status: 400 },
        );
      }

      const participant = await prisma.dssParticipant.findFirst({
        where: {
          id: field.participantId,
          documentId,
        },
      });

      if (!participant) {
        return NextResponse.json(
          { error: `Participant ${field.participantId} not found on document` },
          { status: 400 },
        );
      }
    }

    const upsertedFields = await prisma.$transaction(
      fieldsArray.map((field) =>
        field.id
          ? prisma.dssField.update({
              where: { id: field.id },
              data: {
                participantId: field.participantId,
                type: field.type,
                pageNumber: field.pageNumber,
                x: field.x,
                y: field.y,
                width: field.width,
                height: field.height,
                value: field.value,
              },
            })
          : prisma.dssField.create({
              data: {
                documentId,
                participantId: field.participantId,
                type: field.type,
                pageNumber: field.pageNumber,
                x: field.x,
                y: field.y,
                width: field.width,
                height: field.height,
                value: field.value,
              },
            }),
      ),
    );

    return NextResponse.json({ success: true, fields: upsertedFields });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Failed to save fields';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const authError = await requireRole(
    ['PROPERTY_MANAGER', 'SYSTEM_ADMIN'],
    req,
  );
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
    const { searchParams } = new URL(req.url);
    const fieldId = searchParams.get('fieldId');

    if (!fieldId) {
      return NextResponse.json(
        { error: 'fieldId is required' },
        { status: 400 },
      );
    }

    const document = await prisma.dssDocument.findFirst({
      where: {
        id: documentId,
        organizationId: currentUser.organizationId,
      },
    });

    if (!document) {
      return NextResponse.json(
        { error: 'Document not found' },
        { status: 404 },
      );
    }

    await prisma.dssField.delete({
      where: { id: fieldId },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Failed to delete field';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
