import { prisma } from "@rentflow/iam";

export class LeaseManagementError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

type CreateLeaseInput = {
  applicationId: string;
  tenantId?: string | null;
  propertyId: string;
  unitId: string;
  startDate: string;
  endDate: string;
  rentAmount: number;
  securityDeposit?: number | null;
  leaseTerm?: string;
  paymentDueDay?: number;
  paymentFrequency?: string;
  lateFeeFlat?: number;
  lateFeeDaily?: number;
  gracePeriodDays?: number;
  landlordResponsibilities?: string | null;
  tenantResponsibilities?: string | null;
  tenantPaysElectric?: boolean;
  tenantPaysWater?: boolean;
  tenantPaysTrash?: boolean;
  tenantPaysInternet?: boolean;
  usageType?: string;
  earlyTerminationFee?: number;
};

export class LeaseManagementService {
  async createLease(data: CreateLeaseInput) {
    const {
      applicationId,
      tenantId,
      propertyId,
      unitId,
      startDate,
      endDate,
      rentAmount,
      securityDeposit,
      leaseTerm,
      paymentDueDay,
      paymentFrequency,
      lateFeeFlat,
      lateFeeDaily,
      gracePeriodDays,
      landlordResponsibilities,
      tenantResponsibilities,
      tenantPaysElectric,
      tenantPaysWater,
      tenantPaysTrash,
      tenantPaysInternet,
      usageType,
      earlyTerminationFee,
    } = data;

    if (!applicationId || !propertyId || !unitId) {
      throw new LeaseManagementError("Missing required fields", 400);
    }

    const app = await prisma.tenantApplication.findUnique({
      where: { id: applicationId },
      include: { property: true, unit: true },
    });

    if (!app) {
      throw new LeaseManagementError("Application not found", 404);
    }

    if (app.status !== "APPROVED") {
      throw new LeaseManagementError(
        "Application must be approved before creating a lease",
        400,
      );
    }

    const existingLease = await prisma.lease.findUnique({
      where: { applicationId },
    });

    if (existingLease) {
      throw new LeaseManagementError(
        "Lease already exists for this application",
        409,
      );
    }

    return prisma.lease.create({
      data: {
        applicationId,
        tenantId: tenantId ?? null,
        propertyId,
        unitId,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        rentAmount,
        securityDeposit: securityDeposit ?? null,
        leaseTerm,
        paymentDueDay,
        paymentFrequency,
        lateFeeFlat,
        lateFeeDaily,
        gracePeriodDays,
        landlordResponsibilities,
        tenantResponsibilities,
        tenantPaysElectric,
        tenantPaysWater,
        tenantPaysTrash,
        tenantPaysInternet,
        usageType,
        earlyTerminationFee,
      },
      include: {
        tenant: true,
        property: true,
        unit: true,
        application: true,
      },
    });
  }

  async listLeases(params: { userId: string; propertyId: string | null }) {
    const { userId, propertyId } = params;
    const where: Record<string, unknown> = {
      property: {
        manager: {
          userId,
        },
      },
    };

    if (propertyId) {
      where.propertyId = propertyId;
    }

    const leases = await prisma.lease.findMany({
      where,
      include: {
        tenant: true,
        property: {
          include: {
            apartmentComplexDetail: true,
            houseDetail: true,
          },
        },
        unit: true,
        application: true,
        invoices: {
          include: {
            payments: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return leases.map((lease) => {
      const totalInvoiced =
        lease.invoices?.reduce((sum, inv) => sum + Number(inv.totalAmount), 0) ??
        0;
      const totalPaid =
        lease.invoices?.reduce(
          (sum, inv) =>
            sum +
            inv.payments.reduce((paySum, pay) => paySum + Number(pay.amount), 0),
          0,
        ) ?? 0;
      const balance = totalInvoiced - totalPaid;
      const buildingName =
        lease.property?.apartmentComplexDetail?.buildingName ??
        lease.property?.name ??
        "N/A";
      const houseName =
        lease.property?.houseDetail?.houseName ?? lease.property?.name ?? "N/A";

      return {
        ...lease,
        buildingName,
        houseName,
        financialSummary: { totalInvoiced, totalPaid, balance },
      };
    });
  }
}

export const leaseManagementService = new LeaseManagementService();
