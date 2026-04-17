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
var sms_factory_exports = {};
__export(sms_factory_exports, {
  SmsFactory: () => SmsFactory
});
module.exports = __toCommonJS(sms_factory_exports);
var import_twilio = __toESM(require("twilio"));
var import_africastalking = __toESM(require("africastalking"));
var import_google_libphonenumber = require("google-libphonenumber");
function requireEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}
class TwilioProvider {
  client;
  from;
  configError;
  constructor() {
    try {
      const sid = requireEnv("TWILIO_ACCOUNT_SID");
      const token = requireEnv("TWILIO_AUTH_TOKEN");
      const from = requireEnv("TWILIO_PHONE_NUMBER");
      this.client = (0, import_twilio.default)(sid, token);
      this.from = from;
    } catch (error) {
      this.configError = error instanceof Error ? error.message : "Twilio configuration error";
    }
  }
  isConfigured() {
    return Boolean(this.client && this.from && !this.configError);
  }
  async sendSms(to, message) {
    if (this.configError || !this.client || !this.from) {
      return {
        success: false,
        error: this.configError || "Twilio is not configured"
      };
    }
    try {
      const res = await this.client.messages.create({
        body: message,
        from: this.from,
        to
      });
      return { success: true, messageId: res.sid };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}
class AfricasTalkingProvider {
  client;
  configError;
  constructor() {
    try {
      const apiKey = requireEnv("AT_API_KEY");
      const username = requireEnv("AT_USERNAME");
      this.client = (0, import_africastalking.default)({ apiKey, username });
    } catch (error) {
      this.configError = error instanceof Error ? error.message : "Africa's Talking configuration error";
    }
  }
  isConfigured() {
    return Boolean(this.client && !this.configError);
  }
  async sendSms(to, message) {
    if (this.configError || !this.client) {
      return {
        success: false,
        error: this.configError || "Africa's Talking is not configured"
      };
    }
    try {
      const res = await this.client.SMS.send({
        to: [to],
        message,
        from: process.env.AT_SENDER_ID
        // Optional: e.g., 'RENTFLOW'
      });
      const recipient = res?.SMSMessageData?.Recipients?.[0];
      if (!recipient) {
        return {
          success: false,
          error: "Africa's Talking returned no recipients"
        };
      }
      if (recipient.statusCode === 100 || recipient.statusCode === 101) {
        return { success: true, messageId: recipient.messageId };
      }
      return { success: false, error: recipient.status };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}
class SmsFactory {
  static phoneUtil = import_google_libphonenumber.PhoneNumberUtil.getInstance();
  static twilioProvider = null;
  static africasTalkingProvider = null;
  static getTwilioProvider() {
    if (!this.twilioProvider) {
      this.twilioProvider = new TwilioProvider();
    }
    return this.twilioProvider;
  }
  static getAfricasTalkingProvider() {
    if (!this.africasTalkingProvider) {
      this.africasTalkingProvider = new AfricasTalkingProvider();
    }
    return this.africasTalkingProvider;
  }
  static resetForTests() {
    this.twilioProvider = null;
    this.africasTalkingProvider = null;
  }
  static getProvider(phoneNumber) {
    try {
      const parsedNumber = this.phoneUtil.parse(phoneNumber);
      const countryCode = parsedNumber.getCountryCode();
      if (countryCode === 254) {
        const atProvider = this.getAfricasTalkingProvider();
        if (atProvider.isConfigured()) {
          return {
            provider: atProvider,
            name: "AFRICASTALKING"
          };
        }
        return {
          provider: this.getTwilioProvider(),
          name: "TWILIO"
        };
      }
      return { provider: this.getTwilioProvider(), name: "TWILIO" };
    } catch {
      return { provider: this.getTwilioProvider(), name: "TWILIO" };
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SmsFactory
});
//# sourceMappingURL=sms-factory.js.map
