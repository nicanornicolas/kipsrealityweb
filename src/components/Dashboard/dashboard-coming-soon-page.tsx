'use client';

import { ConstructionState } from '@/components/ui/construction-state';
import { HardHat } from 'lucide-react';

interface DashboardComingSoonPageProps {
  title: string;
  description: string;
}

export function DashboardComingSoonPage({ title, description }: DashboardComingSoonPageProps) {
  return (
    <ConstructionState
      title={title}
      description={description}
      icon={<HardHat className="h-12 w-12 text-muted-foreground" />}
      action={{
        label: 'Back to Dashboard',
        onClick: () => {
          window.history.back();
        },
      }}
    />
  );
}
