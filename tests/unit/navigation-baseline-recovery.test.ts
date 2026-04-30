import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { getSidebarSectionsForRole, type DashboardRole } from '@/components/Dashboard/SidebarLinks';

const roles: DashboardRole[] = [
  'SYSTEM_ADMIN',
  'PROPERTY_MANAGER',
  'TENANT',
  'VENDOR',
  'AGENT',
];

function collectPageRoutes(rootDir: string, urlPrefix = ''): string[] {
  if (!fs.existsSync(rootDir)) return [];

  const entries = fs.readdirSync(rootDir, { withFileTypes: true });
  const routes: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(rootDir, entry.name);

    if (entry.isDirectory()) {
      const nestedPrefix = `${urlPrefix}/${entry.name}`
        .replace(/\\/g, '/')
        .replace(/\/\(.*?\)/g, '')
        .replace(/\/+/g, '/');
      routes.push(...collectPageRoutes(fullPath, nestedPrefix));
      continue;
    }

    if (entry.name === 'page.tsx' || entry.name === 'page.ts') {
      const normalized = urlPrefix
        .replace(/\\/g, '/')
        .replace(/\/\(.*?\)/g, '')
        .replace(/\/+/g, '/');
      routes.push(normalized === '' ? '/' : normalized);
    }
  }

  return routes;
}

const dashboardRoutes = collectPageRoutes(path.join(process.cwd(), 'src', 'app', '(dashboard)'));
const legacyDashboardRoutes = collectPageRoutes(path.join(process.cwd(), 'src', 'app', 'dashboard'), '/dashboard');
const existingRoutes = new Set([...dashboardRoutes, ...legacyDashboardRoutes]);

describe('Milestone 0 navigation baseline', () => {
  it('has core role dashboards wired', () => {
    expect(existingRoutes.has('/tenant')).toBe(true);
    expect(existingRoutes.has('/vendor')).toBe(true);
    expect(existingRoutes.has('/agent')).toBe(true);
  });

  it('keeps sidebar routes honest: existing route or explicit comingSoon', () => {
    for (const role of roles) {
      const sections = getSidebarSectionsForRole(role);

      for (const section of sections) {
        for (const route of section.routes) {
          const routeExists = existingRoutes.has(route.path);
          expect(
            routeExists || Boolean(route.comingSoon),
            `${role} route ${route.path} must exist or be marked comingSoon`,
          ).toBe(true);
        }
      }
    }
  });

  it('prevents tenant cross-role navigation drift', () => {
    const tenantRoutes = getSidebarSectionsForRole('TENANT')
      .flatMap((section) => section.routes)
      .map((route) => route.path);

    for (const route of tenantRoutes) {
      const isTenantScoped =
        route.startsWith('/tenant') || route.startsWith('/dashboard/tenant');
      expect(isTenantScoped, `Tenant route should stay tenant-scoped: ${route}`).toBe(true);
      expect(route.startsWith('/property-manager')).toBe(false);
      expect(route.startsWith('/vendor')).toBe(false);
      expect(route.startsWith('/agent')).toBe(false);
      expect(route.startsWith('/admin')).toBe(false);
    }
  });
});
