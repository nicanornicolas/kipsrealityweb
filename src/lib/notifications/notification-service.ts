import { prisma } from "@/lib/db";
import { SmsFactory } from "./sms-factory";
import { NotificationCategory } from "@prisma/client";

export class NotificationService {
  private static maskPhone(phoneNumber: string) {
    if (!phoneNumber) return "****";
    const visible = phoneNumber.slice(-4);
    const maskedPrefix = phoneNumber.slice(0, -4).replace(/[0-9]/g, "*");
    return `${maskedPrefix}${visible}`;
  }

  /**
   * Sends an SMS and logs the exact status to the database for auditing/billing.
   */
  static async sendSmsNotification(params: {
    userId: string;
    phoneNumber: string;
    message: string;
    category: NotificationCategory;
  }) {
    const { userId, phoneNumber, message, category } = params;

    // 1. Check Tenant Preferences (Don't spam tenants who opted out!)
    const prefs = await prisma.notificationPreference.findUnique({
      where: { userId },
    });

    if (prefs) {
      if (prefs.preferredChannel !== "SMS") return false;
      if (category === "RENT_REMINDER" && !prefs.rentReminders) return false;
      if (category === "PAYMENT_RECEIPT" && !prefs.paymentReceipts) return false;
      if (category === "MAINTENANCE_UPDATE" && !prefs.maintenance) return false;
      if (category === "UTILITY_BILL" && !prefs.utilityAlerts) return false;
    }

    // --- DRY RUN INTERCEPTOR ---
    if (process.env.SMS_DRY_RUN === "true") {
      const maskedPhone = NotificationService.maskPhone(phoneNumber);
      const messageLength = message?.length ?? 0;
      console.log(
        `[SMS DRY RUN] To: ${maskedPhone} | Category: ${category} | Message length: ${messageLength}`
      );

      await prisma.smsNotification.create({
        data: {
          userId,
          phoneNumber,
          message,
          category,
          provider: "LOCAL_STUB",
          status: "DELIVERED",
          sentAt: new Date(),
          deliveredAt: new Date(),
        },
      });
      return true;
    }
    // ---------------------------

    // 2. Get the optimal gateway based on the phone number
    const { provider, name: providerName } = SmsFactory.getProvider(phoneNumber);

    // 3. Send the SMS
    const result = await provider.sendSms(phoneNumber, message);

    // 4. Log the result to the database (Crucial for dispute resolution)
    await prisma.smsNotification.create({
      data: {
        userId,
        phoneNumber,
        message,
        category,
        provider: providerName,
        status: result.success ? "SENT" : "FAILED",
        providerMsgId: result.messageId,
        failureReason: result.error,
        sentAt: result.success ? new Date() : null,
      },
    });

    return result.success;
  }
}
