'use client';

import { useRouter } from 'next/navigation';
import { useTenantMaintenanceRequests } from '@/hooks/queries/use-tenant-maintenance';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { EmptyState } from '@/components/ui/empty-state';
import {
  AlertCircle,
  CheckCircle2,
  ClipboardList,
  Clock,
} from 'lucide-react';
import { format } from 'date-fns';

export default function TrackProgressPage() {
  const router = useRouter();
  const { data: requests, isLoading, isError } = useTenantMaintenanceRequests();

  if (isLoading) return <Skeleton className="h-[400px] w-full rounded-md" />;

  if (isError || !requests) {
    return (
      <EmptyState
        icon={<AlertCircle />}
        title="Error"
        description="Could not load your maintenance requests."
      />
    );
  }

  if (requests.length === 0) {
    return (
      <EmptyState
        icon={<ClipboardList className="h-12 w-12 text-muted-foreground" />}
        title="No Active Requests"
        description="You don't have any open maintenance requests. Need something fixed?"
        action={{
          label: 'Submit Request',
          onClick: () => router.push('/tenant/submit-request'),
        }}
      />
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'OPEN':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'IN_PROGRESS':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'COMPLETED':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'CLOSED':
      case 'CANCELLED':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <h1 className="text-2xl font-bold tracking-tight text-navy-900">
        Track Maintenance
      </h1>

      <div className="grid gap-4">
        {requests.map((req) => (
          <Card key={req.id} className="overflow-hidden">
            <div
              className={`h-1 w-full ${
                req.status === 'COMPLETED' ? 'bg-green-500' : 'bg-primary'
              }`}
            />
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{req.category}</Badge>
                    {req.priority === 'EMERGENCY' || req.priority === 'URGENT' ? (
                      <Badge variant="destructive">Urgent</Badge>
                    ) : null}
                  </div>
                  <CardTitle className="text-xl mt-2">{req.title}</CardTitle>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    Submitted {format(new Date(req.createdAt), 'MMM dd, yyyy')}
                  </p>
                </div>
                <Badge className={getStatusColor(req.status)} variant="outline">
                  {req.status.replace('_', ' ')}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 line-clamp-2">{req.description}</p>

              {req.vendor && req.status === 'IN_PROGRESS' && (
                <div className="mt-4 p-3 bg-muted/50 rounded-md flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>
                    Assigned to <strong>{req.vendor.name}</strong>. They will
                    contact you shortly.
                  </span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
