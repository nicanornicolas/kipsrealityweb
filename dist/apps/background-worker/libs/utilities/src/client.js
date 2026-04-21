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
var client_exports = {};
__export(client_exports, {
  AllocateError: () => import_utility_types.AllocateError,
  ApproveError: () => import_utility_types.ApproveError,
  CreateBillError: () => import_utility_types.CreateBillError,
  InvoiceError: () => import_utility_types.InvoiceError,
  PostError: () => import_utility_types.PostError,
  ReadingError: () => import_utility_types.ReadingError,
  TransitionError: () => import_utility_types.TransitionError,
  UtilityBillStatus: () => import_utility_types.UtilityBillStatus,
  UtilityImportMethod: () => import_utility_types.UtilityImportMethod,
  UtilitySplitMethod: () => import_utility_types.UtilitySplitMethod
});
module.exports = __toCommonJS(client_exports);
var import_utility_types = require("./lib/utility-types");
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
//# sourceMappingURL=client.js.map
