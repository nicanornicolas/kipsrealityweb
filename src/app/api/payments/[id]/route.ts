import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/Getcurrentuser";
import { PostingStatus } from "@prisma/client";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getCurrentUser(req);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await context.params;
    
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

    // Authorization: check if user has access to this payment
    const orgUser = await prisma.organizationUser.findFirst({
      where: { userId: user.id },
    });

    if (!orgUser || payment.invoice.Lease.property.managerId !== orgUser.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    return NextResponse.json(payment);
  } catch (error) {
    console.error("Error fetching payment:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getCurrentUser(req);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await context.params;
    const body = await req.json();

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

    // Authorization
    const orgUser = await prisma.organizationUser.findFirst({
      where: { userId: user.id },
    });

    if (!orgUser || payment.invoice.Lease.property.managerId !== orgUser.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // Update payment - only allowed fields
    const updateData: { postingStatus?: PostingStatus; reference?: string } = {};
    if (body.postingStatus !== undefined) {
      updateData.postingStatus = body.postingStatus as PostingStatus;
    }
    if (body.reference !== undefined) {
      updateData.reference = body.reference;
    }

    const updatedPayment = await prisma.payment.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(updatedPayment);
  } catch (error) {
    console.error("Error updating payment:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
