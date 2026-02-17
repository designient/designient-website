import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { QuickApplyProvider } from '../../components/course/QuickApplyContext'
import { CourseHero } from '../../components/course/CourseHero'
import { FloatingApplyButton } from '../../components/course/FloatingApplyButton'
import { CourseCurriculum } from '../../components/course/CourseCurriculum'
import { CourseWhoShouldTake } from '../../components/course/CourseWhoShouldTake'
import { CoursePricing } from '../../components/course/CoursePricing'
import { CourseFAQ } from '../../components/course/CourseFAQ'
import { CourseCTA } from '../../components/course/CourseCTA'
import { CourseStructuredData } from '../../components/course/CourseStructuredData'
import { OutcomeTransformationSection } from '../../components/course/OutcomeTransformationSection'
import { MidPageCTA } from '../../components/course/MidPageCTA'
import { PaymentOptions } from '../../components/course/PaymentOptions'
import { CourseApplicationForm } from '../../components/course/CourseApplicationForm'
import { TrustBadges } from '../../components/course/TrustBadges'
import { ToolsCoveredSection } from '../../components/course/ToolsCoveredSection'
import { QuickOfferHighlights } from '../../components/course/QuickOfferHighlights'
import { InternshipReadinessScorecard } from '../../components/course/InternshipReadinessScorecard'
import { BonusGuaranteeSection } from '../../components/course/BonusGuaranteeSection'
import { StructuredData } from '../../components/StructuredData'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UI/UX Design Bootcamp - 30 Days Intensive | Designient',
  description: 'Fast-track your UI/UX design career in 30 days. Intensive daily bootcamp with 36 hours of training, real-world projects, and 85% placement rate. Perfect for career switchers.',
  keywords: ['UI UX Design Bootcamp 2026', 'Internship Ready UX Design Course', 'AI UX Bootcamp with Portfolio', 'UX portfolio case study', 'production-ready UI design', 'internship-ready UX design', 'AI assisted UX workflow', 'UX interview prep', 'UI UX bootcamp syllabus 2026', 'UX design mock interview', 'AI tools for UX design 2026', 'UX internship readiness'],
  openGraph: {
    title: 'UI/UX Design Bootcamp - 30 Days Intensive | Designient',
    description: 'Fast-track your design career in 30 days. Intensive training, real projects, 85% placement rate.',
    url: 'https://designient.com/ui-ux-design-bootcamp',
    images: [
      {
        url: '/favicon-designient.png',
        width: 192,
        height: 192,
        alt: 'UI/UX Design Bootcamp - Designient',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UI/UX Design Bootcamp - 30 Days Intensive | Designient',
    description: 'Fast-track your design career in 30 days. Intensive training, real projects, 85% placement rate.',
    images: ['/favicon-designient.png'],
  },
  alternates: {
    canonical: 'https://designient.com/ui-ux-design-bootcamp',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const courseData = {
  title: 'UI/UX Design Bootcamp',
  subtitle: 'Premium internship-ready program where you build a production-ready AI-powered case study in 30 Days. Rated for Internship Readiness, Recruiter Confidence, and Portfolio Strength.',
  heroTaglines: [
    'Premium Internship-Prep Intensive',
    'Build a Production-Ready AI-Powered Case Study in 30 Days',
    'Rated for Internship Readiness, Recruiter Confidence, and Portfolio Strength'
  ],
  duration: '30 Days',
  hours: '36 Hours',
  format: 'Intensive',
  level: 'Fast Track',
  rating: '4.7',
  students: '100+',
  badge: 'Intensive Program',
  description: 'Our UI/UX Design Bootcamp is a 30-day intensive program designed for those who want to quickly upskill or switch careers. With daily sessions and hands-on projects, you\'ll learn the essentials of UI/UX design and build a portfolio in just one month. Perfect for working professionals and career switchers who need results fast.',
  keyFeatures: [
    '30-day intensive program',
    'Daily live sessions',
    'Real-world portfolio projects',
    'Quick career transition',
    '85% placement assistance',
    'Industry mentorship',
    'Job-ready skills in 30 days',
    'Flexible payment options'
  ],
  learningOutcomes: [
    'Conduct real user interviews, research synthesis, and problem framing for real products.',
    'Build one strong AI-integrated UX case study that recruiters love.',
    'Design a production-ready UI system using Figma with workflow best practices.',
    'Apply AI responsibly for research and workflow acceleration.',
    'Present work professionally, handle critique, and communicate design decisions.',
    'Receive internship-readiness evaluation and certification.',
  ],
  careerPaths: [
    'Junior UI/UX Designer',
    'Product Designer',
    'Freelance Designer',
    'Design Intern',
    'Startup Designer'
  ],
  modules: [
    {
      title: 'Week 1: Foundations',
      description: 'Build core design skills and tool proficiency',
      duration: '1 week',
      topics: [
        'Design basics and principles',
        'Figma essentials',
        'Quick prototyping',
        'Color and typography',
        'Layout fundamentals',
        'Design tools overview'
      ]
    },
    {
      title: 'Week 2: Hands-on Projects & User Research',
      description: 'Apply learning through real-world projects',
      duration: '1 week',
      topics: [
        'Real-world project kickoff',
        'User research basics and methods',
        'Wireframing and prototyping',
        'Design critique sessions',
        'Portfolio building guidance'
      ]
    },
    {
      title: 'Week 3: Advanced Projects & Design Iteration',
      description: 'Continue project work and refine designs',
      duration: '1 week',
      topics: [
        'Advanced project work',
        'Design iteration and refinement',
        'Interactive prototyping',
        'Portfolio project completion'
      ]
    },
    {
      title: 'Week 4: Career Prep',
      description: 'Prepare for job interviews and portfolio presentation',
      duration: '1 week',
      topics: [
        'Resume building',
        'Interview preparation',
        'Job search strategy',
        'Portfolio presentation',
        'Networking tips',
        'Salary negotiation'
      ]
    }
  ],
  whoShouldTake: 'Ideal for fresh graduates, international students, and beginners serious about internship prep. This bootcamp focuses on building a strong UX portfolio and internship readiness.',
  idealFor: [
    'Fresh graduates seeking internship opportunities',
    'International students preparing for US and India markets',
    'Beginners serious about internship prep',
    'Those wanting a strong UX portfolio case study',
    'Students targeting recruiter-ready portfolios',
    'Anyone needing production-ready UI design skills'
  ],
  notFor: [
    'People seeking only tool basics without portfolio focus',
    'Those not committed to internship preparation',
    'Experienced designers needing advanced skills'
  ],
  locationRelevance: 'Online sessions aligned with US and India market expectations. Recruiter patterns and standards for US internships.',
  batchDates: null,
  upcomingBatch: null,
  batchFull: true,
  tools: [
    {
      name: 'Figma',
      description: 'Design systems, components, and prototyping. Master production-ready UI design workflows.',
      category: 'Design',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'
    },
    {
      name: 'Figma AI',
      description: 'Workflow acceleration with AI-powered design assistance for faster iteration.',
      category: 'AI Tools',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'
    },
    {
      name: 'Perplexity Pro',
      description: 'Research synthesis and AI-assisted user research workflows.',
      category: 'AI Tools',
      logo: 'https://www.perplexity.ai/favicon.ico'
    }
  ],
  outcomeTransformation: [
    'Conduct real user interviews, research synthesis, and problem framing for real products.',
    'Build one strong AI-integrated UX case study that recruiters love.',
    'Design a production-ready UI system using Figma with workflow best practices.',
    'Apply AI responsibly for research and workflow acceleration.',
    'Present work professionally, handle critique, and communicate design decisions.',
    'Receive internship-readiness evaluation and certification.',
  ],
  weekWiseCurriculum: [
    {
      month: 1,
      title: '30-Day Intensive Bootcamp',
      totalHours: 36,
      weeks: [
        {
          week: 1,
          title: 'WEEK 1 – Product & AI Research',
          totalHours: 10,
          topics: [
            { topic: 'Product thinking foundation', hours: 2 },
            { topic: 'AI research with Perplexity Pro', hours: 2 },
            { topic: 'Real user interviews', hours: 2 },
            { topic: 'Synthesis and mapping', hours: 2 },
            { topic: 'Scope & PRD lite', hours: 2 }
          ]
        },
        {
          week: 2,
          title: 'WEEK 2 – UX Architecture & Wireframes',
          totalHours: 10,
          topics: [
            { topic: 'Task flows & journeys', hours: 2 },
            { topic: 'Low-fidelity wireframes', hours: 2 },
            { topic: 'AI wireframe co-pilot', hours: 2 },
            { topic: 'Usability testing', hours: 2 },
            { topic: 'Design system basics', hours: 2 }
          ]
        },
        {
          week: 3,
          title: 'WEEK 3 – Production UI & Prototyping',
          totalHours: 8,
          topics: [
            { topic: 'Figma components & variants', hours: 2 },
            { topic: 'Responsive logic', hours: 1.5 },
            { topic: 'Accessibility basics', hours: 1.5 },
            { topic: 'High-fidelity build', hours: 2 },
            { topic: 'Interactive prototype', hours: 1 }
          ]
        },
        {
          week: 4,
          title: 'WEEK 4 – Case Study & Career Prep',
          totalHours: 8,
          topics: [
            { topic: 'Case study engineering', hours: 2 },
            { topic: 'UX storytelling', hours: 1.5 },
            { topic: 'AI workflows in product teams', hours: 1.5 },
            { topic: 'Interview & resume strategy', hours: 2 },
            { topic: 'Final presentations', hours: 1 }
          ]
        }
      ]
    }
  ],
  pricingFeatures: [
    '30-day intensive curriculum',
    '36 hours of live training',
    'Daily mentorship',
    'Portfolio projects',
    'Certificate of completion'
  ],
  premiumValueStack: [
    '36 hours of live intensive, mentor-led sessions (daily Mon–Fri)',
    'Real user research and AI-assisted workflow integration',
    'Recruiter-targeted case study and scorecard',
    '6-month Alumni Growth Circle',
    'Targeted interview prep and mock interviews',
    'Early Bird 1:1 Career Strategy Session (first 5 students)',
    'LinkedIn recommendations (top performers)',
    'Founder Portfolio Review (top 3)',
    'Hiring referral consideration'
  ],
  internshipReadinessLevels: [
    {
      level: 'Level 1 – Developing',
      description: 'Building foundational skills and understanding UX principles.'
    },
    {
      level: 'Level 2 – Internship Ready',
      description: 'Portfolio demonstrates real user research, production-ready UI, and strong case study presentation.'
    },
    {
      level: 'Level 3 – Standout Junior',
      description: 'Exceptional case study with AI integration, recruiter-targeted presentation, and interview-ready communication.'
    }
  ],
  bonuses: [
    'Career strategy call (fast action)',
    'Mock interview sessions',
    'Alumni Growth Circle access',
    'Portfolio Improvement Guarantee: Complete assignments and mentoring feedback. If not Internship Ready, receive a complimentary 1:1 portfolio improvement session.'
  ],
  faqs: [
    {
      question: 'What makes this bootcamp different from typical UI/UX bootcamps?',
      answer: 'This bootcamp focuses specifically on internship readiness with recruiter-targeted case studies, AI-integrated workflows, and production-ready UI systems. Unlike generic bootcamps, we emphasize real user research, portfolio strength, and interview preparation aligned with US and India market standards.'
    },
    {
      question: 'How does AI integrate in this course?',
      answer: 'AI is used responsibly for research acceleration (Perplexity Pro), workflow assistance (Figma AI), and wireframe co-piloting. You\'ll learn to apply AI tools in real product team workflows while maintaining human-centered design principles.'
    },
    {
      question: 'What is Internship Readiness Scorecard?',
      answer: 'The Internship Readiness Scorecard evaluates your portfolio across three levels: Developing, Internship Ready, and Standout Junior. It assesses your case study quality, production-ready UI skills, research depth, and presentation ability—all aligned with recruiter expectations.'
    },
    {
      question: 'Do I get portfolio feedback?',
      answer: 'Yes, you receive continuous portfolio feedback throughout the bootcamp. Top performers get Founder Portfolio Review, and all students receive mentoring feedback. Our Portfolio Improvement Guarantee ensures you\'ll be Internship Ready or receive complimentary 1:1 improvement sessions.'
    },
    {
      question: 'Can I apply from outside India?',
      answer: 'Yes, this bootcamp is designed for both US and India markets. Online sessions are aligned with both market expectations, and we cover recruiter patterns and standards for US internships specifically.'
    },
    {
      question: 'What mock interviews are included?',
      answer: 'The bootcamp includes targeted interview prep with mock interviews covering UX case study presentation, design decision communication, portfolio walkthrough, and behavioral questions. Top performers may receive additional mock interview sessions.'
    },
    {
      question: 'Is this bootcamp suitable for complete beginners?',
      answer: 'Yes, the bootcamp is designed for beginners serious about internship prep. However, it\'s intensive and requires daily commitment. If you prefer a more relaxed pace, consider our 3-month Pro course.'
    },
    {
      question: 'What is the daily time commitment?',
      answer: 'You\'ll need to commit 2-3 hours daily for live sessions (Mon–Fri), plus additional time for assignments and projects. Total daily commitment is approximately 4-5 hours.'
    },
    {
      question: 'Will I have a portfolio after 30 days?',
      answer: 'Yes, you\'ll complete one strong AI-integrated UX case study that recruiters love, plus a production-ready UI system. This portfolio piece demonstrates real user research, problem framing, and professional presentation.'
    },
    {
      question: 'What if I can\'t attend all sessions?',
      answer: 'All sessions are recorded, so you can catch up. However, we strongly recommend attending live sessions for the best learning experience, real-time feedback, and interaction with instructors.'
    }
  ]
}

export default function UIUXDesignBootcampPage() {
  // Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://designient.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Courses',
        item: 'https://designient.com/courses'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'UI/UX Design Bootcamp',
        item: 'https://designient.com/ui-ux-design-bootcamp'
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <StructuredData data={breadcrumbSchema} />
      <CourseStructuredData
        courseSlug="ui-ux-design-bootcamp"
        courseName={courseData.title}
        description={courseData.description}
        courseCode="UIUX-BOOTCAMP-2026"
        educationalLevel="Beginner"
        timeRequired="P30D"
        coursePrerequisites="No prior design experience required. Ideal for fresh graduates and beginners serious about internship prep."
        teaches={[
          'Product thinking foundation',
          'AI research with Perplexity Pro',
          'Real user interviews',
          'Production-ready UI systems',
          'Figma design systems and components',
          'AI-integrated UX workflows',
          'Case study engineering',
          'UX storytelling',
          'Interview and resume strategy',
          'Portfolio presentation'
        ]}
        ratingValue="4.7"
        reviewCount="100"
        duration="P30D"
        totalTime="PT36H"
        url="https://designient.com/ui-ux-design-bootcamp"
        learningObjectives={courseData.learningOutcomes}
        outcome="Internship-ready UX designer with production-ready portfolio case study"
        audience={['Fresh graduates', 'International students', 'Beginners serious about internship prep']}
        educationalCredentialAwarded="Internship Readiness Certificate"
      />
      <Header />
      <QuickApplyProvider>
        <main id="main-content" role="main">
          <CourseHero
            title={courseData.title}
            subtitle={courseData.subtitle}
            duration={courseData.duration}
            hours={courseData.hours}
            format={courseData.format}
            level={courseData.level}
            rating={courseData.rating}
            students={courseData.students}
            badge={courseData.badge}
            upcomingBatch={courseData.upcomingBatch}
            batchFull={courseData.batchFull}
            courseSlug="ui-ux-design-bootcamp"
            courseName={courseData.title}
          />
          <FloatingApplyButton courseSlug="ui-ux-design-bootcamp" courseName={courseData.title} />

          {/* What You'll Become */}
          <OutcomeTransformationSection
            outcomes={courseData.outcomeTransformation}
            duration="30 days"
            description="In 30 days you will have internship-ready skills and a recruiter-targeted portfolio."
          />

          {/* Premium Value Stack */}
          <QuickOfferHighlights items={courseData.premiumValueStack} />

          {/* Internship Readiness Scorecard */}
          <InternshipReadinessScorecard levels={courseData.internshipReadinessLevels} />

          {/* Curriculum */}
          <CourseCurriculum
            weekWiseCurriculum={courseData.weekWiseCurriculum}
            totalHours={courseData.hours}
          />

          {/* Tools */}
          <ToolsCoveredSection
            tools={courseData.tools}
            title="Tools You'll Master"
            description="Master these AI tools for UX design in 2026: Figma (design systems, components, prototyping), Figma AI (workflow acceleration), and Perplexity Pro (research synthesis)."
          />

          {/* Who Should Take */}
          <CourseWhoShouldTake
            description={courseData.whoShouldTake}
            idealFor={courseData.idealFor}
            notFor={courseData.notFor}
            locationRelevance={courseData.locationRelevance}
          />

          {/* Bonuses & Guarantee */}
          <BonusGuaranteeSection bonuses={courseData.bonuses} />

          {/* Mid-page CTA - before pricing */}
          <MidPageCTA courseSlug="ui-ux-design-bootcamp" courseName={courseData.title} />

          <CoursePricing
            courseSlug="ui-ux-design-bootcamp"
            features={courseData.pricingFeatures}
            duration={courseData.duration}
            batchDates={courseData.batchDates}
            batchFull={courseData.batchFull}
          />
          <PaymentOptions
            courseSlug="ui-ux-design-bootcamp"
            courseType="short"
          />
          <TrustBadges />
          
          {/* Application Form - before FAQ */}
          <CourseApplicationForm courseSlug="ui-ux-design-bootcamp" courseName={courseData.title} />
          
          <CourseFAQ faqs={courseData.faqs} />
          <CourseCTA
            courseName={courseData.title}
            courseSlug="ui-ux-design-bootcamp"
            ctaText="Apply Now — Limited 15 Seats"
            secondaryText="Application reviewed within 24 hours. Curated small cohort for personalized mentorship. Limited seats per batch—admissions close once filled."
          />
        </main>
        <Footer />
      </QuickApplyProvider>
    </div>
  )
}
