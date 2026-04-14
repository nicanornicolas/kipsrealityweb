export declare class LeaseDocumentError extends Error {
    status: number;
    constructor(message: string, status: number);
}
export declare class LeaseDocumentService {
    uploadDocument(params: {
        leaseId: string;
        file: File | null;
        documentType: string | null;
        description: string | null;
        userId: string;
    }): Promise<{
        id: string;
        leaseId: string;
        description: string | null;
        mimeType: string | null;
        signedAt: Date | null;
        fileUrl: string;
        documentType: import("@prisma/client").$Enums.LeaseDocumentType;
        fileName: string;
        fileSize: number | null;
        version: number | null;
        uploadedBy: string;
        uploadedAt: Date | null;
        isSigned: boolean | null;
    }>;
    listDocuments(leaseId: string): Promise<{
        id: string;
        leaseId: string;
        description: string | null;
        mimeType: string | null;
        signedAt: Date | null;
        fileUrl: string;
        documentType: import("@prisma/client").$Enums.LeaseDocumentType;
        fileName: string;
        fileSize: number | null;
        version: number | null;
        uploadedBy: string;
        uploadedAt: Date | null;
        isSigned: boolean | null;
    }[]>;
}
export declare const leaseDocumentService: LeaseDocumentService;
