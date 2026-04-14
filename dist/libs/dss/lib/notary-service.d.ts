/**
 * Main Entry Point: Notarize a Completed Document
 */
export declare function notarizeDocument(documentId: string): Promise<{
    id: string;
    createdAt: Date;
    organizationId: string;
    status: import("@prisma/client").$Enums.BlockchainNotaryStatus;
    documentId: string;
    chainId: number;
    contractAddress: string;
    notarizedHash: string;
    txHash: string | null;
    blockNumber: number | null;
    confirmedAt: Date | null;
}>;
