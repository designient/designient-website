'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, ChevronDown, Search } from 'react-feather'

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

const countryCodes = [
  { code: '+91', country: 'India', flag: '🇮🇳' },
  { code: '+1', country: 'United States', flag: '🇺🇸' },
  { code: '+1', country: 'Canada', flag: '🇨🇦' },
  { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
  { code: '+61', country: 'Australia', flag: '🇦🇺' },
  { code: '+64', country: 'New Zealand', flag: '🇳🇿' },
  { code: '+971', country: 'UAE', flag: '🇦🇪' },
  { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+65', country: 'Singapore', flag: '🇸🇬' },
  { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
  { code: '+62', country: 'Indonesia', flag: '🇮🇩' },
  { code: '+66', country: 'Thailand', flag: '🇹🇭' },
  { code: '+84', country: 'Vietnam', flag: '🇻🇳' },
  { code: '+63', country: 'Philippines', flag: '🇵🇭' },
  { code: '+86', country: 'China', flag: '🇨🇳' },
  { code: '+81', country: 'Japan', flag: '🇯🇵' },
  { code: '+82', country: 'South Korea', flag: '🇰🇷' },
  { code: '+33', country: 'France', flag: '🇫🇷' },
  { code: '+49', country: 'Germany', flag: '🇩🇪' },
  { code: '+39', country: 'Italy', flag: '🇮🇹' },
  { code: '+34', country: 'Spain', flag: '🇪🇸' },
  { code: '+31', country: 'Netherlands', flag: '🇳🇱' },
  { code: '+32', country: 'Belgium', flag: '🇧🇪' },
  { code: '+41', country: 'Switzerland', flag: '🇨🇭' },
  { code: '+46', country: 'Sweden', flag: '🇸🇪' },
  { code: '+47', country: 'Norway', flag: '🇳🇴' },
  { code: '+45', country: 'Denmark', flag: '🇩🇰' },
  { code: '+358', country: 'Finland', flag: '🇫🇮' },
  { code: '+7', country: 'Russia', flag: '🇷🇺' },
  { code: '+90', country: 'Turkey', flag: '🇹🇷' },
  { code: '+20', country: 'Egypt', flag: '🇪🇬' },
  { code: '+234', country: 'Nigeria', flag: '🇳🇬' },
  { code: '+254', country: 'Kenya', flag: '🇰🇪' },
  { code: '+55', country: 'Brazil', flag: '🇧🇷' },
  { code: '+52', country: 'Mexico', flag: '🇲🇽' },
  { code: '+54', country: 'Argentina', flag: '🇦🇷' },
  { code: '+57', country: 'Colombia', flag: '🇨🇴' },
  { code: '+51', country: 'Peru', flag: '🇵🇪' },
  { code: '+56', country: 'Chile', flag: '🇨🇱' }
]

export function CourseInquiryForm({ courseSlug, courseName, compact = false }: CourseInquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsappCountryCode: '+91',
    whatsapp: '',
    availability: '',
    city: '',
    courseInterest: courseSlug || ''
  })
  const [whatsappSearch, setWhatsappSearch] = useState('')
  const [whatsappDropdownOpen, setWhatsappDropdownOpen] = useState(false)
  const whatsappDropdownRef = useRef<HTMLDivElement>(null)
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

  const selectedWhatsappCountry = countryCodes.find(c => c.code === formData.whatsappCountryCode) || countryCodes[0]
  const filteredWhatsappCountries = countryCodes.filter(country =>
    country.country.toLowerCase().includes(whatsappSearch.toLowerCase()) ||
    country.code.includes(whatsappSearch)
  )

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (whatsappDropdownRef.current && !whatsappDropdownRef.current.contains(event.target as Node)) {
        setWhatsappDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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
    }
    if (!formData.whatsapp.trim()) {
      setErrorMessage('WhatsApp number is required')
      return false
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
          phoneCountryCode: '+91',
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

        {/* WhatsApp */}
        <div>
          <div className="flex gap-2">
            <div className="relative flex-shrink-0" style={{ width: '110px' }} ref={whatsappDropdownRef}>
              <button
                type="button"
                onClick={() => {
                  setWhatsappDropdownOpen(!whatsappDropdownOpen)
                }}
                className="w-full h-[44px] px-2 py-0 text-sm rounded-lg border-2 transition-colors flex items-center justify-center gap-1"
                style={{
                  borderColor: '#e5e7eb',
                  backgroundColor: 'white',
                  color: '#1a1a1a'
                }}
                onFocus={(e) => (e.target.style.borderColor = '#8458B3')}
                onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
              >
                <span className="text-sm">{selectedWhatsappCountry?.flag}</span>
                <span className="text-xs font-medium">{selectedWhatsappCountry?.code}</span>
                <ChevronDown className="w-3 h-3 flex-shrink-0" />
              </button>
              {whatsappDropdownOpen && (
                <div className="absolute z-50 w-full mt-1 bg-white border-2 rounded-lg shadow-lg max-h-60 overflow-auto"
                  style={{ borderColor: '#e5e7eb' }}>
                  <div className="relative px-3 py-2 border-b" style={{ borderColor: '#e5e7eb' }}>
                    <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: '#9ca3af' }} />
                    <input
                      type="text"
                      placeholder="Search country..."
                      value={whatsappSearch}
                      onChange={(e) => setWhatsappSearch(e.target.value)}
                      className="w-full pl-8 pr-3 py-1 text-sm focus:outline-none"
                      autoFocus
                    />
                  </div>
                  <div className="max-h-48 overflow-y-auto">
                    {filteredWhatsappCountries.map((country) => (
                      <button
                        key={country.code + country.country}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, whatsappCountryCode: country.code })
                          setWhatsappDropdownOpen(false)
                          setWhatsappSearch('')
                        }}
                        className="w-full px-3 py-2 text-sm text-left hover:bg-gray-50 flex items-center gap-2"
                        style={{ color: '#1a1a1a' }}>
                        <span>{country.flag}</span>
                        <span className="font-medium">{country.code}</span>
                        <span className="text-xs text-gray-600">{country.country}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
