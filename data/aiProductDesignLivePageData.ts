/**
 * AI Product Design Live — update session fields monthly before each cohort.
 */
export const aiProductDesignLiveSession = {
  dateLabel: 'Saturday, 19 July 2026',
  timeLabel: '6:00 PM IST',
  startDateISO: '2026-07-19T12:30:00+00:00',
  endDateISO: '2026-07-19T15:00:00+00:00',
  nextSessionDateLabel: 'Saturday, 16 August 2026',
  registrationOpensDaysBefore: 14,
  portfolioReviewSpotsRemaining: 5,
}

export const aiProductDesignLiveHero = {
  badge: 'Free · Monthly · Online · AI Track — Step 2 Entry Point',
  title: 'AI Product Design Live: Audit and Redesign a Real AI Product in 2 Hours — Free',
  subtitle:
    'Not a lecture on AI design principles. Not a case study deck. A real AI product opened, its trust failures identified, and its worst screen redesigned in Figma — live, from scratch, in two hours. You leave with the Figma file, three teardown examples, and the exact framework used to do it yourself.',
  trustChips: [
    'Free to Attend',
    'Live on Zoom',
    '2 Hours',
    'Figma File Included',
    'Recording Sent Within 24 Hours',
  ],
  formNote: 'Zoom link sent to your email immediately on registration.',
}

export const aiProductDesignLivePastProducts =
  'Past sessions have audited products like Perplexity, Notion AI, and AI-powered customer support tools — identifying exactly where the design fails to communicate model confidence, uncertainty, or error — and redesigning the worst-offending screen live in Figma.'

export const aiProductDesignLiveBonuses = [
  {
    title: 'The Figma File from the Session',
    description:
      'The exact redesigned screens built live during the 2-hour workshop. The trust failures corrected, the AI states applied, the copy revised — all in a Figma file you can open, study, and use as a reference for your own design work.',
    why: 'Seeing a redesigned screen is useful. Having the file — being able to inspect every layer, every component decision, every copy choice — is the difference between watching and learning.',
    valueInr: 'Rs 3,999', valueUsd: 'USD 59',
    firstFiveOnly: false,
  },
  {
    title: 'AI Trust Audit Checklist',
    description:
      'The 5-criteria trust audit framework used in the session — in a Notion template you can apply to any AI product immediately. Each criterion has a definition, questions to ask, and examples of what passing and failing looks like.',
    why: 'The framework is the repeatable skill. The checklist turns the session methodology into something you can use on your next product review or portfolio project tomorrow.',
    valueInr: 'Rs 2,999', valueUsd: 'USD 59',
    firstFiveOnly: false,
  },
  {
    title: '3 AI Product Teardown Examples',
    description:
      'Three additional AI product teardown documents — products beyond the one covered live. Each identifies trust failures, notes what the design got wrong, and suggests a redesign direction. Formats include Notion docs and annotated screenshots.',
    why: 'One example teaches you the pattern. Three examples teach you to generalise it.',
    valueInr: 'Rs 3,999', valueUsd: 'USD 59',
    firstFiveOnly: false,
  },
  {
    title: 'Session Recording',
    description:
      'The full 2-hour session recording sent to your registered email within 24 hours. Pause on the Figma decisions. Rewatch the audit methodology at the speed you need.',
    why: '',
    valueInr: 'Rs 2,999', valueUsd: 'USD 59',
    firstFiveOnly: false,
  },
  {
    title: '30-Day AI Product Design Community Access',
    description:
      'Access to the Designient AI Product Design community channel for 30 days after the workshop. Ask questions about the teardown methodology, share your own AI product audit attempts, and connect with designers and PMs.',
    why: '',
    valueInr: 'Rs 1,999', valueUsd: 'USD 29',
    firstFiveOnly: false,
  },
  {
    title: 'AI Product Design Course 48-Hour Priority Application Window',
    description:
      'The AI Product Design Course runs 12 students per cohort and is application-based. Registered workshop attendees get a 48-hour exclusive window to submit their application before the next cohort opens publicly. Applications in this window are reviewed first.',
    why: 'If you decide the course is right for you after the workshop, this window is the difference between getting a seat in the next cohort and waiting for the one after.',
    valueInr: 'Rs 5,000', valueUsd: 'USD 49',
    firstFiveOnly: false,
  },
  {
    title: '1:1 Portfolio and Application Review (30 min)',
    description:
      'A private 30-minute session with a Designient mentor, redeemable within 30 days. Review your portfolio through the lens of AI product design, or use it as a pre-application conversation for the AI Product Design Course.',
    why: '',
    valueInr: 'Rs 4,999', valueUsd: 'USD 69',
    firstFiveOnly: true,
  },
]

export const aiProductDesignLiveValueStack = {
  rows: [
    { item: 'Figma File from the Session (redesigned screens)', valueInr: 'Rs 3,999', valueUsd: 'USD 59' },
    { item: 'AI Trust Audit Checklist (Notion template)', valueInr: 'Rs 2,999', valueUsd: 'USD 59' },
    { item: '3 AI Product Teardown Examples', valueInr: 'Rs 3,999', valueUsd: 'USD 59' },
    { item: 'Session Recording (sent within 24 hours)', valueInr: 'Rs 2,999', valueUsd: 'USD 59' },
    { item: '30-Day AI Product Design Community Access', valueInr: 'Rs 1,999', valueUsd: 'USD 29' },
    { item: 'AI Product Design Course 48-hr Priority Application Window', valueInr: 'Rs 5,000', valueUsd: 'USD 49' },
    { item: '[First 5 Only] 1:1 Portfolio and Application Review (30 min)', valueInr: 'Rs 4,999', valueUsd: 'USD 69' },
  ],
  totalAllAttendeesInr: 'Rs 20,995',
  totalAllAttendeesUsd: 'USD 249',
  totalFirstFiveInr: 'Rs 25,994',
  totalFirstFiveUsd: 'USD 309',
  investmentInr: 'Rs 0',
  investmentUsd: 'USD 0',
}

export type AIProductDesignLiveFaq = {
  question: string
  answer: string
  linkHref?: string
  linkLabel?: string
}

export const aiProductDesignLiveFaqs: AIProductDesignLiveFaq[] = [
  {
    question: 'Do I need Figma before the workshop?',
    answer:
      'No. You do not need a Figma account to attend and follow the session. If you want to inspect and use the Figma file bonus after the session, you will need a free Figma account — signup takes two minutes.',
  },
  {
    question: 'Is this actually free? What is the catch?',
    answer:
      'It is free. There is no catch and no obligation. At the end of the session, you will hear about the AI Product Design Course — the 6-week application-based program where you apply this methodology to two portfolio case studies with live mentorship. Attending the workshop does not commit you to anything.',
  },
  {
    question: 'I am a PM, not a designer. Is this relevant for me?',
    answer:
      'Yes — the audit and redesign methodology is as relevant for PMs as for designers. Understanding what trust UI, confidence design, and graceful degradation mean — and what they look like in a real product — is directly applicable to how you brief design work and define AI feature requirements.',
  },
  {
    question: 'What if I cannot attend the live session?',
    answer:
      'Register anyway. The recording, the Figma file, the trust audit checklist, the teardown examples, and the community access are all sent to registered emails within 24 hours — regardless of whether you attend live.',
  },
  {
    question: 'How do I claim the 1:1 Portfolio and Application Review if I am one of the first 5?',
    answer:
      'You will receive a confirmation email within 24 hours of registration confirming your 1:1 slot. A calendar link is included to book a time within 30 days of the workshop.',
  },
  {
    question: 'What is the AI Product Design Course?',
    answer:
      'The 6-week application-based course where you design AI behaviour — trust UI, error states, confidence design, hallucination handling — and produce two portfolio case studies and a functional Bolt/v0 prototype. 12 students per cohort. By application only.',
    linkHref: '/ai-product-design-course',
    linkLabel: 'View the full course',
  },
]
