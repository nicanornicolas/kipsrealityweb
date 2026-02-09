// Property Deactivation Panel Component
// Provides UI for property deactivation and recovery operations

'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  RefreshCw, 
  Users, 
  Home, 
  FileText,
  Clock
} from 'lucide-react';

interface PropertyDeactivationPanelProps {
  propertyId: string;
  propertyName: string;
  isDeactivated?: boolean;
  unitsCount?: number;
  activeListingsCount?: number;
  onDeactivationComplete?: (result: any) => void;
  onRecoveryComplete?: (result: any) => void;
}

interface DeactivationResult {
  success: boolean;
  unitsAffected: number;
  listingsRemoved: number;
  applicationsAffected: number;
  notificationsSent: number;
  canRecover: boolean;
  error?: string;
}

interface RecoveryInfo {
  canRecover: boolean;
  unitsAffected?: number;
  listingsToRestore?: number;
  applicationsAffected?: number;
  deactivationDate?: string;
}

export default function PropertyDeactivationPanel({
  propertyId,
  propertyName,
  isDeactivated = false,
  unitsCount = 0,
  activeListingsCount = 0,
  onDeactivationComplete,
  onRecoveryComplete
}: PropertyDeactivationPanelProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [reason, setReason] = useState('');
  const [notifyPropertyManagers, setNotifyPropertyManagers] = useState(true);
  const [notifyTenants, setNotifyTenants] = useState(true);
  const [gracePeriodHours, setGracePeriodHours] = useState(0);
  const [result, setResult] = useState<DeactivationResult | null>(null);
  const [recoveryInfo, setRecoveryInfo] = useState<RecoveryInfo | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Load recovery info if property is deactivated
  React.useEffect(() => {
    if (isDeactivated) {
      loadRecoveryInfo();
    }
  }, [isDeactivated, propertyId]);

  const loadRecoveryInfo = async () => {
    try {
      const response = await fetch(`/api/properties/${propertyId}/recover`);
      if (response.ok) {
        const data = await response.json();
        setRecoveryInfo(data);
      }
    } catch (error) {
      console.error('Error loading recovery info:', error);
    }
  };

  const handleDeactivate = async () => {
    if (!reason.trim()) {
      alert('Please provide a reason for deactivation');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`/api/properties/${propertyId}/deactivate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          reason: reason.trim(),
          notifyPropertyManagers,
          notifyTenants,
          gracePeriodHours
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        const deactivationResult: DeactivationResult = {
          success: true,
          unitsAffected: data.data.unitsAffected,
          listingsRemoved: data.data.listingsRemoved,
          applicationsAffected: data.data.applicationsAffected,
          notificationsSent: data.data.notificationsSent,
          canRecover: data.data.canRecover
        };
        
        setResult(deactivationResult);
        setShowConfirmation(false);
        onDeactivationComplete?.(deactivationResult);
      } else {
        setResult({
          success: false,
          unitsAffected: 0,
          listingsRemoved: 0,
          applicationsAffected: 0,
          notificationsSent: 0,
          canRecover: false,
          error: data.message || 'Deactivation failed'
        });
      }
    } catch (error) {
      setResult({
        success: false,
        unitsAffected: 0,
        listingsRemoved: 0,
        applicationsAffected: 0,
        notificationsSent: 0,
        canRecover: false,
        error: 'Network error occurred'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRecover = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/properties/${propertyId}/recover`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          reason: 'Property recovered from accidental deactivation'
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        const recoveryResult = {
          success: true,
          unitsRestored: data.data.unitsRestored,
          listingsRestored: data.data.listingsRestored,
          notificationsSent: data.data.notificationsSent
        };
        
        setResult(null);
        setRecoveryInfo(null);
        onRecoveryComplete?.(recoveryResult);
      } else {
        alert(data.message || 'Recovery failed');
      }
    } catch (error) {
      alert('Network error occurred during recovery');
    } finally {
      setIsLoading(false);
    }
  };

  if (isDeactivated) {
    return (
      <Card className="border-orange-200 bg-orange-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-800">
            <AlertTriangle className="h-5 w-5" />
            Property Deactivated
          </CardTitle>
          <CardDescription>
            This property has been deactivated and all listings have been removed from the marketplace.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {recoveryInfo && recoveryInfo.canRecover && (
            <>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Home className="h-4 w-4 text-gray-500" />
                  <span>Units Affected: {recoveryInfo.unitsAffected}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-gray-500" />
                  <span>Listings to Restore: {recoveryInfo.listingsToRestore}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-500" />
                  <span>Applications Affected: {recoveryInfo.applicationsAffected}</span>
                </div>
                {recoveryInfo.deactivationDate && (
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span>Deactivated: {new Date(recoveryInfo.deactivationDate).toLocaleDateString()}</span>
                  </div>
                )}
              </div>
              
              <Separator />
              
              <div className="flex gap-2">
                <Button 
                  onClick={handleRecover}
                  disabled={isLoading}
                  className="bg-green-600 hover:bg-green-700"
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                      Recovering...
                    </>
                  ) : (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Recover Property
                    </>
                  )}
                </Button>
              </div>
            </>
          )}
          
          {recoveryInfo && !recoveryInfo.canRecover && (
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                Recovery is not available for this property. Recovery data may have expired or been cleared.
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-red-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-red-800">
          <AlertTriangle className="h-5 w-5" />
          Property Deactivation
        </CardTitle>
        <CardDescription>
          Deactivate this property and remove all associated listings from the marketplace.
          This action affects all units and active applications.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Current Property Stats */}
        <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{unitsCount}</div>
            <div className="text-sm text-gray-600">Total Units</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{activeListingsCount}</div>
            <div className="text-sm text-gray-600">Active Listings</div>
          </div>
        </div>

        {/* Deactivation Form */}
        {!showConfirmation && !result && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="reason">Reason for Deactivation *</Label>
              <Textarea
                id="reason"
                placeholder="Explain why this property is being deactivated..."
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="mt-1"
                rows={3}
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="notify-managers">Notify Property Managers</Label>
                <Switch
                  id="notify-managers"
                  checked={notifyPropertyManagers}
                  onCheckedChange={setNotifyPropertyManagers}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="notify-tenants">Notify Affected Tenants</Label>
                <Switch
                  id="notify-tenants"
                  checked={notifyTenants}
                  onCheckedChange={setNotifyTenants}
                />
              </div>
              
              <div>
                <Label htmlFor="grace-period">Grace Period (hours)</Label>
                <Input
                  id="grace-period"
                  type="number"
                  min="0"
                  max="168"
                  value={gracePeriodHours}
                  onChange={(e) => setGracePeriodHours(parseInt(e.target.value) || 0)}
                  className="mt-1"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Optional delay before deactivation takes effect (0-168 hours)
                </p>
              </div>
            </div>

            <Button 
              onClick={() => setShowConfirmation(true)}
              disabled={!reason.trim()}
              variant="destructive"
              className="w-full"
            >
              <AlertTriangle className="h-4 w-4 mr-2" />
              Deactivate Property
            </Button>
          </div>
        )}

        {/* Confirmation Dialog */}
        {showConfirmation && !result && (
          <div className="space-y-4 p-4 border-2 border-red-200 rounded-lg bg-red-50">
            <div className="flex items-center gap-2 text-red-800 font-semibold">
              <AlertTriangle className="h-5 w-5" />
              Confirm Property Deactivation
            </div>
            
            <div className="text-sm text-red-700">
              <p className="font-medium mb-2">This action will:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Remove all {activeListingsCount} active listings from the marketplace</li>
                <li>Disable tenant applications for all {unitsCount} units</li>
                <li>Cancel any pending applications</li>
                <li>Send notifications to affected parties</li>
              </ul>
            </div>

            <div className="bg-white p-3 rounded border">
              <p className="text-sm"><strong>Reason:</strong> {reason}</p>
            </div>

            <div className="flex gap-2">
              <Button 
                onClick={handleDeactivate}
                disabled={isLoading}
                variant="destructive"
                className="flex-1"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    Deactivating...
                  </>
                ) : (
                  'Confirm Deactivation'
                )}
              </Button>
              <Button 
                onClick={() => setShowConfirmation(false)}
                variant="outline"
                disabled={isLoading}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}

        {/* Results Display */}
        {result && (
          <div className={`p-4 rounded-lg border-2 ${
            result.success 
              ? 'border-green-200 bg-green-50' 
              : 'border-red-200 bg-red-50'
          }`}>
            <div className={`flex items-center gap-2 font-semibold mb-3 ${
              result.success ? 'text-green-800' : 'text-red-800'
            }`}>
              {result.success ? (
                <CheckCircle className="h-5 w-5" />
              ) : (
                <XCircle className="h-5 w-5" />
              )}
              {result.success ? 'Property Deactivated Successfully' : 'Deactivation Failed'}
            </div>

            {result.success ? (
              <div className="space-y-2 text-sm text-green-700">
                <div className="grid grid-cols-2 gap-4">
                  <div>Units Affected: <Badge variant="secondary">{result.unitsAffected}</Badge></div>
                  <div>Listings Removed: <Badge variant="secondary">{result.listingsRemoved}</Badge></div>
                  <div>Applications Affected: <Badge variant="secondary">{result.applicationsAffected}</Badge></div>
                  <div>Notifications Sent: <Badge variant="secondary">{result.notificationsSent}</Badge></div>
                </div>
                
                {result.canRecover && (
                  <Alert className="mt-3">
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      Recovery data has been saved. You can restore this property if the deactivation was accidental.
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            ) : (
              <div className="text-sm text-red-700">
                <p>{result.error}</p>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
// Named export for compatibility
export { PropertyDeactivationPanel }