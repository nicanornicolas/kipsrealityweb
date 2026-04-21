-- AlterTable
ALTER TABLE `Plan` ADD COLUMN `signing_fee` DOUBLE NULL DEFAULT 9.99,
    ADD COLUMN `stripePriceIdMonthly` VARCHAR(191) NULL,
    ADD COLUMN `stripePriceIdYearly` VARCHAR(191) NULL,
    ADD COLUMN `trialDays` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `organizations` ADD COLUMN `irs_ein_encrypted` VARCHAR(191) NULL,
    ADD COLUMN `state_tax_ids` JSON NULL;

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

-- CreateTable
CREATE TABLE `sms_notifications` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(20) NOT NULL,
    `message` TEXT NOT NULL,
    `channel` ENUM('SMS', 'EMAIL', 'PUSH', 'IN_APP') NOT NULL,
    `category` ENUM('RENT_REMINDER', 'PAYMENT_RECEIPT', 'MAINTENANCE_UPDATE', 'LEASE_DOCUMENT', 'UTILITY_BILL', 'SYSTEM_ALERT') NOT NULL,
    `status` ENUM('QUEUED', 'SENT', 'DELIVERED', 'FAILED') NOT NULL DEFAULT 'QUEUED',
    `scheduled_for` DATETIME(3) NULL,
    `sent_at` DATETIME(3) NULL,
    `delivered_at` DATETIME(3) NULL,
    `errorMessage` TEXT NULL,
    `cost_cents` INTEGER NULL,
    `carrier` VARCHAR(50) NULL,
    `reference` VARCHAR(100) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `sms_notifications_user_id_idx`(`user_id`),
    INDEX `sms_notifications_status_idx`(`status`),
    INDEX `sms_notifications_phone_idx`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notification_preferences` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `channel` ENUM('SMS', 'EMAIL', 'PUSH', 'IN_APP') NOT NULL,
    `category` ENUM('RENT_REMINDER', 'PAYMENT_RECEIPT', 'MAINTENANCE_UPDATE', 'LEASE_DOCUMENT', 'UTILITY_BILL', 'SYSTEM_ALERT') NOT NULL,
    `enabled` BOOLEAN NOT NULL DEFAULT true,
    `threshold_hours` INTEGER NULL,
    `quiet_start_hour` TINYINT NULL,
    `quiet_end_hour` TINYINT NULL,
    `quiet_days` JSON NULL,
    `max_daily_alerts` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `notification_preferences_user_id_idx`(`user_id`),
    UNIQUE INDEX `notification_preferences_user_id_channel_category_key`(`user_id`, `channel`, `category`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dss_fields` (
    `id` VARCHAR(191) NOT NULL,
    `document_id` VARCHAR(191) NOT NULL,
    `participant_id` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `page_number` INTEGER NOT NULL,
    `x` DOUBLE NOT NULL,
    `y` DOUBLE NOT NULL,
    `width` DOUBLE NOT NULL,
    `height` DOUBLE NOT NULL,
    `value` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usage_metrics` (
    `id` VARCHAR(191) NOT NULL,
    `organization_id` VARCHAR(191) NOT NULL,
    `feature_key` VARCHAR(191) NOT NULL,
    `period` VARCHAR(191) NOT NULL,
    `period_start` DATETIME(3) NOT NULL,
    `used_count` INTEGER NOT NULL DEFAULT 0,
    `limit` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `usage_metrics_organization_id_feature_key_period_start_key`(`organization_id`, `feature_key`, `period_start`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subscription_events` (
    `id` VARCHAR(191) NOT NULL,
    `organization_id` VARCHAR(191) NOT NULL,
    `event_type` VARCHAR(191) NOT NULL,
    `from_plan_id` INTEGER NULL,
    `to_plan_id` INTEGER NULL,
    `triggered_by` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `feature_limits` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `feature_id` INTEGER NOT NULL,
    `plan_id` INTEGER NOT NULL,
    `limit` INTEGER NOT NULL DEFAULT 0,
    `period` VARCHAR(191) NOT NULL DEFAULT 'monthly',

    UNIQUE INDEX `feature_limits_feature_id_plan_id_key`(`feature_id`, `plan_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `webhook_events` (
    `id` VARCHAR(191) NOT NULL,
    `gateway` VARCHAR(191) NOT NULL,
    `eventType` VARCHAR(191) NULL,
    `payload` JSON NOT NULL,
    `status` ENUM('PENDING', 'PROCESSING', 'PROCESSED', 'FAILED') NOT NULL DEFAULT 'PENDING',
    `processingError` TEXT NULL,
    `retryCount` INTEGER NOT NULL DEFAULT 0,
    `nextRetryAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `webhook_events_status_nextRetryAt_idx`(`status`, `nextRetryAt`),
    INDEX `webhook_events_gateway_idx`(`gateway`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `organization_webhooks` ADD CONSTRAINT `organization_webhooks_organization_id_fkey` FOREIGN KEY (`organization_id`) REFERENCES `organizations`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sms_notifications` ADD CONSTRAINT `sms_notifications_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notification_preferences` ADD CONSTRAINT `notification_preferences_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vendor_invoices` ADD CONSTRAINT `vendor_invoices_organization_id_fkey` FOREIGN KEY (`organization_id`) REFERENCES `organizations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dss_fields` ADD CONSTRAINT `dss_fields_document_id_fkey` FOREIGN KEY (`document_id`) REFERENCES `dss_documents`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dss_fields` ADD CONSTRAINT `dss_fields_participant_id_fkey` FOREIGN KEY (`participant_id`) REFERENCES `dss_participants`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `usage_metrics` ADD CONSTRAINT `usage_metrics_organization_id_fkey` FOREIGN KEY (`organization_id`) REFERENCES `organizations`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `subscription_events` ADD CONSTRAINT `subscription_events_organization_id_fkey` FOREIGN KEY (`organization_id`) REFERENCES `organizations`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `feature_limits` ADD CONSTRAINT `feature_limits_feature_id_fkey` FOREIGN KEY (`feature_id`) REFERENCES `Feature`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `feature_limits` ADD CONSTRAINT `feature_limits_plan_id_fkey` FOREIGN KEY (`plan_id`) REFERENCES `Plan`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
