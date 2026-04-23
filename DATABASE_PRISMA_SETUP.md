# Complete Database and Prisma Setup - RentFlow360

## 1. Introduction
This guide provides an end-to-end setup for MySQL + Prisma in RentFlow360, including:
- Secure server configuration
- User and privilege design
- Prisma environment and migration workflow
- Backup, recovery, and maintenance
- Troubleshooting

This document is aligned with the current project structure (`prisma/schema.prisma`, `prisma.config.ts`, Next.js app, GitHub Actions).

## 2. Current State Summary
Known environment details:
- MySQL server hosted on VPS
- App uses Prisma with `prisma.config.ts`
- Prisma requires `DATABASE_URL` at runtime for commands like `prisma generate`
- CI and deployment are automated via GitHub Actions

Important:
- Never store real database passwords, SSH keys, or production secrets in git.
- If any credentials were shared in chat or docs, rotate them immediately.

## 3. Target Architecture
Use least-privilege users:
- `rf360_admin`: admin tasks from trusted IP(s) only
- `rf360_app`: app runtime user with only required DB permissions
- `rf360_readonly`: optional reporting/debug read-only user

Use separate databases/environments:
- `rentflow360_dev`
- `rentflow360_test`
- `rentflow360_prod`

## 4. MySQL Server Configuration
Edit MySQL config (Ubuntu path shown):

```bash
sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf
```

Recommended baseline:

```ini
[mysqld]
# Network
bind-address = 0.0.0.0
skip-name-resolve

# Security
local-infile = 0
symbolic-links = 0

# Connection limits
max_connections = 100
wait_timeout = 600
interactive_timeout = 600

# Logging
general_log = 0
slow_query_log = 1
long_query_time = 2
slow_query_log_file = /var/log/mysql/slow-query.log
log_error = /var/log/mysql/error.log
```

Apply and verify:

```bash
sudo systemctl restart mysql
sudo systemctl status mysql
sudo ss -tulpen | grep 3306
```

## 5. Database and User Setup
Connect as root:

```bash
sudo mysql -u root -p
```

Create databases:

```sql
CREATE DATABASE IF NOT EXISTS rentflow360_dev CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE DATABASE IF NOT EXISTS rentflow360_test CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE DATABASE IF NOT EXISTS rentflow360_prod CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

Create users (use strong, unique passwords):

```sql
CREATE USER IF NOT EXISTS 'rf360_admin'@'%' IDENTIFIED BY 'REPLACE_WITH_STRONG_PASSWORD';
CREATE USER IF NOT EXISTS 'rf360_app'@'%' IDENTIFIED BY 'REPLACE_WITH_STRONG_PASSWORD';
CREATE USER IF NOT EXISTS 'rf360_readonly'@'%' IDENTIFIED BY 'REPLACE_WITH_STRONG_PASSWORD';
```

Grant privileges:

```sql
GRANT ALL PRIVILEGES ON rentflow360_prod.* TO 'rf360_admin'@'%';

GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER
ON rentflow360_prod.* TO 'rf360_app'@'%';

GRANT SELECT ON rentflow360_prod.* TO 'rf360_readonly'@'%';

FLUSH PRIVILEGES;
```

Validate:

```sql
SHOW GRANTS FOR 'rf360_admin'@'%';
SHOW GRANTS FOR 'rf360_app'@'%';
SHOW GRANTS FOR 'rf360_readonly'@'%';
```

## 6. Firewall and Access Control
Allow MySQL only from trusted sources.

UFW example:

```bash
sudo ufw allow from <YOUR_PUBLIC_IP>/32 to any port 3306 proto tcp
sudo ufw status
```

Provider firewall/security group:
- Open `3306` only for known client IPs
- Keep SSH (`22`) restricted similarly

## 7. Prisma Setup (Project-Specific)
Install dependencies (already present in this project, listed here for completeness):

```bash
npm install -D prisma
npm install @prisma/client
```

If initializing a new repo:

```bash
npx prisma init
```

### Environment files
Use environment-specific URLs:

`.env.local` (development):

```env
DATABASE_URL=mysql://rf360_app:<PASSWORD>@<HOST>:3306/rentflow360_dev
```

`.env.test` (tests/CI):

```env
DATABASE_URL=mysql://rf360_app:<PASSWORD>@<HOST>:3306/rentflow360_test
```

Production secret (set in host/platform secret manager, not in git):

```env
DATABASE_URL=mysql://rf360_app:<PASSWORD>@<HOST>:3306/rentflow360_prod
```

### Prisma config behavior
Current `prisma.config.ts` requires `DATABASE_URL` and loads:
- `.env.test` in test mode
- `.env.local` then default `.env` otherwise

That means commands like `prisma generate` fail if `DATABASE_URL` is missing.

## 8. Prisma Workflow
### Generate client

```bash
npx prisma generate
```

Use after schema changes or fresh install.

### Development migration

```bash
npx prisma migrate dev --name <migration_name>
```

Use in dev to create migration files and apply locally.

### Production migration

```bash
npx prisma migrate deploy
```

Use in CI/CD and production only.

### Reset (development/testing only)

```bash
npx prisma migrate reset
```

Deletes data and rebuilds schema.

## 9. Application Integration
Use a singleton Prisma client in `src/lib/db` style module to avoid connection storms in dev hot reload.

Pattern:

```ts
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
```

## 10. Backup and Recovery
### Backup

```bash
mysqldump -u rf360_admin -p --single-transaction --routines --triggers rentflow360_prod > rentflow360_prod_$(date +%F).sql
```

### Restore

```bash
mysql -u rf360_admin -p rentflow360_prod < rentflow360_prod_YYYY-MM-DD.sql
```

Best practices:
- Daily backups + retention policy
- Off-server encrypted backup storage
- Quarterly restore drills

## 11. Monitoring and Maintenance
- Monitor slow query log weekly
- Track table/index growth
- Rotate DB passwords periodically
- Patch MySQL OS packages regularly
- Run `ANALYZE TABLE` / index reviews for large tables

## 12. CI/CD Notes for RentFlow360
- CI currently runs Prisma + tests; ensure test DB URL is valid in workflow env
- Deploy pipeline should only run DB migrations in production with controlled credentials
- Keep production DB credentials in GitHub Actions secrets, never hardcoded

## 13. Troubleshooting
### Error: Missing required environment variable: DATABASE_URL
Cause:
- Prisma command executed without `DATABASE_URL`

Fix:
- Set `DATABASE_URL` in `.env.local` (dev) or proper environment secret (CI/prod)
- Re-run:

```bash
npx prisma generate
```

### Error: Access denied for user
Cause:
- Wrong user/host grant or password

Fix:
- Check grants:

```sql
SHOW GRANTS FOR 'rf360_app'@'%';
```
- Verify firewall and host restrictions

### Error: Can not connect to MySQL server
Cause:
- `bind-address`/firewall/network restrictions

Fix:
- Confirm MySQL listens on `0.0.0.0:3306`
- Allow trusted IP in firewall/security group

## 14. Security Checklist
- Use unique passwords per user/environment
- Restrict 3306 by source IP
- Avoid `GRANT ALL ON *.*` for app users
- Do not commit `.env.local`, `.env.production`, or key material
- Rotate credentials after any accidental exposure

## 15. Quick Command Reference

```bash
# Prisma
npx prisma generate
npx prisma migrate dev --name init
npx prisma migrate deploy
npx prisma studio

# MySQL checks
sudo mysql -u root -p -e "SHOW DATABASES;"
sudo mysql -u root -p -e "SELECT user, host FROM mysql.user;"

# Service
sudo systemctl restart mysql
sudo systemctl status mysql
```
