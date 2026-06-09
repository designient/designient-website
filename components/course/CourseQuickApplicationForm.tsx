'use client'

import { useEffect, useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, ChevronDown } from 'react-feather'
import { CountryCodeSelect, validatePhoneNumber } from '../shared/CountryCodeSelect'
import { motionEase, viewportOnce } from './animated/motion'

const experienceLevels = [
  'Complete Beginner',
  'Some Design Knowledge',
  'Graphic Designer',
  'Developer',
  'Other',
]

const cities = ['Bangalore', 'Hyderabad', 'Pune', 'Online', 'Other']
const availabilityOptions = ['Weekday Batches', 'Weekend Batches', 'Flexible']

type CourseQuickApplicationFormProps = {
  courseSlug: string
  courseName: string
  formId?: string
  defaultCity?: string
}

export function CourseQuickApplicationForm({
  courseSlug,
  courseName,
  formId = 'course-application-form',
  defaultCity = '',
}: CourseQuickApplicationFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneCountryCode: '+91',
    phone: '',
    experienceLevel: '',
    city: defaultCity,
    availability: '',
  })
  const [showMore, setShowMore] = useState(false)
  const [moreData, setMoreData] = useState({
    currentBackground: '',
    careerGoal: '',
    motivation: '',
  })
  useEffect(() => {
    if (defaultCity) setFormData((p) => ({ ...p, city: defaultCity }))
  }, [defaultCity])

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const programMap: Record<string, string> = {
    'ui-ux-design-bootcamp': 'UI/UX Design Bootcamp',
    'ui-ux-design-pro': 'UI/UX Design Pro',
    'ui-ux-design-master': 'UI/UX Design Master',
    'prompt-engineering-mastery': 'Prompt Engineering Mastery',
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl border-2 font-body text-sm transition-colors focus:outline-none focus:ring-2 min-h-[48px]'
  const inputStyle = {
    borderColor: 'var(--border-default)',
    backgroundColor: 'var(--bg-card)',
    color: 'var(--text-primary)',
  }

  const validate = () => {
    if (!formData.fullName.trim()) return 'Full name is required'
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return 'Please enter a valid email address'
    }
    if (!formData.phone.trim()) return 'Phone number is required'
    const phoneCheck = validatePhoneNumber(formData.phone, formData.phoneCountryCode)
    if (!phoneCheck.valid) return phoneCheck.error || 'Please enter a valid phone number'
    if (!formData.experienceLevel) return 'Please select your experience level'
    if (!formData.city) return 'Please select your city'
    return null
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const err = validate()
    if (err) {
      setSubmitStatus('error')
      setErrorMessage(err)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          email: formData.email.trim(),
          phone: `${formData.phoneCountryCode} ${formData.phone}`,
          whatsapp: `${formData.phoneCountryCode} ${formData.phone}`,
          program: programMap[courseSlug] || courseName,
          applicantType: formData.experienceLevel,
          experienceLevel: formData.experienceLevel,
          city: formData.city,
          availability: formData.availability || 'Flexible',
          currentBackground: moreData.currentBackground.trim() || 'Shared during counselling call',
          careerGoal: moreData.careerGoal.trim() || 'Transition into UI/UX design',
          motivation:
            moreData.motivation.trim() ||
            'Quick application submitted via course page - details to follow in counselling.',
        }),
      })

      const data = await response.json()
      if (response.ok && data.success) {
        setSubmitStatus('success')
        setFormData({
          fullName: '',
          email: '',
          phoneCountryCode: '+91',
          phone: '',
          experienceLevel: '',
          city: defaultCity,
          availability: '',
        })
        setMoreData({ currentBackground: '', careerGoal: '', motivation: '' })
        return
      }
      setSubmitStatus('error')
      setErrorMessage(data.error || 'Something went wrong. Please try again.')
    } catch {
      setSubmitStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      id={formId}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.5, ease: motionEase }}
      className="rounded-2xl border p-5 md:p-7 shadow-lg"
      style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-default)' }}
    >
      <form onSubmit={handleSubmit} className="space-y-4" aria-labelledby={`${formId}-title`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="sm:col-span-2">
            <label htmlFor={`${formId}-name`} className="sr-only">
              Full Name
            </label>
            <input
              id={`${formId}-name`}
              type="text"
              name="fullName"
              autoComplete="name"
              value={formData.fullName}
              onChange={(e) => setFormData((p) => ({ ...p, fullName: e.target.value }))}
              placeholder="Full Name *"
              required
              className={inputClass}
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor={`${formId}-email`} className="sr-only">
              Email
            </label>
            <input
              id={`${formId}-email`}
              type="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
              placeholder="Email *"
              required
              className={inputClass}
              style={inputStyle}
            />
          </div>
          <div className="flex gap-2">
            <CountryCodeSelect
              value={formData.phoneCountryCode}
              onChange={(code) => setFormData((p) => ({ ...p, phoneCountryCode: code }))}
            />
            <div className="flex-1 min-w-0">
              <label htmlFor={`${formId}-phone`} className="sr-only">
                Phone
              </label>
              <input
                id={`${formId}-phone`}
                type="tel"
                name="phone"
                autoComplete="tel"
                value={formData.phone}
                onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                placeholder="Phone *"
                required
                className={inputClass}
                style={inputStyle}
              />
            </div>
          </div>
        </div>

        <div>
          <p className="font-body text-xs font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>
            Experience level *
          </p>
          <div className="flex flex-wrap gap-2">
            {experienceLevels.map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => setFormData((p) => ({ ...p, experienceLevel: level }))}
                className="font-body text-xs md:text-sm px-3 py-2 rounded-full border transition-all min-h-[40px]"
                style={{
                  borderColor: formData.experienceLevel === level ? 'var(--color-primary)' : 'var(--border-default)',
                  backgroundColor: formData.experienceLevel === level ? 'var(--bg-section-green)' : 'var(--bg-subtle)',
                  color: formData.experienceLevel === level ? 'var(--color-forest)' : 'var(--text-secondary)',
                  fontWeight: formData.experienceLevel === level ? 600 : 400,
                }}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="font-body text-xs font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>
            City *
          </p>
          <div className="flex flex-wrap gap-2">
            {cities.map((city) => (
              <button
                key={city}
                type="button"
                onClick={() => setFormData((p) => ({ ...p, city }))}
                className="font-body text-xs md:text-sm px-3 py-2 rounded-full border transition-all min-h-[40px]"
                style={{
                  borderColor: formData.city === city ? 'var(--color-primary)' : 'var(--border-default)',
                  backgroundColor: formData.city === city ? 'var(--bg-section-blue)' : 'var(--bg-subtle)',
                  color: formData.city === city ? 'var(--color-primary)' : 'var(--text-secondary)',
                  fontWeight: formData.city === city ? 600 : 400,
                }}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="font-body text-xs font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>
            Batch preference
          </p>
          <div className="flex flex-wrap gap-2">
            {availabilityOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setFormData((p) => ({ ...p, availability: opt }))}
                className="font-body text-xs md:text-sm px-3 py-2 rounded-full border transition-all min-h-[40px]"
                style={{
                  borderColor: formData.availability === opt ? 'var(--color-accent)' : 'var(--border-default)',
                  backgroundColor: formData.availability === opt ? 'rgba(240,255,66,0.15)' : 'var(--bg-subtle)',
                  color: 'var(--text-secondary)',
                  fontWeight: formData.availability === opt ? 600 : 400,
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowMore((v) => !v)}
          className="font-body text-sm flex items-center gap-1 underline"
          style={{ color: 'var(--text-muted)' }}
        >
          {showMore ? 'Hide' : 'Add'} more details (optional)
          <ChevronDown className={`w-4 h-4 transition-transform ${showMore ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden space-y-3"
            >
              <textarea
                name="currentBackground"
                value={moreData.currentBackground}
                onChange={(e) => setMoreData((p) => ({ ...p, currentBackground: e.target.value }))}
                placeholder="Current background (optional)"
                rows={2}
                className={`${inputClass} resize-none`}
                style={inputStyle}
              />
              <textarea
                name="careerGoal"
                value={moreData.careerGoal}
                onChange={(e) => setMoreData((p) => ({ ...p, careerGoal: e.target.value }))}
                placeholder="Career goal (optional)"
                rows={2}
                className={`${inputClass} resize-none`}
                style={inputStyle}
              />
              <textarea
                name="motivation"
                value={moreData.motivation}
                onChange={(e) => setMoreData((p) => ({ ...p, motivation: e.target.value }))}
                placeholder="Why Designient? (optional)"
                rows={3}
                className={`${inputClass} resize-none`}
                style={inputStyle}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {submitStatus === 'error' && errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 p-3 rounded-lg"
              style={{ backgroundColor: 'var(--color-error-bg)', color: 'var(--color-error)' }}
              role="alert"
            >
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <p className="font-body text-sm">{errorMessage}</p>
            </motion.div>
          )}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-2 p-4 rounded-lg"
              style={{ backgroundColor: 'var(--color-success-bg)', color: 'var(--color-success)' }}
            >
              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="font-body text-sm">
                Application submitted. We will review it within 24 hours and email you the next steps.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="submit"
          disabled={isSubmitting || submitStatus === 'success'}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          className="w-full px-6 py-3.5 rounded-xl font-body font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-70 min-h-[48px]"
          style={{ backgroundColor: 'var(--color-cta)', color: 'var(--text-on-accent)' }}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Submitting…
            </>
          ) : (
            <>
              Submit Application
              <Send className="w-5 h-5" />
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  )
}
