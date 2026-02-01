'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Briefcase, Users, Calendar, DollarSign, FileText } from 'react-feather'
import { useRouter } from 'next/navigation'

interface FormData {
  fullName: string
  workEmail: string
  companyName: string
  role: string
  companySize: string
  industry: string
  location: string
  serviceType: string[]
  teamSize: string
  timeline: string
  budgetRange: string
  requirementDescription: string
}

const roles = [
  'Founder / CEO',
  'CTO / VP Engineering',
  'Head of Design',
  'Product Manager',
  'HR / L&D Manager',
  'Design Lead',
  'Other'
]

const companySizes = [
  '1-10 employees',
  '11-50 employees',
  '51-200 employees',
  '201-500 employees',
  '501-1000 employees',
  '1000+ employees'
]

const industries = [
  'Technology / SaaS',
  'E-commerce',
  'FinTech',
  'Healthcare',
  'Education',
  'Media / Entertainment',
  'Manufacturing',
  'Retail',
  'Other'
]

const serviceTypes = [
  'Training Programs',
  'AI Enablement & Workshops',
  'Hiring & Consulting',
  'UX Audits',
  'Product Redesigns',
  'Research & Usability Testing',
  'AI Integration Consulting',
  'Ongoing Design Partnerships'
]

const teamSizes = [
  '1-5 people',
  '6-10 people',
  '11-20 people',
  '21-50 people',
  '50+ people'
]

const timelines = [
  'Immediate (within 1 month)',
  'Short-term (1-3 months)',
  'Medium-term (3-6 months)',
  'Long-term (6+ months)',
  'Exploring options'
]

const budgetRanges = [
  'Under ₹5 Lakhs',
  '₹5-10 Lakhs',
  '₹10-25 Lakhs',
  '₹25-50 Lakhs',
  '₹50 Lakhs+',
  'Prefer not to disclose'
]

export function CorporateProposalForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    workEmail: '',
    companyName: '',
    role: '',
    companySize: '',
    industry: '',
    location: '',
    serviceType: [],
    teamSize: '',
    timeline: '',
    budgetRange: '',
    requirementDescription: ''
  })

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) return false
    
    // Check for common business email domains (not exhaustive, but helps)
    const personalDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com', 'aol.com']
    const domain = email.split('@')[1]?.toLowerCase()
    return !personalDomains.includes(domain || '')
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Work email is required'
    } else if (!validateEmail(formData.workEmail)) {
      newErrors.workEmail = 'Please enter a valid business email address'
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required'
    }

    if (!formData.role) {
      newErrors.role = 'Please select your role'
    }

    if (!formData.companySize) {
      newErrors.companySize = 'Please select company size'
    }

    if (!formData.industry) {
      newErrors.industry = 'Please select industry'
    }

    if (formData.serviceType.length === 0) {
      newErrors.serviceType = 'Please select at least one service type'
    }

    if (!formData.teamSize) {
      newErrors.teamSize = 'Please select team size'
    }

    if (!formData.timeline) {
      newErrors.timeline = 'Please select timeline'
    }

    if (!formData.budgetRange) {
      newErrors.budgetRange = 'Please select budget range'
    }

    if (!formData.requirementDescription.trim()) {
      newErrors.requirementDescription = 'Please describe your requirements'
    } else if (formData.requirementDescription.trim().length < 50) {
      newErrors.requirementDescription = 'Please provide more details (at least 50 characters)'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleServiceTypeChange = (service: string) => {
    setFormData(prev => {
      const isSelected = prev.serviceType.includes(service)
      return {
        ...prev,
        serviceType: isSelected
          ? prev.serviceType.filter(s => s !== service)
          : [...prev.serviceType, service]
      }
    })
    // Clear error when user selects
    if (errors.serviceType) {
      setErrors(prev => ({ ...prev, serviceType: undefined }))
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.workEmail,
          phone: '', // Not required for corporate form
          reason: 'corporate-proposal',
          message: `
Corporate Proposal Request

Company: ${formData.companyName}
Role: ${formData.role}
Company Size: ${formData.companySize}
Industry: ${formData.industry}
Location: ${formData.location || 'Not provided'}
Service Types: ${formData.serviceType.join(', ')}
Team Size: ${formData.teamSize}
Timeline: ${formData.timeline}
Budget Range: ${formData.budgetRange}

Requirements:
${formData.requirementDescription}
          `.trim(),
          metadata: {
            companyName: formData.companyName,
            role: formData.role,
            companySize: formData.companySize,
            industry: formData.industry,
            location: formData.location,
            serviceType: formData.serviceType,
            teamSize: formData.teamSize,
            timeline: formData.timeline,
            budgetRange: formData.budgetRange
          }
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
        setErrors({ requirementDescription: 'Something went wrong. Please try again or contact us directly.' });
        return;
      }

      if (response.ok && data.success) {
        setSubmitSuccess(true)
        setTimeout(() => {
          router.push('/thank-you?source=corporate-proposal')
        }, 2000)
      } else {
        console.error('API error response:', {
          status: response.status,
          statusText: response.statusText,
          data: data,
          responseText: responseText
        });
        setErrors({ requirementDescription: data.error || 'Something went wrong. Please try again or contact us directly.' })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrors({ requirementDescription: 'Something went wrong. Please try again or contact us directly.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center">
        <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{ color: '#10b981' }} />
        <h3 className="font-display font-bold mb-2 text-lg" style={{ color: '#1a1a1a' }}>
          Proposal Request Submitted Successfully!
        </h3>
        <p className="font-body text-sm" style={{ color: '#4a4a4a' }}>
          We&apos;ll review your requirements and get back to you within 24 business hours.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Contact Information */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-xl p-6 border-2" style={{ borderColor: '#e5e7eb' }}>
        <div className="flex items-center gap-3 mb-6">
          <Users className="w-6 h-6" style={{ color: '#8458B3' }} />
          <h2 className="font-display font-bold text-xl" style={{ color: '#1a1a1a' }}>
            Contact Information
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block font-body font-semibold mb-2 text-sm" style={{ color: '#1a1a1a' }}>
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={(e) => {
                setFormData(prev => ({ ...prev, fullName: e.target.value }))
                if (errors.fullName) setErrors(prev => ({ ...prev, fullName: undefined }))
              }}
              className={`w-full px-4 py-3 rounded-lg border-2 font-body transition-colors ${
                errors.fullName ? 'border-red-500' : 'border-gray-300 focus:border-[#8458B3]'
              }`}
              placeholder="John Doe"
            />
            {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
          </div>

          <div>
            <label htmlFor="workEmail" className="block font-body font-semibold mb-2 text-sm" style={{ color: '#1a1a1a' }}>
              Work Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="workEmail"
              value={formData.workEmail}
              onChange={(e) => {
                setFormData(prev => ({ ...prev, workEmail: e.target.value }))
                if (errors.workEmail) setErrors(prev => ({ ...prev, workEmail: undefined }))
              }}
              className={`w-full px-4 py-3 rounded-lg border-2 font-body transition-colors ${
                errors.workEmail ? 'border-red-500' : 'border-gray-300 focus:border-[#8458B3]'
              }`}
              placeholder="john@company.com"
            />
            {errors.workEmail && <p className="mt-1 text-xs text-red-500">{errors.workEmail}</p>}
            <p className="mt-1 text-xs" style={{ color: '#6b7280' }}>
              Business email addresses only
            </p>
          </div>
        </div>
      </motion.section>

      {/* Company Information */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-white rounded-xl p-6 border-2" style={{ borderColor: '#e5e7eb' }}>
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="w-6 h-6" style={{ color: '#8458B3' }} />
          <h2 className="font-display font-bold text-xl" style={{ color: '#1a1a1a' }}>
            Company Information
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="companyName" className="block font-body font-semibold mb-2 text-sm" style={{ color: '#1a1a1a' }}>
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              value={formData.companyName}
              onChange={(e) => {
                setFormData(prev => ({ ...prev, companyName: e.target.value }))
                if (errors.companyName) setErrors(prev => ({ ...prev, companyName: undefined }))
              }}
              className={`w-full px-4 py-3 rounded-lg border-2 font-body transition-colors ${
                errors.companyName ? 'border-red-500' : 'border-gray-300 focus:border-[#8458B3]'
              }`}
              placeholder="Acme Inc."
            />
            {errors.companyName && <p className="mt-1 text-xs text-red-500">{errors.companyName}</p>}
          </div>

          <div>
            <label htmlFor="role" className="block font-body font-semibold mb-2 text-sm" style={{ color: '#1a1a1a' }}>
              Role / Designation <span className="text-red-500">*</span>
            </label>
            <select
              id="role"
              value={formData.role}
              onChange={(e) => {
                setFormData(prev => ({ ...prev, role: e.target.value }))
                if (errors.role) setErrors(prev => ({ ...prev, role: undefined }))
              }}
              className={`w-full px-4 py-3 rounded-lg border-2 font-body transition-colors ${
                errors.role ? 'border-red-500' : 'border-gray-300 focus:border-[#8458B3]'
              }`}>
              <option value="">Select your role</option>
              {roles.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
            {errors.role && <p className="mt-1 text-xs text-red-500">{errors.role}</p>}
          </div>

          <div>
            <label htmlFor="companySize" className="block font-body font-semibold mb-2 text-sm" style={{ color: '#1a1a1a' }}>
              Company Size <span className="text-red-500">*</span>
            </label>
            <select
              id="companySize"
              value={formData.companySize}
              onChange={(e) => {
                setFormData(prev => ({ ...prev, companySize: e.target.value }))
                if (errors.companySize) setErrors(prev => ({ ...prev, companySize: undefined }))
              }}
              className={`w-full px-4 py-3 rounded-lg border-2 font-body transition-colors ${
                errors.companySize ? 'border-red-500' : 'border-gray-300 focus:border-[#8458B3]'
              }`}>
              <option value="">Select company size</option>
              {companySizes.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
            {errors.companySize && <p className="mt-1 text-xs text-red-500">{errors.companySize}</p>}
          </div>

          <div>
            <label htmlFor="industry" className="block font-body font-semibold mb-2 text-sm" style={{ color: '#1a1a1a' }}>
              Industry <span className="text-red-500">*</span>
            </label>
            <select
              id="industry"
              value={formData.industry}
              onChange={(e) => {
                setFormData(prev => ({ ...prev, industry: e.target.value }))
                if (errors.industry) setErrors(prev => ({ ...prev, industry: undefined }))
              }}
              className={`w-full px-4 py-3 rounded-lg border-2 font-body transition-colors ${
                errors.industry ? 'border-red-500' : 'border-gray-300 focus:border-[#8458B3]'
              }`}>
              <option value="">Select industry</option>
              {industries.map(industry => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>
            {errors.industry && <p className="mt-1 text-xs text-red-500">{errors.industry}</p>}
          </div>

          <div className="md:col-span-2">
            <label htmlFor="location" className="block font-body font-semibold mb-2 text-sm" style={{ color: '#1a1a1a' }}>
              Location
            </label>
            <input
              type="text"
              id="location"
              value={formData.location}
              onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 font-body transition-colors focus:border-[#8458B3]"
              placeholder="City, Country"
            />
          </div>
        </div>
      </motion.section>

      {/* Project Details */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="bg-white rounded-xl p-6 border-2" style={{ borderColor: '#e5e7eb' }}>
        <div className="flex items-center gap-3 mb-6">
          <FileText className="w-6 h-6" style={{ color: '#8458B3' }} />
          <h2 className="font-display font-bold text-xl" style={{ color: '#1a1a1a' }}>
            Project Details
          </h2>
        </div>
        <div className="space-y-6">
          <div>
            <label className="block font-body font-semibold mb-3 text-sm" style={{ color: '#1a1a1a' }}>
              Service Type <span className="text-red-500">*</span>
            </label>
            <div className="grid md:grid-cols-2 gap-3">
              {serviceTypes.map(service => (
                <label
                  key={service}
                  className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-colors ${
                    formData.serviceType.includes(service)
                      ? 'border-[#8458B3] bg-purple-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}>
                  <input
                    type="checkbox"
                    checked={formData.serviceType.includes(service)}
                    onChange={() => handleServiceTypeChange(service)}
                    className="w-4 h-4 rounded border-gray-300 text-[#8458B3] focus:ring-[#8458B3]"
                  />
                  <span className="font-body text-sm" style={{ color: '#1a1a1a' }}>{service}</span>
                </label>
              ))}
            </div>
            {errors.serviceType && <p className="mt-2 text-xs text-red-500">{errors.serviceType}</p>}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="teamSize" className="block font-body font-semibold mb-2 text-sm" style={{ color: '#1a1a1a' }}>
                Team Size Involved <span className="text-red-500">*</span>
              </label>
              <select
                id="teamSize"
                value={formData.teamSize}
                onChange={(e) => {
                  setFormData(prev => ({ ...prev, teamSize: e.target.value }))
                  if (errors.teamSize) setErrors(prev => ({ ...prev, teamSize: undefined }))
                }}
                className={`w-full px-4 py-3 rounded-lg border-2 font-body transition-colors ${
                  errors.teamSize ? 'border-red-500' : 'border-gray-300 focus:border-[#8458B3]'
                }`}>
                <option value="">Select team size</option>
                {teamSizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
              {errors.teamSize && <p className="mt-1 text-xs text-red-500">{errors.teamSize}</p>}
            </div>

            <div>
              <label htmlFor="timeline" className="block font-body font-semibold mb-2 text-sm" style={{ color: '#1a1a1a' }}>
                Timeline <span className="text-red-500">*</span>
              </label>
              <select
                id="timeline"
                value={formData.timeline}
                onChange={(e) => {
                  setFormData(prev => ({ ...prev, timeline: e.target.value }))
                  if (errors.timeline) setErrors(prev => ({ ...prev, timeline: undefined }))
                }}
                className={`w-full px-4 py-3 rounded-lg border-2 font-body transition-colors ${
                  errors.timeline ? 'border-red-500' : 'border-gray-300 focus:border-[#8458B3]'
                }`}>
                <option value="">Select timeline</option>
                {timelines.map(timeline => (
                  <option key={timeline} value={timeline}>{timeline}</option>
                ))}
              </select>
              {errors.timeline && <p className="mt-1 text-xs text-red-500">{errors.timeline}</p>}
            </div>

            <div>
              <label htmlFor="budgetRange" className="block font-body font-semibold mb-2 text-sm" style={{ color: '#1a1a1a' }}>
                Budget Range <span className="text-red-500">*</span>
              </label>
              <select
                id="budgetRange"
                value={formData.budgetRange}
                onChange={(e) => {
                  setFormData(prev => ({ ...prev, budgetRange: e.target.value }))
                  if (errors.budgetRange) setErrors(prev => ({ ...prev, budgetRange: undefined }))
                }}
                className={`w-full px-4 py-3 rounded-lg border-2 font-body transition-colors ${
                  errors.budgetRange ? 'border-red-500' : 'border-gray-300 focus:border-[#8458B3]'
                }`}>
                <option value="">Select budget range</option>
                {budgetRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
              {errors.budgetRange && <p className="mt-1 text-xs text-red-500">{errors.budgetRange}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="requirementDescription" className="block font-body font-semibold mb-2 text-sm" style={{ color: '#1a1a1a' }}>
              Requirement Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="requirementDescription"
              value={formData.requirementDescription}
              onChange={(e) => {
                setFormData(prev => ({ ...prev, requirementDescription: e.target.value }))
                if (errors.requirementDescription) setErrors(prev => ({ ...prev, requirementDescription: undefined }))
              }}
              rows={6}
              className={`w-full px-4 py-3 rounded-lg border-2 font-body transition-colors resize-none ${
                errors.requirementDescription ? 'border-red-500' : 'border-gray-300 focus:border-[#8458B3]'
              }`}
              placeholder="Please describe your requirements, challenges, and goals in detail..."
            />
            {errors.requirementDescription && <p className="mt-1 text-xs text-red-500">{errors.requirementDescription}</p>}
            <p className="mt-1 text-xs" style={{ color: '#6b7280' }}>
              Minimum 50 characters. Please provide as much detail as possible.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Submit Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="flex flex-col items-center gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-body font-semibold text-white transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ backgroundColor: '#8458B3' }}>
          {isSubmitting ? 'Submitting...' : 'Request a Proposal'}
          {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
        </button>
        <p className="font-body text-xs text-center" style={{ color: '#6b7280' }}>
          By submitting, you agree to our{' '}
          <a href="/privacy-policy" className="underline hover:no-underline" style={{ color: '#8458B3' }}>
            Privacy Policy
          </a>
          {' '}and{' '}
          <a href="/terms-and-conditions" className="underline hover:no-underline" style={{ color: '#8458B3' }}>
            Terms and Conditions
          </a>
          .
        </p>
      </motion.div>
    </form>
  )
}
