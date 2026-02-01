import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { QuickApplyProvider } from '../../components/course/QuickApplyContext'
import { CourseHero } from '../../components/course/CourseHero'
import { FloatingApplyButton } from '../../components/course/FloatingApplyButton'
import { CourseOverview } from '../../components/course/CourseOverview'
import { CourseCurriculum } from '../../components/course/CourseCurriculum'
import { CourseWhoShouldTake } from '../../components/course/CourseWhoShouldTake'
import { CoursePricing } from '../../components/course/CoursePricing'
import { CourseFAQ } from '../../components/course/CourseFAQ'
import { CourseCTA } from '../../components/course/CourseCTA'
import { CourseStructuredData } from '../../components/course/CourseStructuredData'
import { OutcomeTransformationSection } from '../../components/course/OutcomeTransformationSection'
import { ExperienceAuthoritySection } from '../../components/course/ExperienceAuthoritySection'
import { AIInsideUIUXSection } from '../../components/course/AIInsideUIUXSection'
import { MidPageCTA } from '../../components/course/MidPageCTA'
import { PaymentOptions } from '../../components/course/PaymentOptions'
import { CourseApplicationForm } from '../../components/course/CourseApplicationForm'
import { TrustBadges } from '../../components/course/TrustBadges'
import { ToolsCoveredSection } from '../../components/course/ToolsCoveredSection'
import { StructuredData } from '../../components/StructuredData'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UI/UX Design Bootcamp - 30 Days Intensive | Designient',
  description: 'Fast-track your UI/UX design career in 30 days. Intensive daily bootcamp with 36 hours of training, real-world projects, and 85% placement rate. Perfect for career switchers.',
  keywords: ['UI/UX bootcamp', 'intensive design course', '30 day design course', 'fast track UX', 'design bootcamp Bangalore', 'career switch design'],
  openGraph: {
    title: 'UI/UX Design Bootcamp - 30 Days Intensive | Designient',
    description: 'Fast-track your design career in 30 days. Intensive training, real projects, 85% placement rate.',
    url: 'https://designient.com/ui-ux-design-bootcamp',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'UI/UX Design Bootcamp - Designient',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UI/UX Design Bootcamp - 30 Days Intensive | Designient',
    description: 'Fast-track your design career in 30 days. Intensive training, real projects, 85% placement rate.',
    images: ['/og-image.webp'],
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
  subtitle: 'Fast-track your learning with our intensive daily bootcamp designed for beginners and career switchers.',
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
    'Master Figma basics',
    'Understand design fundamentals',
    'Create mobile and web interfaces',
    'Build a professional portfolio',
    'Learn design thinking',
    'Understand user research basics',
    'Create interactive prototypes',
    'Prepare for design interviews'
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
  whoShouldTake: 'Ideal for professionals looking to quickly upskill or switch careers. Intensive daily sessions designed for fast learning.',
  idealFor: [
    'Working professionals seeking career change',
    'Recent graduates entering design field',
    'Entrepreneurs building their products',
    'Marketing professionals adding design skills',
    'Developers wanting design knowledge',
    'Anyone needing quick results'
  ],
  notFor: [
    'Those seeking deep, comprehensive learning',
    'People unable to commit daily time',
    'Experienced designers needing advanced skills'
  ],
  batchDates: null,
  upcomingBatch: null,
  batchFull: true,
  tools: [
    {
      name: 'Figma',
      description: 'Master the essentials of Figma for UI design, prototyping, and collaboration. Learn core features needed for fast-paced design work.',
      category: 'Design',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'
    },
    {
      name: 'Design Thinking Tools',
      description: 'Learn to use basic design thinking methodologies and tools for rapid ideation and problem-solving.',
      category: 'Research',
      logo: 'https://cdn.worldvectorlogo.com/logos/miro-3.svg'
    },
    {
      name: 'Prototyping Tools',
      description: 'Create interactive prototypes to test and validate your design ideas quickly.',
      category: 'Prototyping',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'
    }
  ],
  outcomeTransformation: [
    'Apply UX fundamentals confidently to solve real design problems',
    'Build a starter portfolio with 2-3 professional projects in 30 days',
    'Master essential design tools and workflows for quick career entry',
    'Understand core user research and design thinking principles',
    'Present your work professionally and handle design feedback',
    'Feel ready to start applying for junior design roles immediately',
    'Gain practical experience through hands-on projects and real-world scenarios',
    'Develop quick problem-solving skills for fast-paced design environments'
  ],
  weekWiseCurriculum: [
    {
      month: 1,
      title: '30-Day Intensive Bootcamp',
      totalHours: 36,
      weeks: [
        {
          week: 1,
          title: 'Foundations & Design Basics',
          totalHours: 9,
          topics: [
            { topic: 'Design basics and principles', hours: 2 },
            { topic: 'Figma essentials and tool setup', hours: 3 },
            { topic: 'Quick prototyping fundamentals', hours: 1.5 },
            { topic: 'Color and typography basics', hours: 1.5 },
            { topic: 'Layout fundamentals', hours: 1 }
          ]
        },
        {
          week: 2,
          title: 'Hands-on Projects & User Research',
          totalHours: 9,
          topics: [
            { topic: 'Real-world project kickoff', hours: 2 },
            { topic: 'User research basics and methods', hours: 2 },
            { topic: 'Wireframing and prototyping', hours: 2.5 },
            { topic: 'Design critique sessions', hours: 1.5 },
            { topic: 'Portfolio building guidance', hours: 1 }
          ]
        },
        {
          week: 3,
          title: 'Advanced Projects & Design Iteration',
          totalHours: 9,
          topics: [
            { topic: 'Advanced project work', hours: 3 },
            { topic: 'Design iteration and refinement', hours: 2.5 },
            { topic: 'Interactive prototyping', hours: 2 },
            { topic: 'Portfolio project completion', hours: 1.5 }
          ]
        },
        {
          week: 4,
          title: 'Career Prep & Portfolio Presentation',
          totalHours: 9,
          topics: [
            { topic: 'Resume building for designers', hours: 2 },
            { topic: 'Interview preparation and mock interviews', hours: 2.5 },
            { topic: 'Portfolio presentation and feedback', hours: 2 },
            { topic: 'Job search strategy and networking', hours: 1.5 },
            { topic: 'Salary negotiation and career guidance', hours: 1 }
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
  faqs: [
    {
      question: 'Is this bootcamp suitable for complete beginners?',
      answer: 'Yes, the bootcamp is designed for beginners. However, it\'s intensive and requires daily commitment. If you prefer a more relaxed pace, consider our 3-month Pro course.'
    },
    {
      question: 'What is the daily time commitment?',
      answer: 'You\'ll need to commit 2-3 hours daily for live sessions, plus additional time for assignments and projects. Total daily commitment is approximately 4-5 hours.'
    },
    {
      question: 'Will I have a portfolio after 30 days?',
      answer: 'Yes, you\'ll complete 2-3 portfolio projects during the bootcamp that you can showcase to employers. We also provide guidance on portfolio presentation.'
    },
    {
      question: 'Can working professionals join?',
      answer: 'Yes, we offer evening and weekend batches specifically for working professionals. The intensive format allows you to complete the course in just 30 days.'
    },
    {
      question: 'What makes this different from the Pro course?',
      answer: 'The bootcamp is faster (30 days vs 3 months) and more intensive. The Pro course offers deeper learning and more comprehensive coverage. Choose based on your timeline and learning preference.'
    },
    {
      question: 'Is placement assistance included?',
      answer: 'Yes, we provide placement assistance including resume review, portfolio feedback, interview preparation, and job referrals. Our 85% placement rate reflects our commitment.'
    },
    {
      question: 'What if I can\'t attend all sessions?',
      answer: 'All sessions are recorded, so you can catch up. However, we strongly recommend attending live sessions for the best learning experience and interaction with instructors.'
    },
    {
      question: 'Can I switch to the Pro course later?',
      answer: 'Yes, if you find the bootcamp pace too fast, you can upgrade to the Pro course. We\'ll credit your bootcamp fees towards the Pro course enrollment.'
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
        coursePrerequisites="No prior design experience required"
        teaches={[
          'UI/UX Design Fundamentals',
          'Figma',
          'Design Thinking',
          'Prototyping',
          'Portfolio Development',
          'Design Interview Preparation'
        ]}
        ratingValue="4.7"
        reviewCount="100"
        duration="P30D"
        totalTime="PT36H"
        url="https://designient.com/ui-ux-design-bootcamp"
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
          <OutcomeTransformationSection
            outcomes={courseData.outcomeTransformation}
            duration="30 days"
            description="Fast-track your transformation—here's what you'll achieve in 30 days."
          />
          <CourseOverview
            description={courseData.description}
            keyFeatures={courseData.keyFeatures}
            learningOutcomes={courseData.learningOutcomes}
            careerPaths={courseData.careerPaths}
          />
          <CourseCurriculum
            weekWiseCurriculum={courseData.weekWiseCurriculum}
            totalHours={courseData.hours}
          />
          <ToolsCoveredSection
            tools={courseData.tools}
            title="Tools You'll Master"
            description="Essential design tools to get you started quickly. Master the fundamentals in 30 days."
          />
          <ExperienceAuthoritySection />
          <CourseWhoShouldTake
            description={courseData.whoShouldTake}
            idealFor={courseData.idealFor}
            notFor={courseData.notFor}
          />
          <AIInsideUIUXSection />
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
          <MidPageCTA courseSlug="ui-ux-design-bootcamp" courseName={courseData.title} />
          <CourseApplicationForm courseSlug="ui-ux-design-bootcamp" courseName={courseData.title} />
          <CourseFAQ faqs={courseData.faqs} />
          <CourseCTA
            courseName={courseData.title}
            courseSlug="ui-ux-design-bootcamp"
            ctaText="Ready to Fast-Track Your Career?"
            secondaryText="Join 100+ professionals who transformed their careers in just 30 days."
          />
        </main>
        <Footer />
      </QuickApplyProvider>
    </div>
  )
}
