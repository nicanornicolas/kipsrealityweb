'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { useSubmitMaintenance } from '@/hooks/queries/use-tenant-maintenance';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { FormInput } from '@/components/ui/form-input';
import { LoadingButton } from '@/components/ui/loading-button';
import { Wrench } from 'lucide-react';

const maintenanceSchema = z.object({
  title: z
    .string()
    .min(5, 'Title is too short')
    .max(100, 'Title must be under 100 characters'),
  category: z.enum(
    [
      'PLUMBING',
      'ELECTRICAL',
      'APPLIANCE',
      'HVAC',
      'STRUCTURAL',
      'PEST_CONTROL',
      'OTHER',
    ],
    {
      required_error: 'Please select a category',
    },
  ),
  priority: z.enum(['LOW', 'NORMAL', 'HIGH', 'URGENT', 'EMERGENCY']),
  description: z
    .string()
    .min(10, 'Please provide more details so we can help faster.'),
});

type MaintenanceFormValues = z.infer<typeof maintenanceSchema>;

export default function SubmitRequestPage() {
  const router = useRouter();
  const { mutate: submitRequest, isPending } = useSubmitMaintenance();

  const form = useForm<MaintenanceFormValues>({
    resolver: zodResolver(maintenanceSchema),
    defaultValues: {
      title: '',
      category: 'OTHER',
      priority: 'NORMAL',
      description: '',
    },
  });

  const onSubmit = (data: MaintenanceFormValues) => {
    submitRequest(data, {
      onSuccess: () => {
        form.reset();
        router.push('/tenant/track-progress');
      },
    });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-primary/10 rounded-full text-primary">
          <Wrench className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-navy-900">Request Maintenance</h1>
          <p className="text-muted-foreground">
            Submit a new work order to your property manager.
          </p>
        </div>
      </div>

      <Card>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4 pt-6">
            <FormInput
              label="Issue Title"
              placeholder="e.g., Leaking kitchen sink"
              {...form.register('title')}
              error={form.formState.errors.title?.message}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-navy-900">Category</label>
                <select
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  {...form.register('category')}
                >
                  <option value="PLUMBING">Plumbing</option>
                  <option value="ELECTRICAL">Electrical</option>
                  <option value="HVAC">Heating & Air (HVAC)</option>
                  <option value="APPLIANCE">Appliance Repair</option>
                  <option value="STRUCTURAL">Structural</option>
                  <option value="PEST_CONTROL">Pest Control</option>
                  <option value="OTHER">Other</option>
                </select>
                {form.formState.errors.category && (
                  <p className="text-xs text-red-500">
                    {form.formState.errors.category.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-navy-900">Priority</label>
                <select
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  {...form.register('priority')}
                >
                  <option value="LOW">Low (Cosmetic)</option>
                  <option value="NORMAL">Normal</option>
                  <option value="HIGH">High</option>
                  <option value="URGENT">Urgent</option>
                  <option value="EMERGENCY">Emergency</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-navy-900">
                Detailed Description
              </label>
              <textarea
                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="Please describe the issue, when it started, and any troubleshooting you've already tried."
                {...form.register('description')}
              />
              {form.formState.errors.description && (
                <p className="text-xs text-red-500">
                  {form.formState.errors.description.message}
                </p>
              )}
            </div>
          </CardContent>
          <CardFooter className="bg-muted/30 pt-4 flex justify-end rounded-b-lg">
            <LoadingButton type="submit" isLoading={isPending}>
              Submit Request
            </LoadingButton>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
