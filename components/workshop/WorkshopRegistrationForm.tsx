'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Send, AlertCircle } from 'react-feather'
import { CountryCodeSelect, validatePhoneNumber } from '../shared/CountryCodeSelect'

export interface WorkshopRegistrationFormProps {
  source: string
  courseInterest: string
  buttonText?: string
  successRedirect?: string
  formId?: string
  compact?: boolean
}

export function WorkshopRegistrationForm({
  source,
  courseInterest,
  buttonText = 'Register My Free Seat',
  successRedirect = '/thank-you?source=ai-automation-live',
  formId = 'workshop-registration',
  compact = false,
}: WorkshopRegistrationFormProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneCountryCode: '+91',
    phone: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errorMessage) setErrorMessage('')
  }

  const validate = () => {
    if (!formData.name.trim()) {
      setErrorMessage('First name is required')
      return false
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address')
      return false
    }
    if (!validatePhoneNumber(formData.phone, formData.phoneCountryCode)) {
      setErrorMessage('Please enter a valid phone number')
      return false
    }
    return true
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    setErrorMessage('')

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phoneCountryCode: formData.phoneCountryCode,
          phone: formData.phone,
          whatsappCountryCode: formData.phoneCountryCode,
          whatsapp: formData.phone,
          courseInterest,
          source,
        }),
      })

      const data = await response.json()
      if (response.ok && data.success) {
        router.push(successRedirect)
        return
      }
      setErrorMessage(data.error || 'Something went wrong. Please try again.')
    } catch {
      setErrorMessage('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass =
    'w-full px-4 py-2.5 rounded-lg border-2 font-body text-sm transition-colors focus:outline-none focus:ring-2 h-[44px]'
  const inputStyle = {
    borderColor: 'var(--border-default)',
    backgroundColor: 'var(--bg-card)',
    color: 'var(--text-primary)',
  }

  return (
    <div
      className={`bg-card rounded-xl shadow-lg border border-gray-100 ${compact ? 'p-4 md:p-5' : 'p-5 md:p-6'}`}
    >
      <form onSubmit={handleSubmit} className="space-y-3" aria-labelledby={`${formId}-title`}>
        <div>
          <label htmlFor={`${formId}-name`} className="sr-only">
            First Name
          </label>
          <input
            id={`${formId}-name`}
            type="text"
            name="name"
            autoComplete="given-name"
            value={formData.name}
            onChange={handleChange}
            placeholder="First Name"
            required
            className={inputClass}
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor={`${formId}-email`} className="sr-only">
            Email Address
          </label>
          <input
            id={`${formId}-email`}
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className={inputClass}
            style={inputStyle}
          />
        </div>
        <div className="flex gap-2">
          <CountryCodeSelect
            value={formData.phoneCountryCode}
            onChange={(code) => setFormData((prev) => ({ ...prev, phoneCountryCode: code }))}
          />
          <div className="flex-1 min-w-0">
            <label htmlFor={`${formId}-phone`} className="sr-only">
              Phone Number
            </label>
            <input
              id={`${formId}-phone`}
              type="tel"
              name="phone"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className={inputClass}
              style={inputStyle}
            />
          </div>
        </div>

        {errorMessage && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 p-2 rounded-lg"
            style={{ backgroundColor: 'var(--color-error-bg)', color: 'var(--color-error)' }}
            role="alert"
          >
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <p className="font-body text-xs">{errorMessage}</p>
          </motion.div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-4 py-3 rounded-lg font-body font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed min-h-[44px] surface-on-accent"
          style={{
            backgroundColor: 'var(--color-cta)',
            color: 'var(--text-on-accent)',
          }}
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Registering…
            </>
          ) : (
            <>
              {buttonText}
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  )
}
