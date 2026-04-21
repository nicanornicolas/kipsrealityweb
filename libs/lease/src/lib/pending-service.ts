import { prisma } from "@rentflow/iam";

export class LeasePendingService {
  async getPendingLeasesByOrganization(organizationId: string) {
    const leases = await prisma.lease.findMany({
      where: {
        property: {
          organizationId,
        },
        OR: [{ leaseStatus: "DRAFT" }, { leaseStatus: "SIGNED" }],
      },
      include: {
        tenant: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
          },
        },
        unit: {
          select: {
            unitNumber: true,
          },
        },
        property: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      success: true,
      count: leases.length,
      leases,
    };
  }
}

export const leasePendingService = new LeasePendingService();
