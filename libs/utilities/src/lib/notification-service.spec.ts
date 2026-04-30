import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { NotificationCategory } from '@prisma/client';
import { SmsFactory } from './notifications/sms-factory';

vi.mock('@rentflow/iam', () => ({
  prisma: {
    user: { findUnique: vi.fn() },
    notificationPreference: { findUnique: vi.fn() },
    smsNotification: { create: vi.fn(), update: vi.fn() },
  },
}));

import { prisma } from '@rentflow/iam';
import { NotificationService } from './notifications/notification-service';

const prismaMock = prisma as unknown as {
  user: { findUnique: ReturnType<typeof vi.fn> };
  notificationPreference: { findUnique: ReturnType<typeof vi.fn> };
  smsNotification: {
    create: ReturnType<typeof vi.fn>;
    update: ReturnType<typeof vi.fn>;
  };
};

describe('NotificationService.sendSmsNotification', () => {
  const sendSmsMock = vi.fn();
  let getProviderSpy: ReturnType<typeof vi.spyOn>;

  const baseParams = {
    userId: 'user-1',
    phoneNumber: '+254712345678',
    message: 'Sensitive payment info',
    category: NotificationCategory.PAYMENT_RECEIPT,
  };

  beforeEach(() => {
    getProviderSpy = vi.spyOn(SmsFactory, 'getProvider').mockReturnValue({
      provider: { sendSms: sendSmsMock },
      name: 'TWILIO',
    });
    prismaMock.user.findUnique.mockResolvedValue({
      consentNotifications: true,
      consentTransactional: true,
    });
    prismaMock.notificationPreference.findUnique.mockResolvedValue(null);
    prismaMock.smsNotification.create.mockResolvedValue({});
    prismaMock.smsNotification.update.mockResolvedValue({});
    sendSmsMock.mockResolvedValue({ success: true, messageId: 'sid-1' });
    getProviderSpy.mockClear();
    sendSmsMock.mockClear();
    prismaMock.user.findUnique.mockClear();
    prismaMock.notificationPreference.findUnique.mockClear();
    prismaMock.smsNotification.create.mockClear();
    prismaMock.smsNotification.update.mockClear();
    delete process.env.SMS_DRY_RUN;
  });

  afterEach(() => {
    getProviderSpy.mockRestore();
    vi.clearAllMocks();
  });

  it('respects preference opt-out and does not send', async () => {
    prismaMock.notificationPreference.findUnique.mockResolvedValue({
      preferredChannel: 'SMS',
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
    expect(getProviderSpy).not.toHaveBeenCalled();
    expect(prismaMock.smsNotification.create).not.toHaveBeenCalled();
  });

  it('uses dry-run mode without logging PII', async () => {
    process.env.SMS_DRY_RUN = 'true';
    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    const result = await NotificationService.sendSmsNotification(baseParams);

    expect(result).toBe(true);
    expect(getProviderSpy).not.toHaveBeenCalled();
    expect(prismaMock.smsNotification.create).toHaveBeenCalledTimes(1);

    const logLine = logSpy.mock.calls[0]?.[0] as string;
    expect(logLine).toContain(baseParams.phoneNumber.slice(-4));
    expect(logLine).not.toContain(baseParams.phoneNumber);
    expect(logLine).not.toContain(baseParams.message);
  });

  it('returns false when user is missing', async () => {
    prismaMock.user.findUnique.mockResolvedValueOnce(null);

    const result = await NotificationService.sendSmsNotification(baseParams);

    expect(result).toBe(false);
    expect(getProviderSpy).not.toHaveBeenCalled();
    expect(prismaMock.smsNotification.create).not.toHaveBeenCalled();
    expect(prismaMock.smsNotification.update).not.toHaveBeenCalled();
  });

  it('returns false when user consent is disabled', async () => {
    prismaMock.user.findUnique.mockResolvedValueOnce({
      consentNotifications: false,
      consentTransactional: true,
    });

    const result = await NotificationService.sendSmsNotification(baseParams);

    expect(result).toBe(false);
    expect(getProviderSpy).not.toHaveBeenCalled();
    expect(prismaMock.smsNotification.create).not.toHaveBeenCalled();
    expect(prismaMock.smsNotification.update).not.toHaveBeenCalled();
  });

  it('sends via provider and logs success status', async () => {
    prismaMock.smsNotification.create.mockResolvedValueOnce({ id: 'notif-1' });
    sendSmsMock.mockResolvedValueOnce({ success: true, messageId: 'sid-123' });

    const result = await NotificationService.sendSmsNotification(baseParams);

    expect(result).toBe(true);
    expect(getProviderSpy).toHaveBeenCalledTimes(1);
    expect(sendSmsMock).toHaveBeenCalledWith(
      baseParams.phoneNumber,
      baseParams.message,
    );
    expect(prismaMock.smsNotification.create).toHaveBeenCalledWith({
      data: expect.objectContaining({
        userId: baseParams.userId,
        phone: baseParams.phoneNumber,
        message: baseParams.message,
        category: baseParams.category,
        reference: 'TWILIO',
        status: 'QUEUED',
        channel: 'SMS',
      }),
    });
    expect(prismaMock.smsNotification.update).toHaveBeenCalledWith({
      where: { id: 'notif-1' },
      data: {
        status: 'SENT',
        reference: 'sid-123',
        errorMessage: undefined,
        sentAt: expect.any(Date),
      },
    });
  });

  it('logs failure status when provider fails', async () => {
    prismaMock.smsNotification.create.mockResolvedValueOnce({ id: 'notif-2' });
    sendSmsMock.mockResolvedValueOnce({ success: false, error: 'oops' });

    const result = await NotificationService.sendSmsNotification(baseParams);

    expect(result).toBe(false);
    expect(prismaMock.smsNotification.update).toHaveBeenCalledWith({
      where: { id: 'notif-2' },
      data: {
        status: 'FAILED',
        reference: 'TWILIO',
        errorMessage: 'oops',
        sentAt: null,
      },
    });
  });
});
