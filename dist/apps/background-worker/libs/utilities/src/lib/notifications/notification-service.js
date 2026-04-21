var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var notification_service_exports = {};
__export(notification_service_exports, {
  NotificationService: () => NotificationService
});
module.exports = __toCommonJS(notification_service_exports);
var import_iam = require("@rentflow/iam");
var import_sms_factory = require("./sms-factory");
class NotificationService {
  static maskPhone(phoneNumber) {
    if (!phoneNumber) return "****";
    if (phoneNumber.length <= 4) {
      return phoneNumber.replace(/[0-9]/g, "*");
    }
    const visible = phoneNumber.slice(-4);
    const maskedPrefix = phoneNumber.slice(0, -4).replace(/[0-9]/g, "*");
    return `${maskedPrefix}${visible}`;
  }
  /**
   * Sends an SMS and logs the exact status to the database for auditing/billing.
   */
  static async sendSmsNotification(params) {
    const { userId, phoneNumber, message, category } = params;
    const user = await import_iam.prisma.user.findUnique({
      where: { id: userId },
      select: {
        consentNotifications: true,
        consentTransactional: true
      }
    });
    if (!user) {
      console.warn(`[SMS] User not found: ${userId}`);
      return false;
    }
    if (!user.consentNotifications || !user.consentTransactional) {
      return false;
    }
    const prefs = await import_iam.prisma.notificationPreference.findUnique({
      where: { userId }
    });
    if (prefs) {
      if (prefs.preferredChannel !== "SMS") return false;
      if (category === "RENT_REMINDER" && !prefs.rentReminders) return false;
      if (category === "PAYMENT_RECEIPT" && !prefs.paymentReceipts) return false;
      if (category === "MAINTENANCE_UPDATE" && !prefs.maintenance) return false;
      if (category === "UTILITY_BILL" && !prefs.utilityAlerts) return false;
    }
    if (process.env.SMS_DRY_RUN === "true") {
      const maskedPhone = NotificationService.maskPhone(phoneNumber);
      const messageLength = message?.length ?? 0;
      console.log(
        `[SMS DRY RUN] To: ${maskedPhone} | Category: ${category} | Message length: ${messageLength}`
      );
      await import_iam.prisma.smsNotification.create({
        data: {
          userId,
          phoneNumber,
          message,
          category,
          provider: "LOCAL_STUB",
          status: "DELIVERED",
          sentAt: /* @__PURE__ */ new Date(),
          deliveredAt: /* @__PURE__ */ new Date()
        }
      });
      return true;
    }
    const { provider, name: providerName } = import_sms_factory.SmsFactory.getProvider(phoneNumber);
    const queuedNotification = await import_iam.prisma.smsNotification.create({
      data: {
        userId,
        phoneNumber,
        message,
        category,
        provider: providerName,
        status: "QUEUED"
      }
    });
    const result = await provider.sendSms(phoneNumber, message);
    await import_iam.prisma.smsNotification.update({
      where: { id: queuedNotification.id },
      data: {
        status: result.success ? "SENT" : "FAILED",
        providerMsgId: result.messageId,
        failureReason: result.error,
        sentAt: result.success ? /* @__PURE__ */ new Date() : null
      }
    });
    return result.success;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  NotificationService
});
//# sourceMappingURL=notification-service.js.map
