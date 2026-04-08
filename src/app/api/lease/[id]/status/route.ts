// API endpoint for updating lease status with listing integration
import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@rentflow/iam";
import { LeaseStatusError, leaseStatusService } from "@rentflow/lease";
import { LeaseStatus } from "@prisma/client";

export async function PUT(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id: leaseId } = await params;
        const user = await getCurrentUser(req);
        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const { status, reason } = await req.json();

        const data = await leaseStatusService.updateStatus({
            leaseId,
            status: status as LeaseStatus,
            reason,
            userId: user.id,
        });

        return NextResponse.json({
            success: true,
            data,
        });

    } catch (error) {
        if (error instanceof LeaseStatusError) {
            return NextResponse.json({ error: error.message }, { status: error.status });
        }
        console.error("Error updating lease status:", error);
        return NextResponse.json(
            { error: "Failed to update lease status" },
            { status: 500 }
        );
    }
}

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id: leaseId } = await params;
        const user = await getCurrentUser(req);
        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const data = await leaseStatusService.getStatusDetails({
            leaseId,
            userId: user.id,
        });

        return NextResponse.json({
            success: true,
            data,
        });

    } catch (error) {
        if (error instanceof LeaseStatusError) {
            return NextResponse.json({ error: error.message }, { status: error.status });
        }
        console.error("Error fetching lease status:", error);
        return NextResponse.json(
            { error: "Failed to fetch lease status" },
            { status: 500 }
        );
    }
}
