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
var otp_exports = {};
__export(otp_exports, {
  createOtp: () => createOtp,
  generateOtpCode: () => generateOtpCode,
  verifyOtp: () => verifyOtp
});
module.exports = __toCommonJS(otp_exports);
var import_db = require("../db");
var import_crypto = __toESM(require("crypto"));
function generateOtpCode() {
  return import_crypto.default.randomInt(1e5, 999999).toString();
}
async function createOtp(userId, phone, type) {
  await import_db.prisma.otp.deleteMany({
    where: { userId, type }
  });
  const code = generateOtpCode();
  const expiresAt = new Date(Date.now() + 5 * 60 * 1e3);
  await import_db.prisma.otp.create({
    data: {
      userId,
      phone,
      code,
      type,
      expiresAt
    }
  });
  return code;
}
async function verifyOtp(userId, code, type) {
  const otpRecord = await import_db.prisma.otp.findFirst({
    where: {
      userId,
      code,
      type,
      expiresAt: { gt: /* @__PURE__ */ new Date() }
      // Must not be expired
    }
  });
  if (!otpRecord) return false;
  await import_db.prisma.otp.delete({ where: { id: otpRecord.id } });
  return true;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createOtp,
  generateOtpCode,
  verifyOtp
});
