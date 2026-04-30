'use client';

import { useEffect, useState } from 'react';
import { Eye, Loader2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { api } from '@/lib/api-client';

interface DocumentPreviewModalProps {
  documentId: string | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function DocumentPreviewModal({
  documentId,
  isOpen,
  onClose,
}: DocumentPreviewModalProps) {
  const [viewUrl, setViewUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen || !documentId) {
      setViewUrl(null);
      setError(null);
      return;
    }

    const fetchSecureUrl = async () => {
      setIsLoading(true);
      setError(null);
      setViewUrl(null);

      try {
        const res = await api.get<{ success: boolean; document?: { viewUrl?: string; originalFileUrl?: string }; error?: string }>(
          `/api/dss/documents/${documentId}/view`,
        );
        const data = res.data;

        if (res.error || !data?.success) {
          throw new Error(data?.error || res.error || 'Failed to load document');
        }

        const secureUrl = data?.document?.viewUrl || data?.document?.originalFileUrl;
        if (!secureUrl) {
          throw new Error('No preview URL available for this document');
        }

        setViewUrl(secureUrl);
      } catch (err: unknown) {
        const message =
          err instanceof Error ? err.message : 'Failed to load document preview';
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSecureUrl();
  }, [isOpen, documentId]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="flex h-[90vh] w-full max-w-5xl flex-col rounded-lg bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b p-4">
          <h3 className="flex items-center gap-2 text-lg font-semibold">
            <Eye className="h-5 w-5 text-blue-600" />
            Document Preview
          </h3>
          <Button variant="ghost" size="sm" onClick={onClose} aria-label="Close preview">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="relative flex-1 bg-gray-100 p-4">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
              <Loader2 className="mb-2 h-8 w-8 animate-spin" />
              <p>Decrypting secure document...</p>
            </div>
          )}

          {error && !isLoading && (
            <div className="absolute inset-0 flex items-center justify-center px-6 text-center font-medium text-red-500">
              {error}
            </div>
          )}

          {viewUrl && !isLoading && !error && (
            <iframe
              src={`${viewUrl}#toolbar=0`}
              className="h-full w-full rounded border-0 shadow-md"
              title="Secure Document Preview"
            />
          )}
        </div>
      </div>
    </div>
  );
}
