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
