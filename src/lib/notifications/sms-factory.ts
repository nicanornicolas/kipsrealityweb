import twilio from "twilio";
import AfricasTalking from "africastalking";
import { PhoneNumberUtil } from "google-libphonenumber";

// 1. The Standard Interface
export interface ISmsProvider {
  sendSms(
    to: string,
    message: string
  ): Promise<{ success: boolean; messageId?: string; error?: string }>;
}

// 2. Twilio Implementation
class TwilioProvider implements ISmsProvider {
  private client: ReturnType<typeof twilio>;

  constructor() {
    if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN) {
      throw new Error("Missing TWILIO_ACCOUNT_SID or TWILIO_AUTH_TOKEN environment variables");
    }
    this.client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
  }

  async sendSms(to: string, message: string) {
    try {
      const res = await this.client.messages.create({
        body: message,
        from: process.env.TWILIO_PHONE_NUMBER,
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
  private client: ReturnType<typeof AfricasTalking>;

  constructor() {
    if (!process.env.AT_API_KEY || !process.env.AT_USERNAME) {
      throw new Error("Missing AT_API_KEY or AT_USERNAME environment variables");
    }
    this.client = AfricasTalking({
      apiKey: process.env.AT_API_KEY as string,
      username: process.env.AT_USERNAME as string,
    });
  }

  async sendSms(to: string, message: string) {
    try {
      const res = await this.client.SMS.send({
        to: [to],
        message,
        from: process.env.AT_SENDER_ID, // Optional: e.g., 'RENTFLOW'
      });
      const recipient = res.SMSMessageData.Recipients[0];
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
  static getProvider(phoneNumber: string): {
    provider: ISmsProvider;
    name: string;
  } {
    const phoneUtil = PhoneNumberUtil.getInstance();
    try {
      const parsedNumber = phoneUtil.parse(phoneNumber);
      const countryCode = parsedNumber.getCountryCode();

      // 254 is Kenya. Route through Africa's Talking.
      if (countryCode === 254) {
        return { provider: new AfricasTalkingProvider(), name: "AFRICASTALKING" };
      }

      // Default fallback to Twilio for US (+1) and others
      return { provider: new TwilioProvider(), name: "TWILIO" };
    } catch {
      // If parsing fails, fallback to Twilio
      return { provider: new TwilioProvider(), name: "TWILIO" };
    }
  }
}
