import { prisma } from '@rentflow/iam';
import { webhookQueue } from './queue';

export interface WebhookPayload {
  event: string;
  timestamp: string;
  data: Record<string, unknown>;
}

export class OutboundWebhookService {
  async fireEvent(
    targetUrl: string,
    eventType: string,
    payload: Record<string, unknown>,
    secret?: string,
  ): Promise<void> {
    const webhookPayload: WebhookPayload = {
      event: eventType,
      timestamp: new Date().toISOString(),
      data: payload,
    };

    const body = JSON.stringify(webhookPayload);

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'X-Webhook-Event': eventType,
      'X-Webhook-Timestamp': webhookPayload.timestamp,
    };

    if (secret) {
      const crypto = await import('crypto');
      const signature = crypto
        .createHmac('sha256', secret)
        .update(body)
        .digest('hex');
      headers['X-Webhook-Signature'] = signature;
    }

    const response = await fetch(targetUrl, {
      method: 'POST',
      headers,
      body,
    });

    if (!response.ok) {
      throw new Error(
        `Webhook failed with status ${response.status}: ${response.statusText}`,
      );
    }
  }

  async queueWebhook(
    organizationId: string,
    eventType: string,
    payload: Record<string, unknown>,
  ): Promise<void> {
    const webhooks = await prisma.organizationWebhook.findMany({
      where: {
        organizationId,
        isActive: true,
      },
    });

    const matchingWebhooks = webhooks.filter((webhook) => {
      const events = Array.isArray(webhook.events)
        ? webhook.events
        : typeof webhook.events === 'string'
          ? JSON.parse(webhook.events as string)
          : [];
      return events.includes(eventType);
    });

    for (const webhook of matchingWebhooks) {
      await webhookQueue.add(
        'fire-webhook',
        {
          targetUrl: webhook.url,
          eventType,
          payload,
          secret: webhook.secret,
          webhookId: webhook.id,
          organizationId,
        },
        {
          attempts: 3,
          backoff: {
            type: 'exponential',
            delay: 2000,
          },
        },
      );
    }
  }

  async dispatchDocumentCompleted(
    documentId: string,
    organizationId: string,
  ): Promise<void> {
    const document = await prisma.dssDocument.findUnique({
      where: { id: documentId },
      include: {
        signatures: {
          include: {
            participant: true,
          },
        },
      },
    });

    if (!document) {
      throw new Error(`Document ${documentId} not found`);
    }

    const payload = {
      documentId: document.id,
      title: document.title,
      status: document.status,
      completedAt: document.completedAt,
      organizationId: document.organizationId,
      finalFileUrl: document.finalFileUrl,
      signatures: document.signatures.map((s) => ({
        participantEmail: s.participant.email,
        participantName: s.participant.fullName,
        role: s.participant.role,
        signedAt: s.signedAt,
        signatureHash: s.signatureHash,
      })),
    };

    await this.queueWebhook(organizationId, 'document.completed', payload);
  }
}

export const outboundWebhookService = new OutboundWebhookService();
