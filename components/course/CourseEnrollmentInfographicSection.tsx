'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, CheckCircle, Clock, Percent, Shield, Users, Zap } from 'react-feather'
import { useCurrency } from '../../contexts/CurrencyContext'
import { getEnrollmentConfig } from '../../data/courseEnrollmentConfig'
import type { EnrollmentSectionProps } from '../../data/courseEnrollmentConfig'
import {
  formatDisplayPrice,
  getBookingTokenMinorUnits,
  getDisplayPricing,
  getFullPayMinorUnits,
} from '../../lib/coursePricingUtils'
import { formatEmiLine } from '../../lib/localizedPricing'
import { RazorpayCheckout } from '../payments/RazorpayCheckout'
import { CourseQuickApplicationForm } from './CourseQuickApplicationForm'
import { fadeUp, motionEase, staggerContainer, viewportOnce } from './animated/motion'

type CourseEnrollmentInfographicSectionProps = EnrollmentSectionProps & {
  subtitle?: string
  seatNote?: string
}

const APPLY_TRUST_CHIPS = [
  { icon: Clock, text: 'Application reviewed within 24 hours' },
  { icon: Users, text: 'Curated small cohort for personalized mentorship' },
  { icon: Shield, text: 'Limited seats per batch - admissions close when full' },
]

const OPEN_TRUST_CHIPS = [
  { icon: Zap, text: 'Seat confirmed on payment' },
  { icon: Shield, text: 'Refund guarantee stated on the course page' },
  { icon: Users, text: 'Live mentor-led cohort' },
]

export function CourseEnrollmentInfographicSection({
  courseSlug,
  courseName,
  features,
  duration,
  emiConfig,
  bookingNote,
  subtitle,
  seatNote,
}: CourseEnrollmentInfographicSectionProps) {
  const { currency, isLoading } = useCurrency()
  const [mounted, setMounted] = useState(false)
  const [defaultCity, setDefaultCity] = useState('')
  const config = getEnrollmentConfig(courseSlug)
  const isApplyFlow = config?.enrollmentType === 'apply_then_token'

  useEffect(() => {
    setMounted(true)
    const city = new URLSearchParams(window.location.search).get('city')?.toLowerCase()
    const map: Record<string, string> = {
      bangalore: 'Bangalore',
      hyderabad: 'Hyderabad',
      pune: 'Pune',
    }
    if (city && map[city]) setDefaultCity(map[city])
  }, [])

  if (!config) return null

  const pricing = mounted && !isLoading ? getDisplayPricing(courseSlug, currency) : null
  const tokenAmount = config.bookingToken
    ? currency === 'INR'
      ? config.bookingToken.inr
      : config.bookingToken.usd
    : 0
  const trustChips = isApplyFlow ? APPLY_TRUST_CHIPS : OPEN_TRUST_CHIPS

  return (
    <section id="enrollment" className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: motionEase }}
          className="text-center mb-10"
        >
          <h2
            id="course-application-form-title"
            className="font-display font-bold mb-4"
            style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
          >
            {isApplyFlow ? `Apply for ${courseName}` : `Enroll in ${courseName}`}
          </h2>
          <p className="font-body text-base md:text-lg max-w-2xl mx-auto mb-2" style={{ color: 'var(--text-secondary)' }}>
            {subtitle ??
              (isApplyFlow
                ? 'Application reviewed within 24 hours. Curated small cohort for personalized mentorship.'
                : 'Secure your seat with one payment. Join the next live cohort.')}
          </p>
          {seatNote && (
            <p className="font-body text-sm max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              {seatNote}
            </p>
          )}
          {isApplyFlow && !seatNote && (
            <p className="font-body text-sm max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Limited seats per batch. To maintain quality mentorship and personalised feedback, each batch is intentionally kept small. Admissions close once seats are filled.
            </p>
          )}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {trustChips.map((chip) => {
            const Icon = chip.icon
            return (
              <motion.div
                key={chip.text}
                variants={fadeUp}
                className="inline-flex items-center gap-2 font-body text-xs md:text-sm px-4 py-2.5 rounded-full border"
                style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--bg-card)', color: 'var(--text-secondary)' }}
              >
                <Icon className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-forest)' }} />
                {chip.text}
              </motion.div>
            )
          })}
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-5 space-y-5"
          >
            {pricing && (
              <div
                className="rounded-2xl border p-5 md:p-6"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-default)' }}
              >
                {pricing.hasEarlyBird && pricing.originalPrice && (
                  <p className="font-body text-lg line-through mb-1" style={{ color: 'var(--text-muted)' }}>
                    {pricing.originalPrice}
                  </p>
                )}
                <p className="font-display font-bold text-3xl md:text-4xl mb-1" style={{ color: 'var(--color-forest)' }}>
                  {pricing.price}
                </p>
                {duration && (
                  <p className="font-body text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                    Duration: {duration}
                  </p>
                )}
                <ul className="space-y-2">
                  {features.slice(0, 5).map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-forest)' }} />
                      <span style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                {emiConfig && mounted && !isLoading && (
                  <p className="font-body text-sm mt-4 pt-4 border-t" style={{ color: 'var(--text-secondary)', borderColor: 'var(--border-default)' }}>
                    {formatEmiLine(currency, emiConfig)}
                  </p>
                )}
              </div>
            )}

            <div
              className="rounded-2xl border p-5"
              style={{ borderColor: 'var(--color-forest)', backgroundColor: 'var(--color-success-bg)' }}
            >
              <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 rounded-full" style={{ backgroundColor: 'var(--bg-card)' }}>
                <Percent className="w-4 h-4" style={{ color: 'var(--color-success)' }} />
                <span className="font-body font-semibold text-sm" style={{ color: 'var(--color-success)' }}>
                  {isApplyFlow ? '0% Interest on installment plans' : 'Transparent pricing · No hidden fees'}
                </span>
              </div>
              <ol className="space-y-3 font-body text-sm" style={{ color: 'var(--text-secondary)' }}>
                {isApplyFlow ? (
                  <>
                    <li className="flex gap-3">
                      <span className="font-bold flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: 'var(--color-accent)', color: 'var(--text-on-accent)' }}>1</span>
                      <span>Submit your quick application (takes under 2 minutes)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: 'var(--bg-subtle)', color: 'var(--text-muted)' }}>2</span>
                      <span>
                        After acceptance, reserve your seat with a{' '}
                        <strong>{mounted && !isLoading ? formatDisplayPrice(tokenAmount, currency) : '…'}</strong> booking token
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: 'var(--bg-subtle)', color: 'var(--text-muted)' }}>3</span>
                      <span>Pay the remaining fee in 3 zero-interest installments</span>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex gap-3">
                      <span className="font-bold flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: 'var(--color-accent)', color: 'var(--text-on-accent)' }}>1</span>
                      <span>Review pricing and cohort details above</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: 'var(--bg-subtle)', color: 'var(--text-muted)' }}>2</span>
                      <span>Pay the early bird fee in one step via Razorpay</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: 'var(--bg-subtle)', color: 'var(--text-muted)' }}>3</span>
                      <span>Receive onboarding details within 24 hours</span>
                    </li>
                  </>
                )}
              </ol>
              {bookingNote && (
                <p className="font-body text-xs italic mt-4 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {bookingNote}
                </p>
              )}
            </div>

            <div
              className="rounded-2xl border p-5 flex items-start gap-3"
              style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--bg-card)' }}
            >
              <Calendar className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
              <div>
                <p className="font-body font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>
                  Prefer to talk first?
                </p>
                <a
                  href="https://calendar.app.google/N6Kg8VKMFU84v6UP8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm underline"
                  style={{ color: 'var(--color-primary)' }}
                >
                  Book a free demo call
                </a>
              </div>
            </div>

            {pricing && mounted && !isLoading && (
              <RazorpayCheckout
                amountMinorUnits={
                  isApplyFlow
                    ? getBookingTokenMinorUnits(courseSlug, currency) ?? 0
                    : getFullPayMinorUnits(courseSlug, currency)
                }
                currency={currency}
                description={
                  isApplyFlow
                    ? `${courseName} - booking token (accepted applicants)`
                    : `${courseName} - full course fee`
                }
                courseSlug={courseSlug}
                buttonText={
                  isApplyFlow
                    ? `Reserve Seat - ${formatDisplayPrice(tokenAmount, currency)}`
                    : `${config.primaryCtaLabel} - ${pricing.price}`
                }
                className="w-full font-body font-bold py-3 px-6 rounded-xl"
                buttonStyle={{ backgroundColor: 'var(--color-forest)', color: '#ffffff' }}
              />
            )}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-7"
          >
            {isApplyFlow ? (
              <>
                <p className="font-body text-sm mb-4 font-semibold" style={{ color: 'var(--text-primary)' }}>
                  Fill out the form below to submit your application for review.
                </p>
                <CourseQuickApplicationForm
                  courseSlug={courseSlug}
                  courseName={courseName}
                  formId="course-application-form"
                  defaultCity={defaultCity}
                />
              </>
            ) : (
              <>
                <p className="font-body text-sm mb-4 font-semibold" style={{ color: 'var(--text-primary)' }}>
                  Questions before you enroll? Send a quick note and we will reply within 24 hours.
                </p>
                <CourseQuickApplicationForm
                  courseSlug={courseSlug}
                  courseName={courseName}
                  formId="course-enrollment-inquiry"
                  defaultCity={defaultCity}
                />
              </>
            )}
          </motion.div>
        </div>

        <p className="text-center font-body text-sm mt-8" style={{ color: 'var(--text-muted)' }}>
          Questions? <Link href="/contact-us" className="underline" style={{ color: 'var(--color-forest)' }}>Contact us</Link> or{' '}
          <Link href="/pricing" className="underline" style={{ color: 'var(--color-forest)' }}>view full pricing details</Link>.
        </p>
      </div>
    </section>
  )
}
