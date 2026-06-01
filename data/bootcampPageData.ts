export const bootcampHero = {
  badge: 'Design Track — Step 1 · 3 Days · 50 Early Bird Seats · Beginner-Friendly',
  title: 'UI UX Design Bootcamp: Build a Portfolio-Ready Product in 3 Days — No Experience Required',
  subtitle:
    'One weekend. One real brief. One product designed, prototyped, and presented using the same AI tools working designers use every day. You leave with a research document, a Figma design file, a Bolt prototype, a written case study, and a certificate — not a tutorial you watched, but a product you built.',
  trustChips: [
    '3 Days',
    '18 Live Hours',
    'Up to 200 Students',
    'Certificate Included',
    'Full Refund Guarantee',
    'Adobe Certified Program',
  ],
  stats: [
    { value: '3', label: 'Days Live' },
    { value: '7', label: 'AI Tools Taught' },
    { value: '5', label: 'Portfolio Artefacts' },
    { value: '100%', label: "Refund If You Don't Ship" },
  ],
  seatNote: '50 early bird seats at Rs 1,999. Standard seats at Rs 5,000. Seat confirmed on payment.',
  guaranteeNote:
    'Full refund guaranteed if you do not have a portfolio-worthy prototype, case study, and certificate by Sunday 7pm. Claim by Monday midnight. No conditions.',
}

export const bootcampPatternComparison = {
  title: 'This Is Not a Tutorial — It Is a 3-Day Build Sprint',
  intro: [
    'Design tutorials teach you to follow steps. This bootcamp gives you a real brief, a live cohort, and three days to ship something from scratch.',
    'Friday evening you research. Saturday you design. Sunday you build, test, write, and present.',
    'By Sunday evening you have five things that did not exist on Friday: a research brief, a Figma design file with real screens, a Bolt prototype that functions, a written case study, and a certificate.',
    'Every single one of those was built by you on a real problem, not a pre-made template someone else completed before the session started.',
  ],
  rows: [
    { feature: 'Output', bootcamp: '5 portfolio artefacts built live', others: 'Video tutorials, no deliverables' },
    { feature: 'Format', bootcamp: 'Live, 3 days, real brief', others: 'Self-paced, watch at your own speed' },
    { feature: 'AI tools', bootcamp: '7 tools used in real workflow', others: 'AI mentioned, not used on real work' },
    { feature: 'Feedback', bootcamp: 'Live mentor critique Saturday + Sunday', others: 'No feedback mechanism' },
    { feature: 'Prototype', bootcamp: 'Functional Bolt prototype', others: 'Static screens only' },
    { feature: 'Certificate', bootcamp: 'Issued on Sunday', others: 'Completion certificate only' },
    { feature: 'Guarantee', bootcamp: "Full refund if you don't ship", others: 'No guarantee' },
    { feature: 'Price', bootcamp: 'Rs 1,999 early bird', others: 'Rs 1,000 to Rs 15,000' },
  ],
}

export const bootcampDeliverables = [
  {
    title: 'Research Brief',
    description:
      'Produced Friday evening using Perplexity and Claude. You identify a real user problem, research competitors, and synthesise findings into a structured brief that guides Saturday\'s design work.',
  },
  {
    title: 'Figma Design File',
    description:
      'Produced Saturday. Includes user personas built with JTBD framework, a journey map, information architecture diagram, user flow, wireframes built with Figma Make, and three polished final screens designed with visual design principles applied.',
  },
  {
    title: 'Bolt Prototype',
    description:
      'Produced Sunday. A functional prototype of your product that a user can actually interact with — not a click-through Figma mockup, a Bolt-deployed product with real interactions.',
  },
  {
    title: 'Case Study',
    description:
      'Written Sunday. A structured document explaining your design decisions — why you made each choice, what the research said, how you responded to critique, and what you would do differently with more time.',
  },
  {
    title: 'Prompt Chain Documentation',
    description:
      'A record of every AI prompt you used across the three days — what you asked, how you refined it, and what the output was. This document is increasingly requested by design employers in 2026 as evidence of AI fluency.',
  },
]

export const bootcampSchedule = [
  {
    title: 'Friday 7pm – 10pm — Research and Brief',
    body: 'Brief reveal: the real design problem every student will solve. Perplexity research sprint — competitive landscape, user pain points, existing solutions. Claude synthesis — turning raw research into a structured design brief. By 10pm, every student has a brief that frames Saturday\'s design work.',
    tools: 'Perplexity, Claude',
    deliverable: 'Research brief',
  },
  {
    title: 'Saturday 10am – 7pm — Research to Design',
    body: 'Morning: User personas built using the JTBD framework with Claude. Journey mapping in FigJam AI — where users fail, where they succeed, where the design opportunity is. Afternoon: Information architecture and user flow. Wireframing in Figma Make. Visual design — applying colour, typography, spacing, and component logic. Claude Design for visual direction and copy. Live critique loop — every student receives mentor feedback on their work before the end of the day.',
    tools: 'Claude, FigJam AI, Figma Make, Figma, Claude Design',
    deliverable: 'Figma file with IA diagram, user flow, and 3 polished screens',
  },
  {
    title: 'Sunday 10am – 7pm — Prototype, Test, Write, Present',
    body: 'Morning: Building the Bolt prototype. Simulated usability testing using Claude to identify where users would get confused or drop off. Iterating based on test findings. Afternoon: Case study writing. Prompt chain documentation. Student presentations — each student presents their product, their process, and their case study to the full cohort. Certificate issued on presentation completion.',
    tools: 'Bolt, Claude',
    deliverable: 'Bolt prototype · case study deck · prompt chain documentation · certificate',
  },
]

export const bootcampTools = [
  { name: 'Perplexity', description: 'Friday evening research sprint. Competitive benchmarking, user pain point identification, market sizing.' },
  { name: 'Claude', description: 'Persona building, journey map synthesis, visual direction, case study writing, simulated usability testing. Used across all three days.' },
  { name: 'FigJam AI', description: 'Journey mapping and IA diagramming on Saturday morning.' },
  { name: 'Figma Make', description: 'Rapid wireframing on Saturday afternoon. Structure before polish.' },
  { name: 'Figma', description: 'Full visual design on Saturday afternoon. The primary design tool.' },
  { name: 'Claude Design', description: 'Visual direction, copy generation, colour and layout suggestions inside the Figma workflow.' },
  { name: 'Bolt', description: 'Functional prototype on Sunday. The tool that turns your Figma file into a product someone can actually use.' },
]

export const bootcampBonuses = [
  { name: 'AI Design Prompt Vault', value: 'Rs 4,999', description: 'The exact prompts used across the bootcamp — for research, persona building, critique, case study writing, and visual direction. Tested and refined across multiple cohorts.' },
  { name: 'Figma Starter Kit', value: 'Rs 2,999', description: 'A pre-built Figma file with the component library, colour variables, text styles, and auto layout frames you will need from Saturday morning.' },
  { name: 'Bolt Portfolio Deploy Guide', value: 'Rs 2,999', description: 'A step-by-step guide to deploying your Bolt prototype as a shareable public link and embedding it in your portfolio.' },
  { name: 'Live Portfolio Review (Post-Bootcamp)', value: 'Rs 5,999', description: 'A 90-minute online session the week after the bootcamp where mentor reviews every student\'s five artefacts and gives specific feedback.' },
  { name: 'Career Launchpad Kit', value: 'Rs 2,999', description: 'Resume template, LinkedIn profile guide, portfolio structure guide, and 10 cold outreach templates for junior designer roles.' },
  { name: 'Alumni Community — 30-Day Access', value: 'Rs 1,999', description: 'Access to the Designient Design alumni channel for 30 days. Peer feedback, job leads, and design resources.' },
  { name: '[Early Bird Exclusive] Priority Critique Slot', value: 'Rs 2,999', description: 'Early bird students get a priority slot in Saturday\'s live critique loop — mentor reviews their work first. Available to first 50 students only.', highlight: true },
]

export const bootcampValueStack = [
  { item: 'UI UX Design Bootcamp (3 days · 18 live hours · 5 portfolio artefacts)', value: 'Rs 20,000' },
  { item: 'AI Design Prompt Vault', value: 'Rs 4,999' },
  { item: 'Figma Starter Kit', value: 'Rs 2,999' },
  { item: 'Bolt Portfolio Deploy Guide', value: 'Rs 2,999' },
  { item: 'Live Portfolio Review (post-bootcamp)', value: 'Rs 5,999' },
  { item: 'Career Launchpad Kit', value: 'Rs 2,999' },
  { item: 'Alumni Community — 30-day access', value: 'Rs 1,999' },
  { item: '[Early Bird] Priority Critique Slot', value: 'Rs 2,999' },
]

export const bootcampComparison = {
  rows: [
    { feature: 'Output', bootcamp: '5 live-built portfolio artefacts', others: 'No portfolio output' },
    { feature: 'AI tools taught', bootcamp: '7 tools in real workflow', others: 'Mentioned in slides' },
    { feature: 'Mentor feedback', bootcamp: 'Live critique, both Saturday and Sunday', others: 'None or forum-based' },
    { feature: 'Prototype', bootcamp: 'Functional Bolt prototype', others: 'Static Figma screens' },
    { feature: 'Batch size', bootcamp: 'Up to 200 (critique in smaller groups)', others: 'Unlimited, no cohort' },
    { feature: 'Guarantee', bootcamp: "Full refund if you don't ship", others: 'No guarantee' },
    { feature: 'Duration', bootcamp: '3 days', others: 'Weeks to months at your own pace' },
    { feature: 'Certificate', bootcamp: 'Issued Sunday on completion', others: 'After quiz completion' },
  ],
}

export const bootcampIdealFor = [
  'You have never designed anything before and want to know whether UI/UX design is the right career path before committing to a 10-week course.',
  'You are a fresh graduate, career switcher, or working professional looking to build your first design portfolio piece — one that demonstrates real skills, not a completed tutorial.',
  'You want to see what it feels like to work through a full design process — research, design, prototype, present — in a concentrated, high-output environment.',
  'You are willing to work hard across one weekend and ship something you are genuinely proud of by Sunday evening.',
]

export const bootcampNotFor = [
  'You are an experienced designer looking for advanced skills. This bootcamp is for beginners. Experienced designers should consider the UI UX Design Master course.',
  'You want a passive learning experience. Every session is a build session. There is no watching and listening without producing output.',
  'You expect to learn design theory. You will learn by doing — theory is introduced at the moment it applies to the work, not in isolated lectures.',
]

export const bootcampFaqs = [
  {
    question: 'Do I need any prior design or software experience?',
    answer:
      'No. This bootcamp is designed specifically for people who have never used Figma, Bolt, or any design tool before. The Figma Starter Kit bonus is included precisely to eliminate setup time and get you designing from the first hour of Saturday. Every tool is introduced at the moment you need it, not in advance.',
  },
  {
    question: 'What is the brief — is it the same for every student?',
    answer:
      'Yes. Every student works on the same design brief so that critique sessions can be comparative and meaningful. The brief changes each cohort. It is revealed Friday evening so students arrive on Saturday ready to design rather than spending time understanding the problem.',
  },
  {
    question: 'Is this online or in-person?',
    answer:
      'The bootcamp runs live online. Students in Bangalore, Hyderabad, and Pune may have access to in-person co-working space options during the bootcamp — check with the team at hello@designient.com for the current cohort\'s in-person options.',
  },
  {
    question: 'What if I fall behind during the bootcamp?',
    answer:
      'The curriculum is designed to be completable within the three days for a student with no prior experience. Mentors actively check progress throughout Saturday and Sunday and support students who are moving slowly. The guarantee is structured around output — if you are present and engaged and still do not have the five artefacts by Sunday evening, the full refund applies.',
  },
  {
    question: 'I already know basic Figma. Is this still worth attending?',
    answer:
      'Yes, if you have never completed a full design process from research to prototype. The value is not Figma instruction — it is completing the full workflow, getting live critique, and shipping five portfolio artefacts in one weekend. Students with some Figma experience often produce stronger Saturday work and have more time for iteration.',
  },
  {
    question: 'What happens after the bootcamp?',
    answer:
      'The natural next step is the UI UX Design Pro course — 10 weeks, full curriculum, real client internship, and structured placement assistance. 90% of Pro students attend the Bootcamp first. There is no obligation to continue. The Bootcamp is a complete standalone program.',
  },
  {
    question: 'Is the certificate recognised by employers?',
    answer:
      'It is a Designient certificate, not a government or university certificate. Employers in the Indian design market recognise Designient by its placement record and the quality of student portfolios — not by the institutional weight of the certificate itself. The portfolio you build is more valuable to a hiring manager than the certificate.',
  },
  {
    question: 'What tools do I need to have set up before Friday?',
    answer:
      'The pre-bootcamp setup guide is sent to all registered students one week before the cohort starts. You need a Figma account (free), a Bolt account (free), a Perplexity account (free tier is sufficient), and a Claude account (free tier is sufficient). Setup takes under 30 minutes.',
  },
]

export const bootcampPricingFeatures = [
  '3 days · 18 live hours · 5 portfolio artefacts',
  '7 AI tools taught in real workflow',
  'Live mentor critique Saturday and Sunday',
  'Full refund guarantee if you do not ship by Sunday 7pm',
  'All bonus stack items included at no extra cost',
]
