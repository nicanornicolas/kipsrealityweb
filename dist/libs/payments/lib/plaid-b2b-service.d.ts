export declare class PlaidB2BService {
    /**
     * Generates a Link Token for the Property Manager to connect the Business Account.
     */
    createBusinessLinkToken(organizationId: string, userId: string): Promise<string>;
    /**
     * Exchanges public token and saves the Business Bank Account.
     */
    exchangeAndSaveAccount(publicToken: string, organizationId: string): Promise<{
        id: string;
        createdAt: Date;
        organizationId: string;
        status: string;
        plaidAccessToken: string;
        plaidItemId: string;
        institutionName: string;
        accountName: string;
        accountType: string;
        accountSubtype: string;
        mask: string;
    }>;
    /**
     * Pulls recent transactions and upserts them for idempotent sync.
     */
    syncTransactions(organizationId: string, accessToken: string): Promise<number>;
}
