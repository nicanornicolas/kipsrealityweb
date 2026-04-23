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
var utility_types_exports = {};
__export(utility_types_exports, {
  AllocateError: () => AllocateError,
  ApproveError: () => ApproveError,
  CreateBillError: () => CreateBillError,
  InvoiceError: () => InvoiceError,
  PostError: () => PostError,
  ReadingError: () => ReadingError,
  TransitionError: () => TransitionError,
  UtilityBillStatus: () => UtilityBillStatus,
  UtilityImportMethod: () => UtilityImportMethod,
  UtilitySplitMethod: () => UtilitySplitMethod
});
module.exports = __toCommonJS(utility_types_exports);
var UtilityBillStatus = /* @__PURE__ */ ((UtilityBillStatus2) => {
  UtilityBillStatus2["DRAFT"] = "DRAFT";
  UtilityBillStatus2["PROCESSING"] = "PROCESSING";
  UtilityBillStatus2["REVIEW_REQUIRED"] = "REVIEW_REQUIRED";
  UtilityBillStatus2["APPROVED"] = "APPROVED";
  UtilityBillStatus2["POSTED"] = "POSTED";
  UtilityBillStatus2["REJECTED"] = "REJECTED";
  return UtilityBillStatus2;
})(UtilityBillStatus || {});
var UtilitySplitMethod = /* @__PURE__ */ ((UtilitySplitMethod2) => {
  UtilitySplitMethod2["EQUAL"] = "EQUAL";
  UtilitySplitMethod2["OCCUPANCY_BASED"] = "OCCUPANCY_BASED";
  UtilitySplitMethod2["SQ_FOOTAGE"] = "SQ_FOOTAGE";
  UtilitySplitMethod2["SUB_METERED"] = "SUB_METERED";
  UtilitySplitMethod2["CUSTOM_RATIO"] = "CUSTOM_RATIO";
  UtilitySplitMethod2["AI_OPTIMIZED"] = "AI_OPTIMIZED";
  return UtilitySplitMethod2;
})(UtilitySplitMethod || {});
var UtilityImportMethod = /* @__PURE__ */ ((UtilityImportMethod2) => {
  UtilityImportMethod2["CSV"] = "CSV";
  UtilityImportMethod2["API"] = "API";
  UtilityImportMethod2["PDF_OCR"] = "PDF_OCR";
  UtilityImportMethod2["MANUAL_ENTRY"] = "MANUAL_ENTRY";
  UtilityImportMethod2["IMAGE_SCAN"] = "IMAGE_SCAN";
  return UtilityImportMethod2;
})(UtilityImportMethod || {});
var CreateBillError = /* @__PURE__ */ ((CreateBillError2) => {
  CreateBillError2["INVALID_PROPERTY"] = "INVALID_PROPERTY";
  CreateBillError2["INVALID_DATES"] = "INVALID_DATES";
  CreateBillError2["INVALID_AMOUNT"] = "INVALID_AMOUNT";
  CreateBillError2["PROPERTY_NOT_FOUND"] = "PROPERTY_NOT_FOUND";
  return CreateBillError2;
})(CreateBillError || {});
var ReadingError = /* @__PURE__ */ ((ReadingError2) => {
  ReadingError2["INVALID_INPUT"] = "INVALID_INPUT";
  ReadingError2["LEASE_UTILITY_NOT_FOUND"] = "LEASE_UTILITY_NOT_FOUND";
  ReadingError2["LEASE_NOT_ACTIVE"] = "LEASE_NOT_ACTIVE";
  ReadingError2["UTILITY_NOT_TENANT_RESPONSIBLE"] = "UTILITY_NOT_TENANT_RESPONSIBLE";
  ReadingError2["NEGATIVE_VALUE"] = "NEGATIVE_VALUE";
  ReadingError2["DECREASING_VALUE"] = "DECREASING_VALUE";
  return ReadingError2;
})(ReadingError || {});
var AllocateError = /* @__PURE__ */ ((AllocateError2) => {
  AllocateError2["BILL_NOT_FOUND"] = "BILL_NOT_FOUND";
  AllocateError2["INVALID_STATUS"] = "INVALID_STATUS";
  AllocateError2["INVALID_AMOUNT"] = "INVALID_AMOUNT";
  AllocateError2["NO_UNITS_FOUND"] = "NO_UNITS_FOUND";
  AllocateError2["MISSING_SPLIT_DATA"] = "MISSING_SPLIT_DATA";
  AllocateError2["SUM_MISMATCH"] = "SUM_MISMATCH";
  AllocateError2["ALREADY_ALLOCATED"] = "ALREADY_ALLOCATED";
  return AllocateError2;
})(AllocateError || {});
var TransitionError = /* @__PURE__ */ ((TransitionError2) => {
  TransitionError2["BILL_NOT_FOUND"] = "BILL_NOT_FOUND";
  TransitionError2["INVALID_STATUS"] = "INVALID_STATUS";
  TransitionError2["BILL_ALREADY_POSTED"] = "BILL_ALREADY_POSTED";
  return TransitionError2;
})(TransitionError || {});
var ApproveError = /* @__PURE__ */ ((ApproveError2) => {
  ApproveError2["BILL_NOT_FOUND"] = "BILL_NOT_FOUND";
  ApproveError2["INVALID_STATUS"] = "INVALID_STATUS";
  ApproveError2["NO_ALLOCATIONS"] = "NO_ALLOCATIONS";
  ApproveError2["ALLOCATION_SUM_MISMATCH"] = "ALLOCATION_SUM_MISMATCH";
  return ApproveError2;
})(ApproveError || {});
var InvoiceError = /* @__PURE__ */ ((InvoiceError2) => {
  InvoiceError2["BILL_NOT_FOUND"] = "BILL_NOT_FOUND";
  InvoiceError2["INVALID_STATUS"] = "INVALID_STATUS";
  InvoiceError2["NO_ALLOCATIONS"] = "NO_ALLOCATIONS";
  InvoiceError2["ALLOCATION_MISSING_LEASE"] = "ALLOCATION_MISSING_LEASE";
  InvoiceError2["ALREADY_EXISTS"] = "ALREADY_EXISTS";
  return InvoiceError2;
})(InvoiceError || {});
var PostError = /* @__PURE__ */ ((PostError2) => {
  PostError2["BILL_NOT_FOUND"] = "BILL_NOT_FOUND";
  PostError2["NOT_APPROVED"] = "NOT_APPROVED";
  PostError2["ALREADY_POSTED"] = "ALREADY_POSTED";
  PostError2["NO_ALLOCATIONS"] = "NO_ALLOCATIONS";
  PostError2["JOURNAL_FAILED"] = "JOURNAL_FAILED";
  PostError2["HASH_FAILED"] = "HASH_FAILED";
  PostError2["NO_FINANCIAL_ENTITY"] = "NO_FINANCIAL_ENTITY";
  return PostError2;
})(PostError || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AllocateError,
  ApproveError,
  CreateBillError,
  InvoiceError,
  PostError,
  ReadingError,
  TransitionError,
  UtilityBillStatus,
  UtilityImportMethod,
  UtilitySplitMethod
});
