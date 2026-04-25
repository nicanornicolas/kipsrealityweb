# <img src="/public/favicon/favicon.ico" alt="RentFlow360 Logo" width="120" height="40"> RentFlow360

RentFlow360 is a monorepo-based property operations platform for leasing, tenant management, invoicing, payments, finance, utilities, maintenance, vendor workflows, document signing, and portfolio analytics.

The codebase is built around a Next.js App Router application, domain libraries under Nx, a Prisma/MySQL data layer, and a BullMQ-powered background worker for asynchronous processing.

**For Stakeholders:** RentFlow360 centralizes the full rental operations lifecycle, from property and lease workflows to billing, payments, utilities, and compliance-ready audit trails. The platform is designed to reduce manual reconciliation, speed up tenant/vendor processes, and give teams a single operational source of truth.

## What This Repository Contains

- A public website for marketing, blog, plans, contact, privacy policy, and marketplace browsing.
- Role-based dashboard areas for admin, property manager, tenant, vendor, and agent workflows.
- API routes for authentication, leases, invoices, finance, utilities, payments, vendors, listings, webhooks, and health checks.
- Domain libraries for identity and access, property management, leases, finance, payments, document signing, and utilities.
- A separate background worker application for Stripe webhooks, DSS PDF generation, email notifications, and outbound webhooks.

## Product Scope

RentFlow360 is intended to support the full rental lifecycle:

- Portfolio setup and property/unit management
- Tenant onboarding, leases, amendments, renewals, and signatures
- Invoice generation, receipts, collections, and reversals
- Ledger and journal workflows for finance operations
- Utility billing, meter readings, allocations, and disputes
- Maintenance requests and vendor coordination
- Marketplace/listing management
- Notifications via email, SMS, and webhooks
- Multi-region payment support including Stripe, Plaid, Paystack, and M-Pesa-oriented flows

## Tech Stack

### Frontend

- Next.js 16 App Router
- React 19
- TypeScript 5.9
- Tailwind CSS 4
- Radix UI and shadcn/ui-style primitives
- Material UI for selected admin surfaces
- React Hook Form and Zod for forms and validation
- TanStack React Query for client data fetching
- Framer Motion for animations
- Recharts, Chart.js, and ApexCharts for analytics

### Backend and Data

- Node.js 20 LTS (required for local development)
- Prisma ORM
- MySQL
- NextAuth-based authentication flows
- BullMQ with Redis for background jobs
- Stripe, Plaid, Paystack, and M-Pesa support across payment services
- Cloudinary and MinIO/S3-compatible storage usage
- Nodemailer, Twilio, and AfricasTalking for outbound messaging

### Tooling and Build

- Nx monorepo workspace
- ESLint and Vitest
- Playwright for end-to-end tests
- Docker-friendly standalone Next.js output

## Repository Layout

```text
src/
  app/                 Next.js routes, layouts, API routes, dashboards, and public pages
  components/          Shared UI components
  context/             React context providers
  hooks/               Shared React hooks
  lib/                 App utilities
  types/               Shared TypeScript types

apps/
  background-worker/    BullMQ worker service

libs/
  dss/                 Document signing, hashing, workflow, and notary logic
  finance/             Finance, ledger, journal, and billing services
  iam/                 Authentication, authorization, and current-user helpers
  lease/               Lease lifecycle, amendments, renewals, and signing
  payments/            Payment strategies, fraud checks, and external rails
  property/            Properties, units, listings, and property workflows
  utilities/           Utility billing, readings, allocations, notifications, and queues

prisma/
  schema.prisma        Database schema
  migrations/          Migration history
  seed.ts              Primary seed script
  seed.e2e.ts          E2E test seed script
```

## Main Application Areas

### Public Website

The public site includes routes for home, about, services, plans, contact, marketplace, blog, and privacy policy. The `src/app/(website)` area also contains listing creation and invitation flows for marketplace users and agents.

### Protected Dashboards

The dashboard routes are organized by role and domain. Current areas include:

- Admin dashboards for content and user management
- Property manager dashboards for properties, units, tenants, leases, finances, utilities, documents, listings, vendors, and maintenance
- Tenant dashboards for leases, invoices, utilities, settings, and DSS signing
- Vendor dashboards for vendor-specific operations
- Agent flows for marketplace listing and invitation handling

### API Surface

The application exposes a broad API surface under `src/app/api` for:

- Authentication and user management
- Lease lifecycle and signing
- Invoices and payment processing
- Finance summaries, ledger, and journal data
- Utility readings, bills, allocations, and calculations
- Listings, categories, services, vendors, and tenant data
- Webhooks and internal job processing
- Health and diagnostic checks

## Background Worker

The worker application lives in `apps/background-worker` and runs separate BullMQ queues for asynchronous jobs. Current responsibilities include:

- Stripe webhook processing
- DSS final PDF generation
- Signature invitation email delivery
- Outbound webhook dispatch

The worker listens on port `3001` by default and connects to Redis using `REDIS_URL`.

### How Main Components Fit Together

```text
Synchronous request flow
User/Browser
  -> Next.js App Router page or API route (src/app)
  -> Domain logic in libs/* (iam/property/lease/finance/payments/dss/utilities)
  -> Prisma ORM
  -> MySQL
  -> JSON/HTML response

Asynchronous job flow
App/API route
  -> enqueue BullMQ job in Redis
  -> background worker (apps/background-worker)
  -> provider integrations (Stripe/Plaid/email/SMS/webhooks/PDF generation)
  -> persistence updates + outbound notifications
```

## Setup

### Prerequisites

Install prerequisites based on your workflow:

- Core local app run: Node.js 20 LTS, npm, MySQL
- Async/webhook workflows: Docker Desktop (or Docker Engine) to run Redis via Compose, plus background worker (`npm run worker:dev`)
- Integration testing: Docker + Docker Compose (for `docker-compose.test.yml`)
- E2E testing: Playwright browsers (`npx playwright install`)

### Docker Infrastructure Commands (Local)

Run local infrastructure from the root of the repo:

```bash
docker compose up -d db redis mailpit minio
```

If your Docker installation only supports legacy syntax, use:

```bash
docker-compose up -d db redis mailpit minio
```

Stop local infrastructure:

```bash
docker compose down
```

### Quick Start (5 Commands)

Run the core app locally with these commands after prerequisites are ready:

```bash
npm install
cp .env.example .env.local
npm run db:migrate
npm run db:seed
npm run dev
```

Windows PowerShell copy alternative:

```powershell
Copy-Item .env.example .env.local
```

Optional command for asynchronous jobs and webhook processing:

```bash
npm run worker:dev
```

If Redis is not running outside Docker, start it first using the Docker infrastructure command above.

## Environment Variables

### Source Of Truth Files

- `.env.example` for full local template
- `.env.docker` for Docker-based local development
- `.env.production` for production deployment template
- `.env.test` for integration and E2E baseline testing
- `.env.test.local` for local-only test overrides

### Environment Matrix By Domain

| Domain | Key examples | Required/Optional | Typical environments |
| --- | --- | --- | --- |
| Database and queue | `DATABASE_URL`, `REDIS_URL` | Required for app + worker | local, docker, prod, test |
| Auth and internal security | `NEXTAUTH_SECRET`, `NEXTAUTH_URL`, `JWT_SECRET`, `JWT_REFRESH_SECRET`, `CRON_SECRET`, `INTERNAL_WEBHOOK_PROCESSOR_KEY` | Required for auth/secure jobs | local, docker, prod, test |
| App routing and URLs | `NEXT_PUBLIC_APP_URL`, `NEXT_PUBLIC_BASE_URL`, `NEXT_PUBLIC_API_URL` | Required by environment-specific routing needs | local, docker, prod |
| Storage and media | `S3_ENDPOINT`, `S3_BUCKET`, `S3_REGION`, `S3_ACCESS_KEY`, `S3_SECRET_KEY`, `S3_FORCE_PATH_STYLE`, `MINIO_USER`, `MINIO_PASSWORD`, `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`, `UPLOADTHING_SECRET`, `UPLOADTHING_TOKEN` | Required when those providers/features are enabled | local, docker, prod |
| Messaging and notifications | `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASSWORD`, `EMAIL_FROM_NAME`, `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_PHONE_NUMBER`, `AT_USERNAME`, `AT_API_KEY`, `AT_SENDER_ID`, `SMS_DRY_RUN` | SMTP is generally required; SMS keys are optional by feature | local, docker, prod, test |
| Payments and banking | `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `PAYSTACK_SECRET_KEY`, `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY`, `PAYSTACK_WEBHOOK_SECRET`, `PLAID_CLIENT_ID`, `PLAID_SECRET`, `PLAID_ENV`, `MPESA_CONSUMER_KEY`, `MPESA_CONSUMER_SECRET`, `MPESA_PASSKEY`, `MPESA_SHORTCODE`, `MPESA_ENV`, `USE_MPESA_DIRECT` | Required only for enabled rails | local, docker, prod, test |
| Encryption and sensitive data | `SSN_ENCRYPTION_KEY`, `PAYMENT_ENCRYPTION_KEY`, `PAYMENT_ENCRYPTION_KEY_METADATA`, `PAYMENT_ENCRYPTION_KEY_USER_INFO`, `PAYMENT_ENCRYPTION_KEY_TRANSACTION`, `PAYMENT_ENCRYPTION_KEY_WEBHOOK` | Required for regulated/sensitive payment and identity fields | local, docker, prod |
| Observability and feature toggles | `NEXT_PUBLIC_SENTRY_DSN`, `NEXT_PUBLIC_ENABLE_SENTRY_EXAMPLE`, `NEXT_PUBLIC_ENABLE_DEMO_CONTENT`, `VERCEL_URL`, `NEXT_PUBLIC_VERCEL_URL`, `CI`, `NEXT_PHASE` | Optional by deployment/testing profile | prod, vercel, ci |
| Test and UAT helpers | `PLAYWRIGHT_BROWSERS_PATH`, `SEED_STRIPE_PRICE_IDS`, `SMOKE_BASE_URL`, `UAT_ORG_ID`, `ENABLE_LEGACY_MPESA_TESTS`, `DEBUG` | Optional and workflow-specific | local test, ci, uat |

### Minimum Core Variables

For core local startup (without all third-party integrations), confirm these first:

```env
DATABASE_URL=mysql://user:password@localhost:3306/rentflow360
NEXTAUTH_SECRET=replace-me
NEXTAUTH_URL=http://localhost:3000
JWT_SECRET=replace-me
JWT_REFRESH_SECRET=replace-me
REDIS_URL=redis://localhost:6379
```

## Developer Onboarding

### Recommended Local Workflow

1. Run the 5-command quick start.
2. Start the worker with `npm run worker:dev` if webhook/email/DSS jobs are in scope.
3. Enable provider credentials incrementally in `.env.local` as features are developed.
4. Use test env files (`.env.test`, `.env.test.local`) for integration/E2E flows.

### Common Local Issues

- If auth fails, verify `NEXTAUTH_SECRET`, `NEXTAUTH_URL`, `JWT_SECRET`, and `JWT_REFRESH_SECRET`.
- If queue-driven tasks are not processing, check Redis and `REDIS_URL`, then run `npm run worker:dev`.
- If database access fails, verify MySQL, `DATABASE_URL`, and `npm run db:migrate`.
- If image URLs fail in deployment, review host configuration in `next.config.ts`.
- If role-based pages redirect unexpectedly, verify active role and organization membership.
- If you hit a Turbopack panic while compiling CSS/PostCSS on Windows:
  - Panic logs are written under `%LOCALAPPDATA%\\Temp` (example: `C:\\Users\\<you>\\AppData\\Local\\Temp\\next-panic-*.log`).
  - Use the safe fallback command: `npm run dev` (explicit `--webpack` default).
  - Retry Turbopack intentionally after dependency/config updates with: `npm run dev:turbo`.

### Local Runtime Policy (Windows-First)

- Local development is standardized on Node 20 LTS.
- This repo includes `.nvmrc` set to `20` to make version switching consistent.
- Example:

```bash
nvm use
node -v
```

### Working With The Main Domains

- Use `libs/property` for property, unit, and listing workflows.
- Use `libs/lease` for lease lifecycle, amendments, renewals, and signing flows.
- Use `libs/finance` for ledger, journal, and billing behavior.
- Use `libs/payments` for payment strategies, checkout sessions, and webhook processing.
- Use `libs/dss` for document signing, hashing, notary, and final PDF generation.
- Use `libs/utilities` for utility billing, readings, notifications, and queue helpers.
- Use `libs/iam` for authentication, current-user helpers, and access control.

### Database Commands

```bash
npm run db:generate
npm run db:migrate
npm run db:seed
```

Optional utilities:

```bash
npm run db:dev
npm run db:push
npm run db:pull
npm run db:reset
npm run db:studio
```

## Development

Start the main app:

```bash
npm run dev
```

Start the background worker:

```bash
npm run worker:dev
```

The main app typically runs on port `3000`; the worker defaults to port `3001`.

## Build and Run

```bash
npm run build
npm run start:standalone
```

Alternative start targets:

- `npm start` for Nx start target
- `npm run worker:start` for worker production mode

## Scripts

### App and Worker

- `npm run dev` - Start the Next.js development server through Nx with explicit Webpack (safe default)
- `npm run dev:turbo` - Start the Next.js development server through Nx with Turbopack (opt-in)
- `npm run build` - Build the application for production
- `npm run postbuild` - Create the standalone server output
- `npm start` - Start the app through the Nx start target
- `npm run start:standalone` - Run the standalone production server directly
- `npm run worker:dev` - Start the background worker in development
- `npm run worker:build` - Build the worker
- `npm run worker:build:hotfix` - Production-oriented worker hotfix build
- `npm run worker:start` - Run the worker in production mode
- `npm run worker:pm2:start` - Start worker in PM2
- `npm run worker:pm2:restart` - Restart worker in PM2
- `npm run worker:pm2:logs` - Tail worker PM2 logs

### Database

- `npm run db:generate` - Generate Prisma client code
- `npm run db:migrate` - Deploy Prisma migrations
- `npm run db:dev` - Run interactive Prisma migrations
- `npm run db:push` - Push schema changes directly
- `npm run db:pull` - Pull schema from the database
- `npm run db:reset` - Reset the database with Prisma
- `npm run db:seed` - Seed the main database
- `npm run db:seed:test` - Seed the test database
- `npm run db:studio` - Open Prisma Studio
- `npm run test:studio` - Open Prisma Studio against the test environment

### Testing

- `npm run test:unit` - Run unit tests once with Vitest
- `npm run test:unit:watch` - Run Vitest in watch mode
- `npm run test:unit:coverage` - Generate unit test coverage
- `npm run test:integration` - Run integration tests
- `npm run test:integration:watch` - Watch integration tests
- `npm run test:e2e` - Run Playwright end-to-end tests with test env files
- `npm run test:e2e:ui` - Run Playwright in UI mode
- `npm run test:e2e:headed` - Run headed Playwright tests
- `npm run test:e2e:ci` - Run Playwright with HTML and JSON reporters
- `npm run test:e2e:debug` - Run Playwright debug mode
- `npm run test:all` - Run unit, integration, and E2E CI tests
- `npm run test:ci` - CI test pipeline shortcut

### UAT and Verification

- `npm run uat:finance:smoke`
- `npm run uat:finance:verify-core`
- `npm run uat:payments:strategy`
- `npm run uat:property:listing-lifecycle`
- `npm run uat:property:deactivation-recovery`
- `npm run uat:ui:dashboards`

### Test Database Containers

- `npm run docker:test:up` - Start the test database container stack
- `npm run docker:test:down` - Stop the test database container stack
- `npm run docker:test:clean` - Stop and remove test volumes

## Testing and Validation (What To Run When)

### Fast local checks (before opening a PR)

```bash
npm run lint
npm run test:unit
```

### Integration workflow (database-backed)

```bash
npm run docker:test:up
npm run test:integration
npm run docker:test:down
```

Direct Docker Compose equivalent (isolated test DB on `localhost:3307` from `docker-compose.test.yml`):

```bash
docker compose -f docker-compose.test.yml up -d
npm run test:integration
docker compose -f docker-compose.test.yml down
```

### E2E workflow

```bash
npx playwright install
npm run test:e2e:ci
```

### Full confidence run

```bash
npm run test:all
```

## Deployment Notes

- The Next.js app is configured for `output: 'standalone'` for VPS and container deployments.
- The repo includes Docker and Docker Compose files for production and test environments.
- `next.config.ts` includes remote image host controls and a custom webpack alias for `fflate`.
- TypeScript build errors are currently ignored in Next.js build settings; treat this as deployment risk and verify quality via lint/tests.

## Deployment Guide

### Production Overview (GoDaddy + PM2)

Primary production path for this repository is VPS deployment with PM2-managed processes.

High-level sequence:

```bash
git pull origin main
npm install
npm run db:migrate
npm run build
```

Start or restart application process:

```bash
pm2 restart kipsrealityweb || pm2 start npm --name "kipsrealityweb" -- start
```

Build and run worker with PM2:

```bash
npm run worker:build:hotfix
pm2 start ecosystem.config.js --only rentflow-worker
pm2 save
pm2 startup
pm2 logs rentflow-worker
```

Operational files used by this flow:

- `deploy.sh` for app-side deployment sequence
- `ecosystem.config.js` for worker PM2 configuration
- `The GoDaddy Deployment Commands.txt` for worker deployment commands

### Docker and VPS Alternative

- Use `docker-compose.prod.yml` for containerized production topology.
- Ensure `.env.production` is complete before running containers.
- Start migration/app/worker services together via Docker Compose.
- Use `MINIO_GODADDY_DEPLOYMENT_GUIDE.md` for MinIO S3-compatible storage setup on GoDaddy VPS.

### Vercel Alternative

- Deploy frontend and API routes on Vercel when desired.
- Keep worker processing external to Vercel (PM2/VPS or equivalent).
- Configure production secrets in Vercel environment settings.
- Confirm callback URLs, webhook URLs, and image hosts for the production domain.

### Release Checklist

- Run `npm run lint`.
- Run `npm run test:unit`.
- Run `npm run test:integration` when database-backed changes are included.
- Run `npm run test:e2e:ci` or `npm run test:all` before release.
- Apply Prisma migrations.
- Verify post-deploy health checks: app endpoint (`/api/health`), worker status/logs in PM2, and Redis/webhook processing behavior.

## Security and Operational Considerations

- RBAC is part of the application design across admin, property manager, tenant, vendor, and agent workflows.
- Sensitive values should stay in environment variables and not be committed to source control.
- The platform uses webhook, finance, payment, and notification workflows, so observability and audit logging matter.
- For production, Redis, MySQL, and third-party integration credentials must be configured explicitly.

## Contributors

- Daniel Ruto - Founder and CEO
- Alex Kemboi - Product and Project Manager
- Nicanor Nicolas - Backend Engineer
- Yvonne Gat - Front End Developer
- Silvia - Front End Developer
- Hassan - Backend Engineer

## License

This project is licensed under the Kipsreality License.
