import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { NotificationCategory } from "@prisma/client";
import { prisma } from "@/lib/db";
import { NotificationService } from "@/lib/notifications/notification-service";

const sendSmsMock = vi.fn();
const getProviderMock = vi.fn(() => ({
  provider: { sendSms: sendSmsMock },
  name: "TWILIO",
}));

vi.mock("@/lib/notifications/sms-factory", () => ({
  SmsFactory: { getProvider: getProviderMock },
}));

const prismaMock = prisma as unknown as {
  notificationPreference: { findUnique: ReturnType<typeof vi.fn> };
  smsNotification: { create: ReturnType<typeof vi.fn> };
};

describe("NotificationService.sendSmsNotification", () => {
  const baseParams = {
    userId: "user-1",
    phoneNumber: "+254712345678",
    message: "Sensitive payment info",
    category: NotificationCategory.PAYMENT_RECEIPT,
  };

  beforeEach(() => {
    prismaMock.notificationPreference.findUnique.mockResolvedValue(null);
    prismaMock.smsNotification.create.mockResolvedValue({});
    sendSmsMock.mockResolvedValue({ success: true, messageId: "sid-1" });
    getProviderMock.mockClear();
    sendSmsMock.mockClear();
    prismaMock.notificationPreference.findUnique.mockClear();
    prismaMock.smsNotification.create.mockClear();
    delete process.env.SMS_DRY_RUN;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("respects preference opt-out and does not send", async () => {
    prismaMock.notificationPreference.findUnique.mockResolvedValue({
      preferredChannel: "SMS",
      rentReminders: false,
      paymentReceipts: true,
      maintenance: true,
      utilityAlerts: true,
    });

    const result = await NotificationService.sendSmsNotification({
      ...baseParams,
      category: NotificationCategory.RENT_REMINDER,
    });

    expect(result).toBe(false);
    expect(getProviderMock).not.toHaveBeenCalled();
    expect(prismaMock.smsNotification.create).not.toHaveBeenCalled();
  });

  it("uses dry-run mode without logging PII", async () => {
    process.env.SMS_DRY_RUN = "true";
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    const result = await NotificationService.sendSmsNotification(baseParams);

    expect(result).toBe(true);
    expect(getProviderMock).not.toHaveBeenCalled();
    expect(prismaMock.smsNotification.create).toHaveBeenCalledTimes(1);

    const logLine = logSpy.mock.calls[0]?.[0] as string;
    expect(logLine).toContain(baseParams.phoneNumber.slice(-4));
    expect(logLine).not.toContain(baseParams.phoneNumber);
    expect(logLine).not.toContain(baseParams.message);
  });
});
