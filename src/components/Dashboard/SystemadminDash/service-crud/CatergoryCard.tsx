import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Category, Service } from '../../type';
import ServiceCard from './ServiceCard';
import { PencilLine, Plus, Trash2 } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
  onEditCategory: (category: Category) => void;
  onDeleteCategory: (id: number) => void;
  onAddService: (category: Category) => void;
  onEditService: (category: Category, service: Service) => void;
  onDeleteService: (id: number) => void;
}

export default function CategoryCard({
  category,
  onEditCategory,
  onDeleteCategory,
  onAddService,
  onEditService,
  onDeleteService,
}: CategoryCardProps) {
  return (
    <Card
      className="flex h-full flex-col border-2 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
      style={{ borderColor: category.color }}
    >
      <div
        className="border-b px-5 py-5 sm:px-6"
        style={{ backgroundColor: `${category.color}12`, borderColor: category.color }}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 space-y-2">
            <div className="flex items-center gap-2">
              <div
                className="h-3 w-3 shrink-0 rounded-full border border-border"
                style={{ backgroundColor: category.color }}
              />
              <Badge variant="outline" className="rounded-md">
                {category.services.length} services
              </Badge>
            </div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl" style={{ color: category.color }}>
              {category.name}
            </h2>
            <p className="text-sm leading-6 text-muted-foreground">
              {category.tagline}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-1">
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => onEditCategory(category)}
              aria-label={`Edit ${category.name}`}
              className="hover:bg-background/80"
            >
              <PencilLine className="h-4 w-4" style={{ color: category.color }} />
            </Button>
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => onDeleteCategory(category.id)}
              aria-label={`Delete ${category.name}`}
            >
              <Trash2 className="h-4 w-4 text-destructive" />
            </Button>
          </div>
        </div>
      </div>

      <CardContent className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-base font-semibold text-foreground sm:text-lg">
            Services
          </h3>
          <Button
            size="sm"
            onClick={() => onAddService(category)}
            className="w-full sm:w-auto"
            style={{ backgroundColor: category.color }}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Service
          </Button>
        </div>

        {category.services.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border bg-muted/20 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              No services yet. Add your first service.
            </p>
          </div>
        ) : (
          <div className="grid gap-3">
            {category.services.map((service: any) => (
              <ServiceCard
                key={service.id}
                service={service}
                onEdit={(srv: any) => onEditService(category, srv)}
                onDelete={onDeleteService}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}