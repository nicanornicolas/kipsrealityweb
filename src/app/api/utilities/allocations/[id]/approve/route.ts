// src/app/api/utilities/allocations/[id]/approve/route.ts

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
 */
class FinanceFacade implements IFinanceModule {
  async postInvoiceToGL(params: {
    tenantId: string;
    amount: number;
    type: string;
    referenceId: string;
    description: string;
  }): Promise<{ invoiceId: string }> {
    const invoice = await prisma.invoice.create({
      data: {
        tenantId: params.tenantId,
        amount: params.amount,
        type: 'UTILITY' as any,
        description: params.description,
        status: 'PENDING',
        dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      },
    });

    return { invoiceId: invoice.id };
  }
}

// Instantiate our modular service with the finance adapter
const utilityService = new UtilityService(new FinanceFacade());

/**
 * POST /api/utilities/allocations/[id]/approve
 * 
 * Approves a staged utility bill allocation.
 * Transitions the bill from DRAFT to APPROVED and triggers
 * invoice generation via the Finance module.
 * 
 * Only accessible to PROPERTY_MANAGER and SYSTEM_ADMIN roles.
 */
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // 1. Enforce RBAC (Only Managers and Admins)
  const authError = await requireRole(['PROPERTY_MANAGER', 'SYSTEM_ADMIN']);
  if (authError) return authError;

  try {
    const { id: utilityBillId } = await params;

    // 2. Get the authenticated user ID from the request
    // This assumes the auth middleware has attached the user to the request
    // or we extract it from the session/token
    const authHeader = req.headers.get('authorization');
    // For now, we'll use a placeholder - in production, extract from JWT
    const managerId = 'SYSTEM'; // TODO: Extract from authenticated user context

    // 3. Call our isolated domain logic to approve
    const result = await utilityService.approveAllocation(utilityBillId, managerId);

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error('[API] Failed to approve allocation:', error);
    return NextResponse.json(
      { error: 'Failed to approve allocation' },
      { status: 500 }
    );
  }
}
