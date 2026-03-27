'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Save, Zap, Droplet } from 'lucide-react';
import { toast } from 'sonner';

interface UnitMeter {
  unitId: string;
  unitNumber: string;
  meterType: 'ELECTRICITY' | 'WATER';
  meterNumber: string;
  previousReading: number;
}

interface Props {
  propertyId: string;
}

const MOCK_METERS: UnitMeter[] = [
  { unitId: 'u1', unitNumber: 'A1', meterType: 'ELECTRICITY', meterNumber: 'KPLC-10492', previousReading: 12450 },
  { unitId: 'u2', unitNumber: 'A2', meterType: 'ELECTRICITY', meterNumber: 'KPLC-10493', previousReading: 8320 },
];

export function MeterReadingsTable({ propertyId }: Props) {
  const [currentReadings, setCurrentReadings] = useState<Record<string, string>>({});
  const [isSaving, setIsSaving] = useState(false);

  const handleReadingChange = (unitId: string, val: string) => {
    setCurrentReadings((prev) => ({ ...prev, [unitId]: val }));
  };

  const handleSaveReadings = async () => {
    setIsSaving(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success('Meter readings saved successfully! Consumption calculated.');
      setCurrentReadings({});
    } catch (error) {
      toast.error('Failed to save readings.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="border rounded-lg bg-white shadow-sm overflow-hidden">
      <div className="p-6 border-b flex justify-between items-center bg-slate-50">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">Current Month Meter Readings</h3>
          <p className="text-sm text-slate-500">
            Enter the latest readings from sub-meters to calculate tenant consumption.
          </p>
          <p className="text-xs text-slate-400 mt-1">Property ID: {propertyId}</p>
        </div>
        <Button onClick={handleSaveReadings} disabled={isSaving} className="bg-blue-600 hover:bg-blue-700">
          <Save className="mr-2 h-4 w-4" /> {isSaving ? 'Saving...' : 'Save Readings'}
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-100 border-b">
            <tr>
              <th className="p-4 font-medium text-sm text-slate-600">Unit</th>
              <th className="p-4 font-medium text-sm text-slate-600">Meter Info</th>
              <th className="p-4 font-medium text-sm text-slate-600">Prev. Reading</th>
              <th className="p-4 font-medium text-sm text-slate-600">Current Reading</th>
              <th className="p-4 font-medium text-sm text-slate-600">Consumption</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {MOCK_METERS.map((meter) => {
              const currentVal = Number(currentReadings[meter.unitId]) || 0;
              const consumption = currentVal > 0 ? currentVal - meter.previousReading : 0;

              return (
                <tr key={meter.unitId} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-semibold text-slate-800">{meter.unitNumber}</td>
                  <td className="p-4">
                    <div className="flex items-center text-sm">
                      {meter.meterType === 'ELECTRICITY' ? (
                        <Zap className="h-4 w-4 mr-2 text-yellow-500" />
                      ) : (
                        <Droplet className="h-4 w-4 mr-2 text-blue-500" />
                      )}
                      <span className="font-medium text-slate-700">{meter.meterNumber}</span>
                    </div>
                  </td>
                  <td className="p-4 text-slate-500">{meter.previousReading.toLocaleString()} kWh</td>
                  <td className="p-4">
                    <input
                      type="number"
                      min={meter.previousReading}
                      placeholder="Enter reading..."
                      value={currentReadings[meter.unitId] || ''}
                      onChange={(e) => handleReadingChange(meter.unitId, e.target.value)}
                      className="border rounded-md p-2 w-32 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </td>
                  <td className="p-4">
                    {consumption > 0 ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {consumption.toLocaleString()} kWh
                      </span>
                    ) : (
                      <span className="text-slate-400 text-sm">-</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
