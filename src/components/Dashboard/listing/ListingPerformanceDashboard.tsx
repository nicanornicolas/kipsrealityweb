"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RefreshCcw, BarChart3, TrendingUp, Activity, Users } from "lucide-react";

interface StatusDistribution {
  status: string;
  count: number;
  percentage: number;
}

interface PropertyPerformanceReport {
  propertyId: string;
  propertyName: string;
  totalUnits: number;
  listedUnits: number;
  privateUnits: number;
  averageDaysToLease: number;
  totalApplications: number;
  conversionRate: number;
  totalRevenue: number;
  occupancyRate: number;
}

interface ListingAnalytics {
  totalListings: number;
  activeListings: number;
  averageDaysListed: number;
  totalApplications: number;
  overallConversionRate: number;
  statusDistribution: StatusDistribution[];
  topPerformingProperties: PropertyPerformanceReport[];
}

export function ListingPerformanceDashboard() {
  const [data, setData] = useState<ListingAnalytics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchAnalytics = async () => {
    try {
      setError(null);
      const response = await fetch("/api/listings/analytics");
      if (!response.ok) {
        throw new Error("Failed to load listing analytics");
      }
      const payload = await response.json();
      setData(payload.data || null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load analytics");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchAnalytics();
  };

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="h-4 bg-gray-200 rounded w-24 mb-2" />
                <div className="h-8 bg-gray-200 rounded w-16" />
              </CardContent>
            </Card>
          ))}
        </div>
        <Card>
          <CardContent className="p-6">
            <div className="h-6 bg-gray-200 rounded w-48 mb-4" />
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="h-10 bg-gray-200 rounded" />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-red-600">{error}</p>
            <Button variant="outline" size="sm" onClick={handleRefresh}>
              <RefreshCcw className="w-4 h-4 mr-2" />
              Retry
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!data) {
    return (
      <Card>
        <CardContent className="p-6 text-sm text-gray-600">
          No analytics data available yet.
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Listing Performance</h2>
          <p className="text-sm text-gray-600">Marketplace performance and conversion overview</p>
        </div>
        <Button variant="outline" size="sm" onClick={handleRefresh} disabled={refreshing}>
          <RefreshCcw className="w-4 h-4 mr-2" />
          {refreshing ? "Refreshing..." : "Refresh"}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Listings</p>
                <p className="text-2xl font-bold">{data.totalListings}</p>
              </div>
              <BarChart3 className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Listings</p>
                <p className="text-2xl font-bold text-green-600">{data.activeListings}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Days Listed</p>
                <p className="text-2xl font-bold">{data.averageDaysListed.toFixed(1)}</p>
              </div>
              <Activity className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Conversion Rate</p>
                <p className="text-2xl font-bold text-purple-600">
                  {data.overallConversionRate.toFixed(1)}%
                </p>
              </div>
              <Users className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Status Distribution</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {data.statusDistribution.length === 0 ? (
              <p className="text-sm text-gray-500">No status data available.</p>
            ) : (
              data.statusDistribution.map((status) => (
                <div key={status.status} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{status.status}</Badge>
                    <span className="text-sm text-gray-600">{status.count} listings</span>
                  </div>
                  <span className="text-sm font-medium">{status.percentage.toFixed(1)}%</span>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Top Performing Properties</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {data.topPerformingProperties.length === 0 ? (
              <p className="text-sm text-gray-500">No performance data available.</p>
            ) : (
              data.topPerformingProperties.map((property) => (
                <div key={property.propertyId} className="border rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{property.propertyName}</p>
                      <p className="text-xs text-gray-500">
                        {property.listedUnits} listed of {property.totalUnits} units
                      </p>
                    </div>
                    <Badge variant="secondary">{property.conversionRate.toFixed(1)}% conversion</Badge>
                  </div>
                  <div className="mt-2 flex items-center gap-4 text-xs text-gray-500">
                    <span>Occupancy: {property.occupancyRate.toFixed(1)}%</span>
                    <span>Avg days to lease: {property.averageDaysToLease.toFixed(1)}</span>
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
