export interface ISmsProvider {
    sendSms(to: string, message: string): Promise<{
        success: boolean;
        messageId?: string;
        error?: string;
    }>;
}
export declare class SmsFactory {
    private static phoneUtil;
    private static twilioProvider;
    private static africasTalkingProvider;
    private static getTwilioProvider;
    private static getAfricasTalkingProvider;
    static resetForTests(): void;
    static getProvider(phoneNumber: string): {
        provider: ISmsProvider;
        name: string;
    };
}
