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
var setup_exports = {};
__export(setup_exports, {
  setupFinancials: () => setupFinancials
});
module.exports = __toCommonJS(setup_exports);
var import_iam = require("@rentflow/iam");
var import_types = require("./types");
var import_client = require("@prisma/client");
async function setupFinancials(organizationId, orgName) {
  const entity = await import_iam.prisma.financialEntity.create({
    data: {
      organizationId,
      name: `${orgName} Financials`
    }
  });
  const accountsToCreate = [
    { code: import_types.CHART_OF_ACCOUNTS.CASH_IN_BANK, name: "Cash in Bank", type: import_client.AccountType.ASSET },
    { code: import_types.CHART_OF_ACCOUNTS.ACCOUNTS_RECEIVABLE, name: "Accounts Receivable", type: import_client.AccountType.ASSET },
    { code: import_types.CHART_OF_ACCOUNTS.UNDEPOSITED_FUNDS, name: "Undeposited Funds", type: import_client.AccountType.ASSET },
    { code: import_types.CHART_OF_ACCOUNTS.SECURITY_DEPOSITS_LIABILITY, name: "Security Deposits Held", type: import_client.AccountType.LIABILITY },
    { code: import_types.CHART_OF_ACCOUNTS.ACCOUNTS_PAYABLE, name: "Accounts Payable", type: import_client.AccountType.LIABILITY },
    { code: import_types.CHART_OF_ACCOUNTS.PREPAID_RENT, name: "Prepaid Rent", type: import_client.AccountType.LIABILITY },
    { code: import_types.CHART_OF_ACCOUNTS.OWNER_EQUITY, name: "Owner Equity", type: import_client.AccountType.EQUITY },
    { code: import_types.CHART_OF_ACCOUNTS.RENTAL_INCOME, name: "Rental Income", type: import_client.AccountType.INCOME },
    { code: import_types.CHART_OF_ACCOUNTS.UTILITY_RECOVERY_INCOME, name: "Utility Recovery", type: import_client.AccountType.INCOME },
    { code: import_types.CHART_OF_ACCOUNTS.LATE_FEES_INCOME, name: "Late Fees Income", type: import_client.AccountType.INCOME },
    { code: import_types.CHART_OF_ACCOUNTS.MAINTENANCE_INCOME, name: "Maintenance Income", type: import_client.AccountType.INCOME },
    { code: import_types.CHART_OF_ACCOUNTS.MAINTENANCE_EXPENSE, name: "Maintenance Expense", type: import_client.AccountType.EXPENSE },
    { code: import_types.CHART_OF_ACCOUNTS.UTILITY_EXPENSE, name: "Utility Cost", type: import_client.AccountType.EXPENSE },
    { code: import_types.CHART_OF_ACCOUNTS.MANAGEMENT_FEES, name: "Management Fees", type: import_client.AccountType.EXPENSE }
  ];
  for (const acc of accountsToCreate) {
    await import_iam.prisma.account.create({
      data: {
        entityId: entity.id,
        code: acc.code,
        name: acc.name,
        type: acc.type,
        isSystem: true
      }
    });
  }
  return entity;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  setupFinancials
});
//# sourceMappingURL=setup.js.map
