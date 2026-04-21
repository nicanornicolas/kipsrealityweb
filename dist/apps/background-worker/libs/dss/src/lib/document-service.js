var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var document_service_exports = {};
__export(document_service_exports, {
  DocumentService: () => DocumentService,
  createDocument: () => createDocument,
  getDocumentForViewing: () => getDocumentForViewing,
  signDocument: () => signDocument
});
module.exports = __toCommonJS(document_service_exports);
var import_iam = require("@rentflow/iam");
var import_hashing = require("./hashing");
var import_workflow = require("./workflow");
var import_client = require("@prisma/client");
var import_storage_service = require("./storage-service");
class DocumentService {
  /**
   * Lists DSS documents for an organization.
   */
  async listDocuments(organizationId) {
    return import_iam.prisma.dssDocument.findMany({
      where: { organizationId },
      orderBy: { createdAt: "desc" },
      include: {
        participants: true
      }
    });
  }
  /**
   * Fetches a document and returns a temporary signed URL for browser viewing.
   */
  async getDocumentForViewing(documentId, organizationId) {
    const doc = await import_iam.prisma.dssDocument.findFirst({
      where: { id: documentId, organizationId },
      include: {
        fields: true,
        participants: {
          orderBy: { stepOrder: "asc" }
        },
        organization: {
          select: { name: true }
        }
      }
    });
    if (!doc) {
      throw new Error("Document not found");
    }
    const storageKey = doc.originalFileKey || doc.originalFileUrl;
    if (!storageKey) {
      throw new Error("Document file not found");
    }
    const secureUrl = await import_storage_service.StorageService.getSignedUrl(storageKey);
    return {
      ...doc,
      viewUrl: secureUrl
    };
  }
  /**
   * Adds a participant to a DRAFT document only.
   */
  async addParticipant(documentId, organizationId, data) {
    const document = await import_iam.prisma.dssDocument.findFirst({
      where: { id: documentId, organizationId }
    });
    if (!document) {
      throw new Error("Document not found");
    }
    if (document.status !== import_client.DssDocumentStatus.DRAFT) {
      throw new Error(
        `Cannot add participants to a document in ${document.status} state.`
      );
    }
    return import_iam.prisma.dssParticipant.create({
      data: {
        documentId,
        organizationId,
        email: data.email,
        fullName: data.fullName,
        role: data.role,
        stepOrder: data.stepOrder
      }
    });
  }
  /**
   * Removes a participant from a DRAFT document only.
   */
  async removeParticipant(participantId, documentId, organizationId) {
    const document = await import_iam.prisma.dssDocument.findFirst({
      where: { id: documentId, organizationId }
    });
    if (!document || document.status !== import_client.DssDocumentStatus.DRAFT) {
      throw new Error("Cannot remove participants from a non-DRAFT document.");
    }
    await import_iam.prisma.dssParticipant.delete({
      where: { id: participantId }
    });
    return { success: true };
  }
}
async function createDocument({
  title,
  organizationId,
  fileBuffer,
  participants,
  signingMode = import_client.DssSigningMode.SEQUENTIAL
}) {
  const sha256Hex = (0, import_hashing.computeDocumentHash)(fileBuffer);
  const { key } = await import_storage_service.StorageService.uploadPdf(fileBuffer, organizationId);
  const participantsWithOrder = participants.map((p, index) => ({
    ...p,
    stepOrder: index + 1
    // Simple 1-based sequence based on input array order
  }));
  const doc = await import_iam.prisma.dssDocument.create({
    data: {
      organizationId,
      title,
      originalPdfSha256Hex: sha256Hex,
      originalFileUrl: key,
      // Stored as S3 object key
      originalFileKey: key,
      signingMode,
      participants: {
        create: participantsWithOrder.map((p) => ({
          organizationId,
          email: p.email,
          role: p.role,
          fullName: p.name,
          stepOrder: p.stepOrder
        }))
      }
    },
    include: {
      participants: true
    }
  });
  return doc;
}
async function getDocumentForViewing(documentId) {
  const document = await import_iam.prisma.dssDocument.findUnique({
    where: { id: documentId },
    include: {
      participants: {
        orderBy: { stepOrder: "asc" }
      },
      organization: {
        select: { name: true }
      }
    }
  });
  if (!document) {
    return null;
  }
  const storageKey = document.originalFileKey || document.originalFileUrl || void 0;
  const originalFileUrl = storageKey ? await import_storage_service.StorageService.getSignedUrl(storageKey) : null;
  return {
    document,
    originalFileUrl
  };
}
async function signDocument(documentId, userEmail, signatureData, onBehalfOf) {
  const workflowStatus = await (0, import_workflow.getNextSigner)(documentId);
  const doc = await import_iam.prisma.dssDocument.findUnique({
    where: { id: documentId },
    include: { participants: true }
  });
  if (!doc) throw new Error("Document not found");
  const participant = doc.participants.find(
    (p) => p.email === userEmail
  );
  if (!participant)
    throw new Error("User is not a participant of this document");
  if (doc.signingMode === import_client.DssSigningMode.SEQUENTIAL) {
    if (workflowStatus.nextStep !== participant.stepOrder) {
      throw new Error("It is not your turn to sign this document.");
    }
  }
  if (participant.hasSigned) {
    throw new Error("You have already signed this document.");
  }
  const isProxy = participant.role === "CUSTODIAN";
  if (isProxy && !onBehalfOf) {
    throw new Error(
      "Custodian must specify who they are signing on behalf of (onBehalfOf)."
    );
  }
  if (!isProxy && onBehalfOf) {
    throw new Error("Only custodians can sign on behalf of others.");
  }
  const signatureProof = (0, import_hashing.computeDocumentHash)(
    Buffer.from(signatureData + doc.originalPdfSha256Hex)
  );
  const result = await import_iam.prisma.$transaction(async (tx) => {
    await tx.dssParticipant.update({
      where: { id: participant.id },
      data: {
        hasSigned: true,
        signedAt: /* @__PURE__ */ new Date()
      }
    });
    await tx.dssSignature.create({
      data: {
        documentId,
        participantId: participant.id,
        signatureHash: signatureProof,
        isProxy,
        onBehalfOf
      }
    });
    const remainingSigners = await tx.dssParticipant.count({
      where: {
        documentId,
        hasSigned: false
      }
    });
    if (remainingSigners === 0) {
      await tx.dssDocument.update({
        where: { id: documentId },
        data: {
          status: import_client.DssDocumentStatus.COMPLETED,
          completedAt: /* @__PURE__ */ new Date(),
          // In a real PDF engine, we would generate the final PDF bytes here
          // and hash them. For now, we reuse original hash as placeholder.
          finalPdfSha256Hex: doc.originalPdfSha256Hex
        }
      });
      return { status: "COMPLETED" };
    } else {
      if (doc.status === import_client.DssDocumentStatus.DRAFT || doc.status === import_client.DssDocumentStatus.SENT) {
        await tx.dssDocument.update({
          where: { id: documentId },
          data: { status: import_client.DssDocumentStatus.IN_SIGNING }
        });
      }
      return { status: "IN_PROGRESS" };
    }
  });
  return { success: true, result };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DocumentService,
  createDocument,
  getDocumentForViewing,
  signDocument
});
