import { Header } from '../../components/Header'
import { CoursesHero } from '../../components/CoursesHero'
import { CourseComparisonTable } from '../../components/CourseComparisonTable'
import { CourseDetailSection } from '../../components/CourseDetailSection'
import { LearningPathVisualization } from '../../components/LearningPathVisualization'
import { CoursesFAQ } from '../../components/CoursesFAQ'
import { CoursesCTA } from '../../components/CoursesCTA'
import { Footer } from '../../components/Footer'
import { StructuredData } from '../../components/StructuredData'
import type { Metadata } from 'next'

const proCourse = {
  name: 'UI/UX Design Pro',
  duration: '3 Months',
  hours: '124 Hours',
  format: 'Hybrid',
  level: 'Beginner to Pro',
  modules: [
    {
      title: 'Module 1: Design Fundamentals',
      topics: [
        'Design principles and theory',
        'Color theory and typography',
        'Layout and composition',
        'User psychology basics',
        'Design tools introduction'
      ]
    },
    {
      title: 'Module 2: UI Design',
      topics: [
        'Interface design patterns',
        'Component design',
        'Design systems',
        'Responsive design',
        'Accessibility standards'
      ]
    },
    {
      title: 'Module 3: UX Research & Strategy',
      topics: [
        'User research methods',
        'Persona development',
        'User journey mapping',
        'Information architecture',
        'Wireframing and prototyping'
      ]
    }
  ],
  whoShouldTake: 'Perfect for beginners and career switchers who want to build a solid foundation in UI/UX design. No prior design experience required.',
  benefits: [
    'Complete foundation',
    'Portfolio projects',
    'Industry mentorship',
    'Certificate of completion'
  ],
  courseSlug: 'ui-ux-design-pro' as const,
  imagePosition: 'left' as const,
  backgroundColor: '#fceed1',
  coursePath: '/ui-ux-design-pro'
}

const bootcampCourse = {
  name: 'UI/UX Design Bootcamp',
  duration: '30 Days',
  hours: '36 Hours',
  format: 'Intensive',
  level: 'Fast Track',
  modules: [
    {
      title: 'Week 1: Foundations',
      topics: [
        'Design basics',
        'Figma essentials',
        'Quick prototyping'
      ]
    },
    {
      title: 'Week 2-3: Hands-on Projects',
      topics: [
        'Real-world projects',
        'Portfolio building',
        'Design critique'
      ]
    },
    {
      title: 'Week 4: Career Prep',
      topics: [
        'Resume building',
        'Interview prep',
        'Job search strategy'
      ]
    }
  ],
  whoShouldTake: 'Ideal for professionals looking to quickly upskill or switch careers. Intensive daily sessions designed for fast learning.',
  benefits: [
    'Fast-track learning',
    'Intensive mentorship',
    'Quick portfolio',
    'Job placement support'
  ],
  courseSlug: 'ui-ux-design-bootcamp' as const,
  imagePosition: 'right' as const,
  backgroundColor: '#FFF6E2',
  coursePath: '/ui-ux-design-bootcamp'
}

const masterCourse = {
  name: 'UI/UX Design Master',
  duration: '6 Months',
  hours: '200+ Hours',
  format: 'Hybrid',
  level: 'Intermediate-Advanced',
  modules: [
    {
      title: 'Module 1: Advanced Design Systems',
      topics: [
        'Design system architecture',
        'Token management',
        'Component API design',
        'Documentation strategies',
        'Scalability patterns',
        'Cross-platform consistency'
      ]
    },
    {
      title: 'Module 2: Micro-interactions & Motion',
      topics: [
        'Animation principles',
        'Prototyping advanced interactions',
        'Motion design tools',
        'Performance optimization',
        'Accessibility in motion'
      ]
    },
    {
      title: 'Module 3: Leadership & Strategy',
      topics: [
        'Design leadership',
        'Team management',
        'Stakeholder communication',
        'Design strategy',
        'Business impact measurement',
        'Mentoring junior designers',
        'Portfolio for senior roles'
      ]
    }
  ],
  whoShouldTake: 'Designed for intermediate to advanced designers who want to specialize and move into senior or lead roles. Perfect if you already have UI/UX experience and want to master design systems, advanced techniques, and leadership skills. Ideal for those targeting senior positions at top companies.',
  benefits: [
    'Advanced specialization',
    'Leadership training',
    'Industry connections',
    'Diploma certification'
  ],
  courseSlug: 'ui-ux-design-master' as const,
  imagePosition: 'right' as const,
  backgroundColor: '#fceed1',
  coursePath: '/ui-ux-design-master'
}

const promptEngineeringCourse = {
  name: 'Prompt Engineering Mastery',
  duration: '30 Days',
  hours: '40 Hours',
  format: 'Online',
  level: 'All Levels',
  modules: [
    {
      title: 'Week 1: Foundations of Prompt Engineering',
      topics: [
        'Introduction to AI and prompt engineering',
        'Understanding ChatGPT, Midjourney, and other AI tools',
        'Basic prompt structures and patterns',
        'Best practices for effective prompts'
      ]
    },
    {
      title: 'Week 2: Advanced Prompting Techniques',
      topics: [
        'Chain-of-thought prompting',
        'Few-shot learning prompts',
        'Role-based prompting',
        'Context and persona development',
        'Prompt optimization strategies'
      ]
    },
    {
      title: 'Week 3: Specialized Applications',
      topics: [
        'Creative writing prompts',
        'Code generation prompts',
        'Image generation prompts (Midjourney, DALL-E)',
        'Data analysis prompts',
        'Business and marketing prompts'
      ]
    },
    {
      title: 'Week 4: Mastery & Portfolio',
      topics: [
        'Complex multi-step prompts',
        'Prompt libraries and templates',
        'Building your prompt portfolio',
        'Real-world project applications',
        'Career opportunities in AI'
      ]
    }
  ],
  whoShouldTake: 'Perfect for anyone looking to master AI tools and prompt engineering. Whether you\'re a designer, developer, marketer, writer, or entrepreneur, this course will teach you how to effectively communicate with AI to get the best results. No prior experience required.',
  benefits: [
    'Master AI tools',
    'Build prompt portfolio',
    'Real-world projects',
    'Certificate of completion'
  ],
  courseSlug: 'prompt-engineering-mastery' as const,
  imagePosition: 'left' as const,
  backgroundColor: '#fceed1',
  coursePath: '/prompt-engineering-mastery'
}

export const metadata: Metadata = {
  title: 'Courses - UI/UX Design Training | Designient',
  description: 'Choose from our comprehensive courses: UI/UX Design Bootcamp (30 days), UI/UX Design Pro (3 months), UI/UX Design Master (6 months), or Prompt Engineering Mastery (30 days). All courses include hands-on projects and placement support.',
  keywords: ['UI/UX design courses', 'design training courses', 'Figma course', 'UX bootcamp', 'design master program', 'prompt engineering course', 'design education'],
  openGraph: {
    title: 'Courses - UI/UX Design Training | Designient',
    description: 'Choose from our comprehensive courses: UI/UX Design Bootcamp, Pro, Master, or Prompt Engineering Mastery. All courses include hands-on projects and placement support.',
    url: 'https://designient.com/courses',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Designient Courses - UI/UX Design Training',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Courses - UI/UX Design Training | Designient',
    description: 'Choose from our comprehensive courses: UI/UX Design Bootcamp, Pro, Master, or Prompt Engineering Mastery.',
    images: ['/og-image.webp'],
  },
  alternates: {
    canonical: 'https://designient.com/courses',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function CoursesPage() {
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
      }
    ]
  }

  // CollectionPage schema
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'UI/UX Design Courses - Designient',
    description: 'Comprehensive UI/UX design courses including Bootcamp, Pro, Master, and Prompt Engineering programs. All courses include hands-on projects and placement support.',
    url: 'https://designient.com/courses',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: 4,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'Course',
            name: 'UI/UX Design Bootcamp',
            url: 'https://designient.com/ui-ux-design-bootcamp'
          }
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Course',
            name: 'UI/UX Design Pro',
            url: 'https://designient.com/ui-ux-design-pro'
          }
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Course',
            name: 'UI/UX Design Master',
            url: 'https://designient.com/ui-ux-design-master'
          }
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'Course',
            name: 'Prompt Engineering Mastery',
            url: 'https://designient.com/prompt-engineering-mastery'
          }
        }
      ]
    }
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <StructuredData data={[breadcrumbSchema, collectionSchema]} />
      <Header />
      <CoursesHero />
      <CourseComparisonTable />
      <CourseDetailSection {...proCourse} />
      <CourseDetailSection {...bootcampCourse} />
      <CourseDetailSection {...masterCourse} />
      <CourseDetailSection {...promptEngineeringCourse} />
      <LearningPathVisualization />
      <CoursesFAQ />
      <CoursesCTA />
      <Footer />
    </div>
  )
}
