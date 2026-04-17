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
var workflow_ervice_exports = {};
__export(workflow_ervice_exports, {
  WorkflowService: () => WorkflowService
});
module.exports = __toCommonJS(workflow_ervice_exports);
var import_iam = require("@rentflow/iam");
var import_client = require("@prisma/client");
var import_hashing = require("./hashing");
class WorkflowService {
  /**
   * Transitions a document from DRAFT to SENT.
   * Enforces that a document cannot be sent without participants.
   */
  async sendDocument(documentId, organizationId) {
    const document = await import_iam.prisma.dssDocument.findFirst({
      where: { id: documentId, organizationId },
      include: { participants: true }
    });
    if (!document) {
      throw new Error("Document not found");
    }
    if (document.status !== import_client.DssDocumentStatus.DRAFT) {
      throw new Error(`Cannot send document in ${document.status} state.`);
    }
    if (document.participants.length === 0) {
      throw new Error("Cannot send a document with no assigned signers.");
    }
    return import_iam.prisma.dssDocument.update({
      where: { id: documentId },
      data: {
        status: import_client.DssDocumentStatus.SENT,
        sentAt: /* @__PURE__ */ new Date()
      }
    });
  }
  /**
   * Evaluates if a specific participant can sign right now based on workflow mode and step order.
   */
  async canParticipantSign(documentId, participantId) {
    const document = await import_iam.prisma.dssDocument.findUnique({
      where: { id: documentId },
      include: {
        participants: {
          orderBy: { stepOrder: "asc" }
        }
      }
    });
    if (!document || ![import_client.DssDocumentStatus.SENT, import_client.DssDocumentStatus.IN_SIGNING].includes(document.status)) {
      return false;
    }
    const targetParticipant = document.participants.find((p) => p.id === participantId);
    if (!targetParticipant || targetParticipant.hasSigned) {
      return false;
    }
    if (document.signingMode === import_client.DssSigningMode.PARALLEL) {
      return true;
    }
    const currentActiveStep = document.participants.filter((p) => !p.hasSigned).reduce((min, p) => p.stepOrder < min ? p.stepOrder : min, Number.POSITIVE_INFINITY);
    return targetParticipant.stepOrder === currentActiveStep;
  }
  /**
   * Applies a cryptographic signature, enforces step-order,
   * and evaluates if the document should transition to COMPLETED.
   */
  async signDocument(payload) {
    const document = await import_iam.prisma.dssDocument.findUnique({
      where: { id: payload.documentId },
      include: { participants: true }
    });
    if (!document) throw new Error("Document not found");
    if (document.status !== import_client.DssDocumentStatus.SENT && document.status !== import_client.DssDocumentStatus.IN_SIGNING) {
      throw new Error(`Cannot sign document in ${document.status} state.`);
    }
    const participant = document.participants.find((p) => p.email === payload.userEmail);
    if (!participant) {
      throw new Error("You are not an assigned participant on this document.");
    }
    const canSign = await this.canParticipantSign(payload.documentId, participant.id);
    if (!canSign) {
      throw new Error("It is not your turn to sign this document yet.");
    }
    const result = await import_iam.prisma.$transaction(async (tx) => {
      const signatureProof = (0, import_hashing.computeDocumentHash)(
        Buffer.from(payload.signatureHash + document.originalPdfSha256Hex)
      );
      await tx.dssSignature.create({
        data: {
          documentId: payload.documentId,
          participantId: participant.id,
          signatureHash: signatureProof
          // Cryptographic proof
        }
      });
      await tx.dssParticipant.update({
        where: { id: participant.id },
        data: { hasSigned: true, signedAt: /* @__PURE__ */ new Date() }
      });
      if (document.status === import_client.DssDocumentStatus.SENT) {
        await tx.dssDocument.update({
          where: { id: payload.documentId },
          data: { status: import_client.DssDocumentStatus.IN_SIGNING }
        });
      }
      const unsignedCount = await tx.dssParticipant.count({
        where: { documentId: payload.documentId, hasSigned: false }
      });
      if (unsignedCount === 0) {
        const completedDoc = await tx.dssDocument.update({
          where: { id: payload.documentId },
          data: {
            status: import_client.DssDocumentStatus.COMPLETED,
            completedAt: /* @__PURE__ */ new Date()
          }
        });
        return { document: completedDoc, isCompleted: true };
      }
      const currentDoc = await tx.dssDocument.findUnique({
        where: { id: payload.documentId }
      });
      return { document: currentDoc, isCompleted: false };
    });
    return result;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  WorkflowService
});
//# sourceMappingURL=workflow-ervice.js.map
