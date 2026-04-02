import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import nxEslintPlugin from '@nx/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "libs/**/*.spec.ts",
      "libs/**/*.spec.tsx",
    ],
  },
  // Nx Module Boundary Enforcement - ONLY applies to libs/ folder
  {
    files: ['libs/**/*.ts', 'libs/**/*.tsx', 'libs/**/*.js', 'libs/**/*.jsx'],
    plugins: {
      '@nx': nxEslintPlugin
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
              onlyDependOnLibsWithTags: []
            },
            // 2. Property & Finance depend only on IAM
            {
              sourceTag: 'scope:property',
              onlyDependOnLibsWithTags: ['scope:iam']
            },
            {
              sourceTag: 'scope:finance',
              onlyDependOnLibsWithTags: ['scope:iam']
            },
            // 3. Utilities creates invoices, so it needs Finance
            {
              sourceTag: 'scope:utilities',
              onlyDependOnLibsWithTags: ['scope:iam', 'scope:finance']
            },
            // 4. Payments needs Finance to post to the General Ledger
            {
              sourceTag: 'scope:payments',
              onlyDependOnLibsWithTags: ['scope:iam', 'scope:finance']
            },
            // 5. DSS is quarantined. Only IAM for auth.
            {
              sourceTag: 'scope:dss',
              onlyDependOnLibsWithTags: ['scope:iam']
            }
          ]
        }
      ]
    }
  }
];

export default eslintConfig;
