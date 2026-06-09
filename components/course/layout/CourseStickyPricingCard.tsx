'use client'

import React, { useEffect, useState } from 'react'
import { CheckCircle, Clock, ArrowRight } from 'react-feather'
import { useCurrency } from '../../../contexts/CurrencyContext'
import { getEnrollmentConfig } from '../../../data/courseEnrollmentConfig'
import type { CoursePricingData } from '../../../data/coursePricing'
import {
 getBookingTokenDisplay,
 getBookingTokenMinorUnits,
 getDisplayPricing,
 getFullPayMinorUnits,
} from '../../../lib/coursePricingUtils'
import { getPrimaryScrollTarget, scrollToElement } from '../../../lib/enrollmentActions'
import { RazorpayCheckout } from '../../payments/RazorpayCheckout'
import { formatEmiLine } from '../../../lib/localizedPricing'
import type { CourseEmiConfig } from '../../../data/localizedPricingTypes'

type CourseStickyPricingCardProps = {
 courseSlug: keyof CoursePricingData | 'ai-automation-live' | 'ai-product-design-live'
 courseName: string
 duration?: string
 features?: string[]
 emiConfig?: CourseEmiConfig
 variant?: 'sidebar' | 'inline'
}

export function CourseStickyPricingCard({
 courseSlug,
 courseName,
 duration,
 features = [],
 emiConfig,
 variant = 'sidebar',
}: CourseStickyPricingCardProps) {
 const { currency, isLoading } = useCurrency()
 const [mounted, setMounted] = useState(false)
 const config = getEnrollmentConfig(courseSlug)

 useEffect(() => {
 setMounted(true)
 }, [])

 const handlePrimaryCta = () => {
 if (!config) return
 scrollToElement(getPrimaryScrollTarget(config))
 }

 const isWorkshop = config?.track === 'workshop'
 const paidSlug = !isWorkshop ? (courseSlug as keyof CoursePricingData) : null

 const pricing = paidSlug && mounted && !isLoading ? getDisplayPricing(paidSlug, currency) : null
 const bookingToken = paidSlug && mounted && !isLoading ? getBookingTokenDisplay(paidSlug, currency) : null
 const emiLine = emiConfig && mounted && !isLoading ? formatEmiLine(currency, emiConfig) : null

 const stickyClass =
 variant === 'sidebar' ? 'lg:sticky lg:top-24' : ''

 if (!config) return null

 return (
 <div
 className={`bg-white rounded-2xl border border-[var(--border-default)] shadow-lg p-6 ${stickyClass}`}
 >
 {!isWorkshop && pricing && (
 <div className="mb-4">
 {pricing.hasEarlyBird && pricing.originalPrice && (
 <p className="font-body text-sm line-through mb-1" style={{ color: 'var(--text-muted)' }}>
 {pricing.originalPrice}
 </p>
 )}
 <p className="font-display font-bold text-3xl mb-1" style={{ color: 'var(--color-forest)' }}>
 {pricing.price}
 </p>
 {pricing.hasEarlyBird && (
 <p className="font-body text-xs font-semibold" style={{ color: 'var(--color-forest)' }}>
 Early bird pricing
 </p>
 )}
 </div>
 )}

 {isWorkshop && (
 <p className="font-display font-bold text-2xl mb-4" style={{ color: 'var(--color-purple)' }}>
 Free Workshop
 </p>
 )}

 {duration && (
 <div className="flex items-center gap-2 mb-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
 <Clock className="w-4 h-4 flex-shrink-0" />
 <span>{duration}</span>
 </div>
 )}

 {features.length > 0 && (
 <ul className="space-y-2 mb-5">
 {features.slice(0, 4).map((feature) => (
 <li key={feature} className="flex items-start gap-2 text-sm">
 <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-forest)' }} />
 <span style={{ color: 'var(--text-secondary)' }}>{feature}</span>
 </li>
 ))}
 </ul>
 )}

 {emiLine && config.paymentModel === 'booking_token_plus_emi' && (
 <p className="font-body text-xs mb-4 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
 {emiLine}
 </p>
 )}

 {config.enrollmentType === 'open_checkout' && paidSlug && mounted && !isLoading && (
 <RazorpayCheckout
 amountMinorUnits={getFullPayMinorUnits(paidSlug, currency)}
 currency={currency}
 description={`${courseName} - full course fee`}
 courseSlug={paidSlug}
 buttonText={`${config.primaryCtaLabel} - ${pricing?.price ?? ''}`}
 className="w-full font-body font-bold py-3.5 px-4 rounded-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2 mb-3"
 buttonStyle={{
 backgroundColor: 'var(--color-purple)',
 color: '#ffffff',
 }}
 />
 )}

 {(config.enrollmentType === 'apply_then_token' || isWorkshop) && (
 <button
 type="button"
 onClick={handlePrimaryCta}
 className="w-full font-body font-bold py-3.5 px-4 rounded-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2 mb-3"
 style={{ backgroundColor: 'var(--color-purple)', color: '#ffffff' }}
 >
 {config.primaryCtaLabel}
 <ArrowRight className="w-4 h-4" />
 </button>
 )}

 {config.enrollmentType === 'apply_then_token' && paidSlug && bookingToken && mounted && !isLoading && (
 <div className="pt-3 border-t" style={{ borderColor: 'var(--border-default)' }}>
 <p className="font-body text-xs mb-2" style={{ color: 'var(--text-muted)' }}>
 After acceptance, reserve your seat with a non-refundable booking token (deducted from total fee):
 </p>
 <RazorpayCheckout
 amountMinorUnits={getBookingTokenMinorUnits(paidSlug, currency) ?? 0}
 currency={currency}
 description={`${courseName} - booking token`}
 courseSlug={paidSlug}
 buttonText={`${config.secondaryCtaLabel ?? 'Reserve Seat'} - ${bookingToken}`}
 className="w-full font-body font-semibold py-3 px-4 rounded-lg border-2 transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
 buttonStyle={{
 backgroundColor: 'transparent',
 color: 'var(--color-forest)',
 borderColor: 'var(--color-forest)',
 }}
 />
 </div>
 )}
 </div>
 )
}
