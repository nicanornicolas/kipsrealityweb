import { prisma } from "@rentflow/iam";
import { leaseListingIntegration } from "./lease-listing-integration";

export class LeaseSigningError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export class LeaseSigningService {
  private async getLeaseForSigning(leaseId: string) {
    const lease = await prisma.lease.findUnique({
      where: { id: leaseId },
      include: {
        tenant: true,
        property: {
          include: {
            manager: {
              include: {
                user: true,
              },
            },
          },
        },
        unit: {
          include: {
            property: true,
          },
        },
      },
    });
    if (!lease) {
      throw new LeaseSigningError("Lease not found", 404);
    }
    return lease;
  }

  async signAsTenant(params: { leaseId: string; token: string }) {
    const { leaseId, token } = params;
    if (!token) {
      throw new LeaseSigningError("Missing invite token for tenant signing", 400);
    }

    const lease = await this.getLeaseForSigning(leaseId);
    const previousStatus = lease.leaseStatus;

    const invite = await prisma.invite.findUnique({
      where: { token },
      include: { lease: true },
    });
    if (!invite) {
      throw new LeaseSigningError("Invalid invite token", 403);
    }
    if (invite.leaseId !== leaseId) {
      throw new LeaseSigningError("Invite token does not match this lease", 403);
    }
    if (lease.tenantSignedAt) {
      return { message: "Tenant has already signed", lease };
    }

    const newStatus = lease.landlordSignedAt ? "SIGNED" : "DRAFT";
    const updated = await prisma.lease.update({
      where: { id: leaseId },
      data: {
        tenantSignedAt: new Date(),
        leaseStatus: newStatus,
      },
      include: {
        tenant: true,
        property: {
          include: {
            manager: {
              include: {
                user: true,
              },
            },
          },
        },
        unit: {
          include: {
            property: true,
          },
        },
      },
    });

    if (newStatus === "SIGNED" && previousStatus !== "SIGNED") {
      try {
        await leaseListingIntegration.handleLeaseStatusChange(
          leaseId,
          newStatus,
          previousStatus,
          "tenant",
        );
      } catch (integrationError) {
        console.error("Lease-listing integration error:", integrationError);
      }
    }

    return { message: "Lease signed by tenant", lease: updated };
  }

  async signAsLandlord(params: {
    leaseId: string;
    userId: string;
    organizationUserId?: string;
  }) {
    const { leaseId, userId, organizationUserId } = params;
    const lease = await this.getLeaseForSigning(leaseId);
    const previousStatus = lease.leaseStatus;

    if (lease.property?.managerId !== organizationUserId) {
      throw new LeaseSigningError("You are not authorized to sign this lease", 403);
    }
    if (lease.landlordSignedAt) {
      return {
        message: "Landlord has already signed",
        lease,
        tenantInviteEmailContext: null,
      };
    }

    const newStatus = lease.tenantSignedAt ? "SIGNED" : "DRAFT";
    const updated = await prisma.lease.update({
      where: { id: leaseId },
      data: {
        landlordSignedAt: new Date(),
        leaseStatus: newStatus,
      },
      include: {
        tenant: true,
        property: {
          include: {
            manager: {
              include: {
                user: true,
              },
            },
          },
        },
        unit: {
          include: {
            property: true,
          },
        },
      },
    });

    if (newStatus === "SIGNED" && previousStatus !== "SIGNED") {
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
    }

    let tenantInviteEmailContext: {
      email: string;
      firstName: string;
      propertyName: string;
      unitNumber: string;
      landlordName: string;
      token: string;
      leaseId: string;
    } | null = null;

    if (!lease.tenantSignedAt && updated.tenant?.email) {
      const invite = await prisma.invite.findFirst({
        where: {
          leaseId,
          email: updated.tenant.email.toLowerCase(),
          accepted: false,
        },
        orderBy: { createdAt: "desc" },
      });

      if (invite) {
        let landlordName = "Property Manager";
        if (lease.property?.manager?.user) {
          const owner = lease.property.manager.user;
          landlordName =
            `${owner.firstName || ""} ${owner.lastName || ""}`.trim() ||
            "Property Manager";
        }
        tenantInviteEmailContext = {
          email: updated.tenant.email,
          firstName: updated.tenant.firstName || "Tenant",
          propertyName: updated.unit?.property?.name || "Unknown Property",
          unitNumber: updated.unit?.unitNumber || "N/A",
          landlordName,
          token: invite.token,
          leaseId,
        };
      }
    }

    return {
      message: "Lease signed by landlord",
      lease: updated,
      tenantInviteEmailContext,
    };
  }

  async activateByOrganization(params: {
    leaseId: string;
    organizationId: string;
    actorUserId: string;
  }) {
    const { leaseId, organizationId, actorUserId } = params;
    const lease = await prisma.lease.findFirst({
      where: {
        id: leaseId,
        property: {
          organizationId,
        },
      },
      include: {
        unit: true,
        property: true,
      },
    });

    if (!lease) {
      throw new LeaseSigningError("Lease not found or unauthorized", 404);
    }
    if (!["DRAFT", "SIGNED"].includes(lease.leaseStatus || "")) {
      throw new LeaseSigningError(
        `Lease cannot be activated. Current status: ${lease.leaseStatus}`,
        400,
      );
    }

    const previousStatus = lease.leaseStatus;
    const updatedLease = await prisma.lease.update({
      where: { id: leaseId },
      data: {
        leaseStatus: "ACTIVE",
        landlordSignedAt: new Date(),
      },
    });

    await prisma.unit.update({
      where: { id: lease.unitId },
      data: { isOccupied: true },
    });

    try {
      await leaseListingIntegration.handleLeaseStatusChange(
        leaseId,
        "ACTIVE",
        previousStatus,
        actorUserId,
      );
    } catch (integrationError) {
      console.error("Lease-listing integration error:", integrationError);
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const startDate = new Date(lease.startDate);
    startDate.setHours(0, 0, 0, 0);

    let invoiceCreated = false;
    if (startDate <= today) {
      await prisma.invoice.create({
        data: {
          leaseId,
          type: "RENT",
          totalAmount: lease.rentAmount,
          amountPaid: 0,
          balance: lease.rentAmount,
          dueDate: new Date(lease.startDate),
          status: "PENDING",
          postingStatus: "PENDING",
        },
      });
      invoiceCreated = true;
    }

    return {
      success: true,
      message: "Lease activated successfully",
      leaseId: updatedLease.id,
      leaseStatus: updatedLease.leaseStatus,
      invoiceCreated,
      note: invoiceCreated
        ? "First invoice generated"
        : "Start date is in the future - invoice will be generated by cron on start date",
    };
  }
}

export const leaseSigningService = new LeaseSigningService();
