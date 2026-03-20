import { defineConfig } from 'vitest/config';
import dotenv from 'dotenv';
import path from 'path';

// Load .env.test for integration tests
dotenv.config({ path: path.resolve(process.cwd(), '.env.test') });

export default defineConfig({
  test: {
    // Integration tests run in Node environment but with real database connections
    environment: 'node',
    
    // Enable globals for describe/it/expect without imports
    globals: true,
    
    // Point to integration test setup - handles database connection lifecycle
    setupFiles: ['tests/integration/setup.ts'],
    
    // Test patterns for integration tests only
    include: [
      'tests/integration/**/*.test.ts',
      'tests/integration/**/*.test.tsx',
    ],
    
    // Integration tests may take longer due to DB operations
    testTimeout: 30000,
    hookTimeout: 30000,
    
    // Disable file parallelism to prevent race conditions with shared database
    fileParallelism: false,
    
    // V8 coverage provider - exclude integration-specific files
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules',
        'tests',
        '.next',
        'prisma',
        '**/*.config.*',
        '**/setup.ts',
        '**/seed*.ts',
        'scripts/**',
      ],
    },
  },
  
  // Path aliases: @ -> ./src
  resolve: {
    alias: {
      '@': './src',
    },
  },
});
