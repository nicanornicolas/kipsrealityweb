export declare function generateOtpCode(): string;
export declare function createOtp(userId: string, phone: string, type: 'TWO_FACTOR' | 'PHONE_VERIFICATION'): Promise<string>;
export declare function verifyOtp(userId: string, code: string, type: 'TWO_FACTOR' | 'PHONE_VERIFICATION'): Promise<boolean>;
