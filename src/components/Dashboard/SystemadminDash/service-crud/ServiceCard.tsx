import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Service } from '../../type';
import { PencilLine, Trash2 } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  onEdit: (service: Service) => void;
  onDelete: (id: number) => void;
}

export default function ServiceCard({ service, onEdit, onDelete }: ServiceCardProps) {
  const featureChips = service.features.filter(Boolean);

  return (
    <Card className="h-full border-border/60 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <CardContent className="space-y-4 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-start gap-3">
            {service.icon ? (
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-2xl">
                {service.icon}
              </span>
            ) : (
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-sm font-semibold text-muted-foreground">
                S
              </span>
            )}
            <div className="min-w-0 space-y-1">
              <h4 className="truncate text-base font-semibold text-foreground sm:text-lg">
                {service.name}
              </h4>
              <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
                {service.description}
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-1">
            <Button variant="ghost" size="icon-sm" onClick={() => onEdit(service)} aria-label={`Edit ${service.name}`}>
              <PencilLine className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon-sm" onClick={() => onDelete(service.id)} aria-label={`Delete ${service.name}`}>
              <Trash2 className="h-4 w-4 text-destructive" />
            </Button>
          </div>
        </div>

        {featureChips.length > 0 && (
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Features
            </p>
            <div className="flex flex-wrap gap-2">
              {featureChips.map((feature, idx) => (
                <Badge key={`${feature}-${idx}`} variant="secondary" className="rounded-md px-2 py-1 text-xs font-medium">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {service.impact && (
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-emerald-950 dark:border-emerald-900/40 dark:bg-emerald-950/30 dark:text-emerald-200">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-300">
              Impact
            </p>
            <p className="mt-1 text-sm leading-6">
              {service.impact}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}