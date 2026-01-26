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
  title: 'UI/UX Design Pro Course - 3 Months | Designient',
  description: 'Master UI/UX design in 3 months with our comprehensive Pro course. 124 hours of hands-on training, portfolio projects, and 95% placement rate. Beginner-friendly with Adobe certification. Enroll now!',
  keywords: ['UI/UX design course', 'UX design training', 'Figma course', 'design bootcamp', 'UI design course Bangalore', 'UX course online'],
  openGraph: {
    title: 'UI/UX Design Pro Course - 3 Months | Designient',
    description: 'Master UI/UX design in 3 months. 124 hours of training, portfolio projects, 95% placement rate.',
    url: 'https://designient.com/ui-ux-design-pro',
    images: ['/og-image.jpg'],
  },
}

const courseData = {
  title: 'UI/UX Design Pro',
  subtitle: 'The complete foundation for your design career. Master Figma, design thinking, and prototyping with hands-on projects.',
  duration: '3 Months',
  hours: '124 Hours',
  format: 'Hybrid',
  level: 'Beginner to Pro',
  rating: '4.8',
  students: '200+',
  badge: 'Adobe Certified',
  description: 'Our UI/UX Design Pro course is a comprehensive 3-month program designed to transform beginners into job-ready designers. With 124 hours of intensive training, you\'ll master industry-standard tools like Figma, learn design thinking methodologies, and build a professional portfolio that gets you hired. Our 95% placement rate speaks to the quality of our curriculum and mentorship.',
  keyFeatures: [
    '124 hours of comprehensive training',
    'Hands-on projects for real portfolio',
    '1-on-1 mentorship sessions',
    'Adobe Certified curriculum',
    '95% placement assistance',
    'Lifetime access to course materials',
    'Industry expert instructors',
    'Small batch sizes (max 10 students)'
  ],
  learningOutcomes: [
    'Master Figma and design tools',
    'Understand design thinking process',
    'Create user-centered designs',
    'Build responsive interfaces',
    'Conduct user research',
    'Develop design systems',
    'Create interactive prototypes',
    'Build a professional portfolio'
  ],
  careerPaths: [
    'UI/UX Designer',
    'Product Designer',
    'Interaction Designer',
    'UX Researcher',
    'Design Consultant',
    'Freelance Designer'
  ],
  modules: [
    {
      title: 'Module 1: Design Fundamentals',
      description: 'Build a strong foundation in design principles and theory',
      duration: '4 weeks',
      topics: [
        'Design principles and theory',
        'Color theory and typography',
        'Layout and composition',
        'User psychology basics',
        'Design tools introduction (Figma, Adobe XD)',
        'Design systems overview',
        'Accessibility fundamentals'
      ]
    },
    {
      title: 'Module 2: UI Design',
      description: 'Master interface design patterns and component creation',
      duration: '4 weeks',
      topics: [
        'Interface design patterns',
        'Component design',
        'Design systems',
        'Responsive design',
        'Accessibility standards',
        'Micro-interactions',
        'Design handoff process'
      ]
    },
    {
      title: 'Module 3: UX Research & Strategy',
      description: 'Learn user research methods and information architecture',
      duration: '4 weeks',
      topics: [
        'User research methods',
        'Persona development',
        'User journey mapping',
        'Information architecture',
        'Wireframing and prototyping',
        'Usability testing',
        'Design iteration'
      ]
    }
  ],
  whoShouldTake: 'Perfect for beginners and career switchers who want to build a solid foundation in UI/UX design. No prior design experience required.',
  idealFor: [
    'Complete beginners with no design background',
    'Career switchers from other fields',
    'Graphic designers wanting to transition to UI/UX',
    'Developers interested in design',
    'Marketing professionals seeking design skills',
    'Entrepreneurs building their own products'
  ],
  notFor: [
    'Experienced designers seeking advanced techniques',
    'Those looking for quick certification without learning',
    'People not committed to 3 months of learning'
  ],
  batchDates: {
    offline: {
      bengaluru: 'Feb 15, 2026',
      hyderabad: 'Feb 20, 2026',
      pune: 'Feb 25, 2026'
    },
    online: {
      global: 'Feb 10, 2026'
    }
  },
  pricingFeatures: [
    'Complete 3-month curriculum',
    '124 hours of live training',
    '1-on-1 mentorship sessions',
    'Portfolio review and feedback',
    'Placement assistance',
    'Adobe certification',
    'Lifetime course access',
    'Industry project experience'
  ],
  faqs: [
    {
      question: 'Do I need any prior design experience?',
      answer: 'No prior design experience is required. Our UI/UX Design Pro course is designed for complete beginners. We start from the fundamentals and gradually build up to advanced concepts.'
    },
    {
      question: 'What tools will I learn?',
      answer: 'You\'ll master industry-standard tools including Figma (primary), Adobe XD, prototyping tools, and design collaboration platforms. We also cover design system tools and handoff processes.'
    },
    {
      question: 'Will I get a certificate?',
      answer: 'Yes, you\'ll receive an Adobe Certified certificate upon successful completion of the course, along with a portfolio of real-world projects.'
    },
    {
      question: 'What is the class schedule?',
      answer: 'Classes are conducted 3-4 times per week with flexible timing options. We offer both weekday and weekend batches. Each session is 2-3 hours long with breaks.'
    },
    {
      question: 'How many students are in each batch?',
      answer: 'We maintain small batch sizes with a maximum of 10 students per batch. This ensures personalized attention and effective learning.'
    },
    {
      question: 'What kind of projects will I work on?',
      answer: 'You\'ll work on 4-5 real-world projects including mobile apps, web applications, and design systems. These projects will form your professional portfolio.'
    },
    {
      question: 'Is placement guaranteed?',
      answer: 'While we don\'t guarantee placements, we provide comprehensive placement assistance including resume building, portfolio review, interview preparation, and job referrals. Our 95% placement rate reflects our commitment to your success.'
    },
    {
      question: 'Can I pay in installments?',
      answer: 'Yes, we offer flexible payment plans. You can pay in 2-3 installments. Contact our admissions team for more details.'
    }
  ]
}

export default function UIUXDesignProPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <CourseStructuredData
        courseSlug="ui-ux-design-pro"
        courseName={courseData.title}
        description={courseData.description}
        courseCode="UIUX-PRO-2026"
        educationalLevel="Beginner to Professional"
        timeRequired="P3M"
        coursePrerequisites="No prior design experience required"
        teaches={[
          'UI/UX Design',
          'Figma',
          'Design Thinking',
          'User Research',
          'Prototyping',
          'Design Systems',
          'User Interface Design',
          'User Experience Design'
        ]}
        ratingValue="4.8"
        reviewCount="200"
        duration="P3M"
        totalTime="PT124H"
        url="https://designient.com/ui-ux-design-pro"
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
          courseSlug="ui-ux-design-pro"
          features={courseData.pricingFeatures}
          batchDates={courseData.batchDates}
        />
        <CourseFAQ faqs={courseData.faqs} />
        <CourseCTA
          courseName={courseData.title}
          ctaText="Ready to Start Your Design Career?"
          secondaryText="Join 200+ students who have transformed their careers with our UI/UX Design Pro course."
        />
      </main>
      <Footer />
    </div>
  )
}
