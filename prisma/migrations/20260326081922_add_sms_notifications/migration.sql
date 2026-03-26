/*
  Warnings:

  - A unique constraint covering the columns `[invited_agent_id]` on the table `AgentInvite` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `AgentInvite` ADD COLUMN `invited_agent_id` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `SmsNotification` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `message` TEXT NOT NULL,
    `category` ENUM('RENT_REMINDER', 'PAYMENT_RECEIPT', 'MAINTENANCE_UPDATE', 'LEASE_DOCUMENT', 'UTILITY_BILL', 'SYSTEM_ALERT') NOT NULL,
    `status` ENUM('QUEUED', 'SENT', 'DELIVERED', 'FAILED') NOT NULL DEFAULT 'QUEUED',
    `provider` VARCHAR(191) NOT NULL,
    `providerMsgId` VARCHAR(191) NULL,
    `failureReason` TEXT NULL,
    `sentAt` DATETIME(3) NULL,
    `deliveredAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `SmsNotification_userId_idx`(`userId`),
    INDEX `SmsNotification_status_idx`(`status`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NotificationPreference` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `rentReminders` BOOLEAN NOT NULL DEFAULT true,
    `paymentReceipts` BOOLEAN NOT NULL DEFAULT true,
    `maintenance` BOOLEAN NOT NULL DEFAULT true,
    `utilityAlerts` BOOLEAN NOT NULL DEFAULT true,
    `marketing` BOOLEAN NOT NULL DEFAULT false,
    `preferredChannel` ENUM('SMS', 'EMAIL', 'PUSH', 'IN_APP') NOT NULL DEFAULT 'SMS',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `NotificationPreference_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `AgentInvite_invited_agent_id_key` ON `AgentInvite`(`invited_agent_id`);

-- AddForeignKey
ALTER TABLE `SmsNotification` ADD CONSTRAINT `SmsNotification_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NotificationPreference` ADD CONSTRAINT `NotificationPreference_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
