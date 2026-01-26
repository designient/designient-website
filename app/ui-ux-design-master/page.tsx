import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { CourseHero } from '../../components/course/CourseHero'
import { CourseOverview } from '../../components/course/CourseOverview'
import { CourseCurriculum } from '../../components/course/CourseCurriculum'
import { CourseWhoShouldTake } from '../../components/course/CourseWhoShouldTake'
import { CoursePricing } from '../../components/course/CoursePricing'
import { CourseFAQ } from '../../components/course/CourseFAQ'
import { CourseCTA } from '../../components/course/CourseCTA'
import { CourseStructuredData } from '../../components/course/CourseStructuredData'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UI/UX Design Master Course - 6 Months Advanced | Designient',
  description: 'Advanced UI/UX design specialization course. 6 months, 200+ hours of training in design systems, leadership, and advanced techniques. Diploma certification. For intermediate to advanced designers.',
  keywords: ['advanced UX course', 'design systems course', 'UX leadership', 'senior designer course', 'design master program', 'advanced design training'],
  openGraph: {
    title: 'UI/UX Design Master Course - 6 Months Advanced | Designient',
    description: 'Advanced specialization in UI/UX design. Design systems, leadership, advanced techniques. Diploma certification.',
    url: 'https://designient.com/ui-ux-design-master',
    images: ['/og-image.jpg'],
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
  batchDates: {
    offline: {
      bengaluru: 'Apr 1, 2026',
      hyderabad: 'Apr 5, 2026',
      pune: 'Apr 10, 2026'
    },
    online: {
      global: 'Mar 25, 2026'
    }
  },
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
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
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
      <main>
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
        />
        <CourseOverview
          description={courseData.description}
          keyFeatures={courseData.keyFeatures}
          learningOutcomes={courseData.learningOutcomes}
          careerPaths={courseData.careerPaths}
        />
        <CourseCurriculum
          modules={courseData.modules}
          totalHours={courseData.hours}
        />
        <CourseWhoShouldTake
          description={courseData.whoShouldTake}
          idealFor={courseData.idealFor}
          notFor={courseData.notFor}
        />
        <CoursePricing
          courseSlug="ui-ux-design-master"
          features={courseData.pricingFeatures}
          batchDates={courseData.batchDates}
        />
        <CourseFAQ faqs={courseData.faqs} />
        <CourseCTA
          courseName={courseData.title}
          ctaText="Ready to Become a Design Leader?"
          secondaryText="Join 150+ designers who have advanced their careers with our Master program."
        />
      </main>
      <Footer />
    </div>
  )
}
