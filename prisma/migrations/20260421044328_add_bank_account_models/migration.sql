-- CreateTable
CREATE TABLE `connected_bank_accounts` (
    `id` VARCHAR(191) NOT NULL,
    `organization_id` VARCHAR(191) NOT NULL,
    `plaid_access_token` VARCHAR(191) NOT NULL,
    `plaid_item_id` VARCHAR(191) NOT NULL,
    `institution_name` VARCHAR(191) NOT NULL,
    `account_name` VARCHAR(191) NOT NULL,
    `account_type` VARCHAR(191) NOT NULL,
    `account_subtype` VARCHAR(191) NOT NULL,
    `mask` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'ACTIVE',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bank_transactions` (
    `id` VARCHAR(191) NOT NULL,
    `organization_id` VARCHAR(191) NOT NULL,
    `plaid_transaction_id` VARCHAR(191) NOT NULL,
    `account_id` VARCHAR(191) NOT NULL,
    `amount` DECIMAL(15, 4) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `merchant_name` VARCHAR(191) NULL,
    `description` TEXT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'UNMATCHED',
    `matched_journal_id` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `bank_transactions_plaid_transaction_id_key`(`plaid_transaction_id`),
    UNIQUE INDEX `bank_transactions_matched_journal_id_key`(`matched_journal_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `connected_bank_accounts` ADD CONSTRAINT `connected_bank_accounts_organization_id_fkey` FOREIGN KEY (`organization_id`) REFERENCES `organizations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bank_transactions` ADD CONSTRAINT `bank_transactions_matched_journal_id_fkey` FOREIGN KEY (`matched_journal_id`) REFERENCES `gl_journal_entries`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bank_transactions` ADD CONSTRAINT `bank_transactions_organization_id_fkey` FOREIGN KEY (`organization_id`) REFERENCES `organizations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
