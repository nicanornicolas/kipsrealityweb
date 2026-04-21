/*
  Warnings:

  - Added the required column `name` to the `vendors` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `vendors` ADD COLUMN `businessType` VARCHAR(191) NOT NULL DEFAULT 'INDIVIDUAL',
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `vendor_tax_info` (
    `id` VARCHAR(191) NOT NULL,
    `vendor_id` VARCHAR(191) NOT NULL,
    `tax_id` VARCHAR(191) NULL,
    `tax_id_encrypted` VARCHAR(191) NULL,
    `is_tax_exempt` BOOLEAN NOT NULL DEFAULT false,
    `exemption_certificate_url` VARCHAR(191) NULL,
    `state_of_incorporation` VARCHAR(191) NULL,
    `incorporation_date` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `vendor_tax_info_vendor_id_key`(`vendor_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vendor_invoices` (
    `id` VARCHAR(191) NOT NULL,
    `vendor_id` VARCHAR(191) NOT NULL,
    `organization_id` VARCHAR(191) NOT NULL,
    `property_id` VARCHAR(191) NOT NULL,
    `amount` DECIMAL(15, 4) NOT NULL,
    `category` VARCHAR(191) NOT NULL DEFAULT 'MAINTENANCE',
    `description` VARCHAR(191) NULL,
    `due_date` DATETIME(3) NOT NULL,
    `postingStatus` VARCHAR(191) NOT NULL DEFAULT 'PENDING',
    `journal_entry_id` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `vendor_invoices_journal_entry_id_key`(`journal_entry_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `vendor_tax_info` ADD CONSTRAINT `vendor_tax_info_vendor_id_fkey` FOREIGN KEY (`vendor_id`) REFERENCES `vendors`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vendor_invoices` ADD CONSTRAINT `vendor_invoices_vendor_id_fkey` FOREIGN KEY (`vendor_id`) REFERENCES `vendors`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vendor_invoices` ADD CONSTRAINT `vendor_invoices_journal_entry_id_fkey` FOREIGN KEY (`journal_entry_id`) REFERENCES `gl_journal_entries`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
