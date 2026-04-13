export interface GeneratePdfResult {
    finalFileUrl: string;
    finalPdfSha256Hex: string;
}
export declare function generateFinalSignedPdf(documentId: string, orgId: string): Promise<GeneratePdfResult>;
