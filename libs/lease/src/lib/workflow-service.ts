import { prisma } from "@rentflow/iam";
import { Prisma } from "@prisma/client";
import { randomUUID } from "crypto";
import { leaseListingIntegration } from "./lease-listing-integration";

export type LeaseWorkflowAction = "APPROVE" | "ACTIVATE" | "TERMINATE";

export class LeaseWorkflowActionError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export class LeaseWorkflowService {
  async executeAction(params: {
    leaseId: string;
    action: LeaseWorkflowAction;
    organizationUserId?: string;
    userId: string;
  }) {
    const { leaseId, action, organizationUserId, userId } = params;

    const lease = await prisma.lease.findUnique({
      where: { id: leaseId },
      include: { property: true, tenant: true, application: true },
    });

    if (!lease) {
      throw new LeaseWorkflowActionError("Lease not found", 404);
    }

    if (lease.property.managerId !== organizationUserId) {
      throw new LeaseWorkflowActionError(
        "Not authorized to modify this lease",
        403,
      );
    }

    const previousStatus = lease.leaseStatus;
    let updatedLease;
    let auditAction = "";

    switch (action) {
      case "APPROVE":
        updatedLease = await prisma.lease.update({
          where: { id: leaseId },
          data: { leaseStatus: "APPROVED" },
        });
        auditAction = "APPROVED";
        break;
      case "ACTIVATE":
        if (!lease.landlordSignedAt || !lease.tenantSignedAt) {
          throw new LeaseWorkflowActionError(
            "Lease must be signed by both parties before activation",
            400,
          );
        }
        updatedLease = await prisma.lease.update({
          where: { id: leaseId },
          data: { leaseStatus: "ACTIVE" },
        });
        auditAction = "ACTIVATED";
        break;
      case "TERMINATE":
        updatedLease = await prisma.lease.update({
          where: { id: leaseId },
          data: { leaseStatus: "TERMINATED" },
        });
        auditAction = "TERMINATED";
        break;
      default:
        throw new LeaseWorkflowActionError("Invalid action", 400);
    }

    const newStatus = updatedLease.leaseStatus;
    if (!newStatus) {
      throw new LeaseWorkflowActionError("Lease status update failed", 500);
    }

    await prisma.leaseAuditLog.create({
      data: {
        id: randomUUID(),
        leaseId,
        action: auditAction,
        performedBy: userId,
        changes: {
          previousStatus,
          newStatus,
        } as Prisma.InputJsonValue,
      } as Prisma.LeaseAuditLogUncheckedCreateInput,
    });

    try {
      await leaseListingIntegration.handleLeaseStatusChange(
        leaseId,
        newStatus,
        previousStatus,
        userId,
      );
    } catch (integrationError) {
      console.error("Lease-listing integration error:", integrationError);
    }

    return updatedLease;
  }
}

export const leaseWorkflowService = new LeaseWorkflowService();
