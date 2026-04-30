import {
  LayoutDashboard,
  FileText,
  Image,
  Navigation,
  Settings,
  User,
  Home,
  ClipboardList,
  Bell,
  BarChart2,
  MessageSquare,
  DollarSign,
  Users,
  Wrench,
  Building2,
  Calculator,
  Zap,
  FolderOpen,
  PenTool,
  Contact,
  PieChart,
  Wallet,
  FileInput,
  CreditCard,
  Landmark,
  UserCircle,
  Store,
  Book,
  Box,
  Shield,
  LucideIcon,
  Mail,
} from 'lucide-react';

export type DashboardRole =
  | 'SYSTEM_ADMIN'
  | 'PROPERTY_MANAGER'
  | 'TENANT'
  | 'VENDOR'
  | 'AGENT';

export interface SidebarLink {
  name: string;
  href: string;
  icon: LucideIcon;
}

export interface SidebarCategory {
  title: string;
  items: SidebarLink[];
}

export interface DashboardRoute {
  path: string;
  label: string;
  icon: LucideIcon;
  badge?: string | null;
  description?: string;
  comingSoon?: boolean;
}

export interface DashboardRouteGroup {
  key: string;
  title: string;
  routes: DashboardRoute[];
}

const roleSidebarConfig: Record<DashboardRole, DashboardRouteGroup[]> = {
  SYSTEM_ADMIN: [
    {
      key: 'main',
      title: 'Main',
      routes: [
        {
          path: '/admin',
          label: 'Dashboard Overview',
          icon: LayoutDashboard,
        },
      ],
    },
    {
      key: 'content',
      title: 'Content',
      routes: [
        {
          path: '/admin/content/Hero-crud',
          label: 'Hero Section',
          icon: Zap,
          description: 'Update background image and hero text',
        },
        {
          path: '/admin/content/AboutUs-crud',
          label: 'About Us Page',
          icon: Users,
          description: 'Edit company story and team info',
        },
        {
          path: '/admin/content/ContactUs-crud',
          label: 'Contact Us Page',
          icon: Users,
          description: 'View customer messages',
        },
        {
          path: '/admin/content/service-crud',
          label: 'Services Page',
          icon: Wrench,
          description: 'Manage services list and descriptions',
        },
        {
          path: '/admin/content/policy-crud',
          label: 'Policy Page',
          icon: Wrench,
          description: 'Manage policy sections and content',
        },
        {
          path: '/admin/content/Pricing-Crud',
          label: 'Pricing Section',
          icon: DollarSign,
          description: 'Update pricing plans and features',
        },
        {
          path: '/admin/content/CTA-crud',
          label: 'CTA Section',
          icon: DollarSign,
          description: 'Update call-to-action content',
        },
        {
          path: '/admin/content/testimonial-crud',
          label: 'Testimonials',
          icon: MessageSquare,
          description: 'Manage customer reviews and ratings',
        },
        {
          path: '/admin/content/navbar',
          label: 'Navbar',
          icon: MessageSquare,
          description: 'Manage website navigation links',
        },
        {
          path: '/admin/content/SidebarItem-Crud',
          label: 'Sidebar Menus',
          icon: MessageSquare,
          description: 'Manage dashboard sidebar menu items',
        },
      ],
    },
    {
      key: 'blog',
      title: 'Blog',
      routes: [
        {
          path: '/admin/content/blog',
          label: 'Blog Posts',
          icon: FileText,
          description: 'Create and edit blog articles',
          comingSoon: true,
        },
        {
          path: '/admin/content/blog/categories',
          label: 'Blog Categories',
          icon: FileText,
          description: 'Organize blog posts by categories',
          comingSoon: true,
        },
      ],
    },
    {
      key: 'media',
      title: 'Media',
      routes: [
        {
          path: '/admin/content/media',
          label: 'Media Library',
          icon: Image,
          description: 'Upload and manage images',
          comingSoon: true,
        },
      ],
    },
    {
      key: 'navigation',
      title: 'Navigation',
      routes: [
        {
          path: '/admin/content/navigation',
          label: 'Site Navigation',
          icon: Navigation,
          description: 'Manage menu items and links',
          comingSoon: true,
        },
      ],
    },
    {
      key: 'system',
      title: 'System',
      routes: [
        {
          path: '/admin/users',
          label: 'User Management',
          icon: Users,
        },
        {
          path: '/admin/invites',
          label: 'Send Invites',
          icon: Mail,
        },
        {
          path: '/admin/settings',
          label: 'System Settings',
          icon: Settings,
          comingSoon: true,
        },
      ],
    },
  ],

  PROPERTY_MANAGER: [
    {
      key: 'overview',
      title: 'Overview',
      routes: [
        { path: '/property-manager', label: 'Dashboard', icon: LayoutDashboard },
        { path: '/property-manager/documents', label: 'Documents', icon: FolderOpen },
        { path: '/property-manager/dss/upload', label: 'eSign (DSS)', icon: PenTool },
      ],
    },
    {
      key: 'portfolio',
      title: 'Portfolio',
      routes: [
        {
          path: '/property-manager/view-own-property',
          label: 'Properties',
          icon: Building2,
        },
        {
          path: '/property-manager/content/lease',
          label: 'Leases',
          icon: FileText,
        },
        {
          path: '/property-manager/listings',
          label: 'Marketplace Listings',
          icon: Store,
        },
      ],
    },
    {
      key: 'tenants',
      title: 'Tenants',
      routes: [
        {
          path: '/property-manager/content/tenants',
          label: 'My Tenants',
          icon: Users,
        },
        { path: '/property-manager/directory', label: 'Directory', icon: Contact },
      ],
    },
    {
      key: 'operations',
      title: 'Operations',
      routes: [
        {
          path: '/property-manager/maintenance/requests',
          label: 'Maintenance',
          icon: Wrench,
        },
        {
          path: '/property-manager/content/utilities',
          label: 'Utility Ops',
          icon: Zap,
        },
        {
          path: '/property-manager/content/utilities/allocations',
          label: 'Allocations',
          icon: PieChart,
        },
      ],
    },
    {
      key: 'finance',
      title: 'Finance',
      routes: [
        {
          path: '/property-manager/finance/invoices',
          label: 'Invoices',
          icon: FileInput,
        },
        {
          path: '/property-manager/content/payments',
          label: 'Payments',
          icon: CreditCard,
        },
        {
          path: '/property-manager/finance/ledger',
          label: 'Ledger',
          icon: Wallet,
        },
        {
          path: '/property-manager/finance/journal',
          label: 'Journal Entries',
          icon: Book,
        },
        {
          path: '/property-manager/finance/reconciliation',
          label: 'Bank Reconciliation',
          icon: Landmark,
        },
      ],
    },
    {
      key: 'system',
      title: 'System',
      routes: [
        { path: '/property-manager/settings', label: 'Settings', icon: Settings },
        {
          path: '/property-manager/settings/integrations',
          label: 'Integrations',
          icon: Box,
        },
        {
          path: '/property-manager/settings/roles',
          label: 'Role Management',
          icon: Shield,
        },
        {
          path: '/property-manager/profile',
          label: 'Profile',
          icon: UserCircle,
        },
      ],
    },
  ],

  TENANT: [
    {
      key: 'main',
      title: 'Overview',
      routes: [{ path: '/tenant', label: 'Overview', icon: LayoutDashboard }],
    },
    {
      key: 'lease',
      title: 'Lease',
      routes: [
        {
          path: '/tenant/content/lease',
          label: 'View Lease Details',
          icon: FileText,
        },
        {
          path: '/tenant/renew-terminate',
          label: 'Renew / Terminate Request',
          icon: Users,
        },
        {
          path: '/tenant/insurance-upload',
          label: 'Insurance Upload',
          icon: Users,
          comingSoon: true,
        },
      ],
    },
    {
      key: 'payments',
      title: 'Payments',
      routes: [
        {
          path: '/tenant/pay-rent',
          label: 'Pay Rent (Stripe / Zelle / ACH)',
          icon: Calculator,
          comingSoon: true,
        },
        {
          path: '/tenant/payment-history',
          label: 'Payment History',
          icon: Calculator,
          comingSoon: true,
        },
        {
          path: '/tenant/content/invoices',
          label: 'Upcoming Invoices',
          icon: Calculator,
        },
      ],
    },
    {
      key: 'maintenance',
      title: 'Maintenance',
      routes: [
        {
          path: '/tenant/submit-request',
          label: 'Submit Request',
          icon: Wrench,
          comingSoon: true,
        },
        {
          path: '/tenant/track-progress',
          label: 'Track Progress',
          icon: Wrench,
          comingSoon: true,
        },
        {
          path: '/tenant/past-requests',
          label: 'View Past Requests',
          icon: Wrench,
          comingSoon: true,
        },
      ],
    },
    {
      key: 'utilities',
      title: 'Utilities',
      routes: [
        {
          path: '/tenant/content/utilities',
          label: 'My Utility Bills',
          icon: Zap,
        },
        {
          path: '/tenant/content/utilities/bill-t001',
          label: 'Bill Details',
          icon: FileText,
          comingSoon: true,
        },
      ],
    },
    {
      key: 'insurance',
      title: 'Insurance',
      routes: [
        {
          path: '/tenant/insurance-purchase',
          label: 'Purchase / Upload Policy',
          icon: Users,
          comingSoon: true,
        },
        {
          path: '/tenant/insurance-renewal',
          label: 'Renewal Reminders',
          icon: Users,
          comingSoon: true,
        },
        {
          path: '/tenant/insurance-claims',
          label: 'Claim Assistance',
          icon: Users,
          comingSoon: true,
        },
      ],
    },
    {
      key: 'notifications',
      title: 'Notifications',
      routes: [
        {
          path: '/tenant/rent-reminders',
          label: 'Rent Reminders',
          icon: Zap,
          comingSoon: true,
        },
        {
          path: '/tenant/maintenance-notifications',
          label: 'Maintenance Updates',
          icon: Zap,
          comingSoon: true,
        },
        {
          path: '/tenant/lease-alerts',
          label: 'Lease Alerts',
          icon: Zap,
          comingSoon: true,
        },
      ],
    },
    {
      key: 'profile',
      title: 'Profile',
      routes: [
        { path: '/tenant/settings', label: 'Settings', icon: Settings },
        {
          path: '/dashboard/tenant/update-info',
          label: 'Update Info',
          icon: Settings,
          comingSoon: true,
        },
        {
          path: '/dashboard/tenant/security',
          label: 'MFA / Password Change',
          icon: Settings,
          comingSoon: true,
        },
      ],
    },
  ],

  VENDOR: [
    {
      key: 'main',
      title: 'Overview',
      routes: [{ path: '/vendor', label: 'Overview', icon: Home }],
    },
    {
      key: 'workOrders',
      title: 'Work Orders',
      routes: [
        {
          path: '/vendor/jobs',
          label: 'My Jobs',
          icon: ClipboardList,
          badge: '4',
          comingSoon: true,
        },
        {
          path: '/vendor/assigned',
          label: 'Assigned Requests',
          icon: FileText,
          comingSoon: true,
        },
        {
          path: '/vendor/progress',
          label: 'Update Progress',
          icon: FileText,
          comingSoon: true,
        },
        {
          path: '/vendor/reports',
          label: 'Submit Reports / Photos',
          icon: FileText,
          comingSoon: true,
        },
        {
          path: '/vendor/status',
          label: 'Status Tracking',
          icon: FileText,
          comingSoon: true,
        },
        {
          path: '/vendor/history',
          label: 'Maintenance History',
          icon: FileText,
          comingSoon: true,
        },
      ],
    },
    {
      key: 'invoices',
      title: 'Invoices',
      routes: [
        {
          path: '/vendor/invoices',
          label: 'Invoices',
          icon: DollarSign,
          badge: '2',
          comingSoon: true,
        },
        {
          path: '/vendor/generate',
          label: 'Generate Invoice',
          icon: FileText,
          comingSoon: true,
        },
        {
          path: '/vendor/payment-history',
          label: 'Payment History',
          icon: FileText,
          comingSoon: true,
        },
        {
          path: '/vendor/payment-updates',
          label: 'Payment Updates',
          icon: FileText,
          comingSoon: true,
        },
      ],
    },
    {
      key: 'analytics',
      title: 'Analytics',
      routes: [
        {
          path: '/vendor/analytics',
          label: 'Analytics by Property',
          icon: BarChart2,
          comingSoon: true,
        },
      ],
    },
    {
      key: 'communication',
      title: 'Communication',
      routes: [
        {
          path: '/vendor/messages',
          label: 'Messages',
          icon: MessageSquare,
          badge: '1',
          comingSoon: true,
        },
        {
          path: '/vendor/notifications',
          label: 'Notifications',
          icon: Bell,
          comingSoon: true,
        },
      ],
    },
    {
      key: 'profile',
      title: 'Profile',
      routes: [
        {
          path: '/vendor/profile',
          label: 'Business Info',
          icon: User,
          comingSoon: true,
        },
        {
          path: '/vendor/certifications',
          label: 'Certifications & Documents',
          icon: User,
          comingSoon: true,
        },
        {
          path: '/vendor/security',
          label: 'Security Settings',
          icon: User,
          comingSoon: true,
        },
      ],
    },
  ],

  AGENT: [
    {
      key: 'main',
      title: 'Overview',
      routes: [
        { path: '/agent', label: 'Overview', icon: LayoutDashboard },
      ],
    },
    {
      key: 'properties',
      title: 'Properties',
      routes: [
        {
          path: '/agent/properties',
          label: 'My Properties',
          icon: Building2,
          comingSoon: true,
        },
        {
          path: '/agent/listings',
          label: 'Listings',
          icon: Store,
          comingSoon: true,
        },
      ],
    },
    {
      key: 'tenants',
      title: 'Tenants',
      routes: [
        {
          path: '/agent/tenants',
          label: 'My Tenants',
          icon: Users,
          comingSoon: true,
        },
      ],
    },
    {
      key: 'communications',
      title: 'Communications',
      routes: [
        {
          path: '/agent/messages',
          label: 'Messages',
          icon: MessageSquare,
          comingSoon: true,
        },
        {
          path: '/agent/notifications',
          label: 'Notifications',
          icon: Bell,
          comingSoon: true,
        },
      ],
    },
    {
      key: 'profile',
      title: 'Profile',
      routes: [
        {
          path: '/agent/profile',
          label: 'Profile',
          icon: UserCircle,
          comingSoon: true,
        },
      ],
    },
  ],
};

export const systemRoutes: DashboardRoute[] = [];

export function getSidebarSectionsForRole(role?: string): DashboardRouteGroup[] {
  if (!role) return roleSidebarConfig.PROPERTY_MANAGER;
  return roleSidebarConfig[role as DashboardRole] ?? roleSidebarConfig.PROPERTY_MANAGER;
}

export const routeConfig = Object.fromEntries(
  (Object.entries(roleSidebarConfig) as [DashboardRole, DashboardRouteGroup[]][]).map(
    ([role, groups]) => [
      role,
      Object.fromEntries(groups.map((group) => [group.key, group.routes])),
    ],
  ),
) as Record<DashboardRole, Record<string, DashboardRoute[]>>;

function toLegacyCategories(role: DashboardRole): SidebarCategory[] {
  return roleSidebarConfig[role].map((group) => ({
    title: group.title,
    items: group.routes.map((route) => ({
      name: route.label,
      href: route.path,
      icon: route.icon,
    })),
  }));
}

export const PROPERTY_MANAGER_LINKS: SidebarCategory[] = toLegacyCategories('PROPERTY_MANAGER');
export const TENANT_LINKS: SidebarCategory[] = toLegacyCategories('TENANT');
export const VENDOR_LINKS: SidebarCategory[] = toLegacyCategories('VENDOR');
export const AGENT_LINKS: SidebarCategory[] = toLegacyCategories('AGENT');
