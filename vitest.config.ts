import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Use "node" environment for pure backend logic tests
    environment: 'node',
    
    // Enable globals for describe/it/expect without imports
    globals: true,
    
    // Point to tests/unit/setup.ts for the isolation firewall
    setupFiles: ['tests/unit/setup.ts'],
    
    // Test patterns for unit tests (exclude Playwright tests)
    include: [
      'tests/unit/**/*.test.ts',
      'tests/unit/**/*.test.tsx',
      'src/__tests__/**/*.test.ts',
      'src/__tests__/**/*.test.tsx',
    ],
    
    // Exclude Playwright test files that use @playwright/test
    // Also exclude integration tests that require real database connections
    exclude: [
      'tests/unit/audit-trail-functionality.test.ts',
      'tests/unit/comprehensive-audit-logging.test.ts',
      'tests/unit/listing-creation-completeness.test.ts',
      'tests/unit/listing-decision-integration.test.ts',
      'tests/unit/status-display-consistency.test.ts',
      'tests/unit/error-scenarios.test.tsx',
    ],
    
    // V8 coverage provider with text, json, and html reporters
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules',
        'tests',
        '.next',
        'prisma',
        '**/*.config.*',
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
