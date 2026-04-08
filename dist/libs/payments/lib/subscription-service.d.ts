import { default as Stripe } from 'stripe';
export declare class SubscriptionService {
    private stripe;
    constructor();
    /**
     * Creates a Stripe Checkout Session for upgrading a plan.
     * Returns the checkout URL for redirection.
     */
    createCheckoutSession(userId: string, email: string, planName: string): Promise<string>;
    /**
     * Processes a Stripe webhook event.
     * Handles checkout.session.completed, invoice.payment_succeeded, and customer.subscription.deleted.
     */
    processWebhook(payload: string, signature: string): Promise<void>;
    /**
     * Processes a verified Stripe event (used by background worker).
     */
    processEvent(event: Stripe.Event): Promise<void>;
    /**
     * Gets or creates a Stripe Customer ID for a user.
     */
    private getUserStripeCustomerId;
    /**
     * Handles checkout.session.completed event.
     * Upgrades the Organization's plan.
     */
    private handleCheckoutSessionCompleted;
    /**
     * Handles invoice.payment_succeeded event.
     * Logs recurring billing payments.
     */
    private handleInvoicePaymentSucceeded;
    /**
     * Handles customer.subscription.deleted event.
     * Downgrades the Organization to FREE tier.
     */
    private handleSubscriptionDeleted;
}
