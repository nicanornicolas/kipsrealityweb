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

/**
 * GET /api/utilities/bills/[billId]/allocations
 *
 * Returns bill-level allocations for read-only UI view.
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ billId: string }> },
) {
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

    const { billId } = await params;

    const bill = await prisma.utilityBill.findFirst({
      where: {
        id: billId,
        property: {
          organizationId: user.organizationId,
        },
      },
      select: {
        id: true,
        providerName: true,
        totalAmount: true,
        status: true,
        splitMethod: true,
        allocations: {
          select: {
            id: true,
            amount: true,
            percentage: true,
            splitMethod: true,
            allocationExplanation: true,
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
          orderBy: { createdAt: 'asc' },
        },
      },
    });

    if (!bill) {
      return NextResponse.json(
        { success: false, error: 'Bill not found' },
        { status: 404 },
      );
    }

    const formattedAllocations = bill.allocations.map((allocation) => {
      const tenantFromLease = allocation.lease?.tenant;
      const tenantFromUnit = allocation.unit.leases[0]?.tenant;
      const tenant = tenantFromLease ?? tenantFromUnit;
      const tenantName = tenant
        ? `${tenant.firstName ?? ''} ${tenant.lastName ?? ''}`.trim() || 'N/A'
        : 'N/A';

      return {
        id: allocation.id,
        unitNumber: allocation.unit.unitNumber,
        tenantName,
        amount: Number(allocation.amount),
        percentage: Number(allocation.percentage ?? 0),
        basis:
          allocation.allocationExplanation?.trim() ||
          formatSplitMethodLabel(allocation.splitMethod || bill.splitMethod),
      };
    });

    return NextResponse.json({
      success: true,
      data: {
        id: bill.id,
        providerName: bill.providerName,
        totalAmount: Number(bill.totalAmount),
        status: bill.status,
        splitMethod: bill.splitMethod,
        allocations: formattedAllocations,
      },
    });
  } catch (error) {
    console.error('[API] Failed to fetch bill allocations:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch bill allocations' },
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

