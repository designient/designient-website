'use client'

import React, { useEffect, useState } from 'react'
import { ArrowRight } from 'react-feather'
import { useCurrency } from '../../../contexts/CurrencyContext'
import { getEnrollmentConfig } from '../../../data/courseEnrollmentConfig'
import type { CoursePricingData } from '../../../data/coursePricing'
import { getDisplayPricing, getFullPayMinorUnits } from '../../../lib/coursePricingUtils'
import { getPrimaryScrollTarget, scrollToElement } from '../../../lib/enrollmentActions'
import { RazorpayCheckout } from '../../payments/RazorpayCheckout'

type CourseMobilePricingBarProps = {
  courseSlug: keyof CoursePricingData | 'ai-automation-live' | 'ai-product-design-live'
  courseName: string
}

export function CourseMobilePricingBar({ courseSlug, courseName }: CourseMobilePricingBarProps) {
  const { currency, isLoading } = useCurrency()
  const [mounted, setMounted] = useState(false)
  const config = getEnrollmentConfig(courseSlug)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!config) return null

  const isWorkshop = config.track === 'workshop'
  const isPaidSlug = !isWorkshop && courseSlug !== 'ai-automation-live' && courseSlug !== 'ai-product-design-live'
  const paidSlug = isPaidSlug ? (courseSlug as keyof CoursePricingData) : null
  const pricing = paidSlug && mounted && !isLoading ? getDisplayPricing(paidSlug, currency) : null

  const handleScrollClick = () => {
    scrollToElement(getPrimaryScrollTarget(config))
  }

  const showInlineCheckout =
    config.enrollmentType === 'open_checkout' && paidSlug && mounted && !isLoading && pricing

  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 border-t bg-white px-4 py-3 flex items-center justify-between gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
      style={{ borderColor: 'var(--border-default)', paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      <div className="min-w-0">
        {isWorkshop ? (
          <p className="font-display font-bold text-sm" style={{ color: 'var(--color-purple)' }}>
            Free Workshop
          </p>
        ) : pricing ? (
          <>
            <p className="font-display font-bold text-lg leading-tight" style={{ color: 'var(--color-forest)' }}>
              {pricing.price}
            </p>
            {pricing.hasEarlyBird && pricing.originalPrice && (
              <p className="font-body text-xs line-through" style={{ color: 'var(--text-muted)' }}>
                {pricing.originalPrice}
              </p>
            )}
          </>
        ) : (
          <p className="font-body text-sm" style={{ color: 'var(--text-secondary)' }}>
            {courseName}
          </p>
        )}
      </div>

      {showInlineCheckout ? (
        <RazorpayCheckout
          amountMinorUnits={getFullPayMinorUnits(paidSlug, currency)}
          currency={currency}
          description={`${courseName} - full course fee`}
          courseSlug={paidSlug}
          buttonText={config.primaryCtaLabel}
          className="flex-shrink-0 font-body font-bold px-5 py-2.5 rounded-lg inline-flex items-center gap-1.5 text-sm"
          buttonStyle={{ backgroundColor: 'var(--color-purple)', color: '#ffffff' }}
        />
      ) : (
        <button
          type="button"
          onClick={handleScrollClick}
          className="flex-shrink-0 font-body font-bold px-5 py-2.5 rounded-lg inline-flex items-center gap-1.5 text-sm min-h-[44px]"
          style={{ backgroundColor: 'var(--color-purple)', color: '#ffffff' }}
        >
          {config.primaryCtaLabel}
          <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}
