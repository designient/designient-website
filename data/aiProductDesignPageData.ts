import type { LocalizedValueRow } from './localizedPricingTypes'

export const aiProductHero = {
 badge: 'By Application Only · AI Track · Step 2 · 6 Weeks · 12 Seats Per Cohort · Certificate',
 title: 'AI Product Design Course: Design AI Behaviour, Trust UI, and Every State Between',
 subtitle:
 'Most AI products fail not because the model is wrong - but because the design never accounted for what happens when the model is uncertain, partially correct, or wrong entirely. This course teaches you to design every state: confident output, uncertain output, graceful failure, and everything in between.',
 trustChips: [
 '6 Weeks',
 '42 Live Hours',
 '12 Students Max',
 'Application-Based',
 'Certificate on Completion',
 ],
 stats: [
 { value: '67 hrs', label: 'Total' },
 { value: '12', label: 'Students Per Cohort' },
 { value: '2', label: 'Portfolio Case Studies' },
 { value: '5', label: 'AI Tools Taught Live' },
 ],
 seatNote: '5 early bird seats remaining. 7 standard seats. 12 total. Applications reviewed within 48 hours.',
 bookingNote:
 'Accepted students pay a Rs 6,499 booking token to confirm their seat. Non-refundable. Adjusts against full fee.',
 lastUpdated: '2025-06-09',
}

export const aiProductPatternComparison = {
 title: 'This Is Not a Course About Using AI to Design Faster',
 intro: [
 'If you want to learn how to use ChatGPT to generate wireframes or Figma Make to speed up UI - that is not what this is.',
 'This course is about something harder and more valuable: designing products where AI is the core behaviour. Where the output is probabilistic. Where the user needs to trust a system that is sometimes wrong, sometimes uncertain, and occasionally refuses to answer.',
 'That requires a different skill set entirely - one that no course in India currently teaches at this depth.',
 ],
 rows: [
 { feature: 'Core focus', pro: 'Designing AI behaviour - all states', others: 'Using AI tools to design faster' },
 { feature: 'Portfolio output', pro: '2 case studies + working prototype', others: 'Concepts and certificates' },
 { feature: 'AI states covered', pro: 'All 8 - including error, fallback, refusal', others: 'Happy path only' },
 { feature: 'Format', pro: 'Live, application-based, 12 students', others: 'Recorded or large cohort' },
 { feature: 'Prototype format', pro: 'Functional Bolt/v0 - interactive states', others: 'Static Figma prototype' },
 { feature: 'Entry bar', pro: 'Must have shipped a digital product', others: 'Open to anyone' },
 { feature: 'Batch size', pro: '12 max', others: '50 to 200+' },
 { feature: 'Toolchain', pro: 'Perplexity, Claude, Figma, Bolt', others: 'Figma only' },
 ],
}

export const aiProductPriceJustification = {
 title: 'Why This Course Is Priced Above the UI UX Design Pro Course',
 intro: 'This is the question a thoughtful buyer will ask. Here is the direct answer.',
 points: [
 {
 title: 'Half the batch size.',
 body: '12 students vs 25 in Pro. The critique sessions, mentor time, and feedback quality per student are structurally different at 12 seats. That ceiling cannot be maintained at Pro pricing.',
 },
 {
 title: 'Application-based enrollment.',
 body: 'Every student in this cohort has shipped a digital product. The cohort quality - the calibre of questions, the brief complexity, the peer critique depth - is significantly higher than an open-enrollment course. You are not paying for access. You are paying for the cohort you are entering.',
 },
 {
 title: 'A more experienced, more expensive mentoring profile.',
 body: 'The mentors who can credibly teach AI behaviour design - trust calibration, probabilistic UX, LLM feature specification - are senior product practitioners, not junior design instructors. The teaching cost reflects that.',
 },
 {
 title: 'A specialist discipline with almost no competition at depth in India.',
 body: 'A handful of programs abroad cover this at comparable depth - at USD 1,500 to USD 2,000, self-paced, no live critique, no portfolio output. At Rs 64,999 with live mentorship and two deployable case studies, the price is structurally lower than every international equivalent.',
 },
 {
 title: 'Two portfolio artefacts that cannot be produced in a general design course.',
 body: 'An AI product audit case study and a functional Bolt/v0 prototype of an original AI feature are specialist outputs. The time, mentorship, and tool access required to produce them is not comparable to a general UI UX curriculum.',
 },
 ],
 closing:
 'The Pro course builds a design foundation. This course builds a specialisation on top of it. They are not competing - they are sequential for designers, and parallel for PMs who come from a product background rather than a design background.',
}

export const aiProductShipArtifacts = [
 {
 title: 'Artefact 1 - AI Product Audit Case Study',
 description:
 'A structured critique of a live AI product. You identify trust failures, redesign 3 to 5 screens with corrected AI states, and document what you found, what you changed, and why.',
 supporting: 'Supporting artefacts: teardown doc, trust architecture diagram (Figma), redesigned Figma screens.',
 },
 {
 title: 'Artefact 2 - Original AI Feature - Specced, Designed, Prototyped',
 description:
 'An original AI feature from concept to deployed prototype. Full behaviour specification, all 8 AI states designed across minimum 12 Figma screens, functional Bolt/v0 prototype with interactive state transitions, prompt chain documented, case study written.',
 supporting:
 'Supporting artefacts: AI behaviour spec, Figma decision tree, Figma file (12+ screens), Bolt/v0 prototype, prompt chain documentation, written case study.',
 },
]

export const aiProductCurriculumWeeks = [
 {
 week: 'Week 1: AI Product Foundations and Trust Audit Framework',
 sessions: [
 {
 title: 'Session 1: How AI Products Actually Fail - and Why Design Is the Fix',
 body: 'Live teardown of 3 real AI products. Probabilistic vs deterministic systems. Where trust collapses and what the design missed.',
 tools: 'Perplexity, Claude',
 deliverable: 'AI product teardown doc',
 },
 {
 title: 'Session 2: The Trust Audit Framework and Choosing Your Audit Subject',
 body: 'The 5-criteria trust audit. Students choose the live AI product they will audit across the course. Perplexity research sprint. Claude synthesises audit brief.',
 tools: 'Perplexity, Claude',
 deliverable: 'Structured audit brief',
 },
 ],
 },
 {
 week: 'Week 2: Behaviour Specification: Designing What AI Should Do',
 sessions: [
 {
 title: 'Session 3: Writing AI Behaviour - The Spec Before the Screen',
 body: 'What an AI behaviour specification is. Defining all AI states before opening Figma. Content design for AI voice across states. Live Claude workshop: writing behaviour specs and iterating on AI state copy.',
 tools: 'Claude',
 deliverable: 'AI behaviour specification',
 },
 {
 title: 'Session 4: Figma - Mapping AI Decision Architecture',
 body: 'Decision trees for probabilistic systems. Human-in-the-loop design points. Trust architecture diagrams built live.',
 tools: 'Figma',
 deliverable: 'Trust architecture diagram and AI decision tree',
 },
 ],
 },
 {
 week: 'Week 3: Designing AI States in Figma',
 sessions: [
 {
 title: 'Session 5: The AI State Design System - All 8 States Built',
 body: 'The 8 core AI states: loading and thinking, generating, confident output, uncertain output, partial output, error, refusal, empty. Confidence UI patterns. AI state component library built in Figma from scratch.',
 tools: 'Figma, Claude',
 deliverable: 'Figma AI state library - all 8 states',
 },
 {
 title: 'Session 6: Error, Fallback, and Graceful Degradation Design',
 body: 'Hallucination handling UI. The "I don\'t know" experience as a product feature. Feedback loop design. Live redesign of identified trust failures in the audit product.',
 tools: 'Figma',
 deliverable: 'Audit product redesigned - minimum 5 screens',
 },
 ],
 },
 {
 week: 'Week 4: Designing the Original AI Feature',
 sessions: [
 {
 title: 'Session 7: AI Feature Definition - From Concept to Spec',
 body: 'Choosing an original AI feature. Writing the full behaviour spec in Claude. Prompt chain workshop.',
 tools: 'Claude',
 deliverable: 'Original AI feature behaviour spec',
 },
 {
 title: 'Session 8: Designing the Original Feature - All States in Figma',
 body: 'Applying the Week 3 state library to the original feature. IA for AI-native features. Trust scaffolding design. Full design sprint.',
 tools: 'Figma',
 deliverable: 'Original feature - minimum 12 screens across all states',
 },
 ],
 },
 {
 week: 'Week 5: Prototyping and Functional Validation',
 sessions: [
 {
 title: 'Session 9: Bolt and v0.dev - Functional AI Feature Prototypes',
 body: 'Why Figma prototypes fail for AI features. Prompt engineering for Bolt and v0. Building the working prototype live.',
 tools: 'Bolt or v0.dev, Claude',
 deliverable: 'Working interactive prototype',
 },
 {
 title: 'Session 10: Simulated Usability Testing and Iteration',
 body: 'Claude-simulated user responses across trust states. Identifying where the prototype breaks trust. Iteration sprint. Prompt chain documentation complete.',
 tools: 'Claude, Bolt or v0.dev',
 deliverable: 'Iterated prototype, usability findings, prompt chain documentation',
 },
 ],
 },
 {
 week: 'Week 6: Case Studies, Portfolio, and Presentations',
 sessions: [
 {
 title: 'Session 11: Writing Both Case Studies',
 body: 'Audit case study. Original feature case study. Claude for writing, editing, and signal-to-noise ratio.',
 tools: 'Claude',
 deliverable: 'Both case studies written',
 },
 {
 title: 'Session 12: Portfolio Presentations and Certificate',
 body: 'Live presentations to full cohort. Structured critique. Checklist review. Certificate issued.',
 tools: '',
 deliverable: 'Complete portfolio - 2 case studies, Figma files, prototype, prompt chain, certificate',
 },
 ],
 },
]

export const aiProductEightStates = [
 'Loading and thinking',
 'Generating - progressive disclosure in real time',
 'Confident output - full output, high certainty',
 'Uncertain output - hedged, confidence below threshold',
 'Partial output - model can answer some but not all',
 'Error - model failed or system error',
 'Refusal - model declines and must communicate without breaking trust',
 'Empty and no-data - nothing to return, must not feel like a dead end',
]

export const aiProductTools = [
 { name: 'Perplexity', description: 'Weeks 1 and 2. AI product audit research. Competitive benchmarking, feature pattern analysis, user complaint synthesis.' },
 { name: 'Claude', description: 'Every week. Behaviour spec writing, AI state copy, prompt chain construction, simulated usability testing, case study writing. The most heavily used tool in this course.' },
 { name: 'Figma', description: 'Weeks 2 through 5. Trust architecture diagrams, AI decision trees, human-in-the-loop flow mapping, all 8 AI states, component library, audit product redesign, original feature design across all states.' },
 { name: 'Bolt or v0.dev', description: 'Weeks 5 and 6. Functional interactive prototypes where AI states are actually interactive - not static Figma click-throughs.' },
]

export const aiProductBonuses = [
 { name: 'AI Behaviour Spec Template Library', valueInr: 'Rs 4,999', valueUsd: 'USD 69', description: 'Notion template - all 8 AI states with pre-built structure, example copy, and a checklist. Use from week 1 and on every AI project after.', highlight: false },
 { name: 'AI State Design System Kit', valueInr: 'Rs 6,999', valueUsd: 'USD 99', description: 'Figma file - all 8 AI states pre-built as components. The structure you build in week 3, given as a reference in week 1.', highlight: false },
 { name: 'AI Prototype Prompt Vault', valueInr: 'Rs 3,999', valueUsd: 'USD 59', description: '50 tested prompts for Bolt and v0.dev - AI state simulation, interactive transitions, confidence indicator rendering, fallback state prototyping.', highlight: false },
 { name: 'Figma for Non-Designers Pre-Course Crash Module', valueInr: 'Rs 5,999', valueUsd: 'USD 89', description: '2-hour async module covering exactly the Figma operations this course requires. Built for PMs and non-designers. Released the week before the cohort starts.', highlight: false },
 { name: '60-Day Post-Course Mentor Access', valueInr: 'Rs 8,999', valueUsd: 'USD 129', description: 'Direct access to your mentor via the cohort channel for 60 days after the final session.', highlight: false },
 { name: 'Live Group Portfolio Review Session', valueInr: 'Rs 6,999', valueUsd: 'USD 99', description: 'Dedicated end-of-course session - structured critique of both case studies using a defined feedback rubric.', highlight: false },
 { name: 'AI Product Design Alumni Community', valueInr: 'Rs 2,999', valueUsd: 'USD 59', description: 'Permanent access to the alumni channel - peer critique, job leads, project collaborations.', highlight: false },
 { name: '[Early Bird Exclusive] One 30-Minute 1:1 Mentor Session', valueInr: 'Rs 4,999', valueUsd: 'USD 69', description: 'Redeemable in weeks 3 to 5. Use it on your Figma state library, original feature design, or prototype.', highlight: true },
]

export const aiProductValueStack: LocalizedValueRow[] = [
 { item: 'AI Product Design Course (6 weeks · 42 live hours · 2 case studies · prototype)', valueInr: 'Rs 1,50,000', valueUsd: 'USD 1,899' },
 { item: 'AI Behaviour Spec Template Library', valueInr: 'Rs 4,999', valueUsd: 'USD 69' },
 { item: 'AI State Design System Kit', valueInr: 'Rs 6,999', valueUsd: 'USD 99' },
 { item: 'AI Prototype Prompt Vault', valueInr: 'Rs 3,999', valueUsd: 'USD 59' },
 { item: 'Figma for Non-Designers Pre-Course Module', valueInr: 'Rs 5,999', valueUsd: 'USD 89' },
 { item: '60-Day Post-Course Mentor Access', valueInr: 'Rs 8,999', valueUsd: 'USD 129' },
 { item: 'Live Group Portfolio Review Session', valueInr: 'Rs 6,999', valueUsd: 'USD 99' },
 { item: 'AI Product Design Alumni Community', valueInr: 'Rs 2,999', valueUsd: 'USD 59' },
 { item: '[Early Bird] 1:1 Mentor Session', valueInr: 'Rs 4,999', valueUsd: 'USD 69' },
 { item: 'Total standalone value', rowType: 'total', valueInr: 'Rs 1,95,992', valueUsd: 'USD 2,499' },
 { item: 'Your early bird price', rowType: 'earlyBird', valueInr: 'Rs 64,999', valueUsd: 'USD 899' },
 { item: 'Standard price (after early bird)', rowType: 'standard', valueInr: 'Rs 79,999', valueUsd: 'USD 899' },
]

export const aiProductEmiConfig = {
 inr: { months: 3, perMonth: '21,666' },
 usd: { months: 3, perMonth: '299' },
} as const

export const aiProductIdealFor = [
 'You are a PM at a company shipping AI features with no framework for designing the UX of what the model actually does.',
 'You are a designer with 1 to 3 years of experience being asked to design AI products and realising standard UX principles do not cover probabilistic output.',
 'You are a UX writer or content designer who owns the AI voice layer of a product.',
 'You have shipped at least one digital product in any role.',
]

export const aiProductNotFor = [
 'You have not shipped a digital product.',
 'You want to learn Figma from scratch.',
 'You are looking for a recorded course.',
 'You want to learn prompt engineering as a standalone discipline.',
]

export const aiProductFaqs = [
 {
 question: 'Do I need Figma experience?',
 answer:
 'You need basic navigation fluency - open layers, read components, understand the canvas. The Figma for Non-Designers pre-course module covers exactly what this course requires and is released the week before the cohort starts.',
 },
 {
 question: 'I am a PM. Is this course for me?',
 answer:
 'Yes. The prerequisite is shipping a digital product in any role, not a design background. Behaviour specs, decision trees, AI state thinking - all of this is accessible and directly relevant for product managers.',
 },
 {
 question: 'What does "shipped a digital product in any role" mean?',
 answer:
 'You have been part of taking a digital product from concept to a state where real users used it. PM, designer, engineer, founder - any role qualifies. It does not need to be commercially successful. The requirement ensures the course starts from product context rather than fundamentals.',
 },
 {
 question: 'How is this different from the AI module in the UI UX Design Master course?',
 answer:
 'The Master course includes a 2-week AI product strategy module that covers the strategic layer - how AI changes product thinking, how to brief AI features at an overview level. This course is 6 weeks deep on the execution layer - all 8 AI states designed in Figma, full behaviour specification, functional prototype in Bolt/v0, two portfolio case studies. Different depth, different output, complementary not redundant.',
 },
 {
 question: 'Pro graduates - is there a discount?',
 answer:
 'Yes. UI UX Design Pro graduates receive Rs 5,000 off the standard price. Email hello@designient.com with your certificate to apply.',
 },
 {
 question: 'Can I attend the free workshop before deciding?',
 answer:
 'Yes. The AI Product Design Live monthly workshop is a free 2-hour session - a real AI product audited and redesigned live in Figma. Register at designient.com/ai-product-design-live.',
 },
 {
 question: 'What is the refund policy?',
 answer:
 'Booking token (Rs 6,499 early bird / Rs 7,999 standard) is non-refundable. One cohort transfer at full token value. Full course fee minus token is refundable if withdrawn before cohort starts. After start: 25% refund under guarantee conditions only. Full terms at /cancellation-refund-policy.',
 },
]

export const aiProductPricingFeatures = [
 '6 weeks · 42 live hours · 67 total hours',
 '2 portfolio case studies + functional Bolt/v0 prototype',
 'Application-based · 12 students max',
 'All 8 AI states designed in Figma',
 '60-day post-course mentor access',
]
