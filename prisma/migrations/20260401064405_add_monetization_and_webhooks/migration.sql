-- AlterTable
ALTER TABLE `Plan` ADD COLUMN `stripePriceIdMonthly` VARCHAR(191) NULL,
    ADD COLUMN `stripePriceIdYearly` VARCHAR(191) NULL,
    ADD COLUMN `trialDays` INTEGER NOT NULL DEFAULT 0;

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

-- AddForeignKey
ALTER TABLE `usage_metrics` ADD CONSTRAINT `usage_metrics_organization_id_fkey` FOREIGN KEY (`organization_id`) REFERENCES `organizations`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `subscription_events` ADD CONSTRAINT `subscription_events_organization_id_fkey` FOREIGN KEY (`organization_id`) REFERENCES `organizations`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `feature_limits` ADD CONSTRAINT `feature_limits_feature_id_fkey` FOREIGN KEY (`feature_id`) REFERENCES `Feature`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `feature_limits` ADD CONSTRAINT `feature_limits_plan_id_fkey` FOREIGN KEY (`plan_id`) REFERENCES `Plan`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
