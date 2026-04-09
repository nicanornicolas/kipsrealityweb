-- AlterTable
ALTER TABLE `invoice` ADD COLUMN `tax_amount` DECIMAL(10, 2) NULL DEFAULT 0,
    ADD COLUMN `tax_exempt` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `tax_rate` DECIMAL(5, 4) NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `organizations` ADD COLUMN `irs_ein_encrypted` VARCHAR(191) NULL,
    ADD COLUMN `state_tax_ids` JSON NULL;

-- CreateTable
CREATE TABLE `vendor_tax_info` (
    `id` VARCHAR(191) NOT NULL,
    `vendor_id` VARCHAR(191) NOT NULL,
    `w9_collected` BOOLEAN NOT NULL DEFAULT false,
    `w9_collected_at` DATETIME(3) NULL,
    `taxIdType` VARCHAR(191) NOT NULL,
    `tax_id_encrypted` VARCHAR(191) NOT NULL,
    `backup_withholding` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `vendor_tax_info_vendor_id_key`(`vendor_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `vendor_tax_info` ADD CONSTRAINT `vendor_tax_info_vendor_id_fkey` FOREIGN KEY (`vendor_id`) REFERENCES `vendors`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `invoice` RENAME INDEX `invoice_lease_id_fkey` TO `invoice_lease_id_f420`;

-- RenameIndex
ALTER TABLE `invoice` RENAME INDEX `invoice_utility_bill_id_fkey` TO `invoice_utility_bill_id_f420`;
