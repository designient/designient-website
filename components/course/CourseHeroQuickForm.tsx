'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'react-feather'

interface CourseHeroQuickFormProps {
  courseSlug?: string
  courseName?: string
}

export function CourseHeroQuickForm({ courseSlug, courseName }: CourseHeroQuickFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          whatsappCountryCode: '+91',
          whatsapp: formData.phone,
          courseInterest: courseSlug && courseSlugMap[courseSlug] ? courseSlugMap[courseSlug] : formData.courseInterest,
        }),
      })

      let data
      try {
        data = await response.json()
      } catch (jsonError) {
        console.error('Failed to parse response as JSON:', jsonError)
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
            courseInterest: courseSlug && courseSlugMap[courseSlug] ? courseSlugMap[courseSlug] : ''
          })
          setSubmitStatus('idle')
        }, 3000)
      } else {
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="max-w-2xl mx-auto mt-8"
    >
      <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100">
        <h3 className="font-display font-bold text-center mb-4" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', color: '#1a1a1a' }}>
          Start Your Application
        </h3>
        <p className="font-body text-center mb-6 text-sm" style={{ color: '#6b7280' }}>
          Fill in your details and we'll get back to you within 24 hours
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                required
                className="w-full px-4 py-3 rounded-lg border-2 font-body text-sm transition-colors focus:outline-none focus:ring-2"
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
                className="w-full px-4 py-3 rounded-lg border-2 font-body text-sm transition-colors focus:outline-none focus:ring-2"
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
                className="w-full px-4 py-3 rounded-lg border-2 font-body text-sm transition-colors focus:outline-none focus:ring-2"
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
            className="w-full px-6 py-3 rounded-lg font-body font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
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
    </motion.div>
  )
}
