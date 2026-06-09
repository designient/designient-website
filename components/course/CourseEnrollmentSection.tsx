'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, CheckCircle, ArrowRight, Percent, AlertCircle } from 'react-feather'
import Link from 'next/link'
import { useCurrency } from '../../contexts/CurrencyContext'
import { getEnrollmentConfig, type EnrollmentSectionProps } from '../../data/courseEnrollmentConfig'
import {
 formatDisplayPrice,
 getBookingTokenMinorUnits,
 getDisplayPricing,
 getFullPayMinorUnits,
} from '../../lib/coursePricingUtils'
import { formatEmiLine } from '../../lib/localizedPricing'
import { RazorpayCheckout } from '../payments/RazorpayCheckout'
import { CourseApplicationForm } from './CourseApplicationForm'
import { CourseSectionHeader } from './layout/CourseSectionHeader'

function buildEmiPlans(totalPrice: number, tokenAmount: number, currency: 'INR' | 'USD') {
 const remaining = totalPrice - tokenAmount
 const third = Math.round(remaining / 3)
 return [
 { label: 'Booking token (after acceptance)', amount: tokenAmount, when: 'At enrollment' },
 { label: '1st installment', amount: third, when: '3 days before batch' },
 { label: '2nd installment', amount: third, when: 'Month 2' },
 { label: '3rd installment', amount: remaining - third * 2, when: 'Month 3' },
 ].map((row) => ({ ...row, display: formatDisplayPrice(row.amount, currency) }))
}

export function CourseEnrollmentSection({
 courseSlug,
 courseName,
 features,
 duration,
 emiConfig,
 batchDates,
 bookingNote,
}: EnrollmentSectionProps) {
 const { currency, isLoading } = useCurrency()
 const [mounted, setMounted] = useState(false)
 const config = getEnrollmentConfig(courseSlug)

 useEffect(() => {
 setMounted(true)
 }, [])

 if (!config) return null

 const pricing = mounted && !isLoading ? getDisplayPricing(courseSlug, currency) : null
 const tokenAmount = config.bookingToken
 ? currency === 'INR'
 ? config.bookingToken.inr
 : config.bookingToken.usd
 : 0
 const emiPlans =
 pricing && config.paymentModel === 'booking_token_plus_emi' && tokenAmount
 ? buildEmiPlans(pricing.priceAmount, tokenAmount, currency)
 : null

 return (
 <section id="enrollment" className="py-24 md:py-32">
 <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
 <CourseSectionHeader
 title="Enrollment & Pricing"
 description="Transparent pricing in your selected currency. Choose how you'd like to proceed."
 />

 <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto">
 {/* Pricing summary */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="lg:col-span-5 bg-white rounded-2xl border border-[var(--border-default)] shadow-lg p-6 md:p-8"
 >
 {pricing && (
 <div className="mb-6">
 {pricing.hasEarlyBird && pricing.originalPrice && (
 <p className="font-body text-lg line-through mb-1" style={{ color: 'var(--text-muted)' }}>
 {pricing.originalPrice}
 </p>
 )}
 <p
 className="font-display font-bold mb-2"
 style={{ color: 'var(--color-forest)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}
 >
 {pricing.price}
 </p>
 <p className="font-body text-sm" style={{ color: 'var(--text-muted)' }}>
 Showing {currency} prices - toggle currency in the site header.
 </p>
 </div>
 )}

 {duration && (
 <p className="font-body text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
 Duration: {duration}
 </p>
 )}

 <ul className="space-y-2 mb-6">
 {features.map((feature) => (
 <li key={feature} className="flex items-start gap-2 text-sm">
 <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-forest)' }} />
 <span style={{ color: 'var(--text-secondary)' }}>{feature}</span>
 </li>
 ))}
 </ul>

 {emiConfig && mounted && !isLoading && (
 <p className="font-body text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
 {formatEmiLine(currency, emiConfig)}
 </p>
 )}

 {bookingNote && (
 <p className="font-body text-xs italic leading-relaxed" style={{ color: 'var(--text-muted)' }}>
 {bookingNote}
 </p>
 )}
 </motion.div>

 {/* Payment paths */}
 <div className="lg:col-span-7 space-y-6">
 {/* Free demo */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.05 }}
 className="bg-white rounded-2xl border-2 p-6 md:p-8"
 style={{ borderColor: 'var(--color-forest)' }}
 >
 <div className="flex items-center gap-3 mb-4">
 <div
 className="w-12 h-12 rounded-xl flex items-center justify-center"
 style={{ backgroundColor: 'var(--bg-section-green)' }}
 >
 <Calendar className="w-6 h-6" style={{ color: 'var(--color-forest)' }} strokeWidth={1.5} />
 </div>
 <h3 className="font-display font-bold text-xl" style={{ color: 'var(--text-primary)' }}>
 Request a Free Demo
 </h3>
 </div>
 <p className="font-body mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
 Book a live demo or counselling session with our team. No payment required.
 </p>
 <a
 href="https://calendar.app.google/N6Kg8VKMFU84v6UP8"
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 font-body font-semibold py-3 px-6 rounded-lg transition-all hover:scale-[1.02]"
 style={{ backgroundColor: 'var(--color-accent)', color: 'var(--text-on-accent)' }}
 >
 Request Free Demo
 <ArrowRight className="w-4 h-4" />
 </a>
 </motion.div>

 {/* Open checkout - full pay */}
 {config.enrollmentType === 'open_checkout' && pricing && mounted && !isLoading && (
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.1 }}
 className="bg-white rounded-2xl border border-[var(--border-default)] shadow-lg p-6 md:p-8"
 >
 <h3 className="font-display font-bold text-xl mb-4" style={{ color: 'var(--text-primary)' }}>
 Enroll Now - Pay Full Fee
 </h3>
 <p className="font-body mb-6" style={{ color: 'var(--text-secondary)' }}>
 Secure your seat with a one-time payment. Your seat is confirmed on successful payment.
 </p>
 <RazorpayCheckout
 amountMinorUnits={getFullPayMinorUnits(courseSlug, currency)}
 currency={currency}
 description={`${courseName} - full course fee`}
 courseSlug={courseSlug}
 buttonText={`Enroll Now - ${pricing.price}`}
 className="w-full font-body font-bold py-3.5 px-6 rounded-lg"
 buttonStyle={{ backgroundColor: 'var(--color-purple)', color: '#ffffff' }}
 />
 </motion.div>
 )}

 {/* Apply-first - booking token + EMI */}
 {config.enrollmentType === 'apply_then_token' && pricing && mounted && !isLoading && (
 <>
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.1 }}
 className="bg-white rounded-2xl border border-[var(--border-default)] shadow-lg p-6 md:p-8"
 >
 <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full" style={{ backgroundColor: 'var(--color-success-bg)' }}>
 <Percent className="w-4 h-4" style={{ color: 'var(--color-success)' }} />
 <span className="font-body font-semibold text-sm" style={{ color: 'var(--color-success)' }}>
 0% Interest on installment plans
 </span>
 </div>
 <h3 className="font-display font-bold text-xl mb-2" style={{ color: 'var(--text-primary)' }}>
 Step 1 - Apply for the Course
 </h3>
 <p className="font-body mb-4" style={{ color: 'var(--text-secondary)' }}>
 Submit your application below. Our team reviews applications within 48 hours.
 </p>
 <h3 className="font-display font-bold text-xl mb-2 mt-6" style={{ color: 'var(--text-primary)' }}>
 Step 2 - Reserve Seat (After Acceptance)
 </h3>
 <p className="font-body mb-4" style={{ color: 'var(--text-secondary)' }}>
 Pay a non-refundable booking token of{' '}
 <strong>{formatDisplayPrice(tokenAmount, currency)}</strong> - deducted from your total course fee.
 </p>
 <RazorpayCheckout
 amountMinorUnits={getBookingTokenMinorUnits(courseSlug, currency) ?? 0}
 currency={currency}
 description={`${courseName} - booking token`}
 courseSlug={courseSlug}
 buttonText={`Reserve Seat - ${formatDisplayPrice(tokenAmount, currency)}`}
 className="w-full font-body font-bold py-3.5 px-6 rounded-lg mb-2"
 buttonStyle={{
 backgroundColor: 'var(--color-forest)',
 color: '#ffffff',
 }}
 />
 <p className="font-body text-xs flex items-start gap-2" style={{ color: 'var(--text-muted)' }}>
 <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
 Booking token payment is for accepted applicants. Apply first if you have not been accepted yet.
 </p>
 </motion.div>

 {emiPlans && (
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.15 }}
 className="bg-white rounded-2xl border border-[var(--border-default)] p-6 md:p-8"
 >
 <h3 className="font-display font-bold text-lg mb-4" style={{ color: 'var(--text-primary)' }}>
 Remaining Fee - Installment Schedule
 </h3>
 <div className="space-y-3">
 {emiPlans.map((row) => (
 <div
 key={row.label}
 className="flex justify-between items-center py-2 border-b"
 style={{ borderColor: 'var(--border-default)' }}
 >
 <div>
 <p className="font-body font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
 {row.label}
 </p>
 <p className="font-body text-xs" style={{ color: 'var(--text-muted)' }}>
 {row.when}
 </p>
 </div>
 <p className="font-display font-bold" style={{ color: 'var(--color-forest)' }}>
 {row.display}
 </p>
 </div>
 ))}
 </div>
 </motion.div>
 )}
 </>
 )}
 </div>
 </div>

 {/* Application form for apply-first courses */}
 {config.enrollmentType === 'apply_then_token' && (
 <div className="mt-16 max-w-3xl mx-auto">
 <CourseApplicationForm courseSlug={courseSlug} courseName={courseName} />
 </div>
 )}

 <p className="text-center font-body text-sm mt-8" style={{ color: 'var(--text-muted)' }}>
 Questions? <Link href="/contact-us" className="underline" style={{ color: 'var(--color-forest)' }}>Contact us</Link> or{' '}
 <Link href="/pricing" className="underline" style={{ color: 'var(--color-forest)' }}>view full pricing details</Link>.
 </p>
 </div>
 </section>
 )
}
