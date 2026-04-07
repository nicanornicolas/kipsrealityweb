import { NextResponse } from "next/server";
import { plaidClient, createStripeBankAccountToken } from "../../../../lib/payment/services/plaid-service";
import { prisma } from "@rentflow/iam";
import Stripe from "stripe";
import crypto from "crypto";

let stripeClient: Stripe | null = null;

function getStripeClient() {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecretKey) {
        throw new Error("Stripe not configured: STRIPE_SECRET_KEY is missing");
    }

    if (!stripeClient) {
        stripeClient = new Stripe(stripeSecretKey, {
            apiVersion: "2026-01-28.clover"
        });
    }

    return stripeClient;
}

export async function POST(req: Request) {
    try {
        const stripe = getStripeClient();
        const body = await req.json();
        const { publicToken, accountId, userId } = body; // Data from Frontend

        // 1. Exchange Public Token for Access Token
        const exchangeResponse = await plaidClient.itemPublicTokenExchange({
            public_token: publicToken,
        });
        const accessToken = exchangeResponse.data.access_token;

        // 2. Create Stripe Processor Token (The Bridge)
        const stripeToken = await createStripeBankAccountToken(accessToken, accountId);

        // 3. Get or Create Stripe Customer
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        let stripeCustomerId = user.stripeCustomerId;

        if (!stripeCustomerId) {
            const customer = await stripe.customers.create({ email: user.email });
            stripeCustomerId = customer.id;
            // Update DB with stripe ID
            await prisma.user.update({ where: { id: userId }, data: { stripeCustomerId } });
        }

        // 4. Save Bank Account to Stripe Customer
        const source = await stripe.customers.createSource(stripeCustomerId, {
            source: stripeToken, // This is the magic Plaid token
        });

        // 5. Save Plaid metadata to DB (Encrypted!)
        // NOTE: In production, encrypt `accessToken` before saving.
        await prisma.tenantPaymentMethod.create({
            data: {
                id: crypto.randomUUID(),
                userId,
                type: 'ACH',
                plaidAccessToken: accessToken, // ENCRYPT THIS
                plaidAccountId: accountId,
                stripePaymentMethodId: source.id,
                isDefault: true,
                updatedAt: new Date(),
            }
        });

        return NextResponse.json({ success: true });

    } catch (error: unknown) {
        console.error("Error connecting bank account:", error);
        const message = error instanceof Error ? error.message : "Failed to connect bank account";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

