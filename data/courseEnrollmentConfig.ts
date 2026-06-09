import type { CoursePricingData } from './coursePricing'
import type { CourseEmiConfig } from './localizedPricingTypes'

export type EnrollmentType = 'open_checkout' | 'apply_then_token'
export type PaymentModel = 'full_upfront' | 'booking_token_plus_emi'
export type CourseTrack = 'design' | 'ai' | 'workshop'

export type CourseEnrollmentConfig = {
  slug: keyof CoursePricingData | 'ai-automation-live' | 'ai-product-design-live'
  courseName: string
  track: CourseTrack
  enrollmentType: EnrollmentType
  paymentModel: PaymentModel
  duration?: string
  /** Fixed booking token (apply-first courses) */
  bookingToken?: { inr: number; usd: number }
  primaryCtaLabel: string
  secondaryCtaLabel?: string
  /** @deprecated Use enrollmentSectionId */
  applySectionId?: string
  enrollmentSectionId?: string
  applicationFormId?: string
  registrationSectionId?: string
}

export const courseEnrollmentConfig: Record<string, CourseEnrollmentConfig> = {
  'ui-ux-design-bootcamp': {
    slug: 'ui-ux-design-bootcamp',
    courseName: 'UI UX Design Bootcamp',
    track: 'design',
    enrollmentType: 'open_checkout',
    paymentModel: 'full_upfront',
    duration: '3 Days',
    primaryCtaLabel: 'Enroll Now',
    enrollmentSectionId: 'enrollment',
    applySectionId: 'enrollment',
  },
  'ui-ux-design-pro': {
    slug: 'ui-ux-design-pro',
    courseName: 'UI UX Design Pro',
    track: 'design',
    enrollmentType: 'apply_then_token',
    paymentModel: 'booking_token_plus_emi',
    duration: '10 Weeks',
    bookingToken: { inr: 5999, usd: 85 },
    primaryCtaLabel: 'Apply Now',
    secondaryCtaLabel: 'Reserve Seat',
    enrollmentSectionId: 'enrollment',
    applicationFormId: 'course-application-form',
    applySectionId: 'enrollment',
  },
  'ui-ux-design-master': {
    slug: 'ui-ux-design-master',
    courseName: 'UI UX Design Master',
    track: 'design',
    enrollmentType: 'apply_then_token',
    paymentModel: 'booking_token_plus_emi',
    duration: '6 Months',
    bookingToken: { inr: 9999, usd: 140 },
    primaryCtaLabel: 'Apply Now',
    secondaryCtaLabel: 'Reserve Seat',
    enrollmentSectionId: 'enrollment',
    applicationFormId: 'course-application-form',
    applySectionId: 'enrollment',
  },
  'ai-automation-accelerator': {
    slug: 'ai-automation-accelerator',
    courseName: 'AI Automation Accelerator',
    track: 'ai',
    enrollmentType: 'open_checkout',
    paymentModel: 'full_upfront',
    duration: '8 Weeks',
    primaryCtaLabel: 'Enroll Now',
    enrollmentSectionId: 'enrollment',
    applySectionId: 'enrollment',
  },
  'ai-product-design-course': {
    slug: 'ai-product-design-course',
    courseName: 'AI Product Design Course',
    track: 'ai',
    enrollmentType: 'apply_then_token',
    paymentModel: 'booking_token_plus_emi',
    duration: '6 Weeks',
    bookingToken: { inr: 6499, usd: 90 },
    primaryCtaLabel: 'Apply Now',
    secondaryCtaLabel: 'Reserve Seat',
    enrollmentSectionId: 'enrollment',
    applicationFormId: 'course-application-form',
    applySectionId: 'enrollment',
  },
  'ai-automation-live': {
    slug: 'ai-automation-live',
    courseName: 'AI Automation Live',
    track: 'workshop',
    enrollmentType: 'open_checkout',
    paymentModel: 'full_upfront',
    duration: '2 Hours',
    primaryCtaLabel: 'Register Free',
    registrationSectionId: 'register',
  },
  'ai-product-design-live': {
    slug: 'ai-product-design-live',
    courseName: 'AI Product Design Live',
    track: 'workshop',
    enrollmentType: 'open_checkout',
    paymentModel: 'full_upfront',
    duration: '2 Hours',
    primaryCtaLabel: 'Register Free',
    registrationSectionId: 'register',
  },
}

export function getEnrollmentConfig(slug: string): CourseEnrollmentConfig | undefined {
  return courseEnrollmentConfig[slug]
}

export type PaidCourseSlug = keyof CoursePricingData

export function isPaidCourseSlug(slug: string): slug is PaidCourseSlug {
  return slug in courseEnrollmentConfig && courseEnrollmentConfig[slug].track !== 'workshop'
}

export type EnrollmentSectionProps = {
  courseSlug: PaidCourseSlug
  courseName: string
  features: string[]
  duration?: string
  emiConfig?: CourseEmiConfig
  batchDates?: {
    offline?: { bengaluru?: string; hyderabad?: string; pune?: string }
    online?: { global?: string; schedule?: { days: string; time: string; type?: string } }
  } | null
  bookingNote?: string
}
