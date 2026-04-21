'use client';

interface PropertyOption {
  id: string;
  name: string;
}

interface DashboardFiltersProps {
  properties: PropertyOption[];
  selectedProperty: string;
  selectedTimeRange: string;
  onPropertyChange: (propertyId: string) => void;
  onTimeRangeChange: (timeRange: string) => void;
}

export function DashboardFilters({
  properties,
  selectedProperty,
  selectedTimeRange,
  onPropertyChange,
  onTimeRangeChange,
}: DashboardFiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <label className="flex items-center gap-2 text-sm text-slate-600">
        <span className="font-medium">Property</span>
        <select
          value={selectedProperty}
          onChange={(e) => onPropertyChange(e.target.value)}
          className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500"
        >
          <option value="all">All Properties</option>
          {properties.map((property) => (
            <option key={property.id} value={property.id}>
              {property.name}
            </option>
          ))}
        </select>
      </label>

      <label className="flex items-center gap-2 text-sm text-slate-600">
        <span className="font-medium">Range</span>
        <select
          value={selectedTimeRange}
          onChange={(e) => onTimeRangeChange(e.target.value)}
          className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500"
        >
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
          <option value="6m">Last 6 months</option>
          <option value="12m">Last 12 months</option>
          <option value="all">All time</option>
        </select>
      </label>
    </div>
  );
}
