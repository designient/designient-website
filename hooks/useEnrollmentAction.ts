'use client'

import { useCallback } from 'react'
import { getEnrollmentConfig } from '../data/courseEnrollmentConfig'
import {
  getPrimaryScrollTarget,
  scrollToElement,
  usesInlineCheckout,
  usesScrollPrimary,
} from '../lib/enrollmentActions'

type UseEnrollmentActionOptions = {
  courseSlug: string
  /** When true, scroll to application form inside enrollment (apply-first courses) */
  focusApplication?: boolean
}

export function useEnrollmentAction({ courseSlug, focusApplication = false }: UseEnrollmentActionOptions) {
  const config = getEnrollmentConfig(courseSlug)

  const primaryAction = useCallback(() => {
    if (!config) return
    const target = focusApplication && config.enrollmentType === 'apply_then_token'
      ? (config.applicationFormId ?? 'course-application-form')
      : getPrimaryScrollTarget(config)
    scrollToElement(target)
  }, [config, focusApplication])

  return {
    config,
    primaryAction,
    primaryCtaLabel: config?.primaryCtaLabel ?? 'Apply Now',
    secondaryCtaLabel: config?.secondaryCtaLabel,
    isWorkshop: config?.track === 'workshop',
    isOpenCheckout: config ? usesInlineCheckout(config) : false,
    isScrollPrimary: config ? usesScrollPrimary(config) : false,
    scrollTarget: config ? getPrimaryScrollTarget(config) : 'enrollment',
  }
}
