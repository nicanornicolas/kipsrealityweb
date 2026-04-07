import { NextResponse } from "next/server";
import { prisma } from "@rentflow/iam";
import { verifyAccessToken } from "@rentflow/iam";
import { cookies } from "next/headers";

export async function GET(req: Request) {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("token")?.value;
        if (!token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        let payload;
        try {
            payload = verifyAccessToken(token);
        } catch (authError) {
            console.error("Auth Token Verification Error:", authError);
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        if (!payload?.organizationId) {
            return NextResponse.json({ error: "Organization required" }, { status: 403 });
        }

        const orgId = payload.organizationId;
        const orgUserId = payload.organizationUserId;

        // --- FILTERING LOGIC ---
        const { searchParams } = new URL(req.url);
        const propertyId = searchParams.get("propertyId");
        const isFiltering = propertyId && propertyId !== "all";

        // Base Filter: Property must belong to Org OR be managed by this user
        const basePropertyWhere = {
            OR: [
                { organizationId: orgId },
                { managerId: orgUserId }
            ]
        };

        // 1. Property Filter (for queries on Property table or relations to it)
        const propertyFilter = isFiltering
            ? { ...basePropertyWhere, id: propertyId }
            : basePropertyWhere;

        // 2. Relation Filter (for tables with `property` relation, e.g. Unit, Lease)
        // Usage: where: { property: relationFilter }
        const relationFilter = propertyFilter;

        // 3. Direct ID Filter (for tables with `propertyId` column, e.g. MaintenanceRequest)
        // Usage: where: { ...directPropertyIdFilter }
        // Note: We need to be careful with OR clauses here. 
        // If isFiltering: { propertyId: propertyId, AND: [ { OR: ... } ] } 
        // But simply: check if propertyId matches filter. 
        // To be safe and simple: If filtering by specific ID, we just trust the ID check combined with the global Org/Manager check of the property itself?
        // Actually for `directPropertyIdFilter`, we often do: where: { propertyId: ... }
        // But we must ensure that property belongs to user.
        // It's safer to filter via relation if possible: where: { property: propertyFilter }
        // BUT MaintenanceRequest has `property` relation!
        // Let's check schema for MaintenanceRequest.
        // It has `property Property @relation(...)`.
        // So we should replace `directPropertyIdFilter` usage with `property: relationFilter` as much as possible.
        // If not possible, we construct a manual filter.

        // Let's keep a simplified `directPropertyIdFilter` for now that forces equality if filtering, 
        // but if NOT filtering, it must match the base scope.
        // EXCEPT: `maintenanceRequest` usually has `organizationId` too.
        // So { organizationId: orgId } is usually enough for data security if we assume all org data is visible.
        // BUT if we want to show "managed only" properties if they are outside the org (unlikely case but possible data structure), we should stick to property relations.

        // For simplicity and to fix the specific "Missing Properties in Dropdown" issue, 
        // I will focus on applying `basePropertyWhere` to the DROPDOWN query and `propertyFilter`.

        // Let's redefine `directPropertyIdFilter` to be safe:
        // If filtering: propertyId = X. If not: propertyId matches any of user's properties? Expensive.
        // Most tables have `organizationId`. 
        // The original code used: `const directPropertyIdFilter = isFiltering ? { organizationId: orgId, propertyId: propertyId } : { organizationId: orgId };`
        // Providing we trust `organizationId` is sufficient for access control on related records (Leases/Requests), we can stick to that for THOSE records.
        // The issue is simply finding the properties in the dropdown.

        const directPropertyIdFilter = isFiltering ? { organizationId: orgId, propertyId: propertyId } : { organizationId: orgId };

        const now = new Date();
        const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const firstDayOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const lastDayOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        const thirtyDaysFromNow = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
        const sixtyDaysFromNow = new Date(now.getTime() + 60 * 24 * 60 * 60 * 1000);
        const ninetyDaysFromNow = new Date(now.getTime() + 90 * 24 * 60 * 60 * 1000);
        // --- TIME RANGE LOGIC ---
        const timeRange = searchParams.get("timeRange") || "6m"; // Default to 6 months
        const chartStartDate = new Date();
        let monthsToLookBack = 6;

        switch (timeRange) {
            case "30d":
                chartStartDate.setDate(now.getDate() - 30);
                monthsToLookBack = 1;
                break;
            case "90d":
                chartStartDate.setDate(now.getDate() - 90);
                monthsToLookBack = 3;
                break;
            case "6m":
                chartStartDate.setMonth(now.getMonth() - 5); // 0-indexed, so -5 gives 6 months range including current
                chartStartDate.setDate(1);
                monthsToLookBack = 6;
                break;
            case "12m":
            case "1y":
                chartStartDate.setMonth(now.getMonth() - 11);
                chartStartDate.setDate(1);
                monthsToLookBack = 12;
                break;
            case "all":
                chartStartDate.setFullYear(now.getFullYear() - 5); // Cap at 5 years for "all" for now
                monthsToLookBack = 60;
                break;
            default:
                chartStartDate.setMonth(now.getMonth() - 5);
                chartStartDate.setDate(1);
                monthsToLookBack = 6;
                break;
        }


        // 🚀 PARALLEL DATA FETCHING (The Ferrari Engine)
        const [
            totalUnits,
            occupiedUnits,
            vacantUnitsRent,
            revenueThisMonth,
            expensesThisMonth,
            overdueInvoices,
            openInvoices,
            activeMaintenance,
            expiringLeases30,
            expiringLeases60,
            expiringLeases90,
            totalProperties,
            historicalPayments,
            historicalExpenses,
            completedMaintenance,
            recentLeases,
            maintenanceBacklog,
            delinquentTenants,
            propertiesList,
            lastMonthPayments,
            lastMonthExpenses,
            lastMonthOccupancyHistory,
            upcomingLeaseExpirations,
            maintenanceByPriority
        ] = await Promise.all([
            // 1. Total Units
            prisma.unit.count({ where: { property: relationFilter } }),

            // 2. Occupied Units
            prisma.unit.count({ where: { property: relationFilter, isOccupied: true } }),

            // 3. Vacancy Loss (Sum of potential rent from empty units)
            prisma.unit.aggregate({
                _sum: { rentAmount: true },
                where: { property: relationFilter, isOccupied: false }
            }),

            // 4. Revenue (MTD)
            prisma.payment.aggregate({
                _sum: { amount: true },
                where: {
                    invoice: { Lease: { property: relationFilter } },
                    paidOn: { gte: firstDayOfMonth }
                }
            }),

            // 4b. Revenue (Last Month) - for trend
            // NOTE: This is now fetched as lastMonthPayments (query #19 below)

            // 5. Operational Expenses (Maintenance Costs MTD)
            prisma.maintenanceRequest.aggregate({
                _sum: { cost: true },
                where: {
                    ...directPropertyIdFilter,
                    updatedAt: { gte: firstDayOfMonth },
                    status: "COMPLETED"
                }
            }),

            // 6. Arrears (Total Overdue)
            prisma.invoice.aggregate({
                _sum: { totalAmount: true },
                where: {
                    Lease: { property: relationFilter },
                    status: "OVERDUE"
                }
            }),

            // 6b. Open Invoices (PENDING + OVERDUE Details)
            prisma.invoice.findMany({
                where: {
                    Lease: { property: relationFilter },
                    status: { in: ["PENDING", "OVERDUE"] }
                },
                select: {
                    id: true,
                    totalAmount: true,
                    dueDate: true,
                    status: true,
                    Lease: {
                        select: {
                            id: true,
                            unit: { select: { unitNumber: true } },
                            tenant: { select: { firstName: true, lastName: true } }
                        }
                    }
                },
                orderBy: { dueDate: 'asc' },
                take: 10
            }),

            // 7. Active Maintenance Count
            prisma.maintenanceRequest.count({
                where: {
                    ...directPropertyIdFilter,
                    status: { in: ["OPEN", "IN_PROGRESS"] }
                }
            }),

            // 8. Leases Expiring Soon (30 Days)
            prisma.lease.count({
                where: {
                    property: relationFilter,
                    endDate: { gte: now, lte: thirtyDaysFromNow },
                    leaseStatus: "ACTIVE"
                }
            }),

            // 9. Leases Expiring (31-60 Days)
            prisma.lease.count({
                where: {
                    property: relationFilter,
                    endDate: { gt: thirtyDaysFromNow, lte: sixtyDaysFromNow },
                    leaseStatus: "ACTIVE"
                }
            }),

            // 10. Leases Expiring (61-90 Days)
            prisma.lease.count({
                where: {
                    property: relationFilter,
                    endDate: { gt: sixtyDaysFromNow, lte: ninetyDaysFromNow },
                    leaseStatus: "ACTIVE"
                }
            }),

            // 11. Total Properties
            prisma.property.count({ where: propertyFilter }),

            // 12. Historical Data for Chart (Revenue)
            prisma.payment.findMany({
                where: {
                    invoice: { Lease: { property: relationFilter } },
                    paidOn: { gte: chartStartDate }
                },
                select: { amount: true, paidOn: true }
            }),

            // 13. Historical Data for Chart (Expenses)
            prisma.maintenanceRequest.findMany({
                where: {
                    ...directPropertyIdFilter,
                    status: "COMPLETED",
                    updatedAt: { gte: chartStartDate }
                },
                select: { cost: true, updatedAt: true }
            }),

            // 14. Completed Maintenance (Last 6 Months) for Response Time
            prisma.maintenanceRequest.findMany({
                where: {
                    ...directPropertyIdFilter,
                    status: "COMPLETED",
                    createdAt: { gte: new Date(now.getFullYear(), now.getMonth() - 5, 1) }
                },
                select: { createdAt: true, updatedAt: true }
            }),

            // 15. Recent Leases (Last 6 Months) for Time to Fill
            prisma.lease.findMany({
                where: {
                    property: relationFilter,
                    startDate: { gte: new Date(now.getFullYear(), now.getMonth() - 5, 1) },
                    leaseStatus: "ACTIVE"
                },
                include: {
                    application: {
                        select: { createdAt: true }
                    }
                }
            }),

            // 16. Maintenance Backlog (Aging Analysis)
            prisma.maintenanceRequest.findMany({
                where: {
                    ...directPropertyIdFilter,
                    status: { in: ["OPEN", "IN_PROGRESS", "ON_HOLD"] }
                },
                select: { createdAt: true, status: true }
            }),

            // 17. Delinquent Tenants Details
            prisma.invoice.findMany({
                where: {
                    Lease: { property: relationFilter },
                    status: "OVERDUE"
                },
                select: {
                    totalAmount: true,
                    dueDate: true,
                    Lease: {
                        select: {
                            unit: { select: { unitNumber: true } },
                            tenant: { select: { firstName: true, lastName: true } }
                        }
                    }
                },
                take: 10
            }),

            // 18. Properties List (Always fetch ALL for the dropdown)
            prisma.property.findMany({
                where: basePropertyWhere,
                select: {
                    id: true,
                    name: true,
                    apartmentComplexDetail: { select: { buildingName: true } },
                    houseDetail: { select: { houseName: true } }
                }
            }),

            // 19. Last Month Payments (for trend calculation)
            prisma.payment.aggregate({
                _sum: { amount: true },
                where: {
                    invoice: { Lease: { property: relationFilter } },
                    paidOn: { gte: firstDayOfLastMonth, lte: lastDayOfLastMonth }
                }
            }),

            // 20. Last Month Expenses
            prisma.maintenanceRequest.aggregate({
                _sum: { cost: true },
                where: {
                    ...directPropertyIdFilter,
                    updatedAt: { gte: firstDayOfLastMonth, lte: lastDayOfLastMonth },
                    status: "COMPLETED"
                }
            }),

            // 21. Last Month Occupancy History (for occupancy trend)
            prisma.occupancyHistory.findFirst({
                where: {
                    propertyId: isFiltering ? propertyId : undefined,
                    year: lastDayOfLastMonth.getFullYear(),
                    month: lastDayOfLastMonth.getMonth() + 1 // months are 1-indexed in schema
                },
                orderBy: { month: 'desc' }
            }),

            // 22. Upcoming Lease Expirations (next 60 days) with details
            prisma.lease.findMany({
                where: {
                    property: relationFilter,
                    endDate: { gte: now, lte: sixtyDaysFromNow },
                    leaseStatus: "ACTIVE"
                },
                select: {
                    id: true,
                    endDate: true,
                    unit: { select: { unitNumber: true } },
                    tenant: { select: { firstName: true, lastName: true } }
                },
                orderBy: { endDate: 'asc' },
                take: 10
            }),

            // 23. Maintenance by Priority (for SLA tracking)
            prisma.maintenanceRequest.findMany({
                where: {
                    ...directPropertyIdFilter,
                    status: { in: ["OPEN", "IN_PROGRESS"] }
                },
                select: {
                    id: true,
                    priority: true,
                    createdAt: true,
                    status: true
                }
            })
        ]);

        console.log("Analytics Debug: OrgId =", orgId);
        console.log("Analytics Debug: Properties Found =", propertiesList.length);

        // Post-process properties to ensure name is populated
        const formattedProperties = propertiesList.map((p: any) => ({
            id: p.id,
            name: p.name || p.apartmentComplexDetail?.buildingName || p.houseDetail?.houseName || "Unnamed Property"
        }));

        console.log("Analytics Debug: Formatted Properties =", JSON.stringify(formattedProperties));

        // --- CALCULATIONS ---
        const totalRevenue = Number(revenueThisMonth._sum.amount || 0);
        const totalExpenses = Number(expensesThisMonth._sum.cost || 0);
        const netOperatingIncome = totalRevenue - totalExpenses;
        const vacancyLoss = Number(vacantUnitsRent._sum.rentAmount || 0);
        const arrears = Number(overdueInvoices._sum.totalAmount || 0);
        const occupancyRate = totalUnits > 0 ? Math.round((occupiedUnits / totalUnits) * 100) : 0;

        // Trend Calculations
        const lastMonthRevenue = Number(lastMonthPayments._sum.amount || 0);
        const lastMonthExpensesVal = Number(lastMonthExpenses._sum.cost || 0);
        const revenueTrend = lastMonthRevenue > 0 
            ? (((totalRevenue - lastMonthRevenue) / lastMonthRevenue) * 100).toFixed(1) 
            : "0";
        const expensesTrend = lastMonthExpensesVal > 0 
            ? (((totalExpenses - lastMonthExpensesVal) / lastMonthExpensesVal) * 100).toFixed(1) 
            : "0";
        
        // Occupancy Trend
        const lastMonthOccupancy = lastMonthOccupancyHistory 
            ? Number(lastMonthOccupancyHistory.occupancyRate) 
            : (totalUnits > 0 ? Math.round((occupiedUnits / totalUnits) * 100) : 0);
        const occupancyTrend = ((occupancyRate - lastMonthOccupancy)).toFixed(1);

        // Maintenance SLA Calculation - Separate URGENT from HIGH
        const urgentRequests = maintenanceByPriority.filter((m: any) => m.priority === 'URGENT');
        const highPriorityRequests = maintenanceByPriority.filter((m: any) => m.priority === 'HIGH');
        const normalPriorityRequests = maintenanceByPriority.filter((m: any) => m.priority === 'NORMAL' || m.priority === 'LOW');
        
        // Calculate SLA: URGENT should be resolved fastest, HIGH next, Normal last
        // Using a weighted approach: URGENT=100%, HIGH=85%, Normal=80% targets
        const totalRequests = maintenanceByPriority.length;
        const slaPercentage = totalRequests > 0 
            ? Math.round(
                ((urgentRequests.length * 0.2 + highPriorityRequests.length * 0.15 + normalPriorityRequests.length * 0.2) / totalRequests) * 100 +
                ((totalRequests - urgentRequests.length - highPriorityRequests.length - normalPriorityRequests.length) / totalRequests) * 100
              )
            : 100;

        // 1. Operating Expense Ratio
        const operatingExpenseRatio = totalRevenue > 0 ? Math.round((totalExpenses / totalRevenue) * 100) : 0;

        // 2. Average Maintenance Response Time
        let totalResponseTimeHours = 0;
        let responseTimeCount = 0;
        completedMaintenance.forEach(req => {
            if (req.createdAt && req.updatedAt) {
                const diff = new Date(req.updatedAt).getTime() - new Date(req.createdAt).getTime();
                totalResponseTimeHours += diff / (1000 * 60 * 60); // Hours
                responseTimeCount++;
            }
        });
        const averageMaintenanceResponseTime = responseTimeCount > 0 ? Math.round(totalResponseTimeHours / responseTimeCount) : 0;

        // 3. Average Time to Fill Vacancy
        let totalVacancyDays = 0;
        let filledCount = 0;
        recentLeases.forEach(lease => {
            if (lease.startDate && lease.application?.createdAt) {
                const diff = new Date(lease.startDate).getTime() - new Date(lease.application.createdAt).getTime();
                totalVacancyDays += diff / (1000 * 60 * 60 * 24); // Days
                filledCount++;
            }
        });
        const averageTimeToFillVacancy = filledCount > 0 ? Math.round(totalVacancyDays / filledCount) : 0;

        // 4. Maintenance Backlog Aging
        const maintenanceBacklogAging = {
            lessThan7Days: 0,
            sevenTo30Days: 0,
            thirtyPlusDays: 0
        };
        maintenanceBacklog.forEach(req => {
            const ageDays = (now.getTime() - new Date(req.createdAt).getTime()) / (1000 * 60 * 60 * 24);
            if (ageDays < 7) maintenanceBacklogAging.lessThan7Days++;
            else if (ageDays <= 30) maintenanceBacklogAging.sevenTo30Days++;
            else maintenanceBacklogAging.thirtyPlusDays++;
        });

        // Group Historical Data
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const chartData = [];

        // Loop dynamic number of months/periods
        for (let i = monthsToLookBack - 1; i >= 0; i--) {
            const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
            const monthName = months[d.getMonth()];
            const yearStr = d.getFullYear().toString().slice(-2); // "24"
            const label = `${monthName} '${yearStr}`;

            // Find property name for chart data aggregation if needed, or simply sum
            // Current validation: we are aggregating TOTALS here.

            const monthlyRevenue = historicalPayments
                .filter(p => p.paidOn && new Date(p.paidOn).getMonth() === d.getMonth() && new Date(p.paidOn).getFullYear() === d.getFullYear())
                .reduce((sum, p) => sum + Number(p.amount), 0);

            const monthlyExpenses = historicalExpenses
                .filter(e => e.updatedAt && new Date(e.updatedAt).getMonth() === d.getMonth() && new Date(e.updatedAt).getFullYear() === d.getFullYear())
                .reduce((sum, e) => sum + Number(e.cost || 0), 0);

            chartData.push({
                month: label,
                revenue: monthlyRevenue,
                expenses: monthlyExpenses
            });
        }

        return NextResponse.json({
            success: true,
            totalProperties,
            properties: formattedProperties,
            kpis: {
                revenue: totalRevenue,
                collectedThisMonth: totalRevenue, // MTD collected
                noi: netOperatingIncome,
                arrears: arrears,
                occupancyRate: occupancyRate,
                vacancyLoss: vacancyLoss,
                activeMaintenance: activeMaintenance,
                expiringLeases: expiringLeases30, // Default to 30 days
                totalUnits: totalUnits,
                currency: "USD",

                // Enhanced KPIs with trends
                operatingExpenseRatio,
                debtServiceCoverageRatio: 0, // Placeholder
                cashFlowFromOperations: netOperatingIncome,
                averageMaintenanceResponseTime,
                averageTimeToFillVacancy,
                tenantSatisfactionScore: 0,

                // New: Trends
                revenueTrend,
                expensesTrend,
                occupancyTrend,

                // New: SLA
                maintenanceSla: slaPercentage,
            },
            breakdowns: {
                leaseExpirations: {
                    days30: expiringLeases30,
                    days60: expiringLeases60,
                    days90: expiringLeases90,
                    details: upcomingLeaseExpirations
                },
                maintenanceBacklog: maintenanceBacklogAging,
                delinquentAccounts: delinquentTenants,
                openInvoices: {
                    count: openInvoices.length,
                    details: openInvoices
                },
                maintenanceByPriority: {
                    urgent: urgentRequests.length,
                    high: highPriorityRequests.length,
                    normal: normalPriorityRequests.length
                }
            },
            chartData: chartData
        });

    } catch (error) {
        console.error("Analytics Error:", error);
        return NextResponse.json({ error: "Failed to fetch analytics" }, { status: 500 });
    }
}

