import { ServiceFormData, Category } from '../../type';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LoadingButton } from '@/components/ui/loading-button';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { X, Palette } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  serviceForm: ServiceFormData;
  categories: Category[];
  onClose: () => void;
  onSave: () => void;
  onChange: (field: keyof ServiceFormData, value: string | number | string[]) => void;
  isSaving?: boolean;
}

export default function ServiceModal({
  isOpen,
  serviceForm,
  categories,
  onClose,
  onSave,
  onChange,
  isSaving = false,
}: ServiceModalProps) {
  const featuresValue = Array.isArray(serviceForm.features)
    ? serviceForm.features.join(', ')
    : serviceForm.features;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl border-border/60 bg-background p-0 shadow-xl" showCloseButton={false}>
        <DialogHeader className="border-b border-border/60 px-6 py-5 text-left">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <DialogTitle className="text-2xl font-semibold tracking-tight">
                {serviceForm.id ? 'Edit Service' : 'Add Service'}
              </DialogTitle>
              <DialogDescription>
                Update service details and keep the category catalog consistent.
              </DialogDescription>
            </div>

            <Button variant="ghost" size="icon-sm" onClick={onClose} aria-label="Close dialog">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-5 px-6 py-5">
          <div className="space-y-2">
            <Label htmlFor="service-name">Name</Label>
            <Input
              id="service-name"
              placeholder="Enter service name"
              value={serviceForm.name}
              onChange={(e) => onChange('name', e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="service-description">Description</Label>
            <Textarea
              id="service-description"
              placeholder="Enter service description"
              value={serviceForm.description}
              onChange={(e) => onChange('description', e.target.value)}
              rows={4}
            />
          </div>

          <div className="grid gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <div className="space-y-2">
              <Label htmlFor="service-features">Features</Label>
              <Input
                id="service-features"
                placeholder="Enter features, comma separated"
                value={featuresValue}
                onChange={(e) => onChange('features', e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                Separate multiple features with commas.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="service-icon" className="inline-flex items-center gap-2">
                <Palette className="h-4 w-4" />
                Icon
              </Label>
              <Input
                id="service-icon"
                placeholder="Emoji or icon text"
                value={serviceForm.icon}
                onChange={(e) => onChange('icon', e.target.value)}
                className="text-center text-2xl"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="service-impact">Impact</Label>
            <Textarea
              id="service-impact"
              placeholder="Enter service impact"
              value={serviceForm.impact}
              onChange={(e) => onChange('impact', e.target.value)}
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label>Category</Label>
            <Select
              value={serviceForm.categoryId ? String(serviceForm.categoryId) : ''}
              onValueChange={(value) => onChange('categoryId', Number(value))}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={String(category.id)}>
                    <span className="inline-flex items-center gap-2">
                      <span
                        className="h-3 w-3 rounded-full border border-border"
                        style={{ backgroundColor: category.color }}
                      />
                      {category.name}
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter className="border-t border-border/60 px-6 py-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <LoadingButton onClick={onSave} isLoading={isSaving}>
            Save Service
          </LoadingButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
