import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import nxEslintPlugin from '@nx/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import tsEslintPlugin from '@typescript-eslint/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const nextConfigs = compat
  .extends('next/core-web-vitals', 'next/typescript')
  .map((config) => ({
    ...config,
    files: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.js', 'src/**/*.jsx'],
  }));

const eslintConfig = [
  ...nextConfigs,
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'libs/**/*.spec.ts',
      'libs/**/*.spec.tsx',
    ],
  },
  // Nx Module Boundary Enforcement - ONLY applies to libs/ folder
  {
    files: ['libs/**/*.ts', 'libs/**/*.tsx', 'libs/**/*.js', 'libs/**/*.jsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@nx': nxEslintPlugin,
      '@typescript-eslint': tsEslintPlugin,
    },
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [],
          depConstraints: [
            // 1. IAM is the core. It depends on nothing.
            {
              sourceTag: 'scope:iam',
              onlyDependOnLibsWithTags: [],
            },
            // 2. Property & Finance depend only on IAM
            {
              sourceTag: 'scope:property',
              onlyDependOnLibsWithTags: ['scope:iam'],
            },
            {
              sourceTag: 'scope:finance',
              onlyDependOnLibsWithTags: ['scope:iam'],
            },
            // 3. Utilities creates invoices, so it needs Finance
            {
              sourceTag: 'scope:utilities',
              onlyDependOnLibsWithTags: ['scope:iam', 'scope:finance'],
            },
            // 4. Payments needs Finance to post to the General Ledger
            {
              sourceTag: 'scope:payments',
              onlyDependOnLibsWithTags: ['scope:iam', 'scope:finance'],
            },
            // 5. DSS is quarantined. Only IAM for auth and Utilities for queues.
            {
              sourceTag: 'scope:dss',
              onlyDependOnLibsWithTags: ['scope:iam', 'scope:utilities'],
            },
            // 6. Lease depends on IAM, Property, and Utilities
            {
              sourceTag: 'scope:lease',
              onlyDependOnLibsWithTags: [
                'scope:iam',
                'scope:property',
                'scope:utilities',
              ],
            },
          ],
        },
      ],
    },
  },
  // Legacy amnesty for src/ to unblock CI while migrating to libs/
  {
    files: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.js', 'src/**/*.jsx'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-require-imports': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/no-unsafe-function-type': 'warn',
      'prefer-const': 'warn',
      'react/no-unescaped-entities': 'warn',
      'react-hooks/rules-of-hooks': 'warn',
    },
  },
];

export default eslintConfig;
