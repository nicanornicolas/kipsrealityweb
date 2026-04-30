'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast, Toaster } from 'sonner';
import { FolderKanban, Plus } from 'lucide-react';

import CategoryCard from './CatergoryCard';
import CategoryModal from './CategoryModal';
import ServiceModal from './ServiceModal';
import {
  Category,
  CategoryFormData,
  ServiceFormData,
  Service,
} from '../../type';
import { useApiMutation } from '@/hooks/use-api-mutation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { EmptyState } from '@/components/ui/empty-state';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

interface Props {
  initialCategories: Category[];
}

export default function ServiceCrud({ initialCategories }: Props) {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>(
    initialCategories || [],
  );
  const [loading, setLoading] = useState(false);
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<
    | { kind: 'category'; id: number; name: string }
    | { kind: 'service'; id: number; name: string }
    | null
  >(null);

  const [categoryForm, setCategoryForm] = useState<CategoryFormData>({
    id: 0,
    name: '',
    tagline: '',
    color: '#03346E',
  });

  const [serviceForm, setServiceForm] = useState<ServiceFormData>({
    id: 0,
    categoryId: 0,
    name: '',
    description: '',
    features: [],
    impact: '',
    icon: '',
  });

  const refreshCategories = async () => {
    const response = await fetch('/api/categories');
    if (!response.ok) {
      throw new Error('Failed to refresh categories');
    }

    const data = (await response.json()) as Category[];
    setCategories(data);
    router.refresh();
  };

  const saveCategoryMutation = useApiMutation(
    async (payload: { isEdit: boolean; form: CategoryFormData }) => {
      const response = await fetch(
        payload.isEdit ? `/api/categories/${payload.form.id}` : '/api/categories',
        {
          method: payload.isEdit ? 'PUT' : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload.form),
        },
      );

      if (!response.ok) {
        throw new Error('Failed to save category');
      }

      return response.json();
    },
    { successMessage: 'Category saved successfully', invalidateQueries: ['categories'] },
  );

  const deleteCategoryMutation = useApiMutation(
    async (id: number) => {
      const response = await fetch(`/api/categories/${id}`, { method: 'DELETE' });
      if (!response.ok) {
        throw new Error('Failed to delete category');
      }
      return response.json();
    },
    { successMessage: 'Category deleted successfully', invalidateQueries: ['categories'] },
  );

  const saveServiceMutation = useApiMutation(
    async (payload: { isEdit: boolean; form: ServiceFormData }) => {
      const response = await fetch(
        payload.isEdit ? `/api/services/${payload.form.id}` : '/api/services',
        {
          method: payload.isEdit ? 'PUT' : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload.form),
        },
      );

      if (!response.ok) {
        throw new Error('Failed to save service');
      }

      return response.json();
    },
    { successMessage: 'Service saved successfully', invalidateQueries: ['services'] },
  );

  const deleteServiceMutation = useApiMutation(
    async (id: number) => {
      const response = await fetch(`/api/services/${id}`, { method: 'DELETE' });
      if (!response.ok) {
        throw new Error('Failed to delete service');
      }
      return response.json();
    },
    { successMessage: 'Service deleted successfully', invalidateQueries: ['services'] },
  );

  const openCategoryModal = (category?: Category) => {
    if (category) {
      setCategoryForm({
        id: category.id,
        name: category.name,
        tagline: category.tagline,
        color: category.color,
      });
    } else {
      setCategoryForm({ id: 0, name: '', tagline: '', color: '#03346E' });
    }
    setCategoryModalOpen(true);
  };

  const handleCategoryChange = (
    field: keyof CategoryFormData,
    value: string,
  ) => {
    setCategoryForm({ ...categoryForm, [field]: value });
  };

  const saveCategory = async () => {
    if (!categoryForm.name.trim()) {
      toast.error('Category name is required');
      return;
    }

    try {
      setLoading(true);
      await saveCategoryMutation.mutateAsync({
        isEdit: Boolean(categoryForm.id),
        form: categoryForm,
      });
      setCategoryModalOpen(false);
      await refreshCategories();
    } catch (err) {
      toast.error('Error saving category');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteCategory = async (id: number) => {

    try {
      setLoading(true);
      await deleteCategoryMutation.mutateAsync(id);
      await refreshCategories();
    } catch (err) {
      toast.error('Failed to delete category');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const openServiceModal = (category: Category, service?: Service) => {
    if (service) {
      setServiceForm({
        ...service,
        categoryId: category.id,
        features: service.features || [],
      });
    } else {
      setServiceForm({
        id: 0,
        categoryId: category.id,
        name: '',
        description: '',
        features: [],
        impact: '',
        icon: '',
      });
    }
    setServiceModalOpen(true);
  };

  const handleServiceChange = (
    field: keyof ServiceFormData,
    value: string | number | string[],
  ) => {
    setServiceForm({ ...serviceForm, [field]: value });
  };

  const saveService = async () => {
    if (!serviceForm.name.trim()) {
      toast.error('Service name is required');
      return;
    }

    const featuresArray =
      typeof serviceForm.features === 'string'
        ? (serviceForm.features as string)
            .split(',')
            .map((f) => f.trim())
            .filter(Boolean)
        : serviceForm.features;

    const form = { ...serviceForm, features: featuresArray };

    try {
      setLoading(true);
      await saveServiceMutation.mutateAsync({
        isEdit: Boolean(serviceForm.id),
        form,
      });
      setServiceModalOpen(false);
      await refreshCategories();
    } catch (err) {
      toast.error('Error saving service');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteService = async (id: number) => {

    try {
      setLoading(true);
      await deleteServiceMutation.mutateAsync(id);
      await refreshCategories();
    } catch (err) {
      toast.error('Failed to delete service');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Toaster position="top-right" />

      <Card className="border-border/60 shadow-sm">
        <CardContent className="flex flex-col gap-4 p-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Admin catalog
            </p>
            <div className="space-y-1">
              <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                Categories & Services Management
              </h1>
              <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
                Manage service categories, service cards, and supporting content from one place.
              </p>
            </div>
          </div>

          <Button size="lg" onClick={() => openCategoryModal()} className="w-full sm:w-auto">
            <Plus className="mr-2 h-4 w-4" />
            Add Category
          </Button>
        </CardContent>
      </Card>

      {loading ? (
        <div className="flex min-h-[280px] items-center justify-center rounded-xl border border-dashed border-border bg-muted/20">
          <LoadingSpinner size="lg" text="Refreshing categories" />
        </div>
      ) : categories.length === 0 ? (
        <EmptyState
          icon={<FolderKanban className="h-10 w-10 text-muted-foreground" />}
          title="No categories yet"
          description="Create your first category to get started."
          action={{ label: 'Create Category', onClick: () => openCategoryModal() }}
        />
      ) : (
        <div className="grid gap-6 xl:grid-cols-2 2xl:grid-cols-3">
          {categories.map((cat) => (
            <div key={cat.id} className="min-w-0">
              <CategoryCard
                category={cat}
                onEditCategory={openCategoryModal}
                onDeleteCategory={(id) =>
                  setDeleteTarget({ kind: 'category', id, name: cat.name })
                }
                onAddService={openServiceModal}
                onEditService={openServiceModal}
                onDeleteService={(id) => {
                  const service = cat.services.find((item) => item.id === id);
                  setDeleteTarget({
                    kind: 'service',
                    id,
                    name: service?.name || 'this service',
                  });
                }}
              />
            </div>
          ))}
        </div>
      )}

      <CategoryModal
        isOpen={categoryModalOpen}
        categoryForm={categoryForm}
        onClose={() => setCategoryModalOpen(false)}
        onSave={saveCategory}
        onChange={handleCategoryChange}
      />

      <ServiceModal
        isOpen={serviceModalOpen}
        serviceForm={serviceForm}
        categories={categories}
        onClose={() => setServiceModalOpen(false)}
        onSave={saveService}
        onChange={handleServiceChange}
        isSaving={loading}
      />

      <AlertDialog
        open={Boolean(deleteTarget)}
        onOpenChange={(open) => {
          if (!open) {
            setDeleteTarget(null);
          }
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Delete {deleteTarget?.kind === 'category' ? 'category' : 'service'}?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. The item will be permanently removed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={loading}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              disabled={loading}
              onClick={() => {
                if (!deleteTarget) {
                  return;
                }

                if (deleteTarget.kind === 'category') {
                  void deleteCategory(deleteTarget.id);
                } else {
                  void deleteService(deleteTarget.id);
                }

                setDeleteTarget(null);
              }}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
