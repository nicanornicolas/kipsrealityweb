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
var types_exports = {};
__export(types_exports, {
  CHART_OF_ACCOUNTS: () => CHART_OF_ACCOUNTS
});
module.exports = __toCommonJS(types_exports);
const CHART_OF_ACCOUNTS = {
  // ASSETS (1000-1999)
  CASH_IN_BANK: "1000",
  ACCOUNTS_RECEIVABLE: "1100",
  // Money tenants owe us
  UNDEPOSITED_FUNDS: "1200",
  // Money received but not bank-cleared
  // LIABILITIES (2000-2999)
  SECURITY_DEPOSITS_LIABILITY: "2100",
  // Money held for tenants
  ACCOUNTS_PAYABLE: "2200",
  // Money we owe vendors
  SALES_TAX_PAYABLE: "2250",
  // USA sales tax collected from tenants
  PREPAID_RENT: "2300",
  // Rent paid in advance
  // EQUITY (3000-3999)
  OWNER_EQUITY: "3000",
  // INCOME (4000-4999)
  RENTAL_INCOME: "4000",
  UTILITY_RECOVERY_INCOME: "4100",
  // Tenant paying back utility bill
  LATE_FEES_INCOME: "4200",
  MAINTENANCE_INCOME: "4300",
  // Tenant paying back damage
  DOCUMENT_SIGNING_INCOME: "4400",
  // Document signing service fees
  // EXPENSES (5000-5999)
  MAINTENANCE_EXPENSE: "5100",
  // Cost of vendor
  UTILITY_EXPENSE: "5200",
  // Cost of water/power bill
  MANAGEMENT_FEES: "5300"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CHART_OF_ACCOUNTS
});
