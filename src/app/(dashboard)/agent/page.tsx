'use client';

import { EmptyState } from '@/components/ui/empty-state';
import { Users } from 'lucide-react';

export default function AgentDashboardPage() {
  return (
    <div className="p-6">
      <EmptyState
        icon={<Users className="h-10 w-10 text-muted-foreground" />}
        title="Agent Dashboard"
        description="No properties, tenants, or conversations are assigned yet. Once assignments are available, your metrics and workflows will appear here."
      />
    </div>
  );
}
