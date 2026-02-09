'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { api } from '@/lib/api-client';

interface PendingLease {
  id: string;
  tenant?: {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
  } | null;
  unit: {
    unitNumber: string;
  };
  property: {
    name: string | null;
  };
  rentAmount: number;
  startDate: string;
  leaseStatus: string | null;
}

// Helper function for safe tenant name display
const getTenantName = (tenant?: { firstName?: string | null; lastName?: string | null } | null): string => {
  if (!tenant) return "Unknown Tenant";
  const firstName = tenant.firstName || "";
  const lastName = tenant.lastName || "";
  const name = [firstName, lastName].filter(Boolean).join(" ");
  return name || "Unknown Tenant";
};

export function PendingLeasesCard() {
  const [leases, setLeases] = useState<PendingLease[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPendingLeases();
  }, []);

  async function fetchPendingLeases() {
    try {
      setLoading(true);
      setError(null);
      
      const result = await api.get<{ success: boolean; leases: PendingLease[] }>('/api/lease/pending');

      if (result.error) {
        // Handle API client errors (including 401 redirects)
        if (result.status === 401) {
          // The api client already handled redirect, but we can set error message
          setError('Session expired. Please log in again.');
          return;
        }
        throw new Error(result.error);
      }

      if (!result.data?.success) {
        throw new Error('Failed to fetch pending leases');
      }

      setLeases(result.data.leases || []);
    } catch (err) {
      // Only set error if it's not a 401 (which already redirected)
      if (err instanceof Error && !err.message.includes('Session expired')) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleActivateLease(leaseId: string) {
    if (!confirm('Activate this lease? This will generate the first invoice and mark the unit as occupied.')) {
      return;
    }

    try {
      const result = await api.post<{ success: boolean; error?: string }>(
        `/api/lease/${leaseId}/sign/landlord`,
        {}
      );

      if (result.error) {
        // Handle API client errors (including 401 redirects)
        if (result.status === 401) {
          alert('Session expired. Please log in again.');
          return;
        }
        alert(`Activation failed: ${result.error}`);
        return;
      }

      if (!result.data?.success) {
        alert('Activation failed: Unknown error');
        return;
      }

      alert('Lease activated successfully!');
      fetchPendingLeases(); // Refresh the list
    } catch (err) {
      // Only show alert if it's not a 401 (which already redirected)
      if (err instanceof Error && !err.message.includes('Session expired')) {
        alert(`Error: ${err.message}`);
      }
    }
  }

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Pending Leases</CardTitle>
          <CardDescription>Loading pending leases...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-32">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Pending Leases</CardTitle>
          <CardDescription className="text-red-600">Error: {error}</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pending Leases</CardTitle>
        <CardDescription>
          {leases.length === 0 
            ? 'No pending leases requiring activation' 
            : `${leases.length} lease${leases.length === 1 ? '' : 's'} awaiting landlord signature`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {leases.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p>All leases are processed!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {leases.map((lease) => (
              <div
                key={lease.id}
                className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-lg">
                        {getTenantName(lease.tenant)}
                      </h3>
                      <Badge variant="secondary">{lease.leaseStatus}</Badge>
                    </div>
                    
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>
                        <span className="font-medium">Property:</span> {lease.property.name || 'Unnamed Property'}
                      </p>
                      <p>
                        <span className="font-medium">Unit:</span> {lease.unit.unitNumber}
                      </p>
                      <p>
                        <span className="font-medium">Rent:</span> ${lease.rentAmount.toLocaleString()}/month
                      </p>
                      <p>
                        <span className="font-medium">Start Date:</span>{' '}
                        {new Date(lease.startDate).toLocaleDateString()}
                      </p>
                      <p>
                        <span className="font-medium">Email:</span> {lease.tenant?.email || 'N/A'}
                      </p>
                    </div>
                  </div>

                  <div className="ml-4">
                    <button
                      onClick={() => handleActivateLease(lease.id)}
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm font-medium"
                    >
                      Activate Lease
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Refresh Button */}
        {leases.length > 0 && (
          <div className="mt-4 flex justify-end">
            <button
              onClick={fetchPendingLeases}
              className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
            >
              Refresh
            </button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}