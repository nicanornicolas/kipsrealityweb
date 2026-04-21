import { PrismaClient } from '@prisma/client';
import Stripe from 'stripe';

const prisma = new PrismaClient();

export class SubscriptionService {
  private stripe: Stripe;

  constructor() {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecretKey) {
      throw new Error('Stripe not configured: STRIPE_SECRET_KEY is missing');
    }

    this.stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2026-02-25.clover',
    });
  }

  /**
   * Creates a Stripe Checkout Session for upgrading a plan.
   * Returns the checkout URL for redirection.
   */
  async createCheckoutSession(
    userId: string,
    email: string,
    planName: string
  ): Promise<string> {
    const normalizedPlanName = planName?.trim().toUpperCase();

    if (!['BUSINESS', 'ENTERPRISE'].includes(normalizedPlanName)) {
      throw new Error('Invalid plan. Must be BUSINESS or ENTERPRISE.');
    }
    const checkoutPlan = normalizedPlanName as 'BUSINESS' | 'ENTERPRISE';

    // 1. Get the Organization
    const org = await prisma.organization.findFirst({
      where: {
        users: {
          some: { userId }
        }
      },
      include: { plan: true }
    });

    if (!org) {
      throw new Error('Organization not found');
    }

    // 2. Get the target Plan with Stripe price IDs
    const targetPlan = await prisma.plan.findFirst({
      where: { name: checkoutPlan }
    });

    if (!targetPlan) {
      throw new Error(`Plan ${checkoutPlan} not found`);
    }

    const stripePriceIdMonthly =
      targetPlan.stripePriceIdMonthly ||
      this.getStripePriceIdFromEnv(checkoutPlan);

    if (!stripePriceIdMonthly) {
      throw new Error(
        `Plan ${checkoutPlan} is not configured for Stripe billing. ` +
        `Set plan.stripePriceIdMonthly in DB or env (${this.getExpectedPriceEnvKeys(checkoutPlan).join(', ')}).`
      );
    }

    // 3. Get or Create Stripe Customer
    let stripeCustomerId = org.stripeConnectId || (await this.getUserStripeCustomerId(userId));

    if (!stripeCustomerId) {
      const customer = await this.stripe.customers.create({
        email,
        name: `${org.name}`,
        metadata: {
          organizationId: org.id,
          userId,
        },
      });
      stripeCustomerId = customer.id;

      // Save to database
      await prisma.user.update({
        where: { id: userId },
        data: { stripeCustomerId },
      });
    }

    // 4. Create Stripe Checkout Session
    const session = await this.stripe.checkout.sessions.create({
      customer: stripeCustomerId,
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: stripePriceIdMonthly,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/dashboard?canceled=true`,
      metadata: {
        organizationId: org.id,
        planId: targetPlan.id.toString(),
        planName: checkoutPlan,
        userId,
      },
      allow_promotion_codes: true,
      billing_address_collection: 'required',
    });

    if (!session.url) {
      throw new Error('Failed to create checkout session URL');
    }

    return session.url;
  }

  /**
   * Processes a Stripe webhook event.
   * Handles checkout.session.completed, invoice.payment_succeeded, and customer.subscription.deleted.
   */
  async processWebhook(payload: string, signature: string): Promise<void> {
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
    if (!endpointSecret) {
      throw new Error('Stripe webhook secret not configured');
    }

    // 1. Verify signature
    const event = this.stripe.webhooks.constructEvent(payload, signature, endpointSecret);

    // 2. Store the event for audit/retry purposes
    const webhookEvent = await prisma.webhookEvent.create({
      data: {
        gateway: 'STRIPE',
        eventType: event.type,
        payload: JSON.parse(JSON.stringify(event)),
        status: 'PROCESSING',
      },
    });

    try {
      switch (event.type) {
        case 'checkout.session.completed': {
          await this.handleCheckoutSessionCompleted(event.data.object as Stripe.Checkout.Session);
          break;
        }
        case 'invoice.payment_succeeded': {
          await this.handleInvoicePaymentSucceeded(event.data.object as Stripe.Invoice);
          break;
        }
        case 'customer.subscription.deleted': {
          await this.handleSubscriptionDeleted(event.data.object as Stripe.Subscription);
          break;
        }
        default:
          console.log(`Unhandled Stripe event: ${event.type}`);
      }

      // Mark as processed
      await prisma.webhookEvent.update({
        where: { id: webhookEvent.id },
        data: { status: 'PROCESSED' },
      });
    } catch (error: unknown) {
      console.error(`[Webhook Processing Error] ${event.type}`, error);
      await prisma.webhookEvent.update({
        where: { id: webhookEvent.id },
        data: {
          status: 'FAILED',
          processingError: error instanceof Error ? error.message : 'Unknown error',
        },
      });
      throw error; // Re-throw so the route can return appropriate status
    }
  }

  private getStripePriceIdFromEnv(planName: 'BUSINESS' | 'ENTERPRISE'): string | undefined {
    const keys = this.getExpectedPriceEnvKeys(planName);
    for (const key of keys) {
      const value = process.env[key];
      if (value?.trim()) return value.trim();
    }
    return undefined;
  }

  private getExpectedPriceEnvKeys(planName: 'BUSINESS' | 'ENTERPRISE'): string[] {
    return [
      `STRIPE_PRICE_ID_${planName}_MONTHLY`,
      `STRIPE_PRICE_ID_${planName}`,
    ];
  }

  /**
   * Processes a verified Stripe event (used by background worker).
   */
  async processEvent(event: Stripe.Event): Promise<void> {
    switch (event.type) {
      case 'checkout.session.completed': {
        await this.handleCheckoutSessionCompleted(event.data.object as Stripe.Checkout.Session);
        break;
      }
      case 'invoice.payment_succeeded': {
        await this.handleInvoicePaymentSucceeded(event.data.object as Stripe.Invoice);
        break;
      }
      case 'customer.subscription.deleted': {
        await this.handleSubscriptionDeleted(event.data.object as Stripe.Subscription);
        break;
      }
      default:
        console.log(`Unhandled Stripe event: ${event.type}`);
    }
  }

  /**
   * Gets or creates a Stripe Customer ID for a user.
   */
  private async getUserStripeCustomerId(userId: string): Promise<string | null> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { stripeCustomerId: true }
    });

    return user?.stripeCustomerId || null;
  }

  /**
   * Handles checkout.session.completed event.
   * Upgrades the Organization's plan.
   */
  private async handleCheckoutSessionCompleted(session: Stripe.Checkout.Session): Promise<void> {
    const { organizationId, planId, planName } = session.metadata || {};

    if (!organizationId || !planId) {
      console.error('[Stripe Webhook] Missing metadata in checkout session', session.id);
      return;
    }

    const targetPlanId = parseInt(planId, 10);

    // 1. Get current organization
    const org = await prisma.organization.findUnique({
      where: { id: organizationId },
      include: { plan: true },
    });

    if (!org) {
      console.error('[Stripe Webhook] Organization not found', organizationId);
      return;
    }

    // 2. Skip if already on this plan (idempotency)
    if (org.planId === targetPlanId) {
      console.log(`[Stripe Webhook] Organization ${org.id} already on plan ${planName}`);
      return;
    }

    const previousPlanId = org.planId;

    // 3. Update the Organization's plan
    await prisma.organization.update({
      where: { id: organizationId },
      data: { planId: targetPlanId },
    });

    // 4. Log the subscription event
    await prisma.subscriptionEvent.create({
      data: {
        organizationId,
        eventType: 'UPGRADE',
        fromPlanId: previousPlanId || undefined,
        toPlanId: targetPlanId,
        triggeredBy: session.metadata?.userId || 'SYSTEM',
      },
    });

    console.log(`[Stripe Webhook] Organization ${org.id} upgraded from ${previousPlanId} to ${targetPlanId}`);
  }

  /**
   * Handles invoice.payment_succeeded event.
   * Logs recurring billing payments.
   */
  private async handleInvoicePaymentSucceeded(invoice: Stripe.Invoice): Promise<void> {
    // The subscription field may be a string ID or expanded object
    const invoiceData = invoice as any;
    const subscriptionId = typeof invoiceData.subscription === 'string'
      ? invoiceData.subscription
      : invoiceData.subscription?.id;

    if (!subscriptionId) return;

    const subscription = await this.stripe.subscriptions.retrieve(subscriptionId);
    const { organizationId } = subscription.metadata || {};

    if (!organizationId) {
      console.error('[Stripe Webhook] Missing organizationId in subscription metadata', subscriptionId);
      return;
    }

    // Log the payment event
    await prisma.subscriptionEvent.create({
      data: {
        organizationId,
        eventType: 'RENEWAL',
        toPlanId: null,
        fromPlanId: null,
        triggeredBy: 'SYSTEM',
      },
    });

    console.log(`[Stripe Webhook] Renewal payment successful for organization ${organizationId}`);
  }

  /**
   * Handles customer.subscription.deleted event.
   * Downgrades the Organization to FREE tier.
   */
  private async handleSubscriptionDeleted(subscription: Stripe.Subscription): Promise<void> {
    const { organizationId } = subscription.metadata || {};

    if (!organizationId) {
      console.error('[Stripe Webhook] Missing organizationId in subscription', subscription.id);
      return;
    }

    // Downgrade to FREE tier
    const freePlan = await prisma.plan.findFirst({
      where: { name: 'FREE' }
    });

    if (!freePlan) {
      console.error('[Stripe Webhook] FREE plan not found');
      return;
    }

    await prisma.organization.update({
      where: { id: organizationId },
      data: { planId: freePlan.id },
    });

    await prisma.subscriptionEvent.create({
      data: {
        organizationId,
        eventType: 'CANCELED',
        fromPlanId: null,
        toPlanId: freePlan.id,
        triggeredBy: 'SYSTEM',
      },
    });

    console.log(`[Stripe Webhook] Organization ${organizationId} downgraded to FREE`);
  }
}
