// UI component for displaying lease-related listing changes and notifications
'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Home, 
  Calendar,
  Bell,
  ExternalLink
} from 'lucide-react';

interface LeaseStatusChange {
  id: string;
  leaseId: string;
  unitNumber: string;
  propertyName: string;
  previousStatus: string;
  newStatus: string;
  timestamp: Date;
  listingAction: 'REMOVED' | 'PROMPT_SENT' | 'NOTIFICATION_SENT' | 'NO_ACTION';
  reason: string;
}

interface LeaseIntegrationPanelProps {
  propertyId?: string;
  unitId?: string;
  className?: string;
}

export function LeaseIntegrationPanel({ 
  propertyId, 
  unitId, 
  className 
}: LeaseIntegrationPanelProps) {
  const [statusChanges, setStatusChanges] = useState<LeaseStatusChange[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLeaseStatusChanges();
  }, [propertyId, unitId]);

  const fetchLeaseStatusChanges = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (propertyId) params.append('propertyId', propertyId);
      if (unitId) params.append('unitId', unitId);

      const response = await fetch(`/api/lease/status-changes?${params}`);
      if (!response.ok) {
        throw new Error('Failed to fetch lease status changes');
      }

      const data = await response.json();
      setStatusChanges(data.changes || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return 'default';
      case 'EXPIRED':
      case 'TERMINATED':
        return 'destructive';
      case 'SIGNED':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  const getActionIcon = (action: string) => {
    switch (action) {
      case 'REMOVED':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'PROMPT_SENT':
        return <Bell className="h-4 w-4 text-blue-600" />;
      case 'NOTIFICATION_SENT':
        return <Bell className="h-4 w-4 text-yellow-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-400" />;
    }
  };

  const getActionDescription = (action: string, status: string) => {
    switch (action) {
      case 'REMOVED':
        return 'Listing automatically removed from marketplace';
      case 'PROMPT_SENT':
        return 'Listing decision prompt sent to property manager';
      case 'NOTIFICATION_SENT':
        return status === 'SIGNED' 
          ? 'Notification sent about upcoming listing removal'
          : 'Notification sent about listing change';
      default:
        return 'No listing action required';
    }
  };

  const formatTimestamp = (timestamp: Date) => {
    return new Date(timestamp).toLocaleString();
  };

  if (loading) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Home className="h-5 w-5" />
            Lease Integration Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Home className="h-5 w-5" />
            Lease Integration Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              Error loading lease integration activity: {error}
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Home className="h-5 w-5" />
          Lease Integration Activity
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Recent lease status changes and their impact on marketplace listings
        </p>
      </CardHeader>
      <CardContent>
        {statusChanges.length === 0 ? (
          <div className="text-center py-8">
            <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-muted-foreground">No recent lease activity</p>
          </div>
        ) : (
          <div className="space-y-4">
            {statusChanges.map((change) => (
              <div key={change.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">
                        Unit {change.unitNumber}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {change.propertyName}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {formatTimestamp(change.timestamp)}
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Status:</span>
                    <Badge variant={getStatusBadgeVariant(change.previousStatus)}>
                      {change.previousStatus}
                    </Badge>
                    <span className="text-muted-foreground">→</span>
                    <Badge variant={getStatusBadgeVariant(change.newStatus)}>
                      {change.newStatus}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  {getActionIcon(change.listingAction)}
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      {getActionDescription(change.listingAction, change.newStatus)}
                    </p>
                    {change.reason && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {change.reason}
                      </p>
                    )}
                  </div>
                </div>

                {change.listingAction === 'PROMPT_SENT' && (
                  <div className="mt-3 pt-3 border-t">
                    <Alert>
                      <Bell className="h-4 w-4" />
                      <AlertDescription>
                        A listing decision is required for this unit. Check your email or visit the unit management page to make your decision.
                      </AlertDescription>
                    </Alert>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <Separator className="my-4" />

        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={fetchLeaseStatusChanges}
            disabled={loading}
          >
            Refresh Activity
          </Button>
          
          {(propertyId || unitId) && (
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2"
              onClick={() => {
                const url = unitId 
                  ? `/property-manager/units/${unitId}`
                  : `/property-manager/view-property/${propertyId}`;
                window.open(url, '_blank');
              }}
            >
              <ExternalLink className="h-4 w-4" />
              View Details
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default LeaseIntegrationPanel;