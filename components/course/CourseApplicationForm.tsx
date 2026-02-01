'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'react-feather'
import Link from 'next/link'

interface CourseApplicationFormProps {
  courseSlug: string
  courseName: string
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

export function CourseApplicationForm({ courseSlug, courseName }: CourseApplicationFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentBackground: '',
    experienceLevel: '',
    careerGoal: '',
    availability: '',
    city: '',
    motivation: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const experienceLevels = [
    'Complete Beginner',
    'Some Design Knowledge',
    'Graphic Designer',
    'Developer',
    'Other'
  ]

  const validateField = (name: string, value: string) => {
    const newErrors: Record<string, string> = { ...errors }
    
    switch (name) {
      case 'fullName':
        if (!value.trim()) {
          newErrors.fullName = 'Full name is required'
        } else {
          delete newErrors.fullName
        }
        break
      case 'email':
        if (!value.trim()) {
          newErrors.email = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors.email = 'Please enter a valid email address'
        } else {
          delete newErrors.email
        }
        break
      case 'phone':
        if (!value.trim()) {
          newErrors.phone = 'Phone number is required'
        } else {
          delete newErrors.phone
        }
        break
      case 'currentBackground':
        if (!value.trim()) {
          newErrors.currentBackground = 'Please describe your current background'
        } else {
          delete newErrors.currentBackground
        }
        break
      case 'experienceLevel':
        if (!value) {
          newErrors.experienceLevel = 'Please select your experience level'
        } else {
          delete newErrors.experienceLevel
        }
        break
      case 'careerGoal':
        if (!value.trim()) {
          newErrors.careerGoal = 'Please describe your career goal'
        } else {
          delete newErrors.careerGoal
        }
        break
      case 'availability':
        if (!value) {
          newErrors.availability = 'Please select your availability'
        } else {
          delete newErrors.availability
        }
        break
      case 'city':
        if (!value) {
          newErrors.city = 'Please select your city'
        } else {
          delete newErrors.city
        }
        break
      case 'motivation':
        if (!value.trim()) {
          newErrors.motivation = 'Please share your motivation'
        } else if (value.trim().length < 50) {
          newErrors.motivation = 'Please provide more details (at least 50 characters)'
        } else {
          delete newErrors.motivation
        }
        break
    }
    
    setErrors(newErrors)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Real-time validation on blur
    if (e.type === 'blur' || (e.type === 'change' && value.length > 0)) {
      validateField(name, value)
    }
    
    if (submitStatus === 'error') {
      setSubmitStatus('idle')
      setErrorMessage('')
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }
    if (!formData.currentBackground.trim()) {
      newErrors.currentBackground = 'Please describe your current background'
    }
    if (!formData.experienceLevel) {
      newErrors.experienceLevel = 'Please select your experience level'
    }
    if (!formData.careerGoal.trim()) {
      newErrors.careerGoal = 'Please describe your career goal'
    }
    if (!formData.availability) {
      newErrors.availability = 'Please select your availability'
    }
    if (!formData.city) {
      newErrors.city = 'Please select your city'
    }
    if (!formData.motivation.trim()) {
      newErrors.motivation = 'Please share your motivation'
    } else if (formData.motivation.trim().length < 50) {
      newErrors.motivation = 'Please provide more details (at least 50 characters)'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      setSubmitStatus('error')
      setErrorMessage('Please fill in all required fields correctly')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      // Map course slug to program name
      const programMap: Record<string, string> = {
        'ui-ux-design-bootcamp': 'UI/UX Design Bootcamp',
        'ui-ux-design-pro': 'UI/UX Design Pro',
        'ui-ux-design-master': 'UI/UX Design Master',
        'prompt-engineering-mastery': 'Prompt Engineering Mastery'
      }

      const program = programMap[courseSlug] || courseName

      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          program,
          applicantType: formData.experienceLevel,
          currentBackground: formData.currentBackground,
          careerGoal: formData.careerGoal,
          experienceLevel: formData.experienceLevel,
          availability: formData.availability,
          city: formData.city,
          motivation: formData.motivation,
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
        // Reset form after showing success
        setTimeout(() => {
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            currentBackground: '',
            experienceLevel: '',
            careerGoal: '',
            availability: '',
            city: '',
            motivation: ''
          })
          setSubmitStatus('idle')
        }, 5000)
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
    <section id="course-application-form" className="py-16 md:py-24" style={{ backgroundColor: '#f9fafb' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h2
              className="font-display font-bold mb-4"
              style={{
                color: '#1a1a1a',
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)'
              }}>
              Apply for {courseName}
            </h2>
            <p
              className="font-body mb-2 leading-relaxed"
              style={{
                color: '#6b7280',
                fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                lineHeight: '1.8'
              }}>
              Applications reviewed within 24 hours. Limited seats per batch.
            </p>
            <p
              className="font-body text-sm"
              style={{
                color: '#9ca3af',
              }}>
              Fill out the form below to submit your application for review.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name, Email, Phone */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block font-body font-semibold mb-2 text-sm" style={{ color: '#1a1a1a' }}>
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    onBlur={handleInputChange}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    className={`w-full px-4 py-3 rounded-lg border-2 font-body text-sm transition-colors focus:outline-none focus:ring-2 h-[44px] ${
                      errors.fullName ? 'border-red-500' : formData.fullName ? 'border-green-500' : ''
                    }`}
                    style={{
                      borderColor: errors.fullName ? '#ef4444' : formData.fullName ? '#10b981' : '#e5e7eb',
                      backgroundColor: 'white',
                      color: '#1a1a1a',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#8458B3')}
                  />
                  {errors.fullName && <p id="fullName-error" className="mt-1 text-xs text-red-500" role="alert">{errors.fullName}</p>}
                  {formData.fullName && !errors.fullName && <p className="mt-1 text-xs text-green-600">✓</p>}
                </div>

                <div>
                  <label className="block font-body font-semibold mb-2 text-sm" style={{ color: '#1a1a1a' }}>
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={handleInputChange}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`w-full px-4 py-3 rounded-lg border-2 font-body text-sm transition-colors focus:outline-none focus:ring-2 h-[44px] ${
                      errors.email ? 'border-red-500' : formData.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? 'border-green-500' : ''
                    }`}
                    style={{
                      borderColor: errors.email ? '#ef4444' : formData.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? '#10b981' : '#e5e7eb',
                      backgroundColor: 'white',
                      color: '#1a1a1a',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#8458B3')}
                  />
                  {errors.email && <p id="email-error" className="mt-1 text-xs text-red-500" role="alert">{errors.email}</p>}
                  {formData.email && !errors.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && <p className="mt-1 text-xs text-green-600">✓</p>}
                </div>

                <div>
                  <label className="block font-body font-semibold mb-2 text-sm" style={{ color: '#1a1a1a' }}>
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onBlur={handleInputChange}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    className={`w-full px-4 py-3 rounded-lg border-2 font-body text-sm transition-colors focus:outline-none focus:ring-2 h-[44px] ${
                      errors.phone ? 'border-red-500' : formData.phone ? 'border-green-500' : ''
                    }`}
                    style={{
                      borderColor: errors.phone ? '#ef4444' : formData.phone ? '#10b981' : '#e5e7eb',
                      backgroundColor: 'white',
                      color: '#1a1a1a',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#8458B3')}
                  />
                  {errors.phone && <p id="phone-error" className="mt-1 text-xs text-red-500" role="alert">{errors.phone}</p>}
                  {formData.phone && !errors.phone && <p className="mt-1 text-xs text-green-600">✓</p>}
                </div>
              </div>

              {/* Current Background */}
              <div>
                <label className="block font-body font-semibold mb-2 text-sm" style={{ color: '#1a1a1a' }}>
                  Current Background <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="currentBackground"
                  value={formData.currentBackground}
                  onChange={handleInputChange}
                  onBlur={handleInputChange}
                  required
                  rows={3}
                  placeholder="Tell us about your current profession, education, or background..."
                  aria-required="true"
                  aria-invalid={!!errors.currentBackground}
                  aria-describedby={errors.currentBackground ? 'currentBackground-error' : undefined}
                  className={`w-full px-4 py-3 rounded-lg border-2 font-body text-sm transition-colors focus:outline-none focus:ring-2 resize-none ${
                    errors.currentBackground ? 'border-red-500' : formData.currentBackground ? 'border-green-500' : ''
                  }`}
                  style={{
                    borderColor: errors.currentBackground ? '#ef4444' : formData.currentBackground ? '#10b981' : '#e5e7eb',
                    backgroundColor: 'white',
                    color: '#1a1a1a',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#8458B3')}
                />
                {errors.currentBackground && <p id="currentBackground-error" className="mt-1 text-xs text-red-500" role="alert">{errors.currentBackground}</p>}
                {formData.currentBackground && !errors.currentBackground && <p className="mt-1 text-xs text-green-600">✓</p>}
              </div>

              {/* Experience Level */}
              <div>
                <label className="block font-body font-semibold mb-2 text-sm" style={{ color: '#1a1a1a' }}>
                  Experience Level <span className="text-red-500">*</span>
                </label>
                <select
                  name="experienceLevel"
                  value={formData.experienceLevel}
                  onChange={handleInputChange}
                  onBlur={handleInputChange}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.experienceLevel}
                  aria-describedby={errors.experienceLevel ? 'experienceLevel-error' : undefined}
                  className={`w-full px-4 py-3 rounded-lg border-2 font-body text-sm transition-colors focus:outline-none focus:ring-2 h-[44px] ${
                    errors.experienceLevel ? 'border-red-500' : formData.experienceLevel ? 'border-green-500' : ''
                  }`}
                  style={{
                    borderColor: errors.experienceLevel ? '#ef4444' : formData.experienceLevel ? '#10b981' : '#e5e7eb',
                    backgroundColor: 'white',
                    color: formData.experienceLevel ? '#1a1a1a' : '#9ca3af',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#8458B3')}
                >
                  <option value="">Select your experience level</option>
                  {experienceLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
                {errors.experienceLevel && <p id="experienceLevel-error" className="mt-1 text-xs text-red-500" role="alert">{errors.experienceLevel}</p>}
                {formData.experienceLevel && !errors.experienceLevel && <p className="mt-1 text-xs text-green-600">✓</p>}
              </div>

              {/* Career Goal */}
              <div>
                <label className="block font-body font-semibold mb-2 text-sm" style={{ color: '#1a1a1a' }}>
                  Career Goal <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="careerGoal"
                  value={formData.careerGoal}
                  onChange={handleInputChange}
                  onBlur={handleInputChange}
                  required
                  rows={3}
                  placeholder="What do you want to achieve in your design career?"
                  aria-required="true"
                  aria-invalid={!!errors.careerGoal}
                  aria-describedby={errors.careerGoal ? 'careerGoal-error' : undefined}
                  className={`w-full px-4 py-3 rounded-lg border-2 font-body text-sm transition-colors focus:outline-none focus:ring-2 resize-none ${
                    errors.careerGoal ? 'border-red-500' : formData.careerGoal ? 'border-green-500' : ''
                  }`}
                  style={{
                    borderColor: errors.careerGoal ? '#ef4444' : formData.careerGoal ? '#10b981' : '#e5e7eb',
                    backgroundColor: 'white',
                    color: '#1a1a1a',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#8458B3')}
                />
                {errors.careerGoal && <p id="careerGoal-error" className="mt-1 text-xs text-red-500" role="alert">{errors.careerGoal}</p>}
                {formData.careerGoal && !errors.careerGoal && <p className="mt-1 text-xs text-green-600">✓</p>}
              </div>

              {/* Availability and City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-body font-semibold mb-2 text-sm" style={{ color: '#1a1a1a' }}>
                    Availability <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    onBlur={handleInputChange}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.availability}
                    aria-describedby={errors.availability ? 'availability-error' : undefined}
                    className={`w-full px-4 py-3 rounded-lg border-2 font-body text-sm transition-colors focus:outline-none focus:ring-2 h-[44px] ${
                      errors.availability ? 'border-red-500' : formData.availability ? 'border-green-500' : ''
                    }`}
                    style={{
                      borderColor: errors.availability ? '#ef4444' : formData.availability ? '#10b981' : '#e5e7eb',
                      backgroundColor: 'white',
                      color: formData.availability ? '#1a1a1a' : '#9ca3af',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#8458B3')}
                  >
                    <option value="">Select Availability</option>
                    {availabilityOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.availability && <p id="availability-error" className="mt-1 text-xs text-red-500" role="alert">{errors.availability}</p>}
                  {formData.availability && !errors.availability && <p className="mt-1 text-xs text-green-600">✓</p>}
                </div>

                <div>
                  <label className="block font-body font-semibold mb-2 text-sm" style={{ color: '#1a1a1a' }}>
                    City <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    onBlur={handleInputChange}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.city}
                    aria-describedby={errors.city ? 'city-error' : undefined}
                    className={`w-full px-4 py-3 rounded-lg border-2 font-body text-sm transition-colors focus:outline-none focus:ring-2 h-[44px] ${
                      errors.city ? 'border-red-500' : formData.city ? 'border-green-500' : ''
                    }`}
                    style={{
                      borderColor: errors.city ? '#ef4444' : formData.city ? '#10b981' : '#e5e7eb',
                      backgroundColor: 'white',
                      color: formData.city ? '#1a1a1a' : '#9ca3af',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#8458B3')}
                  >
                    <option value="">Select City</option>
                    {cities.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                  {errors.city && <p id="city-error" className="mt-1 text-xs text-red-500" role="alert">{errors.city}</p>}
                  {formData.city && !errors.city && <p className="mt-1 text-xs text-green-600">✓</p>}
                </div>
              </div>

              {/* Motivation */}
              <div>
                <label className="block font-body font-semibold mb-2 text-sm" style={{ color: '#1a1a1a' }}>
                  Why do you want to join Designient? <span className="text-red-500">*</span>
                </label>
                  <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  onBlur={handleInputChange}
                  required
                  rows={5}
                  placeholder="Share your motivation, what excites you about design, and why you chose Designient..."
                  aria-required="true"
                  aria-invalid={!!errors.motivation}
                  aria-describedby={errors.motivation ? 'motivation-error' : 'motivation-help'}
                  className={`w-full px-4 py-3 rounded-lg border-2 font-body text-sm transition-colors focus:outline-none focus:ring-2 resize-none ${
                    errors.motivation ? 'border-red-500' : formData.motivation.length >= 50 ? 'border-green-500' : ''
                  }`}
                  style={{
                    borderColor: errors.motivation ? '#ef4444' : formData.motivation.length >= 50 ? '#10b981' : '#e5e7eb',
                    backgroundColor: 'white',
                    color: '#1a1a1a',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#8458B3')}
                />
                {errors.motivation && <p id="motivation-error" className="mt-1 text-xs text-red-500" role="alert">{errors.motivation}</p>}
                <p id="motivation-help" className="mt-1 text-xs" style={{ color: formData.motivation.length >= 50 ? '#10b981' : '#6b7280' }}>
                  {formData.motivation.length}/50 characters minimum {formData.motivation.length >= 50 && '✓'}
                </p>
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
                  className="flex flex-col gap-3 p-4 rounded-lg"
                  style={{ backgroundColor: '#f0fdf4', color: '#10b981' }}
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="font-body font-semibold">Application Submitted Successfully!</p>
                  </div>
                  <p className="font-body text-sm">
                    Thank you for your interest in {courseName}. We've received your application and will review it within 24 hours. You'll receive a confirmation email shortly with next steps.
                  </p>
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
                    Submitting Application...
                  </>
                ) : (
                  <>
                    Submit Application
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
