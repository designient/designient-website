import type { CityKey } from '../lib/batchScheduleUtils'

export type CityPageKey = CityKey

export type CityWhyDesignientItem = {
  icon: 'users' | 'target' | 'briefcase' | 'trendingUp' | 'heart' | 'calendar'
  text: string
}

export type CityCourseOverview = {
  beforeLink: string
  linkText: string
  afterLink: string
}

export type CityPageContentConfig = {
  name: string
  path: string
  enrollHref: string
  breadcrumbLabel: string
  heroTitle: string
  heroSubtitle: string
  introHeading: string
  introParagraphs: [string, string]
  whyLearnTitle: string
  whyLearnParagraph: string
  courseOverview: CityCourseOverview
  whoForItems: string[]
  whoForColumns: 2 | 3
  whyDesignientItems: CityWhyDesignientItem[]
  placementParagraph: string
  faqs: { question: string; answer: string }[]
  ctaText: string
  ctaSecondary: string
}

export const cityPageConfig: Record<CityPageKey, CityPageContentConfig> = {
  bangalore: {
    name: 'Bangalore',
    path: '/ui-ux-design-course-in-bangalore',
    enrollHref: '/ui-ux-design-pro?city=bangalore#enrollment',
    breadcrumbLabel: 'UI/UX Design Course in Bangalore',
    heroTitle: 'UI/UX Design Course in Bangalore – Designient School of Masterminds',
    heroSubtitle:
      'Master UI/UX design with hands-on training, mentor-led learning, and placement support in Bangalore.',
    introHeading: 'Bengaluru',
    introParagraphs: [
      'Learners from Bengaluru connect with Designient for counselling on the UI/UX Design Pro programme.',
      "If you're a working professional or student based in Bengaluru, our team can guide you on the learning path and next cohort intake.",
    ],
    whyLearnTitle: 'Why Learn UI/UX Design in Bangalore',
    whyLearnParagraph:
      "Bangalore is India's leading tech and startup hub. From SaaS and fintech to AI-driven products, companies here rely heavily on strong UI/UX design. Learning UI/UX in Bangalore gives you exposure to real product thinking, modern design workflows, and strong career opportunities.",
    courseOverview: {
      beforeLink: 'This city page is powered by our flagship ',
      linkText: 'UI/UX Design Pro course',
      afterLink:
        ' - a 10-week intensive programme designed to take you from fundamentals to portfolio-ready. The course focuses on user research, wireframing, UI design, prototyping, and usability testing through real-world projects.',
    },
    whoForItems: [
      'Beginners starting a career in UI/UX design',
      'Career switchers from engineering, marketing, or non-design backgrounds',
      'Working professionals upgrading their design skills',
      'Creative thinkers looking for structured learning',
    ],
    whoForColumns: 2,
    whyDesignientItems: [
      { icon: 'users', text: 'Mentors with real product and UX experience' },
      { icon: 'target', text: 'Project-based learning aligned with industry needs' },
      { icon: 'briefcase', text: 'Strong focus on portfolio and interview readiness' },
      { icon: 'trendingUp', text: 'Career and placement guidance included' },
    ],
    placementParagraph:
      "Learners receive resume support, portfolio reviews, mock interviews, and guidance on applying to UI/UX roles in Bangalore's startup and product ecosystem.",
    faqs: [
      {
        question: 'Is the UI/UX Design course available in Bangalore?',
        answer: 'Yes. Designient offers the UI/UX Design Pro course for learners in Bangalore.',
      },
      {
        question: 'Are in-person batches currently open in Bangalore?',
        answer: 'The current Bangalore batch is full. Apply for the Pro course to join the waitlist for the next intake.',
      },
      {
        question: 'Is this course suitable for working professionals in Bangalore?',
        answer: 'Yes. The 10-week Pro programme is designed for working professionals and career switchers with live mentor-led sessions.',
      },
    ],
    ctaText: 'Ready to start your UI/UX career in Bangalore?',
    ctaSecondary: 'Apply now for the next Pro cohort or speak with our counsellors.',
  },
  hyderabad: {
    name: 'Hyderabad',
    path: '/ui-ux-design-course-in-hyderabad',
    enrollHref: '/ui-ux-design-pro?city=hyderabad#enrollment',
    breadcrumbLabel: 'UI/UX Design Course in Hyderabad',
    heroTitle: 'UI/UX Design Course in Hyderabad – Designient School of Masterminds',
    heroSubtitle:
      'Learn UI/UX design with industry-focused training, real projects, and career support in Hyderabad.',
    introHeading: 'Hyderabad',
    introParagraphs: [
      "Hyderabad is home to Designient's core mentoring team.",
      'Learners here can connect with us for detailed counselling, cohort intake, and career guidance.',
    ],
    whyLearnTitle: 'Why Learn UI/UX Design in Hyderabad',
    whyLearnParagraph:
      'Hyderabad has emerged as a major technology and product hub, with growing demand for UI/UX designers across startups, IT services, and global enterprises. Strong UX skills are increasingly valued as companies build user-first digital products.',
    courseOverview: {
      beforeLink: "This course page is powered by Designient's ",
      linkText: 'UI/UX Design Pro program',
      afterLink:
        ' - a 10-week hands-on programme focused on practical skills, design thinking, and portfolio development.',
    },
    whoForItems: [
      'Beginners exploring UI/UX design',
      'Career switchers from non-design fields',
      'Working professionals looking to grow in UX and product design',
    ],
    whoForColumns: 3,
    whyDesignientItems: [
      { icon: 'users', text: 'Mentor-led, hands-on learning' },
      { icon: 'target', text: 'Real-world projects and feedback' },
      { icon: 'briefcase', text: 'Career and placement readiness focus' },
      { icon: 'heart', text: 'Supportive design learning community' },
    ],
    placementParagraph:
      'Learners receive portfolio guidance, interview preparation, resume support, and career mentoring to apply confidently for UI/UX roles.',
    faqs: [
      {
        question: 'Does Designient offer UI/UX courses in Hyderabad?',
        answer: 'Yes. The UI/UX Design Pro course is available for learners in Hyderabad.',
      },
      {
        question: 'Are in-person batches currently open in Hyderabad?',
        answer: 'The current Hyderabad batch is full. Apply for the Pro course to join the waitlist for the next intake.',
      },
      {
        question: 'Is placement support provided for Hyderabad students?',
        answer: 'Yes. Placement and career support is included for all learners.',
      },
    ],
    ctaText: 'Start your UI/UX journey in Hyderabad.',
    ctaSecondary: 'Apply now or talk to our team.',
  },
  pune: {
    name: 'Pune',
    path: '/ui-ux-design-course-in-pune',
    enrollHref: '/ui-ux-design-pro?city=pune#enrollment',
    breadcrumbLabel: 'UI/UX Design Course in Pune',
    heroTitle: 'UI/UX Design Course in Pune | Designient',
    heroSubtitle:
      'A UI/UX design programme in Pune, built for working professionals and career switchers.',
    introHeading: 'Pune',
    introParagraphs: [
      'We support learners from Pune through the UI/UX Design Pro programme.',
      "If you're based in Pune and balancing work with learning, our team can help you plan accordingly.",
    ],
    whyLearnTitle: 'Why Learn UI/UX Design in Pune',
    whyLearnParagraph:
      'Pune has a strong IT, services, and startup ecosystem. As companies focus more on usability and product experience, UI/UX designers are in growing demand across industries.',
    courseOverview: {
      beforeLink: "This program is part of Designient's ",
      linkText: 'UI/UX Design Pro course',
      afterLink:
        ' - a 10-week intensive curriculum covering UX research, UI design, prototyping, and usability testing through hands-on projects.',
    },
    whoForItems: [
      'Working professionals in Pune',
      'Career switchers transitioning into UI/UX',
      'Designers and developers upgrading UX skills',
    ],
    whoForColumns: 3,
    whyDesignientItems: [
      { icon: 'calendar', text: 'Structured 10-week learning format' },
      { icon: 'users', text: 'Mentor-led sessions with real feedback' },
      { icon: 'target', text: 'Portfolio-focused outcomes' },
      { icon: 'briefcase', text: 'Career and placement guidance included' },
    ],
    placementParagraph:
      'Learners receive portfolio reviews, interview preparation, resume support, and career mentoring to apply for UI/UX roles confidently.',
    faqs: [
      {
        question: 'Is the UI/UX Design course available in Pune?',
        answer: 'Yes. The UI/UX Design Pro course is available for learners in Pune.',
      },
      {
        question: 'Are in-person batches currently open in Pune?',
        answer: 'The current Pune batch is full. Apply for the Pro course to join the waitlist for the next intake.',
      },
      {
        question: 'Is this suitable for working professionals in Pune?',
        answer: 'Yes. The 10-week Pro programme is designed for professionals balancing work and learning.',
      },
    ],
    ctaText: 'Ready to learn UI/UX design in Pune?',
    ctaSecondary: 'Apply now for the next Pro cohort.',
  },
}

export function getSiblingCities(current: CityPageKey) {
  return (Object.keys(cityPageConfig) as CityPageKey[])
    .filter((key) => key !== current)
    .map((key) => cityPageConfig[key])
}
