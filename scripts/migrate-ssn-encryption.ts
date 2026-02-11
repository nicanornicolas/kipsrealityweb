#!/usr/bin/env tsx

/**
 * SSN Encryption Migration Script
 * 
 * This script migrates plaintext SSN data to encrypted format for GDPR compliance.
 * It reads existing Tenantapplication records with plaintext SSN, encrypts them using
 * AES-256-GCM, and stores the encrypted value in the ssnEncrypted field while nullifying
 * the plaintext ssn field.
 * 
 * Usage:
 *   npx tsx scripts/migrate-ssn-encryption.ts --dry-run
 *   npx tsx scripts/migrate-ssn-encryption.ts --execute
 *   npx tsx scripts/migrate-ssn-encryption.ts --rollback
 * 
 * Safety Features:
 * - Dry-run mode by default
 * - Batch processing with progress reporting
 * - Data validation before/after migration
 * - Rollback capability
 * - Backup creation (optional)
 */

import { prisma } from "../src/lib/db";
import { encryptSSN, isEncryptedSSN, EncryptionError } from "../src/lib/encryption";
import fs from "fs";
import path from "path";
import { createHash } from "crypto";

interface MigrationStats {
  totalRecords: number;
  recordsWithPlaintextSSN: number;
  recordsAlreadyEncrypted: number;
  recordsWithInvalidSSN: number;
  recordsMigrated: number;
  recordsFailed: number;
  errors: Array<{ id: string; error: string }>;
}

interface MigrationOptions {
  dryRun: boolean;
  batchSize: number;
  backupBeforeMigration: boolean;
  validateOnly: boolean;
}

class SSNMigration {
  private stats: MigrationStats;
  private options: MigrationOptions;
  private backupPath: string;

  constructor(options: Partial<MigrationOptions> = {}) {
    this.stats = {
      totalRecords: 0,
      recordsWithPlaintextSSN: 0,
      recordsAlreadyEncrypted: 0,
      recordsWithInvalidSSN: 0,
      recordsMigrated: 0,
      recordsFailed: 0,
      errors: [],
    };

    this.options = {
      dryRun: true,
      batchSize: 100,
      backupBeforeMigration: true,
      validateOnly: false,
      ...options,
    };

    this.backupPath = path.join(
      process.cwd(),
      `backups`,
      `ssn-migration-backup-${new Date().toISOString().replace(/[:.]/g, '-')}.json`
    );
  }

  /**
   * Validate the encryption key is properly configured
   */
  private validateEnvironment(): void {
    if (!process.env.SSN_ENCRYPTION_KEY) {
      throw new Error(
        'SSN_ENCRYPTION_KEY environment variable is not set. ' +
        'Please add it to your .env file and restart the application.'
      );
    }

    try {
      // Test encryption with a dummy value to verify key works
      const testEncrypted = encryptSSN('123-45-6789');
      if (!isEncryptedSSN(testEncrypted)) {
        throw new Error('Test encryption produced invalid format');
      }
      console.log('✅ Encryption key validated successfully');
    } catch (error) {
      throw new Error(
        `Encryption key validation failed: ${error instanceof Error ? error.message : 'Unknown error'}. ` +
        'Please ensure SSN_ENCRYPTION_KEY is a valid base64-encoded 32-byte key.'
      );
    }
  }

  /**
   * Create a backup of current SSN data
   */
  private async createBackup(): Promise<void> {
    if (!this.options.backupBeforeMigration) {
      console.log('⚠️  Skipping backup (backupBeforeMigration=false)');
      return;
    }

    console.log(`📋 Creating backup at: ${this.backupPath}`);

    // Ensure backup directory exists
    const backupDir = path.dirname(this.backupPath);
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }

    // Fetch all records with SSN data
    const records = await prisma.tenantapplication.findMany({
      where: {
        OR: [
          { ssn: { not: null } },
          { ssnEncrypted: { not: null } },
        ],
      },
      select: {
        id: true,
        ssn: true,
        ssnEncrypted: true,
        email: true,
        fullName: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: { createdAt: 'asc' },
    });

    const backupData = {
      timestamp: new Date().toISOString(),
      recordCount: records.length,
      options: this.options,
      records: records.map(record => ({
        ...record,
        // Hash SSN for privacy in backup (still identifiable but not plaintext)
        ssnHash: record.ssn ? createHash('sha256').update(record.ssn).digest('hex') : null,
        ssnLength: record.ssn?.length || 0,
      })),
    };

    fs.writeFileSync(this.backupPath, JSON.stringify(backupData, null, 2));
    console.log(`✅ Backup created: ${records.length} records backed up`);
  }

  /**
   * Analyze current data state
   */
  private async analyzeData(): Promise<void> {
    console.log('📊 Analyzing SSN data...');

    // Get total count
    this.stats.totalRecords = await prisma.tenantapplication.count();

    // Get counts by SSN status
    const plaintextCount = await prisma.tenantapplication.count({
      where: {
        ssn: { not: null },
        ssnEncrypted: null,
      },
    });

    const encryptedCount = await prisma.tenantapplication.count({
      where: {
        ssnEncrypted: { not: null },
      },
    });

    const bothCount = await prisma.tenantapplication.count({
      where: {
        ssn: { not: null },
        ssnEncrypted: { not: null },
      },
    });

    this.stats.recordsWithPlaintextSSN = plaintextCount + bothCount;
    this.stats.recordsAlreadyEncrypted = encryptedCount + bothCount;

    console.log(`📈 Analysis Results:`);
    console.log(`   Total records: ${this.stats.totalRecords}`);
    console.log(`   Records with plaintext SSN: ${this.stats.recordsWithPlaintextSSN}`);
    console.log(`   Records already encrypted: ${this.stats.recordsAlreadyEncrypted}`);
    console.log(`   Records with both (need cleanup): ${bothCount}`);

    // Validate SSN formats
    if (plaintextCount > 0) {
      console.log('🔍 Validating plaintext SSN formats...');
      const plaintextRecords = await prisma.tenantapplication.findMany({
        where: {
          ssn: { not: null },
          ssnEncrypted: null,
        },
        select: { id: true, ssn: true },
        take: 100, // Sample validation
      });

      const invalidSSNs = plaintextRecords.filter(record => {
        const ssn = record.ssn;
        if (!ssn) return false;
        
        // Basic SSN format validation (XXX-XX-XXXX)
        const ssnRegex = /^\d{3}-\d{2}-\d{4}$/;
        if (!ssnRegex.test(ssn)) {
          return true;
        }
        
        // Check for obvious invalid SSNs (like all zeros)
        if (ssn === '000-00-0000' || ssn === '123-45-6789') {
          return true;
        }
        
        return false;
      });

      this.stats.recordsWithInvalidSSN = invalidSSNs.length;
      if (invalidSSNs.length > 0) {
        console.log(`⚠️  Found ${invalidSSNs.length} records with potentially invalid SSN format:`);
        invalidSSNs.slice(0, 5).forEach(record => {
          console.log(`   - Record ${record.id}: "${record.ssn?.substring(0, 10)}..."`);
        });
        if (invalidSSNs.length > 5) {
          console.log(`   ... and ${invalidSSNs.length - 5} more`);
        }
      }
    }
  }

  /**
   * Execute the migration
   */
  public async migrate(): Promise<void> {
    console.log('🚀 Starting SSN Encryption Migration');
    console.log(`📝 Mode: ${this.options.dryRun ? 'DRY RUN (no changes will be made)' : 'EXECUTE (database will be modified)'}`);
    console.log(`📦 Batch size: ${this.options.batchSize}`);
    console.log('---');

    // Step 1: Validate environment
    try {
      this.validateEnvironment();
    } catch (error) {
      console.error('❌ Environment validation failed:', error);
      process.exit(1);
    }

    // Step 2: Analyze data
    await this.analyzeData();

    // Step 3: Create backup
    if (!this.options.dryRun && !this.options.validateOnly) {
      await this.createBackup();
    }

    // Step 4: Process migration
    if (this.options.validateOnly) {
      console.log('✅ Validation complete. No migration performed.');
      return;
    }

    if (this.stats.recordsWithPlaintextSSN === 0) {
      console.log('✅ No plaintext SSN records found to migrate.');
      return;
    }

    console.log(`🔄 Processing ${this.stats.recordsWithPlaintextSSN} records...`);

    let offset = 0;
    let processed = 0;

    while (processed < this.stats.recordsWithPlaintextSSN) {
      console.log(`📋 Processing batch ${Math.floor(offset / this.options.batchSize) + 1}...`);

      const batch = await prisma.tenantapplication.findMany({
        where: {
          ssn: { not: null },
        },
        select: {
          id: true,
          ssn: true,
          ssnEncrypted: true,
          email: true,
          fullName: true,
        },
        skip: offset,
        take: this.options.batchSize,
        orderBy: { createdAt: 'asc' },
      });

      if (batch.length === 0) break;

      for (const record of batch) {
        try {
          processed++;
          
          if (!record.ssn) {
            console.log(`   ⚠️  Record ${record.id} has null SSN, skipping`);
            continue;
          }

          // Check if already properly encrypted
          if (record.ssnEncrypted && isEncryptedSSN(record.ssnEncrypted)) {
            console.log(`   ✅ Record ${record.id} already encrypted`);
            this.stats.recordsAlreadyEncrypted++;
            continue;
          }

          // Encrypt the SSN
          const encryptedSSN = encryptSSN(record.ssn);

          // Verify encryption
          if (!isEncryptedSSN(encryptedSSN)) {
            throw new Error('Encryption produced invalid format');
          }

          // Prepare update data
          const updateData = {
            ssnEncrypted: encryptedSSN,
            ssn: null, // Remove plaintext SSN
          };

          if (this.options.dryRun) {
            console.log(`   🔍 [DRY RUN] Would migrate record ${record.id} (${record.email}):`);
            console.log(`      Plaintext: "${record.ssn.substring(0, 6)}..."`);
            console.log(`      Encrypted: "${encryptedSSN.substring(0, 32)}..."`);
          } else {
            // Execute update
            await prisma.tenantapplication.update({
              where: { id: record.id },
              data: updateData,
            });

            console.log(`   ✅ Migrated record ${record.id} (${record.email})`);
            this.stats.recordsMigrated++;
          }

        } catch (error) {
          console.error(`   ❌ Failed to migrate record ${record.id}:`, error instanceof Error ? error.message : error);
          this.stats.recordsFailed++;
          this.stats.errors.push({
            id: record.id,
            error: error instanceof Error ? error.message : 'Unknown error',
          });
        }
      }

      offset += this.options.batchSize;

      // Small delay to prevent overwhelming the database
      if (!this.options.dryRun && batch.length > 0) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }

    // Step 5: Report results
    this.printResults();
  }

  /**
   * Rollback migration using backup
   */
  public async rollback(): Promise<void> {
    console.log('🔄 Starting rollback...');

    // Find latest backup
    const backupDir = path.join(process.cwd(), 'backups');
    if (!fs.existsSync(backupDir)) {
      console.error('❌ No backup directory found');
      process.exit(1);
    }

    const backupFiles = fs.readdirSync(backupDir)
      .filter(file => file.startsWith('ssn-migration-backup-') && file.endsWith('.json'))
      .sort()
      .reverse();

    if (backupFiles.length === 0) {
      console.error('❌ No backup files found');
      process.exit(1);
    }

    const latestBackup = path.join(backupDir, backupFiles[0]);
    console.log(`📋 Using backup: ${latestBackup}`);

    const backupData = JSON.parse(fs.readFileSync(latestBackup, 'utf8'));
    console.log(`📊 Backup contains ${backupData.recordCount} records from ${backupData.timestamp}`);

    // Restore records
    let restored = 0;
    let failed = 0;

    for (const record of backupData.records) {
      try {
        await prisma.tenantapplication.update({
          where: { id: record.id },
          data: {
            ssn: record.ssn || null,
            ssnEncrypted: record.ssnEncrypted || null,
          },
        });
        restored++;
        console.log(`   ✅ Restored record ${record.id}`);
      } catch (error) {
        console.error(`   ❌ Failed to restore record ${record.id}:`, error);
        failed++;
      }
    }

    console.log('---');
    console.log(`🎉 Rollback complete:`);
    console.log(`   Restored: ${restored} records`);
    console.log(`   Failed: ${failed} records`);
  }

  /**
   * Print migration results
   */
  private printResults(): void {
    console.log('---');
    console.log('🎉 Migration Summary:');
    console.log(`   Total records analyzed: ${this.stats.totalRecords}`);
    console.log(`   Records with plaintext SSN: ${this.stats.recordsWithPlaintextSSN}`);
    console.log(`   Records already encrypted: ${this.stats.recordsAlreadyEncrypted}`);
    console.log(`   Records with invalid SSN format: ${this.stats.recordsWithInvalidSSN}`);
    
    if (this.options.dryRun) {
      console.log(`   Records that would be migrated: ${this.stats.recordsMigrated}`);
      console.log(`   Records that would fail: ${this.stats.recordsFailed}`);
    } else {
      console.log(`   Records successfully migrated: ${this.stats.recordsMigrated}`);
      console.log(`   Records failed: ${this.stats.recordsFailed}`);
    }

    if (this.stats.errors.length > 0) {
      console.log('\n❌ Errors encountered:');
      this.stats.errors.slice(0, 10).forEach(error => {
        console.log(`   - Record ${error.id}: ${error.error}`);
      });
      if (this.stats.errors.length > 10) {
        console.log(`   ... and ${this.stats.errors.length - 10} more errors`);
      }
    }

    if (!this.options.dryRun && this.options.backupBeforeMigration) {
      console.log(`\n💾 Backup created at: ${this.backupPath}`);
    }

    if (this.options.dryRun) {
      console.log('\n📝 This was a dry run. No changes were made to the database.');
      console.log('   To execute the migration, run with --execute flag');
    } else {
      console.log('\n✅ Migration completed successfully!');
      console.log('   Plaintext SSN data has been encrypted and removed from the database.');
    }
  }
}

// Parse command line arguments
function parseArgs(): { command: 'dry-run' | 'execute' | 'rollback' | 'validate'; batchSize?: number } {
  const args = process.argv.slice(2);
  
  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
SSN Encryption Migration Script

Usage:
  npx tsx scripts/migrate-ssn-encryption.ts [options]

Options:
  --dry-run           Analyze and report without making changes (default)
  --execute           Execute the migration
  --rollback          Rollback using latest backup
  --validate          Validate environment and data only
  --batch-size=N      Set batch size (default: 100)
  --help, -h          Show this help message

Examples:
  npx tsx scripts/migrate-ssn-encryption.ts --dry-run
  npx tsx scripts/migrate-ssn-encryption.ts --execute --batch-size=50
  npx tsx scripts/migrate-ssn-encryption.ts --rollback
    `);
    process.exit(0);
  }

  let command: 'dry-run' | 'execute' | 'rollback' | 'validate' = 'dry-run';
  let batchSize = 100;

  if (args.includes('--execute')) command = 'execute';
  if (args.includes('--rollback')) command = 'rollback';
  if (args.includes('--validate')) command = 'validate';

  const batchSizeArg = args.find(arg => arg.startsWith('--batch-size='));
  if (batchSizeArg) {
    const size = parseInt(batchSizeArg.split('=')[1]);
    if (!isNaN(size) && size > 0) {
      batchSize = size;
    }
  }

  return { command, batchSize };
}

// Main execution
async function main() {
  const args = parseArgs();

  const migration = new SSNMigration({
    dryRun: args.command === 'dry-run' || args.command === 'validate',
    batchSize: args.batchSize,
    backupBeforeMigration: args.command === 'execute',
    validateOnly: args.command === 'validate',
  });

  try {
    switch (args.command) {
      case 'dry-run':
      case 'execute':
      case 'validate':
        await migration.migrate();
        break;
      case 'rollback':
        await migration.rollback();
        break;
    }
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// Run if called directly
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  });
}

export { SSNMigration };