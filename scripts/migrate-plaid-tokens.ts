import { PrismaClient } from '@prisma/client';
import {
  encryptPlaidAccessToken,
  isProbablyEncryptedPlaidToken,
  resolvePlaidAccessToken,
} from '@rentflow/payments';

const prisma = new PrismaClient();

async function migratePlaidTokens() {
  console.log('Starting Plaid token migration...');

  const accounts = await prisma.connectedBankAccount.findMany({
    select: {
      id: true,
      plaidAccessToken: true,
    },
    orderBy: { createdAt: 'asc' },
  });

  let migrated = 0;
  let skipped = 0;
  let failed = 0;

  for (const account of accounts) {
    const token = account.plaidAccessToken;

    if (!token) {
      console.log(`[SKIP] ${account.id} missing token`);
      skipped += 1;
      continue;
    }

    try {
      if (isProbablyEncryptedPlaidToken(token)) {
        // Ensure encrypted payload is actually decryptable with the active key.
        resolvePlaidAccessToken(token);
        console.log(`[SKIP] ${account.id} already encrypted`);
        skipped += 1;
        continue;
      }

      const encrypted = encryptPlaidAccessToken(token);
      await prisma.connectedBankAccount.update({
        where: { id: account.id },
        data: { plaidAccessToken: encrypted },
      });

      console.log(`[MIGRATED] ${account.id}`);
      migrated += 1;
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      console.error(`[FAILED] ${account.id}: ${message}`);
      failed += 1;
    }
  }

  console.log('Migration summary');
  console.log(`Migrated: ${migrated}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Failed: ${failed}`);

  if (failed > 0) {
    process.exitCode = 1;
  }
}

migratePlaidTokens()
  .catch((error: unknown) => {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Fatal migration error: ${message}`);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
