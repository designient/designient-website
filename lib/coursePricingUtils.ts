import type { Currency } from '../data/coursePricing'
import { coursePricing, type CoursePricingData } from '../data/coursePricing'
import { getEnrollmentConfig } from '../data/courseEnrollmentConfig'

export function parsePriceAmount(priceStr: string): number {
  return parseFloat(priceStr.replace(/[₹$,\s]/g, ''))
}

export function formatDisplayPrice(amount: number, currency: Currency): string {
  if (currency === 'INR') {
    return `₹${amount.toLocaleString('en-IN')}`
  }
  return `$${amount.toLocaleString('en-US')}`
}

export function getDisplayPricing(slug: keyof CoursePricingData, currency: Currency) {
  const pricing = coursePricing[slug][currency === 'INR' ? 'inr' : 'usd']
  return {
    price: pricing.price,
    originalPrice: pricing.originalPrice,
    priceAmount: parsePriceAmount(pricing.price),
    originalPriceAmount: pricing.originalPrice ? parsePriceAmount(pricing.originalPrice) : undefined,
    hasEarlyBird: Boolean(pricing.originalPrice && pricing.originalPrice !== pricing.price),
  }
}

export function getBookingTokenDisplay(slug: keyof CoursePricingData, currency: Currency): string | null {
  const config = getEnrollmentConfig(slug)
  if (!config?.bookingToken) return null
  const amount = currency === 'INR' ? config.bookingToken.inr : config.bookingToken.usd
  return formatDisplayPrice(amount, currency)
}

export function getBookingTokenMinorUnits(slug: keyof CoursePricingData, currency: Currency): number | null {
  const config = getEnrollmentConfig(slug)
  if (!config?.bookingToken) return null
  const amount = currency === 'INR' ? config.bookingToken.inr : config.bookingToken.usd
  return Math.round(amount * 100)
}

export function getFullPayMinorUnits(slug: keyof CoursePricingData, currency: Currency): number {
  const { priceAmount } = getDisplayPricing(slug, currency)
  return Math.round(priceAmount * 100)
}
