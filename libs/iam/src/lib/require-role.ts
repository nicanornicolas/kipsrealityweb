/**
 * RBAC Helper - Reusable role check function for API routes
 *
 * Usage in API routes:
 *
 * import { requireRole } from "@rentflow/iam";
 *
 * export async function POST(req: Request) {
 *   const error = await requireRole(["SYSTEM_ADMIN"]);
 *   if (error) return error;
 *   // ... rest of handler
 * }
 */

import 'server-only';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyAccessToken } from './auth';
import * as Sentry from '@sentry/nextjs';

/**
 * Token payload structure from JWT
 */
interface TokenPayload {
  userId: string;
  email: string;
  role: string;
  organizationId: string;
  organizationUserId: string;
}

/**
 * Extract and validate the access token from cookies
 */
async function getTokenPayload(): Promise<TokenPayload | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) {
      return null;
    }

    const payload = verifyAccessToken(token) as TokenPayload;
    return payload;
  } catch {
    return null;
  }
}

/**
 * Require a specific role or roles to access the API endpoint
 * @param allowedRoles - Array of roles that are allowed to access the endpoint
 * @returns null if allowed, NextResponse with 401/403 if denied
 */
export async function requireRole(
  allowedRoles: string[],
  request?: Request,
): Promise<NextResponse | null> {
  // 1. Check authentication
  const payload = await getTokenPayload();

  if (!payload) {
    return NextResponse.json(
      { error: 'Unauthorized - No valid token' },
      { status: 401 },
    );
  }

  // Inject authenticated user context for observability
  Sentry.setUser({ id: payload.userId, email: payload.email });
  Sentry.setTag('auth.role', payload.role);
  Sentry.setTag('org.id', payload.organizationId);
  Sentry.setTag('org.userId', payload.organizationUserId);
  Sentry.setContext('organization', {
    id: payload.organizationId,
    userId: payload.organizationUserId,
  });
  Sentry.setContext('auth', {
    role: payload.role,
    userId: payload.userId,
    email: payload.email,
  });

  if (request) {
    try {
      const url = new URL(request.url);
      Sentry.setTag('http.method', request.method);
      Sentry.setTag('http.route', url.pathname);
    } catch {
      // Ignore malformed URLs; tags are best-effort
    }
  }

  // 2. Check role authorization
  if (!payload.role || !allowedRoles.includes(payload.role)) {
    return NextResponse.json(
      { error: `Forbidden - Requires one of: ${allowedRoles.join(', ')}` },
      { status: 403 },
    );
  }

  // 3. Return null to indicate allowed
  return null;
}

/**
 * Require SYSTEM_ADMIN role specifically
 * Shorthand for requireRole(["SYSTEM_ADMIN"])
 */
export async function requireSystemAdmin(
  request?: Request,
): Promise<NextResponse | null> {
  return requireRole(['SYSTEM_ADMIN'], request);
}

/**
 * Require admin-level role (SYSTEM_ADMIN or PROPERTY_MANAGER)
 */
export async function requireAdminRole(
  request?: Request,
): Promise<NextResponse | null> {
  return requireRole(['SYSTEM_ADMIN', 'PROPERTY_MANAGER'], request);
}

/**
 * Get the current user's role from token without enforcing any restrictions
 * Useful for optional role-based logic
 */
export async function getCurrentUserRole(): Promise<string | null> {
  const payload = await getTokenPayload();
  return payload?.role ?? null;
}
