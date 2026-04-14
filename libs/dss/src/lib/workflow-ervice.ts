import { prisma } from "@rentflow/iam";
import { DssDocumentStatus, DssSigningMode, DssParticipant } from "@prisma/client";
import { computeDocumentHash } from "./hashing";
import { getNextSigner } from "./workflow";

interface SignDocumentResult {
  document: any;
  isCompleted: boolean;
}

export class WorkflowService {
  /**
   * Transitions a document from DRAFT to SENT.
   * Enforces that a document cannot be sent without participants.
   */
  async sendDocument(documentId: string, organizationId: string) {
    const document = await prisma.dssDocument.findFirst({
      where: { id: documentId, organizationId },
      include: { participants: true },
    });

    if (!document) {
      throw new Error("Document not found");
    }

    if (document.status !== DssDocumentStatus.DRAFT) {
      throw new Error(`Cannot send document in ${document.status} state.`);
    }

    if (document.participants.length === 0) {
      throw new Error("Cannot send a document with no assigned signers.");
    }

    return prisma.dssDocument.update({
      where: { id: documentId },
      data: {
        status: DssDocumentStatus.SENT,
        sentAt: new Date(),
      },
    });
  }

  /**
   * Evaluates if a specific participant can sign right now based on workflow mode and step order.
   */
  async canParticipantSign(documentId: string, participantId: string): Promise<boolean> {
    const document = await prisma.dssDocument.findUnique({
      where: { id: documentId },
      include: {
        participants: {
          orderBy: { stepOrder: "asc" },
        },
      },
    });

    if (!document || ![DssDocumentStatus.SENT, DssDocumentStatus.IN_SIGNING].includes(document.status)) {
      return false;
    }

    const targetParticipant = document.participants.find((p) => p.id === participantId);
    if (!targetParticipant || targetParticipant.hasSigned) {
      return false;
    }

    if (document.signingMode === DssSigningMode.PARALLEL) {
      return true;
    }

    const currentActiveStep = document.participants
      .filter((p) => !p.hasSigned)
      .reduce((min, p) => (p.stepOrder < min ? p.stepOrder : min), Number.POSITIVE_INFINITY);

    return targetParticipant.stepOrder === currentActiveStep;
  }

  /**
   * Applies a cryptographic signature, enforces step-order,
   * and evaluates if the document should transition to COMPLETED.
   */
  async signDocument(payload: {
    documentId: string;
    userEmail: string;
    signatureHash: string; // The SHA-256 hash of their drawn/typed signature
    ipAddress?: string;
  }): Promise<SignDocumentResult> {
    // 1. Fetch document and all participants
    const document = await prisma.dssDocument.findUnique({
      where: { id: payload.documentId },
      include: { participants: true }
    });

    if (!document) throw new Error("Document not found");

    // 2. THE STATE MACHINE GATE: Must be actively in progress
    if (document.status !== DssDocumentStatus.SENT && document.status !== DssDocumentStatus.IN_SIGNING) {
      throw new Error(`Cannot sign document in ${document.status} state.`);
    }

    // 3. IDENTITY VERIFICATION: Does this user belong on this document?
    const participant = document.participants.find(p => p.email === payload.userEmail);
    if (!participant) {
      throw new Error("You are not an assigned participant on this document.");
    }

    // 4. STEP-ORDER VERIFICATION: Is it their turn?
    const canSign = await this.canParticipantSign(payload.documentId, participant.id);
    if (!canSign) {
      throw new Error("It is not your turn to sign this document yet.");
    }

    // 5. ATOMIC EXECUTION (The Database Transaction)
    const result = await prisma.$transaction(async (tx) => {
      
      // Compute server-side proof of signature
      const signatureProof = computeDocumentHash(
        Buffer.from(payload.signatureHash + document.originalPdfSha256Hex)
      );

      // A. Create the immutable Signature Record
      await tx.dssSignature.create({
        data: {
          documentId: payload.documentId,
          participantId: participant.id,
          signatureHash: signatureProof, // Cryptographic proof
        }
      });

      // B. Mark the Participant as successfully signed
      await tx.dssParticipant.update({
        where: { id: participant.id },
        data: { hasSigned: true, signedAt: new Date() }
      });

      // C. Transition Document from SENT to IN_SIGNING (if first signer)
      if (document.status === DssDocumentStatus.SENT) {
        await tx.dssDocument.update({
          where: { id: payload.documentId },
          data: { status: DssDocumentStatus.IN_SIGNING }
        });
      }

      // D. STATE EVALUATION: Are we finished?
      // Count how many people STILL need to sign
      const unsignedCount = await tx.dssParticipant.count({
        where: { documentId: payload.documentId, hasSigned: false }
      });

      if (unsignedCount === 0) {
        // EVERYONE HAS SIGNED! The document is complete.
        const completedDoc = await tx.dssDocument.update({
          where: { id: payload.documentId },
          data: { 
            status: DssDocumentStatus.COMPLETED, 
            completedAt: new Date() 
          }
        });
        return { document: completedDoc, isCompleted: true };
      }

      // Fetch current document state for return
      const currentDoc = await tx.dssDocument.findUnique({
        where: { id: payload.documentId }
      });

      return { document: currentDoc, isCompleted: false };
    });

    // NOTE: In the future, if result.isCompleted === true, 
    // this is exactly where we push a job to BullMQ to execute 
    // the Blockchain Notarization!

    return result;
  }
}
