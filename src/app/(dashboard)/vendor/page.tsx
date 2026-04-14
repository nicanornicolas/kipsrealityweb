'use client';

import { useAuth } from '@/context/AuthContext';
import { useDashboard } from '@/context/DashboardContext';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { EmptyState } from '@/components/ui/empty-state';
import {
  Calendar,
  Clock,
  DollarSign,
  FileText,
  Home,
  MessageSquare,
  Settings,
  Wrench,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  HardHat,
} from 'lucide-react';
import { ConstructionState } from '@/components/ui/construction-state';
import { useRouter } from 'next/navigation';

export default function VendorDashboard() {
  const { user } = useAuth();
  const {} = useDashboard();

  return (
    <ConstructionState
      title="Vendor Dashboard"
      description="The vendor portal is currently under development. Soon you'll be able to manage work orders, invoices, and more."
      icon={<HardHat className="h-12 w-12 text-muted-foreground" />}
      action={{
        label: 'Go to Home',
        onClick: () => (window.location.href = '/'),
      }}
    />
  );
}
