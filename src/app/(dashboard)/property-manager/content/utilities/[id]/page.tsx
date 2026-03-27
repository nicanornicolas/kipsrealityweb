"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Loader2, ArrowLeft, AlertCircle, Gauge, FileText, PieChart, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UtilityAllocationProcessor } from "@/components/utilities/UtilityAllocationProcessor";
import { MeterReadingsTable } from "@/components/utilities/MeterReadingsTable";

// Tab type
type TabId = "overview" | "readings" | "bills" | "allocations";

interface Utility {
  id: string;
  name: string;
  type: "FIXED" | "METERED";
  unitPrice?: number;
  fixedAmount?: number;
  propertyId?: string;
  propertyName?: string;
}

export default function UtilityDetailsPage() {
  // Keep [id] in route, use utilityId in code
  const { id } = useParams();
  const utilityId = id as string;

  const [utility, setUtility] = useState<Utility | null>(null);
  const [activeTab, setActiveTab] = useState<TabId>("overview");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadUtility();
  }, [utilityId]);

  // Handle hash-based navigation
  useEffect(() => {
    const hash = window.location.hash.replace("#", "") as TabId;
    if (hash && ["overview", "readings", "bills", "allocations"].includes(hash)) {
      setActiveTab(hash);
    }
  }, []);

  const loadUtility = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const res = await fetch(`/api/utilities/${utilityId}`);
      const data = await res.json();

      let utilityData = null;
      if (data?.success && data?.data) {
        utilityData = data.data;
      } else if (data?.id) {
        utilityData = data;
      }

      if (utilityData) {
        setUtility(utilityData);
      } else {
        setError("Utility not found");
      }
    } catch (err) {
      console.error("Load utility error:", err);
      setError("Failed to load utility");
    } finally {
      setIsLoading(false);
    }
  };

  const handleTabChange = (tab: TabId) => {
    setActiveTab(tab);
    // Update URL hash without full navigation
    window.history.replaceState(null, "", `#${tab}`);
  };

  const formatCurrency = (amount?: number | null) => {
    if (amount === null || amount === undefined) return "N/A";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Loader2 className="w-8 h-8 animate-spin text-[#30D5C8]" />
        <span className="ml-3 text-[#15386a]">Loading utility...</span>
      </div>
    );
  }

  if (error || !utility) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
        <div className="max-w-2xl mx-auto border border-slate-200 shadow-xl rounded-2xl bg-white">
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center">
              <AlertCircle className="w-8 h-8 text-red-500" />
            </div>
            <p className="text-[#15386a]/70">{error || "Utility not found"}</p>
            <Link href="/property-manager/content/utilities">
              <Button
                variant="outline"
                className="text-[#30D5C8] border-[#30D5C8]/30 hover:bg-[#30D5C8]/5"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Utilities
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const tabs: { id: TabId; label: string; icon: React.ReactNode }[] = [
    { id: "overview", label: "Overview", icon: <Info className="w-4 h-4" /> },
    { id: "readings", label: "Readings", icon: <Gauge className="w-4 h-4" /> },
    { id: "bills", label: "Bills", icon: <FileText className="w-4 h-4" /> },
    { id: "allocations", label: "Allocations", icon: <PieChart className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Back Button */}
        <div className="flex items-center gap-4">
          <Link href="/property-manager/content/utilities">
            <Button
              variant="ghost"
              className="text-[#15386a] hover:text-[#0b1f3a] hover:bg-[#30D5C8]/5"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Utilities
            </Button>
          </Link>
        </div>

        {/* Utility Header */}
        <Card className="border-slate-200 shadow-xl rounded-2xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-[#0b1f3a] to-[#15386a] text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CardTitle className="text-2xl">{utility.name}</CardTitle>
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${utility.type === "FIXED"
                    ? "bg-white/20 text-white"
                    : "bg-[#30D5C8] text-[#0b1f3a]"
                    }`}
                >
                  {utility.type === "FIXED" ? "Fixed" : "Metered"}
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-[#15386a]/5 to-[#15386a]/10 p-4 rounded-xl border border-[#15386a]/20">
                <p className="text-sm text-[#15386a]/70 mb-1 font-medium">Billing Type</p>
                <p className="text-lg font-bold text-[#0b1f3a]">
                  {utility.type === "FIXED" ? "Fixed Amount" : "Metered"}
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#30D5C8]/5 to-[#30D5C8]/10 p-4 rounded-xl border border-[#30D5C8]/20">
                <p className="text-sm text-[#15386a]/70 mb-1 font-medium">
                  {utility.type === "FIXED" ? "Fixed Amount" : "Unit Price"}
                </p>
                <p className="text-lg font-bold text-[#0b1f3a]">
                  {utility.type === "FIXED"
                    ? formatCurrency(utility.fixedAmount)
                    : formatCurrency(utility.unitPrice)}
                </p>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 rounded-xl border border-slate-200">
                <p className="text-sm text-[#15386a]/70 mb-1 font-medium">Property</p>
                <p className="text-lg font-bold text-[#0b1f3a]">
                  {utility.propertyName ?? "Not assigned"}
                </p>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 rounded-xl border border-slate-200">
                <p className="text-sm text-[#15386a]/70 mb-1 font-medium">Utility ID</p>
                <p className="text-sm font-mono text-[#0b1f3a] truncate">
                  {utilityId}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs value={activeTab} onValueChange={(value) => handleTabChange(value as TabId)}>
          <TabsList className="mb-6 w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none pb-3"
              >
                <span className="flex items-center gap-2">
                  {tab.icon}
                  {tab.label}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          <Card className="border-slate-200 shadow-xl rounded-2xl overflow-hidden">
            <CardContent className="p-6">
              <TabsContent value="overview">
                <OverviewTab utility={utility} />
              </TabsContent>
              <TabsContent value="readings">
                <ReadingsTab
                  utilityId={utilityId}
                  utilityType={utility.type}
                  propertyId={utility.propertyId}
                />
              </TabsContent>
              <TabsContent value="bills">
                <BillsTab utilityId={utilityId} />
              </TabsContent>
              <TabsContent value="allocations">
                <AllocationsTab utilityId={utilityId} propertyId={utility.propertyId} />
              </TabsContent>
            </CardContent>
          </Card>
        </Tabs>
      </div>
    </div>
  );
}

// =============================================================================
// TAB COMPONENTS
// =============================================================================

function OverviewTab({ utility }: { utility: Utility }) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-[#0b1f3a]">Utility Overview</h3>
      <p className="text-[#15386a]/70">
        This is the overview tab for <strong>{utility.name}</strong>.
        Use the tabs above to view readings, bills, and allocations.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-gradient-to-br from-[#15386a]/5 to-transparent rounded-xl border border-[#15386a]/10">
          <h4 className="font-semibold text-[#0b1f3a] mb-2">Quick Actions</h4>
          <ul className="space-y-2 text-[#15386a]/70">
            <li>• View and add meter readings in the <strong>Readings</strong> tab</li>
            <li>• Manage provider bills in the <strong>Bills</strong> tab</li>
            <li>• View cost allocations in the <strong>Allocations</strong> tab</li>
          </ul>
        </div>
        <div className="p-6 bg-gradient-to-br from-[#30D5C8]/5 to-transparent rounded-xl border border-[#30D5C8]/10">
          <h4 className="font-semibold text-[#0b1f3a] mb-2">Utility Details</h4>
          <dl className="space-y-2 text-[#15386a]/70">
            <div className="flex justify-between">
              <dt>Type:</dt>
              <dd className="font-medium text-[#0b1f3a]">{utility.type}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Billing:</dt>
              <dd className="font-medium text-[#0b1f3a]">
                {utility.type === "FIXED" ? "Fixed Monthly" : "Usage-based"}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

function ReadingsTab({
  utilityId,
  utilityType,
  propertyId,
}: {
  utilityId: string;
  utilityType: "FIXED" | "METERED";
  propertyId?: string;
}) {
  if (utilityType === "FIXED") {
    return (
      <div className="text-center py-12 space-y-4">
        <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center">
          <Gauge className="w-8 h-8 text-slate-400" />
        </div>
        <p className="text-[#15386a]/70">
          Meter readings are not available for fixed-rate utilities.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <MeterReadingsTable propertyId={propertyId ?? "property-unknown"} />
      <p className="text-xs text-slate-500">Utility ID: {utilityId}</p>
    </div>
  );
}

function BillsTab({ utilityId }: { utilityId: string }) {
  // TODO: Implement BillsTab content
  // This will be replaced with the full bills module
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-[#0b1f3a]">Provider Bills</h3>
        <Button className="bg-[#30D5C8] hover:bg-[#30D5C8]/90 text-white">
          Create Bill
        </Button>
      </div>
      <div className="text-center py-12 text-[#15386a]/70">
        <p>Bills module placeholder - will be implemented in Phase 4</p>
        <p className="text-sm mt-2">Utility ID: {utilityId}</p>
      </div>
    </div>
  );
}

function AllocationsTab({ utilityId, propertyId }: { utilityId: string; propertyId?: string }) {
  const resolvedPropertyId = propertyId ?? "property-unknown";

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-[#0b1f3a]">Bill Allocations</h3>
      <p className="text-[#15386a]/70">
        Review and approve allocations generated from master bills before posting to the ledger.
      </p>
      <UtilityAllocationProcessor utilityId={utilityId} propertyId={resolvedPropertyId} />
      <p className="text-xs text-slate-500">Utility ID: {utilityId}</p>
    </div>
  );
}
