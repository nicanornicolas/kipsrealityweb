import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from '@rentflow/iam';
import { prisma } from "@rentflow/iam";
import { PaymentFactory, PaymentRequest } from "@rentflow/payments";
import { PaymentMethod, TransactionStatus, Prisma } from "@prisma/client";

interface StrategyInitializeResult {
    gateway: string;
    transactionId: string;
    checkoutUrl?: string;
    redirectUrl?: string;
    url?: string;
    rawResponse?: {
        mpesaCheckoutId?: string;
        customerMessage?: string;
    };
}

export async function POST(req: NextRequest) {
    try {
        const user = await getCurrentUser(req);
        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await req.json();
        const { invoiceId, region } = body;

        if (!invoiceId) {
            return NextResponse.json({ error: "Invoice ID is required" }, { status: 400 });
        }

        const invoice = await prisma.invoice.findUnique({
            where: { id: invoiceId },
            include: {
                Lease: {
                    include: {
                        property: {
                            include: {
                                organization: true,
                            },
                        },
                    },
                },
            },
        });

        if (!invoice) {
            return NextResponse.json({ error: "Invoice not found" }, { status: 404 });
        }

        if (user.role === "TENANT" && invoice.Lease?.tenantId !== user.id) {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        const organization = invoice.Lease.property.organization;
        if (!organization) {
            return NextResponse.json({ error: "Organization not found for this invoice" }, { status: 404 });
        }

        const resolvedRegion = region === "USA" ? "USA" : organization.region || "KEN";
        const strategy = PaymentFactory.getStrategy(resolvedRegion);

        const fullUser = await prisma.user.findUnique({
            where: { id: user.id }
        });

        if (!fullUser) {
            return NextResponse.json({ error: "User record not found" }, { status: 404 });
        }

        const paymentRequest: PaymentRequest = {
            user: fullUser,
            organization: organization,
            amount: invoice.totalAmount,
            currency: "KES",
            invoiceId: invoice.id,
            metadata: {
                source: "web_app",
            },
        };

        if (resolvedRegion === 'USA') {
            paymentRequest.currency = 'USD';
        }
        const result = await strategy.initializePayment(paymentRequest) as StrategyInitializeResult;

        const paymentMethod =
            resolvedRegion === "KEN" && result.gateway === "MPESA_DIRECT"
                ? PaymentMethod.MPESA
                : PaymentMethod.CREDIT_CARD;
        
        const paymentData: Prisma.PaymentCreateInput = {
            invoice: { connect: { id: invoice.id } },
            amount: invoice.totalAmount, // Assuming full payment
            currency: paymentRequest.currency,
            gateway: result.gateway,
            gatewayReference: result.transactionId,
            status: TransactionStatus.PENDING,
            amountSubunits: Math.round(invoice.totalAmount * 100), // Approximate
            method: paymentMethod,
        };

        if (result.gateway === "MPESA_DIRECT" && result.rawResponse?.mpesaCheckoutId) {
            const metadata: Record<string, Prisma.InputJsonValue> = {
                checkoutRequestId: result.rawResponse.mpesaCheckoutId,
                customerMessage: result.rawResponse.customerMessage,
                initiatedAt: new Date().toISOString(),
            };
            
            // Only add phone number if it exists
            if (paymentRequest.user.phone) {
                metadata.phoneNumber = paymentRequest.user.phone;
            }
            
            paymentData.metadata = metadata;
        }

        await prisma.payment.create({
            data: paymentData,
        });

        const checkoutUrl = result.checkoutUrl || result.url || result.redirectUrl;

        if (!checkoutUrl) {
            return NextResponse.json({ error: "Payment provider did not return a checkout url" }, { status: 502 });
        }

        return NextResponse.json({ url: checkoutUrl, checkoutUrl });

    } catch (error: unknown) {
        console.error("Payment Initialization Error:", error);
        const errorMessage = error instanceof Error ? error.message : "Failed to initialize payment";
        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        );
    }
}

