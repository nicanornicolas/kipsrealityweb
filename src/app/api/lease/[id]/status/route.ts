// API endpoint for updating lease status with listing integration
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/Getcurrentuser";
import { leaseListingIntegration } from "@/lib/lease-listing-integration";
import { Lease_leaseStatus } from "@prisma/client";

export async function PUT(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const user = await getCurrentUser();
        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const leaseId = params.id;
        const { status, reason } = await req.json();

        // Validate status
        const validStatuses: Lease_leaseStatus[] = [
            'DRAFT', 'PENDING_APPROVAL', 'APPROVED', 'SIGNED', 
            'ACTIVE', 'EXPIRING_SOON', 'EXPIRED', 'TERMINATED', 'RENEWED'
        ];

        if (!validStatuses.includes(status)) {
            return NextResponse.json(
                { error: `Invalid lease status: ${status}` },
                { status: 400 }
            );
        }

        // Get current lease to check permissions and previous status
        const currentLease = await prisma.lease.findUnique({
            where: { id: leaseId },
            include: {
                property: {
                    include: {
                        manager: true
                    }
                }
            }
        });

        if (!currentLease) {
            return NextResponse.json(
                { error: "Lease not found" },
                { status: 404 }
            );
        }

        // Check permissions - user must be the property manager
        if (currentLease.property.manager?.userId !== user.id) {
            return NextResponse.json(
                { error: "Unauthorized - you can only update leases for your properties" },
                { status: 403 }
            );
        }

        const previousStatus = currentLease.leaseStatus;

        // Update lease status in transaction
        const updatedLease = await prisma.$transaction(async (tx) => {
            // Update the lease
            const updated = await tx.lease.update({
                where: { id: leaseId },
                data: {
                    leaseStatus: status,
                    updatedAt: new Date()
                },
                include: {
                    unit: true,
                    property: true,
                    tenant: true
                }
            });

            // Create audit log entry
            await tx.leaseAuditLog.create({
                data: {
                    id: crypto.randomUUID(),
                    leaseId: leaseId,
                    action: `STATUS_CHANGED_TO_${status}`,
                    performedBy: user.id,
                    changes: {
                        previousStatus,
                        newStatus: status,
                        reason: reason || 'Status updated via API'
                    } as any,
                    performedAt: new Date()
                }
            });

            return updated;
        });

        // Handle listing integration after successful database update
        try {
            await leaseListingIntegration.handleLeaseStatusChange(
                leaseId,
                status,
                previousStatus,
                user.id
            );
        } catch (integrationError) {
            console.error('Lease-listing integration error:', integrationError);
            // Don't fail the request if integration fails, but log it
            // The lease status update was successful, integration can be retried
        }

        return NextResponse.json({
            success: true,
            data: {
                id: updatedLease.id,
                leaseStatus: updatedLease.leaseStatus,
                previousStatus,
                unitNumber: updatedLease.unit?.unitNumber,
                propertyName: updatedLease.property?.name
            }
        });

    } catch (error) {
        console.error("Error updating lease status:", error);
        return NextResponse.json(
            { error: "Failed to update lease status" },
            { status: 500 }
        );
    }
}

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const user = await getCurrentUser();
        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const leaseId = params.id;

        // Get lease with status history
        const lease = await prisma.lease.findUnique({
            where: { id: leaseId },
            include: {
                property: {
                    include: {
                        manager: true
                    }
                },
                unit: {
                    include: {
                        listing: true
                    }
                },
                LeaseAuditLog: {
                    where: {
                        action: {
                            startsWith: 'STATUS_CHANGED_TO_'
                        }
                    },
                    orderBy: {
                        performedAt: 'desc'
                    },
                    take: 10
                }
            }
        });

        if (!lease) {
            return NextResponse.json(
                { error: "Lease not found" },
                { status: 404 }
            );
        }

        // Check permissions
        if (lease.property.manager?.userId !== user.id) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 403 }
            );
        }

        return NextResponse.json({
            success: true,
            data: {
                id: lease.id,
                currentStatus: lease.leaseStatus,
                unitNumber: lease.unit?.unitNumber,
                propertyName: lease.property?.name,
                hasActiveListing: !!lease.unit?.listing,
                isUnitOccupied: lease.unit?.isOccupied,
                statusHistory: lease.LeaseAuditLog.map(log => ({
                    action: log.action,
                    timestamp: log.performedAt,
                    performedBy: log.performedBy,
                    changes: log.changes
                }))
            }
        });

    } catch (error) {
        console.error("Error fetching lease status:", error);
        return NextResponse.json(
            { error: "Failed to fetch lease status" },
            { status: 500 }
        );
    }
}
