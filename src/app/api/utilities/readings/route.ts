import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@rentflow/iam";

/**
 * GET /api/utilities/readings
 * Fetches utility readings with optional filtering
 */
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const propertyId = searchParams.get("propertyId");
        const utilityId = searchParams.get("utilityId");

        // Fetch readings with explicit select
        const readings = await prisma.utilityReading.findMany({
            select: {
                id: true,
                leaseUtilityId: true,
                readingValue: true,
                amount: true,
                readingDate: true,
                createdAt: true,
                leaseUtility: {
                    select: {
                        utilityId: true,
                        utility: {
                            select: {
                                name: true,
                            },
                        },
                        lease: {
                            select: {
                                unitId: true,
                                propertyId: true,
                                unit: {
                                    select: {
                                        unitNumber: true,
                                    },
                                },
                                property: {
                                    select: {
                                        name: true,
                                        address: true,
                                    },
                                },
                                tenant: {
                                    select: {
                                        id: true,
                                        firstName: true,
                                        lastName: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
            orderBy: { readingDate: "desc" },
        });

        // Filter by property/utility if provided
        const filtered = readings.filter((r: any) => {
            const matchProperty = !propertyId || r.leaseUtility.lease.propertyId === propertyId;
            const matchUtility = !utilityId || r.leaseUtility.utilityId === utilityId;
            return matchProperty && matchUtility;
        });

        const formattedReadings = filtered.map((reading: any) => {
            const lease = reading.leaseUtility.lease;
            const tenant = lease.tenant;

            return {
                id: reading.id,
                leaseUtilityId: reading.leaseUtilityId,
                utilityId: reading.leaseUtility.utilityId,
                utilityName: reading.leaseUtility.utility.name,
                unitId: lease.unitId,
                unitNumber: lease.unit.unitNumber,
                propertyId: lease.propertyId,
                propertyName: lease.property.name || lease.property.address,
                tenantName: tenant ? `${tenant.firstName || ""} ${tenant.lastName || ""}`.trim() : "N/A",
                readingValue: reading.readingValue,
                amount: reading.amount,
                readingDate: reading.readingDate?.toISOString(),
                createdAt: reading.createdAt?.toISOString(),
            };
        });

        return NextResponse.json({ readings: formattedReadings });
    } catch (error) {
        console.error("Error fetching readings:", error);
        return NextResponse.json(
            { error: "Failed to fetch readings" },
            { status: 500 }
        );
    }
}


