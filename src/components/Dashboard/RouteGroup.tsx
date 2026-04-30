'use client'

import { usePathname } from 'next/navigation'
import { RouteItem } from './RouteItem'
import type { DashboardRoute } from './SidebarLinks'

interface RouteGroupProps {
  routes: DashboardRoute[]
  open: boolean
  categoryLabel?: string
  isCollapsed?: boolean
  darkMode?: boolean
}

export function RouteGroup({ routes, open, categoryLabel, isCollapsed, darkMode }: RouteGroupProps) {
  const pathname = usePathname()

  return (
    <div className="w-full mb-2">
      {categoryLabel && open && (
        <p className="text-blue-200 text-xs font-semibold uppercase tracking-wider mb-3 px-3">
          {categoryLabel}
        </p>
      )}
      <div className="space-y-1 px-2">
        {routes.map((route) => (
          <RouteItem
            key={route.path}
            route={route}
            open={open}
            isActive={pathname === route.path || pathname.startsWith(`${route.path}/`)}
            isCollapsed={isCollapsed}
            darkMode={darkMode}
          />
        ))}
      </div>
    </div>
  )
}
