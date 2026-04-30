import { useQuery } from '@tanstack/react-query';
import { useApiMutation } from '@/hooks/use-api-mutation';

export type MaintenanceStatus =
  | 'OPEN'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | 'CLOSED'
  | 'CANCELLED';

export type MaintenancePriority =
  | 'LOW'
  | 'NORMAL'
  | 'HIGH'
  | 'URGENT'
  | 'EMERGENCY';

export type MaintenanceCategory =
  | 'PLUMBING'
  | 'ELECTRICAL'
  | 'APPLIANCE'
  | 'HVAC'
  | 'STRUCTURAL'
  | 'PEST_CONTROL'
  | 'OTHER';

export interface MaintenanceRequest {
  id: string;
  title: string;
  description: string;
  status: MaintenanceStatus;
  priority: MaintenancePriority;
  category: MaintenanceCategory;
  createdAt: string;
  vendor?: { name: string; phone?: string };
}

export interface CreateMaintenanceInput {
  title: string;
  description: string;
  priority: MaintenancePriority;
  category: MaintenanceCategory;
  imageUrl?: string;
}

export const useTenantMaintenanceRequests = () => {
  return useQuery({
    queryKey: ['tenant-maintenance'],
    queryFn: async (): Promise<MaintenanceRequest[]> => {
      const res = await fetch('/api/maintenance/tenant');
      if (!res.ok) throw new Error('Failed to fetch maintenance requests');
      const data = await res.json();
      return data.requests;
    },
  });
};

export const useSubmitMaintenance = () => {
  return useApiMutation<CreateMaintenanceInput, MaintenanceRequest>(
    async (payload) => {
      const res = await fetch('/api/maintenance/tenant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || error.error || 'Failed to submit request');
      }
      return res.json();
    },
    {
      successMessage:
        'Maintenance request submitted successfully! Your property manager will review it shortly.',
      invalidateQueries: ['tenant-maintenance'],
    },
  );
};
