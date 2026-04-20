// API endpoint for fetching lease status changes and their listing integration impact
import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from '@rentflow/iam';
import {
    LeaseStatusChangesError,
    leaseStatusChangesService,
} from "@rentflow/lease";

export async function GET(req: NextRequest) {
    try {
        const user = await getCurrentUser(req);
        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const url = new URL(req.url);
        const propertyId = url.searchParams.get("propertyId");
        const unitId = url.searchParams.get("unitId");
        const limit = parseInt(url.searchParams.get("limit") || "20");

        const { changes, total } = await leaseStatusChangesService.getStatusChanges({
            userId: user.id,
            propertyId,
            unitId,
            limit,
        });

        return NextResponse.json({
            success: true,
            changes,
            total,
        });

    } catch (error) {
        if (error instanceof LeaseStatusChangesError) {
            return NextResponse.json({ error: error.message }, { status: error.status });
        }
        console.error("Error fetching lease status changes:", error);
        return NextResponse.json(
            { error: "Failed to fetch lease status changes" },
            { status: 500 }
        );
    }
}

export async function POST(req: NextRequest) {
    try {
        const user = await getCurrentUser(req);
        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { unitId, action } = await req.json();

        if (!unitId || !action) {
            return NextResponse.json(
                { error: "Missing unitId or action" },
                { status: 400 }
            );
        }
        const result = await leaseStatusChangesService.processListingDecision({
            userId: user.id,
            unitId,
            action,
        });

        return NextResponse.json({
            success: true,
            data: result
        });

    } catch (error) {
        if (error instanceof LeaseStatusChangesError) {
            return NextResponse.json({ error: error.message }, { status: error.status });
        }
        console.error("Error processing listing decision:", error);
        return NextResponse.json(
            { error: "Failed to process listing decision" },
            { status: 500 }
        );
    }
}

