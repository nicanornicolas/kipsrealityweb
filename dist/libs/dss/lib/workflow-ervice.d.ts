interface SignDocumentResult {
    document: any;
    isCompleted: boolean;
}
export declare class WorkflowService {
    /**
     * Transitions a document from DRAFT to SENT.
     * Enforces that a document cannot be sent without participants.
     */
    sendDocument(documentId: string, organizationId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        organizationId: string;
        leaseId: string | null;
        title: string;
        description: string | null;
        propertyId: string | null;
        unitId: string | null;
        status: import("@prisma/client").$Enums.DssDocumentStatus;
        originalFileUrl: string | null;
        originalFileKey: string | null;
        mimeType: string | null;
        fileSizeBytes: number | null;
        originalPdfSha256Hex: string;
        finalPdfSha256Hex: string | null;
        finalFileUrl: string | null;
        signingMode: import("@prisma/client").$Enums.DssSigningMode;
        currentStep: number;
        sentAt: Date | null;
        completedAt: Date | null;
        voidedAt: Date | null;
    }>;
    /**
     * Evaluates if a specific participant can sign right now based on workflow mode and step order.
     */
    canParticipantSign(documentId: string, participantId: string): Promise<boolean>;
    /**
     * Applies a cryptographic signature, enforces step-order,
     * and evaluates if the document should transition to COMPLETED.
     */
    signDocument(payload: {
        documentId: string;
        userEmail: string;
        signatureHash: string;
        ipAddress?: string;
    }): Promise<SignDocumentResult>;
}
export {};
