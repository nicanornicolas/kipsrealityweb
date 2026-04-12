import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/Getcurrentuser";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const user = await getCurrentUser(req);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const payment = await prisma.payment.findUnique({
      where: { id },
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
    });

    if (!payment) {
      return NextResponse.json({ error: "Payment not found" }, { status: 404 });
    }

    const isTenant =
      user.role === "TENANT" && payment.invoice?.Lease?.tenant?.id === user.id;

    const isPropertyManager =
      user.role === "PROPERTY_MANAGER" &&
      payment.invoice?.Lease?.property?.managerId
        ? await prisma.organizationUser.findFirst({
            where: { userId: user.id, id: payment.invoice.Lease.property.managerId },
          })
        : null;

    const isSystemAdmin = user.role === "SYSTEM_ADMIN";

    if (!isTenant && !isPropertyManager && !isSystemAdmin) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    return NextResponse.json({
      id: payment.id,
      status: payment.status,
      gateway: payment.gateway,
      amount: Number(payment.amount),
      currency: payment.currency,
      paidOn: payment.paidOn,
      invoiceId: payment.invoiceId,
    });
  } catch (error) {
    console.error("Error fetching payment:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch payment",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
