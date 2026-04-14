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

-- AddForeignKey
ALTER TABLE `dss_fields` ADD CONSTRAINT `dss_fields_document_id_fkey` FOREIGN KEY (`document_id`) REFERENCES `dss_documents`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dss_fields` ADD CONSTRAINT `dss_fields_participant_id_fkey` FOREIGN KEY (`participant_id`) REFERENCES `dss_participants`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
