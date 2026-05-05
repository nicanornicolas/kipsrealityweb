'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FormInput } from '@/components/ui/form-input';
import { LoadingButton } from '@/components/ui/loading-button';

interface SignatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (typedName: string) => Promise<void> | void;
  submitting?: boolean;
  participantName?: string;
}

const scriptFontOptions = [
  '"Caveat", cursive',
  '"Dancing Script", cursive',
  '"Pacifico", cursive',
];

export function SignatureModal({
  isOpen,
  onClose,
  onSubmit,
  submitting = false,
  participantName = '',
}: SignatureModalProps) {
  const [typedName, setTypedName] = useState('');

  useEffect(() => {
    if (isOpen) {
      setTypedName(participantName || '');
      return;
    }
    setTypedName('');
  }, [isOpen, participantName]);

  const activePreviewFont = useMemo(() => {
    const index = typedName.length % scriptFontOptions.length;
    return scriptFontOptions[index];
  }, [typedName]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Sign Document</DialogTitle>
          <DialogDescription>
            Type your full legal name to apply your electronic signature. This
            is legally binding.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <FormInput
            label="Full Legal Name"
            value={typedName}
            onChange={(event) => setTypedName(event.target.value)}
            placeholder="John Doe"
          />

          <div className="p-6 bg-muted/30 border rounded-lg flex items-center justify-center min-h-[100px]">
            <p
              className="text-4xl text-navy-900 select-none"
              style={{ fontFamily: activePreviewFont }}
            >
              {typedName || 'Your Signature'}
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button type="button" variant="outline" onClick={onClose} disabled={submitting}>
            Cancel
          </Button>
          <LoadingButton
            onClick={() => onSubmit(typedName.trim())}
            isLoading={submitting}
            disabled={!typedName.trim()}
          >
            Agree & Sign
          </LoadingButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
