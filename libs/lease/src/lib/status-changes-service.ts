import { prisma } from "@rentflow/iam";
import { randomUUID } from "crypto";

export class LeaseStatusChangesError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

type ListingActionType =
  | "REMOVED"
  | "PROMPT_SENT"
  | "NOTIFICATION_SENT"
  | "NO_ACTION";

export class LeaseStatusChangesService {
  async getStatusChanges(params: {
    userId: string;
    propertyId: string | null;
    unitId: string | null;
    limit: number;
  }) {
    const { userId, propertyId, unitId, limit } = params;

    const whereClause: Record<string, unknown> = {
      Lease: {
        property: {
          manager: {
            userId,
          },
        },
      },
    };

    if (propertyId) {
      (whereClause.Lease as { propertyId?: string }).propertyId = propertyId;
    }
    if (unitId) {
      (whereClause.Lease as { unitId?: string }).unitId = unitId;
    }

    const auditLogs = await prisma.leaseAuditLog.findMany({
      where: {
        ...whereClause,
        action: {
          startsWith: "STATUS_CHANGED_TO_",
        },
      },
      include: {
        Lease: {
          include: {
            unit: true,
            property: true,
          },
        },
      },
      orderBy: {
        performedAt: "desc",
      },
      take: limit,
    });

    const changes = auditLogs.map((log) => {
      const details = log.changes as { previousStatus?: string; reason?: string };
      const newStatus = log.action.replace("STATUS_CHANGED_TO_", "");
      const previousStatus = details?.previousStatus || "UNKNOWN";

      let listingAction: ListingActionType = "NO_ACTION";
      let reason = details?.reason || "Status updated";

      switch (newStatus) {
        case "ACTIVE":
          listingAction = "REMOVED";
          reason = "Listing automatically removed due to lease activation";
          break;
        case "EXPIRED":
          listingAction = "PROMPT_SENT";
          reason = "Listing decision prompt sent due to lease expiration";
          break;
        case "TERMINATED":
          listingAction = "PROMPT_SENT";
          reason = "Listing decision prompt sent due to lease termination";
          break;
        case "SIGNED":
          listingAction = "NOTIFICATION_SENT";
          reason =
            "Notification sent about upcoming listing removal when lease activates";
          break;
        default:
          listingAction = "NO_ACTION";
      }

      return {
        id: log.id,
        leaseId: log.leaseId,
        unitNumber: log.Lease?.unit?.unitNumber || "Unknown",
        propertyName: log.Lease?.property?.name || "Unknown Property",
        previousStatus,
        newStatus,
        timestamp: log.performedAt,
        listingAction,
        reason,
      };
    });

    return { changes, total: changes.length };
  }

  async processListingDecision(params: {
    userId: string;
    unitId: string;
    action: "LIST_UNIT" | "KEEP_PRIVATE";
  }) {
    const { userId, unitId, action } = params;

    if (!["LIST_UNIT", "KEEP_PRIVATE"].includes(action)) {
      throw new LeaseStatusChangesError(`Invalid action: ${action}`, 400);
    }

    const unit = await prisma.unit.findUnique({
      where: { id: unitId },
      include: {
        property: {
          include: {
            manager: true,
          },
        },
        leases: {
          where: {
            leaseStatus: { in: ["EXPIRED", "TERMINATED"] },
          },
          orderBy: {
            updatedAt: "desc",
          },
          take: 1,
        },
      },
    });

    if (!unit) {
      throw new LeaseStatusChangesError("Unit not found", 404);
    }
    if (unit.property.manager?.userId !== userId) {
      throw new LeaseStatusChangesError(
        "Unauthorized - you can only manage your own properties",
        403,
      );
    }
    if (unit.isOccupied) {
      throw new LeaseStatusChangesError(
        "Unit is currently occupied and cannot be listed",
        400,
      );
    }
    if (unit.leases.length === 0) {
      throw new LeaseStatusChangesError("No recent lease found for this unit", 400);
    }

    const result =
      action === "LIST_UNIT"
        ? {
            action: "LISTED",
            message: `Unit ${unit.unitNumber} has been listed on the marketplace`,
          }
        : {
            action: "KEPT_PRIVATE",
            message: `Unit ${unit.unitNumber} will remain private`,
          };

    const recentLease = unit.leases[0];
    await prisma.leaseAuditLog.create({
      data: {
        id: randomUUID(),
        leaseId: recentLease.id,
        action: `LISTING_DECISION_${action}`,
        performedBy: userId,
        changes: {
          unitId,
          decision: action,
          timestamp: new Date(),
        } as object,
        performedAt: new Date(),
      },
    });

    return result;
  }
}

export const leaseStatusChangesService = new LeaseStatusChangesService();
