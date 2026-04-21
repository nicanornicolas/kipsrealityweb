import { LucideIcon, HardHat } from 'lucide-react';
import { Button } from './button';

interface ConstructionStateProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function ConstructionState({
  title,
  description,
  icon,
  action,
}: ConstructionStateProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center">
      <div className="rounded-full bg-muted p-4 mb-4">
        {icon || <HardHat className="h-12 w-12 text-muted-foreground" />}
      </div>
      <h2 className="text-xl font-semibold text-foreground mb-2">{title}</h2>
      {description && (
        <p className="text-muted-foreground mb-6 max-w-md">{description}</p>
      )}
      {action && (
        <Button onClick={action.onClick} variant="outline">
          {action.label}
        </Button>
      )}
    </div>
  );
}
