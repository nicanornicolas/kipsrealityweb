var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var subscription_service_exports = {};
__export(subscription_service_exports, {
  SubscriptionService: () => SubscriptionService
});
module.exports = __toCommonJS(subscription_service_exports);
var import_client = require("@prisma/client");
var import_stripe = __toESM(require("stripe"));
const prisma = new import_client.PrismaClient();
class SubscriptionService {
  stripe;
  constructor() {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecretKey) {
      throw new Error("Stripe not configured: STRIPE_SECRET_KEY is missing");
    }
    this.stripe = new import_stripe.default(stripeSecretKey, {
      apiVersion: "2026-02-25.clover"
    });
  }
  /**
   * Creates a Stripe Checkout Session for upgrading a plan.
   * Returns the checkout URL for redirection.
   */
  async createCheckoutSession(userId, email, planName) {
    const normalizedPlanName = planName?.trim().toUpperCase();
    if (!["BUSINESS", "ENTERPRISE"].includes(normalizedPlanName)) {
      throw new Error("Invalid plan. Must be BUSINESS or ENTERPRISE.");
    }
    const checkoutPlan = normalizedPlanName;
    const org = await prisma.organization.findFirst({
      where: {
        users: {
          some: { userId }
        }
      },
      include: { plan: true }
    });
    if (!org) {
      throw new Error("Organization not found");
    }
    const targetPlan = await prisma.plan.findFirst({
      where: { name: checkoutPlan }
    });
    if (!targetPlan) {
      throw new Error(`Plan ${checkoutPlan} not found`);
    }
    const stripePriceIdMonthly = targetPlan.stripePriceIdMonthly || this.getStripePriceIdFromEnv(checkoutPlan);
    if (!stripePriceIdMonthly) {
      throw new Error(
        `Plan ${checkoutPlan} is not configured for Stripe billing. Set plan.stripePriceIdMonthly in DB or env (${this.getExpectedPriceEnvKeys(checkoutPlan).join(", ")}).`
      );
    }
    let stripeCustomerId = org.stripeConnectId || await this.getUserStripeCustomerId(userId);
    if (!stripeCustomerId) {
      const customer = await this.stripe.customers.create({
        email,
        name: `${org.name}`,
        metadata: {
          organizationId: org.id,
          userId
        }
      });
      stripeCustomerId = customer.id;
      await prisma.user.update({
        where: { id: userId },
        data: { stripeCustomerId }
      });
    }
    const session = await this.stripe.checkout.sessions.create({
      customer: stripeCustomerId,
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: stripePriceIdMonthly,
          quantity: 1
        }
      ],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/dashboard?canceled=true`,
      metadata: {
        organizationId: org.id,
        planId: targetPlan.id.toString(),
        planName: checkoutPlan,
        userId
      },
      allow_promotion_codes: true,
      billing_address_collection: "required"
    });
    if (!session.url) {
      throw new Error("Failed to create checkout session URL");
    }
    return session.url;
  }
  /**
   * Processes a Stripe webhook event.
   * Handles checkout.session.completed, invoice.payment_succeeded, and customer.subscription.deleted.
   */
  async processWebhook(payload, signature) {
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
    if (!endpointSecret) {
      throw new Error("Stripe webhook secret not configured");
    }
    const event = this.stripe.webhooks.constructEvent(payload, signature, endpointSecret);
    const webhookEvent = await prisma.webhookEvent.create({
      data: {
        gateway: "STRIPE",
        eventType: event.type,
        payload: JSON.parse(JSON.stringify(event)),
        status: "PROCESSING"
      }
    });
    try {
      switch (event.type) {
        case "checkout.session.completed": {
          await this.handleCheckoutSessionCompleted(event.data.object);
          break;
        }
        case "invoice.payment_succeeded": {
          await this.handleInvoicePaymentSucceeded(event.data.object);
          break;
        }
        case "customer.subscription.deleted": {
          await this.handleSubscriptionDeleted(event.data.object);
          break;
        }
        default:
          console.log(`Unhandled Stripe event: ${event.type}`);
      }
      await prisma.webhookEvent.update({
        where: { id: webhookEvent.id },
        data: { status: "PROCESSED" }
      });
    } catch (error) {
      console.error(`[Webhook Processing Error] ${event.type}`, error);
      await prisma.webhookEvent.update({
        where: { id: webhookEvent.id },
        data: {
          status: "FAILED",
          processingError: error instanceof Error ? error.message : "Unknown error"
        }
      });
      throw error;
    }
  }
  getStripePriceIdFromEnv(planName) {
    const keys = this.getExpectedPriceEnvKeys(planName);
    for (const key of keys) {
      const value = process.env[key];
      if (value?.trim()) return value.trim();
    }
    return void 0;
  }
  getExpectedPriceEnvKeys(planName) {
    return [
      `STRIPE_PRICE_ID_${planName}_MONTHLY`,
      `STRIPE_PRICE_ID_${planName}`
    ];
  }
  /**
   * Processes a verified Stripe event (used by background worker).
   */
  async processEvent(event) {
    switch (event.type) {
      case "checkout.session.completed": {
        await this.handleCheckoutSessionCompleted(event.data.object);
        break;
      }
      case "invoice.payment_succeeded": {
        await this.handleInvoicePaymentSucceeded(event.data.object);
        break;
      }
      case "customer.subscription.deleted": {
        await this.handleSubscriptionDeleted(event.data.object);
        break;
      }
      default:
        console.log(`Unhandled Stripe event: ${event.type}`);
    }
  }
  /**
   * Gets or creates a Stripe Customer ID for a user.
   */
  async getUserStripeCustomerId(userId) {
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
  async handleCheckoutSessionCompleted(session) {
    const { organizationId, planId, planName } = session.metadata || {};
    if (!organizationId || !planId) {
      console.error("[Stripe Webhook] Missing metadata in checkout session", session.id);
      return;
    }
    const targetPlanId = parseInt(planId, 10);
    const org = await prisma.organization.findUnique({
      where: { id: organizationId },
      include: { plan: true }
    });
    if (!org) {
      console.error("[Stripe Webhook] Organization not found", organizationId);
      return;
    }
    if (org.planId === targetPlanId) {
      console.log(`[Stripe Webhook] Organization ${org.id} already on plan ${planName}`);
      return;
    }
    const previousPlanId = org.planId;
    await prisma.organization.update({
      where: { id: organizationId },
      data: { planId: targetPlanId }
    });
    await prisma.subscriptionEvent.create({
      data: {
        organizationId,
        eventType: "UPGRADE",
        fromPlanId: previousPlanId || void 0,
        toPlanId: targetPlanId,
        triggeredBy: session.metadata?.userId || "SYSTEM"
      }
    });
    console.log(`[Stripe Webhook] Organization ${org.id} upgraded from ${previousPlanId} to ${targetPlanId}`);
  }
  /**
   * Handles invoice.payment_succeeded event.
   * Logs recurring billing payments.
   */
  async handleInvoicePaymentSucceeded(invoice) {
    const invoiceData = invoice;
    const subscriptionId = typeof invoiceData.subscription === "string" ? invoiceData.subscription : invoiceData.subscription?.id;
    if (!subscriptionId) return;
    const subscription = await this.stripe.subscriptions.retrieve(subscriptionId);
    const { organizationId } = subscription.metadata || {};
    if (!organizationId) {
      console.error("[Stripe Webhook] Missing organizationId in subscription metadata", subscriptionId);
      return;
    }
    await prisma.subscriptionEvent.create({
      data: {
        organizationId,
        eventType: "RENEWAL",
        toPlanId: null,
        fromPlanId: null,
        triggeredBy: "SYSTEM"
      }
    });
    console.log(`[Stripe Webhook] Renewal payment successful for organization ${organizationId}`);
  }
  /**
   * Handles customer.subscription.deleted event.
   * Downgrades the Organization to FREE tier.
   */
  async handleSubscriptionDeleted(subscription) {
    const { organizationId } = subscription.metadata || {};
    if (!organizationId) {
      console.error("[Stripe Webhook] Missing organizationId in subscription", subscription.id);
      return;
    }
    const freePlan = await prisma.plan.findFirst({
      where: { name: "FREE" }
    });
    if (!freePlan) {
      console.error("[Stripe Webhook] FREE plan not found");
      return;
    }
    await prisma.organization.update({
      where: { id: organizationId },
      data: { planId: freePlan.id }
    });
    await prisma.subscriptionEvent.create({
      data: {
        organizationId,
        eventType: "CANCELED",
        fromPlanId: null,
        toPlanId: freePlan.id,
        triggeredBy: "SYSTEM"
      }
    });
    console.log(`[Stripe Webhook] Organization ${organizationId} downgraded to FREE`);
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SubscriptionService
});
//# sourceMappingURL=subscription-service.js.map
