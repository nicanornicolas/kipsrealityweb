import { CategoryFormData } from '../../type';
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
import { X, Palette } from 'lucide-react';

interface CategoryModalProps {
  isOpen: boolean;
  categoryForm: CategoryFormData;
  onClose: () => void;
  onSave: () => void;
  onChange: (field: keyof CategoryFormData, value: string) => void;
  isSaving?: boolean;
}

export default function CategoryModal({
  isOpen,
  categoryForm,
  onClose,
  onSave,
  onChange,
  isSaving = false,
}: CategoryModalProps) {
  const presetColors = [
    '#03346E', '#2196F3', '#4CAF50', '#FF9800', 
    '#F44336', '#9C27B0', '#00BCD4', '#FF5722'
  ];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-xl border-border/60 bg-background p-0 shadow-xl" showCloseButton={false}>
        <DialogHeader className="border-b border-border/60 px-6 py-5 text-left">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <DialogTitle className="text-2xl font-semibold tracking-tight">
                {categoryForm.id ? 'Edit Category' : 'Add Category'}
              </DialogTitle>
              <DialogDescription>
                Define the category identity, copy, and brand color.
              </DialogDescription>
            </div>

            <Button variant="ghost" size="icon-sm" onClick={onClose} aria-label="Close dialog">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-5 px-6 py-5">
          <div className="space-y-2">
            <Label htmlFor="category-name">Name</Label>
            <Input
              id="category-name"
              placeholder="Enter category name"
              value={categoryForm.name}
              onChange={(e) => onChange('name', e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category-tagline">Tagline</Label>
            <Textarea
              id="category-tagline"
              placeholder="Enter category tagline"
              value={categoryForm.tagline}
              onChange={(e) => onChange('tagline', e.target.value)}
              rows={3}
            />
          </div>

          <div className="space-y-3">
            <Label className="inline-flex items-center gap-2">
              <Palette className="h-4 w-4" />
              Color
            </Label>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <input
                type="color"
                value={categoryForm.color}
                onChange={(e) => onChange('color', e.target.value)}
                className="h-12 w-full cursor-pointer rounded-md border border-border bg-background p-1 sm:w-16"
                aria-label="Category color picker"
              />

              <Input
                value={categoryForm.color}
                onChange={(e) => onChange('color', e.target.value)}
                className="font-mono uppercase"
              />
            </div>

            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                Quick select
              </p>
              <div className="flex flex-wrap gap-2">
                {presetColors.map((color) => {
                  const isActive = categoryForm.color === color;

                  return (
                    <button
                      key={color}
                      type="button"
                      onClick={() => onChange('color', color)}
                      className={[
                        'h-10 w-10 rounded-md border transition-transform duration-150 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                        isActive ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : 'border-border',
                      ].join(' ')}
                      style={{ backgroundColor: color }}
                      aria-label={`Select color ${color}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="border-t border-border/60 px-6 py-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <LoadingButton onClick={onSave} isLoading={isSaving}>
            Save Category
          </LoadingButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}