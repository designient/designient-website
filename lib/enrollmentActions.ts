import type { CourseEnrollmentConfig } from '../data/courseEnrollmentConfig'

export const ENROLLMENT_SCROLL_IDS = {
  enrollment: 'enrollment',
  application: 'course-application-form',
  register: 'register',
} as const

export type EnrollmentScrollId = (typeof ENROLLMENT_SCROLL_IDS)[keyof typeof ENROLLMENT_SCROLL_IDS]

/** Resolve scroll target for primary CTA from config */
export function getPrimaryScrollTarget(config: CourseEnrollmentConfig): string {
  if (config.track === 'workshop') {
    return config.registrationSectionId ?? ENROLLMENT_SCROLL_IDS.register
  }
  return config.enrollmentSectionId ?? config.applySectionId ?? ENROLLMENT_SCROLL_IDS.enrollment
}

/** Application form anchor (inside enrollment section on apply-first courses) */
export function getApplicationScrollTarget(config: CourseEnrollmentConfig): string {
  return config.applicationFormId ?? ENROLLMENT_SCROLL_IDS.application
}

export function scrollToElement(id: string, block: ScrollLogicalPosition = 'start') {
  if (typeof document === 'undefined') return
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block })
}

/** Whether primary CTA should open Razorpay inline (desktop sticky / mobile bar) */
export function usesInlineCheckout(config: CourseEnrollmentConfig): boolean {
  return config.track !== 'workshop' && config.enrollmentType === 'open_checkout'
}

/** Whether primary CTA scrolls to enrollment/application (no modal) */
export function usesScrollPrimary(config: CourseEnrollmentConfig): boolean {
  return config.enrollmentType === 'apply_then_token' || config.track === 'workshop'
}
