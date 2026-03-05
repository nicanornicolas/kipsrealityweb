// GET /api/utilities/[id]/readings - Get readings for utility
// POST /api/utilities/[id]/readings - Add new reading

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(
    _req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id: utilityId } = await params;

        // Get utility to verify it exists
        const utility = await prisma.utility.findUnique({
            where: { id: utilityId },
            select: { id: true, name: true },
        });

        if (!utility) {
            return NextResponse.json(
                { success: false, error: "Utility not found" },
                { status: 404 }
            );
        }

        // Get all readings for lease utilities that use this utility
        const readings = await prisma.utilityReading.findMany({
            where: {
                leaseUtility: {
                    utilityId: utilityId,
                },
            },
            include: {
                leaseUtility: {
                    include: {
                        utility: true,
                        lease: {
                            include: {
                                tenant: true,
                                unit: true,
                                property: true,
                            },
                        },
                    },
                },
            },
            orderBy: { readingDate: "desc" },
        });

        const formatted = readings.map((r: any) => ({
            id: r.id,
            leaseUtilityId: r.leaseUtilityId,
            readingValue: r.readingValue,
            amount: r.amount,
            readingDate: r.readingDate,
            createdAt: r.createdAt,
            unit: {
                id: r.leaseUtility.lease?.unit?.id,
                unitNumber: r.leaseUtility.lease?.unit?.unitNumber,
            },
            tenant: {
                name: r.leaseUtility.lease?.tenant
                    ? `${r.leaseUtility.lease.tenant?.firstName ?? ""} ${r.leaseUtility.lease.tenant?.lastName ?? ""}`.trim() || "Unknown"
                    : "Unknown",
            },
            property: {
                id: r.leaseUtility.lease?.property?.id,
                name: r.leaseUtility.lease?.property?.name,
            },
        }));

        return NextResponse.json({ success: true, data: formatted });
    } catch (error) {
        console.error("GET readings error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to fetch readings" },
            { status: 500 }
        );
    }
}

export async function POST(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id: utilityId } = await params;
        const body = await req.json();
        const { leaseUtilityId, readingValue, readingDate } = body;

        if (!leaseUtilityId || readingValue == null) {
            return NextResponse.json(
                { success: false, error: "INVALID_INPUT", message: "leaseUtilityId and readingValue are required" },
                { status: 400 }
            );
        }

        // Verify lease utility exists and uses this utility
        const leaseUtility = await prisma.leaseUtility.findUnique({
            where: { id: leaseUtilityId },
            include: {
                utility: true,
                lease: { select: { leaseStatus: true } },
            },
        });

        if (!leaseUtility) {
            return NextResponse.json(
                { success: false, error: "LEASE_UTILITY_NOT_FOUND" },
                { status: 404 }
            );
        }

        if (leaseUtility.utilityId !== utilityId) {
            return NextResponse.json(
                { success: false, error: "INVALID_INPUT", message: "Lease utility does not match utility" },
                { status: 400 }
            );
        }

        // Check lease is active
        if (leaseUtility.lease.leaseStatus !== "ACTIVE") {
            return NextResponse.json(
                { success: false, error: "LEASE_NOT_ACTIVE" },
                { status: 400 }
            );
        }

        // Check tenant responsibility
        if (!leaseUtility.isTenantResponsible) {
            return NextResponse.json(
                { success: false, error: "UTILITY_NOT_TENANT_RESPONSIBLE" },
                { status: 400 }
            );
        }

        // Check for negative values
        if (readingValue < 0) {
            return NextResponse.json(
                { success: false, error: "NEGATIVE_VALUE" },
                { status: 400 }
            );
        }

        // Get previous reading and validate monotonic increase
        const previous = await prisma.utilityReading.findFirst({
            where: { leaseUtilityId: leaseUtilityId },
            orderBy: { readingDate: "desc" },
        });

        if (previous && readingValue < previous.readingValue) {
            return NextResponse.json(
                { success: false, error: "DECREASING_VALUE" },
                { status: 400 }
            );
        }

        // Calculate amount based on consumption
        const prevVal = previous?.readingValue ?? 0;
        const consumption = readingValue - prevVal;
        const amount = consumption * (leaseUtility.utility.unitPrice ?? 0);

        // Create reading
        const newReading = await prisma.utilityReading.create({
            data: {
                leaseUtilityId: leaseUtilityId,
                readingValue: readingValue,
                readingDate: readingDate ? new Date(readingDate) : new Date(),
                amount,
            },
        });

        return NextResponse.json({
            success: true,
            data: { readingId: newReading.id },
        });
    } catch (error) {
        console.error("POST reading error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to create reading" },
            { status: 500 }
        );
    }
}

