import { DssParticipantRole, DssSigningMode } from '@prisma/client';
interface CreateDocumentParams {
    title: string;
    organizationId: string;
    fileBuffer: Buffer;
    participants: {
        email: string;
        role: DssParticipantRole;
        name?: string;
    }[];
    signingMode?: DssSigningMode;
}
interface AddParticipantInput {
    email: string;
    fullName: string;
    role: DssParticipantRole;
    stepOrder: number;
}
export declare class DocumentService {
    /**
     * Lists DSS documents for an organization.
     */
    listDocuments(organizationId: string): Promise<({
        participants: {
            id: string;
            email: string;
            role: import("@prisma/client").$Enums.DssParticipantRole;
            organizationId: string;
            documentId: string;
            userId: string | null;
            fullName: string | null;
            stepOrder: number;
            hasSigned: boolean;
            signedAt: Date | null;
            viewedAt: Date | null;
            accessTokenHash: string | null;
        }[];
    } & {
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
    })[]>;
    /**
     * Fetches a document and returns a temporary signed URL for browser viewing.
     */
    getDocumentForViewing(documentId: string, organizationId: string): Promise<{
        viewUrl: string;
        fields: {
            id: string;
            documentId: string;
            type: string;
            participantId: string;
            pageNumber: number;
            x: number;
            y: number;
            width: number;
            height: number;
            value: string | null;
        }[];
        organization: {
            name: string;
        };
        participants: {
            id: string;
            email: string;
            role: import("@prisma/client").$Enums.DssParticipantRole;
            organizationId: string;
            documentId: string;
            userId: string | null;
            fullName: string | null;
            stepOrder: number;
            hasSigned: boolean;
            signedAt: Date | null;
            viewedAt: Date | null;
            accessTokenHash: string | null;
        }[];
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
     * Adds a participant to a DRAFT document only.
     */
    addParticipant(documentId: string, organizationId: string, data: AddParticipantInput): Promise<{
        id: string;
        email: string;
        role: import("@prisma/client").$Enums.DssParticipantRole;
        organizationId: string;
        documentId: string;
        userId: string | null;
        fullName: string | null;
        stepOrder: number;
        hasSigned: boolean;
        signedAt: Date | null;
        viewedAt: Date | null;
        accessTokenHash: string | null;
    }>;
    /**
     * Removes a participant from a DRAFT document only.
     */
    removeParticipant(participantId: string, documentId: string, organizationId: string): Promise<{
        success: boolean;
    }>;
}
/**
 * Creates a new DSS Document.
 * Strategy: Hash -> Upload -> Save DB
 */
export declare function createDocument({ title, organizationId, fileBuffer, participants, signingMode, }: CreateDocumentParams): Promise<{
    participants: {
        id: string;
        email: string;
        role: import("@prisma/client").$Enums.DssParticipantRole;
        organizationId: string;
        documentId: string;
        userId: string | null;
        fullName: string | null;
        stepOrder: number;
        hasSigned: boolean;
        signedAt: Date | null;
        viewedAt: Date | null;
        accessTokenHash: string | null;
    }[];
} & {
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
export declare function getDocumentForViewing(documentId: string): Promise<{
    document: {
        organization: {
            name: string;
        };
        participants: {
            id: string;
            email: string;
            role: import("@prisma/client").$Enums.DssParticipantRole;
            organizationId: string;
            documentId: string;
            userId: string | null;
            fullName: string | null;
            stepOrder: number;
            hasSigned: boolean;
            signedAt: Date | null;
            viewedAt: Date | null;
            accessTokenHash: string | null;
        }[];
    } & {
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
    };
    originalFileUrl: string | null;
} | null>;
/**
 * Executes a signing action for a participant.
 */
interface SignDocumentResult {
    success: boolean;
    result: {
        status: string;
    };
}
export declare function signDocument(documentId: string, userEmail: string, signatureData: string, onBehalfOf?: string): Promise<SignDocumentResult>;
export {};
