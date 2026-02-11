import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/Getcurrentuser";
import { maintenanceService } from "@/lib/finance/maintenance-service";
import { maintenanceListingIntegration } from "@/lib/maintenance-listing-integration";
import { MaintenanceRequest_status } from "@prisma/client";

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { status, cost, isTenantChargeable } = await req.json();

  if (!id) {
    return NextResponse.json({ error: "Missing required id" }, { status: 400 });
  }

  try {
    const user = await getCurrentUser(req);
    if (!user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get current status before update for comparison
    const currentRequest = await prisma.maintenanceRequest.findUnique({
      where: { id },
      select: { status: true }
    });

    const updated = await prisma.maintenanceRequest.update({
      where: { id },
      data: {
        ...(status ? { status } : {}),
        ...(cost !== undefined ? { cost } : {}),
        ...(isTenantChargeable !== undefined ? { isTenantChargeable } : {}),
      },
    });

    // If status updated to COMPLETED, trigger financial billing
    if (status === MaintenanceRequest_status.COMPLETED && updated.cost && Number(updated.cost) > 0) {
      await maintenanceService.postMaintenanceBill(id);
    }

    // Handle listing integration if status changed
    if (status && currentRequest && currentRequest.status !== status) {
      await maintenanceListingIntegration.handleMaintenanceStatusChange(
        id,
        status,
        user.id
      );
    }

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Maintenance update error:', error);
    const errMsg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}
