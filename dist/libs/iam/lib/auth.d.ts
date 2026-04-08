export declare function getJwtSecret(): string;
export declare function getJwtRefreshSecret(): string;
interface AccessTokenPayload {
    userId: string;
    email: string;
    role: string;
    organizationId: string;
    organizationUserId: string;
}
interface RefreshTokenPayload {
    userId: string;
}
export declare function generateAccessToken(payload: AccessTokenPayload): string;
export declare function generateRefreshToken(payload: RefreshTokenPayload): string;
export declare function verifyAccessToken(token: string): AccessTokenPayload;
export declare function verifyRefreshToken(token: string): RefreshTokenPayload;
export declare const authOptions: {
    secret: string | undefined;
    providers: never[];
    callbacks: {
        jwt: ({ token, user }: any) => Promise<any>;
        session: ({ session, token }: any) => Promise<any>;
    };
};
export declare const auth: () => Promise<null>;
export {};
