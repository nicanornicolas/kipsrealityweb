import { NextResponse } from "next/server";
import { prisma } from "@rentflow/iam";
import { getCurrentUser } from '@rentflow/iam';
import { InvoiceStatus, Prisma } from "@prisma/client";

export async function GET(req: Request) {
  try {
    // Get the current logged-in user
    const user = await getCurrentUser(req);

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const tenantId = user.id;
    const url = new URL(req.url);
    const status = url.searchParams.get("status");

    const allowedStatuses = status === "PENDING"
      ? [InvoiceStatus.PENDING, InvoiceStatus.OVERDUE]
      : status === "PAID"
        ? [InvoiceStatus.PAID]
        : undefined;

    const where: Prisma.InvoiceWhereInput = {
      Lease: {
        tenantId,
      },
      ...(allowedStatuses ? { status: { in: allowedStatuses } } : {}),
    };

    const invoices = await prisma.invoice.findMany({
      where,
      orderBy: { dueDate: "asc" },
      include: {
        payments: true,
      },
    });

    const normalized = invoices.map((invoice) => ({
      id: invoice.id,
      amount: Number(invoice.totalAmount ?? 0),
      status: invoice.status,
      postingStatus: invoice.postingStatus,
      description: invoice.description || "Rent Invoice",
      dueDate: invoice.dueDate,
      createdAt: invoice.createdAt,
    }));

    return NextResponse.json({ invoices: normalized });
  } catch (error) {
    console.error("Error fetching invoices for tenant:", error);
    return NextResponse.json({ error: "Failed to fetch invoices" }, { status: 500 });
  }
}

