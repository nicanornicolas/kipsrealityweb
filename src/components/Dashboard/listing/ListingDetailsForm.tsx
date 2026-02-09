'use client'

import React, { useState, useEffect } from 'react'
import { Building2, DollarSign, FileText, Calendar, AlertCircle, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { UnitWithListingStatus, CreateListingData } from '@/lib/listing-types'

interface ListingDetailsFormProps {
  unit: UnitWithListingStatus
  initialData?: Partial<CreateListingData>
  onSubmit: (listingData: CreateListingData) => Promise<void>
  onCancel: () => void
  isLoading?: boolean
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

export default function ListingDetailsForm({
  unit,
  initialData,
  onSubmit,
  onCancel,
  isLoading = false,
}: ListingDetailsFormProps) {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    price: '',
    availabilityDate: '',
    expirationDate: '',
  })
  
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Populate smart defaults from unit data
  useEffect(() => {
    const generateDefaultTitle = () => {
      if (initialData?.title) return initialData.title
      
      // Generate smart default from unit and property data
      const unitNumber = unit.unitNumber || 'Unit'
      const bedrooms = unit.bedrooms ? `${unit.bedrooms}BR` : ''
      const bathrooms = unit.bathrooms ? `${unit.bathrooms}BA` : ''
      
      const details = [bedrooms, bathrooms].filter(Boolean).join('/')
      return details ? `${unitNumber} - ${details}` : unitNumber
    }

    const generateDefaultDescription = () => {
      if (initialData?.description) return initialData.description
      
      // Generate smart default description
      const parts = []
      
      if (unit.bedrooms) {
        parts.push(`${unit.bedrooms} bedroom${unit.bedrooms > 1 ? 's' : ''}`)
      }
      
      if (unit.bathrooms) {
        parts.push(`${unit.bathrooms} bathroom${unit.bathrooms > 1 ? 's' : ''}`)
      }
      
      if (unit.squareFootage) {
        parts.push(`${unit.squareFootage} sq ft`)
      }
      
      const baseDescription = parts.length > 0 
        ? `Spacious ${parts.join(', ')} unit available for rent.`
        : 'Quality rental unit available.'
      
      return baseDescription + ' Contact us for more details and to schedule a viewing.'
    }

    const generateDefaultPrice = () => {
      if (initialData?.price) return initialData.price.toString()
      if (unit.rentAmount) return unit.rentAmount.toString()
      return ''
    }

    const generateDefaultAvailabilityDate = () => {
      if (initialData?.availabilityDate) {
        return initialData.availabilityDate.toISOString().split('T')[0]
      }
      // Default to today
      return new Date().toISOString().split('T')[0]
    }

    const generateDefaultExpirationDate = () => {
      if (initialData?.expirationDate) {
        return initialData.expirationDate.toISOString().split('T')[0]
      }
      // Default to 90 days from now
      const futureDate = new Date()
      futureDate.setDate(futureDate.getDate() + 90)
      return futureDate.toISOString().split('T')[0]
    }

    setFormData({
      title: generateDefaultTitle(),
      description: generateDefaultDescription(),
      price: generateDefaultPrice(),
      availabilityDate: generateDefaultAvailabilityDate(),
      expirationDate: generateDefaultExpirationDate(),
    })
  }, [unit, initialData])

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
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    try {
      const listingData: CreateListingData = {
        unitId: unit.id,
        title: formData.title.trim(),
        description: formData.description.trim(),
        price: parseFloat(formData.price),
        availabilityDate: new Date(formData.availabilityDate),
        expirationDate: formData.expirationDate ? new Date(formData.expirationDate) : undefined,
      }

      await onSubmit(listingData)
    } catch (error) {
      console.error('Error submitting listing details:', error)
      // Error handling is managed by parent component
    } finally {
      setIsSubmitting(false)
    }
  }

  const formatCurrency = (amount?: number) => {
    if (!amount) return 'Not set'
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount)
  }

  return (
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="font-medium text-slate-600">Unit:</span>
              <p className="text-slate-900">{unit.unitNumber}</p>
            </div>
            <div>
              <span className="font-medium text-slate-600">Current Rent:</span>
              <p className="text-slate-900">{formatCurrency(unit.rentAmount)}</p>
            </div>
            {unit.bedrooms && (
              <div>
                <span className="font-medium text-slate-600">Bedrooms:</span>
                <p className="text-slate-900">{unit.bedrooms}</p>
              </div>
            )}
            {unit.bathrooms && (
              <div>
                <span className="font-medium text-slate-600">Bathrooms:</span>
                <p className="text-slate-900">{unit.bathrooms}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

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
                disabled={isLoading || isSubmitting}
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
                disabled={isLoading || isSubmitting}
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
                  disabled={isLoading || isSubmitting}
                />
              </div>
              {errors.price && (
                <div className="flex items-center gap-1 text-sm text-red-600">
                  <AlertCircle className="h-4 w-4" />
                  {errors.price}
                </div>
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
                    disabled={isLoading || isSubmitting}
                  />
                </div>
                {errors.availabilityDate && (
                  <div className="flex items-center gap-1 text-sm text-red-600">
                    <AlertCircle className="h-4 w-4" />
                    {errors.availabilityDate}
                  </div>
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
                    disabled={isLoading || isSubmitting}
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

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
              <Button
                type="submit"
                disabled={isLoading || isSubmitting}
                className="flex-1 sm:flex-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Creating Listing...
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Create Listing
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={onCancel}
                disabled={isLoading || isSubmitting}
                className="flex-1 sm:flex-none"
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Help Text */}
      <div className="text-xs text-slate-500 bg-slate-50 p-3 rounded-lg">
        <p>
          <strong>Tip:</strong> The form has been pre-filled with smart defaults based on your unit information. 
          You can modify any field to better describe your property. Required fields are marked with an asterisk (*).
        </p>
      </div>
    </div>
  )
}

// Named export for compatibility
export { ListingDetailsForm }
