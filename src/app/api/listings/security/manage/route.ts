/**
 * Security management API endpoint
 * Allows admins to manage bans, security settings, and abuse prevention
 */

import { NextRequest, NextResponse } from 'next/server';
import { withSecurity } from '@/lib/listing-security-middleware';
import { UserRole } from '@/lib/listing-auth.types';
import { AbusePreventionService } from '@/lib/listing-abuse-prevention';
import { ListingSanitizer } from '@/lib/listing-sanitizer';
import { ListingLogger, LogCategory } from '@/lib/listing-logger';

// Secure POST handler for security management actions
const securePostHandler = withSecurity(
  async (request: NextRequest, context, sanitizedData) => {
    const logger = ListingLogger.getInstance();
    const abusePreventionService = AbusePreventionService.getInstance();
    
    try {
      const { action, targetUserId, targetIP, reason, permanent } = sanitizedData;

      // Validate required fields
      if (!action) {
        return NextResponse.json(
          { error: 'Action is required' },
          { status: 400 }
        );
      }

      let result;

      switch (action) {
        case 'ban_user':
          if (!targetUserId || !reason) {
            return NextResponse.json(
              { error: 'Target user ID and reason are required for ban action' },
              { status: 400 }
            );
          }

          abusePreventionService.banUser(
            targetUserId, 
            targetIP || 'unknown', 
            reason, 
            permanent || false
          );

          result = { message: 'User banned successfully' };
          break;

        case 'unban_user':
          if (!targetUserId) {
            return NextResponse.json(
              { error: 'Target user ID is required for unban action' },
              { status: 400 }
            );
          }

          abusePreventionService.unbanUser(
            targetUserId, 
            targetIP || 'unknown', 
            reason || 'Admin unban'
          );

          result = { message: 'User unbanned successfully' };
          break;

        case 'clear_failed_attempts':
          if (!targetUserId) {
            return NextResponse.json(
              { error: 'Target user ID is required for clear action' },
              { status: 400 }
            );
          }

          abusePreventionService.clearFailedAttempts(
            targetUserId, 
            targetIP || 'unknown'
          );

          result = { message: 'Failed attempts cleared successfully' };
          break;

        case 'get_user_status':
          if (!targetUserId) {
            return NextResponse.json(
              { error: 'Target user ID is required for status check' },
              { status: 400 }
            );
          }

          const userStatus = abusePreventionService.getUserSecurityStatus(
            targetUserId, 
            targetIP || 'unknown'
          );

          result = { userStatus };
          break;

        default:
          return NextResponse.json(
            { error: 'Invalid action specified' },
            { status: 400 }
          );
      }

      // Log security management action
      logger.info(
        LogCategory.PERMISSION,
        'Security management action performed',
        {
          adminUserId: context.userId,
          action,
          targetUserId,
          targetIP,
          reason,
          permanent
        }
      );

      return NextResponse.json(result, { status: 200 });

    } catch (error) {
      logger.error(
        LogCategory.ERROR_RECOVERY,
        'Security management action failed',
        error instanceof Error ? error : undefined,
        {
          adminUserId: context.userId,
          action: sanitizedData?.action
        }
      );
      
      return NextResponse.json(
        { error: 'Security management action failed' },
        { status: 500 }
      );
    }
  },
  {
    requireAuth: true,
    requiredRole: UserRole.ADMIN,
    operation: 'manage',
    validateData: true,
    checkRateLimit: true,
    logAccess: true
  }
);

// Custom validation for security management data
function validateSecurityManagementData(data: any) {
  const sanitizedData = {
    action: ListingSanitizer.sanitizeText(data.action, { maxLength: 50 }),
    targetUserId: data.targetUserId ? ListingSanitizer.sanitizeText(data.targetUserId, { maxLength: 100 }) : undefined,
    targetIP: data.targetIP ? ListingSanitizer.sanitizeText(data.targetIP, { maxLength: 45 }) : undefined,
    reason: data.reason ? ListingSanitizer.sanitizeText(data.reason, { maxLength: 500 }) : undefined,
    permanent: ListingSanitizer.sanitizeBoolean(data.permanent)
  };

  // Validate action
  const validActions = ['ban_user', 'unban_user', 'clear_failed_attempts', 'get_user_status'];
  if (!validActions.includes(sanitizedData.action)) {
    throw new Error('Invalid action specified');
  }

  return sanitizedData;
}

export { securePostHandler as POST };
