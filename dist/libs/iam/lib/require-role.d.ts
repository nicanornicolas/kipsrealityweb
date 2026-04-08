import { NextResponse } from 'next/server';
/**
 * Require a specific role or roles to access the API endpoint
 * @param allowedRoles - Array of roles that are allowed to access the endpoint
 * @returns null if allowed, NextResponse with 401/403 if denied
 */
export declare function requireRole(allowedRoles: string[], request?: Request): Promise<NextResponse | null>;
/**
 * Require SYSTEM_ADMIN role specifically
 * Shorthand for requireRole(["SYSTEM_ADMIN"])
 */
export declare function requireSystemAdmin(request?: Request): Promise<NextResponse | null>;
/**
 * Require admin-level role (SYSTEM_ADMIN or PROPERTY_MANAGER)
 */
export declare function requireAdminRole(request?: Request): Promise<NextResponse | null>;
/**
 * Get the current user's role from token without enforcing any restrictions
 * Useful for optional role-based logic
 */
export declare function getCurrentUserRole(): Promise<string | null>;
