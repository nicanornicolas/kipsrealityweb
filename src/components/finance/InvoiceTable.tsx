'use client';

import { useEffect, useMemo, useState } from 'react';
import { InvoiceListItem } from '@rentflow/finance';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { StatusBadge } from './StatusBadge';
import { PostToLedgerButton } from './PostToLedgerButton';
import { InvoiceDetailDrawer } from './InvoiceDetailDrawer';

type InvoiceStatusFilter = 'all' | 'DRAFT' | 'ISSUED' | 'PAID' | 'VOID' | 'OVERDUE' | 'CANCELLED';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

export function InvoiceTable({ propertyId }: { propertyId?: string }) {
  const [invoices, setInvoices] = useState<InvoiceListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState<InvoiceStatusFilter>('all');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit] = useState(10);
  const [selectedInvoiceId, setSelectedInvoiceId] = useState<string | null>(null);

  const totalPages = useMemo(() => Math.max(1, Math.ceil(total / limit)), [total, limit]);

  const fetchInvoices = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (propertyId && propertyId !== 'all') params.set('propertyId', propertyId);
      if (status !== 'all') params.set('status', status);
      if (search.trim()) params.set('search', search.trim());
      params.set('page', String(page));
      params.set('limit', String(limit));

      const res = await fetch(`/api/finance/invoices?${params.toString()}`, {
        cache: 'no-store',
      });
      const json = await res.json();

      if (!res.ok || !json?.success) {
        throw new Error(json?.error || 'Failed to fetch invoices');
      }

      setInvoices(json.data || []);
      setTotal(json.pagination?.total || 0);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to fetch invoices');
      setInvoices([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchInvoices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propertyId, status, search, page]);

  useEffect(() => {
    setPage(1);
  }, [propertyId, status, search]);

  const handleRefresh = () => {
    void fetchInvoices();
  };

  return (
    <>
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <CardTitle className="text-base font-semibold text-slate-900">Accounts Receivable</CardTitle>
            <p className="text-sm text-slate-500">Invoice management and GL posting queue</p>
          </div>
          <Button variant="outline" size="sm" onClick={handleRefresh}>
            Refresh
          </Button>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="invoice-search" className="text-xs uppercase tracking-wide text-slate-500">Search</Label>
            <Input
              id="invoice-search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Tenant, property, unit, invoice ID"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-xs uppercase tracking-wide text-slate-500">Status</Label>
            <Select value={status} onValueChange={(value) => setStatus(value as InvoiceStatusFilter)}>
              <SelectTrigger>
                <SelectValue placeholder="All statuses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All statuses</SelectItem>
                <SelectItem value="DRAFT">Draft</SelectItem>
                <SelectItem value="ISSUED">Issued</SelectItem>
                <SelectItem value="PAID">Paid</SelectItem>
                <SelectItem value="VOID">Void</SelectItem>
                <SelectItem value="OVERDUE">Overdue</SelectItem>
                <SelectItem value="CANCELLED">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-xs uppercase tracking-wide text-slate-500">Property Scope</Label>
            <div className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
              {propertyId && propertyId !== 'all' ? propertyId : 'All properties'}
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <Separator />

        <div className="overflow-hidden rounded-lg border border-slate-200">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Tenant / Property</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>GL</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={8} className="py-10 text-center text-sm text-slate-500">
                    Loading invoices...
                  </TableCell>
                </TableRow>
              ) : invoices.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="py-10 text-center text-sm text-slate-500">
                    No invoices found.
                  </TableCell>
                </TableRow>
              ) : (
                invoices.map((invoice) => (
                  <TableRow
                    key={invoice.id}
                    className="cursor-pointer hover:bg-slate-50"
                    onClick={() => setSelectedInvoiceId(invoice.id)}
                  >
                    <TableCell className="font-medium text-slate-900">{invoice.invoiceNumber}</TableCell>
                    <TableCell>
                      <div className="font-medium text-slate-900">{invoice.tenantName}</div>
                      <div className="text-xs text-slate-500">{invoice.propertyName}</div>
                    </TableCell>
                    <TableCell>{invoice.unitNumber}</TableCell>
                    <TableCell className="font-semibold text-slate-900">
                      {currencyFormatter.format(invoice.amount)}
                    </TableCell>
                    <TableCell>{new Date(invoice.dueDate).toLocaleDateString()}</TableCell>
                    <TableCell><StatusBadge status={invoice.status} /></TableCell>
                    <TableCell><StatusBadge status={invoice.postingStatus} /></TableCell>
                    <TableCell className="text-right">
                      {invoice.postingStatus === 'PENDING' ? (
                        <div onClick={(event) => event.stopPropagation()}>
                          <PostToLedgerButton invoiceId={invoice.id} onComplete={handleRefresh} />
                        </div>
                      ) : (
                        <span className="text-xs text-slate-400">Posted</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-500">
            Showing page {page} of {totalPages} · {total} total invoices
          </p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled={page <= 1 || loading} onClick={() => setPage((current) => Math.max(1, current - 1))}>
              Previous
            </Button>
            <Button variant="outline" size="sm" disabled={page >= totalPages || loading} onClick={() => setPage((current) => current + 1)}>
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
    <InvoiceDetailDrawer invoiceId={selectedInvoiceId} onClose={() => setSelectedInvoiceId(null)} />
    </>
  );
}