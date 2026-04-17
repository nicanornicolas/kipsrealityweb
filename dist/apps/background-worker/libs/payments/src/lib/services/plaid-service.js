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
var plaid_service_exports = {};
__export(plaid_service_exports, {
  checkBalance: () => checkBalance,
  createStripeBankAccountToken: () => createStripeBankAccountToken,
  plaidClient: () => plaidClient
});
module.exports = __toCommonJS(plaid_service_exports);
var import_plaid = require("plaid");
const configuration = new import_plaid.Configuration({
  basePath: import_plaid.PlaidEnvironments[process.env.PLAID_ENV || "sandbox"],
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID,
      "PLAID-SECRET": process.env.PLAID_SECRET
    }
  }
});
const plaidClient = new import_plaid.PlaidApi(configuration);
async function createStripeBankAccountToken(accessToken, accountId) {
  const response = await plaidClient.processorTokenCreate({
    access_token: accessToken,
    account_id: accountId,
    processor: "stripe"
    // Using type assertion due to Plaid enum type mismatch
  });
  return response.data.processor_token;
}
async function checkBalance(accessToken, accountId, amount) {
  try {
    const response = await plaidClient.accountsBalanceGet({
      access_token: accessToken
    });
    const account = response.data.accounts.find((a) => a.account_id === accountId);
    if (!account || !account.balances.available) {
      return { risk: "UNKNOWN", available: null };
    }
    if (account.balances.available < amount) {
      return { risk: "HIGH", available: account.balances.available };
    }
    return { risk: "LOW", available: account.balances.available };
  } catch (error) {
    console.error("Plaid checkBalance error:", error);
    return { risk: "UNKNOWN", available: null };
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  checkBalance,
  createStripeBankAccountToken,
  plaidClient
});
//# sourceMappingURL=plaid-service.js.map
