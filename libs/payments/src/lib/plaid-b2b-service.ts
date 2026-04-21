import { Configuration, PlaidApi, PlaidEnvironments, Products, CountryCode } from 'plaid';
import { prisma } from '@rentflow/iam';
import { Prisma } from '@prisma/client';

const config = new Configuration({
  basePath: PlaidEnvironments[process.env.PLAID_ENV || 'sandbox'],
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
      'PLAID-SECRET': process.env.PLAID_SECRET,
    },
  },
});

const plaidClient = new PlaidApi(config);

export class PlaidB2BService {
  /**
   * Generates a Link Token for the Property Manager to connect the Business Account.
   */
  async createBusinessLinkToken(organizationId: string, userId: string) {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? process.env.APP_URL ?? '';
    const webhookUrl = appUrl ? `${appUrl}/api/webhooks/plaid` : undefined;

    const response = await plaidClient.linkTokenCreate({
      user: { client_user_id: userId },
      client_name: 'RentFlow360 Business',
      products: [Products.Transactions],
      country_codes: [CountryCode.Us],
      language: 'en',
      webhook: webhookUrl,
    });

    return response.data.link_token;
  }

  /**
   * Exchanges public token and saves the Business Bank Account.
   */
  async exchangeAndSaveAccount(publicToken: string, organizationId: string) {
    const exchangeResponse = await plaidClient.itemPublicTokenExchange({
      public_token: publicToken,
    });

    const accessToken = exchangeResponse.data.access_token;
    const itemId = exchangeResponse.data.item_id;

    const accountsResponse = await plaidClient.accountsGet({
      access_token: accessToken,
    });

    const account = accountsResponse.data.accounts[0];
    if (!account) {
      throw new Error('No accounts returned by Plaid for this item');
    }

    return prisma.connectedBankAccount.create({
      data: {
        organizationId,
        plaidAccessToken: accessToken,
        plaidItemId: itemId,
        institutionName: 'Verified Institution',
        accountName: account.name,
        accountType: account.type,
        accountSubtype: account.subtype || 'checking',
        mask: account.mask || '0000',
      },
    });
  }

  /**
   * Pulls recent transactions and upserts them for idempotent sync.
   */
  async syncTransactions(organizationId: string, accessToken: string) {
    const now = new Date();
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
        options: { count, offset },
      });

      const transactions = response.data.transactions;
      total = response.data.total_transactions;

      for (const tx of transactions) {
        await prisma.bankTransaction.upsert({
          where: { plaidTransactionId: tx.transaction_id },
          update: {
            status: 'UNMATCHED',
          },
          create: {
            organizationId,
            plaidTransactionId: tx.transaction_id,
            accountId: tx.account_id,
            amount: new Prisma.Decimal(tx.amount),
            date: new Date(tx.date),
            merchantName: tx.merchant_name || tx.name,
            description: tx.name,
            status: 'UNMATCHED',
          },
        });
        synced += 1;
      }

      offset += transactions.length;
    } while (offset < total);

    return synced;
  }
}