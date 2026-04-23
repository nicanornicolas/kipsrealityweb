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
      where: {
        userId_channel_category: {
          userId,
          channel: "SMS",
          category
        }
      }
    });
    if (prefs && !prefs.enabled) {
      return false;
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
          phone: phoneNumber,
          message,
          channel: "SMS",
          category,
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
        phone: phoneNumber,
        message,
        channel: "SMS",
        category,
        status: "QUEUED",
        reference: providerName
      }
    });
    const result = await provider.sendSms(phoneNumber, message);
    await import_iam.prisma.smsNotification.update({
      where: { id: queuedNotification.id },
      data: {
        status: result.success ? "SENT" : "FAILED",
        reference: result.messageId ?? providerName,
        errorMessage: result.error,
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
