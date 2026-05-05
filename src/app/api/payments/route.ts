// /app/api/payments/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@rentflow/iam";
import { getCurrentUser } from '@rentflow/iam';

export async function GET(req: Request) {
  try {
    const user = await getCurrentUser(req);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const url = new URL(req.url);

    if (user.role === "TENANT") {
      const payments = await prisma.payment.findMany({
        where: {
          invoice: {
            Lease: {
              tenantId: user.id,
            },
          },
        },
        include: {
          invoice: true,
        },
        orderBy: { paidOn: "desc" },
      });

      const normalizedPayments = payments.map((payment) => ({
        id: payment.id,
        amount: Number(payment.amount ?? 0),
        status:
          payment.status === "SUCCESS"
            ? "COMPLETED"
            : payment.status === "FAILED"
              ? "FAILED"
              : "PENDING",
        paidOn: payment.paidOn,
        reference: payment.gatewayReference || payment.reference || payment.id,
        invoice: {
          description: payment.invoice?.description || "Payment",
        },
      }));

      return NextResponse.json({ payments: normalizedPayments });
    }

    if (user.role === "PROPERTY_MANAGER" || user.role === "SYSTEM_ADMIN") {
      const orgUser = await prisma.organizationUser.findFirst({
        where: { userId: user.id },
      });

      if (!orgUser) {
        return NextResponse.json({ error: "User not linked to organization" }, { status: 404 });
      }

      const propertyId = url.searchParams.get("propertyId");
      const unitId = url.searchParams.get("unitId");

      const payments = await prisma.payment.findMany({
        where: {
          invoice: {
            Lease: {
              property: { managerId: orgUser.id },
              ...(propertyId ? { propertyId } : {}),
              ...(unitId ? { unitId } : {}),
            },
          },
        },
        include: {
          invoice: {
            include: {
              Lease: {
                include: {
                  property: true,
                  unit: true,
                  tenant: true,
                },
              },
            },
          },
        },
        orderBy: { paidOn: "desc" },
      });

      return NextResponse.json({ payments });
    }

    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  } catch (error) {
    console.error("Error fetching payments:", error);
    return NextResponse.json({
      error: "Failed to fetch payments",
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
}

