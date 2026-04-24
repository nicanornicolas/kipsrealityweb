import twilio from "twilio";
import { PhoneNumberUtil } from "google-libphonenumber";

type AfricasTalkingRecipient = {
  statusCode?: number;
  messageId?: string;
  status?: string;
};

type AfricasTalkingResponse = {
  SMSMessageData?: {
    Recipients?: AfricasTalkingRecipient[];
  };
};

function requireEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

// 1. The Standard Interface
export interface ISmsProvider {
  sendSms(
    to: string,
    message: string
  ): Promise<{ success: boolean; messageId?: string; error?: string }>;
}

// 2. Twilio Implementation
class TwilioProvider implements ISmsProvider {
  private client?: ReturnType<typeof twilio>;
  private from?: string;
  private configError?: string;

  constructor() {
    try {
      const sid = requireEnv("TWILIO_ACCOUNT_SID");
      const token = requireEnv("TWILIO_AUTH_TOKEN");
      const from = requireEnv("TWILIO_PHONE_NUMBER");
      this.client = twilio(sid, token);
      this.from = from;
    } catch (error) {
      this.configError =
        error instanceof Error ? error.message : "Twilio configuration error";
    }
  }

  isConfigured() {
    return Boolean(this.client && this.from && !this.configError);
  }

  async sendSms(to: string, message: string) {
    if (this.configError || !this.client || !this.from) {
      return {
        success: false,
        error: this.configError || "Twilio is not configured",
      };
    }
    try {
      const res = await this.client.messages.create({
        body: message,
        from: this.from,
        to,
      });
      return { success: true, messageId: res.sid };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }
}

// 3. Africa's Talking Implementation (For +254)
class AfricasTalkingProvider implements ISmsProvider {
  private apiKey?: string;
  private username?: string;
  private senderId?: string;
  private endpoint: string;
  private configError?: string;

  constructor() {
    this.endpoint =
      process.env.AT_API_URL ||
      "https://api.africastalking.com/version1/messaging";

    try {
      this.apiKey = requireEnv("AT_API_KEY");
      this.username = requireEnv("AT_USERNAME");
      this.senderId = process.env.AT_SENDER_ID;
    } catch (error) {
      this.configError =
        error instanceof Error
          ? error.message
          : "Africa's Talking configuration error";
    }
  }

  isConfigured() {
    return Boolean(this.apiKey && this.username && !this.configError);
  }

  async sendSms(to: string, message: string) {
    if (this.configError || !this.apiKey || !this.username) {
      return {
        success: false,
        error: this.configError || "Africa's Talking is not configured",
      };
    }

    try {
      const payload = new URLSearchParams({
        username: this.username,
        to,
        message,
        from: process.env['AT_SENDER_ID'] ?? 'RENTFLOW', // Optional: e.g., 'RENTFLOW'
      });
      const recipient = (res as any)?.SMSMessageData?.Recipients?.[0];
      if (!recipient) {
        return {
          success: false,
          error: "Africa's Talking returned no recipients",
        };
      }
      if (recipient.statusCode === 100 || recipient.statusCode === 101) {
        return { success: true, messageId: recipient.messageId };
      }
      return { success: false, error: recipient.status };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }
}

// 4. The Factory Router
export class SmsFactory {
  private static phoneUtil = PhoneNumberUtil.getInstance();
  private static twilioProvider: TwilioProvider | null = null;
  private static africasTalkingProvider: AfricasTalkingProvider | null = null;

  private static getTwilioProvider() {
    if (!this.twilioProvider) {
      this.twilioProvider = new TwilioProvider();
    }
    return this.twilioProvider;
  }

  private static getAfricasTalkingProvider() {
    if (!this.africasTalkingProvider) {
      this.africasTalkingProvider = new AfricasTalkingProvider();
    }
    return this.africasTalkingProvider;
  }

  static resetForTests() {
    this.twilioProvider = null;
    this.africasTalkingProvider = null;
  }

  static getProvider(phoneNumber: string): {
    provider: ISmsProvider;
    name: string;
  } {
    try {
      const parsedNumber = this.phoneUtil.parse(phoneNumber);
      const countryCode = parsedNumber.getCountryCode();

      // 254 is Kenya. Route through Africa's Talking.
      if (countryCode === 254) {
        const atProvider = this.getAfricasTalkingProvider();
        if (atProvider.isConfigured()) {
          return {
            provider: atProvider,
            name: "AFRICASTALKING",
          };
        }
        return {
          provider: this.getTwilioProvider(),
          name: "TWILIO",
        };
      }

      // Default fallback to Twilio for US (+1) and others
      return { provider: this.getTwilioProvider(), name: "TWILIO" };
    } catch {
      // If parsing fails, fallback to Twilio
      return { provider: this.getTwilioProvider(), name: "TWILIO" };
    }
  }
}
