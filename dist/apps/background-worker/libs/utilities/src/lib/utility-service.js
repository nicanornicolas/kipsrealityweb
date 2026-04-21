var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var utility_service_exports = {};
__export(utility_service_exports, {
  UtilityService: () => UtilityService
});
module.exports = __toCommonJS(utility_service_exports);
class UtilityService {
  constructor(financeService) {
    this.financeService = financeService;
  }
  financeService;
  /**
   * Step 1 of the State Machine: Staging
   * 
   * Accepts JSON from EITHER the Next.js UI or the Python AI Sidecar.
   * Creates a UtilityBill record in DRAFT status for Property Manager review.
   * 
   * @param payload - The utility allocation data from UI or AI
   * @returns The created bill ID and status
   */
  async stageAllocation(payload) {
    console.log("[UtilityService] Staging allocation:", {
      utilityBillId: payload.utilityBillId,
      propertyId: payload.propertyId,
      splitMethod: payload.splitMethod,
      allocationCount: payload.allocations.length
    });
    return { billId: payload.utilityBillId, status: "DRAFT" };
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
  async approveAllocation(utilityBillId, managerId) {
    console.log("[UtilityService] Approving allocation:", {
      utilityBillId,
      managerId
    });
    return { billId: utilityBillId, status: "APPROVED", invoicesGenerated: 0 };
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UtilityService
});
//# sourceMappingURL=utility-service.js.map
