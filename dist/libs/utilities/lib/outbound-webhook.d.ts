export interface WebhookPayload {
    event: string;
    timestamp: string;
    data: Record<string, unknown>;
}
export declare class OutboundWebhookService {
    fireEvent(targetUrl: string, eventType: string, payload: Record<string, unknown>, secret?: string): Promise<void>;
    queueWebhook(organizationId: string, eventType: string, payload: Record<string, unknown>): Promise<void>;
    dispatchDocumentCompleted(documentId: string, organizationId: string): Promise<void>;
}
export declare const outboundWebhookService: OutboundWebhookService;
