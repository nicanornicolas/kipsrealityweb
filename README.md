# <img src="/public/favicon/favicon.ico" alt="RentFlow360 Logo" width="120" height="40"> RentFlow360

RentFlow360 is a monorepo-based property operations platform for leasing, tenant management, invoicing, payments, finance, utilities, maintenance, vendor workflows, document signing, and portfolio analytics.

The codebase is built around a Next.js App Router application, domain libraries under Nx, a Prisma/MySQL data layer, and a BullMQ-powered background worker for asynchronous processing.

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

- Node.js 20+
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

## Setup

### Prerequisites

- Node.js 20 or newer
- npm
- MySQL
- Redis for worker/job processing

### Install

```bash
npm install
```

### Environment Variables

Create a local environment file such as `.env.local` with the required values for your deployment.

Minimum core variables usually include:

```env
DATABASE_URL=mysql://user:password@localhost:3306/rentflow360
NEXTAUTH_SECRET=replace-me
NEXTAUTH_URL=http://localhost:3000
REDIS_URL=redis://localhost:6379
```

Depending on the features you enable, you may also need values for Stripe, Plaid, Paystack, M-Pesa, Cloudinary, MinIO/S3, Twilio, AfricasTalking, and email delivery.

## Developer Onboarding

### Recommended Local Workflow

1. Install dependencies with `npm install`.
2. Copy your environment values into `.env.local` and confirm `DATABASE_URL`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL`, and `REDIS_URL` are set.
3. Generate the Prisma client with `npm run db:generate`.
4. Apply migrations with `npm run db:migrate`.
5. Seed the database with `npm run db:seed` when you need sample data.
6. Start the main app with `npm run dev`.
7. Start the worker with `npm run worker:dev` if you need webhook, email, or DSS job processing.

### Common Local Issues

- If the app starts but auth or payment flows fail, verify the relevant provider keys are present in the environment.
- If queue-driven tasks are not processing, check that Redis is reachable and `REDIS_URL` points to the correct instance.
- If database access fails, confirm MySQL is running and that Prisma migrations have been applied.
- If image URLs fail to load in production, check the remote image host configuration in `next.config.ts`.
- If TypeScript issues appear during build, remember the current Next.js config ignores build-time type errors; fix the underlying issues before release.
- If a role-based page redirects unexpectedly, review the active user role and organization membership in the auth layer.

### Working With The Main Domains

- Use `libs/property` for property, unit, and listing workflows.
- Use `libs/lease` for lease lifecycle, amendments, renewals, and signing flows.
- Use `libs/finance` for ledger, journal, and billing behavior.
- Use `libs/payments` for payment strategy logic, checkout sessions, and webhook processing.
- Use `libs/dss` for document signing, hashing, notary, and final PDF generation.
- Use `libs/utilities` for utility billing, readings, notifications, and background queue helpers.
- Use `libs/iam` for authentication, current-user helpers, and access control.

### Database

Generate the Prisma client:

```bash
npm run db:generate
```

Apply migrations:

```bash
npm run db:migrate
```

Seed data:

```bash
npm run db:seed
```

Optional local database utilities:

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

Production build:

```bash
npm run build
```

Standalone Next.js start:

```bash
npm run start:standalone
```

Standard Nx start target:

```bash
npm start
```

Worker production run:

```bash
npm run worker:start
```

## Scripts

### App and Worker

- `npm run dev` - Start the Next.js development server through Nx
- `npm run build` - Build the application for production
- `npm run postbuild` - Create the standalone server output
- `npm start` - Start the app through the Nx start target
- `npm run start:standalone` - Run the standalone production server directly
- `npm run worker:dev` - Start the background worker in development
- `npm run worker:build` - Build the worker
- `npm run worker:start` - Run the worker in production mode

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

### Utilities

- `npm run lint` - Run linting
- `npm run clean` - Remove the Next.js build output
- `npm run create-admin` - Create an admin user from the CLI

### Test Database Containers

- `npm run docker:test:up` - Start the test database container stack
- `npm run docker:test:down` - Stop the test database container stack
- `npm run docker:test:clean` - Stop and remove test volumes

## Testing Notes

- Unit tests use Vitest.
- Integration tests use a separate Vitest configuration.
- End-to-end tests use Playwright and write reports to `playwright-report/`.
- The repository includes dedicated test seeding for isolated E2E flows.

## Deployment Notes

- The Next.js app is configured for `output: 'standalone'`, which is useful for Docker and VPS deployments.
- The repo includes Docker and Docker Compose files for production and test environments.
- `next.config.ts` currently allows a small set of remote image sources and includes a custom webpack alias for `fflate` browser compatibility.
- TypeScript build errors are currently ignored in the Next.js config, so builds can succeed even when type issues remain. That should be treated as a deployment risk rather than a feature.

## Deployment Guide

### Docker And VPS

- Build the app with `npm run build`.
- Run the standalone server with `npm run start:standalone` or the Nx start target with `npm start`.
- Ensure MySQL and Redis are reachable from the deployment host.
- Set the same environment variables used locally, plus production-specific credentials for payment, storage, email, and SMS providers.
- Use the included Docker and Compose files to mirror production behavior in a controlled environment.
- Start the background worker separately with `npm run worker:start` so webhook and asynchronous jobs continue to process.

### Vercel

- The app can be deployed on Vercel for the web frontend and API routes.
- Keep `output: 'standalone'` in mind for Docker-based releases, but do not rely on the worker being hosted by Vercel.
- Store production secrets in the Vercel environment settings rather than in source control.
- Confirm all remote image hosts and callback URLs match the production domain.

### Release Checklist

- Run `npm run lint`.
- Run `npm run test:unit`.
- Run `npm run test:integration` if your database environment is available.
- Run `npm run test:e2e:ci` or the broader `npm run test:all` pipeline before promoting a release.
- Apply Prisma migrations before or during deployment, depending on your release strategy.
- Verify the worker, Redis connection, and webhook endpoints after the app is live.

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
