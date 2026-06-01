export const aiAcceleratorHero = {
  badge: 'Highest Demand 2026 · AI Track — Step 1 · 8 Weeks · 35 Seats · Open Enrollment',
  title: 'AI Automation Accelerator: Build 3 Deployed AI Workflows in 8 Weeks — No Coding Required',
  subtitle:
    'You will leave with three automations running in production — not three demo builds, not three tutorial replicas. Three workflows solving real problems in your actual work, built with the tools the market is paying for right now: n8n, Make, ManyChat, and Relevance AI.',
  trustChips: [
    '8 Weeks',
    '56 Live Hours',
    '35 Students Max',
    'Open Enrollment',
    'Certificate',
    '50% Money-Back Guarantee',
  ],
  stats: [
    { value: '6', label: 'Tools Taught Live' },
    { value: '3', label: 'Deployed Automations' },
    { value: '76', label: 'Total Hours' },
    { value: '10+', label: 'Hours Saved Per Week' },
  ],
  seatNote: '8 early bird seats at Rs 34,999. 27 standard seats at Rs 44,999. 35 total. Seat confirmed on payment.',
  bookingNote: 'Pay now to confirm your seat. EMI available. 50% refund guarantee — conditions below.',
}

export const aiAcceleratorDemandSection = {
  title: 'The Highest Demand AI Skill in India Right Now',
  paragraphs: [
    "Upwork's 2026 in-demand skills report records AI integration skills at +178% year-on-year growth. AI automation is not in the future — it is the skill Indian professionals and freelancers are being hired for and paid for today.",
    'The gap is not knowing that automation exists. The gap is being able to actually build it — not a demo, not a tutorial replica, but a deployed workflow that runs without you sitting there. That is what this accelerator produces.',
    'Three automations. Live in production. Built by you on your real problems. That is the difference between being aware of AI automation and being fluent in it.',
  ],
}

export const aiAcceleratorPatternComparison = {
  title: 'This Is Not a Course About AI Tools — It Is About Deployed Results',
  intro: [
    'There are programs in India that will teach you 14 AI tools in 14 days. You will watch demos. You will leave with a certificate. And on Monday morning you will have no idea what to actually build.',
    'This accelerator is the opposite. You arrive with three real problems from your actual work. You leave with three automations solving those problems — running in production, live, documented, and demonstrated in front of the cohort.',
  ],
  rows: [
    { feature: 'Output', pro: '3 deployed production automations', others: 'Knowledge of 14+ AI tools' },
    { feature: 'Format', pro: 'Live, 8 weeks, 35 students', others: 'Recorded or 400-student batch' },
    { feature: 'Portfolio', pro: '3 live demos with ROI calculated', others: 'No portfolio output' },
    { feature: 'Tools taught to depth', pro: 'n8n, Make, ManyChat, Relevance AI', others: 'Surface demos' },
    { feature: 'Coding required', pro: 'None', others: 'None' },
    { feature: 'Guarantee', pro: '50% refund — conditions stated', others: 'No refund policy' },
    { feature: 'Price', pro: 'Rs 34,999 early bird', others: 'Rs 60,000 to Rs 1,00,000' },
    { feature: 'Mentor access', pro: 'Live, every session', others: 'Recorded video' },
  ],
}

export const aiAcceleratorBuildArtifacts = [
  {
    title: 'Automation 1 — Internal Operations or Data Workflow',
    description:
      'Built in n8n, connected to Airtable. Solves a recurring internal problem you bring to the course. Running in production by end of week 3.',
    examples:
      'Examples: form submission → Airtable record → Slack notification → follow-up email queued. Weekly data pulled from Google Sheets → formatted → sent to team automatically.',
    supporting: 'Supporting artefacts: n8n workflow, Airtable base, documentation doc, time-saved calculation.',
  },
  {
    title: 'Automation 2 — AI-Powered Client or Marketing Workflow',
    description:
      'Built in n8n or Make with Claude API as the intelligence layer. AI reads input, makes a decision, routes output — without human intervention. Running in production by end of week 6.',
    examples:
      'Examples: WhatsApp enquiry → Claude qualifies lead → Airtable records → personalised follow-up sent automatically. Content brief → Claude drafts three variations → Notion doc for review.',
    supporting:
      'Supporting artefacts: workflow file, Claude prompt documentation, ManyChat flow if applicable, documentation doc, ROI calculation.',
  },
  {
    title: 'Automation 3 — Autonomous AI Agent',
    description:
      'Built in Relevance AI, orchestrated via n8n. Runs on a goal — not a trigger. Running in production by end of week 8.',
    examples:
      'Examples: research agent monitors a topic, synthesises weekly, emails a briefing automatically. Lead scoring agent evaluates inbound enquiries and routes without human review.',
    supporting:
      'Supporting artefacts: Relevance AI agent build, n8n orchestration, Airtable memory base, documentation doc, ROI calculation.',
  },
]

export const aiAcceleratorPreCourse = {
  title: 'Pre-Course Module — Async (2 hours, released 1 week before cohort)',
  body: 'Automation logic — trigger, action, condition. How to identify your 5 most automatable tasks. Account setup for all 6 tools. By session 1 you have live accounts, understand workflow logic, and have chosen the 3 real problems your automations will solve.',
}

export const aiAcceleratorCurriculumWeeks = [
  {
    week: 'Week 1 — Automation Logic and First Live Workflow',
    sessions: [
      {
        title: 'Session 1: Triggers, Actions, Conditions — The Mental Model That Runs Everything',
        body: 'First live automation built in Zapier. By end of session 1, your first automation is running.',
        tools: 'Zapier',
        deliverable: 'First live automation deployed. All 3 automation workflow maps completed.',
      },
      {
        title: 'Session 2: Workflow Mapping Workshop — Planning All 3 Before Building',
        body: 'Every student presents their 3 automation plans. Mentor reviews feasibility. Planning before building cuts build time by more than half.',
        tools: 'Zapier, Notion',
        deliverable: '3 workflow maps — trigger, action, data, conditions, output, success metric defined.',
      },
    ],
  },
  {
    week: 'Week 2 — n8n Core: Professional Automation',
    sessions: [
      {
        title: 'Session 3: n8n Fundamentals',
        body: 'Canvas, nodes, credentials, webhooks. First n8n workflow live — the week 1 problem rebuilt in the professional tool.',
        tools: 'n8n',
        deliverable: 'First n8n workflow live.',
      },
      {
        title: 'Session 4: n8n Intermediate — Conditional Logic, Loops, Error Handling',
        body: 'Branching, batch loops, error recovery, webhook triggers.',
        tools: 'n8n',
        deliverable: 'Multi-step conditional workflow deployed. Automation 1 scoped in n8n canvas.',
      },
    ],
  },
  {
    week: 'Week 3 — Airtable: The Data Layer',
    sessions: [
      {
        title: 'Session 5: Airtable — Structured Data for Every Workflow',
        body: 'Why automation breaks on unstructured data. Connecting Airtable to n8n — reading, creating, updating records.',
        tools: 'Airtable, n8n',
        deliverable: 'Airtable base built for Automation 1. n8n–Airtable connection live.',
      },
      {
        title: 'Session 6: Automation 1 Full Build — Live',
        body: 'Each student builds Automation 1 from their week 1 blueprint. Live mentor debugging and feedback.',
        tools: 'n8n, Airtable',
        deliverable: 'Automation 1 live and deployed. Documentation written. Time saved calculated.',
      },
    ],
  },
  {
    week: 'Week 4 — Make: The Visual Alternative',
    sessions: [
      {
        title: 'Session 7: Make Fundamentals',
        body: 'Scenarios, modules, routers, aggregators. Automation 1 rebuilt in Make to feel the difference.',
        tools: 'Make',
        deliverable: 'Automation 1 in Make. Student decides n8n or Make for Automation 2.',
      },
      {
        title: 'Session 8: Make Advanced — Branching and Scheduling',
        body: 'Complex routing. Scheduled scenarios. Automation 2 canvas started.',
        tools: 'Make',
        deliverable: 'Automation 2 canvas started.',
      },
    ],
  },
  {
    week: 'Week 5 — AI Layer: Claude API Inside Workflows',
    sessions: [
      {
        title: 'Session 9: Claude API as a Workflow Node',
        body: "Calling Claude programmatically inside n8n and Make. Dynamic variables passed to Claude prompts. Routing based on Claude's output.",
        tools: 'n8n or Make, Claude API',
        deliverable: 'AI decision node live — Claude reads, decides, routes.',
      },
      {
        title: 'Session 10: Automation 2 Full Build',
        body: 'Each student builds their AI-powered workflow live.',
        tools: 'n8n or Make, Claude API',
        deliverable: 'Automation 2 live and deployed. Documentation written. ROI calculated.',
      },
    ],
  },
  {
    week: 'Week 6 — ManyChat: WhatsApp and Instagram Automation',
    sessions: [
      {
        title: 'Session 11: ManyChat Fundamentals',
        body: 'WhatsApp Business API setup. Instagram DM automation. Basic WhatsApp welcome and qualification flow built live.',
        tools: 'ManyChat',
        deliverable: 'WhatsApp welcome flow live. Lead capture connected.',
      },
      {
        title: 'Session 12: ManyChat + n8n — The Full WhatsApp Pipeline',
        body: 'Full pipeline: WhatsApp enquiry → ManyChat captures → n8n receives → Claude qualifies → Airtable records → personalised reply.',
        tools: 'ManyChat, n8n, Claude API, Airtable',
        deliverable: 'Full WhatsApp automation pipeline live.',
      },
    ],
  },
  {
    week: 'Week 7 — Relevance AI: From Workflows to Autonomous Agents',
    sessions: [
      {
        title: 'Session 13: What Agents Are and Why They Differ from Workflows',
        body: 'Relevance AI platform. First agent built live — a research agent that searches, synthesises, and outputs without human instruction.',
        tools: 'Relevance AI',
        deliverable: 'First Relevance AI agent live. Automation 3 scoped.',
      },
      {
        title: 'Session 14: Relevance AI + n8n — Agents with Orchestration',
        body: 'n8n as the orchestration layer. Agent memory via Airtable. Automation 3 built.',
        tools: 'Relevance AI, n8n, Airtable',
        deliverable: 'Automation 3 built and partially deployed.',
      },
    ],
  },
  {
    week: 'Week 8 — Automation 3 Deployment, Portfolio, and Presentations',
    sessions: [
      {
        title: 'Session 15: Automation 3 Deployment and Documentation',
        body: 'Automation 3 completed, debugged, deployed. Workflow documentation workshop. ROI calculated for all 3. Freelance packaging guide applied.',
        tools: 'Relevance AI, n8n, Airtable',
        deliverable: 'Automation 3 live and deployed. All 3 documentation docs complete. All 3 ROI calculations done.',
      },
      {
        title: 'Session 16: Portfolio Presentations and Certificate',
        body: 'Each student demos all 3 automations live — real screen share, real trigger, real output. Mentor and peer critique. Certificate issued.',
        tools: '',
        deliverable: 'Complete portfolio — 3 live automations, 3 documentation docs, 3 ROI calculations, certificate.',
      },
    ],
  },
]

export const aiAcceleratorTools = [
  { name: 'Zapier', description: 'Week 1 only. The entry ramp. First live automation with zero friction. Dropped after week 1.' },
  { name: 'n8n', description: 'Weeks 2 through 8. The professional backbone. Open-source, AI-native. All three portfolio automations built here. The tool Upwork clients and employers specifically search for.' },
  { name: 'Make', description: 'Weeks 4 and 5. The visual alternative. Superior for complex branching and scheduled workflows. Students choose n8n or Make for Automation 2 based on their problem.' },
  { name: 'Airtable', description: 'Weeks 3 through 8. The structured data layer that makes workflows production-grade, auditable, and maintainable.' },
  { name: 'ManyChat', description: "Weeks 6 and 7. WhatsApp and Instagram automation. The highest-value automation skill in the Indian market — WhatsApp is India's primary business communication channel." },
  { name: 'Relevance AI', description: 'Weeks 7 and 8. From workflow to agent. Systems that reason about a goal rather than execute a fixed sequence. Where automation is heading in 2026.' },
]

export const aiAcceleratorBonuses = [
  { name: 'Workflow Audit Canvas', value: 'Rs 3,999', description: 'Notion template — map and prioritise every automatable task in your current work before session 1. Completed as a pre-course exercise.', highlight: false },
  { name: 'n8n Quick-Start Template Pack', value: 'Rs 4,999', description: '15 pre-wired n8n workflow templates — lead capture, report generation, Slack notifications, data sync, email triggers, and more.', highlight: false },
  { name: 'AI Automation Freelance Pricing Kit', value: 'Rs 5,999', description: 'Rate card for Indian and international automation clients. Proposal template. Niche selection guide. First client outreach sequence.', highlight: false },
  { name: 'n8n Self-Hosting Guide', value: 'Rs 2,999', description: 'Step-by-step setup on Hetzner, DigitalOcean, or Hostinger — from Rs 750/month. Full data privacy, zero per-execution fees at scale.', highlight: false },
  { name: '60-Day Post-Course Mentor Access', value: 'Rs 8,999', description: 'Direct mentor access via cohort channel for 60 days after the final session.', highlight: false },
  { name: 'Live Portfolio Presentation Session', value: 'Rs 5,999', description: 'Week 8 session — each student demos all 3 automations live. Structured critique before showing employers or clients.', highlight: false },
  { name: 'AI Automation Alumni Community', value: 'Rs 2,999', description: 'Permanent access — peer workflow critique, job and project leads, tool updates.', highlight: false },
  { name: '[Early Bird Exclusive] One 30-Minute 1:1 Mentor Workflow Review', value: 'Rs 4,999', description: 'Redeemable in weeks 4 to 6. Use it on a specific build problem, a misbehaving workflow, or freelance packaging questions.', highlight: true },
]

export const aiAcceleratorValueStack = [
  { item: 'AI Automation Accelerator (8 weeks · 56 live hours · 3 deployed automations)', value: 'Rs 1,20,000' },
  { item: 'Workflow Audit Canvas', value: 'Rs 3,999' },
  { item: 'n8n Quick-Start Template Pack', value: 'Rs 4,999' },
  { item: 'AI Automation Freelance Pricing Kit', value: 'Rs 5,999' },
  { item: 'n8n Self-Hosting Guide', value: 'Rs 2,999' },
  { item: '60-Day Post-Course Mentor Access', value: 'Rs 8,999' },
  { item: 'Live Portfolio Presentation Session', value: 'Rs 5,999' },
  { item: 'AI Automation Alumni Community', value: 'Rs 2,999' },
  { item: '[Early Bird] 1:1 Mentor Workflow Review', value: 'Rs 4,999' },
]

export const aiAcceleratorIdealFor = [
  'You are an operations manager, marketing lead, HR professional, founder, or solopreneur spending 10+ hours per week on tasks that follow the same pattern every time.',
  'You are a freelancer or consultant who wants to add AI automation as a chargeable service.',
  'You have never built an automation.',
  'You have basic digital tool fluency — you use SaaS products, you are not afraid of new interfaces.',
]

export const aiAcceleratorNotFor = [
  'You want a course to watch at 1.5x speed.',
  'You want to learn general AI tools at a surface level.',
  'You are not prepared to bring three real problems from your actual work.',
  'You cannot commit to 8 weeks at approximately 9–11 hours per week.',
]

export const aiAcceleratorFaqs = [
  {
    question: 'Do I need to know how to code?',
    answer:
      'No. Every tool is no-code or low-code. The only thing resembling code is JSON — a structured data format n8n uses — and the accelerator teaches you the specific patterns you will encounter. No programming background required at any point.',
  },
  {
    question: 'What does "deployed" mean?',
    answer:
      'The automation is connected to your real tools, receiving real inputs, and producing real outputs without you manually operating it. A demo is not a deployed automation. Your mentor confirms each automation is live before the course advances past that deliverable.',
  },
  {
    question: 'I am not technical. Will I keep up?',
    answer:
      'Yes, if you have basic digital tool fluency — comfortable with SaaS, new interfaces, and settings panels. The pre-course module eliminates all knowledge gaps before session 1. Zapier in week 1 removes technical friction entirely before n8n is introduced in week 2.',
  },
  {
    question: 'What are the three problems I need to bring?',
    answer:
      'Any three recurring tasks that follow the same pattern every time. The more specific the better. You do not need to know how to solve them — just identify them.',
  },
  {
    question: 'Is there a freelance track inside the course?',
    answer:
      'The curriculum and portfolio work applies equally to professionals automating their own job and freelancers packaging automation as a service. The Freelance Pricing Kit bonus is designed specifically for freelancers.',
  },
  {
    question: 'Can I take this course alongside a full-time job?',
    answer:
      'Yes. The commitment is approximately 9–11 hours per week. Two live sessions of 3.5 hours each plus async deliverable work. Students with full-time jobs complete this accelerator every cohort.',
  },
  {
    question: 'What tools do I pay for separately?',
    answer:
      'n8n cloud: free trial then from Rs 1,700/month, or Rs 750/month self-hosted via the included guide. Make: free tier covers the accelerator. Zapier: free tier sufficient for week 1. ManyChat: free tier covers basic flows. Airtable: free tier covers everything. Relevance AI: free tier covers weeks 7 and 8. Claude API: approximately Rs 500–1,500 usage across 8 weeks depending on automation volume.',
  },
  {
    question: 'What about team enrollment?',
    answer:
      'Teams of 5 or more can enroll together in the same cohort with a per-seat discount, a dedicated pre-course alignment session, and a group review at course end. Email hello@designient.com with subject: Team Enrollment — AI Automation Accelerator, or submit a corporate inquiry at /corporates.',
  },
  {
    question: 'What if I miss a session?',
    answer:
      'Sessions are not recorded as substitutes for attendance. One missed session with advance notice and a completed deliverable is handled case by case. Repeated absence makes you ineligible for the guarantee.',
  },
  {
    question: 'What is the refund policy before the course starts?',
    answer:
      'Full course fee is refundable minus a Rs 2,000 processing fee up to 7 days before cohort start. After that, no refunds except under the 50% guarantee conditions. Full terms at /cancellation-refund-policy.',
  },
]

export const aiAcceleratorPricingFeatures = [
  '8 weeks · 56 live hours · 76 total hours',
  '3 deployed production automations with ROI documentation',
  'n8n, Make, ManyChat, Relevance AI, Airtable, Zapier',
  'Open enrollment · 35 students max',
  '50% money-back guarantee — conditions apply',
  'Team enrollment available for 5+ from the same company',
]
