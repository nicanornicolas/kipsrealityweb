'use client';

import { useQuery } from '@tanstack/react-query';
import { AlertCircle, CheckCircle2, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { api } from '@/lib/api-client';
import { formatUSD } from '@/lib/format-currency';
import { VendorListItem } from '@rentflow/finance';

/**
 * VendorComplianceTable Component
 * 
 * Displays vendor list with:
 * - W-9 collection status (MISSING, COLLECTED, EXPIRED)
 * - YTD spend amount
 * - IRS 1099-MISC threshold tracking ($600 limit for non-corporations)
 * - Risk indicator for compliance violations
 * 
 * Used to flag vendors requiring immediate W-9 collection before payment exceeds $600.
 */
export function VendorComplianceTable() {
  const { data: vendors, isLoading, error } = useQuery({
    queryKey: ['vendor-compliance'],
    queryFn: async () => {
      const res = await api.get<{ success: boolean; data: VendorListItem[]; error?: string }>(
        '/api/finance/vendors/compliance',
      );
      if (res.error || !res.data?.success) {
        throw new Error(res.data?.error || res.error || 'Failed to fetch vendor compliance data');
      }
      const json = res.data;
      return json.data as VendorListItem[];
    },
  });

  if (isLoading) {
    return (
      <Card className="border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-base font-semibold text-slate-900">
            Vendor & 1099 Compliance
          </CardTitle>
        </CardHeader>
        <CardContent className="text-slate-500">Loading vendors...</CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-base font-semibold text-slate-900">
            Vendor & 1099 Compliance
          </CardTitle>
        </CardHeader>
        <CardContent className="text-rose-600">
          Failed to load vendor compliance data
        </CardContent>
      </Card>
    );
  }

  const highRiskVendors = (vendors || []).filter(
    (v) => v.totalPaidYTD > 600 && v.w9Status === 'MISSING'
  );

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader>
        <div className="flex items-center justify-between gap-4">
          <div>
            <CardTitle className="text-base font-semibold text-slate-900">
              Vendor & 1099 Compliance
            </CardTitle>
            <p className="text-sm text-slate-500">
              IRS threshold tracking and W-9 verification for the current fiscal year
            </p>
          </div>
          {highRiskVendors.length > 0 && (
            <Badge variant="destructive" className="whitespace-nowrap animate-pulse">
              {highRiskVendors.length} IRS Block{highRiskVendors.length !== 1 ? 's' : ''}
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto rounded-lg border border-slate-200">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow className="border-b border-slate-200">
                <TableHead className="h-12 px-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Vendor
                </TableHead>
                <TableHead className="h-12 px-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Business Type
                </TableHead>
                <TableHead className="h-12 px-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
                  W-9 Status
                </TableHead>
                <TableHead className="h-12 px-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-600">
                  YTD Spend
                </TableHead>
                <TableHead className="h-12 px-4 text-center text-xs font-semibold uppercase tracking-wide text-slate-600">
                  1099 Risk
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {!vendors || vendors.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="h-12 text-center text-slate-500">
                    No vendors found
                  </TableCell>
                </TableRow>
              ) : (
                vendors.map((vendor) => (
                  <TableRow
                    key={vendor.id}
                    className="border-b border-slate-200 hover:bg-slate-50"
                  >
                    <TableCell className="px-4 py-3">
                      <span className="font-medium text-slate-900">{vendor.name}</span>
                    </TableCell>

                    <TableCell className="px-4 py-3">
                      <span className="text-sm text-slate-600">{vendor.businessType}</span>
                    </TableCell>

                    <TableCell className="px-4 py-3">
                      {vendor.w9Status === 'COLLECTED' ? (
                        <div className="flex items-center gap-2 text-emerald-600">
                          <CheckCircle2 size={16} />
                          <span className="text-sm font-medium">Verified</span>
                        </div>
                      ) : vendor.w9Status === 'EXPIRED' ? (
                        <div className="flex items-center gap-2 text-amber-600">
                          <Clock size={16} />
                          <span className="text-sm font-medium">Expired</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-rose-600">
                          <AlertCircle size={16} />
                          <span className="text-sm font-medium">Missing</span>
                        </div>
                      )}
                    </TableCell>

                    <TableCell className="px-4 py-3 text-right">
                      <span className="font-mono text-sm font-medium text-slate-900">
                        {formatUSD(vendor.totalPaidYTD)}
                      </span>
                    </TableCell>

                    <TableCell className="px-4 py-3 text-center">
                      {vendor.totalPaidYTD > 600 && vendor.w9Status === 'MISSING' ? (
                        <span className="inline-block animate-pulse rounded bg-rose-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-rose-700">
                          [IRS BLOCK]
                        </span>
                      ) : vendor.totalPaidYTD > 500 ? (
                        <span className="inline-block text-xs font-medium text-amber-600">
                          Approaching
                        </span>
                      ) : (
                        <span className="inline-block text-xs font-medium text-slate-400">
                          —
                        </span>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
