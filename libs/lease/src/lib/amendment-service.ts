import { prisma } from "@rentflow/iam";
import { randomUUID } from "crypto";
import { LeaseNotificationType } from "@prisma/client";
import { capturePreviousValues } from "./amendment-utils";

export type LeaseAmendmentAction = "APPROVE" | "REJECT" | "EXECUTE";

export class LeaseAmendmentError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export class LeaseAmendmentService {
  async createAmendment(params: {
    leaseId: string;
    amendmentType: string;
    effectiveDate: string;
    description: string;
    changes: Record<string, unknown>;
    requiresSignature?: boolean;
    userId: string;
    organizationUserId?: string;
  }) {
    const {
      leaseId,
      amendmentType,
      effectiveDate,
      description,
      changes,
      requiresSignature = true,
      userId,
      organizationUserId,
    } = params;

    const lease = await prisma.lease.findUnique({
      where: { id: leaseId },
      include: { property: true, tenant: true },
    });

    if (!lease) {
      throw new LeaseAmendmentError("Lease not found", 404);
    }
    if (lease.property.managerId !== organizationUserId) {
      throw new LeaseAmendmentError("Unauthorized", 403);
    }

    const previousValues = capturePreviousValues(
      lease as unknown as Record<string, unknown>,
      amendmentType,
      changes,
    );

    const amendment = await prisma.leaseAmendment.create({
      data: {
        id: randomUUID(),
        leaseId,
        amendmentType,
        effectiveDate: new Date(effectiveDate),
        description,
        changes,
        previousValues,
        createdBy: userId,
        status: "PENDING",
      },
    });

    if (lease.tenant?.email) {
      await prisma.leaseNotification.create({
        data: {
          id: randomUUID(),
          leaseId,
          notificationType: LeaseNotificationType.AMENDMENT_PROPOSED,
          recipientEmail: lease.tenant.email,
          recipientRole: "TENANT",
          subject: "Lease Amendment Proposed",
          message: `A lease amendment has been proposed: ${description}. Please review and respond.`,
          scheduledFor: new Date(),
          status: "PENDING",
        },
      });
    }

    if (requiresSignature) {
      await prisma.lease.update({
        where: { id: leaseId },
        data: {
          landlordSignedAt: null,
          tenantSignedAt: null,
          leaseStatus: "PENDING_APPROVAL",
          documentVersion: { increment: 1 },
        },
      });
    }

    return amendment;
  }

  async listAmendments(leaseId: string) {
    return prisma.leaseAmendment.findMany({
      where: { leaseId },
      orderBy: { createdAt: "desc" },
    });
  }

  async processAmendmentAction(params: {
    leaseId: string;
    amendmentId: string;
    action: LeaseAmendmentAction;
    notes?: string;
    userId: string;
  }) {
    const { leaseId, amendmentId, action, notes, userId } = params;

    const amendment = await prisma.leaseAmendment.findUnique({
      where: { id: amendmentId },
      include: { Lease: { include: { tenant: true } } },
    });

    if (!amendment) {
      throw new LeaseAmendmentError("Amendment not found", 404);
    }
    if (amendment.leaseId !== leaseId) {
      throw new LeaseAmendmentError(
        "Amendment does not belong to this lease",
        400,
      );
    }

    let updateData: Record<string, unknown> = {};
    let auditAction = "";

    switch (action) {
      case "APPROVE":
        updateData = {
          status: "APPROVED",
          approvedBy: userId,
          approvedAt: new Date(),
        };
        auditAction = "AMENDMENT_APPROVED";
        break;
      case "REJECT":
        updateData = {
          status: "REJECTED",
          approvedBy: userId,
          approvedAt: new Date(),
        };
        auditAction = "AMENDMENT_REJECTED";
        break;
      case "EXECUTE":
        if ((amendment.status ?? "") !== "APPROVED") {
          throw new LeaseAmendmentError("Amendment must be approved first", 400);
        }

        await prisma.lease.update({
          where: { id: leaseId },
          data: {
            ...(amendment.changes as Record<string, unknown>),
            documentVersion: { increment: 1 },
            lastDocumentUpdate: new Date(),
          },
        });

        updateData = {
          status: "EXECUTED",
          executedAt: new Date(),
          executedBy: userId,
        };
        auditAction = "AMENDMENT_EXECUTED";

        if (amendment.Lease?.tenant?.email) {
          await prisma.leaseNotification.create({
            data: {
              id: randomUUID(),
              leaseId,
              notificationType: "CUSTOM",
              recipientEmail: amendment.Lease.tenant.email,
              recipientRole: "TENANT",
              subject: "Lease Amendment Executed",
              message: `The lease amendment "${amendment.description ?? ""}" has been executed.`,
              scheduledFor: new Date(),
              status: "PENDING",
            },
          });
        }
        break;
      default:
        throw new LeaseAmendmentError("Invalid action", 400);
    }

    const updated = await prisma.leaseAmendment.update({
      where: { id: amendmentId },
      data: updateData,
    });

    await prisma.leaseAuditLog.create({
      data: {
        id: randomUUID(),
        leaseId,
        action: auditAction,
        performedBy: userId,
        changes: {
          amendmentId,
          action,
          notes,
          changes: amendment.changes ?? {},
        } as unknown as object,
      },
    });

    return updated;
  }

  async deleteAmendment(params: {
    leaseId: string;
    amendmentId: string;
    userId: string;
  }) {
    const { leaseId, amendmentId, userId } = params;

    const amendment = await prisma.leaseAmendment.findUnique({
      where: { id: amendmentId },
      include: { Lease: { include: { tenant: true } } },
    });

    if (!amendment) {
      throw new LeaseAmendmentError("Amendment not found", 404);
    }
    if (!["PENDING", "REJECTED"].includes(amendment.status ?? "")) {
      throw new LeaseAmendmentError(
        "Cannot delete approved/executed amendments",
        400,
      );
    }

    await prisma.leaseAmendment.delete({ where: { id: amendmentId } });

    await prisma.leaseAuditLog.create({
      data: {
        id: randomUUID(),
        leaseId,
        action: "AMENDMENT_DELETED",
        performedBy: userId,
        changes: { amendmentId, description: amendment.description ?? "" } as object,
      },
    });

    if (amendment.Lease?.tenant?.email) {
      await prisma.leaseNotification.create({
        data: {
          id: randomUUID(),
          leaseId,
          notificationType: "CUSTOM",
          recipientEmail: amendment.Lease.tenant.email,
          recipientRole: "TENANT",
          subject: "Lease Amendment Cancelled",
          message: `The lease amendment "${amendment.description ?? ""}" has been cancelled.`,
          scheduledFor: new Date(),
          status: "PENDING",
        },
      });
    }
  }
}

export const leaseAmendmentService = new LeaseAmendmentService();
