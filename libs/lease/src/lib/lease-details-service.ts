import { prisma } from "@rentflow/iam";

export class LeaseDetailsError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export class LeaseDetailsService {
  async updateLease(leaseId: string, data: Record<string, unknown>) {
    return prisma.lease.update({
      where: { id: leaseId },
      data,
      include: {
        tenant: true,
        property: true,
        unit: true,
        application: true,
      },
    });
  }

  async getLeaseDetails(params: {
    leaseId: string;
    token: string | null;
    user: { id: string; organizationUserId?: string } | null;
  }) {
    const { leaseId, token, user } = params;

    let isValidTenant = false;

    if (!user && token) {
      const invite = await prisma.invite.findUnique({
        where: { token },
        include: { lease: true },
      });

      if (invite && invite.leaseId === leaseId) {
        isValidTenant = true;
      }
    }

    const lease = await prisma.lease.findUnique({
      where: { id: leaseId },
      include: {
        tenant: true,
        property: true,
        unit: true,
        invoices: {
          include: {
            payments: true,
          },
        },
      },
    });

    if (!lease) {
      throw new LeaseDetailsError("Lease not found", 404);
    }

    let userRole: "landlord" | "tenant" | null = null;
    if (user) {
      if (lease.property?.managerId === user.organizationUserId) {
        userRole = "landlord";
      } else if (lease.tenantId === user.id) {
        userRole = "tenant";
      }
    } else if (isValidTenant) {
      userRole = "tenant";
    }

    const totalInvoiced = lease.invoices.reduce(
      (sum, inv) => sum + Number(inv.totalAmount),
      0,
    );
    const totalPaid = lease.invoices.reduce(
      (sum, inv) =>
        sum + inv.payments.reduce((pSum, p) => pSum + Number(p.amount), 0),
      0,
    );
    const balance = totalInvoiced - totalPaid;

    return {
      ...lease,
      userRole,
      financialSummary: {
        totalInvoiced,
        totalPaid,
        balance,
      },
    };
  }
}

export const leaseDetailsService = new LeaseDetailsService();
