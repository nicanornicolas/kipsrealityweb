/**
 * Integration Test Setup
 * 
 * This setup file handles database connection lifecycle for integration tests.
 * It provides:
 * - Database connection management
 * - Schema migration before tests
 * - Database cleanup after each test
 * - Health check for test database
 * 
 * Uses MySQL 8.0 (matching production environment)
 */

import { beforeAll, afterAll, afterEach, beforeEach } from 'vitest';
import { PrismaClient } from '@prisma/client';

/**
 * Get the test database URL
 * Uses environment variable or defaults to localhost:3307
 */
function getTestDatabaseUrl(): string {
  return (
    process.env.INTEGRATION_TEST_DATABASE_URL ||
    process.env.DATABASE_URL ||
    'mysql://test_user:test_password@localhost:3307/rentflow_test'
  );
}

// Get the database URL for Prisma client initialization
const testDbUrl = getTestDatabaseUrl();

// Singleton Prisma client for integration tests
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    datasources: {
      db: {
        url: testDbUrl,
      },
    },
    log: process.env.DEBUG === 'true' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

/**
 * Wait for the database to be ready
 * Uses MySQL ping or a simple connection test
 */
async function waitForDatabase(maxAttempts = 30): Promise<boolean> {
  const dbUrl = getTestDatabaseUrl();
  
  for (let i = 0; i < maxAttempts; i++) {
    try {
      await prisma.$connect();
      console.log('✅ Test database is ready');
      return true;
    } catch (error) {
      console.log(`⏳ Waiting for test database... (attempt ${i + 1}/${maxAttempts})`);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  throw new Error('Test database failed to become ready');
}

/**
 * Wipe all tables in the test database
 * Uses MySQL-specific queries with backticks for table names
 * WARNING: This destroys all data in the test database
 */
async function wipeDatabase(): Promise<void> {
  console.log('🔄 Wiping test database...');
  
  try {
    // Disable foreign key checks before truncation
    await prisma.$executeRawUnsafe(`SET FOREIGN_KEY_CHECKS = 0;`);
    
    // Get all table names from information_schema (MySQL syntax)
    const tables = await prisma.$queryRawUnsafe(
      `SELECT TABLE_NAME 
       FROM information_schema.TABLES 
       WHERE TABLE_SCHEMA = DATABASE() 
       AND TABLE_TYPE = 'BASE TABLE'`
    ) as Array<{ TABLE_NAME: string }>;
    
    // Truncate all tables (using backticks for MySQL)
    for (const table of tables) {
      await prisma.$executeRawUnsafe(
        `TRUNCATE TABLE \`${table.TABLE_NAME}\``
      );
    }
    
    // Re-enable foreign key checks after truncation
    await prisma.$executeRawUnsafe(`SET FOREIGN_KEY_CHECKS = 1;`);
    
    console.log('✅ Test database wiped clean');
  } catch (error) {
    // Re-enable foreign key checks in case of error
    try {
      await prisma.$executeRawUnsafe(`SET FOREIGN_KEY_CHECKS = 1;`);
    } catch {
      // Ignore error during cleanup
    }
    console.error('Error wiping test database:', error);
    throw error;
  }
}

/**
 * Reset the test database - drops all tables and re-runs migrations
 * WARNING: This destroys all data in the test database
 */
async function resetTestDatabase(): Promise<void> {
  console.log('🔄 Resetting test database...');
  
  try {
    // Disable foreign key checks
    await prisma.$executeRawUnsafe(`SET FOREIGN_KEY_CHECKS = 0;`);
    
    // Get all table names from information_schema (MySQL syntax)
    const tables = await prisma.$queryRawUnsafe(
      `SELECT TABLE_NAME 
       FROM information_schema.TABLES 
       WHERE TABLE_SCHEMA = DATABASE() 
       AND TABLE_TYPE = 'BASE TABLE'`
    ) as Array<{ TABLE_NAME: string }>;
    
    // Drop all tables (using backticks for MySQL)
    for (const table of tables) {
      await prisma.$executeRawUnsafe(
        `DROP TABLE IF EXISTS \`${table.TABLE_NAME}\``
      );
    }
    
    // Re-enable foreign key checks
    await prisma.$executeRawUnsafe(`SET FOREIGN_KEY_CHECKS = 1;`);
    
    console.log('✅ Test database reset complete');
  } catch (error) {
    console.error('Error resetting test database:', error);
    throw error;
  }
}

// Before all tests - ensure database is ready
beforeAll(async () => {
  console.log('🚀 Starting integration test suite...');
  console.log(`📦 Test database: ${getTestDatabaseUrl()}`);
  
  try {
    // 1. First wait for database to be ready (handshake with Docker)
    await waitForDatabase();
    
    // 2. Explicitly establish connection (required for test environments)
    await prisma.$connect();
    
    // 3. Wipe DB between test runs for clean state
    await wipeDatabase();
  } catch (error) {
    console.error('❌ Failed to connect to test database');
    console.error('Make sure docker-compose.test.yml is running:');
    console.error('  docker-compose -f docker-compose.test.yml up -d');
    throw error;
  }
});

// After all tests - clean up
afterAll(async () => {
  console.log('🧹 Cleaning up after integration tests...');
  await prisma.$disconnect();
});

// Before each test - prepare fresh database state
beforeEach(async () => {
  // Optional: Wipe database before each test for isolation
  // Uncomment if you want fresh state for each test (slower but more isolated)
  // await wipeDatabase();
});

// After each test - cleanup
afterEach(async () => {
  // Clean up any test data created during the test
  // This is a safety net in case tests don't clean up themselves
  try {
    // Wipe all tables after each test to ensure isolation
    await wipeDatabase();
  } catch (error) {
    console.error('Error during test cleanup:', error);
  }
});

export { resetTestDatabase, wipeDatabase, getTestDatabaseUrl };
