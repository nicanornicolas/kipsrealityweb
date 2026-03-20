/*
Warnings:

- The values [VERIFICATION,PASSWORD_RESET] on the enum `Otp_type` will be removed. If these variants are still used in the database, this will fail.
- You are about to drop the column `maintenanceRequestId` on the `gl_journal_entries` table. All the data in the column will be lost.
- The values [LATE_FEE,DEPOSIT] on the enum `invoice_type` will be removed. If these variants are still used in the database, this will fail.
- The values [NG,SA,RW,UG,TZ] on the enum `organizations_region` will be removed. If these variants are still used in the database, this will fail.
- You are about to drop the column `bank_name` on the `payment` table. All the data in the column will be lost.
- You are about to drop the column `countryCode` on the `payment` table. All the data in the column will be lost.
- You are about to drop the column `created_at` on the `payment` table. All the data in the column will be lost.
- You are about to drop the column `exchange_rate` on the `payment` table. All the data in the column will be lost.
- You are about to drop the column `failure_reason` on the `payment` table. All the data in the column will be lost.
- You are about to drop the column `ip_address` on the `payment` table. All the data in the column will be lost.
- You are about to drop the column `last_4` on the `payment` table. All the data in the column will be lost.
- You are about to drop the column `next_retry_at` on the `payment` table. All the data in the column will be lost.
- You are about to drop the column `paid_on` on the `payment` table. All the data in the column will be lost.
- You are about to drop the column `payment_method_id` on the `payment` table. All the data in the column will be lost.
- You are about to drop the column `processor` on the `payment` table. All the data in the column will be lost.
- You are about to drop the column `processor_id` on the `payment` table. All the data in the column will be lost.
- You are about to drop the column `processor_status` on the `payment` table. All the data in the column will be lost.
- You are about to drop the column `retry_count` on the `payment` table. All the data in the column will be lost.
- You are about to drop the column `routing_number` on the `payment` table. All the data in the column will be lost.
- You are about to drop the column `updated_at` on the `payment` table. All the data in the column will be lost.
- The values [CHECK,BANK_TRANSFER_MANUAL,BANK_TRANSFER_ACH,DEBIT_CARD,MOBILE_MONEY_MPESA,MOBILE_MONEY_AIRTEL,MOBILE_MONEY_OTHER,USSD,DIGITAL_WALLET_APPLE,DIGITAL_WALLET_GOOGLE,P2P_ZELLE,P2P_VENMO,CRYPTO,OTHER] on the enum `payment_method` will be removed. If these variants are still used in the database, this will fail.
- The values [COMPLETED,REFUNDED,CANCELLED] on the enum `payment_status` will be removed. If these variants are still used in the database, this will fail.
- The values [UTILITY,OTHER] on the enum `payment_type` will be removed. If these variants are still used in the database, this will fail.
- The primary key for the `payment_reversal` table will be changed. If it partially fails, the table could be left without primary key constraint.
- You are about to alter the column `id` on the `payment_reversal` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Char(36)`.
- You are about to alter the column `payment_id` on the `payment_reversal` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Char(36)`.
- You are about to alter the column `invoice_id` on the `payment_reversal` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Char(36)`.
- You are about to alter the column `amount` on the `payment_reversal` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Float`.
- You are about to alter the column `created_at` on the `payment_reversal` table. The data in that column could be lost. The data in that column will be cast from `DateTime(3)` to `DateTime(0)`.
- The primary key for the `receipt` table will be changed. If it partially fails, the table could be left without primary key constraint.
- You are about to drop the column `created_at` on the `receipt` table. All the data in the column will be lost.
- You are about to drop the column `issued_on` on the `receipt` table. All the data in the column will be lost.
- You are about to drop the column `updated_at` on the `receipt` table. All the data in the column will be lost.
- You are about to alter the column `id` on the `receipt` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Char(36)`.
- You are about to alter the column `invoice_id` on the `receipt` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Char(36)`.
- You are about to alter the column `payment_id` on the `receipt` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Char(36)`.
- You are about to drop the column `stripeCustomerId` on the `users` table. All the data in the column will be lost.
- The values [REJECTED,MANUAL_REVIEW] on the enum `users_kyc_status` will be removed. If these variants are still used in the database, this will fail.
- The values [NG,SA,RW,UG,TZ] on the enum `users_region` will be removed. If these variants are still used in the database, this will fail.
- The values [CSV_UPLOAD,API_SYNC] on the enum `utility_bills_import_method` will be removed. If these variants are still used in the database, this will fail.
- You are about to drop the `ListingAuditEntry` table. If the table is not empty, all the data it contains will be lost.
- A unique constraint covering the columns `[invoice_id]` on the table `MaintenanceRequest` will be added. If there are existing duplicate values, this will fail.
- A unique constraint covering the columns `[journal_entry_id]` on the table `MaintenanceRequest` will be added. If there are existing duplicate values, this will fail.
- A unique constraint covering the columns `[document_id,email]` on the table `dss_participants` will be added. If there are existing duplicate values, this will fail.

 */
-- DropForeignKey
ALTER TABLE `ListingAuditEntry`
DROP FOREIGN KEY `ListingAuditEntry_unitId_fkey`;

-- DropForeignKey
ALTER TABLE `ListingAuditEntry`
DROP FOREIGN KEY `ListingAuditEntry_userId_fkey`;

-- DropForeignKey
ALTER TABLE `gl_journal_entries`
DROP FOREIGN KEY `gl_journal_entries_maintenanceRequestId_fkey`;

-- DropIndex
DROP INDEX `RentEscalation_effectiveDate_idx` ON `RentEscalation`;

-- DropIndex
DROP INDEX `gl_journal_entries_maintenanceRequestId_fkey` ON `gl_journal_entries`;

-- DropIndex
DROP INDEX `payment_method_idx` ON `payment`;

-- DropIndex
DROP INDEX `payment_processor_id_idx` ON `payment`;

-- DropIndex
DROP INDEX `payment_processor_id_key` ON `payment`;

-- AlterTable
ALTER TABLE `Invite` MODIFY `role` ENUM (
    'SYSTEM_ADMIN',
    'PROPERTY_MANAGER',
    'TENANT',
    'AGENT',
    'VENDOR',
    'ALL'
) NOT NULL;

-- AlterTable
ALTER TABLE `Listing`
ADD COLUMN `availability_date` DATETIME (3) NULL,
ADD COLUMN `expiration_date` DATETIME (3) NULL;

-- AlterTable
ALTER TABLE `MaintenanceRequest`
ADD COLUMN `is_tenant_chargeable` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `Otp` MODIFY `type` ENUM ('TWO_FACTOR', 'PHONE_VERIFICATION') NOT NULL DEFAULT 'TWO_FACTOR';

-- AlterTable
ALTER TABLE `dss_signatures`
ADD COLUMN `is_proxy` BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN `on_behalf_of` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `gl_journal_entries`
DROP COLUMN `maintenanceRequestId`;

-- AlterTable
ALTER TABLE `invoice` MODIFY `type` ENUM ('RENT', 'UTILITY', 'MAINTENANCE', 'DAMAGE') NOT NULL;

-- AlterTable
ALTER TABLE `organizations` MODIFY `region` ENUM ('USA', 'KEN') NULL DEFAULT 'KEN';

-- AlterTable
ALTER TABLE `payment`
DROP COLUMN `bank_name`,
DROP COLUMN `countryCode`,
DROP COLUMN `created_at`,
DROP COLUMN `exchange_rate`,
DROP COLUMN `failure_reason`,
DROP COLUMN `ip_address`,
DROP COLUMN `last_4`,
DROP COLUMN `next_retry_at`,
DROP COLUMN `paid_on`,
DROP COLUMN `payment_method_id`,
DROP COLUMN `processor`,
DROP COLUMN `processor_id`,
DROP COLUMN `processor_status`,
DROP COLUMN `retry_count`,
DROP COLUMN `routing_number`,
DROP COLUMN `updated_at`,
ADD COLUMN `createdAt` DATETIME (0) NULL DEFAULT CURRENT_TIMESTAMP(0),
ADD COLUMN `gateway` ENUM (
    'STRIPE',
    'PLAID',
    'PAYSTACK',
    'MPESA_DIRECT',
    'MANUAL'
) NOT NULL DEFAULT 'MANUAL',
ADD COLUMN `gateway_reference` VARCHAR(191) NULL,
ADD COLUMN `is_reversed` BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN `paidOn` DATETIME (0) NULL DEFAULT CURRENT_TIMESTAMP(0),
ADD COLUMN `reversal_reason` VARCHAR(255) NULL,
ADD COLUMN `reversed_at` DATETIME (0) NULL,
ADD COLUMN `reversed_by` VARCHAR(100) NULL,
ADD COLUMN `risk_score` INTEGER NULL,
ADD COLUMN `updatedAt` DATETIME (0) NULL DEFAULT CURRENT_TIMESTAMP(0),
MODIFY `method` ENUM (
    'CASH',
    'BANK',
    'CREDIT_CARD',
    'MPESA',
    'PAYPAL',
    'STRIPE',
    'PAYSTACK',
    'MANUAL'
) NOT NULL,
MODIFY `currency` VARCHAR(3) NOT NULL DEFAULT 'KES',
MODIFY `status` ENUM (
    'PENDING',
    'AUTHORIZED',
    'SETTLED',
    'FAILED',
    'DISPUTED',
    'REVERSED'
) NOT NULL DEFAULT 'PENDING',
MODIFY `type` ENUM ('RENT', 'DEPOSIT', 'SAAS_FEE', 'MAINTENANCE') NOT NULL DEFAULT 'RENT';

-- AlterTable
ALTER TABLE `payment_reversal`
DROP PRIMARY KEY,
MODIFY `id` CHAR(36) NOT NULL,
MODIFY `payment_id` CHAR(36) NOT NULL,
MODIFY `invoice_id` CHAR(36) NOT NULL,
MODIFY `amount` FLOAT NOT NULL,
MODIFY `created_at` DATETIME (0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `receipt`
DROP PRIMARY KEY,
DROP COLUMN `created_at`,
DROP COLUMN `issued_on`,
DROP COLUMN `updated_at`,
ADD COLUMN `createdAt` DATETIME (0) NULL DEFAULT CURRENT_TIMESTAMP(0),
ADD COLUMN `issuedOn` DATETIME (0) NULL DEFAULT CURRENT_TIMESTAMP(0),
ADD COLUMN `updatedAt` DATETIME (0) NULL DEFAULT CURRENT_TIMESTAMP(0),
MODIFY `id` CHAR(36) NOT NULL DEFAULT,
MODIFY `invoice_id` CHAR(36) NOT NULL,
MODIFY `payment_id` CHAR(36) NOT NULL,
ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `users`
DROP COLUMN `stripeCustomerId`,
MODIFY `kyc_status` ENUM ('PENDING', 'VERIFIED', 'FAILED') NOT NULL DEFAULT 'PENDING',
MODIFY `region` ENUM ('USA', 'KEN') NULL DEFAULT 'KEN';

-- AlterTable
ALTER TABLE `utility_allocations`
ADD COLUMN `aiConfidenceScore` DOUBLE NULL,
ADD COLUMN `allocationExplanation` TEXT NULL,
ADD COLUMN `anomalyFlag` BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN `splitMethod` ENUM (
    'EQUAL',
    'OCCUPANCY_BASED',
    'SQ_FOOTAGE',
    'SUB_METERED',
    'CUSTOM_RATIO',
    'AI_OPTIMIZED',
    'FIXED'
) NOT NULL DEFAULT 'EQUAL';

-- AlterTable
ALTER TABLE `utility_bills` MODIFY `import_method` ENUM (
    'CSV',
    'API',
    'PDF_OCR',
    'MANUAL_ENTRY',
    'IMAGE_SCAN'
) NOT NULL DEFAULT 'MANUAL_ENTRY';

-- DropTable
DROP TABLE `ListingAuditEntry`;

-- CreateTable
CREATE TABLE
    `listing_audit_entries` (
        `id` VARCHAR(191) NOT NULL,
        `unit_id` VARCHAR(191) NOT NULL,
        `listing_id` VARCHAR(191) NULL,
        `action` ENUM (
            'CREATE',
            'REMOVE',
            'SUSPEND',
            'ACTIVATE',
            'UPDATE',
            'EXPIRE'
        ) NOT NULL,
        `previous_status` ENUM (
            'PRIVATE',
            'ACTIVE',
            'SUSPENDED',
            'PENDING',
            'EXPIRED'
        ) NULL,
        `new_status` ENUM (
            'PRIVATE',
            'ACTIVE',
            'SUSPENDED',
            'PENDING',
            'EXPIRED'
        ) NOT NULL,
        `user_id` VARCHAR(191) NOT NULL,
        `timestamp` DATETIME (3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
        `reason` VARCHAR(191) NULL,
        `metadata` JSON NULL,
        `created_at` DATETIME (3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
        INDEX `listing_audit_entries_unit_id_idx` (`unit_id`),
        INDEX `listing_audit_entries_listing_id_idx` (`listing_id`),
        INDEX `listing_audit_entries_user_id_idx` (`user_id`),
        INDEX `listing_audit_entries_timestamp_idx` (`timestamp`),
        INDEX `listing_audit_entries_action_idx` (`action`),
        PRIMARY KEY (`id`)
    ) DEFAULT CHARACTER
SET
    utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `MaintenanceRequest_invoice_id_key` ON `MaintenanceRequest` (`invoice_id`);

-- CreateIndex
CREATE UNIQUE INDEX `MaintenanceRequest_journal_entry_id_key` ON `MaintenanceRequest` (`journal_entry_id`);

-- CreateIndex
CREATE UNIQUE INDEX `uq_dss_participant_doc_email` ON `dss_participants` (`document_id`, `email`);

-- CreateIndex
CREATE INDEX `payment_gateway_reference_idx` ON `payment` (`gateway_reference`);

-- AddForeignKey
ALTER TABLE `payment_reversal` ADD CONSTRAINT `fk_reversal_payment` FOREIGN KEY (`payment_id`) REFERENCES `payment` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `receipt` ADD CONSTRAINT `receipt_ibfk_1` FOREIGN KEY (`invoice_id`) REFERENCES `invoice` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `receipt` ADD CONSTRAINT `receipt_ibfk_2` FOREIGN KEY (`payment_id`) REFERENCES `payment` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `dss_participants` ADD CONSTRAINT `dss_participants_document_id_fkey` FOREIGN KEY (`document_id`) REFERENCES `dss_documents` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MaintenanceRequest` ADD CONSTRAINT `MaintenanceRequest_invoice_id_fkey` FOREIGN KEY (`invoice_id`) REFERENCES `invoice` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MaintenanceRequest` ADD CONSTRAINT `MaintenanceRequest_journal_entry_id_fkey` FOREIGN KEY (`journal_entry_id`) REFERENCES `gl_journal_entries` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `listing_audit_entries` ADD CONSTRAINT `listing_audit_entries_listing_id_fkey` FOREIGN KEY (`listing_id`) REFERENCES `Listing` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `listing_audit_entries` ADD CONSTRAINT `listing_audit_entries_unit_id_fkey` FOREIGN KEY (`unit_id`) REFERENCES `Unit` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `listing_audit_entries` ADD CONSTRAINT `listing_audit_entries_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `payment_reversal` RENAME INDEX `payment_reversal_payment_id_idx` TO `idx_payment_id`;

-- RenameIndex
ALTER TABLE `receipt` RENAME INDEX `receipt_invoice_id_idx` TO `invoice_id`;

-- RenameIndex
ALTER TABLE `receipt` RENAME INDEX `receipt_payment_id_idx` TO `payment_id`;