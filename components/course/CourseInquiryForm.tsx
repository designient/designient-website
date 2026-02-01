'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'react-feather'

interface CourseInquiryFormProps {
  courseSlug?: string
  courseName?: string
  compact?: boolean
}

const availabilityOptions = [
  'Weekday Batches',
  'Weekend Batches',
  'Flexible'
]

const cities = [
  'Bangalore',
  'Hyderabad',
  'Pune',
  'Online',
  'Other'
]

import { CountryCodeSelect, validatePhoneNumber } from '../shared/CountryCodeSelect'

export function CourseInquiryForm({ courseSlug, courseName, compact = false }: CourseInquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    phoneCountryCode: '+91',
    whatsappCountryCode: '+91',
    whatsapp: '',
    availability: '',
    city: '',
    courseInterest: courseSlug || ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  // Map course slugs to inquiry form values
  const courseSlugMap: Record<string, string> = {
    'ui-ux-design-bootcamp': 'bootcamp',
    'ui-ux-design-pro': 'pro',
    'ui-ux-design-master': 'master',
    'prompt-engineering-mastery': 'prompt'
  }



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (submitStatus === 'error') {
      setSubmitStatus('idle')
      setErrorMessage('')
    }
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage('Name is required')
      return false
    }
    if (!formData.email.trim()) {
      setErrorMessage('Email is required')
      return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address')
      return false
    }
    if (!formData.phone.trim()) {
      setErrorMessage('Phone number is required')
      return false
    } else {
      const phoneValidation = validatePhoneNumber(formData.phone, formData.phoneCountryCode)
      if (!phoneValidation.valid) {
        setErrorMessage(phoneValidation.error || 'Please enter a valid phone number')
        return false
      }
    }
    if (!formData.whatsapp.trim()) {
      setErrorMessage('WhatsApp number is required')
      return false
    } else {
      const whatsappValidation = validatePhoneNumber(formData.whatsapp, formData.whatsappCountryCode)
      if (!whatsappValidation.valid) {
        setErrorMessage(whatsappValidation.error ? `WhatsApp: ${whatsappValidation.error}` : 'Please enter a valid WhatsApp number')
        return false
      }
    }
    if (!formData.availability) {
      setErrorMessage('Please select your availability')
      return false
    }
    if (!formData.city) {
      setErrorMessage('Please select your city')
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phoneCountryCode: formData.phoneCountryCode,
          phone: formData.phone,
          whatsappCountryCode: formData.whatsappCountryCode,
          whatsapp: formData.whatsapp,
          courseInterest: courseSlug && courseSlugMap[courseSlug] ? courseSlugMap[courseSlug] : formData.courseInterest,
        }),
      })

      let data
      const responseText = await response.text()

      try {
        data = responseText ? JSON.parse(responseText) : {}
      } catch (jsonError) {
        console.error('Failed to parse response as JSON:', {
          error: jsonError,
          status: response.status,
          statusText: response.statusText,
          responseText: responseText
        })
        setSubmitStatus('error')
        setErrorMessage('Something went wrong. Please try again.')
        return
      }

      if (response.ok && data.success) {
        setSubmitStatus('success')
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            phoneCountryCode: '+91',
            whatsappCountryCode: '+91',
            whatsapp: '',
            availability: '',
            city: '',
            courseInterest: courseSlug && courseSlugMap[courseSlug] ? courseSlugMap[courseSlug] : ''
          })
          setSubmitStatus('idle')
        }, 3000)
      } else {
        console.error('API error response:', {
          status: response.status,
          statusText: response.statusText,
          data: data,
          responseText: responseText
        })
        setSubmitStatus('error')
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`bg-white rounded-xl ${compact ? 'p-4 md:p-6' : 'p-6 md:p-8'} shadow-lg border border-gray-100`}>
      {!compact && (
        <div className="text-center mb-6">
          <h3 className="font-display font-bold mb-2" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', color: '#1a1a1a' }}>
            Start Your Application
          </h3>
          <p className="font-body text-sm" style={{ color: '#6b7280' }}>
            Fill in your details and we'll get back to you within 24 hours
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 rounded-lg border-2 font-body text-sm transition-colors focus:outline-none focus:ring-2 h-[44px]"
            style={{
              borderColor: '#e5e7eb',
              backgroundColor: 'white',
              color: '#1a1a1a',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#8458B3')}
            onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
          />
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email Address"
            required
            className="w-full px-4 py-3 rounded-lg border-2 font-body text-sm transition-colors focus:outline-none focus:ring-2 h-[44px]"
            style={{
              borderColor: '#e5e7eb',
              backgroundColor: 'white',
              color: '#1a1a1a',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#8458B3')}
            onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
          />
        </div>

        {/* Phone */}
        <div>
          <div className="flex gap-2">
            <CountryCodeSelect
              value={formData.phoneCountryCode}
              onChange={(code) => setFormData(prev => ({ ...prev, phoneCountryCode: code }))}
              id="phoneCountryCode"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone Number"
              required
              className="w-full px-4 py-3 rounded-lg border-2 font-body text-sm transition-colors focus:outline-none focus:ring-2 h-[44px]"
              style={{
                borderColor: '#e5e7eb',
                backgroundColor: 'white',
                color: '#1a1a1a',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#8458B3')}
              onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
            />
          </div>
        </div>

        {/* WhatsApp */}
        <div>
          <div className="flex gap-2">
            <CountryCodeSelect
              value={formData.whatsappCountryCode}
              onChange={(code) => setFormData(prev => ({ ...prev, whatsappCountryCode: code }))}
              id="whatsappCountryCode"
            />
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleInputChange}
              placeholder="WhatsApp Number"
              required
              className="flex-1 px-4 py-3 rounded-lg border-2 font-body text-sm transition-colors focus:outline-none focus:ring-2 h-[44px]"
              style={{
                borderColor: '#e5e7eb',
                backgroundColor: 'white',
                color: '#1a1a1a',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#8458B3')}
              onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
            />
          </div>
        </div>

        {/* Availability */}
        <div>
          <select
            name="availability"
            value={formData.availability}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 rounded-lg border-2 font-body text-sm transition-colors focus:outline-none focus:ring-2 h-[44px]"
            style={{
              borderColor: '#e5e7eb',
              backgroundColor: 'white',
              color: formData.availability ? '#1a1a1a' : '#9ca3af',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#8458B3')}
            onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
          >
            <option value="">Select Availability</option>
            {availabilityOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* City */}
        <div>
          <select
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 rounded-lg border-2 font-body text-sm transition-colors focus:outline-none focus:ring-2 h-[44px]"
            style={{
              borderColor: '#e5e7eb',
              backgroundColor: 'white',
              color: formData.city ? '#1a1a1a' : '#9ca3af',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#8458B3')}
            onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
          >
            <option value="">Select City</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        {/* Error Message */}
        {submitStatus === 'error' && errorMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 p-3 rounded-lg"
            style={{ backgroundColor: '#fef2f2', color: '#ef4444' }}
          >
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p className="font-body text-sm">{errorMessage}</p>
          </motion.div>
        )}

        {/* Success Message */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 p-3 rounded-lg"
            style={{ backgroundColor: '#f0fdf4', color: '#10b981' }}
          >
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <p className="font-body text-sm">Thank you! We'll get back to you within 24 hours.</p>
          </motion.div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 rounded-lg font-body font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed min-h-[44px]"
          style={{
            backgroundColor: '#8458B3',
            color: 'white',
          }}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Apply Now
              <Send className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </div>
  )
}
