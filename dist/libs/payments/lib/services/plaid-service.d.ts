import { PlaidApi } from 'plaid';
export declare const plaidClient: PlaidApi;
export declare function createStripeBankAccountToken(accessToken: string, accountId: string): Promise<string>;
export declare function checkBalance(accessToken: string, accountId: string, amount: number): Promise<{
    risk: string;
    available: null;
} | {
    risk: string;
    available: number;
}>;
