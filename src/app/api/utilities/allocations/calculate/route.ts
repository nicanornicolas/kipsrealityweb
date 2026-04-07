import { NextRequest, NextResponse } from "next/server";
import { utilityService } from "@rentflow/finance";
import { UtilitySplitMethod } from "@prisma/client";
import { AllocationMethod, UtilityAllocationPayload } from "@rentflow/utilities";

const mapSplitMethod = (splitMethod: UtilitySplitMethod): AllocationMethod => {
  switch (splitMethod) {
    case UtilitySplitMethod.OCCUPANCY_BASED:
      return "RUBS_OCCUPANCY";
    case UtilitySplitMethod.SQ_FOOTAGE:
      return "SQUARE_FOOTAGE";
    case UtilitySplitMethod.AI_OPTIMIZED:
      return "AI_SUGGESTED";
    case UtilitySplitMethod.EQUAL:
    default:
      return "EQUAL_SPLIT";
  }
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const billId = body?.billId ?? body?.utilityBillId;

    if (!billId || typeof billId !== "string") {
      return NextResponse.json(
        { success: false, error: "INVALID_INPUT", message: "billId is required" },
        { status: 400 }
      );
    }

    const result = await utilityService.calculateAllocations(billId);

    const payload: UtilityAllocationPayload = {
      utilityBillId: result.utilityBill.id,
      propertyId: result.utilityBill.propertyId,
      providerName: (result.utilityBill.providerName as "KPLC" | "NAIROBI_WATER" | "OTHER") || "OTHER",
      totalAmount: Number(result.totalAmount),
      dueDate: result.utilityBill.dueDate.toISOString(),
      splitMethod: mapSplitMethod(result.utilityBill.splitMethod),
      confidenceScore: 1.0,
      flags: [{ type: "INFO", message: "Manual allocation calculated locally." }],
      allocations: result.allocations.map((alloc) => ({
        unitId: alloc.unitId,
        tenantId: alloc.tenantId ?? "unknown",
        amount: Number(alloc.amount),
        percentage: Number(alloc.percentage),
        explanation: `Calculated from ${mapSplitMethod(result.utilityBill.splitMethod).replace("_", " ").toLowerCase()} method.`,
      })),
    };

    return NextResponse.json({ success: true, data: payload });
  } catch (error: any) {
    console.error("Allocation calculate error:", error);
    return NextResponse.json(
      { success: false, error: "CALCULATION_FAILED", message: error?.message ?? "Failed to calculate allocations" },
      { status: 500 }
    );
  }
}
