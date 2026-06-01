/** Public pricing page — keep in sync with data/coursePricing.ts and course pages. */

export type PricingTierRow = { label: string; inr: string; usd: string }

export type EmiRow = { plan: string; earlyBird: string; standard: string }

export type CoursePricingBlock = {
  slug: string
  name: string
  badge?: string
  duration: string
  level: string
  enrollment: string
  tiers: PricingTierRow[]
  bookingToken?: string
  emi?: EmiRow[]
  emiNote?: string
  preStartRefund: string
  performanceGuarantee: string
  extraNotes?: string[]
  coursePath: string
}

export const designTrackPricing: CoursePricingBlock[] = [
  {
    slug: 'ui-ux-design-bootcamp',
    name: 'UI UX Design Bootcamp',
    duration: '3 Days · 18 Live Hours',
    level: 'Beginner — no experience required',
    enrollment: 'Open checkout — seat confirmed on payment',
    tiers: [
      { label: 'Early Bird (50 seats per cohort)', inr: 'Rs 1,999', usd: 'USD 49' },
      { label: 'Standard', inr: 'Rs 5,000', usd: 'USD 49' },
    ],
    emiNote: 'EMI: Not available for this course.',
    preStartRefund: 'Full refund available up to 72 hours before cohort start.',
    performanceGuarantee:
      'Full refund if portfolio prototype, case study, and certificate not delivered by Sunday 7pm.',
    coursePath: '/ui-ux-design-bootcamp',
  },
  {
    slug: 'ui-ux-design-pro',
    name: 'UI UX Design Pro',
    badge: 'Most Popular',
    duration: '10 Weeks · 124 Total Hours',
    level: 'Beginner to Intermediate',
    enrollment: 'Application-based — 25 seats per cohort',
    tiers: [
      { label: 'Early Bird (5 seats per cohort)', inr: 'Rs 49,999', usd: 'USD 699' },
      { label: 'Standard', inr: 'Rs 59,999', usd: 'USD 699' },
    ],
    bookingToken: 'Rs 5,999 (non-refundable) — deducted from total fee at full payment.',
    emi: [
      { plan: '2-month', earlyBird: 'Rs 24,999/month', standard: 'Rs 29,999/month' },
      { plan: '3-month', earlyBird: 'Rs 16,666/month', standard: 'Rs 19,999/month' },
    ],
    preStartRefund:
      'Balance fee (total minus Booking Token) refundable with 7 days written notice before cohort start.',
    performanceGuarantee:
      '25% refund if job-ready portfolio not delivered — conditions in Refund Policy.',
    coursePath: '/ui-ux-design-pro',
  },
  {
    slug: 'ui-ux-design-master',
    name: 'UI UX Design Master',
    badge: 'Most Advanced',
    duration: '6 Months · 200+ Total Hours',
    level: 'Intermediate to Advanced (1+ year experience or Pro completion required)',
    enrollment: 'Application-based — 15 seats per cohort',
    tiers: [
      { label: 'Early Bird (5 seats per cohort)', inr: 'Rs 99,999', usd: 'USD 1,399' },
      { label: 'Standard', inr: 'Rs 1,19,999', usd: 'USD 1,399' },
    ],
    bookingToken: 'Rs 9,999 (non-refundable) — deducted from total fee at full payment.',
    emi: [
      { plan: '2-month', earlyBird: 'Rs 49,999/month', standard: 'Rs 59,999/month' },
      { plan: '3-month', earlyBird: 'Rs 33,333/month', standard: 'Rs 39,999/month' },
      { plan: '6-month', earlyBird: 'Rs 16,666/month', standard: 'Rs 19,999/month' },
    ],
    preStartRefund:
      'Balance fee (total minus Booking Token) refundable with 7 days written notice before cohort start.',
    performanceGuarantee:
      '25% refund if diploma-standard portfolio not delivered — conditions in Refund Policy.',
    coursePath: '/ui-ux-design-master',
  },
]

export const aiTrackPricing: CoursePricingBlock[] = [
  {
    slug: 'ai-automation-accelerator',
    name: 'AI Automation Accelerator',
    badge: 'Highest Demand 2026',
    duration: '8 Weeks · 76 Total Hours',
    level: 'Beginner to Intermediate — no prior tech background required',
    enrollment: 'Open checkout — 35 seats per cohort (hard cap)',
    tiers: [
      { label: 'Early Bird (8 seats per cohort)', inr: 'Rs 34,999', usd: 'USD 449' },
      { label: 'Standard', inr: 'Rs 44,999', usd: 'USD 449' },
    ],
    emi: [
      { plan: '2-month', earlyBird: 'Rs 17,499/month', standard: 'Rs 22,499/month' },
      { plan: '3-month', earlyBird: 'Rs 11,666/month', standard: 'Rs 14,999/month' },
    ],
    emiNote: 'Booking Token: Not applicable. Full fee at enrollment.',
    preStartRefund:
      'Full fee minus Rs 2,000 administrative processing fee, with 7 days written notice before cohort start.',
    performanceGuarantee:
      '50% refund if 3 deployed automations not delivered — conditions in Refund Policy.',
    extraNotes: [
      'Team enrollment: Available for 5 or more from the same company. Custom pricing. Contact hello@designient.com.',
    ],
    coursePath: '/ai-automation-accelerator',
  },
  {
    slug: 'ai-product-design-course',
    name: 'AI Product Design Course',
    badge: 'By Application Only',
    duration: '6 Weeks · 67 Total Hours',
    level: 'Intermediate — must have shipped a digital product in any role',
    enrollment: 'Application-based — 12 seats per cohort',
    tiers: [
      { label: 'Early Bird (5 seats per cohort)', inr: 'Rs 64,999', usd: 'USD 899' },
      { label: 'Standard', inr: 'Rs 79,999', usd: 'USD 899' },
    ],
    bookingToken:
      'Rs 6,499 early bird / Rs 7,999 standard (non-refundable) — deducted from total fee at full payment.',
    emi: [
      { plan: '2-month', earlyBird: 'Rs 32,499/month', standard: 'Rs 39,999/month' },
      { plan: '3-month', earlyBird: 'Rs 21,666/month', standard: 'Rs 26,666/month' },
    ],
    preStartRefund:
      'Balance fee (total minus Booking Token) refundable with 7 days written notice before cohort start.',
    performanceGuarantee:
      '25% refund if portfolio case study and prototype not delivered — conditions in Refund Policy.',
    coursePath: '/ai-product-design-course',
  },
]

export const freeWorkshopsPricing = [
  {
    name: 'AI Automation Live',
    schedule: 'Monthly',
    duration: '2 Hours',
    registerHref: '/ai-automation-live',
    registerLabel: 'Register free',
  },
  {
    name: 'AI Product Design Live',
    schedule: 'Monthly',
    duration: '2 Hours',
    registerHref: '/ai-product-design-live',
    registerLabel: 'Register free',
  },
]

export const alumniDiscountRows = [
  { from: 'UI UX Design Bootcamp (certificate)', to: 'UI UX Design Pro', discount: 'Rs 2,000 off standard price' },
  { from: 'UI UX Design Pro (certificate)', to: 'AI Product Design Course', discount: 'Rs 5,000 off standard price' },
  { from: 'UI UX Design Master (diploma)', to: 'AI Product Design Course', discount: 'Rs 5,000 off standard price' },
]
