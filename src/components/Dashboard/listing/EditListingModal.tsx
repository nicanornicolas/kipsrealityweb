'use client'

import React, { useState, useEffect } from 'react'
import { Building2, DollarSign, FileText, Calendar, AlertCircle, CheckCircle, XCircle, Edit, Eye, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ListingStatus, UnitWithListingStatus, UpdateListingData } from '@/lib/listing-types'

interface EditListingModalProps {
  isOpen: boolean
  onClose: () => void
  listingId: string
  unit: UnitWithListingStatus
  onSave: (listingId: string, updates: UpdateListingData) => Promise<void>
  initialData?: {
    title: string
    description: string
    price: number
    availabilityDate: string
    expirationDate?: string
    status: string
  }
}

interface FormData {
  title: string
  description: string
  price: string
  availabilityDate: string
  expirationDate: string
}

interface ValidationErrors {
  title?: string
  description?: string
  price?: string
  availabilityDate?: string
  expirationDate?: string
}

interface EditPermissions {
  canEditTitle: boolean
  canEditDescription: boolean
  canEditPrice: boolean
  canEditAvailabilityDate: boolean
  canEditExpirationDate: boolean
}

export default function EditListingModal({
  isOpen,
  onClose,
  listingId,
  unit,
  onSave,
  initialData,
}: EditListingModalProps) {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    price: '',
    availabilityDate: '',
    expirationDate: '',
  })
  
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [permissions, setPermissions] = useState<EditPermissions>({
    canEditTitle: true,
    canEditDescription: true,
    canEditPrice: true,
    canEditAvailabilityDate: true,
    canEditExpirationDate: true,
  })

  // Fetch listing details when modal opens
  useEffect(() => {
    if (isOpen && listingId) {
      fetchListingDetails()
    }
  }, [isOpen, listingId])

  const fetchListingDetails = async () => {
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await fetch(`/api/listings/${listingId}/edit`)
      if (!response.ok) {
        throw new Error('Failed to fetch listing details')
      }
      
      const data = await response.json()
      
      // Set form data from fetched data
      setFormData({
        title: data.listing.title || '',
        description: data.listing.description || '',
        price: data.listing.price?.toString() || '',
        availabilityDate: data.listing.availabilityDate 
          ? new Date(data.listing.availabilityDate).toISOString().split('T')[0]
          : new Date().toISOString().split('T')[0],
        expirationDate: data.listing.expirationDate
          ? new Date(data.listing.expirationDate).toISOString().split('T')[0]
          : '',
      })
      
      // Set permissions from API
      if (data.editPermissions) {
        setPermissions(data.editPermissions)
      }
      
    } catch (err) {
      console.error('Error fetching listing details:', err)
      setError(err instanceof Error ? err.message : 'Failed to load listing details')
      
      // Fallback to initialData if provided
      if (initialData) {
        setFormData({
          title: initialData.title || '',
          description: initialData.description || '',
          price: initialData.price?.toString() || '',
          availabilityDate: initialData.availabilityDate || new Date().toISOString().split('T')[0],
          expirationDate: initialData.expirationDate || '',
        })
      }
    } finally {
      setIsLoading(false)
    }
  }

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {}

    // Title validation
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required'
    } else if (formData.title.trim().length < 3) {
      newErrors.title = 'Title must be at least 3 characters long'
    } else if (formData.title.trim().length > 100) {
      newErrors.title = 'Title must be less than 100 characters'
    }

    // Description validation
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required'
    } else if (formData.description.trim().length < 10) {
      newErrors.description = 'Description must be at least 10 characters long'
    } else if (formData.description.trim().length > 1000) {
      newErrors.description = 'Description must be less than 1000 characters'
    }

    // Price validation
    if (!formData.price.trim()) {
      newErrors.price = 'Price is required'
    } else {
      const priceNum = parseFloat(formData.price)
      if (isNaN(priceNum) || priceNum <= 0) {
        newErrors.price = 'Price must be a valid positive number'
      } else if (priceNum > 50000) {
        newErrors.price = 'Price seems unusually high. Please verify.'
      }
    }

    // Availability date validation
    if (!formData.availabilityDate) {
      newErrors.availabilityDate = 'Availability date is required'
    } else {
      const availDate = new Date(formData.availabilityDate)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      
      if (availDate < today) {
        newErrors.availabilityDate = 'Availability date cannot be in the past'
      }
    }

    // Expiration date validation (optional)
    if (formData.expirationDate) {
      const expDate = new Date(formData.expirationDate)
      const availDate = new Date(formData.availabilityDate)
      
      if (expDate <= availDate) {
        newErrors.expirationDate = 'Expiration date must be after availability date'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
    
    // Clear general error
    if (error) {
      setError(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setError(null)
    
    try {
      // Prepare updates object
      const updates: UpdateListingData = {
        title: formData.title.trim(),
        description: formData.description.trim(),
        price: parseFloat(formData.price),
      }
      
      // Only include dates if they're different from current values or if permissions allow
      if (permissions.canEditAvailabilityDate) {
        updates.availabilityDate = new Date(formData.availabilityDate)
      }
      
      if (formData.expirationDate) {
        updates.expirationDate = new Date(formData.expirationDate)
      }

      await onSave(listingId, updates)
      onClose()
    } catch (err) {
      console.error('Error saving listing:', err)
      setError(err instanceof Error ? err.message : 'Failed to save listing changes')
    } finally {
      setIsSubmitting(false)
    }
  }

  const formatCurrency = (amount?: number | string) => {
    if (!amount) return 'Not set'
    const amountNum = typeof amount === 'string' ? parseFloat(amount) : amount
    if (isNaN(amountNum)) return 'Invalid'
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amountNum)
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Not set'
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getListingStatus = () => {
    return unit.listing?.status || ListingStatus.PRIVATE
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open ? onClose() : null}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Edit className="h-5 w-5 text-blue-600" />
            Edit Listing Details
          </DialogTitle>
          <DialogDescription>
            Update the listing information for Unit {unit.unitNumber}
          </DialogDescription>
        </DialogHeader>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600 mb-4" />
            <p className="text-gray-600">Loading listing details...</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Unit Context Card */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Building2 className="h-5 w-5 text-blue-600" />
                  Unit Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-slate-600">Unit:</span>
                    <p className="text-slate-900 font-medium">{unit.unitNumber}</p>
                  </div>
                  <div>
                    <span className="font-medium text-slate-600">Current Rent:</span>
                    <p className="text-slate-900 font-medium">{formatCurrency(unit.rentAmount)}</p>
                  </div>
                  {unit.bedrooms && (
                    <div>
                      <span className="font-medium text-slate-600">Bedrooms:</span>
                      <p className="text-slate-900 font-medium">{unit.bedrooms}</p>
                    </div>
                  )}
                  {unit.bathrooms && (
                    <div>
                      <span className="font-medium text-slate-600">Bathrooms:</span>
                      <p className="text-slate-900 font-medium">{unit.bathrooms}</p>
                    </div>
                  )}
                  <div>
                    <span className="font-medium text-slate-600">Status:</span>
                    <div className="mt-1">
                      <Badge 
                        variant={
                          getListingStatus() === ListingStatus.ACTIVE 
                            ? "default" 
                            : getListingStatus() === ListingStatus.SUSPENDED 
                            ? "destructive" 
                            : "secondary"
                        }
                      >
                        {getListingStatus()}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Permission Warnings */}
            {(!permissions.canEditPrice || !permissions.canEditAvailabilityDate) && (
              <Card className="border-yellow-200 bg-yellow-50">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-yellow-800 mb-1">Editing Restrictions</h4>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        {!permissions.canEditPrice && (
                          <li>• Price cannot be changed because this unit has an active lease</li>
                        )}
                        {!permissions.canEditAvailabilityDate && (
                          <li>• Availability date cannot be changed because this unit has an active lease</li>
                        )}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Listing Details Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-green-600" />
                  Listing Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Title Field */}
                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-sm font-medium">
                      Listing Title *
                    </Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      placeholder="e.g., Unit 2A - 2BR/1BA"
                      className={errors.title ? 'border-red-500' : ''}
                      disabled={isSubmitting}
                    />
                    {errors.title && (
                      <div className="flex items-center gap-1 text-sm text-red-600">
                        <AlertCircle className="h-4 w-4" />
                        {errors.title}
                      </div>
                    )}
                    <p className="text-xs text-slate-500">
                      This will be the main headline tenants see when browsing listings
                    </p>
                  </div>

                  {/* Description Field */}
                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-sm font-medium">
                      Description *
                    </Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder="Describe the unit's features, amenities, and what makes it special..."
                      rows={4}
                      className={errors.description ? 'border-red-500' : ''}
                      disabled={isSubmitting}
                    />
                    {errors.description && (
                      <div className="flex items-center gap-1 text-sm text-red-600">
                        <AlertCircle className="h-4 w-4" />
                        {errors.description}
                      </div>
                    )}
                    <p className="text-xs text-slate-500">
                      {formData.description.length}/1000 characters
                    </p>
                  </div>

                  {/* Price Field */}
                  <div className="space-y-2">
                    <Label htmlFor="price" className="text-sm font-medium">
                      Monthly Rent *
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input
                        id="price"
                        type="number"
                        step="0.01"
                        min="0"
                        value={formData.price}
                        onChange={(e) => handleInputChange('price', e.target.value)}
                        placeholder="0.00"
                        className={`pl-10 ${errors.price ? 'border-red-500' : ''}`}
                        disabled={isSubmitting || !permissions.canEditPrice}
                      />
                    </div>
                    {errors.price && (
                      <div className="flex items-center gap-1 text-sm text-red-600">
                        <AlertCircle className="h-4 w-4" />
                        {errors.price}
                      </div>
                    )}
                    {!permissions.canEditPrice && (
                      <p className="text-xs text-yellow-600">
                        Price cannot be changed while unit has an active lease
                      </p>
                    )}
                  </div>

                  {/* Date Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Availability Date */}
                    <div className="space-y-2">
                      <Label htmlFor="availabilityDate" className="text-sm font-medium">
                        Available From *
                      </Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input
                          id="availabilityDate"
                          type="date"
                          value={formData.availabilityDate}
                          onChange={(e) => handleInputChange('availabilityDate', e.target.value)}
                          className={`pl-10 ${errors.availabilityDate ? 'border-red-500' : ''}`}
                          disabled={isSubmitting || !permissions.canEditAvailabilityDate}
                        />
                      </div>
                      {errors.availabilityDate && (
                        <div className="flex items-center gap-1 text-sm text-red-600">
                          <AlertCircle className="h-4 w-4" />
                          {errors.availabilityDate}
                        </div>
                      )}
                      {!permissions.canEditAvailabilityDate && (
                        <p className="text-xs text-yellow-600">
                          Availability date cannot be changed while unit has an active lease
                        </p>
                      )}
                    </div>

                    {/* Expiration Date */}
                    <div className="space-y-2">
                      <Label htmlFor="expirationDate" className="text-sm font-medium">
                        Listing Expires (Optional)
                      </Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input
                          id="expirationDate"
                          type="date"
                          value={formData.expirationDate}
                          onChange={(e) => handleInputChange('expirationDate', e.target.value)}
                          className={`pl-10 ${errors.expirationDate ? 'border-red-500' : ''}`}
                          disabled={isSubmitting}
                        />
                      </div>
                      {errors.expirationDate && (
                        <div className="flex items-center gap-1 text-sm text-red-600">
                          <AlertCircle className="h-4 w-4" />
                          {errors.expirationDate}
                        </div>
                      )}
                      <p className="text-xs text-slate-500">
                        Leave empty for no expiration
                      </p>
                    </div>
                  </div>

                  <Separator />

                  {/* Form Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 sm:flex-none"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Saving Changes...
                        </>
                      ) : (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Save Changes
                        </>
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={onClose}
                      disabled={isSubmitting}
                      className="flex-1 sm:flex-none"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => window.open(`/marketplace?listing=${listingId}`, '_blank')}
                      disabled={isSubmitting}
                      className="flex-1 sm:flex-none"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View on Marketplace
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Error Display */}
            {error && (
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-red-600" />
                    <p className="text-red-700">{error}</p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Current Values */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-slate-600">
                  Current Values
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-slate-600">Title:</span>
                    <p className="font-medium text-slate-900">{formData.title || 'Not set'}</p>
                  </div>
                  <div>
                    <span className="text-slate-600">Price:</span>
                    <p className="font-medium text-slate-900">{formatCurrency(formData.price)}</p>
                  </div>
                  <div>
                    <span className="text-slate-600">Available From:</span>
                    <p className="font-medium text-slate-900">{formatDate(formData.availabilityDate)}</p>
                  </div>
                  <div>
                    <span className="text-slate-600">Expires:</span>
                    <p className="font-medium text-slate-900">
                      {formData.expirationDate ? formatDate(formData.expirationDate) : 'No expiration'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

// Named export for compatibility
export { EditListingModal }