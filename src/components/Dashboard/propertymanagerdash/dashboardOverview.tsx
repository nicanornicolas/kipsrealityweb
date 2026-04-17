"use client";

import React, { useEffect, useState, useMemo } from "react";
import { 
	CheckCircle, Clock, AlertCircle, Wrench, 
	TrendingUp, TrendingDown, DollarSign, 
	FileText, Plus, Search, Building2
} from "lucide-react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import RevenueChart from "./RevenueChart";
import { FinancialSummaryCard } from "./financial-summary-card";
import { PendingLeasesCard } from "./pending-leases-card";
import OccupancyLineChart from "./OccupancyLineChart";
import InvoiceQueueCard from "./InvoiceQueueCard";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

// --- Alert Chip Component ---
function AlertChip({ icon: Icon, color, text }: { icon: any; color: string; text: string }) {
	return (
		<div className={cn("flex items-center gap-2 px-3 py-2 rounded-md border text-sm font-medium", color)}>
			<Icon className="w-4 h-4" />
			<span>{text}</span>
		</div>
	);
}

// --- KPI Card with Trend ---
function KpiCard({ title, value, trend, trendUp, icon: Icon }: { title: string; value: string; trend: string; trendUp: boolean; icon?: any }) {
	return (
		<div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
			<div className="flex justify-between items-start mb-2">
				<p className="text-sm font-medium text-slate-500">{title}</p>
			</div>
			<div className="flex items-baseline gap-2">
				<h3 className="text-2xl font-bold text-slate-900">{value}</h3>
			</div>
			<div className={cn("flex items-center gap-1 mt-2 text-xs font-semibold", trendUp ? "text-emerald-600" : "text-rose-600")}>
				{trendUp ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
				{trend}
			</div>
		</div>
	);
}

// --- Queue Card Component ---
function QueueCard({ title, items, type }: { title: string; items: any[]; type: string }) {
	return (
		<div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden flex flex-col h-[320px]">
			<div className="px-5 py-4 border-b border-slate-50 flex justify-between items-center">
				<h4 className="text-sm font-bold text-slate-800 uppercase tracking-tight">{title}</h4>
			</div>
			<div className="flex-1 overflow-y-auto">
				{items.length === 0 ? (
					<div className="flex items-center justify-center h-full text-slate-400 text-sm">
						No items found
					</div>
				) : (
					items.map((item: any, i: number) => (
						<div key={i} className="px-5 py-3 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors cursor-pointer flex justify-between items-center">
							<div className="space-y-0.5">
								<p className="text-sm font-bold text-slate-900">{item.name}</p>
								<p className="text-[11px] text-slate-400">{item.subtext}</p>
							</div>
							<div className="text-right space-y-0.5">
								<p className="text-xs font-bold text-slate-700">{item.value}</p>
								{item.badge && (
									<span className={cn("text-[9px] px-1.5 py-0.5 rounded font-bold uppercase", item.badgeColor)}>
										{item.badge}
									</span>
								)}
							</div>
						</div>
					))
				)}
			</div>
		</div>
	);
}

// --- Main Dashboard Page ---

export default function Dashboard() {
	const [data, setData] = useState<any>(null);
	const [loading, setLoading] = useState(true);
	const [selectedProperty, setSelectedProperty] = useState("all");
	const [selectedTimeRange, setSelectedTimeRange] = useState("6m");

	// Check if this is a zero-data state (no properties yet)
	const isZeroDataState = !data || data.kpis?.totalUnits === 0;

	// Build maintenance items from API data using useMemo - BEFORE the loading check
	const maintenanceItems = useMemo(() => {
		const mbp = data?.breakdowns?.maintenanceByPriority;
		if (!mbp) return [];

		const { urgent, high, normal } = mbp;
		const items: { name: string; subtext: string; value: string; badge: string; badgeColor: string }[] = [];

		if (urgent > 0) {
			items.push({
				name: `${urgent} Urgent Request${urgent > 1 ? 's' : ''}`,
				subtext: "Requires immediate attention",
				value: "Action Required",
				badge: "Urgent",
				badgeColor: "bg-red-600 text-white"
			});
		}

		if (high > 0) {
			items.push({
				name: `${high} High Priority Request${high > 1 ? 's' : ''}`,
				subtext: "Requires attention soon",
				value: "Action Required",
				badge: "High",
				badgeColor: "bg-rose-600 text-white"
			});
		}

		if (normal > 0) {
			items.push({
				name: `${normal} Standard Request${normal > 1 ? 's' : ''}`,
				subtext: "Scheduled maintenance",
				value: "Pending",
				badge: "Normal",
				badgeColor: "bg-emerald-500 text-white"
			});
		}

		return items.length > 0 ? items : [{ name: "No active requests", subtext: "All clear", value: "Clear", badge: "OK", badgeColor: "bg-slate-100 text-slate-500" }];
	}, [data]);

	useEffect(() => {
		const fetchData = async (propId: string, timeRange: string) => {
			try {
				setLoading(true);
				let url = "/api/dashboard/analytics";
				const params = new URLSearchParams();
				if (propId && propId !== "all") params.append("propertyId", propId);
				if (timeRange) params.append("timeRange", timeRange);

				if (Array.from(params).length > 0) {
					url += `?${params.toString()}`;
				}

				const res = await fetch(url);
				if (res.ok) {
					const json = await res.json();
					setData(json);
				}
			} catch (err) {
				console.error(err);
				toast.error("Could not update live stats.");
			} finally {
				setLoading(false);
			}
		};
		fetchData(selectedProperty, selectedTimeRange);
	}, [selectedProperty, selectedTimeRange]);

	if (loading) {
		return (
			<div className="p-6 space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
					{[...Array(4)].map((_, i) => <Skeleton key={i} className="h-28 w-full rounded-xl" />)}
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					{[...Array(3)].map((_, i) => <Skeleton key={i} className="h-64 w-full rounded-xl" />)}
				</div>
			</div>
		);
	}

	// Default values for zero-data state
	const kpis = data?.kpis || {
		occupancyRate: 0,
		occupancyTrend: "0",
		totalUnits: 0,
		revenue: 0,
		noi: 0,
		arrears: 0,
		vacancyLoss: 0,
		collectedThisMonth: 0,
		revenueTrend: "0",
		activeMaintenance: 0,
		maintenanceSla: 0,
		expiringLeases: 0,
		operatingExpenseRatio: 0,
		averageMaintenanceResponseTime: 0,
		averageTimeToFillVacancy: 0,
		debtServiceCoverageRatio: "N/A"
	};

	const breakdowns = data?.breakdowns || {
		leaseExpirations: { days30: 0, days60: 0, details: [] },
		openInvoices: { count: 0, amount: 0 },
		maintenanceByPriority: { high: 0, normal: 0 }
	};

	// Determine status alerts based on data
	const portfolioHealth = kpis.occupancyRate >= 90 ? "Strong" : kpis.occupancyRate >= 70 ? "Stable" : "Attention";
	const leasesExpiringCount = breakdowns?.leaseExpirations?.days60 || 0;
	const overdueInvoicesCount = breakdowns?.openInvoices?.count || 0;
	const highPriorityMaintenance = (breakdowns?.maintenanceByPriority?.urgent || 0) + (breakdowns?.maintenanceByPriority?.high || 0);

	// Format currency
	const formatCurrency = (amount: number) => {
		if (amount >= 1000000) return `${(amount / 1000000).toFixed(1)}M`;
		if (amount >= 1000) return `${(amount / 1000).toFixed(0)}K`;
		return `${amount}`;
	};

	// Build queue data from API - FIXED: Access nested tenant and unit objects
	const invoiceItems = (breakdowns?.openInvoices?.details || []).slice(0, 5).map((inv: any) => ({
		name: inv.Lease?.tenant?.firstName && inv.Lease?.tenant?.lastName 
			? `${inv.Lease.tenant.firstName} ${inv.Lease.tenant.lastName}` 
			: "Unknown Tenant",
		subtext: inv.dueDate ? `Due ${new Date(inv.dueDate).toLocaleDateString()}` : "Due date unknown",
		value: formatCurrency(inv.totalAmount || 0),
		badge: inv.Lease?.unit?.unitNumber || "Unit",
		badgeColor: inv.status === "OVERDUE" ? "bg-rose-100 text-rose-600" : "bg-slate-100 text-slate-600"
	}));

	const leaseItems = (breakdowns?.leaseExpirations?.details || []).slice(0, 5).map((lease: any) => ({
		name: lease.tenant?.firstName && lease.tenant?.lastName 
			? `${lease.tenant.firstName} ${lease.tenant.lastName}` 
			: "Unknown Tenant",
		subtext: lease.unit?.unitNumber ? `Unit ${lease.unit.unitNumber}` : "Unit unknown",
		value: lease.endDate ? new Date(lease.endDate).toLocaleDateString() : "N/A"
	}));

	return (
		<div className="p-6 bg-slate-50/40 min-h-screen space-y-6">
			
			{/* 1. Header & Global Actions */}
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
				<div>
					<h1 className="text-2xl font-bold text-slate-900 tracking-tight">Command Center</h1>
					<p className="text-sm text-slate-500 mt-1">
						{isZeroDataState ? "Add properties to start tracking your portfolio" : "Portfolio overview and pending actions"}
					</p>
				</div>
				<div className="flex items-center gap-3">
					{/* Search */}
					<div className="relative">
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
						<input 
							type="text" 
							placeholder="Search..." 
							className="pl-9 pr-4 py-2 text-sm border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
						/>
					</div>
					{/* Add Property Button */}
					<Link href="/property-manager/add-property">
						<button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm">
							<Plus className="w-4 h-4" />
							Add Property
						</button>
					</Link>
				</div>
			</div>

			{/* 2. Alert Ribbon - Compact top-level status */}
			<div className="flex flex-wrap gap-3">
				<AlertChip 
					icon={CheckCircle} 
					color={portfolioHealth === "Strong" ? "bg-emerald-50 border-emerald-100 text-emerald-700" : portfolioHealth === "Stable" ? "bg-blue-50 border-blue-100 text-blue-700" : "bg-rose-50 border-rose-100 text-rose-700"} 
					text={`Portfolio Health: ${portfolioHealth}`} 
				/>
				<AlertChip 
					icon={Clock} 
					color="bg-blue-50 border-blue-100 text-blue-700" 
					text={`${leasesExpiringCount} leases expiring in 60 days`} 
				/>
				<AlertChip 
					icon={AlertCircle} 
					color={overdueInvoicesCount > 0 ? "bg-rose-50 border-rose-100 text-rose-700" : "bg-emerald-50 border-emerald-100 text-emerald-700"} 
					text={overdueInvoicesCount > 0 ? `${overdueInvoicesCount} overdue invoice` : "No overdue invoices"} 
				/>
				<AlertChip 
					icon={Wrench} 
					color={highPriorityMaintenance > 0 ? "bg-orange-50 border-orange-100 text-orange-700" : "bg-emerald-50 border-emerald-100 text-emerald-700"} 
					text={highPriorityMaintenance > 0 ? `${highPriorityMaintenance} high-priority work order` : "Maintenance OK"} 
				/>
			</div>

			{/* 3. KPI Cards Row (4 Columns) */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<KpiCard 
					title="Occupancy Rate" 
					value={isZeroDataState ? "0%" : `${kpis.occupancyRate}%`} 
					trend={isZeroDataState ? "0% vs last month" : `${parseFloat(kpis.occupancyTrend) >= 0 ? "+" : ""}${kpis.occupancyTrend}% vs last month`}
					trendUp={parseFloat(kpis.occupancyTrend || "0") >= 0}
				/>
				<KpiCard 
					title="Open Invoices" 
					value={isZeroDataState ? "0" : `${breakdowns?.openInvoices?.count || 0}`} 
					trend="12.4% past 30 days"
					trendUp={false}
				/>
				<KpiCard 
					title="Collected This Month" 
					value={isZeroDataState ? "$0" : formatCurrency(kpis.collectedThisMonth || 0)} 
					trend={isZeroDataState ? "0% MTD" : `${parseFloat(kpis.revenueTrend) >= 0 ? "+" : ""}${Math.abs(parseFloat(kpis.revenueTrend))}% MTD cash received`}
					trendUp={parseFloat(kpis.revenueTrend || "0") >= 0}
				/>
				<KpiCard 
					title="Open Requests" 
					value={isZeroDataState ? "0" : `${kpis.activeMaintenance}`} 
					trend="4.5% maintenance queue"
					trendUp={false}
				/>
			</div>

			{/* 4. Trends Section (2 Columns on Large) */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				{/* Occupancy Trend */}
				<div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex flex-col lg:col-span-2 min-h-[380px]">
					<div className="flex justify-between mb-4">
						<h4 className="text-sm font-semibold text-slate-800">Occupancy Trend</h4>
						<span className="text-[10px] text-slate-400 uppercase tracking-wider">Last 7 months</span>
					</div>
					<div className="flex-1 bg-slate-50/50 rounded-lg flex items-stretch border-2 border-dashed border-slate-100">
						{isZeroDataState ? (
							<div className="w-full h-full flex items-center justify-center">
								<p className="text-xs text-slate-400">Add properties to see trends</p>
							</div>
						) : (
							<div className="w-full h-full">
								<OccupancyLineChart selectedProperty={selectedProperty} myproperties={data?.properties || []} />
							</div>
						)}
					</div>
					<p className="mt-4 text-xs text-slate-500">Current occupancy <span className="font-bold text-slate-900">{kpis.occupancyRate}%</span></p>
				</div>

				{/* Collections Trend */}
				<div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex flex-col h-[420px] overflow-hidden">
					<div className="flex justify-between mb-4">
						<h4 className="text-sm font-semibold text-slate-800">Collections Trend</h4>
						<span className="text-[10px] text-slate-400 uppercase tracking-wider">MTD</span>
					</div>
					<div className="flex-1 h-[320px] bg-slate-50/50 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-100 overflow-hidden">
						{isZeroDataState ? (
							<p className="text-xs text-slate-400">Generate invoices to see trends</p>
						) : (
							<RevenueChart data={data?.chartData || []} />
						)}
					</div>
					<p className="mt-4 text-xs text-slate-500">Collected this month <span className="font-bold text-slate-900">{formatCurrency(kpis.collectedThisMonth)}</span></p>
				</div>

				{/* Maintenance SLA */}
				<div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm h-64">
					<h4 className="text-sm font-semibold text-slate-800 mb-4">Maintenance SLA</h4>
					<div className="space-y-4">
						<div>
							<div className="flex justify-between text-xs mb-1">
								<span className="text-slate-500">Target 85%</span>
								<span className="font-bold text-emerald-600">{kpis.maintenanceSla || 0}%</span>
							</div>
							<div className="w-full bg-slate-100 rounded-full h-2">
								<div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${kpis.maintenanceSla || 0}%` }}></div>
							</div>
						</div>
						<p className="text-[10px] text-slate-400">Resolved within SLA</p>
						<div className="grid grid-cols-3 gap-2 pt-4">
							<div className="text-center p-2 bg-slate-50 rounded border border-slate-100">
								<div className="text-sm font-bold text-slate-700">{highPriorityMaintenance}</div>
								<div className="text-[10px] text-slate-400">Open</div>
							</div>
							<div className="text-center p-2 bg-slate-50 rounded border border-slate-100">
								<div className="text-sm font-bold text-slate-700">{breakdowns?.maintenanceByPriority?.normal || 0}</div>
								<div className="text-[10px] text-slate-400">In Progress</div>
							</div>
							<div className="text-center p-2 bg-slate-50 rounded border border-slate-100">
								<div className="text-sm font-bold text-slate-700">0</div>
								<div className="text-[10px] text-slate-400">Blocked</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* 5. Action Queues (3 Columns) */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				{/* Invoice Queue */}
				<InvoiceQueueCard />
				
				{/* Work Orders */}
				<QueueCard title="Open Work Orders" items={kpis.activeMaintenance > 0 ? maintenanceItems : []} type="workorder" />
				
				{/* Lease Expirations */}
				<QueueCard title="Upcoming Lease Expirations" items={leaseItems} type="lease" />
			</div>

			{/* 6. Tooltip Banner */}
			<div className="bg-blue-50/50 border border-blue-100 p-3 rounded-lg flex items-center gap-2">
				<span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">TIP</span>
				<p className="text-xs text-blue-700 italic">
					Use Portfolio → Leases to bulk-generate renewal packets and route signatures through Dashboard → eSign.
				</p>
			</div>

		</div>
	);
}
