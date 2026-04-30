'use client';

import {
  useInitializePayment,
  useTenantInvoices,
} from '@/hooks/queries/use-tenant-finance';
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { EmptyState } from '@/components/ui/empty-state';
import { LoadingButton } from '@/components/ui/loading-button';
import { formatCurrency } from '@/lib/format-currency';
import { CalendarDays, CreditCard, Receipt } from 'lucide-react';
import { format } from 'date-fns';

export default function PayRentPage() {
  const { data: invoices, isLoading, isError } = useTenantInvoices('PENDING');
  const { mutate: payInvoice, isPending: isRedirecting } = useInitializePayment();

  if (isLoading) {
    return (
      <div className="space-y-4 max-w-3xl">
        <Skeleton className="h-40 w-full" />
        <Skeleton className="h-40 w-full" />
      </div>
    );
  }

  if (isError) {
    return (
      <EmptyState
        icon={<Receipt />}
        title="Error"
        description="Could not load your invoices. Please try again later."
      />
    );
  }

  if (!invoices || invoices.length === 0) {
    return (
      <EmptyState
        icon={<Receipt className="h-12 w-12 text-muted-foreground" />}
        title="You're all caught up!"
        description="You have no pending invoices or rent due at this time."
      />
    );
  }

  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="text-2xl font-bold tracking-tight text-navy-900">
        Outstanding Balances
      </h1>

      <div className="grid gap-4">
        {invoices.map((invoice) => {
          const isOverdue = new Date(invoice.dueDate) < new Date();

          return (
            <Card
              key={invoice.id}
              className={`border-l-4 ${
                isOverdue ? 'border-l-red-500' : 'border-l-primary'
              }`}
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div className="space-y-1">
                  <CardTitle className="text-lg font-semibold">
                    {invoice.description}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <CalendarDays className="h-4 w-4" />
                    Due {format(new Date(invoice.dueDate), 'MMM dd, yyyy')}
                    {isOverdue && (
                      <span className="text-red-500 font-medium ml-2">
                        (Overdue)
                      </span>
                    )}
                  </p>
                </div>
                <div className="text-2xl font-bold text-navy-900">
                  {formatCurrency(invoice.amount)}
                </div>
              </CardHeader>

              <CardFooter className="bg-muted/30 pt-4 mt-4 flex justify-end">
                <LoadingButton
                  onClick={() => payInvoice(invoice.id)}
                  isLoading={isRedirecting}
                  className="w-full sm:w-auto"
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Pay Securely via Stripe
                </LoadingButton>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
