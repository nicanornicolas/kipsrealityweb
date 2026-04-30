-- Normalize old request categories to the new tenant-facing domain before enum change
UPDATE `MaintenanceRequest`
SET `category` = 'OTHER'
WHERE `category` IN ('EMERGENCY', 'URGENT', 'ROUTINE', 'STANDARD');

-- Replace enum values on MaintenanceRequest.category
ALTER TABLE `MaintenanceRequest`
MODIFY `category` ENUM(
  'PLUMBING',
  'ELECTRICAL',
  'APPLIANCE',
  'HVAC',
  'STRUCTURAL',
  'PEST_CONTROL',
  'OTHER'
) NOT NULL DEFAULT 'OTHER';
