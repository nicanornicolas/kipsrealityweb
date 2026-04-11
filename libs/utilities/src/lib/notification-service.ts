import { sendEmail } from './mail';

export class EmailNotificationService {
  static async sendSignatureInvitation(params: {
    email: string;
    documentTitle: string;
    documentId: string;
    role: string;
  }) {
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

    await sendEmail({
      to: params.email,
      subject: `Action Required: Sign ${params.documentTitle}`,
      html,
    });
  }
}
