//app/api/lease/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@rentflow/iam";
import { getCurrentUser } from "@rentflow/iam";
import { toNumber } from "../../../../lib/decimal-utils";

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const data = await req.json();

    const lease = await prisma.lease.update({
      where: { id },
      data,
      include: {
        tenant: true,
        property: true,
        unit: true,
        application: true,
      }
    });

    return NextResponse.json(lease);

  } catch (error: unknown) {
    console.error("Lease update error:", error);
    const err = error as { code?: string; message?: string };

    if (err.code === "P2025") {
      return NextResponse.json({ error: "Lease not found" }, { status: 404 });
    }

    return NextResponse.json(
      { error: err.message ?? "Failed to update lease" },
      { status: 500 }
    );
  }
}

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> } // ✅ Added Promise
) {
  try {
    const { id } = await context.params; // ✅ Added await
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");

    let user = null;
    let isValidTenant = false;

    // Try to get authenticated user
    try {
      user = await getCurrentUser(req);
    } catch (error) {
      console.log("User not authenticated, checking for invite token");
    }

    // If no authenticated user but token provided, validate invite
    if (!user && token) {
      const invite = await prisma.invite.findUnique({
        where: { token },
        include: { lease: true },
      });

      if (invite && invite.leaseId === id) {
        isValidTenant = true;
        console.log("Valid tenant invite token provided");
      }
    }

    const lease = await prisma.lease.findUnique({
      where: { id },
      include: {
        tenant: true,
        property: true,
        unit: true,
        invoices: {
          include: {
            payments: true,
          },
        },
      },
    });

    if (!lease) {
      return NextResponse.json({ error: "Lease not found" }, { status: 404 });
    }

    // Determine user role
    let userRole: "landlord" | "tenant" | null = null;

    if (user) {
      if (lease.property?.managerId === user.organizationUserId) {
        userRole = "landlord";
      } else if (lease.tenantId === user.id) {
        userRole = "tenant";
      }
    } else if (isValidTenant) {
      userRole = "tenant";
    }

    // 🧮 Balance calculation
    const totalInvoiced = lease.invoices.reduce((sum, inv) => sum + Number(inv.totalAmount), 0);
    const totalPaid = lease.invoices.reduce(
      (sum, inv) => sum + inv.payments.reduce((pSum, p) => pSum + Number(p.amount), 0),
      0
    );
    const balance = totalInvoiced - totalPaid;

    console.log("Determined role:", userRole);

    // Return all lease data plus computed balance
    return NextResponse.json({
      ...lease,
      userRole,
      financialSummary: {
        totalInvoiced,
        totalPaid,
        balance,
      },
    });
  } catch (error) {
    console.error("Error fetching lease:", error);
    return NextResponse.json({ error: "Failed to fetch lease" }, { status: 500 });
  }
}
