'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PROPERTY_MANAGER_LINKS, SidebarCategory } from './SidebarLinks';
import { cn } from './';
import { ChevronDown, Building2 } from 'lucide-react';

interface SidebarProps {
  role?: string;
}

export default function Sidebar({ role = 'PROPERTY_MANAGER' }: SidebarProps) {
  const pathname = usePathname();
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});

  // Get the appropriate links based on role
  const getLinksForRole = (): SidebarCategory[] => {
    switch (role) {
      case 'PROPERTY_MANAGER':
        return PROPERTY_MANAGER_LINKS;
      default:
        // Fallback to property manager links for other roles
        return PROPERTY_MANAGER_LINKS;
    }
  };

  const sidebarLinks = getLinksForRole();

  // Initialize: open the category containing the active link
  useEffect(() => {
    const initialState: Record<string, boolean> = {};
    
    sidebarLinks.forEach((category) => {
      const hasActiveLink = category.items.some(
        (link) => pathname === link.href || pathname?.startsWith(`${link.href}/`)
      );
      
      // Open "Overview" by default, or the category with the active link
      initialState[category.title] = hasActiveLink || category.title === 'Overview';
    });

    setOpenCategories(initialState);
  }, [pathname, sidebarLinks]);

  const toggleCategory = (title: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <aside className="w-64 h-screen overflow-y-auto bg-[#003B73] text-white flex flex-col border-r border-slate-700/50 custom-scrollbar">
      {/* Logo Area */}
      <div className="p-6 sticky top-0 bg-[#003B73] z-10 border-b border-slate-700/50 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">RentFlow360</h1>
            <p className="text-xs text-blue-300 mt-1 uppercase tracking-wider">Property Manager</p>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 pb-8 space-y-4">
        {sidebarLinks.map((category) => {
          const isOpen = openCategories[category.title];

          return (
            <div key={category.title} className="flex flex-col">
              {/* Category Header (Clickable Accordion Trigger) */}
              <button
                onClick={() => toggleCategory(category.title)}
                className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-blue-300/70 uppercase tracking-wider hover:text-white transition-colors group focus:outline-none"
              >
                <span>{category.title}</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-300 ease-in-out text-blue-300/50 group-hover:text-white",
                    isOpen ? "rotate-0" : "-rotate-90"
                  )}
                />
              </button>

              {/* Accordion Content (Smooth height transition via CSS Grid) */}
              <div
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  isOpen ? "grid-rows-[1fr] opacity-100 mt-1" : "grid-rows-[0fr] opacity-0 mt-0"
                )}
              >
                <div className="overflow-hidden flex flex-col space-y-1">
                  {category.items.map((link) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);

                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group",
                          isActive
                            ? "bg-blue-600/20 text-blue-300 border border-blue-500/30 shadow-sm ml-2"
                            : "text-slate-300 hover:text-white hover:bg-blue-800/50 hover:ml-1"
                        )}
                      >
                        <Icon
                          className={cn(
                            "w-4 h-4 flex-shrink-0 transition-colors",
                            isActive ? "text-blue-400" : "text-slate-400 group-hover:text-white"
                          )}
                        />
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </nav>

      {/* User Profile Section */}
      <div className="p-4 border-t border-slate-700/50">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
            PM
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">Property Manager</p>
            <p className="text-xs text-blue-300 truncate">admin@rentflow360.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
