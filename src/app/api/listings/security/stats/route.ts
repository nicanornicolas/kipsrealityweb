/**
 * Security statistics API endpoint
 * Provides security metrics and monitoring data for listing operations
 */

import { NextRequest, NextResponse } from 'next/server';
import { withSecurity } from '@/lib/listing-security-middleware';
import { UserRole } from '@/lib/listing-auth.types';
import { AbusePreventionService } from '@/lib/listing-abuse-prevention';
import { ListingLogger, LogCategory } from '@/lib/listing-logger';

// Secure GET handler for security statistics
const secureGetHandler = withSecurity(
  async (request: NextRequest, context) => {
    const logger = ListingLogger.getInstance();
    const abusePreventionService = AbusePreventionService.getInstance();
    
    try {
      // Get security statistics
      const securityStats = abusePreventionService.getSecurityStats();
      
      // Get user's own security status
      const userSecurityStatus = abusePreventionService.getUserSecurityStatus(
        context.userId, 
        context.ip
      );

      // Log security stats access
      logger.info(
        LogCategory.AUDIT,
        'Security statistics accessed',
        {
          userId: context.userId,
          userRole: context.userRole,
          ip: context.ip
        }
      );

      const response = {
        timestamp: new Date().toISOString(),
        userSecurityStatus,
        systemStats: {
          ...securityStats,
          // Only show detailed stats to admins
          ...(context.userRole === UserRole.ADMIN || context.userRole === UserRole.SUPER_ADMIN ? {
            detailedMetrics: true
          } : {
            detailedMetrics: false,
            // Hide sensitive information for non-admins
            topSuspiciousIPs: []
          })
        }
      };

      return NextResponse.json(response, { status: 200 });

    } catch (error) {
      logger.error(
        LogCategory.ERROR_RECOVERY,
        'Security statistics retrieval failed',
        error instanceof Error ? error : undefined,
        {
          userId: context.userId
        }
      );
      
      return NextResponse.json(
        { error: 'Failed to retrieve security statistics' },
        { status: 500 }
      );
    }
  },
  {
    requireAuth: true,
    requiredRole: UserRole.PROPERTY_MANAGER,
    operation: 'view',
    validateData: false,
    checkRateLimit: true,
    logAccess: true
  }
);

export { secureGetHandler as GET };
