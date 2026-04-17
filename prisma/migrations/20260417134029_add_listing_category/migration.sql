-- AlterTable
ALTER TABLE `Listing`
ADD COLUMN `categoryId` VARCHAR(191) NULL;

-- Ensure required marketplace category exists before backfilling
INSERT INTO
  `CategoryMarketplace` (`id`, `name`, `createdAt`)
SELECT
  UUID (),
  'Property',
  NOW ()
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      `CategoryMarketplace`
    WHERE
      `name` = 'Property'
  );

-- Backfill existing listings into the Property marketplace category
UPDATE `Listing`
SET
  `categoryId` = (
    SELECT
      `id`
    FROM
      `CategoryMarketplace`
    WHERE
      `name` = 'Property'
    LIMIT
      1
  )
WHERE
  `categoryId` IS NULL;

-- Enforce required category after backfill
ALTER TABLE `Listing` MODIFY `categoryId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE INDEX `Listing_categoryId_idx` ON `Listing` (`categoryId`);

-- AddForeignKey
ALTER TABLE `Listing` ADD CONSTRAINT `Listing_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `CategoryMarketplace` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;