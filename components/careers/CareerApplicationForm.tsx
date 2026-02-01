'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mail,
  FileText,
  Link as LinkIcon,
  Upload,
  CheckCircle,
  AlertCircle,
  X,
  Send,
  Phone
} from 'react-feather'
import { CountryCodeSelect, validatePhoneNumber } from '../shared/CountryCodeSelect'

const COVER_LETTER_MIN = 50
const COVER_LETTER_MAX = 2000

interface CareerApplicationFormProps {
  roleName: string
  roleId?: string
}

export function CareerApplicationForm({ roleName, roleId }: CareerApplicationFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneCountryCode: '+91',
    phone: '',
    whatsappCountryCode: '+91',
    whatsapp: '',
    portfolioUrl: '',
    linkedinUrl: '',
    coverLetter: '',
    roleName: roleName,
    roleId: roleId || ''
  })
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateUrl = (url: string) => {
    if (!url) return true // Optional field
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  }

  // Using shared validatePhoneNumber from CountryCodeSelect

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file type
    if (file.type !== 'application/pdf') {
      setErrors(prev => ({
        ...prev,
        resume: 'Please upload a PDF file only'
      }))
      setResumeFile(null)
      return
    }

    // Validate file size (5MB = 5 * 1024 * 1024 bytes)
    if (file.size > 5 * 1024 * 1024) {
      setErrors(prev => ({
        ...prev,
        resume: 'File size must be less than 5MB'
      }))
      setResumeFile(null)
      return
    }

    setResumeFile(file)
    setErrors(prev => {
      const newErrors = { ...prev }
      delete newErrors.resume
      return newErrors
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else {
      const phoneValidation = validatePhoneNumber(formData.phone, formData.phoneCountryCode)
      if (!phoneValidation.valid) {
        newErrors.phone = phoneValidation.error || 'Please enter a valid phone number'
      }
    }

    if (formData.whatsapp) {
      const whatsappValidation = validatePhoneNumber(formData.whatsapp, formData.whatsappCountryCode)
      if (!whatsappValidation.valid) {
        newErrors.whatsapp = whatsappValidation.error || 'Please enter a valid WhatsApp number'
      }
    }

    if (!resumeFile) {
      newErrors.resume = 'Resume upload is required'
    }

    if (formData.portfolioUrl && !validateUrl(formData.portfolioUrl)) {
      newErrors.portfolioUrl = 'Please enter a valid URL'
    }

    if (formData.linkedinUrl && !validateUrl(formData.linkedinUrl)) {
      newErrors.linkedinUrl = 'Please enter a valid LinkedIn URL'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      // Create FormData for file upload
      const formDataToSend = new FormData()
      formDataToSend.append('fullName', formData.fullName)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', `${formData.phoneCountryCode} ${formData.phone}`)
      if (formData.whatsapp) {
        formDataToSend.append('whatsapp', `${formData.whatsappCountryCode} ${formData.whatsapp}`)
      }
      formDataToSend.append('portfolioUrl', formData.portfolioUrl)
      formDataToSend.append('linkedinUrl', formData.linkedinUrl)
      formDataToSend.append('coverLetter', formData.coverLetter)
      formDataToSend.append('roleName', formData.roleName)
      formDataToSend.append('roleId', formData.roleId)
      if (resumeFile) {
        formDataToSend.append('resume', resumeFile)
      }

      // TODO: Replace with actual API endpoint or email service
      // For now, using mailto as fallback
      const response = await fetch('/api/careers/apply', {
        method: 'POST',
        body: formDataToSend
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
        setSubmitStatus('error')
        setSubmitMessage('Something went wrong. Please try again or email us directly at hr@designient.com.')
        return;
      }

      if (response.ok && data.success) {
        setSubmitStatus('success')
        setSubmitMessage('Thank you! Your application has been submitted successfully. We\'ll review it and get back to you soon.')
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phoneCountryCode: '+91',
          phone: '',
          whatsappCountryCode: '+91',
          whatsapp: '',
          portfolioUrl: '',
          linkedinUrl: '',
          coverLetter: '',
          roleName: roleName,
          roleId: roleId || ''
        })
        setResumeFile(null)
        if (fileInputRef.current) {
          fileInputRef.current.value = ''
        }
      } else {
        console.error('API error response:', {
          status: response.status,
          statusText: response.statusText,
          data: data,
          responseText: responseText
        });
        setSubmitStatus('error')
        setSubmitMessage(data.error || 'Something went wrong. Please try again or email us directly at hr@designient.com.')
      }
    } catch (error) {
      console.error('Error submitting application:', error)
      setSubmitStatus('error')
      setSubmitMessage('Something went wrong. Please try again or email us directly at hr@designient.com.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: 'white' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8">
            <h2
              className="font-display font-bold mb-4"
              style={{
                color: '#8458B3',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)'
              }}>
              Apply for This Position
            </h2>
            <p
              className="font-body leading-relaxed"
              style={{
                color: '#4a4a4a',
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                lineHeight: '1.7'
              }}>
              Fill out the form below to submit your application. We review all applications and will get back to you soon.
            </p>
          </motion.div>

          <AnimatePresence>
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-6 p-6 rounded-xl flex items-start gap-4"
                style={{ backgroundColor: '#f0fdf4', border: '2px solid #22c55e' }}>
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
                <div className="flex-1">
                  <h3
                    className="font-display font-bold mb-2"
                    style={{
                      color: '#166534',
                      fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                    }}>
                    Application Submitted Successfully
                  </h3>
                  <p
                    className="font-body"
                    style={{
                      color: '#166534',
                      fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                      lineHeight: '1.7'
                    }}>
                    {submitMessage}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitStatus('idle')
                    setSubmitMessage('')
                  }}
                  className="flex-shrink-0"
                  aria-label="Close success message">
                  <X className="w-5 h-5" style={{ color: '#166534' }} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Hidden field for role */}
            <input type="hidden" name="roleName" value={formData.roleName} />
            <input type="hidden" name="roleId" value={formData.roleId} />

            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block font-body font-semibold mb-2"
                style={{
                  color: '#1a1a1a',
                  fontSize: 'clamp(1rem, 1.5vw, 1.125rem)'
                }}>
                Full Name <span style={{ color: '#dc2626' }}>*</span>
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
                className={`w-full px-4 py-3 rounded-lg font-body border-2 transition-colors min-h-[44px] ${errors.fullName ? 'border-red-500' : 'border-gray-300 focus:border-[#8458B3]'
                  }`}
                style={{
                  backgroundColor: 'white',
                  fontSize: 'clamp(1rem, 1.5vw, 1.125rem)'
                }}
              />
              {errors.fullName && (
                <p
                  id="fullName-error"
                  className="mt-2 flex items-center gap-2 font-body text-sm"
                  style={{ color: '#dc2626' }}
                  role="alert">
                  <AlertCircle className="w-4 h-4" />
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block font-body font-semibold mb-2"
                style={{
                  color: '#1a1a1a',
                  fontSize: 'clamp(1rem, 1.5vw, 1.125rem)'
                }}>
                Email Address <span style={{ color: '#dc2626' }}>*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#6b7280' }} />
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
                  className={`w-full pl-12 pr-4 py-3 rounded-lg font-body border-2 transition-colors min-h-[44px] ${errors.email ? 'border-red-500' : 'border-gray-300 focus:border-[#8458B3]'
                    }`}
                  style={{
                    backgroundColor: 'white',
                    fontSize: 'clamp(1rem, 1.5vw, 1.125rem)'
                  }}
                />
              </div>
              {errors.email && (
                <p
                  id="email-error"
                  className="mt-2 flex items-center gap-2 font-body text-sm"
                  style={{ color: '#dc2626' }}
                  role="alert">
                  <AlertCircle className="w-4 h-4" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block font-body font-semibold mb-2"
                style={{
                  color: '#1a1a1a',
                  fontSize: 'clamp(1rem, 1.5vw, 1.125rem)'
                }}>
                Phone Number <span style={{ color: '#dc2626' }}>*</span>
              </label>
              <div className="flex gap-2">
                <CountryCodeSelect
                  value={formData.phoneCountryCode}
                  onChange={(code) => setFormData(prev => ({ ...prev, phoneCountryCode: code }))}
                  id="phoneCountryCode"
                />
                <div className="relative flex-1">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#6b7280' }} />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    className={`w-full pl-12 pr-4 py-3 rounded-lg font-body border-2 transition-colors min-h-[44px] ${errors.phone ? 'border-red-500' : 'border-gray-300 focus:border-[#8458B3]'
                      }`}
                    style={{
                      backgroundColor: 'white',
                      fontSize: 'clamp(1rem, 1.5vw, 1.125rem)'
                    }}
                  />
                </div>
              </div>
              {errors.phone && (
                <p
                  id="phone-error"
                  className="mt-2 flex items-center gap-2 font-body text-sm"
                  style={{ color: '#dc2626' }}
                  role="alert">
                  <AlertCircle className="w-4 h-4" />
                  {errors.phone}
                </p>
              )}
            </div>

            {/* WhatsApp */}
            <div>
              <label
                htmlFor="whatsapp"
                className="block font-body font-semibold mb-2"
                style={{
                  color: '#1a1a1a',
                  fontSize: 'clamp(1rem, 1.5vw, 1.125rem)'
                }}>
                WhatsApp Number <span className="font-normal text-sm" style={{ color: '#6b7280' }}>(Optional)</span>
              </label>
              <div className="flex gap-2">
                <CountryCodeSelect
                  value={formData.whatsappCountryCode}
                  onChange={(code) => setFormData(prev => ({ ...prev, whatsappCountryCode: code }))}
                  id="whatsappCountryCode"
                />
                <div className="relative flex-1">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#6b7280' }} />
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    aria-invalid={errors.whatsapp ? 'true' : 'false'}
                    aria-describedby={errors.whatsapp ? 'whatsapp-error' : undefined}
                    className={`w-full pl-12 pr-4 py-3 rounded-lg font-body border-2 transition-colors min-h-[44px] ${errors.whatsapp ? 'border-red-500' : 'border-gray-300 focus:border-[#8458B3]'
                      }`}
                    style={{
                      backgroundColor: 'white',
                      fontSize: 'clamp(1rem, 1.5vw, 1.125rem)'
                    }}
                  />
                </div>
              </div>
              {errors.whatsapp && (
                <p
                  id="whatsapp-error"
                  className="mt-2 flex items-center gap-2 font-body text-sm"
                  style={{ color: '#dc2626' }}
                  role="alert">
                  <AlertCircle className="w-4 h-4" />
                  {errors.whatsapp}
                </p>
              )}
            </div>

            {/* Resume Upload */}
            <div>
              <label
                htmlFor="resume"
                className="block font-body font-semibold mb-2"
                style={{
                  color: '#1a1a1a',
                  fontSize: 'clamp(1rem, 1.5vw, 1.125rem)'
                }}>
                Resume (PDF) <span style={{ color: '#dc2626' }}>*</span>
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  ref={fileInputRef}
                  accept=".pdf,application/pdf"
                  onChange={handleFileChange}
                  required
                  aria-required="true"
                  aria-invalid={errors.resume ? 'true' : 'false'}
                  aria-describedby={errors.resume ? 'resume-error' : 'resume-help'}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div
                  className={`flex items-center gap-4 p-4 rounded-lg border-2 transition-colors cursor-pointer min-h-[44px] ${errors.resume
                    ? 'border-red-500 bg-red-50'
                    : resumeFile
                      ? 'border-[#8458B3] bg-purple-50'
                      : 'border-gray-300 bg-gray-50 hover:border-[#8458B3]'
                    }`}>
                  <Upload className="w-5 h-5 flex-shrink-0" style={{ color: errors.resume ? '#dc2626' : '#8458B3' }} />
                  <div className="flex-1">
                    {resumeFile ? (
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4" style={{ color: '#8458B3' }} />
                        <span className="font-body text-sm" style={{ color: '#1a1a1a' }}>
                          {resumeFile.name} ({(resumeFile.size / 1024 / 1024).toFixed(2)} MB)
                        </span>
                      </div>
                    ) : (
                      <span className="font-body text-sm" style={{ color: '#6b7280' }}>
                        Click to upload or drag and drop
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <p
                id="resume-help"
                className="mt-2 font-body text-xs"
                style={{ color: '#6b7280' }}>
                PDF only, maximum file size 5MB
              </p>
              {errors.resume && (
                <p
                  id="resume-error"
                  className="mt-2 flex items-center gap-2 font-body text-sm"
                  style={{ color: '#dc2626' }}
                  role="alert">
                  <AlertCircle className="w-4 h-4" />
                  {errors.resume}
                </p>
              )}
            </div>

            {/* Portfolio URL */}
            <div>
              <label
                htmlFor="portfolioUrl"
                className="block font-body font-semibold mb-2"
                style={{
                  color: '#1a1a1a',
                  fontSize: 'clamp(1rem, 1.5vw, 1.125rem)'
                }}>
                Portfolio URL <span className="font-normal text-sm" style={{ color: '#6b7280' }}>(Optional)</span>
              </label>
              <div className="relative">
                <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#6b7280' }} />
                <input
                  type="url"
                  id="portfolioUrl"
                  name="portfolioUrl"
                  value={formData.portfolioUrl}
                  onChange={handleInputChange}
                  placeholder="https://yourportfolio.com"
                  aria-invalid={errors.portfolioUrl ? 'true' : 'false'}
                  aria-describedby={errors.portfolioUrl ? 'portfolioUrl-error' : undefined}
                  className={`w-full pl-12 pr-4 py-3 rounded-lg font-body border-2 transition-colors min-h-[44px] ${errors.portfolioUrl ? 'border-red-500' : 'border-gray-300 focus:border-[#8458B3]'
                    }`}
                  style={{
                    backgroundColor: 'white',
                    fontSize: 'clamp(1rem, 1.5vw, 1.125rem)'
                  }}
                />
              </div>
              {errors.portfolioUrl && (
                <p
                  id="portfolioUrl-error"
                  className="mt-2 flex items-center gap-2 font-body text-sm"
                  style={{ color: '#dc2626' }}
                  role="alert">
                  <AlertCircle className="w-4 h-4" />
                  {errors.portfolioUrl}
                </p>
              )}
            </div>

            {/* LinkedIn URL */}
            <div>
              <label
                htmlFor="linkedinUrl"
                className="block font-body font-semibold mb-2"
                style={{
                  color: '#1a1a1a',
                  fontSize: 'clamp(1rem, 1.5vw, 1.125rem)'
                }}>
                LinkedIn Profile URL <span className="font-normal text-sm" style={{ color: '#6b7280' }}>(Optional)</span>
              </label>
              <div className="relative">
                <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#6b7280' }} />
                <input
                  type="url"
                  id="linkedinUrl"
                  name="linkedinUrl"
                  value={formData.linkedinUrl}
                  onChange={handleInputChange}
                  placeholder="https://linkedin.com/in/yourprofile"
                  aria-invalid={errors.linkedinUrl ? 'true' : 'false'}
                  aria-describedby={errors.linkedinUrl ? 'linkedinUrl-error' : undefined}
                  className={`w-full pl-12 pr-4 py-3 rounded-lg font-body border-2 transition-colors min-h-[44px] ${errors.linkedinUrl ? 'border-red-500' : 'border-gray-300 focus:border-[#8458B3]'
                    }`}
                  style={{
                    backgroundColor: 'white',
                    fontSize: 'clamp(1rem, 1.5vw, 1.125rem)'
                  }}
                />
              </div>
              {errors.linkedinUrl && (
                <p
                  id="linkedinUrl-error"
                  className="mt-2 flex items-center gap-2 font-body text-sm"
                  style={{ color: '#dc2626' }}
                  role="alert">
                  <AlertCircle className="w-4 h-4" />
                  {errors.linkedinUrl}
                </p>
              )}
            </div>

            {/* Cover Letter */}
            <div>
              <label
                htmlFor="coverLetter"
                className="block font-body font-semibold mb-2"
                style={{
                  color: '#1a1a1a',
                  fontSize: 'clamp(1rem, 1.5vw, 1.125rem)'
                }}>
                Cover Letter <span className="font-normal text-sm" style={{ color: '#6b7280' }}>(Optional)</span>
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                rows={6}
                placeholder="Tell us why you're interested in this role and what makes you a great fit..."
                className="w-full px-4 py-3 rounded-lg font-body border-2 border-gray-300 focus:border-[#8458B3] transition-colors resize-y"
                style={{
                  backgroundColor: 'white',
                  fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                  minHeight: '120px'
                }}
              />
              <div className="flex justify-between items-start mt-1">
                <p id="coverLetter-hint" className="font-body text-xs" style={{ color: '#6b7280' }}>
                  Minimum {COVER_LETTER_MIN} characters
                </p>
                <span
                  className="font-body text-xs"
                  style={{
                    color: formData.coverLetter.length < COVER_LETTER_MIN ? '#ef4444' :
                      formData.coverLetter.length > COVER_LETTER_MAX * 0.9 ? '#f59e0b' : '#6b7280'
                  }}
                >
                  {formData.coverLetter.length} / {COVER_LETTER_MAX}
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 font-body font-bold px-8 py-4 rounded-full transition-transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
                style={{
                  backgroundColor: isSubmitting ? '#9ca3af' : '#8458B3',
                  color: 'white',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
                }}>
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
              <p
                className="mt-4 font-body text-xs text-center"
                style={{ color: '#6b7280' }}>
                By submitting this form, you agree to our privacy policy. We respect your data and will only use it for recruitment purposes.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
