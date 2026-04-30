'use client';

import { useEffect, useMemo, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface SignatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (typedName: string) => Promise<void> | void;
  submitting?: boolean;
}

const scriptFontOptions = [
  '"Caveat", cursive',
  '"Dancing Script", cursive',
  '"Pacifico", cursive',
];

export function SignatureModal({ isOpen, onClose, onSubmit, submitting = false }: SignatureModalProps) {
  const [typedName, setTypedName] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setTypedName('');
    }
  }, [isOpen]);

  const activePreviewFont = useMemo(() => {
    const index = typedName.length % scriptFontOptions.length;
    return scriptFontOptions[index];
  }, [typedName]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Apply Signature</DialogTitle>
        </DialogHeader>

        <div className="space-y-3 py-2">
          <label className="block text-sm font-medium text-slate-700">Type your legal name</label>
          <input
            value={typedName}
            onChange={(event) => setTypedName(event.target.value)}
            placeholder="e.g. Jane Doe"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
            <p className="text-xs text-amber-700">Signature preview</p>
            <p
              className="mt-2 text-2xl text-slate-900"
              style={{ fontFamily: activePreviewFont }}
            >
              {typedName || 'Your signature will appear here'}
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button type="button" variant="outline" onClick={onClose} disabled={submitting}>
            Cancel
          </Button>
          <Button
            type="button"
            onClick={() => onSubmit(typedName.trim())}
            disabled={submitting || typedName.trim().length === 0}
          >
            {submitting ? 'Applying...' : 'Apply Signature'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
