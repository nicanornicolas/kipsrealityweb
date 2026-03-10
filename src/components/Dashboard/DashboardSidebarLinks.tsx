'use client'

import { motion } from 'framer-motion'
import { RouteGroup } from './RouteGroup'
import { systemRoutes, routeConfig } from './SidebarLinks'
import { LogOut } from 'lucide-react'
import { useLogout } from '@/hooks/useLogout';

interface DashboardSidebarLinksProps {
  user: { id: string, firstName: string, role: string, email: string }
  open?: boolean
  isCollapsed?: boolean
  darkMode?: boolean
}

export function DashboardSidebarLinks({ user, open = true, isCollapsed = false, darkMode = true }: DashboardSidebarLinksProps) {
  const userRoutes = routeConfig[user.role as keyof typeof routeConfig] as Record<string, any>;
  const { logout } = useLogout({ redirectTo: '/' });

  const handleLogout = async () => {
    await logout()
  }

  // Get the first/default route group for this role (varies by role)
  const defaultRoutes = userRoutes?.main || userRoutes?.overview || [];

  return (
    <motion.div className="flex flex-1 flex-col justify-between overflow-hidden" layout>
      <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar pr-2 pb-4">
        {defaultRoutes && defaultRoutes.length > 0 && <RouteGroup routes={defaultRoutes} open={open} isCollapsed={isCollapsed} darkMode={darkMode} />}
        {Object.entries(userRoutes || {}).map(([key, routes]: [string, any]) => {
          const skipKeys = ['main', 'overview'];
          if (skipKeys.includes(key)) return null;
          return (
            <RouteGroup
              key={key}
              routes={routes}
              open={open}
              categoryLabel={key.charAt(0).toUpperCase() + key.slice(1)}
              isCollapsed={isCollapsed}
              darkMode={darkMode}
            />
          );
        })}
      </div>
    </motion.div>
  )
}
