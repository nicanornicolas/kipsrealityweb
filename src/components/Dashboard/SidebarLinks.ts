
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
  BarChart3,
  MessageSquare,
  DollarSign,
  Users,
  Wrench,
  Building2,
  Calculator,
  Zap,
  FileSignature,
  FolderOpen,
  PenTool,
  Contact,
  PieChart,
  Wallet,
  FileInput,
  CreditCard,
  UserCircle,
  Store,
  Book,
  Box,
  Shield,
  LucideIcon
} from 'lucide-react'

// Type definitions for the new structured sidebar
export interface SidebarLink {
  name: string;
  href: string;
  icon: LucideIcon;
}

export interface SidebarCategory {
  title: string;
  items: SidebarLink[];
}

// New structured format for Property Manager sidebar with collapsible categories
export const PROPERTY_MANAGER_LINKS: SidebarCategory[] = [
  {
    title: 'Overview',
    items: [
      { name: 'Dashboard', href: '/property-manager', icon: LayoutDashboard },
      { name: 'Documents', href: '/property-manager/documents', icon: FolderOpen },
      { name: 'eSign (DSS)', href: '/property-manager/dss/upload', icon: PenTool },
    ],
  },
  {
    title: 'Portfolio',
    items: [
      { name: 'Properties', href: '/property-manager/view-own-property', icon: Building2 },
      { name: 'Leases', href: '/property-manager/content/lease', icon: FileText },
      { name: 'Marketplace Listings', href: '/property-manager/listings', icon: Store },
    ],
  },
  {
    title: 'Tenants',
    items: [
      { name: 'My Tenants', href: '/property-manager/content/tenants', icon: Users },
      { name: 'Directory', href: '/property-manager/directory', icon: Contact },
    ],
  },
  {
    title: 'Operations',
    items: [
      { name: 'Maintenance', href: '/property-manager/maintenance/requests', icon: Wrench },
      { name: 'Utility Ops', href: '/property-manager/content/utilities', icon: Zap },
      { name: 'Allocations', href: '/property-manager/content/utilities/allocations', icon: PieChart },
    ],
  },
  {
    title: 'Finance',
    items: [
      { name: 'Invoices', href: '/property-manager/finance/invoices', icon: FileInput },
      { name: 'Payments', href: '/property-manager/content/payments', icon: CreditCard },
      { name: 'Ledger', href: '/property-manager/finance/ledger', icon: Wallet },
      { name: 'Journal Entries', href: '/property-manager/finance/journal', icon: Book },
    ],
  },
  {
    title: 'System',
    items: [
      { name: 'Settings', href: '/property-manager/settings', icon: Settings },
      { name: 'Integrations', href: '/property-manager/settings/integrations', icon: Box },
      { name: 'Role Management', href: '/property-manager/settings/roles', icon: Shield },
      { name: 'Profile', href: '/property-manager/profile', icon: UserCircle },
    ],
  },
];



// System routes (common for all roles)
export const systemRoutes = []

// Role-based route configuration
export const routeConfig = {
  'SYSTEM_ADMIN': {
    main: [
      { path: '/admin', label: 'Dashboard Overview', icon: LayoutDashboard, badge: null },
    ],
    content: [
      {
        path: '/admin/content/Hero-crud',
        label: 'Hero Section',
        icon: Zap,
        badge: null,
        description: 'Update background image and hero text'
      },
      {
        path: '/admin/content/AboutUs-crud',
        label: 'About Us Page',
        icon: Users,
        badge: null,
        description: 'Edit company story and team info'
      },
      {
        path: '/admin/content/ContactUs-crud',
        label: 'Contact Us Page',
        icon: Users,
        badge: null,
        description: 'View customer messages'
      },
      {
        path: '/admin/content/service-crud',
        label: 'Services Page',
        icon: Wrench,
        badge: null,
        description: 'Manage services list and descriptions'
      },
      {
        path: '/admin/content/policy-crud',
        label: 'Policy Page',
        icon: Wrench,
        badge: null,
        description: 'Manage policy sections and Content'
      },
      {
        path: '/admin/content/Pricing-Crud',
        label: 'Pricing Section',
        icon: DollarSign,
        badge: null,
        description: 'Update pricing plans and features'
      },
      {
        path: '/admin/content/CTA-crud',
        label: 'CTA Section',
        icon: DollarSign,
        badge: null,
        description: 'Update call-to-action content'
      },

      {
        path: '/admin/content/testimonial-crud',
        label: 'Testimonials',
        icon: MessageSquare,
        badge: null,
        description: 'Manage customer reviews and ratings'
      },
      {
        path: '/admin/content/navbar',
        label: 'Navbar',
        icon: MessageSquare,
        badge: null,
        description: 'Manage navigation links for the website'
      },
      {
        path: '/admin/content/SidebarItem-Crud',
        label: 'sidebar menus',
        icon: MessageSquare,
        badge: null,
        description: 'manage sidebar menu items for dashboard'
      },
    ],
    blog: [
      {
        path: '/admin/content/blog',
        label: 'Blog Posts',
        icon: FileText,
        badge: null,
        description: 'Create and edit blog articles'
      },
      {
        path: '/admin/content/blog/categories',
        label: 'Blog Categories',
        icon: FileText,
        badge: null,
        description: 'Organize blog posts by categories'
      },
    ],
    media: [
      {
        path: '/admin/content/media',
        label: 'Media Library',
        icon: Image,
        badge: null,
        description: 'Upload and manage images'
      },
    ],
    navigation: [
      {
        path: '/admin/content/navigation',
        label: 'Site Navigation',
        icon: Navigation,
        badge: null,
        description: 'Manage menu items and links'
      },
    ],
    system: [
      { path: '/admin/users', label: 'User Management', icon: Users, badge: null },
      { path: '/admin/settings', label: 'System Settings', icon: Settings, badge: null },
    ]
  },


  'PROPERTY_MANAGER': {
    overview: [
      { path: '/property-manager', label: 'Dashboard', icon: LayoutDashboard },
      { path: '/property-manager/documents', label: 'Documents', icon: FolderOpen },
      { path: '/property-manager/dss/upload', label: 'eSign (DSS)', icon: PenTool },
    ],
    portfolio: [
      { path: '/property-manager/view-own-property', label: 'Properties', icon: Building2 },
      { path: '/property-manager/content/lease', label: 'Leases', icon: FileText },
      { path: '/property-manager/listings', label: 'Marketplace Listings', icon: Store },
    ],
    tenants: [
      { path: '/property-manager/content/tenants', label: 'My Tenants', icon: Users },
      { path: '/property-manager/directory', label: 'Directory', icon: Contact },
    ],
    operations: [
      { path: '/property-manager/maintenance/requests', label: 'Maintenance', icon: Wrench },
      { path: '/property-manager/content/utilities', label: 'Utility Ops', icon: Zap },
      { path: '/property-manager/content/utilities/allocations', label: 'Allocations', icon: PieChart },
    ],
    finance: [
      { path: '/property-manager/finance/invoices', label: 'Invoices', icon: FileInput },
      { path: '/property-manager/content/payments', label: 'Payments', icon: CreditCard },
      { path: '/property-manager/finance/ledger', label: 'Ledger', icon: Wallet },
      { path: '/property-manager/finance/journal', label: 'Journal Entries', icon: Book },
    ],
    system: [
      { path: '/property-manager/settings', label: 'Settings', icon: Settings },
      { path: '/property-manager/settings/integrations', label: 'Integrations', icon: Box },
      { path: '/property-manager/settings/roles', label: 'Role Management', icon: Shield },
      { path: '/property-manager/profile', label: 'Profile', icon: UserCircle },
    ],
  },

  TENANT: {
    main: [
      { path: '/tenant', label: 'Overview', icon: LayoutDashboard },
    ],
    lease: [
      { path: '/tenant/content/lease', label: 'View Lease Details', icon: Users },
      { path: '/tenant/renew-terminate', label: 'Renew / Terminate Request', icon: Users },
      { path: '/tenant/insurance-upload', label: 'Insurance Upload', icon: Users },
    ],
    payments: [
      { path: '/tenant/pay-rent', label: 'Pay Rent (Stripe / Zelle / ACH)', icon: Calculator },
      { path: '/tenant/payment-history', label: 'Payment History', icon: Calculator },
      { path: '/tenant/content/invoices', label: 'Upcoming Invoices', icon: Calculator },
    ],
    maintenance: [
      { path: '/tenant/submit-request', label: 'Submit Request', icon: Wrench },
      { path: '/tenant/track-progress', label: 'Track Progress', icon: Wrench },
      { path: '/tenant/past-requests', label: 'View Past Requests', icon: Wrench },
    ],
    utilities: [
      { path: '/tenant/content/utilities', label: 'My Utility Bills', icon: Zap },
      { path: '/tenant/content/utilities/bill-t001', label: 'Bill Details', icon: FileText },
    ],
    insurance: [
      { path: '/tenant/insurance-purchase', label: 'Purchase / Upload Policy', icon: Users },
      { path: '/tenant/insurance-renewal', label: 'Renewal Reminders', icon: Users },
      { path: '/tenant/insurance-claims', label: 'Claim Assistance', icon: Users },
    ],
    notifications: [
      { path: '/tenant/rent-reminders', label: 'Rent Reminders', icon: Zap },
      { path: '/tenant/maintenance-notifications', label: 'Maintenance Updates', icon: Zap },
      { path: '/tenant/lease-alerts', label: 'Lease Alerts', icon: Zap },
    ],
    profile: [
      { path: '/tenant/settings', label: 'Settings', icon: Settings },
      { path: '/dashboard/tenant/update-info', label: 'Update Info', icon: Settings },
      { path: '/dashboard/tenant/security', label: 'MFA / Password Change', icon: Settings },
    ],
  },

  VENDOR: {
    main: [
      { path: '/vendor', label: 'Overview', icon: Home, badge: null },
    ],
    workOrders: [
      { path: '/vendor/jobs', label: 'My Jobs', icon: ClipboardList, badge: '4' },
      { path: '/vendor/assigned', label: 'Assigned Requests', icon: FileText, badge: null },
      { path: '/vendor/progress', label: 'Update Progress', icon: FileText, badge: null },
      { path: '/vendor/reports', label: 'Submit Reports / Photos', icon: FileText, badge: null },
      { path: '/vendor/status', label: 'Status Tracking', icon: FileText, badge: null },
      { path: '/vendor/history', label: 'Maintenance History', icon: FileText, badge: null },
    ],
    invoices: [
      { path: '/vendor/invoices', label: 'Invoices', icon: DollarSign, badge: '2' },
      { path: '/vendor/generate', label: 'Generate Invoice', icon: FileText, badge: null },
      { path: '/vendor/payment-history', label: 'Payment History', icon: FileText, badge: null },
      { path: '/vendor/payment-updates', label: 'Payment Updates', icon: FileText, badge: null },
    ],
    analytics: [
      { path: '/vendor/analytics', label: 'Analytics by Property', icon: BarChart2, badge: null },
    ],
    communication: [
      { path: '/vendor/messages', label: 'Messages', icon: MessageSquare, badge: '1' },
      { path: '/vendor/notifications', label: 'Notifications', icon: Bell, badge: null },
    ],
    profile: [
      { path: '/vendor/profile', label: 'Business Info', icon: User, badge: null },
      { path: '/vendor/certifications', label: 'Certifications & Documents', icon: User, badge: null },
      { path: '/vendor/security', label: 'Security Settings', icon: User, badge: null },
    ]
  }
}
