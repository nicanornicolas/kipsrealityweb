// src/app/api/utilities/allocations/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser, requireRole } from '@rentflow/iam';
import { UtilityService } from '@rentflow/utilities';
import { IFinanceModule } from '@rentflow/finance';
import { prisma } from '@rentflow/iam';

/**
 * FinanceFacade - The concrete implementation of IFinanceModule.
 * 
 * This is the "adapter" that connects our Next.js app's existing
 * finance logic to the IFinanceModule interface expected by
 * @rentflow/utilities.
 * 
 * In a future refactor, the actual finance logic will move into
 * libs/finance, and this adapter will be removed.
 */
class FinanceFacade implements IFinanceModule {
  async postInvoiceToGL(params: {
    tenantId: string;
    amount: number;
    type: string;
    referenceId: string;
    description: string;
  }): Promise<{ invoiceId: string }> {
    // TODO: Replace with actual invoice generation logic
    // For now, we create a basic invoice record via Prisma
    const invoice = await prisma.invoice.create({
      data: {
        tenantId: params.tenantId,
        amount: params.amount,
        type: params.type as any, // Cast to match InvoiceType enum
        description: params.description,
        status: 'PENDING',
        dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      },
    });

    return { invoiceId: invoice.id };
  }
}

// Instantiate our modular service with the finance adapter
const utilityService = new UtilityService(new FinanceFacade());

function formatSplitMethodLabel(method: string): string {
  const labels: Record<string, string> = {
    EQUAL: 'Equal Usage',
    OCCUPANCY_BASED: 'Occupancy-based',
    SQ_FOOTAGE: 'Square Footage',
    SUB_METERED: 'Sub-metered',
    CUSTOM_RATIO: 'Custom Ratio',
    AI_OPTIMIZED: 'AI Optimized',
    FIXED: 'Fixed',
  };

  return labels[method] ?? method;
}

function formatPeriod(start: Date | null, end: Date | null, billDate: Date): { period: string; periodRaw: string } {
  const formatter = new Intl.DateTimeFormat('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: '2-digit',
  });

  if (start && end) {
    return {
      period: `${formatter.format(start)} - ${formatter.format(end)}`,
      periodRaw: start.toISOString(),
    };
  }

  return {
    period: formatter.format(billDate),
    periodRaw: billDate.toISOString(),
  };
}

/**
 * GET /api/utilities/allocations
 *
 * Returns organization-scoped allocation rows for the allocations list page.
 */
export async function GET(req: NextRequest) {
  const authError = await requireRole(['PROPERTY_MANAGER', 'SYSTEM_ADMIN'], req);
  if (authError) return authError;

  try {
    const user = await getCurrentUser(req);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!user.organizationId) {
      return NextResponse.json({ error: 'Organization required' }, { status: 403 });
    }

    const allocations = await prisma.utilityAllocation.findMany({
      where: {
        utilityBill: {
          property: {
            organizationId: user.organizationId,
          },
        },
      },
      select: {
        id: true,
        amount: true,
        splitMethod: true,
        allocationExplanation: true,
        utilityBill: {
          select: {
            propertyId: true,
            providerName: true,
            periodStart: true,
            periodEnd: true,
            billDate: true,
            splitMethod: true,
            property: {
              select: {
                name: true,
                address: true,
              },
            },
            utility: {
              select: {
                name: true,
              },
            },
          },
        },
        lease: {
          select: {
            tenant: {
              select: {
                firstName: true,
                lastName: true,
              },
            },
          },
        },
        unit: {
          select: {
            unitNumber: true,
            leases: {
              where: { leaseStatus: 'ACTIVE' },
              take: 1,
              select: {
                tenant: {
                  select: {
                    firstName: true,
                    lastName: true,
                  },
                },
              },
            },
          },
        },
      },
      orderBy: [{ utilityBill: { billDate: 'desc' } }, { createdAt: 'desc' }],
    });

    const rows = allocations.map((allocation) => {
      const tenantFromLease = allocation.lease?.tenant;
      const tenantFromUnit = allocation.unit.leases[0]?.tenant;
      const tenant = tenantFromLease ?? tenantFromUnit;

      const tenantName = tenant
        ? `${tenant.firstName ?? ''} ${tenant.lastName ?? ''}`.trim() || 'N/A'
        : 'N/A';

      const periodInfo = formatPeriod(
        allocation.utilityBill.periodStart,
        allocation.utilityBill.periodEnd,
        allocation.utilityBill.billDate,
      );

      const basisSource =
        allocation.allocationExplanation?.trim() ||
        formatSplitMethodLabel(allocation.splitMethod || allocation.utilityBill.splitMethod);

      return {
        id: allocation.id,
        unit: allocation.unit.unitNumber,
        tenant: tenantName,
        utility: allocation.utilityBill.utility?.name ?? 'Unknown',
        provider: allocation.utilityBill.providerName,
        period: periodInfo.period,
        periodRaw: periodInfo.periodRaw,
        amount: Number(allocation.amount),
        basis: basisSource,
        property: allocation.utilityBill.property.name || allocation.utilityBill.property.address || 'Unknown',
        propertyId: allocation.utilityBill.propertyId,
      };
    });

    return NextResponse.json({ allocations: rows });
  } catch (error) {
    console.error('[API] Failed to fetch allocations:', error);
    return NextResponse.json(
      { error: 'Failed to fetch allocations' },
      { status: 500 },
    );
  }
}

/**
 * POST /api/utilities/allocations
 * 
 * Stages a new utility bill allocation for review.
 * 
 * Accepts a UtilityAllocationPayload from either:
 * 1. The Next.js UI (manual entry)
 * 2. The Python AI Sidecar (automated OCR)
 * 
 * Both sources produce the same JSON structure.
 */
export async function POST(req: NextRequest) {
  // 1. Enforce RBAC (Only Managers and Admins)
  const authError = await requireRole(['PROPERTY_MANAGER', 'SYSTEM_ADMIN'], req);
  if (authError) return authError;

  try {
    const payload = await req.json();

    // 2. Validate required fields
    if (!payload.propertyId || !payload.splitMethod || !payload.allocations) {
      return NextResponse.json(
        { error: 'Missing required fields: propertyId, splitMethod, allocations' },
        { status: 400 }
      );
    }

    // 3. Call our isolated domain logic
    const stagedBill = await utilityService.stageAllocation(payload);

    return NextResponse.json({ success: true, bill: stagedBill });
  } catch (error) {
    console.error('[API] Failed to stage allocation:', error);
    return NextResponse.json(
      { error: 'Failed to stage allocation' },
      { status: 500 }
    );
  }
}

