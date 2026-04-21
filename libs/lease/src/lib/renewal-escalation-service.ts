import { prisma } from "@rentflow/iam";
import { Prisma } from "@prisma/client";
import { randomUUID } from "crypto";

export class LeaseWorkflowError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

function calculateNextEscalation(startDate: Date, frequency: string): Date | null {
  const next = new Date(startDate);
  if (frequency === "ANNUAL") next.setFullYear(next.getFullYear() + 1);
  else if (frequency === "BIANNUAL") next.setMonth(next.getMonth() + 6);
  else return null;
  return next;
}

export class LeaseRenewalEscalationService {
  async renewLease(params: {
    leaseId: string;
    managerOrganizationUserId?: string;
    userId: string;
    newEndDate: string;
    newRentAmount?: number;
    renewalType?: string;
    negotiationNotes?: string;
  }) {
    const {
      leaseId,
      managerOrganizationUserId,
      userId,
      newEndDate,
      newRentAmount,
      renewalType = "MANUAL",
      negotiationNotes,
    } = params;

    const lease = await prisma.lease.findUnique({
      where: { id: leaseId },
      include: { property: true, tenant: true, application: true },
    });

    if (!lease) throw new LeaseWorkflowError("Lease not found", 404);
    if (lease.property.managerId !== managerOrganizationUserId) {
      throw new LeaseWorkflowError("Unauthorized", 403);
    }

    const resolvedRentAmount = newRentAmount ?? Number(lease.rentAmount);

    const renewal = await prisma.leaseRenewal.create({
      data: {
        leaseId,
        renewalType,
        oldEndDate: lease.endDate,
        newEndDate: new Date(newEndDate),
        oldRentAmount: Number(lease.rentAmount),
        newRentAmount: resolvedRentAmount,
        negotiationNotes,
        status: "PENDING",
      } as Prisma.LeaseRenewalUncheckedCreateInput,
    });

    await prisma.leaseNotification.create({
      data: {
        leaseId,
        notificationType: "RENEWAL_REMINDER",
        recipientEmail: lease.tenant?.email || lease.application?.email || "",
        recipientRole: "TENANT",
        subject: "Lease Renewal Offer",
        message: `Your lease is eligible for renewal. New terms: Rent ${resolvedRentAmount}, End Date: ${newEndDate}`,
        scheduledFor: new Date(),
        status: "PENDING",
      } as Prisma.LeaseNotificationUncheckedCreateInput,
    });

    await prisma.leaseAuditLog.create({
      data: {
        id: randomUUID(),
        leaseId,
        action: "RENEWAL_INITIATED",
        performedBy: userId,
        changes: {
          renewalId: renewal.id,
          oldEndDate: renewal.oldEndDate,
          newEndDate: renewal.newEndDate,
          oldRentAmount: renewal.oldRentAmount,
          newRentAmount: renewal.newRentAmount,
          status: renewal.status,
        } as Prisma.InputJsonValue,
      } as Prisma.LeaseAuditLogUncheckedCreateInput,
    });

    return renewal;
  }

  async applyEscalation(params: {
    leaseId: string;
    managerOrganizationUserId?: string;
    userId: string;
    escalationRate: number;
    effectiveDate: string;
    escalationType: string;
  }) {
    const {
      leaseId,
      managerOrganizationUserId,
      userId,
      escalationRate,
      effectiveDate,
      escalationType,
    } = params;

    const lease = await prisma.lease.findUnique({
      where: { id: leaseId },
      include: { property: true, tenant: true, application: true },
    });

    if (!lease) throw new LeaseWorkflowError("Lease not found", 404);
    if (lease.property.managerId !== managerOrganizationUserId) {
      throw new LeaseWorkflowError("Unauthorized", 403);
    }

    const currentRent = Number(lease.rentAmount);
    let newRent = currentRent;
    if (escalationType === "PERCENTAGE") {
      newRent = currentRent * (1 + escalationRate / 100);
    } else if (escalationType === "FIXED") {
      newRent = currentRent + escalationRate;
    }

    const escalation = await prisma.rentEscalation.create({
      data: {
        leaseId,
        effectiveDate: new Date(effectiveDate),
        previousRent: currentRent,
        newRent,
        escalationType,
        escalationRate,
        appliedBy: userId,
        calculationNote: `${escalationType} escalation of ${escalationRate}${escalationType === "PERCENTAGE" ? "%" : ""}`,
      } as Prisma.RentEscalationUncheckedCreateInput,
    });

    const updatedLease = await prisma.lease.update({
      where: { id: leaseId },
      data: {
        rentAmount: newRent,
        nextEscalationDate: lease.escalationFrequency
          ? calculateNextEscalation(new Date(effectiveDate), lease.escalationFrequency)
          : null,
      },
    });

    await prisma.leaseNotification.create({
      data: {
        leaseId,
        notificationType: "ESCALATION_NOTICE",
        recipientEmail: lease.tenant?.email || lease.application?.email || "",
        recipientRole: "TENANT",
        subject: "Rent Escalation Notice",
        message: `Your rent will increase from ${currentRent} to ${newRent} effective ${effectiveDate}`,
        scheduledFor: new Date(),
        status: "PENDING",
      } as Prisma.LeaseNotificationUncheckedCreateInput,
    });

    await prisma.leaseAuditLog.create({
      data: {
        id: randomUUID(),
        leaseId,
        action: "RENT_ESCALATED",
        performedBy: userId,
        changes: {
          escalationId: escalation.id,
          previousRent: escalation.previousRent,
          newRent: escalation.newRent,
          effectiveDate: escalation.effectiveDate,
        } as Prisma.InputJsonValue,
      } as Prisma.LeaseAuditLogUncheckedCreateInput,
    });

    return { escalation, updatedLease };
  }
}

export const leaseRenewalEscalationService = new LeaseRenewalEscalationService();
