"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useAuth } from "@/context/AuthContext";

export interface MaintenanceRequest {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  category?: string;
  createdAt: string;
  updatedAt?: string;
  completedDate?: string;
  property?: {
    name: string;
    address: string;
  };
  unit?: {
    unitNumber: string;
    unitName?: string;
  };
  requestedBy?: {
    user: {
      firstName: string;
      lastName: string;
      email: string;
    };
  };
}

type UseMaintenanceRequestsState = {
  requests: MaintenanceRequest[];
  loading: boolean;
  error: string | null;
  count: number;
  refetch: () => Promise<void>;
  createRequest: (data: CreateMaintenanceRequestData) => Promise<{ success: boolean; error?: string }>;
};

export interface CreateMaintenanceRequestData {
  title: string;
  description: string;
  priority: "LOW" | "NORMAL" | "HIGH" | "URGENT";
  category?: "EMERGENCY" | "URGENT" | "ROUTINE" | "STANDARD";
  mediaUrls?: string[];
}

export function useMaintenanceRequests(propertyId?: string, unitId?: string): UseMaintenanceRequestsState {
  const [requests, setRequests] = useState<MaintenanceRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  const refetch = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Get tenant's maintenance requests
      const res = await fetch("/api/maintenance/tenant", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Failed to fetch maintenance requests");
      }

      setRequests(Array.isArray(data.requests) ? data.requests : []);
    } catch (err) {
      setRequests([]);
      setError(err instanceof Error ? err.message : "Unknown error");
      console.error("Error fetching maintenance requests:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const createRequest = useCallback(async (data: CreateMaintenanceRequestData) => {
    try {
      setLoading(true);
      
      // Get user's organization and active lease info
      // This would be enhanced with actual user context in a real implementation
      const res = await fetch("/api/maintenance/tenant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          // These would come from user's active lease context
          propertyId,
          unitId,
        }),
      });

      const responseData = await res.json();

      if (!res.ok) {
        throw new Error(responseData?.error || "Failed to create maintenance request");
      }

      // Refresh the requests list
      await refetch();
      return { success: true };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to create maintenance request";
      setError(errorMessage);
      console.error("Error creating maintenance request:", err);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, [propertyId, unitId, refetch]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  const count = useMemo(() => requests.length, [requests]);

  return {
    requests,
    loading,
    error,
    count,
    refetch,
    createRequest,
  };
}

