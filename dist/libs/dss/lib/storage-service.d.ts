export declare class StorageService {
    private static client;
    private static getConfig;
    private static getClient;
    static uploadPdf(fileBuffer: Buffer, organizationId: string): Promise<{
        key: string;
    }>;
    static getSignedUrl(key: string, expiresInSeconds?: number): Promise<string>;
    static getDownloadUrl(key: string, filename: string, expiresInSeconds?: number): Promise<string>;
    static downloadDocument(key: string): Promise<Buffer>;
}
