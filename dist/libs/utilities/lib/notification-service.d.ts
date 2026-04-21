export declare class EmailNotificationService {
    static sendSignatureInvitation(params: {
        email: string;
        documentTitle: string;
        documentId: string;
        role: string;
    }): Promise<void>;
}
