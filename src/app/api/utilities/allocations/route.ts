// src/app/api/utilities/allocations/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { requireRole } from '@/lib/rbac/requireRole';
import { UtilityService } from '@rentflow/utilities';
import { IFinanceModule } from '@rentflow/finance';
import { prisma } from '@/lib/db';

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
  const authError = await requireRole(['PROPERTY_MANAGER', 'SYSTEM_ADMIN']);
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
