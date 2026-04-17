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
  EmailNotificationService: () => EmailNotificationService
});
module.exports = __toCommonJS(notification_service_exports);
var import_mail = require("./mail");
class EmailNotificationService {
  static async sendSignatureInvitation(params) {
    const signUrl = `${process.env.NEXT_PUBLIC_APP_URL}/tenant/dss/sign/${params.documentId}`;
    const html = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1a1a1a;">Signature Required</h2>
        <p>You have been requested to sign: <strong>${params.documentTitle}</strong></p>
        <p>Your role: <strong>${params.role}</strong></p>
        <a href="${signUrl}" style="display: inline-block; padding: 12px 24px; background-color: #2563eb; color: white; text-decoration: none; border-radius: 6px; margin-top: 20px;">
          Review and Sign Document
        </a>
        <p style="margin-top: 30px; font-size: 12px; color: #666;">
          Securely powered by RentFlow360 DSS.
        </p>
      </div>
    `;
    await (0, import_mail.sendEmail)({
      to: params.email,
      subject: `Action Required: Sign ${params.documentTitle}`,
      html
    });
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EmailNotificationService
});
//# sourceMappingURL=notification-service.js.map
