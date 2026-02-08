import { test, expect, beforeEach, afterEach } from '@playwright/test';
import { auditService } from '../../src/lib/audit-service';
import { ListingAction, ListingStatus } from '../../src/lib/listing-types';
import { prisma } from '../../src/lib/db';

/**
 * Unit Tests for Audit Trail Functionality
 * 
 * Tests audit entry creation, history retrieval, filtering, and data accuracy
 * Validates: Requirements 10.1, 10.4
 */

test.describe('Audit Trail Functionality Unit Tests', () => {
  
  // Test data
  const testUnitId = 'test-unit-123';
  const testListingId = 'test-listing-456';
  const testUserId = 'test-user-789';
  const testOrganizationId = 'test-org-abc';

  // Clean up test data before and after each test
  beforeEach(async () => {
    await cleanupTestData();
  });

  afterEach(async () => {
    await cleanupTestData();
  });

  async function cleanupTestData() {
    await prisma.listingAuditEntry.deleteMany({
      where: {
        OR: [
          { unitId: testUnitId },
          { listingId: testListingId },
          { userId: testUserId },
          { reason: { contains: 'TEST_AUDIT' } }
        ]
      }
    });
  }

  test('should create audit entry with all required fields', async () => {
    const auditData = {
      unitId: testUnitId,
      listingId: testListingId,
      action: ListingAction.CREATE,
      newStatus: ListingStatus.ACTIVE,
      userId: testUserId,
      reason: 'TEST_AUDIT: Unit test creation',
      metadata: {
        testData: true,
        operationType: 'unit_test'
      }
    };

    const auditEntry = await auditService.createAuditEntry(auditData);

    // Verify all required fields are present
    expect(auditEntry.id).toBeDefined();
    expect(typeof auditEntry.id).toBe('string');
    expect(auditEntry.id.length).toBeGreaterThan(0);
    
    expect(auditEntry.unitId).toBe(testUnitId);
    expect(auditEntry.listingId).toBe(testListingId);
    expect(auditEntry.action).toBe(ListingAction.CREATE);
    expect(auditEntry.newStatus).toBe(ListingStatus.ACTIVE);
    expect(auditEntry.userId).toBe(testUserId);
    expect(auditEntry.reason).toBe('TEST_AUDIT: Unit test creation');
    expect(auditEntry.metadata).toEqual({
      testData: true,
      operationType: 'unit_test'
    });
    
    // Verify timestamp is recent
    const now = new Date();
    const timeDiff = now.getTime() - auditEntry.timestamp.getTime();
    expect(timeDiff).toBeLessThan(5000); // Less than 5 seconds
    expect(timeDiff).toBeGreaterThanOrEqual(0); // Not in the future
  });

  test('should create audit entry without optional fields', async () => {
    const auditData = {
      unitId: testUnitId,
      action: ListingAction.UPDATE,
      newStatus: ListingStatus.ACTIVE,
      userId: testUserId
    };

    const auditEntry = await auditService.createAuditEntry(auditData);

    expect(auditEntry.id).toBeDefined();
    expect(auditEntry.unitId).toBe(testUnitId);
    expect(auditEntry.listingId).toBeUndefined();
    expect(auditEntry.action).toBe(ListingAction.UPDATE);
    expect(auditEntry.newStatus).toBe(ListingStatus.ACTIVE);
    expect(auditEntry.userId).toBe(testUserId);
    expect(auditEntry.reason).toBeUndefined();
    expect(auditEntry.metadata).toBeUndefined();
  });

  test('should retrieve unit audit history in chronological order', async () => {
    // Create multiple audit entries with delays to ensure different timestamps
    const entries = [];
    
    for (let i = 0; i < 3; i++) {
      const entry = await auditService.createAuditEntry({
        unitId: testUnitId,
        action: ListingAction.UPDATE,
        newStatus: ListingStatus.ACTIVE,
        userId: testUserId,
        reason: `TEST_AUDIT: Entry ${i}`
      });
      entries.push(entry);
      
      // Small delay to ensure different timestamps
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    const history = await auditService.getUnitAuditHistory(testUnitId);
    const testEntries = history.filter(entry => entry.reason?.includes('TEST_AUDIT'));

    expect(testEntries.length).toBe(3);
    
    // Verify chronological order (most recent first)
    for (let i = 0; i < testEntries.length - 1; i++) {
      expect(testEntries[i].timestamp.getTime())
        .toBeGreaterThanOrEqual(testEntries[i + 1].timestamp.getTime());
    }
    
    // Verify all entries belong to the correct unit
    testEntries.forEach(entry => {
      expect(entry.unitId).toBe(testUnitId);
    });
  });

  test('should retrieve listing audit history', async () => {
    // Create audit entries for the listing
    await auditService.createAuditEntry({
      unitId: testUnitId,
      listingId: testListingId,
      action: ListingAction.CREATE,
      newStatus: ListingStatus.ACTIVE,
      userId: testUserId,
      reason: 'TEST_AUDIT: Listing created'
    });

    await auditService.createAuditEntry({
      unitId: testUnitId,
      listingId: testListingId,
      action: ListingAction.UPDATE,
      newStatus: ListingStatus.ACTIVE,
      userId: testUserId,
      reason: 'TEST_AUDIT: Listing updated'
    });

    const history = await auditService.getListingAuditHistory(testListingId);
    const testEntries = history.filter(entry => entry.reason?.includes('TEST_AUDIT'));

    expect(testEntries.length).toBe(2);
    testEntries.forEach(entry => {
      expect(entry.listingId).toBe(testListingId);
    });
  });

  test('should filter audit trail by action', async () => {
    // Create entries with different actions
    await auditService.createAuditEntry({
      unitId: testUnitId,
      action: ListingAction.CREATE,
      newStatus: ListingStatus.ACTIVE,
      userId: testUserId,
      reason: 'TEST_AUDIT: Create action'
    });

    await auditService.createAuditEntry({
      unitId: testUnitId,
      action: ListingAction.UPDATE,
      newStatus: ListingStatus.ACTIVE,
      userId: testUserId,
      reason: 'TEST_AUDIT: Update action'
    });

    await auditService.createAuditEntry({
      unitId: testUnitId,
      action: ListingAction.REMOVE,
      newStatus: ListingStatus.PRIVATE,
      userId: testUserId,
      reason: 'TEST_AUDIT: Remove action'
    });

    // Filter by CREATE action
    const createEntries = await auditService.getAuditTrail({
      unitId: testUnitId,
      action: ListingAction.CREATE
    });

    const testCreateEntries = createEntries.entries.filter(entry => 
      entry.reason?.includes('TEST_AUDIT')
    );

    expect(testCreateEntries.length).toBe(1);
    expect(testCreateEntries[0].action).toBe(ListingAction.CREATE);
    expect(testCreateEntries[0].reason).toBe('TEST_AUDIT: Create action');

    // Filter by UPDATE action
    const updateEntries = await auditService.getAuditTrail({
      unitId: testUnitId,
      action: ListingAction.UPDATE
    });

    const testUpdateEntries = updateEntries.entries.filter(entry => 
      entry.reason?.includes('TEST_AUDIT')
    );

    expect(testUpdateEntries.length).toBe(1);
    expect(testUpdateEntries[0].action).toBe(ListingAction.UPDATE);
  });

  test('should filter audit trail by status', async () => {
    // Create entries with different statuses
    await auditService.createAuditEntry({
      unitId: testUnitId,
      action: ListingAction.CREATE,
      newStatus: ListingStatus.ACTIVE,
      userId: testUserId,
      reason: 'TEST_AUDIT: Active status'
    });

    await auditService.createAuditEntry({
      unitId: testUnitId,
      action: ListingAction.SUSPEND,
      newStatus: ListingStatus.SUSPENDED,
      userId: testUserId,
      reason: 'TEST_AUDIT: Suspended status'
    });

    // Filter by ACTIVE status
    const activeEntries = await auditService.getAuditTrail({
      unitId: testUnitId,
      status: ListingStatus.ACTIVE
    });

    const testActiveEntries = activeEntries.entries.filter(entry => 
      entry.reason?.includes('TEST_AUDIT')
    );

    expect(testActiveEntries.length).toBe(1);
    expect(testActiveEntries[0].newStatus).toBe(ListingStatus.ACTIVE);

    // Filter by SUSPENDED status
    const suspendedEntries = await auditService.getAuditTrail({
      unitId: testUnitId,
      status: ListingStatus.SUSPENDED
    });

    const testSuspendedEntries = suspendedEntries.entries.filter(entry => 
      entry.reason?.includes('TEST_AUDIT')
    );

    expect(testSuspendedEntries.length).toBe(1);
    expect(testSuspendedEntries[0].newStatus).toBe(ListingStatus.SUSPENDED);
  });

  test('should filter audit trail by date range', async () => {
    const now = new Date();
    const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);

    // Create an entry
    await auditService.createAuditEntry({
      unitId: testUnitId,
      action: ListingAction.CREATE,
      newStatus: ListingStatus.ACTIVE,
      userId: testUserId,
      reason: 'TEST_AUDIT: Date range test'
    });

    // Filter with date range that includes today
    const entriesInRange = await auditService.getAuditTrail({
      unitId: testUnitId,
      dateFrom: yesterday,
      dateTo: tomorrow
    });

    const testEntriesInRange = entriesInRange.entries.filter(entry => 
      entry.reason?.includes('TEST_AUDIT')
    );

    expect(testEntriesInRange.length).toBe(1);

    // Filter with date range that excludes today
    const pastDate = new Date(now.getTime() - 48 * 60 * 60 * 1000);
    const entriesOutOfRange = await auditService.getAuditTrail({
      unitId: testUnitId,
      dateFrom: pastDate,
      dateTo: yesterday
    });

    const testEntriesOutOfRange = entriesOutOfRange.entries.filter(entry => 
      entry.reason?.includes('TEST_AUDIT')
    );

    expect(testEntriesOutOfRange.length).toBe(0);
  });

  test('should handle pagination correctly', async () => {
    // Create multiple entries
    const entryCount = 5;
    for (let i = 0; i < entryCount; i++) {
      await auditService.createAuditEntry({
        unitId: testUnitId,
        action: ListingAction.UPDATE,
        newStatus: ListingStatus.ACTIVE,
        userId: testUserId,
        reason: `TEST_AUDIT: Pagination entry ${i}`
      });
      await new Promise(resolve => setTimeout(resolve, 50));
    }

    // Test first page
    const firstPage = await auditService.getAuditTrail({
      unitId: testUnitId,
      limit: 2,
      offset: 0
    });

    const firstPageTestEntries = firstPage.entries.filter(entry => 
      entry.reason?.includes('TEST_AUDIT')
    );

    expect(firstPageTestEntries.length).toBe(2);
    expect(firstPage.hasMore).toBe(true);

    // Test second page
    const secondPage = await auditService.getAuditTrail({
      unitId: testUnitId,
      limit: 2,
      offset: 2
    });

    const secondPageTestEntries = secondPage.entries.filter(entry => 
      entry.reason?.includes('TEST_AUDIT')
    );

    expect(secondPageTestEntries.length).toBe(2);

    // Verify no overlap between pages
    const firstPageIds = new Set(firstPageTestEntries.map(e => e.id));
    const secondPageIds = new Set(secondPageTestEntries.map(e => e.id));
    const intersection = new Set([...firstPageIds].filter(id => secondPageIds.has(id)));
    
    expect(intersection.size).toBe(0);
  });

  test('should preserve metadata accurately', async () => {
    const complexMetadata = {
      operationType: 'bulk_update',
      changes: {
        title: { from: 'Old Title', to: 'New Title' },
        price: { from: 1000, to: 1200 }
      },
      bulkOperationId: 'bulk-123',
      userAgent: 'Mozilla/5.0...',
      ipAddress: '192.168.1.1',
      nested: {
        level1: {
          level2: {
            value: 'deep nested value'
          }
        }
      },
      arrayData: ['item1', 'item2', 'item3'],
      booleanFlag: true,
      numericValue: 42.5
    };

    const auditEntry = await auditService.createAuditEntry({
      unitId: testUnitId,
      action: ListingAction.UPDATE,
      newStatus: ListingStatus.ACTIVE,
      userId: testUserId,
      reason: 'TEST_AUDIT: Metadata preservation test',
      metadata: complexMetadata
    });

    // Verify metadata is preserved exactly
    expect(auditEntry.metadata).toEqual(complexMetadata);

    // Retrieve and verify persistence
    const history = await auditService.getUnitAuditHistory(testUnitId);
    const testEntry = history.find(entry => entry.id === auditEntry.id);

    expect(testEntry).toBeDefined();
    expect(testEntry!.metadata).toEqual(complexMetadata);
    
    // Verify nested objects are preserved
    expect(testEntry!.metadata!.nested.level1.level2.value).toBe('deep nested value');
    expect(testEntry!.metadata!.arrayData).toEqual(['item1', 'item2', 'item3']);
    expect(testEntry!.metadata!.booleanFlag).toBe(true);
    expect(testEntry!.metadata!.numericValue).toBe(42.5);
  });

  test('should handle bulk audit entry creation', async () => {
    const operations = [
      {
        unitId: `${testUnitId}-1`,
        action: ListingAction.CREATE,
        success: true
      },
      {
        unitId: `${testUnitId}-2`,
        action: ListingAction.CREATE,
        success: false,
        error: 'Unit already has listing'
      },
      {
        unitId: `${testUnitId}-3`,
        action: ListingAction.CREATE,
        success: true
      }
    ];

    await auditService.createBulkAuditEntry(operations, testUserId, testOrganizationId);

    // Verify individual entries were created
    for (const operation of operations) {
      const history = await auditService.getUnitAuditHistory(operation.unitId);
      const bulkEntries = history.filter(entry => 
        entry.reason?.includes('Bulk CREATE operation')
      );

      expect(bulkEntries.length).toBe(1);
      expect(bulkEntries[0].action).toBe(ListingAction.CREATE);
      expect(bulkEntries[0].userId).toBe(testUserId);
      
      if (operation.success) {
        expect(bulkEntries[0].newStatus).toBe(ListingStatus.ACTIVE);
      } else {
        expect(bulkEntries[0].reason).toContain(operation.error);
      }
    }
  });

  test('should export audit data in CSV format', async () => {
    // Create test entries
    await auditService.createAuditEntry({
      unitId: testUnitId,
      action: ListingAction.CREATE,
      newStatus: ListingStatus.ACTIVE,
      userId: testUserId,
      reason: 'TEST_AUDIT: Export test entry 1'
    });

    await auditService.createAuditEntry({
      unitId: testUnitId,
      action: ListingAction.UPDATE,
      newStatus: ListingStatus.ACTIVE,
      userId: testUserId,
      reason: 'TEST_AUDIT: Export test entry 2',
      metadata: { exportTest: true }
    });

    const csvData = await auditService.exportAuditData(
      { unitId: testUnitId },
      { format: 'csv', includeMetadata: true }
    );

    // Verify CSV format
    expect(typeof csvData).toBe('string');
    expect(csvData).toContain('ID,Unit ID,Listing ID,Action,Previous Status,New Status,User ID,Timestamp,Reason,Metadata');
    expect(csvData).toContain('TEST_AUDIT: Export test entry 1');
    expect(csvData).toContain('TEST_AUDIT: Export test entry 2');
    expect(csvData).toContain(ListingAction.CREATE);
    expect(csvData).toContain(ListingAction.UPDATE);
    expect(csvData).toContain(testUserId);
  });

  test('should export audit data in JSON format', async () => {
    // Create test entry
    const metadata = { exportTest: true, value: 123 };
    
    await auditService.createAuditEntry({
      unitId: testUnitId,
      action: ListingAction.CREATE,
      newStatus: ListingStatus.ACTIVE,
      userId: testUserId,
      reason: 'TEST_AUDIT: JSON export test',
      metadata
    });

    const jsonData = await auditService.exportAuditData(
      { unitId: testUnitId },
      { format: 'json', includeMetadata: true }
    );

    // Verify JSON format
    expect(typeof jsonData).toBe('string');
    
    const parsedData = JSON.parse(jsonData);
    expect(Array.isArray(parsedData)).toBe(true);
    expect(parsedData.length).toBeGreaterThan(0);
    
    const testEntry = parsedData.find((entry: any) => 
      entry.reason === 'TEST_AUDIT: JSON export test'
    );
    
    expect(testEntry).toBeDefined();
    expect(testEntry.unitId).toBe(testUnitId);
    expect(testEntry.action).toBe(ListingAction.CREATE);
    expect(testEntry.newStatus).toBe(ListingStatus.ACTIVE);
    expect(testEntry.userId).toBe(testUserId);
    expect(testEntry.metadata).toEqual(metadata);
  });

  test('should get audit statistics', async () => {
    // Create diverse audit entries
    await auditService.createAuditEntry({
      unitId: testUnitId,
      action: ListingAction.CREATE,
      newStatus: ListingStatus.ACTIVE,
      userId: testUserId,
      reason: 'TEST_AUDIT: Stats test 1'
    });

    await auditService.createAuditEntry({
      unitId: testUnitId,
      action: ListingAction.UPDATE,
      newStatus: ListingStatus.ACTIVE,
      userId: testUserId,
      reason: 'TEST_AUDIT: Stats test 2'
    });

    await auditService.createAuditEntry({
      unitId: testUnitId,
      action: ListingAction.SUSPEND,
      newStatus: ListingStatus.SUSPENDED,
      userId: testUserId,
      reason: 'TEST_AUDIT: Stats test 3'
    });

    const statistics = await auditService.getAuditStatistics({
      unitId: testUnitId
    });

    // Verify statistics structure
    expect(statistics.totalEntries).toBeGreaterThanOrEqual(3);
    expect(statistics.actionBreakdown).toBeDefined();
    expect(statistics.statusBreakdown).toBeDefined();
    expect(statistics.userActivity).toBeDefined();
    expect(statistics.timelineData).toBeDefined();

    // Verify action breakdown includes our test actions
    expect(statistics.actionBreakdown[ListingAction.CREATE]).toBeGreaterThanOrEqual(1);
    expect(statistics.actionBreakdown[ListingAction.UPDATE]).toBeGreaterThanOrEqual(1);
    expect(statistics.actionBreakdown[ListingAction.SUSPEND]).toBeGreaterThanOrEqual(1);

    // Verify status breakdown
    expect(statistics.statusBreakdown[ListingStatus.ACTIVE]).toBeGreaterThanOrEqual(2);
    expect(statistics.statusBreakdown[ListingStatus.SUSPENDED]).toBeGreaterThanOrEqual(1);

    // Verify user activity
    const testUserActivity = statistics.userActivity.find(activity => 
      activity.userId === testUserId
    );
    expect(testUserActivity).toBeDefined();
    expect(testUserActivity!.actionCount).toBeGreaterThanOrEqual(3);
  });
});