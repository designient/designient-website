/**
 * AI Automation Live — session fields update monthly before each cohort.
 * ISO dates are used for Event schema (IST → UTC: subtract 5h 30m from IST clock time).
 */
export const aiAutomationLiveSession = {
  dateLabel: 'Saturday, 28 June 2026',
  timeLabel: '11:00 AM IST',
  /** 11:00 AM IST */
  startDateISO: '2026-06-28T05:30:00+00:00',
  /** 1:00 PM IST (2-hour session) */
  endDateISO: '2026-06-28T07:30:00+00:00',
  nextSessionDateLabel: 'Saturday, 26 July 2026',
  registrationOpensDaysBefore: 14,
  /** Update manually when first-5 slots fill (see copy doc open issue #4) */
  strategySessionSpotsRemaining: 5,
}

export const aiAutomationLiveHero = {
  badge: 'Free · Monthly · Online · AI Track — Entry Point',
  title: 'AI Automation Live: Build a Real Workflow in 2 Hours — Free',
  subtitle:
    'Not a demo. Not a concept walkthrough. A real n8n automation built from scratch, start to finish, in two hours — while you watch. You leave with the working workflow file, three bonus templates, and everything you need to deploy it yourself before the weekend.',
  trustChips: [
    'Free to Attend',
    'Live on Zoom',
    '2 Hours',
    'n8n Workflow File Included',
    'Recording Sent Within 24 Hours',
  ],
  formNote: 'Zoom link sent to your email immediately on registration.',
}

export const aiAutomationLivePastExamples = [
  'A lead capture workflow — form submitted → Airtable record created → Slack notification sent → personalised follow-up email triggered automatically',
  'A weekly report automation — data pulled from Google Sheets every Monday morning → formatted → sent to a distribution list without anyone touching it',
  'A WhatsApp enquiry qualifier — inbound WhatsApp message received → Claude reads it → classifies as hot or cold → routes to the right team member automatically',
]

export const aiAutomationLiveBonuses = [
  {
    title: 'The n8n Workflow File from the Session',
    description:
      'The exact automation built live, exported as a ready-to-import n8n workflow. Open your n8n account, import the file, connect your credentials, and the automation runs. No rebuilding from scratch.',
    why: 'Most people watch a tutorial and then spend three hours trying to recreate it. You skip that entirely.',
    valueInr: 'Rs 2,999', valueUsd: 'USD 59',
    firstFiveOnly: false,
  },
  {
    title: 'Workflow Audit Mini-Guide',
    description:
      'A Notion template with the 5 most automatable tasks mapped out for 6 common role types: operations manager, marketer, freelancer, founder, sales professional, HR lead. Each task includes the tools typically involved and the automation pattern that solves it.',
    why: 'The most common reason professionals don’t start automating is not knowing where to start. This guide removes that friction in under 15 minutes.',
    valueInr: 'Rs 1,999', valueUsd: 'USD 29',
    firstFiveOnly: false,
  },
  {
    title: '3 Bonus n8n Workflow Templates',
    description:
      'Three pre-wired n8n workflow templates beyond the one built in the session: (1) Lead capture form → Airtable → email notification, (2) Weekly data report automation → formatted → sent to team, (3) Slack notification router — triggers from any tool, routes to the right channel. All ready to import with a short setup guide each.',
    why: '',
    valueInr: 'Rs 4,999', valueUsd: 'USD 69',
    firstFiveOnly: false,
  },
  {
    title: 'Session Recording',
    description:
      'The full 2-hour session recording sent to your registered email within 24 hours. Rewatch at any pace. Share with a colleague who could not attend.',
    why: '',
    valueInr: 'Rs 2,999', valueUsd: 'USD 59',
    firstFiveOnly: false,
  },
  {
    title: '30-Day AI Automation Community Access',
    description:
      'Access to the Designient AI Automation community channel for 30 days after the workshop. Ask questions about the workflow you are deploying, share what you have built, and connect with other professionals doing the same work.',
    why: '',
    valueInr: 'Rs 1,999', valueUsd: 'USD 29',
    firstFiveOnly: false,
  },
  {
    title: 'AI Automation Accelerator 48-Hour Early Bird Priority Access',
    description:
      'If you enroll in the AI Automation Accelerator after the workshop, registered attendees get a 48-hour exclusive window before early bird seats open to the public. Early bird is Rs 34,999; standard is Rs 44,999 — Rs 10,000 difference. You get first access before anyone else.',
    why: '',
    valueInr: 'Rs 10,000', valueUsd: 'USD 129',
    firstFiveOnly: false,
  },
  {
    title: '1:1 Automation Strategy Session (30 min)',
    description:
      'A private 30-minute session with a Designient mentor, redeemable within 30 days of the workshop. Map your personal automation roadmap — which 3 automations to build first, in which order, and how they connect.',
    why: '',
    valueInr: 'Rs 4,999', valueUsd: 'USD 69',
    firstFiveOnly: true,
  },
]

export const aiAutomationLiveValueStack = {
  rows: [
    { item: 'n8n Workflow File from the Session', valueInr: 'Rs 2,999', valueUsd: 'USD 59' },
    { item: 'Workflow Audit Mini-Guide (Notion)', valueInr: 'Rs 1,999', valueUsd: 'USD 29' },
    { item: '3 Bonus n8n Workflow Templates', valueInr: 'Rs 4,999', valueUsd: 'USD 69' },
    { item: 'Session Recording (sent within 24 hours)', valueInr: 'Rs 2,999', valueUsd: 'USD 59' },
    { item: '30-Day AI Automation Community Access', valueInr: 'Rs 1,999', valueUsd: 'USD 29' },
    { item: 'AI Automation Accelerator 48-hr Early Bird Priority Access', valueInr: 'Rs 10,000', valueUsd: 'USD 129' },
    { item: '[First 5 Only] 1:1 Automation Strategy Session (30 min)', valueInr: 'Rs 4,999', valueUsd: 'USD 69' },
  ],
  totalAllAttendeesInr: 'Rs 24,994',
  totalAllAttendeesUsd: 'USD 299',
  totalFirstFiveInr: 'Rs 29,993',
  totalFirstFiveUsd: 'USD 359',
  investmentInr: 'Rs 0',
  investmentUsd: 'USD 0',
}

export type AIAutomationLiveFaq = {
  question: string
  answer: string
  linkHref?: string
  linkLabel?: string
}

export const aiAutomationLiveFaqs: AIAutomationLiveFaq[] = [
  {
    question: 'Do I need an n8n account before the workshop?',
    answer:
      'No. You do not need any accounts set up to attend and follow the session. If you want to deploy the workflow file after the session, you will need a free n8n account — setup takes under 10 minutes and the Workflow Audit Mini-Guide bonus includes instructions.',
  },
  {
    question: 'Is this actually free? What is the catch?',
    answer:
      'It is free. There is no catch and no obligation. At the end of the session, you will hear about the AI Automation Accelerator — the 8-week course where you build your own three automations with live mentorship. Attending the workshop does not commit you to anything.',
  },
  {
    question: 'What if I cannot attend the live session?',
    answer:
      'Register anyway. The recording is sent to all registered attendees within 24 hours, regardless of whether you attend live. All bonuses — including the workflow file and templates — are sent to registered emails after the session.',
  },
  {
    question: 'How do I claim the 1:1 Automation Strategy Session if I am one of the first 5?',
    answer:
      'You will receive a confirmation email within 24 hours of registration confirming your 1:1 slot. A calendar link is included for you to book a time within 30 days of the workshop.',
  },
  {
    question: 'How often does this run?',
    answer:
      'Once per month. If this session is full or the date does not work for you, email hello@designient.com to be added to the notification list for the next session.',
  },
  {
    question: 'What is the AI Automation Accelerator?',
    answer:
      'The 8-week course where you build three deployed production automations using n8n, Make, ManyChat, and Relevance AI — with live mentorship, a 50% money-back guarantee, and 35 students per cohort.',
    linkHref: '/ai-automation-accelerator',
    linkLabel: 'View the full course',
  },
]
