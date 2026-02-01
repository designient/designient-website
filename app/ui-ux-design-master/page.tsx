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
  title: 'UI/UX Design Master Course - 6 Months Advanced | Designient',
  description: 'Advanced UI/UX design specialization course. 6 months, 200+ hours of training in design systems, leadership, and advanced techniques. Diploma certification. For intermediate to advanced designers.',
  keywords: ['advanced UX course', 'design systems course', 'UX leadership', 'senior designer course', 'design master program', 'advanced design training'],
  openGraph: {
    title: 'UI/UX Design Master Course - 6 Months Advanced | Designient',
    description: 'Advanced specialization in UI/UX design. Design systems, leadership, advanced techniques. Diploma certification.',
    url: 'https://designient.com/ui-ux-design-master',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'UI/UX Design Master Course - Designient',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UI/UX Design Master Course - 6 Months Advanced | Designient',
    description: 'Advanced specialization in UI/UX design. Design systems, leadership, advanced techniques. Diploma certification.',
    images: ['/og-image.webp'],
  },
  alternates: {
    canonical: 'https://designient.com/ui-ux-design-master',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const courseData = {
  title: 'UI/UX Design Master',
  subtitle: 'Advanced specialization with diploma certification. Design systems, leadership, and advanced techniques for senior roles.',
  duration: '6 Months',
  hours: '200+ Hours',
  format: 'Hybrid',
  level: 'Pro to Master',
  rating: '4.9',
  students: '150+',
  badge: 'Diploma Program',
  description: 'Our UI/UX Design Master course is an advanced 6-month program designed for intermediate to advanced designers who want to specialize and move into senior or lead roles. With 200+ hours of comprehensive training, you\'ll master design systems, advanced interaction design, leadership skills, and strategic thinking. This diploma program prepares you for senior positions at top companies.',
  keyFeatures: [
    '200+ hours of advanced training',
    'Design systems mastery',
    'Leadership and strategy training',
    'Diploma certification',
    '92% placement rate',
    'Industry expert mentorship',
    'Advanced portfolio development',
    'Senior role preparation'
  ],
  learningOutcomes: [
    'Master design system architecture',
    'Lead design teams effectively',
    'Create advanced micro-interactions',
    'Develop design strategy',
    'Build scalable design systems',
    'Manage stakeholder relationships',
    'Measure design impact',
    'Mentor junior designers'
  ],
  careerPaths: [
    'Senior UI/UX Designer',
    'Design Lead',
    'Design Manager',
    'Design Systems Architect',
    'Principal Designer',
    'Head of Design',
    'Design Consultant',
    'Design Director'
  ],
  modules: [
    {
      title: 'Module 1: Advanced Design Systems',
      description: 'Master the architecture and implementation of scalable design systems',
      duration: '8 weeks',
      topics: [
        'Design system architecture',
        'Token management and theming',
        'Component API design',
        'Documentation strategies',
        'Scalability patterns',
        'Cross-platform consistency',
        'Design system governance',
        'Version control for design systems'
      ]
    },
    {
      title: 'Module 2: Micro-interactions & Motion',
      description: 'Create sophisticated animations and interaction patterns',
      duration: '6 weeks',
      topics: [
        'Animation principles and theory',
        'Prototyping advanced interactions',
        'Motion design tools (Principle, Framer)',
        'Performance optimization',
        'Accessibility in motion',
        'Emotional design through animation',
        'Micro-interaction patterns',
        'Motion design systems'
      ]
    },
    {
      title: 'Module 3: Leadership & Strategy',
      description: 'Develop leadership skills and strategic design thinking',
      duration: '10 weeks',
      topics: [
        'Design leadership fundamentals',
        'Team management and hiring',
        'Stakeholder communication',
        'Design strategy development',
        'Business impact measurement',
        'Mentoring junior designers',
        'Portfolio for senior roles',
        'Design operations and processes'
      ]
    }
  ],
  whoShouldTake: 'Designed for intermediate to advanced designers who want to specialize and move into senior or lead roles. Perfect if you already have UI/UX experience and want to master design systems, advanced techniques, and leadership skills.',
  idealFor: [
    'Mid-level designers seeking senior roles',
    'Designers wanting to specialize in design systems',
    'Those aiming for leadership positions',
    'Designers building advanced portfolios',
    'Professionals targeting top companies',
    'Designers wanting strategic skills'
  ],
  notFor: [
    'Complete beginners (consider Pro course)',
    'Those without prior UI/UX experience',
    'Designers not interested in leadership',
    'People seeking basic design skills'
  ],
  batchDates: null,
  upcomingBatch: null,
  batchFull: true,
  tools: [
    {
      name: 'Figma Advanced',
      description: 'Master advanced Figma features including complex design systems, component libraries, and team collaboration workflows.',
      category: 'Design',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'
    },
    {
      name: 'Framer',
      description: 'Advanced prototyping tool for creating high-fidelity, interactive prototypes with complex animations and interactions.',
      category: 'Prototyping',
      logo: 'https://cdn.worldvectorlogo.com/logos/framer-1.svg'
    },
    {
      name: 'Principle',
      description: 'Motion design tool for creating sophisticated animations and micro-interactions that bring designs to life.',
      category: 'Animation',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'
    },
    {
      name: 'Design System Tools',
      description: 'Learn to build and maintain scalable design systems using industry-standard tools and methodologies.',
      category: 'Design Systems',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'
    },
    {
      name: 'Advanced Research Tools',
      description: 'Master enterprise-level user research tools and methodologies for large-scale product design.',
      category: 'Research',
      logo: 'https://cdn.worldvectorlogo.com/logos/miro-3.svg'
    },
    {
      name: 'Leadership & Collaboration Tools',
      description: 'Tools for leading design teams, managing design processes, and collaborating across departments.',
      category: 'Leadership',
      logo: 'https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg'
    },
    {
      name: 'AI-Powered Design Tools',
      description: 'Advanced AI tools for design automation, pattern recognition, and intelligent design assistance.',
      category: 'AI',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg'
    },
    {
      name: 'Enterprise Design Platforms',
      description: 'Work with enterprise design platforms used by Fortune 500 companies for large-scale design operations.',
      category: 'Enterprise',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg'
    }
  ],
  outcomeTransformation: [
    'Lead design teams and mentor junior designers effectively',
    'Architect and implement scalable design systems for large organizations',
    'Create advanced micro-interactions and motion design systems',
    'Develop strategic design thinking and measure business impact',
    'Build a senior-level portfolio that showcases leadership capabilities',
    'Feel confident applying for senior, lead, and director-level design roles',
    'Master stakeholder communication and design advocacy at executive levels'
  ],
  weekWiseCurriculum: [
    {
      month: 1,
      title: 'Month 1-2: Advanced Design Systems',
      totalHours: 68,
      weeks: [
        {
          week: 1,
          title: 'Design System Architecture & Foundation',
          totalHours: 8.5,
          topics: [
            { topic: 'Design system architecture and planning', hours: 2 },
            { topic: 'Token management and theming systems', hours: 2 },
            { topic: 'Component API design principles', hours: 2 },
            { topic: 'Documentation strategies and best practices', hours: 1.5 },
            { topic: 'Design system project kickoff', hours: 1 }
          ]
        },
        {
          week: 2,
          title: 'Token Management & Theming',
          totalHours: 8.5,
          topics: [
            { topic: 'Advanced token management', hours: 2.5 },
            { topic: 'Theming systems and multi-brand support', hours: 2.5 },
            { topic: 'Design tokens in practice', hours: 2 },
            { topic: 'Project work and review', hours: 1.5 }
          ]
        },
        {
          week: 3,
          title: 'Scalability & Cross-Platform Design',
          totalHours: 8.5,
          topics: [
            { topic: 'Scalability patterns and methodologies', hours: 2 },
            { topic: 'Cross-platform consistency strategies', hours: 2 },
            { topic: 'Design system governance models', hours: 1.5 },
            { topic: 'Version control for design systems', hours: 1.5 },
            { topic: 'Advanced component development', hours: 1.5 }
          ]
        },
        {
          week: 4,
          title: 'Advanced Component Design',
          totalHours: 8.5,
          topics: [
            { topic: 'Complex component patterns', hours: 2 },
            { topic: 'Accessibility in design systems', hours: 2 },
            { topic: 'Performance optimization', hours: 1.5 },
            { topic: 'Design system testing strategies', hours: 1.5 },
            { topic: 'Project work and review', hours: 1.5 }
          ]
        },
        {
          week: 5,
          title: 'Component API & Documentation',
          totalHours: 8.5,
          topics: [
            { topic: 'Component API design advanced', hours: 2.5 },
            { topic: 'Documentation best practices', hours: 2 },
            { topic: 'Storybook and component libraries', hours: 2 },
            { topic: 'Project refinement', hours: 2 }
          ]
        },
        {
          week: 6,
          title: 'Design System Implementation',
          totalHours: 8.5,
          topics: [
            { topic: 'Implementation strategies and handoff', hours: 2 },
            { topic: 'Developer collaboration workflows', hours: 2 },
            { topic: 'Design system maintenance', hours: 1.5 },
            { topic: 'Case study development', hours: 1.5 },
            { topic: 'Portfolio presentation', hours: 1.5 }
          ]
        },
        {
          week: 7,
          title: 'Advanced Design System Patterns',
          totalHours: 8.5,
          topics: [
            { topic: 'Advanced scalability patterns', hours: 2.5 },
            { topic: 'Multi-product design systems', hours: 2 },
            { topic: 'Design system evolution', hours: 2 },
            { topic: 'Project work', hours: 2 }
          ]
        },
        {
          week: 8,
          title: 'Design System Portfolio & Review',
          totalHours: 8.5,
          topics: [
            { topic: 'Final design system project', hours: 3 },
            { topic: 'Portfolio case study completion', hours: 2.5 },
            { topic: 'Peer review and feedback', hours: 2 },
            { topic: 'Module assessment', hours: 1 }
          ]
        }
      ]
    },
    {
      month: 2,
      title: 'Month 3-4: Micro-interactions & Motion',
      totalHours: 51,
      weeks: [
        {
          week: 9,
          title: 'Animation Principles & Theory',
          totalHours: 8.5,
          topics: [
            { topic: 'Animation principles and theory', hours: 2 },
            { topic: 'Motion design fundamentals', hours: 2 },
            { topic: 'Prototyping advanced interactions', hours: 2 },
            { topic: 'Motion design tools (Principle, Framer)', hours: 1.5 },
            { topic: 'Project work', hours: 1 }
          ]
        },
        {
          week: 10,
          title: 'Advanced Interaction Prototyping',
          totalHours: 8.5,
          topics: [
            { topic: 'Complex interaction patterns', hours: 2.5 },
            { topic: 'Advanced prototyping techniques', hours: 2 },
            { topic: 'Motion design project kickoff', hours: 2 },
            { topic: 'Project work and review', hours: 2 }
          ]
        },
        {
          week: 11,
          title: 'Performance & Accessibility in Motion',
          totalHours: 8.5,
          topics: [
            { topic: 'Performance optimization for animations', hours: 2 },
            { topic: 'Accessibility in motion design', hours: 2 },
            { topic: 'Emotional design through animation', hours: 2 },
            { topic: 'Micro-interaction patterns library', hours: 1.5 },
            { topic: 'Advanced project work', hours: 1 }
          ]
        },
        {
          week: 12,
          title: 'Motion Design Systems',
          totalHours: 8.5,
          topics: [
            { topic: 'Motion design systems architecture', hours: 2 },
            { topic: 'Advanced interaction patterns', hours: 2 },
            { topic: 'Complex animation workflows', hours: 2 },
            { topic: 'Project refinement and iteration', hours: 1.5 },
            { topic: 'Portfolio case study development', hours: 1 }
          ]
        },
        {
          week: 13,
          title: 'Micro-interaction Patterns',
          totalHours: 8.5,
          topics: [
            { topic: 'Advanced micro-interaction design', hours: 2.5 },
            { topic: 'Pattern library development', hours: 2 },
            { topic: 'Motion design best practices', hours: 2 },
            { topic: 'Project work', hours: 2 }
          ]
        },
        {
          week: 14,
          title: 'Advanced Motion Projects',
          totalHours: 8.5,
          topics: [
            { topic: 'Advanced motion project completion', hours: 3 },
            { topic: 'Portfolio presentation and feedback', hours: 2 },
            { topic: 'Industry best practices review', hours: 2 },
            { topic: 'Final project showcase', hours: 1.5 }
          ]
        }
      ]
    },
    {
      month: 3,
      title: 'Month 5-6: Leadership & Strategy',
      totalHours: 85,
      weeks: [
        {
          week: 15,
          title: 'Design Leadership Fundamentals',
          totalHours: 8.5,
          topics: [
            { topic: 'Design leadership fundamentals', hours: 2 },
            { topic: 'Team management and hiring strategies', hours: 2 },
            { topic: 'Stakeholder communication and influence', hours: 2 },
            { topic: 'Leadership project kickoff', hours: 1.5 },
            { topic: 'Case study development', hours: 1 }
          ]
        },
        {
          week: 16,
          title: 'Team Management & Hiring',
          totalHours: 8.5,
          topics: [
            { topic: 'Building and scaling design teams', hours: 2.5 },
            { topic: 'Hiring and recruitment strategies', hours: 2 },
            { topic: 'Team culture and collaboration', hours: 2 },
            { topic: 'Project work', hours: 2 }
          ]
        },
        {
          week: 17,
          title: 'Stakeholder Communication',
          totalHours: 8.5,
          topics: [
            { topic: 'Advanced stakeholder management', hours: 2.5 },
            { topic: 'Influencing without authority', hours: 2 },
            { topic: 'Executive communication', hours: 2 },
            { topic: 'Project work and review', hours: 2 }
          ]
        },
        {
          week: 18,
          title: 'Design Strategy Development',
          totalHours: 8.5,
          topics: [
            { topic: 'Design strategy development frameworks', hours: 2 },
            { topic: 'Business impact measurement', hours: 2 },
            { topic: 'Design operations and processes', hours: 2 },
            { topic: 'Strategic project work', hours: 1.5 },
            { topic: 'Portfolio development', hours: 1 }
          ]
        },
        {
          week: 19,
          title: 'Business Impact & Measurement',
          totalHours: 8.5,
          topics: [
            { topic: 'Measuring design ROI', hours: 2.5 },
            { topic: 'Design metrics and KPIs', hours: 2 },
            { topic: 'Strategic alignment with business', hours: 2 },
            { topic: 'Project work', hours: 2 }
          ]
        },
        {
          week: 20,
          title: 'Design Operations',
          totalHours: 8.5,
          topics: [
            { topic: 'Design ops fundamentals', hours: 2.5 },
            { topic: 'Process optimization', hours: 2 },
            { topic: 'Tooling and workflow management', hours: 2 },
            { topic: 'Project work', hours: 2 }
          ]
        },
        {
          week: 21,
          title: 'Mentoring & Advanced Portfolio',
          totalHours: 8.5,
          topics: [
            { topic: 'Mentoring junior designers', hours: 2 },
            { topic: 'Portfolio for senior roles', hours: 2 },
            { topic: 'Advanced portfolio case studies', hours: 2 },
            { topic: 'Interview preparation for leadership roles', hours: 1.5 },
            { topic: 'Mock interviews and feedback', hours: 1 }
          ]
        },
        {
          week: 22,
          title: 'Advanced Portfolio Development',
          totalHours: 8.5,
          topics: [
            { topic: 'Senior-level portfolio strategies', hours: 2.5 },
            { topic: 'Leadership case studies', hours: 2.5 },
            { topic: 'Portfolio refinement', hours: 2 },
            { topic: 'Peer review', hours: 1.5 }
          ]
        },
        {
          week: 23,
          title: 'Strategic Design Thinking',
          totalHours: 8.5,
          topics: [
            { topic: 'Advanced strategic thinking', hours: 2.5 },
            { topic: 'Design vision and roadmap', hours: 2 },
            { topic: 'Long-term design planning', hours: 2 },
            { topic: 'Final project work', hours: 2 }
          ]
        },
        {
          week: 24,
          title: 'Final Leadership Assessment',
          totalHours: 8.5,
          topics: [
            { topic: 'Final leadership project presentation', hours: 3 },
            { topic: 'Diploma exam preparation and assessment', hours: 2.5 },
            { topic: 'Career roadmap for senior roles', hours: 1.5 },
            { topic: 'Portfolio final review', hours: 1 },
            { topic: 'Graduation and next steps', hours: 0.5 }
          ]
        }
      ]
    }
  ],
  pricingFeatures: [
    'Complete 6-month advanced curriculum',
    '200+ hours of intensive training',
    '1-on-1 leadership mentorship',
    'Design systems project',
    'Diploma certification',
    'Senior role placement assistance',
    'Industry connections',
    'Lifetime access to materials'
  ],
  faqs: [
    {
      question: 'What experience level is required?',
      answer: 'This course is designed for intermediate to advanced designers with at least 1-2 years of UI/UX experience. If you\'re a beginner, we recommend starting with our Pro course first.'
    },
    {
      question: 'What makes this different from the Pro course?',
      answer: 'The Master course focuses on advanced topics like design systems, leadership, and strategic thinking. It\'s for designers ready to move into senior roles, while the Pro course is for building foundational skills.'
    },
    {
      question: 'Will I get a diploma?',
      answer: 'Yes, upon successful completion, you\'ll receive a Diploma in Advanced UI/UX Design, which is recognized by industry leaders and can significantly boost your career prospects.'
    },
    {
      question: 'What kind of projects will I work on?',
      answer: 'You\'ll work on advanced projects including building a complete design system, creating complex interaction prototypes, and leading a design team project. These projects demonstrate senior-level capabilities.'
    },
    {
      question: 'Is this course suitable for freelancers?',
      answer: 'Absolutely! The leadership and business skills taught in this course are invaluable for freelancers who want to work with larger clients and build their own design consultancy.'
    },
    {
      question: 'How does placement assistance work for senior roles?',
      answer: 'We provide specialized placement assistance for senior roles including executive resume review, portfolio presentation coaching, salary negotiation guidance, and direct referrals to hiring managers at top companies.'
    },
    {
      question: 'Can I take this course while working?',
      answer: 'Yes, we offer flexible scheduling with evening and weekend sessions. The 6-month duration allows you to balance work and learning effectively.'
    },
    {
      question: 'What is the class size?',
      answer: 'We maintain even smaller batches (max 8 students) for the Master course to ensure personalized attention and advanced learning experiences.'
    }
  ]
}

export default function UIUXDesignMasterPage() {
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
        name: 'UI/UX Design Master',
        item: 'https://designient.com/ui-ux-design-master'
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <StructuredData data={breadcrumbSchema} />
      <CourseStructuredData
        courseSlug="ui-ux-design-master"
        courseName={courseData.title}
        description={courseData.description}
        courseCode="UIUX-MASTER-2026"
        educationalLevel="Intermediate to Advanced"
        timeRequired="P6M"
        coursePrerequisites="Intermediate-level design knowledge or completion of UI/UX Design Pro course"
        teaches={[
          'Advanced Design Systems',
          'Micro-interactions & Motion',
          'Design Leadership',
          'Team Management',
          'Stakeholder Communication',
          'Design Strategy',
          'Business Impact Measurement'
        ]}
        ratingValue="4.9"
        reviewCount="150"
        duration="P6M"
        totalTime="PT200H"
        url="https://designient.com/ui-ux-design-master"
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
            courseSlug="ui-ux-design-master"
            courseName={courseData.title}
          />
          <FloatingApplyButton courseSlug="ui-ux-design-master" courseName={courseData.title} />
          <OutcomeTransformationSection
            outcomes={courseData.outcomeTransformation}
            duration="6 months"
            description="From intermediate to senior designer—here's your transformation journey."
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
            title="Advanced Tools You'll Master"
            description="Enterprise-level tools and platforms used by senior designers and design leaders in top companies."
          />
          <ExperienceAuthoritySection />
          <CourseWhoShouldTake
            description={courseData.whoShouldTake}
            idealFor={courseData.idealFor}
            notFor={courseData.notFor}
          />
          <AIInsideUIUXSection />
          <CoursePricing
            courseSlug="ui-ux-design-master"
            features={courseData.pricingFeatures}
            duration={courseData.duration}
            batchDates={courseData.batchDates}
            batchFull={courseData.batchFull}
          />
          <PaymentOptions
            courseSlug="ui-ux-design-master"
            courseType="long"
          />
          <TrustBadges />
          <MidPageCTA courseSlug="ui-ux-design-master" courseName={courseData.title} />
          <CourseApplicationForm courseSlug="ui-ux-design-master" courseName={courseData.title} />
          <CourseFAQ faqs={courseData.faqs} />
          <CourseCTA
            courseName={courseData.title}
            courseSlug="ui-ux-design-master"
            ctaText="Ready to Become a Design Leader?"
            secondaryText="Join 150+ designers who have advanced their careers with our Master program."
          />
        </main>
        <Footer />
      </QuickApplyProvider>
    </div>
  )
}
