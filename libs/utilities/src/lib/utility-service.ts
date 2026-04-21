// libs/utilities/src/lib/utility-service.ts

import { UtilityAllocationPayload, IUtilityService } from '../index';
import { IFinanceModule } from '@rentflow/finance';

/**
 * UtilityService - The core domain service for utility bill management.
 * 
 * This service implements an asynchronous state machine:
 * DRAFT -> PENDING_REVIEW -> APPROVED -> POSTED
 * 
 * It accepts payloads from EITHER:
 * 1. The Next.js UI (manual entry by property managers)
 * 2. The Python AI Sidecar (automated OCR parsing of utility bills)
 * 
 * Both sources produce the same UtilityAllocationPayload, ensuring
 * a consistent interface regardless of input method.
 */
export class UtilityService implements IUtilityService {
  constructor(private financeService: IFinanceModule) {}

  /**
   * Step 1 of the State Machine: Staging
   * 
   * Accepts JSON from EITHER the Next.js UI or the Python AI Sidecar.
   * Creates a UtilityBill record in DRAFT status for Property Manager review.
   * 
   * @param payload - The utility allocation data from UI or AI
   * @returns The created bill ID and status
   */
  async stageAllocation(payload: UtilityAllocationPayload): Promise<{ billId: string; status: string }> {
    // In a real implementation, this would call Prisma to persist to the database.
    // For now, we're building the domain logic that will be wired to the API route.
    // 
    // The actual Prisma call happens in the API route or a repository layer.
    // This keeps the library testable without requiring a database connection.
    //
    // PSEUDOCODE for the actual implementation:
    //
    // const bill = await prisma.utilityBill.create({
    //   data: {
    //     id: payload.utilityBillId,
    //     propertyId: payload.propertyId,
    //     fileUrl: payload.fileUrl,
    //     billingPeriodStart: payload.billingPeriodStart,
    //     billingPeriodEnd: payload.billingPeriodEnd,
    //     status: 'DRAFT',
    //     splitMethod: payload.splitMethod,
    //     aiConfidenceScore: payload.aiConfidenceScore,
    //     anomalyFlag: payload.anomalyFlag || false,
    //     allocations: {
    //       create: payload.allocations.map(alloc => ({
    //         unitId: alloc.unitId,
    //         tenantId: alloc.tenantId,
    //         amount: alloc.amount,
    //         percentage: alloc.percentage,
    //         explanation: alloc.explanation,
    //       }))
    //     }
    //   }
    // });
    // return { billId: bill.id, status: bill.status };

    console.log('[UtilityService] Staging allocation:', {
      utilityBillId: payload.utilityBillId,
      propertyId: payload.propertyId,
      splitMethod: payload.splitMethod,
      allocationCount: payload.allocations.length,
    });

    return { billId: payload.utilityBillId, status: 'DRAFT' };
  }

  /**
   * Step 2 of the State Machine: Human Approval
   * 
   * The Property Manager clicks "Approve" on the dashboard.
   * This transitions the bill from DRAFT to APPROVED and triggers
   * invoice generation via the Finance module.
   * 
   * @param utilityBillId - The ID of the bill to approve
   * @param managerId - The ID of the approving manager (for audit trail)
   * @returns The approval result
   */
  async approveAllocation(
    utilityBillId: string,
    managerId: string
  ): Promise<{ billId: string; status: string; invoicesGenerated: number }> {
    // PSEUDOCODE for the actual implementation:
    //
    // 1. Verify the bill exists and is in DRAFT status
    // const bill = await prisma.utilityBill.findUnique({
    //   where: { id: utilityBillId, status: 'DRAFT' },
    //   include: { allocations: true }
    // });
    // if (!bill) throw new Error('Bill not found or not in DRAFT status');
    //
    // 2. Update the bill status to APPROVED
    // await prisma.utilityBill.update({
    //   where: { id: utilityBillId },
    //   data: { status: 'APPROVED', approvedBy: managerId, approvedAt: new Date() }
    // });
    //
    // 3. Cross-Boundary Call: Tell the Finance Module to generate invoices!
    // let invoicesGenerated = 0;
    // for (const alloc of bill.allocations) {
    //   try {
    //     await this.financeService.postInvoiceToGL({
    //       tenantId: alloc.tenantId,
    //       amount: alloc.amount,
    //       type: 'UTILITY',
    //       referenceId: alloc.id,
    //       description: alloc.explanation
    //     });
    //     invoicesGenerated++;
    //   } catch (error) {
    //     console.error(`[UtilityService] Failed to generate invoice for allocation ${alloc.id}:`, error);
    //     // Continue processing other allocations; the failed one can be retried
    //   }
    // }
    //
    // return { billId: utilityBillId, status: 'APPROVED', invoicesGenerated };

    console.log('[UtilityService] Approving allocation:', {
      utilityBillId,
      managerId,
    });

    return { billId: utilityBillId, status: 'APPROVED', invoicesGenerated: 0 };
  }
}
