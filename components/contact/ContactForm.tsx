'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { CountryCodeSelect, validatePhoneNumber } from '../shared/CountryCodeSelect'

interface FormData {
  fullName: string
  email: string
  phoneCountryCode: string
  phone: string
  whatsappCountryCode: string
  whatsapp: string
  reason: string
  message: string
}

interface FormErrors {
  fullName?: string
  email?: string
  phone?: string
  whatsapp?: string
  reason?: string
  message?: string
}

const MESSAGE_MIN = 10
const MESSAGE_MAX = 1000

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phoneCountryCode: '+91',
    phone: '',
    whatsappCountryCode: '+91',
    whatsapp: '',
    reason: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (formData.phone) {
      const phoneValidation = validatePhoneNumber(formData.phone, formData.phoneCountryCode)
      if (!phoneValidation.valid) {
        newErrors.phone = phoneValidation.error || 'Please enter a valid phone number.'
      }
    }

    if (formData.whatsapp) {
      const whatsappValidation = validatePhoneNumber(formData.whatsapp, formData.whatsappCountryCode)
      if (!whatsappValidation.valid) {
        newErrors.whatsapp = whatsappValidation.error || 'Please enter a valid WhatsApp number.'
      }
    }

    if (!formData.reason) {
      newErrors.reason = 'Please select a reason for contact.'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.'
    } else if (formData.message.trim().length < MESSAGE_MIN) {
      newErrors.message = `Please provide more details (at least ${MESSAGE_MIN} characters).`
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          phone: formData.phone ? `${formData.phoneCountryCode} ${formData.phone}` : '',
          whatsapp: formData.whatsapp ? `${formData.whatsappCountryCode} ${formData.whatsapp}` : ''
        }),
      })

      let data;
      const responseText = await response.text();

      try {
        data = responseText ? JSON.parse(responseText) : {};
      } catch (jsonError) {
        console.error('Failed to parse response as JSON:', {
          error: jsonError,
          status: response.status,
          statusText: response.statusText,
          responseText: responseText
        });
        setSubmitStatus('error');
        setSubmitMessage('Something went wrong. Please try again or email us directly at hello@designient.com');
        return;
      }

      if (response.ok && data.success) {
        setSubmitStatus('success')
        setSubmitMessage('Thank you for contacting us! We\'ll get back to you within 24 business hours.')
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phoneCountryCode: '+91',
          phone: '',
          whatsappCountryCode: '+91',
          whatsapp: '',
          reason: '',
          message: '',
        })
      } else {
        console.error('API error response:', {
          status: response.status,
          statusText: response.statusText,
          data: data,
          responseText: responseText
        });
        setSubmitStatus('error')
        setSubmitMessage(data.error || 'Something went wrong. Please try again or email us directly at hello@designient.com')
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error')
      setSubmitMessage('Something went wrong. Please try again or email us directly at hello@designient.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full">
      {submitStatus === 'success' && (
        <div
          className="mb-6 p-4 rounded-lg"
          style={{
            backgroundColor: '#d1fae5',
            border: '1px solid #10b981',
            color: '#065f46'
          }}>
          <p className="font-body font-semibold">{submitMessage}</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div
          className="mb-6 p-4 rounded-lg"
          style={{
            backgroundColor: '#fee2e2',
            border: '1px solid #ef4444',
            color: '#991b1b'
          }}>
          <p className="font-body font-semibold">
            Something went wrong. Please try again or email us directly at hello@designient.com
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block font-body font-semibold mb-2"
            style={{ color: '#1a1a1a' }}>
            Full Name <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            aria-required="true"
            aria-invalid={errors.fullName ? 'true' : 'false'}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            className="w-full px-4 py-3 rounded-lg border-2 font-body transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
            style={{
              borderColor: errors.fullName ? '#ef4444' : '#e5e7eb',
              backgroundColor: 'white'
            }}
          />
          {errors.fullName && (
            <p
              id="fullName-error"
              className="mt-1 font-body text-sm"
              style={{ color: '#ef4444' }}
              role="alert">
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block font-body font-semibold mb-2"
            style={{ color: '#1a1a1a' }}>
            Email Address <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            aria-required="true"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className="w-full px-4 py-3 rounded-lg border-2 font-body transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
            style={{
              borderColor: errors.email ? '#ef4444' : '#e5e7eb',
              backgroundColor: 'white'
            }}
          />
          {errors.email && (
            <p
              id="email-error"
              className="mt-1 font-body text-sm"
              style={{ color: '#ef4444' }}
              role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone with Country Code */}
        <div>
          <label
            htmlFor="phone"
            className="block font-body font-semibold mb-2"
            style={{ color: '#1a1a1a' }}>
            Phone Number
          </label>
          <div className="flex gap-2">
            <CountryCodeSelect
              value={formData.phoneCountryCode}
              onChange={(code) => setFormData({ ...formData, phoneCountryCode: code })}
              id="phoneCountryCode"
            />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              aria-invalid={errors.phone ? 'true' : 'false'}
              aria-describedby={errors.phone ? 'phone-error' : 'phone-hint'}
              className="flex-1 px-4 py-3 rounded-lg border-2 font-body transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
              style={{
                borderColor: errors.phone ? '#ef4444' : '#e5e7eb',
                backgroundColor: 'white'
              }}
              placeholder="Enter phone number"
            />
          </div>
          <p id="phone-hint" className="mt-1 font-body text-xs" style={{ color: '#6b7280' }}>
            7-15 digits without country code
          </p>
          {errors.phone && (
            <p
              id="phone-error"
              className="mt-1 font-body text-sm"
              style={{ color: '#ef4444' }}
              role="alert">
              {errors.phone}
            </p>
          )}
        </div>

        {/* WhatsApp with Country Code */}
        <div>
          <label
            htmlFor="whatsapp"
            className="block font-body font-semibold mb-2"
            style={{ color: '#1a1a1a' }}>
            WhatsApp Number <span className="font-normal text-sm" style={{ color: '#6b7280' }}>(Optional)</span>
          </label>
          <div className="flex gap-2">
            <CountryCodeSelect
              value={formData.whatsappCountryCode}
              onChange={(code) => setFormData({ ...formData, whatsappCountryCode: code })}
              id="whatsappCountryCode"
            />
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleInputChange}
              aria-invalid={errors.whatsapp ? 'true' : 'false'}
              aria-describedby={errors.whatsapp ? 'whatsapp-error' : undefined}
              className="flex-1 px-4 py-3 rounded-lg border-2 font-body transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
              style={{
                borderColor: errors.whatsapp ? '#ef4444' : '#e5e7eb',
                backgroundColor: 'white'
              }}
              placeholder="Enter WhatsApp number"
            />
          </div>
          {errors.whatsapp && (
            <p
              id="whatsapp-error"
              className="mt-1 font-body text-sm"
              style={{ color: '#ef4444' }}
              role="alert">
              {errors.whatsapp}
            </p>
          )}
        </div>

        {/* Reason for Contact */}
        <div>
          <label
            htmlFor="reason"
            className="block font-body font-semibold mb-2"
            style={{ color: '#1a1a1a' }}>
            Reason for Contact <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <select
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleInputChange}
            required
            aria-required="true"
            aria-invalid={errors.reason ? 'true' : 'false'}
            aria-describedby={errors.reason ? 'reason-error' : undefined}
            className="w-full px-4 py-3 rounded-lg border-2 font-body transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
            style={{
              borderColor: errors.reason ? '#ef4444' : '#e5e7eb',
              backgroundColor: 'white'
            }}>
            <option value="">Select a reason...</option>
            <option value="course-enquiry">Course Enquiry</option>
            <option value="placement-support">Placement Support</option>
            <option value="career-opportunity">Career Opportunity</option>
            <option value="certificate-verification">Certificate Verification</option>
            <option value="general-query">General Query</option>
          </select>
          {errors.reason && (
            <p
              id="reason-error"
              className="mt-1 font-body text-sm"
              style={{ color: '#ef4444' }}
              role="alert">
              {errors.reason}
            </p>
          )}
        </div>

        {/* Message with Character Counter */}
        <div>
          <label
            htmlFor="message"
            className="block font-body font-semibold mb-2"
            style={{ color: '#1a1a1a' }}>
            Message <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              maxLength={MESSAGE_MAX}
              aria-required="true"
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'message-error' : 'message-hint'}
              rows={6}
              className="w-full px-4 py-3 rounded-lg border-2 font-body transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 resize-y"
              style={{
                borderColor: errors.message ? '#ef4444' : '#e5e7eb',
                backgroundColor: 'white'
              }}
            />
            <span
              className="absolute bottom-3 right-3 font-body text-xs"
              style={{
                color: formData.message.length < MESSAGE_MIN ? '#ef4444' :
                  formData.message.length > MESSAGE_MAX * 0.9 ? '#f59e0b' : '#6b7280'
              }}
            >
              {formData.message.length} / {MESSAGE_MAX}
            </span>
          </div>
          <p id="message-hint" className="mt-1 font-body text-xs" style={{ color: '#6b7280' }}>
            Minimum {MESSAGE_MIN} characters
          </p>
          {errors.message && (
            <p
              id="message-error"
              className="mt-1 font-body text-sm"
              style={{ color: '#ef4444' }}
              role="alert">
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-4 rounded-lg font-body font-semibold text-white transition-colors hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              backgroundColor: '#8458B3'
            }}>
            {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
          </button>
          <p className="mt-3 text-center font-body text-xs" style={{ color: '#6b7280' }}>
            By submitting this form, you agree to our{' '}
            <Link href="/privacy-policy" className="underline hover:no-underline" style={{ color: '#8458B3' }}>
              Privacy Policy
            </Link>
            {' '}and{' '}
            <Link href="/terms-and-conditions" className="underline hover:no-underline" style={{ color: '#8458B3' }}>
              Terms and Conditions
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  )
}
