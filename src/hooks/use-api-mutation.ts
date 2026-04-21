import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

interface MutationOptions {
  successMessage?: string;
  invalidateQueries?: string[];
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
}

export function useApiMutation<TVariables, TData>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: MutationOptions,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,
    onSuccess: (data) => {
      if (options?.successMessage) {
        toast.success(options.successMessage);
      }
      if (options?.invalidateQueries) {
        options.invalidateQueries.forEach((queryKey) => {
          queryClient.invalidateQueries({ queryKey: [queryKey] });
        });
      }
      if (options?.onSuccess) options.onSuccess(data);
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.message || error.message || 'An error occurred';
      toast.error(message);
      if (options?.onError) options.onError(error);
    },
  });
}
