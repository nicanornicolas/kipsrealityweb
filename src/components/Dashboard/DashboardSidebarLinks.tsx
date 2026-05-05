'use client'

import { motion } from 'framer-motion'
import { RouteGroup } from './RouteGroup'
import { getSidebarSectionsForRole } from './SidebarLinks'

interface DashboardSidebarLinksProps {
  user: { id: string; firstName: string; role: string; email: string }
  open?: boolean
  isCollapsed?: boolean
  darkMode?: boolean
}

export function DashboardSidebarLinks({ user, open = true, isCollapsed = false, darkMode = true }: DashboardSidebarLinksProps) {
  const sections = getSidebarSectionsForRole(user.role)

  return (
    <motion.div className="flex flex-1 flex-col justify-between overflow-hidden" layout>
      <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar pr-2 pb-4">
        {sections.map((section) => (
          <RouteGroup
            key={section.key}
            routes={section.routes}
            open={open}
            categoryLabel={section.title}
            isCollapsed={isCollapsed}
            darkMode={darkMode}
          />
        ))}
      </div>
    </motion.div>
  )
}
