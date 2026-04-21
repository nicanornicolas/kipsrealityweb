import { AccountType, PrismaClient, SidebarItemRole } from '@prisma/client';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import Stripe from 'stripe';

dotenv.config({ path: '.env.local' });

const prisma = new PrismaClient();

// 1. Fields that MUST be boolean (Convert 1/0 -> true/false)
const BOOLEAN_FIELDS = new Set([
    'isActive', 'isActive', 'is_active',
    'isFurnished', 'isFurnished', 'is_furnished',
    'accepted',
    'isSigned', 'isSigned', 'is_signed',
    'isOccupied', 'isOccupied', 'is_occupied',
    'isReversed', 'isReversed', 'is_reversed',
    'searchBar', 'searchBar', 'search_bar',
    'isVisible', 'isVisible', 'is_visible',
    'isAvailable', 'isAvailable', 'is_available',
    'isExternal', 'isExternal', 'is_external',
    'isTenantResponsible', 'isTenantResponsible', 'is_tenant_responsible',
    'isOptional', 'isOptional', 'is_optional',
    'hasSigned', 'hasSigned', 'has_signed',
    'hasRenewalOption', 'hasRenewalOption', 'has_renewal_option',
    'hasRentEscalation', 'hasRentEscalation', 'has_rent_escalation',
    'autoRenew', 'autoRenew', 'auto_renew',
    'consentMarketing', 'consentNotifications', 'consentTransactional',
    'tenantPaysElectric', 'tenantPaysInternet', 'tenantPaysTrash', 'tenantPaysWater',
    'consent'
]);

// 2. Explicit Key Remapping (Backup Key -> Prisma Client Expected Key)
// ✅ FIX: Mapping to CamelCase which Prisma Client expects
const FIELD_TRANSLATIONS: Record<string, Record<string, string>> = {
    'MaintenanceRequest': {
        'assigned_at': 'assignedAt',       
        'assigned_vendor_id': 'assignedVendorId',
        'organization_id': 'organizationId',
        'property_id': 'propertyId',
        'requested_by_id': 'requestedById',
        'unit_id': 'unitId'
    },
    'Lease': {
        'lease_status': 'leaseStatus',
        'application_id': 'applicationId',
        'tenant_id': 'tenantId',
        'property_id': 'propertyId',
        'unit_id': 'unitId',
        'end_date': 'endDate',
        'start_date': 'startDate',
        'rent_amount': 'rentAmount'
    },
    'LeaseAmendment': {
        'amendment_type': 'amendmentType',
        'lease_id': 'leaseId',
        'effective_date': 'effectiveDate'
    },
    'Property': {
        'listing_id': 'listingId',
        'manager_id': 'managerId',
        'organization_id': 'organizationId',
        'property_type_id': 'propertyTypeId',
        'location_id': 'locationId'
    },
    'User': {
        'email_verified': 'emailVerified',
        'password_hash': 'passwordHash',
        'first_name': 'firstName',
        'last_name': 'lastName',
        'avatar_url': 'avatarUrl',
        'last_login_at': 'lastLoginAt',
        'created_at': 'createdAt',
        'updated_at': 'updatedAt'
    }
};

const toCamelCase = (str: string) => {
    return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
};

async function seedNavbarItemsIfMissing() {
    const existingCount = await prisma.navbarItem.count();
    if (existingCount > 0) {
        console.log(`ℹ️ Navbar items already exist (${existingCount}). Skipping navbar seed.`);
        return;
    }

    console.log('🌱 Seeding default navbar items...');

    await prisma.navbarItem.createMany({
        data: [
            { name: 'Home', href: '/', order: 0, isVisible: true, isAvailable: true },
            { name: 'About', href: '/about', order: 10, isVisible: true, isAvailable: true },
            { name: 'Plans', href: '/plans', order: 20, isVisible: true, isAvailable: true },
            { name: 'Marketplace', href: '/marketplace', order: 30, isVisible: true, isAvailable: true },
            { name: 'Blog', href: '/blog', order: 40, isVisible: true, isAvailable: true },
            { name: 'Contact', href: '/contact', order: 50, isVisible: true, isAvailable: true },
        ],
        skipDuplicates: true,
    });

    console.log('✅ Default navbar items seeded.');
}

async function seedTestimonialsIfMissing() {
    const existingCount = await prisma.testimonial.count();
    if (existingCount > 0) {
        console.log(`ℹ️ Testimonials already exist (${existingCount}). Skipping testimonial seed.`);
        return;
    }

    console.log('🌱 Seeding default testimonials...');

    await prisma.testimonial.createMany({
        data: [
            {
                name: 'Sarah Johnson',
                role: 'Property Manager',
                image: '/lady.jpg',
                text: 'RentFlow360 has completely transformed how I manage my properties. The automation features save me hours every week!',
            },
            {
                name: 'Michael Chen',
                role: 'Real Estate Investor',
                image: '/man.jpeg',
                text: "The financial analytics are incredible. I now have complete visibility into my portfolio's performance.",
            },
            {
                name: 'Emily Rodriguez',
                role: 'Landlord',
                image: '/smile.jpeg',
                text: 'The tenant portal has dramatically improved communication with my tenants. Maintenance requests are now handled seamlessly.',
            },
        ],
    });

    console.log('✅ Default testimonials seeded.');
}

async function seedCmsBaselineIfMissing() {
  console.log('🌱 Seeding CMS baseline content...');

  const aboutSections = [
    {
      section: 'mission',
      description:
        'RentFlow360 helps property managers and landlords automate operations, tenant workflows, and finance reporting.',
    },
    {
      section: 'vision',
      description:
        'Build trusted, data-driven rental ecosystems that scale across regions without losing compliance and control.',
    },
  ];

  for (const section of aboutSections) {
    const existing = await prisma.aboutUs.findFirst({ where: { section: section.section } });
    if (!existing) {
      await prisma.aboutUs.create({ data: section });
    }
  }

  const heroPages = [
    {
      page: 'home',
      title: 'Property Operations, Unified',
      subtitle: 'Run listings, leases, finance, and payments in one platform.',
      description: 'Scale property management with real-time visibility and workflow automation.',
      buttonText: 'Get Started',
      buttonUrl: '/auth/register',
      gradient: 'from-emerald-600 to-sky-600',
      layout: 'split',
      searchBar: true,
    },
    {
      page: 'pricing',
      title: 'Plans That Grow With Your Portfolio',
      subtitle: 'Start lean, expand fast.',
      description: 'Choose the plan that matches your current property volume and team needs.',
      buttonText: 'View Plans',
      buttonUrl: '/plans',
      gradient: 'from-amber-500 to-orange-600',
      layout: 'centered',
      searchBar: false,
    },
  ];

  for (const hero of heroPages) {
    const existing = await prisma.heroSection.findFirst({ where: { page: hero.page } });
    if (existing) {
      await prisma.heroSection.update({
        where: { id: existing.id },
        data: {
          title: hero.title,
          subtitle: hero.subtitle,
          description: hero.description,
          buttonText: hero.buttonText,
          buttonUrl: hero.buttonUrl,
          gradient: hero.gradient,
          layout: hero.layout,
          searchBar: hero.searchBar,
          updatedAt: new Date(),
        },
      });
    } else {
      await prisma.heroSection.create({
        data: {
          ...hero,
          updatedAt: new Date(),
        },
      });
    }
  }

  const ctaPages = [
    {
      page: 'home',
      title: 'Ready to simplify your rental operations?',
      subtitle: 'Onboard your first property and activate your workflow in minutes.',
      buttonText: 'Create Account',
      buttonUrl: '/auth/register',
      gradient: 'from-slate-900 to-slate-700',
    },
    {
      page: 'dashboard',
      title: 'Need help optimizing your setup?',
      subtitle: 'Use guided onboarding checklists and recommended next actions.',
      buttonText: 'Open Setup Guide',
      buttonUrl: '/property-manager',
      gradient: 'from-sky-600 to-indigo-600',
    },
  ];

  for (const cta of ctaPages) {
    const existing = await prisma.cTA.findFirst({ where: { page: cta.page } });
    if (existing) {
      await prisma.cTA.update({
        where: { id: existing.id },
        data: {
          title: cta.title,
          subtitle: cta.subtitle,
          buttonText: cta.buttonText,
          buttonUrl: cta.buttonUrl,
          gradient: cta.gradient,
          updatedAt: new Date(),
        },
      });
    } else {
      await prisma.cTA.create({
        data: {
          ...cta,
          updatedAt: new Date(),
        },
      });
    }
  }

  const existingPolicy = await prisma.policy.findFirst({
    where: {
      title: 'Privacy Policy',
      companyName: 'RentFlow360',
    },
  });

  const policy = existingPolicy
    ? await prisma.policy.update({
        where: { id: existingPolicy.id },
        data: {
          contactEmail: 'support@rentflow360.com',
          privacyEmail: 'privacy@rentflow360.com',
          website: 'https://rentflow360.com',
          responseTime: '72 hours',
          inactiveAccountThreshold: '24 months',
          updatedAt: new Date(),
        },
      })
    : await prisma.policy.create({
        data: {
          title: 'Privacy Policy',
          companyName: 'RentFlow360',
          contactEmail: 'support@rentflow360.com',
          privacyEmail: 'privacy@rentflow360.com',
          website: 'https://rentflow360.com',
          mailingAddress: 'Nairobi, Kenya',
          responseTime: '72 hours',
          inactiveAccountThreshold: '24 months',
          updatedAt: new Date(),
        },
      });

  const policySections = [
    {
      key: 'introduction',
      title: 'Introduction',
      intro: 'Overview of what data we collect and why.',
      content: { summary: 'We process account and tenancy data to provide rental management services.' },
      order: 1,
    },
    {
      key: 'data-usage',
      title: 'How Data Is Used',
      intro: 'How RentFlow360 uses data across platform modules.',
      content: { summary: 'Data supports leasing, payments, reporting, maintenance, and compliance.' },
      order: 2,
    },
    {
      key: 'rights',
      title: 'User Rights',
      intro: 'Your controls over personal data.',
      content: { summary: 'Users may request data access, correction, and deletion where applicable.' },
      order: 3,
    },
  ];

  for (const section of policySections) {
    const existing = await prisma.section.findFirst({
      where: {
        policyId: policy.id,
        key: section.key,
      },
    });

    if (existing) {
      await prisma.section.update({
        where: { id: existing.id },
        data: {
          title: section.title,
          intro: section.intro,
          content: section.content,
          order: section.order,
          updatedAt: new Date(),
        },
      });
    } else {
      await prisma.section.create({
        data: {
          policyId: policy.id,
          key: section.key,
          title: section.title,
          intro: section.intro,
          content: section.content,
          order: section.order,
          updatedAt: new Date(),
        },
      });
    }
  }

  const sidebarDefaults = [
    {
      label: 'Dashboard',
      path: '/dashboard',
      section: 'General',
      order: 10,
      icon: 'LayoutDashboard',
      role: SidebarItemRole.ALL,
    },
    {
      label: 'Properties',
      path: '/property-manager/view-own-property',
      section: 'Management',
      order: 20,
      icon: 'Building2',
      role: SidebarItemRole.PROPERTY_MANAGER,
    },
    {
      label: 'Leases',
      path: '/property-manager/lease',
      section: 'Management',
      order: 30,
      icon: 'FileSignature',
      role: SidebarItemRole.PROPERTY_MANAGER,
    },
    {
      label: 'Invoices',
      path: '/tenant/invoices',
      section: 'Finance',
      order: 40,
      icon: 'Receipt',
      role: SidebarItemRole.TENANT,
    },
    {
      label: 'Maintenance',
      path: '/tenant/maintenance',
      section: 'Support',
      order: 50,
      icon: 'Wrench',
      role: SidebarItemRole.TENANT,
    },
    {
      label: 'Admin Console',
      path: '/admin',
      section: 'Administration',
      order: 60,
      icon: 'ShieldCheck',
      role: SidebarItemRole.SYSTEM_ADMIN,
    },
  ];

  for (const item of sidebarDefaults) {
    const existing = await prisma.sidebarItem.findFirst({
      where: {
        role: item.role,
        path: item.path,
      },
    });

    if (existing) {
      await prisma.sidebarItem.update({
        where: { id: existing.id },
        data: {
          label: item.label,
          section: item.section,
          order: item.order,
          icon: item.icon,
          isActive: true,
          isExternal: false,
        },
      });
    } else {
      await prisma.sidebarItem.create({
        data: {
          ...item,
          isActive: true,
          isExternal: false,
        },
      });
    }
  }

  console.log('✅ CMS baseline content seeded.');
}

async function seedMarketplaceCategories() {
  console.log('🌱 Seeding marketplace categories...');

  const categories = ['Property', 'Vehicle', 'Service'];

  for (const name of categories) {
    await prisma.categoryMarketplace.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }

  console.log('✅ Marketplace categories seeded.');
}

async function seedListingStatuses() {
  console.log('🌱 Seeding listing statuses...');

  const statuses = [
    { name: 'PRIVATE', description: 'Unit exists but not listed' },
    { name: 'ACTIVE', description: 'Listed and visible in marketplace' },
    { name: 'SUSPENDED', description: 'Temporarily hidden from marketplace' },
    { name: 'PENDING', description: 'Listing created but not yet active' },
    { name: 'EXPIRED', description: 'Listing has expired' },
    { name: 'MAINTENANCE', description: 'Temporarily removed for maintenance' },
    { name: 'COMING_SOON', description: 'Listed but not yet available' },
  ];

  for (const status of statuses) {
    await prisma.listingStatus.upsert({
      where: { name: status.name },
      update: { description: status.description },
      create: status,
    });
  }

  console.log('✅ Listing statuses seeded.');
}

async function seedActionTypes() {
  console.log('🌱 Seeding admin action types...');

  const actionTypes = [
    { name: 'LIST', description: 'Listing created or activated' },
    { name: 'UNLIST', description: 'Listing removed from marketplace' },
    { name: 'SUSPEND', description: 'Listing temporarily suspended' },
    { name: 'ACTIVATE', description: 'Listing re-activated by admin' },
    { name: 'MAINTENANCE_START', description: 'Listing marked as in maintenance' },
    { name: 'MAINTENANCE_END', description: 'Listing maintenance completed' },
  ];

  for (const item of actionTypes) {
    await prisma.actionType.upsert({
      where: { name: item.name },
      update: { description: item.description },
      create: item,
    });
  }

  console.log('✅ Admin action types seeded.');
}

async function seedServiceCatalog() {
  console.log('🌱 Seeding service catalog...');

  const categories = [
    { name: 'Maintenance', tagline: 'Property repairs and maintenance', color: '#1F6FEB' },
    { name: 'Operations', tagline: 'Operational support services', color: '#0E9F6E' },
    { name: 'Legal', tagline: 'Compliance and legal services', color: '#D97706' },
  ];

  for (const category of categories) {
    const existing = await prisma.serviceCategory.findFirst({
      where: { name: category.name },
      select: { id: true },
    });

    if (!existing) {
      await prisma.serviceCategory.create({ data: category });
    }
  }

  const serviceTypes = [
    { name: 'PROPERTY', description: 'Property related marketplace services' },
    { name: 'VEHICLE', description: 'Vehicle listing and related services' },
    { name: 'SERVICE', description: 'General service marketplace entries' },
  ];

  for (const serviceType of serviceTypes) {
    await prisma.serviceType.upsert({
      where: { name: serviceType.name },
      update: { description: serviceType.description },
      create: serviceType,
    });
  }

  console.log('✅ Service catalog seeded.');
}

async function seedPlansIfMissing() {
  console.log('🌱 Seeding subscription plans...');

  const plans = [
    {
      name: 'BASIC',
      badge: 'Starter',
      monthlyPrice: 0,
      yearlyPrice: 0,
      description: 'For individual landlords getting started',
      gradient: 'from-slate-500 to-slate-700',
      trialDays: 0,
      signingFee: 0,
    },
    {
      name: 'BUSINESS',
      badge: 'Popular',
      monthlyPrice: 49,
      yearlyPrice: 490,
      description: 'For growing property management teams',
      gradient: 'from-emerald-500 to-teal-600',
      trialDays: 14,
      signingFee: 9.99,
    },
    {
      name: 'ENTERPRISE',
      badge: 'Scale',
      monthlyPrice: 149,
      yearlyPrice: 1490,
      description: 'For enterprise portfolios and advanced automation',
      gradient: 'from-amber-500 to-orange-600',
      trialDays: 30,
      signingFee: 9.99,
    },
  ];

  for (const plan of plans) {
    const existing = await prisma.plan.findFirst({ where: { name: plan.name } });

    if (existing) {
      await prisma.plan.update({
        where: { id: existing.id },
        data: {
          badge: plan.badge,
          monthlyPrice: plan.monthlyPrice,
          yearlyPrice: plan.yearlyPrice,
          description: plan.description,
          gradient: plan.gradient,
          trialDays: plan.trialDays,
          signingFee: plan.signingFee,
        },
      });
    } else {
      await prisma.plan.create({ data: plan });
    }
  }

  console.log('✅ Subscription plans seeded.');
}

async function seedChartOfAccounts() {
  console.log('🌱 Seeding chart of accounts per organization...');

  const standardCoa = [
    { code: '1000', name: 'Cash - Operating Account', type: AccountType.ASSET },
    { code: '1100', name: 'Accounts Receivable', type: AccountType.ASSET },
    { code: '1200', name: 'Security Deposit Bank Account', type: AccountType.ASSET },
    { code: '2100', name: 'Tenant Security Deposits Liability', type: AccountType.LIABILITY },
    { code: '2200', name: 'Accounts Payable', type: AccountType.LIABILITY },
    { code: '2300', name: 'Prepaid Rent (Unearned Income)', type: AccountType.LIABILITY },
    { code: '3000', name: "Owner's Capital", type: AccountType.EQUITY },
    { code: '4000', name: 'Rental Income', type: AccountType.INCOME },
    { code: '4100', name: 'Utility Reimbursement', type: AccountType.INCOME },
    { code: '4200', name: 'Late Fee Income', type: AccountType.INCOME },
    { code: '4300', name: 'Maintenance Reimbursement', type: AccountType.INCOME },
    { code: '5100', name: 'Maintenance Expense', type: AccountType.EXPENSE },
    { code: '5200', name: 'Utilities Expense', type: AccountType.EXPENSE },
    { code: '5300', name: 'Property Management Fees', type: AccountType.EXPENSE },
  ];

  const orgs = await prisma.organization.findMany({
    include: { financialEntities: true },
  });

  for (const org of orgs) {
    let entityId = org.financialEntities[0]?.id;

    if (!entityId) {
      const createdEntity = await prisma.financialEntity.create({
        data: {
          name: org.name,
          organizationId: org.id,
        },
      });
      entityId = createdEntity.id;
    }

    for (const account of standardCoa) {
      await prisma.account.upsert({
        where: {
          entityId_code: {
            entityId,
            code: account.code,
          },
        },
        update: {},
        create: {
          entityId,
          code: account.code,
          name: account.name,
          type: account.type,
          isSystem: true,
        },
      });
    }
  }

  console.log('✅ Chart of accounts seeded.');
}

// Feature Keys for Usage Tracking
const FEATURE_KEYS = {
  PROPERTY_CREATE: 'property.create',
  UNIT_CREATE: 'unit.create',
  DSS_DOCUMENTS: 'dss.documents.monthly',
  TEAM_MEMBERS: 'team.members.max',
  LEASE_ACTIVE: 'lease.active.max',
};

// Plan-specific limits (0 = unlimited)
const PLAN_LIMITS: Record<string, Record<string, number>> = {
  BASIC: {
    'property.create': 3,
    'unit.create': 10,
    'dss.documents.monthly': 5,
    'team.members.max': 1,
    'lease.active.max': 10,
  },
  BUSINESS: {
    'property.create': 25,
    'unit.create': 100,
    'dss.documents.monthly': 50,
    'team.members.max': 10,
    'lease.active.max': 100,
  },
  ENTERPRISE: {
    'property.create': 0,
    'unit.create': 0,
    'dss.documents.monthly': 0,
    'team.members.max': 0,
    'lease.active.max': 0,
  },
};

async function seedMonetizationFeatures() {
  console.log('🌱 Seeding monetization features and limits...');

  // Create Features
  const featureDescriptions: Record<string, string> = {
    [FEATURE_KEYS.PROPERTY_CREATE]: 'Maximum number of properties that can be created',
    [FEATURE_KEYS.UNIT_CREATE]: 'Maximum number of units that can be created',
    [FEATURE_KEYS.DSS_DOCUMENTS]: 'Maximum number of DSS documents per month',
    [FEATURE_KEYS.TEAM_MEMBERS]: 'Maximum number of team members',
    [FEATURE_KEYS.LEASE_ACTIVE]: 'Maximum number of active leases',
  };

  for (const [key, description] of Object.entries(featureDescriptions)) {
    await prisma.feature.upsert({
      where: { key },
      update: {},
      create: {
        key,
        title: key.split('.').pop()?.toUpperCase() || key,
        description,
        category: key.split('.')[0].toUpperCase(),
      },
    });
  }

  // Create FeatureLimits for each plan
  const plans = await prisma.plan.findMany();

  for (const plan of plans) {
    const limits = PLAN_LIMITS[plan.name.toUpperCase()];
    if (!limits) continue;

    for (const [featureKey, limit] of Object.entries(limits)) {
      const feature = await prisma.feature.findUnique({ where: { key: featureKey } });
      if (!feature) continue;

      await prisma.featureLimit.upsert({
        where: {
          featureId_planId: {
            featureId: feature.id,
            planId: plan.id,
          },
        },
        update: { limit },
        create: {
          featureId: feature.id,
          planId: plan.id,
          limit,
          period: 'monthly',
        },
      });
    }
  }

  console.log('✅ Monetization features and limits seeded.');
}

async function seedStripePriceIds() {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey) {
    console.log('⚠️ STRIPE_SECRET_KEY not set. Skipping Stripe price ID seeding.');
    return;
  }

  const stripe = new Stripe(stripeSecretKey, {
    apiVersion: '2026-02-25.clover',
  });

  const plansToSeed = [
    { name: 'BUSINESS', amount: 4900, currency: 'usd' }, // $49/month
    { name: 'ENTERPRISE', amount: 14900, currency: 'usd' }, // $149/month
  ];

  for (const planConfig of plansToSeed) {
    const plan = await prisma.plan.findFirst({ where: { name: planConfig.name } });
    if (!plan || plan.stripePriceIdMonthly) continue;

    // Create Stripe Product & Price
    const product = await stripe.products.create({
      name: `RentFlow360 ${planConfig.name}`,
      metadata: { planId: plan.id.toString() },
    });

    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: planConfig.amount,
      currency: planConfig.currency,
      recurring: { interval: 'month' },
    });

    await prisma.plan.update({
      where: { id: plan.id },
      data: { stripePriceIdMonthly: price.id },
    });

    console.log(`✅ Created Stripe price ${price.id} for ${planConfig.name}`);
  }
}

async function main() {
    // Run this seed when setting up a new database or environment.
    // Uses upsert to prevent duplicates - safe to run multiple times.
  await seedMarketplaceCategories();
  await seedListingStatuses();
  await seedActionTypes();
  await seedServiceCatalog();
  await seedPlansIfMissing();

    const propertyTypes = [
        { id: "1", name: "House", description: "Single family home" },
        { id: "2", name: "Apartment", description: "Apartment unit" },
        { id: "3", name: "condominium (Condos)", description: "Condominium units" },
        { id: "4", name: "Land", description: "Vacant land or plots" },
        { id: "5", name: "Townhouse", description: "Townhouse or row house" },
    ]

    for (const type of propertyTypes) {
        await prisma.propertyType.upsert({
            where: { id: type.id },
            update: {},
            create: type,
        });
    }

    const backupDir = path.join(process.cwd(), 'backup');
    const hasBackupDir = fs.existsSync(backupDir);

    try {
        if (hasBackupDir) {
            await prisma.$executeRawUnsafe('SET FOREIGN_KEY_CHECKS=0;');

            const PRIORITY = ['Organization', 'User', 'Property', 'Unit', 'Lease'];

            const files = fs.readdirSync(backupDir).filter(f => f.endsWith('.json')).sort((a, b) => {
                const modelA = a.replace('.json', '');
                const modelB = b.replace('.json', '');
                const idxA = PRIORITY.indexOf(modelA);
                const idxB = PRIORITY.indexOf(modelB);
                if (idxA > -1 && idxB > -1) return idxA - idxB;
                if (idxA > -1) return -1;
                if (idxB > -1) return 1;
                return 0;
            });

            const processedModels = new Set<string>();

            for (const file of files) {
                const rawModelName = file.replace('.json', '');
                let clientKey = rawModelName;

            // Map common plural/casing issues
            if (clientKey === 'vendors') clientKey = 'vendor';
            if (clientKey === 'services') clientKey = 'service';
            if (clientKey === 'categories') clientKey = 'serviceCategory';
            if (clientKey === 'invoice') clientKey = 'invoice';
            if (clientKey === 'payment') clientKey = 'payment';
            if (clientKey === 'receipt') clientKey = 'receipt';
            if (clientKey === 'utility') clientKey = 'utility';
            if (clientKey === 'lease_utility') clientKey = 'leaseUtility';
            if (clientKey === 'utility_reading') clientKey = 'utilityReading';
            if (clientKey === 'payment_reversal') clientKey = 'paymentReversal';
            if (clientKey === 'Tenantapplication') clientKey = 'tenantApplication';
            if (clientKey === 'PropertyImage') clientKey = 'propertyImage';

                clientKey = clientKey.charAt(0).toLowerCase() + clientKey.slice(1);

                if (processedModels.has(clientKey)) continue;
                processedModels.add(clientKey);

            // @ts-ignore
            if (!prisma[clientKey]) {
                const pascalKey = rawModelName.charAt(0).toUpperCase() + rawModelName.slice(1);
                // @ts-ignore
                if (prisma[pascalKey]) clientKey = pascalKey;
                else {
                    continue;
                }
            }

                const filePath = path.join(backupDir, file);
                const rawData = JSON.parse(fs.readFileSync(filePath, 'utf-8'), (key, value) => {
                    if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T/.test(value)) return new Date(value);
                    return value;
                });

                if (!Array.isArray(rawData) || rawData.length === 0) continue;

                const normalizedData = rawData.map(item => {
                    const newItem: any = {};
                    for (const key in item) {
                        let value = item[key];
                        let newKey = key;

                        // 1. Apply Manual Translation (Backup Key -> Client Key)
                        if (FIELD_TRANSLATIONS[rawModelName] && FIELD_TRANSLATIONS[rawModelName][key]) {
                            newKey = FIELD_TRANSLATIONS[rawModelName][key];
                        }
                        // 2. Auto-convert snake_case -> camelCase
                        else if (key.includes('_')) {
                            newKey = toCamelCase(key);
                        }

                        // 3. Boolean Conversion
                        // Check against the *original* key or the *new* key
                        if ((BOOLEAN_FIELDS.has(key) || BOOLEAN_FIELDS.has(newKey)) && (value === 0 || value === 1)) {
                            value = value === 1;
                        }

                        newItem[newKey] = value;
                    }
                    return newItem;
                });

                // 4. Safety Filter: Remove rows with null required FKs
                const cleanData = normalizedData.filter(item => {
                    if (clientKey === 'property' && !item.organizationId) return false;
                    if (clientKey === 'user' && !item.email) return false;
                    return true;
                });


            try {
                // @ts-ignore
                await prisma[clientKey].createMany({
                    data: cleanData,
                    skipDuplicates: true
                });
            } catch (err: any) {
              console.warn(`⚠️ Skipped ${clientKey} createMany due to error:`, err?.message || err);
            }
        }
        }

        // Always ensure navbar items exist for the website top nav
        await seedNavbarItemsIfMissing();

        // Ensure the marketing testimonials section has content
        await seedTestimonialsIfMissing();

        // Ensure CMS baseline content exists for marketing and dashboard modules
        await seedCmsBaselineIfMissing();

        // Seed Features and FeatureLimits for B2B Monetization
        await seedMonetizationFeatures();

        // Seed financial chart of accounts for existing organizations
        await seedChartOfAccounts();

        // Seed Stripe Price IDs for Plans
        await seedStripePriceIds();
    } catch (e) {
      console.error('❌ Seed execution failed:', e);
    } finally {
        if (hasBackupDir) {
            await prisma.$executeRawUnsafe('SET FOREIGN_KEY_CHECKS=1;');
        }
        await prisma.$disconnect();
    }
}

main();
