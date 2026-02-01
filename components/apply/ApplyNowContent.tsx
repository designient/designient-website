'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Clock, MessageCircle, Calendar } from 'react-feather'
import { useRouter } from 'next/navigation'

interface FormData {
  program: string
  applicantType: string
  fullName: string
  email: string
  phone: string
  currentBackground: string
  experienceLevel: string
  careerGoal: string
  availability: string
  city: string
  motivation: string
  consent: boolean
}

const programs = [
  'UI/UX Design Pro',
  'UI/UX Design Bootcamp',
  'UI/UX Design Master',
  'Prompt Engineering Mastery'
]

const applicantTypes = [
  'Student',
  'Working Professional',
  'Career Switcher'
]

const experienceLevels = [
  'Complete Beginner',
  'Some Design Knowledge',
  'Intermediate',
  'Advanced'
]

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

export function ApplyNowContent() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState<'router' | 'form' | 'success'>('router')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [formData, setFormData] = useState<FormData>({
    program: '',
    applicantType: '',
    fullName: '',
    email: '',
    phone: '',
    currentBackground: '',
    experienceLevel: '',
    careerGoal: '',
    availability: '',
    city: '',
    motivation: '',
    consent: false
  })

  const validateRouter = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}
    
    if (!formData.program) {
      newErrors.program = 'Please select a program'
    }
    
    if (!formData.applicantType) {
      newErrors.applicantType = 'Please select your applicant type'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}

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
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone) || formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid phone number'
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

    if (!formData.consent) {
      newErrors.consent = 'Please accept the terms and conditions'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleRouterSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (validateRouter()) {
      setCurrentStep('form')
      setErrors({})
    }
  }

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          program: formData.program,
          applicantType: formData.applicantType,
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          currentBackground: formData.currentBackground,
          experienceLevel: formData.experienceLevel,
          careerGoal: formData.careerGoal,
          availability: formData.availability,
          city: formData.city,
          motivation: formData.motivation,
          metadata: {
            program: formData.program,
            applicantType: formData.applicantType,
            experienceLevel: formData.experienceLevel,
            availability: formData.availability,
            city: formData.city
          }
        }),
      })

      if (response.ok) {
        setCurrentStep('success')
      } else {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Submission failed')
      }
    } catch (error) {
      console.error('Error submitting application:', error)
      setErrors({ motivation: 'Something went wrong. Please try again or contact us directly.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (currentStep === 'success') {
    return (
      <section className="pt-24 pb-16 md:pt-32 md:pb-24" style={{ backgroundColor: '#FFF6E2' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg border-2" style={{ borderColor: '#10b981' }}>
              <CheckCircle className="w-16 h-16 mx-auto mb-6" style={{ color: '#10b981' }} />
              <h2 className="font-display font-bold mb-4 text-2xl md:text-3xl" style={{ color: '#1a1a1a' }}>
                Application Submitted Successfully!
              </h2>
              <p className="font-body text-lg mb-6 leading-relaxed" style={{ color: '#4a4a4a' }}>
                Thank you for your interest in Designient. We&apos;ve received your application and will review it within 24 hours.
              </p>
              <p className="font-body mb-8 leading-relaxed" style={{ color: '#4a4a4a' }}>
                You&apos;ll receive a confirmation email shortly with next steps, including how to book your counselling call.
              </p>
              
              <div className="space-y-4">
                <Link
                  href="/contact-us?reason=counselling-call"
                  className="inline-flex items-center justify-center w-full px-8 py-4 rounded-lg font-body font-semibold text-white transition-all hover:scale-105"
                  style={{ backgroundColor: '#8458B3' }}>
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Counselling Call
                </Link>
                
                <p className="font-body text-sm" style={{ color: '#6b7280' }}>
                  Or connect with us on{' '}
                  <a
                    href={`https://wa.me/919353000320?text=${encodeURIComponent(`Hi Designient team, I just applied for ${formData.program}. I'd like to fast-track my application.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:no-underline font-semibold"
                    style={{ color: '#8458B3' }}>
                    WhatsApp
                  </a>
                  {' '}for faster response
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24" style={{ backgroundColor: '#FFF6E2' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display font-bold mb-6"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: '#1a1a1a',
                lineHeight: '1.2'
              }}>
              Apply to Designient
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-lg md:text-xl mb-8 leading-relaxed"
              style={{
                color: '#4a4a4a',
                fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                lineHeight: '1.8'
              }}>
              Limited seats. Mentor-led learning. Applications are reviewed before confirmation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12">
            <h2 className="font-display font-bold mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#8458B3' }}>
              How It Works
            </h2>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { step: '1', title: 'Apply Online', description: 'Complete the application form below' },
                { step: '2', title: 'Speak with Our Team', description: 'We\'ll review your application and schedule a call' },
                { step: '3', title: 'Confirm Your Seat', description: 'Secure your spot in the program' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="bg-white border-2 rounded-xl p-6 text-center"
                  style={{ borderColor: '#e5e7eb' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-white mx-auto mb-4" style={{ backgroundColor: '#8458B3', fontSize: '1.25rem' }}>
                    {item.step}
                  </div>
                  <h3 className="font-display font-semibold mb-2" style={{ fontSize: '1.125rem', color: '#1a1a1a' }}>
                    {item.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: '#4a4a4a' }}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50" style={{ backgroundColor: '#eff6ff' }}>
                <Clock className="w-5 h-5" style={{ color: '#8458B3' }} />
                <p className="font-body text-sm font-semibold" style={{ color: '#1a1a1a' }}>
                  We respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Router */}
      {currentStep === 'router' && (
        <section className="py-16 md:py-24" style={{ backgroundColor: '#f9fafb' }}>
          <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h2 className="font-display font-bold mb-6 text-center" style={{ fontSize: '1.75rem', color: '#1a1a1a' }}>
                  Let&apos;s Get Started
                </h2>
                <form onSubmit={handleRouterSubmit} className="space-y-6">
                  <div>
                    <label className="block font-body font-semibold mb-3 text-sm" style={{ color: '#1a1a1a' }}>
                      1. Which program are you applying for? <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-2">
                      {programs.map(program => (
                        <label
                          key={program}
                          className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                            formData.program === program
                              ? 'border-[#8458B3] bg-purple-50'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}>
                          <input
                            type="radio"
                            name="program"
                            value={program}
                            checked={formData.program === program}
                            onChange={(e) => {
                              setFormData(prev => ({ ...prev, program: e.target.value }))
                              if (errors.program) setErrors(prev => ({ ...prev, program: undefined }))
                            }}
                            className="w-4 h-4 text-[#8458B3] focus:ring-[#8458B3]"
                          />
                          <span className="font-body" style={{ color: '#1a1a1a' }}>{program}</span>
                        </label>
                      ))}
                    </div>
                    {errors.program && <p className="mt-2 text-xs text-red-500">{errors.program}</p>}
                  </div>

                  <div>
                    <label className="block font-body font-semibold mb-3 text-sm" style={{ color: '#1a1a1a' }}>
                      2. What best describes you? <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-2">
                      {applicantTypes.map(type => (
                        <label
                          key={type}
                          className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                            formData.applicantType === type
                              ? 'border-[#8458B3] bg-purple-50'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}>
                          <input
                            type="radio"
                            name="applicantType"
                            value={type}
                            checked={formData.applicantType === type}
                            onChange={(e) => {
                              setFormData(prev => ({ ...prev, applicantType: e.target.value }))
                              if (errors.applicantType) setErrors(prev => ({ ...prev, applicantType: undefined }))
                            }}
                            className="w-4 h-4 text-[#8458B3] focus:ring-[#8458B3]"
                          />
                          <span className="font-body" style={{ color: '#1a1a1a' }}>{type}</span>
                        </label>
                      ))}
                    </div>
                    {errors.applicantType && <p className="mt-2 text-xs text-red-500">{errors.applicantType}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-8 py-4 rounded-lg font-body font-semibold text-white transition-all hover:scale-105"
                    style={{ backgroundColor: '#8458B3' }}>
                    Continue to Application
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Application Form */}
      {currentStep === 'form' && (
        <section className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
          <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl p-8 shadow-lg border-2" style={{ borderColor: '#e5e7eb' }}>
                <div className="mb-6">
                  <button
                    onClick={() => setCurrentStep('router')}
                    className="inline-flex items-center text-sm font-body mb-4 hover:underline"
                    style={{ color: '#8458B3' }}>
                    ← Back
                  </button>
                  <h2 className="font-display font-bold mb-2" style={{ fontSize: '1.75rem', color: '#1a1a1a' }}>
                    Application Form
                  </h2>
                  <p className="font-body text-sm" style={{ color: '#6b7280' }}>
                    Applying for: <strong>{formData.program}</strong> as a <strong>{formData.applicantType}</strong>
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-6">
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
                      <label htmlFor="email" className="block font-body font-semibold mb-2 text-sm" style={{ color: '#1a1a1a' }}>
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData(prev => ({ ...prev, email: e.target.value }))
                          if (errors.email) setErrors(prev => ({ ...prev, email: undefined }))
                        }}
                        className={`w-full px-4 py-3 rounded-lg border-2 font-body transition-colors ${
                          errors.email ? 'border-red-500' : 'border-gray-300 focus:border-[#8458B3]'
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block font-body font-semibold mb-2 text-sm" style={{ color: '#1a1a1a' }}>
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData(prev => ({ ...prev, phone: e.target.value }))
                        if (errors.phone) setErrors(prev => ({ ...prev, phone: undefined }))
                      }}
                      className={`w-full px-4 py-3 rounded-lg border-2 font-body transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-gray-300 focus:border-[#8458B3]'
                      }`}
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="currentBackground" className="block font-body font-semibold mb-2 text-sm" style={{ color: '#1a1a1a' }}>
                      Current Background <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="currentBackground"
                      value={formData.currentBackground}
                      onChange={(e) => {
                        setFormData(prev => ({ ...prev, currentBackground: e.target.value }))
                        if (errors.currentBackground) setErrors(prev => ({ ...prev, currentBackground: undefined }))
                      }}
                      rows={3}
                      className={`w-full px-4 py-3 rounded-lg border-2 font-body transition-colors resize-none ${
                        errors.currentBackground ? 'border-red-500' : 'border-gray-300 focus:border-[#8458B3]'
                      }`}
                      placeholder="Tell us about your current role, education, or background..."
                    />
                    {errors.currentBackground && <p className="mt-1 text-xs text-red-500">{errors.currentBackground}</p>}
                  </div>

                  <div>
                    <label htmlFor="experienceLevel" className="block font-body font-semibold mb-2 text-sm" style={{ color: '#1a1a1a' }}>
                      Experience Level <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="experienceLevel"
                      value={formData.experienceLevel}
                      onChange={(e) => {
                        setFormData(prev => ({ ...prev, experienceLevel: e.target.value }))
                        if (errors.experienceLevel) setErrors(prev => ({ ...prev, experienceLevel: undefined }))
                      }}
                      className={`w-full px-4 py-3 rounded-lg border-2 font-body transition-colors ${
                        errors.experienceLevel ? 'border-red-500' : 'border-gray-300 focus:border-[#8458B3]'
                      }`}>
                      <option value="">Select your experience level</option>
                      {experienceLevels.map(level => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                    {errors.experienceLevel && <p className="mt-1 text-xs text-red-500">{errors.experienceLevel}</p>}
                  </div>

                  <div>
                    <label htmlFor="careerGoal" className="block font-body font-semibold mb-2 text-sm" style={{ color: '#1a1a1a' }}>
                      Career Goal <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="careerGoal"
                      value={formData.careerGoal}
                      onChange={(e) => {
                        setFormData(prev => ({ ...prev, careerGoal: e.target.value }))
                        if (errors.careerGoal) setErrors(prev => ({ ...prev, careerGoal: undefined }))
                      }}
                      rows={3}
                      className={`w-full px-4 py-3 rounded-lg border-2 font-body transition-colors resize-none ${
                        errors.careerGoal ? 'border-red-500' : 'border-gray-300 focus:border-[#8458B3]'
                      }`}
                      placeholder="What do you hope to achieve with this course? What are your career aspirations?"
                    />
                    {errors.careerGoal && <p className="mt-1 text-xs text-red-500">{errors.careerGoal}</p>}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="availability" className="block font-body font-semibold mb-2 text-sm" style={{ color: '#1a1a1a' }}>
                        Availability <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="availability"
                        value={formData.availability}
                        onChange={(e) => {
                          setFormData(prev => ({ ...prev, availability: e.target.value }))
                          if (errors.availability) setErrors(prev => ({ ...prev, availability: undefined }))
                        }}
                        className={`w-full px-4 py-3 rounded-lg border-2 font-body transition-colors ${
                          errors.availability ? 'border-red-500' : 'border-gray-300 focus:border-[#8458B3]'
                        }`}>
                        <option value="">Select availability</option>
                        {availabilityOptions.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                      {errors.availability && <p className="mt-1 text-xs text-red-500">{errors.availability}</p>}
                    </div>

                    <div>
                      <label htmlFor="city" className="block font-body font-semibold mb-2 text-sm" style={{ color: '#1a1a1a' }}>
                        City <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="city"
                        value={formData.city}
                        onChange={(e) => {
                          setFormData(prev => ({ ...prev, city: e.target.value }))
                          if (errors.city) setErrors(prev => ({ ...prev, city: undefined }))
                        }}
                        className={`w-full px-4 py-3 rounded-lg border-2 font-body transition-colors ${
                          errors.city ? 'border-red-500' : 'border-gray-300 focus:border-[#8458B3]'
                        }`}>
                        <option value="">Select your city</option>
                        {cities.map(city => (
                          <option key={city} value={city}>{city}</option>
                        ))}
                      </select>
                      {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="motivation" className="block font-body font-semibold mb-2 text-sm" style={{ color: '#1a1a1a' }}>
                      Why do you want to join Designient? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="motivation"
                      value={formData.motivation}
                      onChange={(e) => {
                        setFormData(prev => ({ ...prev, motivation: e.target.value }))
                        if (errors.motivation) setErrors(prev => ({ ...prev, motivation: undefined }))
                      }}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg border-2 font-body transition-colors resize-none ${
                        errors.motivation ? 'border-red-500' : 'border-gray-300 focus:border-[#8458B3]'
                      }`}
                      placeholder="Share your motivation, what excites you about design, and why you chose Designient..."
                    />
                    {errors.motivation && <p className="mt-1 text-xs text-red-500">{errors.motivation}</p>}
                    <p className="mt-1 text-xs" style={{ color: '#6b7280' }}>
                      Minimum 50 characters. Please be specific and genuine.
                    </p>
                  </div>

                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => {
                          setFormData(prev => ({ ...prev, consent: e.target.checked }))
                          if (errors.consent) setErrors(prev => ({ ...prev, consent: undefined }))
                        }}
                        className="w-5 h-5 mt-0.5 rounded border-gray-300 text-[#8458B3] focus:ring-[#8458B3]"
                      />
                      <span className="font-body text-sm leading-relaxed" style={{ color: '#4a4a4a' }}>
                        I agree to the{' '}
                        <Link href="/terms-and-conditions" className="underline hover:no-underline" style={{ color: '#8458B3' }}>
                          Terms and Conditions
                        </Link>
                        {', '}
                        <Link href="/privacy-policy" className="underline hover:no-underline" style={{ color: '#8458B3' }}>
                          Privacy Policy
                        </Link>
                        {', and '}
                        <Link href="/cancellation-refund-policy" className="underline hover:no-underline" style={{ color: '#8458B3' }}>
                          Cancellation & Refund Policy
                        </Link>
                        . I consent to receive communications via email, phone, and WhatsApp regarding my application.
                      </span>
                    </label>
                    {errors.consent && <p className="mt-2 text-xs text-red-500">{errors.consent}</p>}
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-8 py-4 rounded-lg font-body font-semibold text-white transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ backgroundColor: '#8458B3' }}>
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                      {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
                    </button>
                    <p className="mt-4 font-body text-xs text-center" style={{ color: '#6b7280' }}>
                      By submitting, you acknowledge that applications are reviewed and seats are limited. No placement or outcome guarantees.
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </>
  )
}
