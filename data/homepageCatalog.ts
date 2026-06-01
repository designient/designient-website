import type { CoursePricingData } from './coursePricing'

export const courseInterestOptions = [
  { value: 'bootcamp', label: 'UI UX Design Bootcamp (3 Days)' },
  { value: 'pro', label: 'UI UX Design Pro (10 Weeks) — Most Popular' },
  { value: 'master', label: 'UI UX Design Master (6 Months)' },
  { value: 'ai-automation', label: 'AI Automation Accelerator (8 Weeks) — Highest Demand 2026' },
  { value: 'ai-product-design', label: 'AI Product Design Course (6 Weeks) — By Application Only' },
  { value: 'not-sure', label: 'Not sure yet — help me choose' },
] as const

export type NavCourse = {
  title: string
  duration: string
  hours: string
  level: string
  description: string
  path: string
  courseSlug: keyof CoursePricingData
  badge?: string
}

export const designTrackNavCourses: NavCourse[] = [
  {
    title: 'UI UX Design Bootcamp',
    duration: '3 Days',
    hours: '18 Hours',
    level: 'Beginner',
    description: 'Build a full portfolio piece in one weekend — research, Figma design, Bolt prototype, case study, and certificate.',
    path: '/ui-ux-design-bootcamp',
    courseSlug: 'ui-ux-design-bootcamp',
  },
  {
    title: 'UI UX Design Pro',
    duration: '10 Weeks',
    hours: '124 Hours',
    level: 'Beginner to Pro',
    description: 'From zero to job-ready designer. Real client project, Adobe certification, and placement support included.',
    path: '/ui-ux-design-pro',
    courseSlug: 'ui-ux-design-pro',
    badge: 'Most Popular',
  },
  {
    title: 'UI UX Design Master',
    duration: '6 Months',
    hours: '200+ Hours',
    level: 'Pro to Master',
    description: 'Advanced curriculum for experienced designers. Design systems, AI product strategy, leadership, and diploma certification.',
    path: '/ui-ux-design-master',
    courseSlug: 'ui-ux-design-master',
    badge: 'Most Advanced',
  },
]

export const aiTrackNavCourses: NavCourse[] = [
  {
    title: 'AI Automation Accelerator',
    duration: '8 Weeks',
    hours: '76 Hours',
    level: 'Professionals + Freelancers',
    description: 'Build 3 deployed AI automations using n8n, Make, ManyChat, and Relevance AI. No coding required.',
    path: '/ai-automation-accelerator',
    courseSlug: 'ai-automation-accelerator',
    badge: 'Highest Demand 2026',
  },
  {
    title: 'AI Product Design Course',
    duration: '6 Weeks',
    hours: '67 Hours',
    level: 'By Application',
    description: 'Design AI behaviour — trust UI, error states, confidence design. 12 seats. Application-based enrollment.',
    path: '/ai-product-design-course',
    courseSlug: 'ai-product-design-course',
    badge: 'By Application Only',
  },
]

/** Homepage course cards — pricing comes from coursePricing via CurrencyContext */
export const homepageDesignTrackCards = designTrackNavCourses
export const homepageAiTrackCards = aiTrackNavCourses

export const footerCourseGroups = [
  {
    label: 'DESIGN TRACK',
    links: designTrackNavCourses.map((c) => ({ name: c.title, path: c.path })),
  },
  {
    label: 'AI TRACK',
    links: aiTrackNavCourses.map((c) => ({ name: c.title, path: c.path })),
  },
  {
    label: 'LEARN IN YOUR CITY',
    links: [
      { name: 'UI UX Design Course in Bangalore', path: '/ui-ux-design-course-in-bangalore' },
      { name: 'UI UX Design Course in Hyderabad', path: '/ui-ux-design-course-in-hyderabad' },
      { name: 'UI UX Design Course in Pune', path: '/ui-ux-design-course-in-pune' },
    ],
  },
]
