-- AlterTable
ALTER TABLE `Plan` ADD COLUMN `signing_fee` DOUBLE NULL DEFAULT 9.99;

-- AlterTable
ALTER TABLE `dss_documents` ADD COLUMN `final_file_url` TEXT NULL;

-- AlterTable
ALTER TABLE `dss_signatures` ADD COLUMN `ip_address` VARCHAR(50) NULL,
    ADD COLUMN `user_agent` TEXT NULL;

-- AlterTable
ALTER TABLE `invoice` ADD COLUMN `organization_id` VARCHAR(191) NULL,
    ADD COLUMN `reference_id` VARCHAR(191) NULL,
    ADD COLUMN `reference_type` VARCHAR(191) NULL,
    MODIFY `lease_id` VARCHAR(191) NULL,
    MODIFY `type` ENUM('RENT', 'UTILITY', 'MAINTENANCE', 'DAMAGE', 'FEE') NOT NULL,
    MODIFY `status` ENUM('DRAFT', 'ISSUED', 'PENDING', 'PAID', 'OVERDUE', 'CANCELLED') NULL DEFAULT 'PENDING';

-- CreateTable
CREATE TABLE `organization_webhooks` (
    `id` VARCHAR(191) NOT NULL,
    `organization_id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL DEFAULT 'Default',
    `url` TEXT NOT NULL,
    `secret` TEXT NULL,
    `events` JSON NOT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `organization_webhooks_organization_id_fkey`(`organization_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `invoice_organization_id_fkey` ON `invoice`(`organization_id`);

-- AddForeignKey
ALTER TABLE `organization_webhooks` ADD CONSTRAINT `organization_webhooks_organization_id_fkey` FOREIGN KEY (`organization_id`) REFERENCES `organizations`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
