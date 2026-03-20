"use client";

import { useState } from "react";
import { Loader2, CheckCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface InvoiceWithLease {
  id: string;
  totalAmount: number;
  dueDate: Date | string;
  status: "DRAFT" | "PENDING" | "PAID" | "OVERDUE" | "CANCELLED";
  postingStatus: string;
  Lease?: {
    unit?: { unitNumber: string };
    tenant?: { firstName: string; lastName: string } | null;
  };
}

interface DraftReviewModalProps {
  invoice: InvoiceWithLease | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function DraftReviewModal({ invoice, isOpen, onClose, onSuccess }: DraftReviewModalProps) {
  const [loading, setLoading] = useState(false);

  if (!invoice) return null;

  const handlePost = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/invoices/${invoice.id}/post`, {
        method: "POST",
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to post invoice");

      toast.success("Invoice Posted to General Ledger!");
      onSuccess(); // Refresh the parent list
      onClose();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to post invoice";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            Review Draft Invoice
          </DialogTitle>
          <DialogDescription>
            This invoice is currently a <strong>Draft</strong>. It has NOT been posted to the General Ledger yet.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 items-center gap-4 border-b pb-4">
            <span className="text-sm font-medium text-gray-500">Tenant</span>
            <span className="text-sm font-bold text-right">
              {invoice.Lease?.tenant?.firstName} {invoice.Lease?.tenant?.lastName}
            </span>
          </div>
          <div className="grid grid-cols-2 items-center gap-4 border-b pb-4">
            <span className="text-sm font-medium text-gray-500">Unit</span>
            <span className="text-sm font-bold text-right">{invoice.Lease?.unit?.unitNumber}</span>
          </div>
          <div className="grid grid-cols-2 items-center gap-4 border-b pb-4">
            <span className="text-sm font-medium text-gray-500">Due Date</span>
            <span className="text-sm font-bold text-right">
                {new Date(invoice.dueDate).toLocaleDateString()}
            </span>
          </div>
          <div className="grid grid-cols-2 items-center gap-4 bg-gray-50 p-3 rounded">
            <span className="text-base font-semibold">Total Amount</span>
            <span className="text-xl font-bold text-blue-600 text-right">
                ${Number(invoice.totalAmount).toLocaleString()}
            </span>
          </div>
        </div>

        <DialogFooter className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose} disabled={loading}>
              Cancel
          </Button>
          <Button onClick={handlePost} disabled={loading} className="bg-green-600 hover:bg-green-700">
              {loading ? <Loader2 className="animate-spin w-4 h-4" /> : <CheckCircle className="w-4 h-4 mr-2" />}
              Confirm & Post
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
