import { beforeEach, describe, expect, it } from "vitest";
import { SmsFactory } from "@rentflow/utilities";

describe("SmsFactory.getProvider", () => {
  beforeEach(() => {
    process.env.TWILIO_ACCOUNT_SID = "test-sid";
    process.env.TWILIO_AUTH_TOKEN = "test-token";
    process.env.TWILIO_PHONE_NUMBER = "+15551234567";
    process.env.AT_API_KEY = "test-at-key";
    process.env.AT_USERNAME = "test-at-username";
    SmsFactory.resetForTests();
  });

  it("routes Kenya (+254) numbers to Africa's Talking", () => {
    const { name } = SmsFactory.getProvider("+254712345678");
    expect(name).toBe("AFRICASTALKING");
  });

  it("falls back to Twilio when Africa's Talking is not configured", () => {
    delete process.env.AT_API_KEY;
    delete process.env.AT_USERNAME;
    SmsFactory.resetForTests();

    const { name } = SmsFactory.getProvider("+254712345678");
    expect(name).toBe("TWILIO");
  });

  it("routes US (+1) numbers to Twilio", () => {
    const { name } = SmsFactory.getProvider("+14155550123");
    expect(name).toBe("TWILIO");
  });

  it("falls back to Twilio on parse errors", () => {
    const { name } = SmsFactory.getProvider("not-a-number");
    expect(name).toBe("TWILIO");
  });

  it("reuses provider instances", () => {
    const first = SmsFactory.getProvider("+254712345678");
    const second = SmsFactory.getProvider("+254700000000");
    expect(first.provider).toBe(second.provider);
  });
});
