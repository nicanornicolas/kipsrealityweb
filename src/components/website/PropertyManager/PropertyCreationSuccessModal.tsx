'use client'

import React, { useState } from 'react'
import { CheckCircle, Eye, EyeOff, Lock } from 'lucide-react'
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog'

interface PropertyCreationSuccessModalProps {
  isOpen: boolean
  onClose: () => void
  propertyId: string | null
  imageCount: number
  onViewPropertyAnalytics: (propertyId: string) => void
  onReturnToDashboard: () => void
  onAddAnotherProperty: () => void
}

export default function PropertyCreationSuccessModal({
  isOpen,
  onClose,
  propertyId,
  imageCount,
  onViewPropertyAnalytics,
  onReturnToDashboard,
  onAddAnotherProperty, // Not used in new UI but kept for prop compatibility
}: PropertyCreationSuccessModalProps) {
  const [selection, setSelection] = useState<'list' | 'private'>('list')

  const handleConfirm = () => {
    if (selection === 'list') {
      if (propertyId) {
        onViewPropertyAnalytics(propertyId)
      } else {
        onReturnToDashboard()
      }
    } else {
      // selection === 'private'
      onReturnToDashboard()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-0 overflow-hidden bg-white dark:bg-slate-900 border-none rounded-[32px] shadow-2xl">
        <div className="w-9 h-1.5 bg-gray-300 dark:bg-slate-700 rounded-full mx-auto mt-3 mb-1" />

        <div className="px-6 pb-8 pt-2">
          <header className="text-center mb-8">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Choose an Option</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1">
              Decide how you want to manage your property
            </p>
          </header>

          <div className="space-y-4">
            <button
              onClick={() => setSelection('list')}
              className={`w-full text-left p-5 rounded-3xl border-2 transition-all duration-200 active:scale-[0.98] group ${selection === 'list'
                  ? 'ring-2 ring-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 border-transparent'
                  : 'border-transparent bg-white dark:bg-slate-800 shadow-sm'
                }`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/40 rounded-2xl text-emerald-600 dark:text-emerald-400">
                  <Eye className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center justify-between">
                    List on Marketplace
                    <span className="text-xs font-semibold bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 px-2.5 py-1 rounded-full">
                      Recommended
                    </span>
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Make this unit visible to potential tenants immediately.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />
                      Appear in marketplace searches
                    </li>
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />
                      Tenants can submit applications
                    </li>
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />
                      Increased visibility and inquiries
                    </li>
                  </ul>
                </div>
              </div>
            </button>

            <button
              onClick={() => setSelection('private')}
              className={`w-full text-left p-5 rounded-3xl border-2 transition-all duration-200 active:scale-[0.98] ${selection === 'private'
                  ? 'ring-2 ring-indigo-600 bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700'
                  : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm'
                }`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded-2xl text-slate-500 dark:text-slate-400">
                  <EyeOff className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Keep Private</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Keep this unit private for now. You can list it later.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <Lock className="w-5 h-5 text-slate-400 mr-2" />
                      Unit remains in your dashboard
                    </li>
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <Lock className="w-5 h-5 text-slate-400 mr-2" />
                      No public marketplace visibility
                    </li>
                  </ul>
                </div>
              </div>
            </button>
          </div>

          <div className="mt-8 space-y-3">
            <button
              onClick={handleConfirm}
              className={`w-full py-4 font-semibold rounded-2xl transition-all shadow-lg ${selection === 'list'
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-200 dark:shadow-none'
                  : 'bg-slate-900 dark:bg-white dark:text-slate-900 text-white'
                }`}
            >
              {selection === 'list' ? 'List on Marketplace' : 'Keep Private'}
            </button>
            <button
              onClick={onClose}
              className="w-full py-3 text-slate-500 dark:text-slate-400 font-medium hover:text-slate-700 dark:hover:text-white transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}