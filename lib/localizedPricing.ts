'use client'

import { useMemo } from 'react'
import { useCurrency } from '../contexts/CurrencyContext'
import {
 type CoursePricingData,
 getFormattedPrice,
 type Currency,
} from '../data/coursePricing'

import type { CourseEmiConfig } from '../data/localizedPricingTypes'

export type { LocalizedAmount, LocalizedBonus, LocalizedValueRow, CourseEmiConfig, ComparisonRowLocalized } from '../data/localizedPricingTypes'

export const COURSE_SLUGS = {
 bootcamp: 'ui-ux-design-bootcamp',
 pro: 'ui-ux-design-pro',
 master: 'ui-ux-design-master',
 aiAutomation: 'ai-automation-accelerator',
 aiProduct: 'ai-product-design-course',
} as const satisfies Record<string, keyof CoursePricingData>

export type CourseSlug = keyof CoursePricingData

export function pickByCurrency(currency: Currency, inr: string, usd: string): string {
 return currency === 'INR' ? inr : usd
}

export function useCourseFees(slug: CourseSlug) {
 const { currency, isLoading } = useCurrency()

 const fees = useMemo(() => {
 if (isLoading) return null
 const inr = getFormattedPrice(slug, 'INR')
 const usd = getFormattedPrice(slug, 'USD')
 return {
 currency,
 earlyBirdInr: inr.price,
 earlyBirdUsd: usd.price,
 standardInr: inr.originalPrice ?? inr.price,
 standardUsd: usd.originalPrice ?? usd.price,
 displayEarlyBird: pickByCurrency(currency, inr.price, usd.price),
 displayStandard: pickByCurrency(currency, inr.originalPrice ?? inr.price, usd.originalPrice ?? usd.price),
 }
 }, [currency, isLoading, slug])

 return { fees, isLoading, currency }
}

export function formatCoursePriceLabel(slug: CourseSlug, currency: Currency): string {
 const pricing = getFormattedPrice(slug, currency)
 return pricing.originalPrice ? `${pricing.price} (was ${pricing.originalPrice})` : pricing.price
}

export function formatCoursePriceRange(
 slug: CourseSlug,
 currency: Currency,
 options?: { prefix?: string; suffix?: string }
): string {
 const fees = getFormattedPrice(slug, currency)
 const price = fees.originalPrice
 ? `${fees.price}–${fees.originalPrice.replace(/^[₹$]/, '')}`
 : fees.price
 const prefix = options?.prefix ?? ''
 const suffix = options?.suffix ?? ''
 return `${prefix}${price}${suffix}`.trim()
}

export function formatEmiLine(currency: Currency, config: CourseEmiConfig): string {
 const { months, perMonth } = currency === 'INR' ? config.inr : config.usd
 const prefix = currency === 'INR' ? 'Rs ' : ''
 const suffix = currency === 'INR' ? '/month' : '/month'
 return `EMI available - ${prefix}${perMonth}${suffix} for ${months} months (early bird) · Zero interest`
}

export function formatPayPalEmiSuffix(currency: Currency, internationalUsd?: string): string {
 if (currency === 'INR') {
 return ' · PayPal available for international learners'
 }
 return internationalUsd ? ` · International ${internationalUsd} via PayPal` : ' · PayPal on Razorpay Checkout'
}
