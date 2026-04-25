import twilio from 'twilio';

let client: ReturnType<typeof twilio> | null = null;

function getTwilioClient() {
  if (client) return client;

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;

  if (!accountSid || !authToken) {
    throw new Error('Twilio credentials are not configured');
  }

  client = twilio(accountSid, authToken);
  return client;
}

/**
 * Sends an SMS to a specified E.164 phone number.
 */
export async function sendSms(to: string, body: string) {
  if (process.env.NODE_ENV === 'development') {
    // In Dev, just log it to save money/credits
    console.log('[MOCK SMS] To:', to, 'Body:', body);
    return { success: true, sid: 'mock-sid' };
  }

  try {
    const twilioClient = getTwilioClient();
    const message = await twilioClient.messages.create({
      body,
      from: process.env.TWILIO_PHONE_NUMBER,
      to,
    });
    return { success: true, sid: message.sid };
  } catch (error) {
    console.error('SMS Failed:', error);
    return { success: false, error };
  }
}
