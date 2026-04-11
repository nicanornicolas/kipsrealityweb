-- RentFlow360 MySQL bootstrap template
-- Safe template only. Replace placeholder values before use.
-- Do not commit real passwords or host-specific values.

-- Create environment-specific databases
CREATE DATABASE IF NOT EXISTS rentflow360_dev
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

CREATE DATABASE IF NOT EXISTS rentflow360_test
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

CREATE DATABASE IF NOT EXISTS rentflow360_prod
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- Admin user for managed schema and maintenance tasks
CREATE USER IF NOT EXISTS 'rf360_admin'@'%' IDENTIFIED BY 'REPLACE_WITH_STRONG_ADMIN_PASSWORD';

-- Application runtime user
CREATE USER IF NOT EXISTS 'rf360_app'@'%' IDENTIFIED BY 'REPLACE_WITH_STRONG_APP_PASSWORD';

-- Optional read-only user for reporting/debug access
CREATE USER IF NOT EXISTS 'rf360_readonly'@'%' IDENTIFIED BY 'REPLACE_WITH_STRONG_READONLY_PASSWORD';

-- Privileges
GRANT ALL PRIVILEGES ON rentflow360_prod.* TO 'rf360_admin'@'%';

GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER
ON rentflow360_prod.* TO 'rf360_app'@'%';

GRANT SELECT ON rentflow360_prod.* TO 'rf360_readonly'@'%';

-- Optional dev/test grants
GRANT ALL PRIVILEGES ON rentflow360_dev.* TO 'rf360_admin'@'%';
GRANT ALL PRIVILEGES ON rentflow360_test.* TO 'rf360_admin'@'%';

GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER
ON rentflow360_dev.* TO 'rf360_app'@'%';

GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER
ON rentflow360_test.* TO 'rf360_app'@'%';

FLUSH PRIVILEGES;

-- Verification helpers
SHOW DATABASES LIKE 'rentflow360_%';
SHOW GRANTS FOR 'rf360_admin'@'%';
SHOW GRANTS FOR 'rf360_app'@'%';
SHOW GRANTS FOR 'rf360_readonly'@'%';