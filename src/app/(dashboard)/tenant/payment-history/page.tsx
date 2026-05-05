'use client';

import { useTenantPayments } from '@/hooks/queries/use-tenant-finance';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { EmptyState } from '@/components/ui/empty-state';
import { formatCurrency } from '@/lib/format-currency';
import { format } from 'date-fns';
import { Download, History } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PaymentHistoryPage() {
  const { data: payments, isLoading, isError } = useTenantPayments();

  if (isLoading) {
    return <Skeleton className="h-[400px] w-full rounded-md" />;
  }

  if (isError || !payments) {
    return (
      <EmptyState
        icon={<History />}
        title="Error"
        description="Failed to load payment history."
      />
    );
  }

  if (payments.length === 0) {
    return (
      <EmptyState
        icon={<History className="h-12 w-12 text-muted-foreground" />}
        title="No Payment History"
        description="Your past payments will appear here once your first transaction is completed."
      />
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight text-navy-900">
        Payment History
      </h1>

      <div className="rounded-md border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Reference ID</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="w-[100px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell className="font-medium">
                  {format(new Date(payment.paidOn), 'MMM dd, yyyy')}
                </TableCell>
                <TableCell>{payment.invoice?.description || 'Payment'}</TableCell>
                <TableCell className="text-muted-foreground font-mono text-xs">
                  {payment.reference}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      payment.status === 'COMPLETED' ? 'default' : 'secondary'
                    }
                  >
                    {payment.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-bold">
                  {formatCurrency(payment.amount)}
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={`/api/payment/${payment.id}/receipt`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Download className="h-4 w-4 text-muted-foreground" />
                      <span className="sr-only">Download Receipt</span>
                    </a>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
