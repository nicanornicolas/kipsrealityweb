import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { UtilityBillStatus } from "@prisma/client";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: utilityId } = await params;

    const utility = await prisma.utility.findUnique({
      where: { id: utilityId },
      select: { id: true },
    });

    if (!utility) {
      return NextResponse.json(
        { success: false, error: "UTILITY_NOT_FOUND" },
        { status: 404 }
      );
    }

    const now = new Date();

    const bill = await prisma.utilityBill.findFirst({
      where: {
        utilityId: utility.id,
        status: { in: [UtilityBillStatus.APPROVED, UtilityBillStatus.POSTED] },
        AND: [
          {
            OR: [
              { periodStart: null },
              { periodStart: { lte: now } },
            ],
          },
          {
            OR: [
              { periodEnd: null },
              { periodEnd: { gte: now } },
            ],
          },
        ],
      },
      orderBy: { billDate: "desc" },
    });

    if (!bill) {
      return NextResponse.json({ success: true, data: null });
    }

    return NextResponse.json({
      success: true,
      data: {
        id: bill.id,
        propertyId: bill.propertyId,
        providerName: bill.providerName,
        totalAmount: Number(bill.totalAmount),
        dueDate: bill.dueDate,
        billDate: bill.billDate,
        periodStart: bill.periodStart,
        periodEnd: bill.periodEnd,
        splitMethod: bill.splitMethod,
        status: bill.status,
      },
    });
  } catch (error) {
    console.error("Active bill lookup error:", error);
    return NextResponse.json(
      { success: false, error: "FAILED_TO_FETCH_ACTIVE_BILL" },
      { status: 500 }
    );
  }
}
