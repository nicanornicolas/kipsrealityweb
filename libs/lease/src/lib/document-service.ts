import { prisma } from "@rentflow/iam";
import { LeaseDocumentType, Prisma } from "@prisma/client";
import { randomUUID } from "crypto";

export class LeaseDocumentError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export class LeaseDocumentService {
  async uploadDocument(params: {
    leaseId: string;
    file: File | null;
    documentType: string | null;
    description: string | null;
    userId: string;
  }) {
    const { leaseId, file, documentType, description, userId } = params;
    if (!file || !documentType) {
      throw new LeaseDocumentError("Missing file or documentType", 400);
    }

    const parsedType = LeaseDocumentType[
      documentType as keyof typeof LeaseDocumentType
    ];

    const lease = await prisma.lease.findUnique({
      where: { id: leaseId },
      include: { property: true },
    });

    if (!lease) {
      throw new LeaseDocumentError("Lease not found", 404);
    }

    const fileUrl = `https://storage.example.com/leases/${leaseId}/${file.name}`;

    const document = await prisma.leaseDocument.create({
      data: {
        id: randomUUID(),
        leaseId,
        documentType: parsedType,
        fileName: file.name,
        fileUrl,
        fileSize: file.size,
        mimeType: file.type,
        uploadedBy: userId,
        description: description || undefined,
      } as Prisma.LeaseDocumentUncheckedCreateInput,
    });

    await prisma.lease.update({
      where: { id: leaseId },
      data: {
        documentVersion: { increment: 1 },
        lastDocumentUpdate: new Date(),
      },
    });

    await prisma.leaseAuditLog.create({
      data: {
        id: randomUUID(),
        leaseId,
        action: "DOCUMENT_UPLOADED",
        performedBy: userId,
        changes: document as Prisma.InputJsonValue,
      } as Prisma.LeaseAuditLogUncheckedCreateInput,
    });

    return document;
  }

  async listDocuments(leaseId: string) {
    return prisma.leaseDocument.findMany({
      where: { leaseId },
      orderBy: { uploadedAt: "desc" },
    });
  }
}

export const leaseDocumentService = new LeaseDocumentService();
