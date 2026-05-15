export interface CurriculumModule {
  id: string
  label: string
  title: string
  topics: string[]
  tools: string[]
  hours: number
}

export interface CourseTool {
  name: string
  description: string
  initial: string
}

export interface CourseBonus {
  icon: string
  title: string
  description: string
}

export interface CourseFAQ {
  id: string
  title: string
  content: string
}

export interface CourseData {
  slug: string
  title: string
  subtitle: string
  description: string
  duration: string
  hours: string
  level: string
  format: string
  certification: string
  placementRate: string
  href: string
  overline: string
  curriculum: CurriculumModule[]
  tools: CourseTool[]
  bonuses: CourseBonus[]
  faqs: CourseFAQ[]
  jsonLdType: string
  canonicalUrl: string
  ogTitle: string
  metaTitle: string
  metaDescription: string
}

export const courses: Record<string, CourseData> = {
  'ui-ux-design-pro': {
    slug: 'ui-ux-design-pro',
    title: 'UI/UX Design Pro',
    subtitle: 'The complete foundation for your design career',
    description:
      'A 3-month intensive that takes you from zero to job-ready. Real projects, practicing mentors, AI-native tools, and Adobe certification — all in a batch capped at 20 students.',
    duration: '3 Months',
    hours: '124 Hours',
    level: 'Beginner – Intermediate',
    format: 'Online + Offline',
    certification: 'Adobe + Designient',
    placementRate: '95%',
    href: '/ui-ux-design-pro',
    overline: '3 MONTHS · 124 HOURS · ADOBE CERTIFIED',
    curriculum: [
      {
        id: 'w1',
        label: 'Weeks 1 – 2',
        title: 'Design Thinking + AI Research',
        topics: [
          'Design thinking methodology and double-diamond process',
          'User research fundamentals — interviews, surveys, observation',
          'AI-assisted research with Perplexity Pro and ChatGPT',
          'Creating user personas and empathy maps',
          'Defining problem statements and opportunity areas',
        ],
        tools: ['Perplexity Pro', 'ChatGPT', 'FigJam'],
        hours: 20,
      },
      {
        id: 'w2',
        label: 'Weeks 3 – 4',
        title: 'Information Architecture + Wireframing',
        topics: [
          'Information architecture principles and sitemaps',
          'Card sorting and tree testing',
          'Low-fidelity wireframing in Figma',
          'Mobile-first layout principles',
          'Wireframe review and iteration',
        ],
        tools: ['Figma', 'FigJam', 'Maze'],
        hours: 22,
      },
      {
        id: 'w3',
        label: 'Weeks 5 – 7',
        title: 'Visual Design + Figma Mastery',
        topics: [
          'Colour theory, typography, and visual hierarchy',
          'Figma components, auto-layout, and variables',
          'Design systems and style guide creation',
          'Figma AI features for rapid iteration',
          'Responsive design across breakpoints',
        ],
        tools: ['Figma', 'Figma AI', 'Adobe Color'],
        hours: 30,
      },
      {
        id: 'w4',
        label: 'Weeks 8 – 9',
        title: 'Prototyping + Usability Testing',
        topics: [
          'High-fidelity prototyping in Figma',
          'Micro-interactions and animation basics',
          'Usability testing plan and script',
          'Moderated and unmoderated testing sessions',
          'Synthesising and presenting findings',
        ],
        tools: ['Figma', 'ProtoPie', 'Maze'],
        hours: 22,
      },
      {
        id: 'w5',
        label: 'Weeks 10 – 11',
        title: 'Portfolio + Adobe Certification',
        topics: [
          '3 portfolio projects fully documented',
          'Case study writing and presentation structure',
          'Adobe XD fundamentals for certification',
          'Adobe Certified Professional exam preparation',
          'Portfolio presentation coaching',
        ],
        tools: ['Figma', 'Adobe XD', 'Notion'],
        hours: 20,
      },
      {
        id: 'w6',
        label: 'Week 12',
        title: 'Career Launch + Placement Support',
        topics: [
          'Resume and LinkedIn profile optimisation',
          'Mock technical interviews with mentors',
          'Salary negotiation basics',
          'Direct introductions to hiring partners',
          'Graduation and certificate ceremony',
        ],
        tools: ['LinkedIn', 'Notion'],
        hours: 10,
      },
    ],
    tools: [
      { name: 'Figma', description: 'Industry-standard UI design & prototyping', initial: 'F' },
      { name: 'Figma AI', description: 'AI-accelerated design workflows', initial: 'AI' },
      { name: 'Adobe XD', description: 'Adobe certification preparation', initial: 'XD' },
      { name: 'Perplexity Pro', description: 'AI-powered UX research', initial: 'P' },
      { name: 'ChatGPT', description: 'Content, copy & ideation', initial: 'G' },
      { name: 'ProtoPie', description: 'Advanced micro-interaction prototyping', initial: 'PP' },
    ],
    bonuses: [
      { icon: 'Gift', title: "Designer's Starter Kit", description: 'Premium fonts, templates, icons, contracts, and free AI tools worth ₹25,000.' },
      { icon: 'Layers', title: 'Drag-and-Drop Asset Library', description: 'Pre-built UI components and style guides for professional-grade results.' },
      { icon: 'Mic', title: 'Interview Training', description: 'Confidence-transforming preparation from communications experts.' },
      { icon: 'Rocket', title: 'Portfolio Accelerator', description: 'Expert guidance + templates to build your portfolio 2× faster.' },
      { icon: 'FileText', title: 'Resume Building', description: 'Personal attention from specialists to craft a distinctive résumé.' },
      { icon: 'Award', title: 'Adobe Exam Prep', description: 'Exclusive materials to ace the Adobe Certified Professional exam.' },
    ],
    faqs: [
      { id: 'p1', title: 'Do I need prior design experience?', content: 'No. The Pro course is designed for complete beginners. You need curiosity and commitment — not prior skills.' },
      { id: 'p2', title: 'What is the batch size?', content: 'Every batch is capped at 20 students. This is a structural constraint we do not compromise on — it is what makes real mentorship possible.' },
      { id: 'p3', title: 'How is the 95% placement rate calculated?', content: 'It tracks Pro course graduates employed in design roles within three months of completion. We share alumni LinkedIn profiles and company names — not just a number.' },
      { id: 'p4', title: 'Is the course available online?', content: 'Yes. We run live online cohorts with the same mentors, same batch cap, and the same curriculum. You miss nothing by attending online.' },
      { id: 'p5', title: 'What certification do I receive?', content: 'You receive an Adobe Certified Professional credential (via the exam we prepare you for) and a Designient certificate of completion.' },
      { id: 'p6', title: 'Are there EMI options?', content: 'Yes — no-cost EMI through multiple payment partners. Contact us and we\'ll set up a plan that works for you.' },
      { id: 'p7', title: 'When does the next batch start?', content: 'Batches run monthly from all three campuses and online. The next batch starts June 2026. Apply now to hold your seat.' },
      { id: 'p8', title: 'What happens after the course ends?', content: 'Lifetime mentorship access — your mentor is still reachable after graduation. Community access and placement support do not expire.' },
    ],
    jsonLdType: 'Course',
    canonicalUrl: 'https://designient.com/ui-ux-design-pro',
    ogTitle: 'UI/UX Design Pro — 3 Months | Designient',
    metaTitle: 'UI/UX Design Pro Course — 3 Months, 124 Hours | Designient',
    metaDescription:
      'Master UI/UX design in 3 months. 124 hours of mentor-led training, AI-integrated curriculum, 95% placement rate, and Adobe certification. Small batches. Real mentors.',
  },

  'ui-ux-design-bootcamp': {
    slug: 'ui-ux-design-bootcamp',
    title: 'UI/UX Design Bootcamp',
    subtitle: 'Fast-track your design career in 30 days',
    description:
      'An intensive 30-day programme for those who want results fast. You will go from zero to Figma-proficient with a portfolio piece and internship-ready confidence.',
    duration: '30 Days',
    hours: '36 Hours',
    level: 'Beginner – Intensive',
    format: 'Online + Offline',
    certification: 'Designient',
    placementRate: '85%',
    href: '/ui-ux-design-bootcamp',
    overline: '30 DAYS · 36 HOURS · INTERNSHIP-READY',
    curriculum: [
      {
        id: 'b1',
        label: 'Days 1 – 5',
        title: 'Design Thinking Fundamentals',
        topics: ['Design thinking overview', 'User research basics', 'Empathy mapping', 'Problem framing'],
        tools: ['FigJam', 'ChatGPT'],
        hours: 8,
      },
      {
        id: 'b2',
        label: 'Days 6 – 12',
        title: 'Figma Foundations',
        topics: ['Figma workspace mastery', 'Wireframing', 'Auto-layout and components', 'Figma AI features'],
        tools: ['Figma', 'Figma AI'],
        hours: 12,
      },
      {
        id: 'b3',
        label: 'Days 13 – 22',
        title: 'Visual Design + Prototyping',
        topics: ['Colour, typography, spacing', 'High-fidelity UI design', 'Clickable prototype', 'Usability basics'],
        tools: ['Figma', 'Maze'],
        hours: 10,
      },
      {
        id: 'b4',
        label: 'Days 23 – 30',
        title: 'Portfolio + Career Prep',
        topics: ['Case study documentation', 'Portfolio presentation', 'Resume and LinkedIn', 'Mock interviews'],
        tools: ['Figma', 'Notion', 'LinkedIn'],
        hours: 6,
      },
    ],
    tools: [
      { name: 'Figma', description: 'UI design & prototyping', initial: 'F' },
      { name: 'Figma AI', description: 'AI-accelerated workflows', initial: 'AI' },
      { name: 'FigJam', description: 'Ideation and whiteboarding', initial: 'FJ' },
      { name: 'ChatGPT', description: 'Content and research assistance', initial: 'G' },
      { name: 'Maze', description: 'Usability testing', initial: 'M' },
      { name: 'Notion', description: 'Case study and portfolio docs', initial: 'N' },
    ],
    bonuses: [
      { icon: 'Gift', title: "Designer's Starter Kit", description: 'Fonts, templates, icons, and free AI tools to hit the ground running.' },
      { icon: 'Layers', title: 'UI Component Library', description: 'Pre-built Figma components for faster, professional-grade designs.' },
      { icon: 'Rocket', title: 'Portfolio Accelerator', description: 'Mentor-reviewed portfolio documentation templates.' },
      { icon: 'FileText', title: 'Resume Template', description: 'A designer-made resume template specialists have vetted.' },
      { icon: 'Mic', title: 'Interview Coaching', description: 'One mock interview session with mentor feedback.' },
      { icon: 'Award', title: 'Designient Certificate', description: 'Official certificate of completion recognised by hiring partners.' },
    ],
    faqs: [
      { id: 'bt1', title: 'Who is this bootcamp for?', content: 'Anyone who wants to break into design quickly — career switchers, fresh graduates, or professionals who want to add design to their skillset.' },
      { id: 'bt2', title: 'Is 30 days enough time to learn design?', content: 'Enough to be internship-ready and build a foundational portfolio piece, yes. For full career-level depth, consider the Pro or Master course next.' },
      { id: 'bt3', title: 'What is the daily time commitment?', content: 'Approximately 90 minutes of live instruction plus project work daily. Weekends have slightly lighter sessions.' },
      { id: 'bt4', title: 'Can I upgrade to the Pro course later?', content: 'Yes. Bootcamp alumni receive a credit towards Pro course enrollment.' },
      { id: 'bt5', title: 'Is there placement support?', content: 'We provide portfolio review, resume support, and job referrals. Placement isn\'t guaranteed at bootcamp level but we actively support every graduate.' },
      { id: 'bt6', title: 'Is the schedule fixed or flexible?', content: 'Sessions run on a fixed daily schedule — consistency is what makes the 30-day format work. Recordings are available for sessions you miss.' },
    ],
    jsonLdType: 'Course',
    canonicalUrl: 'https://designient.com/ui-ux-design-bootcamp',
    ogTitle: 'UI/UX Design Bootcamp — 30 Days | Designient',
    metaTitle: 'UI/UX Design Bootcamp — 30 Days, Fast-Track | Designient',
    metaDescription:
      'Fast-track your UI/UX design career in 30 days. Intensive, mentor-led bootcamp with Figma, AI tools, and a portfolio-ready project. Bangalore, Hyderabad, Pune + Online.',
  },

  'ui-ux-design-master': {
    slug: 'ui-ux-design-master',
    title: 'UI/UX Design Master',
    subtitle: 'Advanced specialisation with diploma certification',
    description:
      'A 6-month deep-dive for designers ready to go from good to exceptional. Design systems, motion, leadership, and a diploma that signals mastery.',
    duration: '6 Months',
    hours: '200+ Hours',
    level: 'Intermediate – Advanced',
    format: 'Online + Offline',
    certification: 'Diploma + Adobe + Designient',
    placementRate: '93%',
    href: '/ui-ux-design-master',
    overline: '6 MONTHS · 200+ HOURS · DIPLOMA CERTIFIED',
    curriculum: [
      { id: 'm1', label: 'Month 1', title: 'Advanced Research + Strategy', topics: ['Advanced user research methods', 'Jobs-to-be-done framework', 'Competitive analysis and benchmarking', 'Strategic design framing', 'Stakeholder communication'], tools: ['Dovetail', 'Perplexity Pro', 'FigJam'], hours: 32 },
      { id: 'm2', label: 'Month 2', title: 'Design Systems Mastery', topics: ['Design tokens and variables', 'Multi-brand design systems', 'Component architecture at scale', 'Handoff and developer collaboration', 'Documentation standards'], tools: ['Figma', 'Tokens Studio', 'Zeroheight'], hours: 36 },
      { id: 'm3', label: 'Month 3', title: 'Advanced Prototyping + Motion', topics: ['ProtoPie advanced interactions', 'After Effects motion basics', 'Lottie animations for production', 'Physics-based interactions', 'Prototype critique and iteration'], tools: ['Figma', 'ProtoPie', 'LottieFiles'], hours: 36 },
      { id: 'm4', label: 'Month 4', title: 'Product Thinking + Metrics', topics: ['Product management fundamentals', 'Defining success metrics and KPIs', 'A/B testing frameworks', 'Analytics-informed design', 'North Star metric workshops'], tools: ['Mixpanel', 'Hotjar', 'Figma'], hours: 34 },
      { id: 'm5', label: 'Month 5', title: 'Leadership + Communication', topics: ['Design critique facilitation', 'Presenting to executives', 'Cross-functional influence', 'Managing design feedback', 'Building a design culture'], tools: ['Notion', 'Figma', 'Pitch'], hours: 30 },
      { id: 'm6', label: 'Month 6', title: 'Capstone + Career Elevation', topics: ['End-to-end capstone project', 'Senior portfolio documentation', 'Diploma examination', 'Senior role interview preparation', 'Graduation and placement sprint'], tools: ['Figma', 'Notion', 'LinkedIn'], hours: 32 },
    ],
    tools: [
      { name: 'Figma', description: 'Advanced component and system design', initial: 'F' },
      { name: 'ProtoPie', description: 'Advanced interactive prototyping', initial: 'PP' },
      { name: 'Tokens Studio', description: 'Design token management at scale', initial: 'TS' },
      { name: 'Dovetail', description: 'Research repository and synthesis', initial: 'D' },
      { name: 'LottieFiles', description: 'Motion design for production', initial: 'LF' },
      { name: 'Mixpanel', description: 'Analytics and product metrics', initial: 'MX' },
    ],
    bonuses: [
      { icon: 'Gift', title: 'Advanced Asset Library', description: 'Complex component libraries, design system starters, and motion presets.' },
      { icon: 'Layers', title: 'Design System Starter Kit', description: 'Production-ready multi-brand design system template in Figma.' },
      { icon: 'Mic', title: 'Executive Presentation Coaching', description: 'Present like a senior designer — with a communications expert.' },
      { icon: 'Rocket', title: 'Senior Portfolio Review', description: 'Case studies reviewed against senior IC and lead role expectations.' },
      { icon: 'FileText', title: 'Diploma Certificate', description: 'Printed diploma — a physical artefact of mastery from a recognised school.' },
      { icon: 'Award', title: 'Adobe Certification Support', description: 'Full exam prep materials and a voucher for the Adobe Certified Professional exam.' },
    ],
    faqs: [
      { id: 'ms1', title: 'What level of experience do I need?', content: 'You should already know Figma basics and have some design experience — either from a previous course or 6+ months of practice.' },
      { id: 'ms2', title: 'How is this different from the Pro course?', content: 'Pro is foundational. Master goes deep into design systems, motion, product thinking, and leadership. It is for designers who want to move into senior or lead roles.' },
      { id: 'ms3', title: 'What is the diploma certification?', content: 'A printed diploma from Designient School of Masterminds. We also support you through the Adobe Certified Professional exam included in this programme.' },
      { id: 'ms4', title: 'Is there a capstone project?', content: 'Yes — a full end-to-end project (brief to final prototype to case study) that becomes the centrepiece of your senior portfolio.' },
      { id: 'ms5', title: 'Can I do this online?', content: 'Yes, fully. Live sessions, mentor access, and project reviews all available online with the same quality as in-person.' },
      { id: 'ms6', title: 'What career outcomes can I expect?', content: 'Senior Designer, Lead Designer, or Principal Designer roles at product companies. Our Master graduates are in senior roles at Amazon, Flipkart, CRED, and global consultancies.' },
    ],
    jsonLdType: 'Course',
    canonicalUrl: 'https://designient.com/ui-ux-design-master',
    ogTitle: 'UI/UX Design Master — 6 Months | Designient',
    metaTitle: 'UI/UX Design Master Course — 6 Months, Advanced | Designient',
    metaDescription:
      'Advanced 6-month UI/UX design programme. Design systems, motion, product thinking, and diploma certification. For designers ready to go senior. Designient School of Masterminds.',
  },

  'prompt-engineering-mastery': {
    slug: 'prompt-engineering-mastery',
    title: 'AI Prompt Engineering',
    subtitle: 'Master prompt engineering for design workflows',
    description:
      'Learn to use AI tools as a creative collaborator, not a replacement for thinking. A flexible, self-paced programme for designers who want to stay ahead of the curve.',
    duration: 'Flexible',
    hours: '32 Hours',
    level: 'All Levels',
    format: 'Online',
    certification: 'Designient',
    placementRate: '—',
    href: '/prompt-engineering-mastery',
    overline: 'FLEXIBLE · 32 HOURS · ONLINE',
    curriculum: [
      { id: 'ai1', label: 'Module 1', title: 'AI Foundations for Designers', topics: ['How large language models work', 'Image generation model basics', 'Choosing the right AI tool for the job', 'AI ethics and attribution for creatives'], tools: ['ChatGPT', 'Claude'], hours: 6 },
      { id: 'ai2', label: 'Module 2', title: 'Text Prompt Mastery', topics: ['Prompt structure and anatomy', 'System prompts and personas', 'Chain-of-thought prompting', 'Using AI for UX copy and research'], tools: ['ChatGPT', 'Claude', 'Perplexity'], hours: 8 },
      { id: 'ai3', label: 'Module 3', title: 'Visual Generation + Ideation', topics: ['Midjourney and Dall-E prompt techniques', 'Generating moodboards and style references', 'AI-assisted design exploration', 'Integrating AI images into real projects'], tools: ['Midjourney', 'DALL-E', 'Adobe Firefly'], hours: 10 },
      { id: 'ai4', label: 'Module 4', title: 'AI in Design Workflows', topics: ['Figma AI for component generation', 'AI-assisted accessibility review', 'Automating repetitive design tasks', 'Building an AI-first design process'], tools: ['Figma AI', 'Galileo AI', 'Uizard'], hours: 8 },
    ],
    tools: [
      { name: 'ChatGPT', description: 'Text generation and research', initial: 'G' },
      { name: 'Claude', description: 'Long-form reasoning and copy', initial: 'C' },
      { name: 'Midjourney', description: 'High-quality image generation', initial: 'MJ' },
      { name: 'Figma AI', description: 'AI inside your design workflow', initial: 'F' },
      { name: 'Adobe Firefly', description: 'Commercially safe image generation', initial: 'AF' },
      { name: 'Perplexity', description: 'AI-powered UX research', initial: 'P' },
    ],
    bonuses: [
      { icon: 'Gift', title: 'Prompt Library (200+ Prompts)', description: 'A curated library of tested prompts for every stage of the design process.' },
      { icon: 'Layers', title: 'AI Workflow Templates', description: 'Notion and FigJam templates for AI-first research and ideation sessions.' },
      { icon: 'Rocket', title: 'Figma AI Masterclass', description: 'A bonus deep-dive session on Figma AI features with a Designient mentor.' },
      { icon: 'FileText', title: 'AI Tools Comparison Guide', description: 'An always-updated guide to the best AI tools for design — maintained by our mentors.' },
      { icon: 'Mic', title: 'Live Q&A Sessions', description: 'Monthly live sessions with mentors covering the latest AI releases and workflows.' },
      { icon: 'Award', title: 'Designient Certificate', description: 'Certificate of completion in AI Prompt Engineering for Designers.' },
    ],
    faqs: [
      { id: 'ai1', title: 'Do I need to be a designer to take this course?', content: 'No — but the curriculum is designed with designers in mind. It is also useful for product managers, marketers, and anyone who works with visual content.' },
      { id: 'ai2', title: 'How long does it take to complete?', content: 'The programme is 32 hours of content. At your own pace, most students complete it in 4 – 6 weeks. There is no expiry on your access.' },
      { id: 'ai3', title: 'Will this course stay up to date as AI tools change?', content: 'Yes. We update the curriculum when major tools change. The AI landscape moves fast and so do we.' },
      { id: 'ai4', title: 'Is there live interaction with mentors?', content: 'Monthly live Q&A sessions are included. For more hands-on mentorship, consider combining this with the Pro or Master course.' },
      { id: 'ai5', title: 'What AI tools do I need to subscribe to?', content: 'Most examples use free tiers or trial plans. We recommend a ChatGPT Plus subscription (~$20/month) and a Midjourney basic plan for the visual module.' },
    ],
    jsonLdType: 'Course',
    canonicalUrl: 'https://designient.com/prompt-engineering-mastery',
    ogTitle: 'AI Prompt Engineering for Designers | Designient',
    metaTitle: 'AI Prompt Engineering Mastery — Design Workflows | Designient',
    metaDescription:
      'Master AI tools for design workflows. ChatGPT, Midjourney, Figma AI, and more. A flexible online programme for designers who want to stay ahead. Designient School of Masterminds.',
  },
}
