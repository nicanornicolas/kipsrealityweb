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
var plaid_b2b_service_exports = {};
__export(plaid_b2b_service_exports, {
  PlaidB2BService: () => PlaidB2BService
});
module.exports = __toCommonJS(plaid_b2b_service_exports);
var import_plaid = require("plaid");
var import_iam = require("@rentflow/iam");
var import_client = require("@prisma/client");
const config = new import_plaid.Configuration({
  basePath: import_plaid.PlaidEnvironments[process.env.PLAID_ENV || "sandbox"],
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID,
      "PLAID-SECRET": process.env.PLAID_SECRET
    }
  }
});
const plaidClient = new import_plaid.PlaidApi(config);
class PlaidB2BService {
  /**
   * Generates a Link Token for the Property Manager to connect the Business Account.
   */
  async createBusinessLinkToken(organizationId, userId) {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? process.env.APP_URL ?? "";
    const webhookUrl = appUrl ? `${appUrl}/api/webhooks/plaid` : void 0;
    const response = await plaidClient.linkTokenCreate({
      user: { client_user_id: userId },
      client_name: "RentFlow360 Business",
      products: [import_plaid.Products.Transactions],
      country_codes: [import_plaid.CountryCode.Us],
      language: "en",
      webhook: webhookUrl
    });
    return response.data.link_token;
  }
  /**
   * Exchanges public token and saves the Business Bank Account.
   */
  async exchangeAndSaveAccount(publicToken, organizationId) {
    const exchangeResponse = await plaidClient.itemPublicTokenExchange({
      public_token: publicToken
    });
    const accessToken = exchangeResponse.data.access_token;
    const itemId = exchangeResponse.data.item_id;
    const accountsResponse = await plaidClient.accountsGet({
      access_token: accessToken
    });
    const account = accountsResponse.data.accounts[0];
    if (!account) {
      throw new Error("No accounts returned by Plaid for this item");
    }
    return import_iam.prisma.connectedBankAccount.create({
      data: {
        organizationId,
        plaidAccessToken: accessToken,
        plaidItemId: itemId,
        institutionName: "Verified Institution",
        accountName: account.name,
        accountType: account.type,
        accountSubtype: account.subtype || "checking",
        mask: account.mask || "0000"
      }
    });
  }
  /**
   * Pulls recent transactions and upserts them for idempotent sync.
   */
  async syncTransactions(organizationId, accessToken) {
    const now = /* @__PURE__ */ new Date();
    const thirtyDaysAgo = new Date(now);
    thirtyDaysAgo.setDate(now.getDate() - 30);
    const startDate = thirtyDaysAgo.toISOString().slice(0, 10);
    const endDate = now.toISOString().slice(0, 10);
    let offset = 0;
    const count = 100;
    let total = 0;
    let synced = 0;
    do {
      const response = await plaidClient.transactionsGet({
        access_token: accessToken,
        start_date: startDate,
        end_date: endDate,
        options: { count, offset }
      });
      const transactions = response.data.transactions;
      total = response.data.total_transactions;
      for (const tx of transactions) {
        await import_iam.prisma.bankTransaction.upsert({
          where: { plaidTransactionId: tx.transaction_id },
          update: {
            status: "UNMATCHED"
          },
          create: {
            organizationId,
            plaidTransactionId: tx.transaction_id,
            accountId: tx.account_id,
            amount: new import_client.Prisma.Decimal(tx.amount),
            date: new Date(tx.date),
            merchantName: tx.merchant_name || tx.name,
            description: tx.name,
            status: "UNMATCHED"
          }
        });
        synced += 1;
      }
      offset += transactions.length;
    } while (offset < total);
    return synced;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PlaidB2BService
});
