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
  title: 'UI/UX Design Bootcamp - 30 Days Intensive | Designient',
  description: 'Fast-track your UI/UX design career in 30 days. Intensive daily bootcamp with 36 hours of training, real-world projects, and 85% placement rate. Perfect for career switchers.',
  keywords: ['UI/UX bootcamp', 'intensive design course', '30 day design course', 'fast track UX', 'design bootcamp Bangalore', 'career switch design'],
  openGraph: {
    title: 'UI/UX Design Bootcamp - 30 Days Intensive | Designient',
    description: 'Fast-track your design career in 30 days. Intensive training, real projects, 85% placement rate.',
    url: 'https://designient.com/ui-ux-design-bootcamp',
    images: ['/og-image.jpg'],
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
      title: 'Week 2-3: Hands-on Projects',
      description: 'Apply learning through real-world projects',
      duration: '2 weeks',
      topics: [
        'Real-world projects',
        'Portfolio building',
        'Design critique sessions',
        'User research basics',
        'Wireframing and prototyping',
        'Design iteration'
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
  batchDates: {
    offline: {
      bengaluru: 'Mar 1, 2026',
      hyderabad: 'Mar 5, 2026',
      pune: 'Mar 10, 2026'
    },
    online: {
      global: 'Feb 28, 2026'
    }
  },
  pricingFeatures: [
    '30-day intensive curriculum',
    '36 hours of live training',
    'Daily mentorship',
    'Portfolio projects',
    'Placement assistance',
    'Certificate of completion',
    'Job interview prep',
    'Lifetime community access'
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
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
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
          courseSlug="ui-ux-design-bootcamp"
          features={courseData.pricingFeatures}
          batchDates={courseData.batchDates}
        />
        <CourseFAQ faqs={courseData.faqs} />
        <CourseCTA
          courseName={courseData.title}
          ctaText="Ready to Fast-Track Your Career?"
          secondaryText="Join 100+ professionals who transformed their careers in just 30 days."
        />
      </main>
      <Footer />
    </div>
  )
}
