"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Wrench, Play, Square, Calendar, AlertTriangle, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

interface MaintenanceModeStatus {
  isInMaintenance: boolean;
  maintenanceRequestId?: string;
  canRestore: boolean;
  estimatedEndDate?: string;
}

interface MaintenanceModeUnit {
  unitId: string;
  unitNumber: string;
  propertyName: string;
  maintenanceRequestId?: string;
  startDate: string;
  estimatedEndDate?: string;
  reason: string;
}

interface MaintenanceModePanelProps {
  unitId?: string;
  organizationId?: string;
  onStatusChange?: () => void;
}

export function MaintenanceModePanel({ unitId, organizationId, onStatusChange }: MaintenanceModePanelProps) {
  const [status, setStatus] = useState<MaintenanceModeStatus | null>(null);
  const [units, setUnits] = useState<MaintenanceModeUnit[]>([]);
  const [loading, setLoading] = useState(false);
  const [showStartDialog, setShowStartDialog] = useState(false);
  const [showEndDialog, setShowEndDialog] = useState(false);
  const [reason, setReason] = useState('');
  const [estimatedEndDate, setEstimatedEndDate] = useState('');

  // Load maintenance status
  useEffect(() => {
    loadMaintenanceStatus();
  }, [unitId, organizationId]);

  const loadMaintenanceStatus = async () => {
    try {
      setLoading(true);
      
      if (unitId) {
        // Load status for specific unit
        const response = await fetch(`/api/maintenance/listing-integration?unitId=${unitId}`);
        if (response.ok) {
          const data = await response.json();
          setStatus(data);
        }
      } else if (organizationId) {
        // Load all units in maintenance mode for organization
        const response = await fetch(`/api/maintenance/listing-integration?organizationId=${organizationId}`);
        if (response.ok) {
          const data = await response.json();
          setUnits(data.units || []);
        }
      }
    } catch (error) {
      console.error('Error loading maintenance status:', error);
      toast.error('Failed to load maintenance status');
    } finally {
      setLoading(false);
    }
  };

  const startMaintenanceMode = async () => {
    if (!unitId || !reason.trim()) {
      toast.error('Unit ID and reason are required');
      return;
    }

    try {
      setLoading(true);
      
      const response = await fetch('/api/maintenance/listing-integration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'start',
          unitId,
          reason: reason.trim(),
          estimatedEndDate: estimatedEndDate || undefined,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success('Maintenance mode started successfully');
        setShowStartDialog(false);
        setReason('');
        setEstimatedEndDate('');
        await loadMaintenanceStatus();
        onStatusChange?.();
      } else {
        toast.error(data.error || 'Failed to start maintenance mode');
      }
    } catch (error) {
      console.error('Error starting maintenance mode:', error);
      toast.error('Failed to start maintenance mode');
    } finally {
      setLoading(false);
    }
  };

  const endMaintenanceMode = async (targetUnitId?: string) => {
    const targetUnit = targetUnitId || unitId;
    if (!targetUnit) {
      toast.error('Unit ID is required');
      return;
    }

    try {
      setLoading(true);
      
      const response = await fetch('/api/maintenance/listing-integration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'end',
          unitId: targetUnit,
          reason: reason.trim() || 'Maintenance completed',
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success('Maintenance mode ended successfully');
        setShowEndDialog(false);
        setReason('');
        await loadMaintenanceStatus();
        onStatusChange?.();
      } else {
        toast.error(data.error || 'Failed to end maintenance mode');
      }
    } catch (error) {
      console.error('Error ending maintenance mode:', error);
      toast.error('Failed to end maintenance mode');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Single unit view
  if (unitId && status !== null) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="h-5 w-5" />
            Maintenance Mode
          </CardTitle>
          <CardDescription>
            Manage unit availability during maintenance periods
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Status:</span>
              <Badge variant={status.isInMaintenance ? "destructive" : "secondary"}>
                {status.isInMaintenance ? (
                  <>
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    In Maintenance
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Available
                  </>
                )}
              </Badge>
            </div>
            
            <div className="flex gap-2">
              {!status.isInMaintenance ? (
                <AlertDialog open={showStartDialog} onOpenChange={setShowStartDialog}>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Play className="h-4 w-4 mr-1" />
                      Start Maintenance
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Start Maintenance Mode</AlertDialogTitle>
                      <AlertDialogDescription>
                        This will temporarily remove the unit from marketplace listings.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="reason">Reason for Maintenance</Label>
                        <Textarea
                          id="reason"
                          placeholder="Describe the maintenance work being performed..."
                          value={reason}
                          onChange={(e) => setReason(e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="endDate">Estimated End Date (Optional)</Label>
                        <Input
                          id="endDate"
                          type="datetime-local"
                          value={estimatedEndDate}
                          onChange={(e) => setEstimatedEndDate(e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={startMaintenanceMode}
                        disabled={!reason.trim() || loading}
                      >
                        {loading ? 'Starting...' : 'Start Maintenance'}
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              ) : (
                status.canRestore && (
                  <AlertDialog open={showEndDialog} onOpenChange={setShowEndDialog}>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Square className="h-4 w-4 mr-1" />
                        End Maintenance
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>End Maintenance Mode</AlertDialogTitle>
                        <AlertDialogDescription>
                          This will restore the unit to marketplace listings.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="endReason">Completion Notes (Optional)</Label>
                          <Textarea
                            id="endReason"
                            placeholder="Add any notes about the completed maintenance..."
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            className="mt-1"
                          />
                        </div>
                      </div>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => endMaintenanceMode()}
                          disabled={loading}
                        >
                          {loading ? 'Ending...' : 'End Maintenance'}
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                )
              )}
            </div>
          </div>

          {status.isInMaintenance && status.estimatedEndDate && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Estimated completion: {formatDate(status.estimatedEndDate)}</span>
            </div>
          )}
        </CardContent>
      </Card>
    );
  }

  // Organization overview
  if (organizationId) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="h-5 w-5" />
            Units in Maintenance Mode
          </CardTitle>
          <CardDescription>
            Overview of all units currently under maintenance
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-4">Loading...</div>
          ) : units.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <CheckCircle className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p>No units currently in maintenance mode</p>
            </div>
          ) : (
            <div className="space-y-3">
              {units.map((unit) => (
                <div
                  key={unit.unitId}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{unit.unitNumber}</span>
                      <Badge variant="outline">{unit.propertyName}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{unit.reason}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Started: {formatDate(unit.startDate)}</span>
                      {unit.estimatedEndDate && (
                        <span>Est. End: {formatDate(unit.estimatedEndDate)}</span>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => endMaintenanceMode(unit.unitId)}
                    disabled={loading}
                  >
                    <Square className="h-4 w-4 mr-1" />
                    End Maintenance
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    );
  }

  return null;
}