"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Loader2, FileText, AlertCircle, Clock } from "lucide-react";
import DraftReviewModal from "./DraftReviewModal";

interface InvoiceQueueItem {
  id: string;
  totalAmount: number;
  dueDate: Date;
  status: "DRAFT" | "PENDING" | "PAID" | "OVERDUE" | "CANCELLED";
  postingStatus: string;
  Lease?: {
    unit?: { unitNumber: string };
    tenant?: { firstName: string; lastName: string; email: string } | null;
  };
}

export default function InvoiceQueueCard() {
  const [invoices, setInvoices] = useState<InvoiceQueueItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedInvoice, setSelectedInvoice] = useState<InvoiceQueueItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  // 1. Wrap the fetch logic in useCallback so it can be reused safely
  const fetchInvoices = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const res = await fetch("/api/invoices?status=DRAFT,PENDING,OVERDUE"); 
      
      // IMPROVEMENT: Capture the actual error status and message from the server
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Server Error (${res.status}): ${errorText || "Failed to load"}`);
      }
      
      const data = await res.json();
      
      let invoiceList: InvoiceQueueItem[] =[];
      
      // Handle both grouped and flat response formats
      if (data.invoices && Array.isArray(data.invoices)) {
        // New format with separate invoices array
        invoiceList = data.invoices;
      } else if (Array.isArray(data)) {
        // Old format - grouped response
        if (data[0]?.id) {
          invoiceList = data;
        } else {
          data.forEach((group: any) => {
            if (group.invoices && Array.isArray(group.invoices)) {
              invoiceList =[...invoiceList, ...group.invoices];
            }
          });
        }
      }
      
      const sorted = invoiceList
          .filter((inv) =>["DRAFT", "PENDING", "OVERDUE"].includes(inv.status))
          .sort((a, b) => {
            if (a.status === "OVERDUE" && b.status !== "OVERDUE") return -1;
            if (b.status === "OVERDUE" && a.status !== "OVERDUE") return 1;
            return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
          })
          .slice(0, 5);

      setInvoices(sorted);
    } catch (error) {
      console.error("Invoice Fetch Error:", error);
      setError(error instanceof Error ? error.message : "Failed to load invoices");
    } finally {
      setLoading(false);
    }
  },[]);

  // 2. Reuse the callback for the initial load
  useEffect(() => {
    fetchInvoices();
  }, [fetchInvoices]);

  // 3. Reuse the callback for refreshing after a post
  const refreshList = useCallback(() => {
    fetchInvoices();
  }, [fetchInvoices]);

  const getStatusBadge = (invoice: InvoiceQueueItem) => {
    const due = new Date(invoice.dueDate);
    const now = new Date();
    due.setHours(23, 59, 59, 999);
    const diffTime = due.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (invoice.status === "DRAFT") {
      return (
        <span className="text-xs font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-600 flex items-center gap-1">
          <FileText size={12} /> Draft
        </span>
      );
    }

    if (invoice.status === "OVERDUE" || diffDays < 0) {
      return (
        <span className="text-xs font-medium px-2 py-0.5 rounded bg-red-50 text-red-600 flex items-center gap-1">
          <AlertCircle size={12} /> Overdue {Math.abs(diffDays)}d
        </span>
      );
    }

    if (diffDays === 0) {
      return <span className="text-xs font-medium text-orange-600">Due Today</span>;
    }

    if (diffDays <= 3) {
      return <span className="text-xs font-medium text-amber-600">Due in {diffDays} days</span>;
    }

    return <span className="text-xs text-gray-500">Due in {diffDays} days</span>;
  };

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full flex items-center justify-center">
        <Loader2 className="animate-spin text-gray-300" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full flex items-center justify-center">
        <div className="text-center text-red-500">
          <AlertCircle className="w-8 h-8 mx-auto mb-2" />
          {/* This will now output the actual Server Error status (e.g. 404 or 500) */}
          <p className="text-sm px-4">{error}</p>
          <button 
            onClick={refreshList}
            className="text-xs text-blue-500 hover:underline mt-2"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-900">Invoice Queue</h3>
        <button 
            onClick={() => router.push('/property-manager/finance/invoices')}
            className="text-xs text-blue-600 hover:text-blue-700 font-medium"
        >
            View All
        </button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4">
        {invoices.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-4">All caught up! No open invoices.</p>
        ) : (
          invoices.map((inv) => (
            <div 
              key={inv.id} 
              className="flex items-center justify-between group cursor-pointer hover:bg-gray-50 p-2 rounded-lg -mx-2 transition-colors"
              onClick={() => {
                setSelectedInvoice(inv);
                setIsModalOpen(true);
              }}
            >
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900">
                  {inv.Lease?.tenant ? `${inv.Lease.tenant.firstName} ${inv.Lease.tenant.lastName}` : "Unknown Tenant"}
                </span>
                {getStatusBadge(inv)}
              </div>

              <div className="text-right">
                <div className="text-xs text-gray-500 mb-0.5">
                  Unit {inv.Lease?.unit?.unitNumber || "N/A"}
                </div>
                <div className="font-bold text-gray-900">
                  ${Number(inv.totalAmount).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <DraftReviewModal 
        isOpen={isModalOpen} 
        invoice={selectedInvoice} 
        onClose={() => setIsModalOpen(false)}
        onSuccess={refreshList}
      />
    </div>
  );
}
