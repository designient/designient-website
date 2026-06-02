'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { validatePhoneNumber } from '../shared/CountryCodeSelect'
import { PhoneField } from '../forms/PhoneField'
import { formInputClass, formSelectClass, formTextareaClass, formInputErrorClass } from '../forms/formStyles'

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
            backgroundColor: 'var(--color-success-bg)',
            border: '1px solid var(--color-success)',
            color: 'var(--color-success)'
          }}>
          <p className="font-body font-semibold">{submitMessage}</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div
          className="mb-6 p-4 rounded-lg"
          style={{
            backgroundColor: 'var(--color-error-bg)',
            border: '1px solid var(--color-error)',
            color: 'var(--color-error)'
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
            style={{ color: 'var(--text-primary)' }}>
            Full Name <span style={{ color: 'var(--color-error)' }}>*</span>
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
            className={`${formInputClass}${formInputErrorClass(!!errors.fullName)}`}
          />
          {errors.fullName && (
            <p
              id="fullName-error"
              className="mt-1 font-body text-sm"
              style={{ color: 'var(--color-error)' }}
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
            style={{ color: 'var(--text-primary)' }}>
            Email Address <span style={{ color: 'var(--color-error)' }}>*</span>
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
            className={`${formInputClass}${formInputErrorClass(!!errors.email)}`}
          />
          {errors.email && (
            <p
              id="email-error"
              className="mt-1 font-body text-sm"
              style={{ color: 'var(--color-error)' }}
              role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <PhoneField
          id="phone"
          label="Phone Number"
          countryCode={formData.phoneCountryCode}
          onCountryCodeChange={(code) => setFormData({ ...formData, phoneCountryCode: code })}
          countryCodeId="phoneCountryCode"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Enter phone number"
          error={errors.phone}
        />
        <p className="-mt-4 font-body text-xs" style={{ color: 'var(--text-muted)' }}>
          7-15 digits without country code
        </p>

        <PhoneField
          id="whatsapp"
          label="WhatsApp Number (Optional)"
          countryCode={formData.whatsappCountryCode}
          onCountryCodeChange={(code) => setFormData({ ...formData, whatsappCountryCode: code })}
          countryCodeId="whatsappCountryCode"
          value={formData.whatsapp}
          onChange={handleInputChange}
          placeholder="Enter WhatsApp number"
          error={errors.whatsapp}
        />

        {/* Reason for Contact */}
        <div>
          <label
            htmlFor="reason"
            className="block font-body font-semibold mb-2"
            style={{ color: 'var(--text-primary)' }}>
            Reason for Contact <span style={{ color: 'var(--color-error)' }}>*</span>
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
            className={`${formSelectClass}${formInputErrorClass(!!errors.reason)}`}
          >
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
              style={{ color: 'var(--color-error)' }}
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
            style={{ color: 'var(--text-primary)' }}>
            Message <span style={{ color: 'var(--color-error)' }}>*</span>
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
              className={`${formTextareaClass}${formInputErrorClass(!!errors.message)}`}
            />
            <span
              className="absolute bottom-3 right-3 font-body text-xs"
              style={{
                color: formData.message.length < MESSAGE_MIN ? 'var(--color-error)' :
                  formData.message.length > MESSAGE_MAX * 0.9 ? 'var(--color-warning)' : 'var(--text-muted)'
              }}
            >
              {formData.message.length} / {MESSAGE_MAX}
            </span>
          </div>
          <p id="message-hint" className="mt-1 font-body text-xs" style={{ color: 'var(--text-muted)' }}>
            Minimum {MESSAGE_MIN} characters
          </p>
          {errors.message && (
            <p
              id="message-error"
              className="mt-1 font-body text-sm"
              style={{ color: 'var(--color-error)' }}
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
            className="w-full px-6 py-4 rounded-lg font-body font-semibold text-white transition-colors hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed surface-on-accent"
            style={{
              backgroundColor: 'var(--color-cta)'
            }}>
            {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
          </button>
          <p className="mt-3 text-center font-body text-xs" style={{ color: 'var(--text-muted)' }}>
            By submitting this form, you agree to our{' '}
            <Link href="/privacy-policy" className="course-inline-link">
              Privacy Policy
            </Link>
            {' '}and{' '}
            <Link href="/terms-and-conditions" className="course-inline-link">
              Terms and Conditions
            </Link>
            . For complaints, see{' '}
            <Link href="/grievance-redressal" className="course-inline-link">
              Grievance Redressal
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  )
}
