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
export declare class UtilityService implements IUtilityService {
    private financeService;
    constructor(financeService: IFinanceModule);
    /**
     * Step 1 of the State Machine: Staging
     *
     * Accepts JSON from EITHER the Next.js UI or the Python AI Sidecar.
     * Creates a UtilityBill record in DRAFT status for Property Manager review.
     *
     * @param payload - The utility allocation data from UI or AI
     * @returns The created bill ID and status
     */
    stageAllocation(payload: UtilityAllocationPayload): Promise<{
        billId: string;
        status: string;
    }>;
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
    approveAllocation(utilityBillId: string, managerId: string): Promise<{
        billId: string;
        status: string;
        invoicesGenerated: number;
    }>;
}
