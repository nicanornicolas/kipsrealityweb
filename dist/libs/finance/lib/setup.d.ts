/**
 * Creates a Financial Entity and Default Chart of Accounts for an Organization.
 * Run this when a Property Manager signs up.
 */
export declare function setupFinancials(organizationId: string, orgName: string): Promise<{
    name: string;
    id: string;
    organizationId: string;
    taxIdEncrypted: string | null;
}>;
