import { prisma } from "@rentflow/iam";
import { LeaseStatus, Prisma } from "@prisma/client";
import { randomUUID } from "crypto";
import { leaseListingIntegration } from "./lease-listing-integration";

export class LeaseStatusError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export class LeaseStatusService {
  async updateStatus(params: {
    leaseId: string;
    status: LeaseStatus;
    reason: string | undefined;
    userId: string;
  }) {
    const { leaseId, status, reason, userId } = params;
    const validStatuses: LeaseStatus[] = [
      LeaseStatus.DRAFT,
      LeaseStatus.PENDING_APPROVAL,
      LeaseStatus.APPROVED,
      LeaseStatus.SIGNED,
      LeaseStatus.ACTIVE,
      LeaseStatus.EXPIRING_SOON,
      LeaseStatus.EXPIRED,
      LeaseStatus.TERMINATED,
      LeaseStatus.RENEWED,
    ];
    if (!validStatuses.includes(status)) {
      throw new LeaseStatusError(`Invalid lease status: ${status}`, 400);
    }

    const currentLease = await prisma.lease.findUnique({
      where: { id: leaseId },
      include: {
        property: {
          include: {
            manager: true,
          },
        },
      },
    });

    if (!currentLease) {
      throw new LeaseStatusError("Lease not found", 404);
    }
    if (currentLease.property.manager?.userId !== userId) {
      throw new LeaseStatusError(
        "Unauthorized - you can only update leases for your properties",
        403,
      );
    }

    const previousStatus = currentLease.leaseStatus;
    const updatedLease = await prisma.$transaction(async (tx) => {
      const updated = await tx.lease.update({
        where: { id: leaseId },
        data: {
          leaseStatus: status,
          updatedAt: new Date(),
        },
        include: {
          unit: true,
          property: true,
          tenant: true,
        },
      });

      await tx.leaseAuditLog.create({
        data: {
          id: randomUUID(),
          leaseId,
          action: `STATUS_CHANGED_TO_${status}`,
          performedBy: userId,
          changes: {
            previousStatus,
            newStatus: status,
            reason: reason || "Status updated via API",
          } as Prisma.InputJsonValue,
          performedAt: new Date(),
        },
      });

      return updated;
    });

    try {
      await leaseListingIntegration.handleLeaseStatusChange(
        leaseId,
        status,
        previousStatus,
        userId,
      );
    } catch (integrationError) {
      console.error("Lease-listing integration error:", integrationError);
    }

    return {
      id: updatedLease.id,
      leaseStatus: updatedLease.leaseStatus,
      previousStatus,
      unitNumber: updatedLease.unit?.unitNumber,
      propertyName: updatedLease.property?.name,
    };
  }

  async getStatusDetails(params: { leaseId: string; userId: string }) {
    const { leaseId, userId } = params;
    const lease = await prisma.lease.findUnique({
      where: { id: leaseId },
      include: {
        property: {
          include: {
            manager: true,
          },
        },
        unit: {
          include: {
            listing: true,
          },
        },
        LeaseAuditLog: {
          where: {
            action: {
              startsWith: "STATUS_CHANGED_TO_",
            },
          },
          orderBy: {
            performedAt: "desc",
          },
          take: 10,
        },
      },
    });

    if (!lease) {
      throw new LeaseStatusError("Lease not found", 404);
    }
    if (lease.property.manager?.userId !== userId) {
      throw new LeaseStatusError("Unauthorized", 403);
    }

    return {
      id: lease.id,
      currentStatus: lease.leaseStatus,
      unitNumber: lease.unit?.unitNumber,
      propertyName: lease.property?.name,
      hasActiveListing: !!lease.unit?.listing,
      isUnitOccupied: lease.unit?.isOccupied,
      statusHistory: lease.LeaseAuditLog.map((log) => ({
        action: log.action,
        timestamp: log.performedAt,
        performedBy: log.performedBy,
        changes: log.changes,
      })),
    };
  }
}

export const leaseStatusService = new LeaseStatusService();
