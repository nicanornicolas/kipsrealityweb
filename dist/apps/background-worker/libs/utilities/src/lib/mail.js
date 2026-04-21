var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var mail_exports = {};
__export(mail_exports, {
  sendEmail: () => sendEmail
});
module.exports = __toCommonJS(mail_exports);
var import_nodemailer = __toESM(require("nodemailer"));
var import_render = require("@react-email/render");
const transporter = import_nodemailer.default.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
});
const sendEmail = async ({
  to,
  subject,
  react,
  text,
  html
}) => {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    console.warn("SMTP credentials missing. Logging email to console.");
    console.log(`To: ${to}
Subject: ${subject}`);
    return;
  }
  try {
    const htmlBody = react ? await (0, import_render.render)(react) : html;
    const info = await transporter.sendMail({
      from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html: htmlBody,
      text: text || "Please enable HTML to view this email."
      // Fallback if no text provided
    });
    console.log(`Email sent to ${to} | MessageID: ${info.messageId}`);
  } catch (error) {
    console.error("SMTP Email sending failed:", error);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  sendEmail
});
