export declare function getCurrentUser(req?: Request): Promise<{
    id: string;
    email: string;
    role: string;
    organizationId: string;
    organizationUserId: string;
} | null>;
