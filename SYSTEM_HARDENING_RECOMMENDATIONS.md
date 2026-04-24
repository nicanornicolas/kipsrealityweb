# RentFlow360 System Hardening Recommendations

This document lists practical improvements to make the system more reliable, scalable, and easier to maintain.

## What Was Fixed In This Pass

1. Removed hardcoded localhost fallback from tenant invite API and switched to centralized server URL resolution.
2. Removed hardcoded localhost fallback from invite resend API and switched to centralized server URL resolution.
3. Removed hardcoded localhost fallback from lease signing flow when building tenant invite links.
4. Removed hardcoded localhost fallback from units server fetch logic.
5. Removed localhost fallback from property manager route debug host derivation.

## Priority 1 (Do Next)

1. Centralize all runtime configuration in one typed environment module (zod schema, required vs optional, startup validation).
2. Replace remaining hardcoded base URLs in API routes and shared libs with the same base URL resolver.
3. Replace placeholder endpoints like storage.example.com with real storage provider configuration and runtime guards.
4. Add a CI gate for hardcoded runtime values in src/app/api and src/lib.
5. Stop committing direct secret-like test keys in scripts; load from .env.test with safe defaults.

## Priority 2 (Reliability)

1. Add retry and timeout wrappers for external providers (Twilio, Africa's Talking, M-Pesa, Paystack, Plaid).
2. Add circuit-breaker style handling for flaky third-party services.
3. Standardize error envelopes for all API routes.
4. Add request correlation IDs and structured logs.
5. Add idempotency keys for payment and invite resend operations.

## Priority 3 (Testing)

1. Add unit tests for server base URL resolution paths (env, forwarded headers, host header).
2. Add integration tests for invite link generation in production and preview-style environments.
3. Add negative tests for missing env vars in critical modules.
4. Add smoke tests for each payment strategy and SMS provider selection path.
5. Track flaky tests and quarantine policy in CI.

## Priority 4 (Security and Compliance)

1. Enforce strict secret loading and fail-fast boot when required secrets are missing.
2. Add rate limiting and abuse protection for auth, invites, and OTP endpoints.
3. Add security headers and CSP review for dashboard and public pages.
4. Rotate and audit API keys and tokens used by scripts and local tools.
5. Add PII handling policy for logs and redact tenant-sensitive data.

## Priority 5 (Performance and DX)

1. Introduce caching policy for expensive dashboard queries.
2. Add query performance tracing and Prisma slow query thresholds.
3. Add module boundaries for domain packages (auth, leasing, payments, notifications).
4. Reduce script sprawl by consolidating one-off verify scripts into grouped commands.
5. Add architecture decision records for key platform choices.

## Suggested 2-Week Execution Plan

1. Week 1: env schema, base URL cleanup, CI hardcoding check, invite/payment reliability wrappers.
2. Week 2: integration tests for critical flows, rate limiting, structured logging, script consolidation.

## High-Risk Hardcoded Hotspots Found

1. src/app/api/lease/[id]/document/route.ts uses storage.example.com placeholder URL.
2. src/lib/constants.ts still has localhost fallback behavior.
3. src/app/api/auth/login/route.ts and src/app/api/auth/2fa/verify.ts contain local network URL checks.
4. scripts/preflight-test-services.js has an embedded fallback DB URL.

Addressing these will remove most runtime hardcoding risk in production paths.
