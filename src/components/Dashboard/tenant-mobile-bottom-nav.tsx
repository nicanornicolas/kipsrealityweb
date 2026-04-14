"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Home, CreditCard, Wrench, User } from "lucide-react";
import { cn } from "@/lib/utils";

const mobileTabs = [
  { href: "/tenant", label: "Home", icon: Home, activeStartsWith: ["/tenant"] },
  {
    href: "/tenant/content/invoices",
    label: "Pay",
    icon: CreditCard,
    activeStartsWith: ["/tenant/content/invoices", "/tenant/content/utilities"],
  },
  {
    href: "/tenant?section=maintenance",
    label: "Maintenance",
    icon: Wrench,
    activeStartsWith: ["/tenant"],
  },
  {
    href: "/tenant/settings",
    label: "Profile",
    icon: User,
    activeStartsWith: ["/tenant/settings"],
  },
];

export function TenantMobileBottomNav() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isActiveTab = (tab: (typeof mobileTabs)[number]) => {
    if (tab.label === "Maintenance") {
      return pathname === "/tenant" && searchParams.get("section") === "maintenance";
    }

    if (tab.label === "Home") {
      return pathname === "/tenant" && searchParams.get("section") !== "maintenance";
    }

    return tab.activeStartsWith.some((prefix) => pathname.startsWith(prefix));
  };

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label="Tenant navigation"
    >
      <ul className="grid grid-cols-4 px-2 pt-2">
        {mobileTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = isActiveTab(tab);

          return (
            <li key={tab.label}>
              <Link
                href={tab.href}
                className={cn(
                  "flex min-h-11 flex-col items-center justify-center gap-1 rounded-lg px-2 py-1 text-[11px] font-medium transition-colors",
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
