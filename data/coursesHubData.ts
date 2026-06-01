export const coursesHubTrustChips = [
  '5 Courses',
  '2 Tracks',
  'Small Batches',
  'Live Mentorship',
  '95% Design Track Placement Rate',
  'Certificate or Diploma on Completion',
] as const

export type CoursesHubCard = {
  title: string
  badge: string
  highlight?: string
  description: string
  duration: string
  totalHours: string
  level: string
  batchSize: string
  priceEarlyBirdInr: string
  priceEarlyBirdUsd: string
  priceStandardInr: string
  priceStandardUsd: string
  certificate: string
  placementSupport: string
  enrollmentNote?: string
  teamEnrollment?: string
  path: string
}

export const designTrackHubCards: CoursesHubCard[] = [
  {
    title: 'UI UX Design Bootcamp',
    badge: 'Design Track · Step 1',
    description:
      'Build a full design portfolio piece in one weekend — research, Figma design, Bolt prototype, case study, certificate.',
    duration: '3 Days',
    totalHours: '18 Live Hours',
    level: 'Beginner — no experience required',
    batchSize: 'Up to 200',
    priceEarlyBirdInr: 'Rs 1,999',
    priceEarlyBirdUsd: 'USD 49',
    priceStandardInr: 'Rs 5,000',
    priceStandardUsd: 'USD 49',
    certificate: 'Yes',
    placementSupport: 'Not included',
    path: '/ui-ux-design-bootcamp',
  },
  {
    title: 'UI UX Design Pro',
    badge: 'Design Track · Step 2 · Most Popular',
    highlight: 'Most Popular',
    description:
      'From complete beginner to job-ready designer. Real client project, Adobe certification, and structured placement support included.',
    duration: '10 Weeks',
    totalHours: '124 Total Hours',
    level: 'Beginner to Intermediate',
    batchSize: '25 per cohort',
    priceEarlyBirdInr: 'Rs 49,999',
    priceEarlyBirdUsd: 'USD 699',
    priceStandardInr: 'Rs 59,999',
    priceStandardUsd: 'USD 699',
    certificate: 'Adobe Certified Professional',
    placementSupport: 'Included — 6 months',
    path: '/ui-ux-design-pro',
  },
  {
    title: 'UI UX Design Master',
    badge: 'Design Track · Step 3 · Most Advanced',
    highlight: 'Most Advanced',
    description:
      'Advanced 6-month curriculum for experienced designers. Design systems, AI product strategy overview, leadership modules, diploma certification.',
    duration: '6 Months',
    totalHours: '200+ Total Hours',
    level: 'Intermediate to Advanced (1+ yr experience or Pro completion required)',
    batchSize: '15 per cohort',
    priceEarlyBirdInr: 'Rs 99,999',
    priceEarlyBirdUsd: 'USD 1,399',
    priceStandardInr: 'Rs 1,19,999',
    priceStandardUsd: 'USD 1,399',
    certificate: 'Diploma Certification',
    placementSupport: 'Included — 6 months',
    path: '/ui-ux-design-master',
  },
]

export const aiTrackHubCards: CoursesHubCard[] = [
  {
    title: 'AI Automation Accelerator',
    badge: 'AI Track · Step 1 · Highest Demand 2026',
    highlight: 'Highest Demand 2026',
    description:
      'Build 3 deployed AI automation workflows using n8n, Make, ManyChat, and Relevance AI. For working professionals and freelancers. No coding required.',
    duration: '8 Weeks',
    totalHours: '76 Total Hours',
    level: 'Beginner to Intermediate — no prior tech background required',
    batchSize: '35 per cohort (hard cap)',
    priceEarlyBirdInr: 'Rs 34,999',
    priceEarlyBirdUsd: 'USD 449',
    priceStandardInr: 'Rs 44,999',
    priceStandardUsd: 'USD 449',
    certificate: 'Yes',
    placementSupport: 'Not included',
    enrollmentNote: 'Open checkout — seat confirmed on payment',
    teamEnrollment: 'Available',
    path: '/ai-automation-accelerator',
  },
  {
    title: 'AI Product Design Course',
    badge: 'AI Track · Step 2 · By Application Only',
    highlight: 'By Application Only',
    description:
      'Design AI behaviour — trust UI, error states, confidence design, hallucination handling. For PMs, designers, and UX writers who have shipped a digital product.',
    duration: '6 Weeks',
    totalHours: '67 Total Hours',
    level: 'Intermediate — must have shipped a digital product in any role',
    batchSize: '12 per cohort',
    priceEarlyBirdInr: 'Rs 64,999',
    priceEarlyBirdUsd: 'USD 899',
    priceStandardInr: 'Rs 79,999',
    priceStandardUsd: 'USD 899',
    certificate: 'Yes',
    placementSupport: 'Not included',
    enrollmentNote: 'Application-based — reviewed within 48 hours',
    path: '/ai-product-design-course',
  },
]

export type ComparisonRow = {
  label: string
  valuesInr: string[]
  valuesUsd: string[]
}

export const designTrackComparison: ComparisonRow[] = [
  { label: 'Duration', valuesInr: ['3 Days', '10 Weeks', '6 Months'], valuesUsd: ['3 Days', '10 Weeks', '6 Months'] },
  { label: 'Total Hours', valuesInr: ['18 hrs live', '124 hrs', '200+ hrs'], valuesUsd: ['18 hrs live', '124 hrs', '200+ hrs'] },
  { label: 'Level', valuesInr: ['Complete beginner', 'Beginner to intermediate', 'Intermediate to advanced'], valuesUsd: ['Complete beginner', 'Beginner to intermediate', 'Intermediate to advanced'] },
  { label: 'Prerequisite', valuesInr: ['None', 'None', '1 yr experience or Pro completion'], valuesUsd: ['None', 'None', '1 yr experience or Pro completion'] },
  { label: 'Batch size', valuesInr: ['Up to 200', '25 per cohort', '15 per cohort'], valuesUsd: ['Up to 200', '25 per cohort', '15 per cohort'] },
  { label: 'Enrollment', valuesInr: ['Open checkout', 'Application-based', 'Application-based'], valuesUsd: ['Open checkout', 'Application-based', 'Application-based'] },
  { label: 'Real client project', valuesInr: ['No', 'Yes — weeks 8–9', 'Yes — 2 client projects'], valuesUsd: ['No', 'Yes — weeks 8–9', 'Yes — 2 client projects'] },
  { label: 'AI tools taught', valuesInr: ['7 tools live', '5 tools live', '5 tools + advanced usage'], valuesUsd: ['7 tools live', '5 tools live', '5 tools + advanced usage'] },
  { label: 'Figma', valuesInr: ['✓', '✓', '✓ Advanced'], valuesUsd: ['✓', '✓', '✓ Advanced'] },
  { label: 'Bolt prototype', valuesInr: ['✓', '✓', '✓'], valuesUsd: ['✓', '✓', '✓'] },
  { label: 'Portfolio output', valuesInr: ['5 artefacts', 'Job-ready portfolio', 'Senior-level portfolio + capstone'], valuesUsd: ['5 artefacts', 'Job-ready portfolio', 'Senior-level portfolio + capstone'] },
  { label: 'Adobe Certification', valuesInr: ['No', 'Included', 'No (Diploma instead)'], valuesUsd: ['No', 'Included', 'No (Diploma instead)'] },
  { label: 'Diploma', valuesInr: ['No', 'No', 'Yes'], valuesUsd: ['No', 'No', 'Yes'] },
  { label: 'Placement support', valuesInr: ['No', '6 months', '6 months'], valuesUsd: ['No', '6 months', '6 months'] },
  { label: 'Placement rate', valuesInr: ['—', '95%', '95%'], valuesUsd: ['—', '95%', '95%'] },
  { label: 'Lifetime mentorship', valuesInr: ['No', 'Yes', 'Yes'], valuesUsd: ['No', 'Yes', 'Yes'] },
  { label: 'EMI available', valuesInr: ['No', 'Yes — 0% interest', 'Yes — 0% interest'], valuesUsd: ['No', 'Yes — 0% interest', 'Yes — 0% interest'] },
  { label: 'Early bird price', valuesInr: ['Rs 1,999', 'Rs 49,999', 'Rs 99,999'], valuesUsd: ['USD 49', 'USD 699', 'USD 1,399'] },
  { label: 'Standard price', valuesInr: ['Rs 5,000', 'Rs 59,999', 'Rs 1,19,999'], valuesUsd: ['USD 49', 'USD 699', 'USD 1,399'] },
  { label: 'Guarantee', valuesInr: ['Full refund if no output', '25% refund — conditions', '25% refund — conditions'], valuesUsd: ['Full refund if no output', '25% refund — conditions', '25% refund — conditions'] },
]

export const aiTrackComparison: ComparisonRow[] = [
  { label: 'Duration', valuesInr: ['8 Weeks', '6 Weeks'], valuesUsd: ['8 Weeks', '6 Weeks'] },
  { label: 'Total Hours', valuesInr: ['76 hrs', '67 hrs'], valuesUsd: ['76 hrs', '67 hrs'] },
  { label: 'Level', valuesInr: ['Beginner to intermediate', 'Intermediate'], valuesUsd: ['Beginner to intermediate', 'Intermediate'] },
  { label: 'Prerequisite', valuesInr: ['None', 'Must have shipped a digital product'], valuesUsd: ['None', 'Must have shipped a digital product'] },
  { label: 'Batch size', valuesInr: ['35 per cohort', '12 per cohort'], valuesUsd: ['35 per cohort', '12 per cohort'] },
  { label: 'Enrollment', valuesInr: ['Open checkout', 'Application-based'], valuesUsd: ['Open checkout', 'Application-based'] },
  { label: 'Coding required', valuesInr: ['No', 'No'], valuesUsd: ['No', 'No'] },
  { label: 'Primary tools', valuesInr: ['Zapier, n8n, Make, Airtable, ManyChat, Relevance AI', 'Perplexity, Claude, FigJam AI, Figma, Bolt'], valuesUsd: ['Zapier, n8n, Make, Airtable, ManyChat, Relevance AI', 'Perplexity, Claude, FigJam AI, Figma, Bolt'] },
  { label: 'Portfolio output', valuesInr: ['3 deployed production automations', '2 portfolio case studies + functional prototype'], valuesUsd: ['3 deployed production automations', '2 portfolio case studies + functional prototype'] },
  { label: 'Output format', valuesInr: ['Live automations — demonstrable by screen share', 'Figma files + Bolt/v0 prototype + written case studies'], valuesUsd: ['Live automations — demonstrable by screen share', 'Figma files + Bolt/v0 prototype + written case studies'] },
  { label: 'AI role', valuesInr: ['You build AI workflows and agents', 'You design the UX of AI products'], valuesUsd: ['You build AI workflows and agents', 'You design the UX of AI products'] },
  { label: "Who it's for", valuesInr: ['Ops leads, marketers, freelancers, founders, solopreneurs', 'PMs, designers 1–3 yrs, UX writers, content designers'], valuesUsd: ['Ops leads, marketers, freelancers, founders, solopreneurs', 'PMs, designers 1–3 yrs, UX writers, content designers'] },
  { label: 'Team enrollment', valuesInr: ['Yes — per-seat discount available', 'No'], valuesUsd: ['Yes — per-seat discount available', 'No'] },
  { label: 'Free entry point', valuesInr: ['AI Automation Live (monthly workshop)', 'AI Product Design Live (monthly workshop)'], valuesUsd: ['AI Automation Live (monthly workshop)', 'AI Product Design Live (monthly workshop)'] },
  { label: 'Guarantee', valuesInr: ['50% refund — conditions stated', '25% refund — conditions stated'], valuesUsd: ['50% refund — conditions stated', '25% refund — conditions stated'] },
  { label: 'EMI available', valuesInr: ['Yes — 0% interest', 'Yes — 0% interest'], valuesUsd: ['Yes — 0% interest', 'Yes — 0% interest'] },
  { label: 'Early bird price', valuesInr: ['Rs 34,999', 'Rs 64,999'], valuesUsd: ['USD 449', 'USD 899'] },
  { label: 'Standard price', valuesInr: ['Rs 44,999', 'Rs 79,999'], valuesUsd: ['USD 449', 'USD 899'] },
]

export const coursesHubGoalRecommendations = [
  { goal: 'Become a UI/UX designer from scratch', course: 'UI UX Design Bootcamp → UI UX Design Pro' },
  { goal: 'Get to senior or lead designer level', course: 'UI UX Design Master (requires 1 yr experience)' },
  { goal: 'Automate your work or build a freelance automation service', course: 'AI Automation Accelerator' },
  { goal: 'Design AI products as a PM or designer', course: 'AI Product Design Course' },
  { goal: 'Test whether design is the right path', course: 'UI UX Design Bootcamp' },
  { goal: 'Upskill a whole team in AI automation', course: 'AI Automation Accelerator — team enrollment' },
] as const

export const coursesHubFaqs = [
  {
    question: 'Can I take an AI Track course without any design background?',
    answer:
      'Yes. Neither AI Track course requires design experience. The AI Automation Accelerator requires basic digital tool fluency — comfortable with SaaS products and new interfaces. The AI Product Design Course requires that you have shipped a digital product in any role — as a PM, designer, engineer, or founder. Neither requires Figma experience at entry, though the AI Product Design Course includes a pre-course Figma module for non-designers.',
  },
  {
    question: 'Do I need to complete the Design Track before taking an AI Track course?',
    answer:
      'No. The two tracks are independent. Many AI Track students have no design background at all. The cross-track bridge — the recommendation that Design Track Pro graduates take the AI Product Design Course next — is a recommendation for designers moving into AI product roles, not a requirement.',
  },
  {
    question: 'What is the difference between the AI Automation Accelerator and the AI Product Design Course?',
    answer:
      'The Accelerator teaches you to build AI automation workflows — connecting n8n, Make, ManyChat, and Relevance AI into deployed systems that run without human input. The AI Product Design Course teaches you to design the user experience of AI products — how a product behaves when the AI is uncertain, wrong, or refuses to answer. One builds systems. The other designs interfaces. They are complementary, not overlapping.',
  },
  {
    question: 'Which course has the best placement support?',
    answer:
      'Placement support is included in the UI UX Design Pro and UI UX Design Master courses. 95% of graduates who completed the structured placement process found employment within 6 months. The AI Track courses do not include formal placement support — they produce a portfolio of deployed automations or AI product case studies that you take directly to employers or clients.',
  },
  {
    question: 'Can my company enroll a team in one of these courses?',
    answer:
      'Yes — the AI Automation Accelerator has a team enrollment option for companies upskilling 5 or more professionals together. This includes a per-seat discount, a pre-course team alignment session, and a group review at course end. Contact hello@designient.com with subject line: Team Enrollment — AI Automation Accelerator, or submit a corporate inquiry.',
  },
  {
    question: 'Are these courses online or in-person?',
    answer:
      'The Design Track has in-person options in Bangalore, Hyderabad, and Pune alongside the online format. The AI Track is online-only — available to students anywhere in India and internationally.',
  },
] as const

export const coursesHubItemListSchema = [
  {
    name: 'UI UX Design Bootcamp',
    url: 'https://designient.com/ui-ux-design-bootcamp',
    description: '3-day beginner design bootcamp',
    price: '1999',
    priceCurrency: 'INR',
  },
  {
    name: 'UI UX Design Pro',
    url: 'https://designient.com/ui-ux-design-pro',
    description: '10-week beginner to pro design course',
    price: '49999',
    priceCurrency: 'INR',
  },
  {
    name: 'UI UX Design Master',
    url: 'https://designient.com/ui-ux-design-master',
    description: '6-month advanced design course with diploma',
    price: '99999',
    priceCurrency: 'INR',
  },
  {
    name: 'AI Automation Accelerator',
    url: 'https://designient.com/ai-automation-accelerator',
    description: '8-week AI workflow automation course',
    price: '34999',
    priceCurrency: 'INR',
  },
  {
    name: 'AI Product Design Course',
    url: 'https://designient.com/ai-product-design-course',
    description: '6-week AI behaviour and trust UI design course',
    price: '64999',
    priceCurrency: 'INR',
  },
] as const
