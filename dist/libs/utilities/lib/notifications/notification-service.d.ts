import { NotificationCategory } from '@prisma/client';
export declare class NotificationService {
    private static maskPhone;
    /**
     * Sends an SMS and logs the exact status to the database for auditing/billing.
     */
    static sendSmsNotification(params: {
        userId: string;
        phoneNumber: string;
        message: string;
        category: NotificationCategory;
    }): Promise<boolean>;
}
