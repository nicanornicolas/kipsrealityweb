'use client';

import { useState } from 'react';
import { differenceInDays, format } from 'date-fns';
import { AlertTriangle, FileText, Home } from 'lucide-react';
import { useActiveLease, useLeaseAction } from '@/hooks/queries/use-tenant-lease';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { LoadingButton } from '@/components/ui/loading-button';
import { Skeleton } from '@/components/ui/skeleton';
import { EmptyState } from '@/components/ui/empty-state';

export default function RenewTerminatePage() {
  const { data: lease, isLoading, isError } = useActiveLease();
  const { mutate: submitAction, isPending } = useLeaseAction();
  const [actionType, setActionType] = useState<'RENEW' | 'TERMINATE' | null>(
    null,
  );

  if (isLoading) {
    return <Skeleton className="h-[300px] w-full max-w-2xl mx-auto" />;
  }

  if (isError) {
    return (
      <EmptyState
        icon={<AlertTriangle />}
        title="Error"
        description="Could not load your lease details."
      />
    );
  }

  if (!lease) {
    return (
      <EmptyState
        icon={<Home />}
        title="No Active Lease"
        description="You do not have an active lease requiring action."
      />
    );
  }

  const daysUntilExpiry = differenceInDays(new Date(lease.endDate), new Date());
  const isExpiringSoon = daysUntilExpiry <= 60 && daysUntilExpiry >= 0;

  const handleAction = (action: 'RENEW' | 'TERMINATE') => {
    setActionType(action);
    submitAction(
      { leaseId: lease.id, action },
      {
        onSuccess: () => setActionType(null),
        onError: () => setActionType(null),
      },
    );
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold tracking-tight text-navy-900">
        Lease Actions
      </h1>

      <Card className={isExpiringSoon ? 'border-amber-500 border-2' : ''}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            {lease.property.address} {lease.unit && `Apt ${lease.unit.unitNumber}`}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4 bg-muted/50 p-4 rounded-lg">
            <div>
              <p className="text-sm text-muted-foreground">Lease Start</p>
              <p className="font-medium">
                {format(new Date(lease.startDate), 'MMM dd, yyyy')}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Lease End</p>
              <p className="font-medium flex items-center gap-2">
                {format(new Date(lease.endDate), 'MMM dd, yyyy')}
                {isExpiringSoon && (
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                    {daysUntilExpiry} days left
                  </span>
                )}
              </p>
            </div>
          </div>

          {!isExpiringSoon ? (
            <p className="text-sm text-muted-foreground">
              Your lease is not currently in the renewal window (60 days prior
              to expiration).
            </p>
          ) : (
            <p className="text-sm text-navy-900 font-medium">
              Your lease is expiring soon. Please let your property manager know
              your intentions.
            </p>
          )}
        </CardContent>

        {isExpiringSoon && (
          <CardFooter className="flex gap-4 pt-4 border-t bg-muted/20">
            <LoadingButton
              variant="outline"
              className="w-full border-red-200 text-red-700 hover:bg-red-50"
              isLoading={isPending && actionType === 'TERMINATE'}
              onClick={() => handleAction('TERMINATE')}
              disabled={isPending && actionType !== 'TERMINATE'}
            >
              Notice to Vacate
            </LoadingButton>
            <LoadingButton
              className="w-full bg-primary"
              isLoading={isPending && actionType === 'RENEW'}
              onClick={() => handleAction('RENEW')}
              disabled={isPending && actionType !== 'RENEW'}
            >
              Request Renewal
            </LoadingButton>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
