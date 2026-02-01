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
import { AIIntegratedWorkflowSection } from '../../components/course/AIIntegratedWorkflowSection'
import { MidPageCTA } from '../../components/course/MidPageCTA'
import { PaymentOptions } from '../../components/course/PaymentOptions'
import { CourseApplicationForm } from '../../components/course/CourseApplicationForm'
import { TrustBadges } from '../../components/course/TrustBadges'
import { LaunchOfferSection } from '../../components/course/LaunchOfferSection'
import { ToolsCoveredSection } from '../../components/course/ToolsCoveredSection'
import { CareerOutcomesSection } from '../../components/course/CareerOutcomesSection'
import { PlacementAssistanceSection } from '../../components/course/PlacementAssistanceSection'
import { MentorCredibilitySection } from '../../components/course/MentorCredibilitySection'
import { PortfolioDeliverablesSection } from '../../components/course/PortfolioDeliverablesSection'
import { SocialProofSection } from '../../components/course/SocialProofSection'
import { LearningExperienceSection } from '../../components/course/LearningExperienceSection'
import { CityLocationsSection } from '../../components/course/CityLocationsSection'
import { ProCourseFAQSchema } from '../../components/course/ProCourseFAQSchema'
import { StructuredData } from '../../components/StructuredData'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UI/UX Design Pro Course - 3 Months | Designient',
  description: 'Master UI/UX design in 3 months with our comprehensive Pro course. 124 hours of hands-on training, portfolio projects, and 95% placement rate. Beginner-friendly with Adobe certification. Enroll now!',
  keywords: ['UI/UX design course', 'UX design training', 'Figma course', 'design bootcamp', 'UI design course Bangalore', 'UX course online'],
  openGraph: {
    title: 'UI/UX Design Pro Course - 3 Months | Designient',
    description: 'Master UI/UX design in 3 months. 124 hours of training, portfolio projects, 95% placement rate.',
    url: 'https://designient.com/ui-ux-design-pro',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'UI/UX Design Pro Course - Designient',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UI/UX Design Pro Course - 3 Months | Designient',
    description: 'Master UI/UX design in 3 months. 124 hours of training, portfolio projects, 95% placement rate.',
    images: ['/og-image.webp'],
  },
  alternates: {
    canonical: 'https://designient.com/ui-ux-design-pro',
  },
  robots: {
    index: true,
    follow: true,
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
      title: 'Month 1: Foundations & Research',
      description: 'Build a strong foundation in UI/UX design, user research, and AI-powered workflows',
      duration: '4 weeks',
      topics: [
        'Week 1: Introduction to UI/UX & User-Centric Design - Orientation & Career Roadmap, What is UI/UX, Good UX vs Bad UX examples, AI in UX introduction, Tools setup (Figma Pro, Miro, FigJam, Perplexity Pro), Case study breakdown & best practices',
        'Week 2: User Research & Design Thinking - Design Thinking & Problem Solving, UX Research methods & best practices, Affordances, Signifiers & Mental Models, Field Studies & User Interviews, Structuring Research in Google Docs',
        'Week 3: Prompt Engineering & Generative AI Masterclass - Effective Prompt Writing for UX Research, Perplexity Pro workflows (Copilot, Focus/Pro Search, file uploads), AI for Persona Creation & Journey Mapping, Live AI-Based UX Design Exercise with Gemini 2.5 Flash & Figma AI',
        'Week 4: Information Architecture & Storyboarding - IA & Sitemap Creation, Card Sorting Techniques in FigJam/Miro, User Flows & Wireframing Basics (Low-Fi in Figma), Storyboarding & Scenario Mapping'
      ]
    },
    {
      title: 'Month 2: UI Design & Prototyping',
      description: 'Master Figma Pro, design systems, and create responsive interfaces',
      duration: '4 weeks',
      topics: [
        'Week 5: Figma Pro: Mastering UI Design - Auto Layout, Components, Constraints, Prototyping in Figma, Using AI for Faster UI Wireframing & Mockups, Designing Forms, Navigation & Interaction Patterns',
        'Week 6: Human Interface Guidelines & Material Design - iOS & iPadOS Design Guidelines (Apple HIG), Material Design Principles for Android, Typography, Spacing & Grid Systems, Live Practical: Convert iOS UI to Android UI',
        'Week 7: Color Psychology, Branding & Logo Design - Color Theory & How to Pick UI Colors, Creating UI Color Palette & Accessibility Testing, Logo Design & Illustration in Figma, Trendy UI Design Breakdown & Application',
        'Week 8: Web & Mobile UI Design - Understanding Responsive vs Adaptive Grids, Web Design Fundamentals, Mobile App UI Design Best Practices, Live Exercise: Creating Responsive Landing Page in Figma'
      ]
    },
    {
      title: 'Month 3: Portfolio, Career & Job Readiness',
      description: 'Build your portfolio, prepare for interviews, and become job-ready',
      duration: '4 weeks',
      topics: [
        'Week 9: Micro-Interactions & Advanced Prototyping - Micro-Interactions & UI Animations in Figma, Smart Animate, Conditional Logic & Variants, No-Code MVPs with bolt.new (prompt, run, edit, deploy), Live Prototyping Workshop: From user flow to working MVP',
        'Week 10: Portfolio Building & Personal Branding - How to Build a Portfolio That Gets Hired, Dribbble, Behance & LinkedIn Profile Optimization, Writing Engaging UX Case Studies Using AI, Portfolio Review & Feedback Session',
        'Week 11: Interview Prep & Resume Building - Resume Optimization for UI/UX Jobs, LinkedIn All-Star Profile Strategy, Mock Interviews & Common UI/UX Interview Questions, Adobe Exam Overview & Mock Questions',
        'Week 12: Final Interviews & Soft Skills Training - Intensive Mock Interviews (Hiring Manager Simulation), Soft Skills, Communication & Team Collaboration, Adobe Exam Final Assessment & Career Roadmap'
      ]
    }
  ],
  weekWiseCurriculum: [
    {
      month: 1,
      title: 'Month 1: Foundations & Research',
      totalHours: 34,
      weeks: [
        {
          week: 1,
          title: 'Introduction to UI/UX & User-Centric Design',
          totalHours: 9,
          topics: [
            { topic: 'Orientation & Career Roadmap in UX', hours: 1 },
            { topic: 'What is UI/UX & Understanding its Importance', hours: 1.5 },
            { topic: 'Good UX vs Bad UX (Live Examples & Breakdown)', hours: 1.5 },
            { topic: 'AI in UX: An Introduction', hours: 1 },
            { topic: 'Tools Setup: Figma Pro, Miro, FigJam, Perplexity Pro', hours: 2 },
            { topic: 'Case Study Breakdown & Best Practices', hours: 2 }
          ]
        },
        {
          week: 2,
          title: 'User Research & Design Thinking',
          totalHours: 8,
          topics: [
            { topic: 'Introduction to Design Thinking & Problem Solving', hours: 1.5 },
            { topic: 'How to Conduct UX Research (Methods & Best Practices)', hours: 2 },
            { topic: 'Understanding Affordances, Signifiers & Mental Models', hours: 1.5 },
            { topic: 'Field Studies & User Interviews (with Ethical Guidelines)', hours: 2 },
            { topic: 'Structuring Research in Google Docs (Live Practical)', hours: 1 }
          ]
        },
        {
          week: 3,
          title: 'Prompt Engineering & Generative AI Masterclass',
          totalHours: 9,
          topics: [
            { topic: 'Effective Prompt Writing for UX Research', hours: 2 },
            { topic: 'Using Perplexity Pro for deep research (Copilot, Focus/Pro Search, file uploads)', hours: 2.5 },
            { topic: 'AI for Persona Creation, Journey Mapping & Wireframing', hours: 2 },
            { topic: 'Live AI-Based UX Design Exercise (Gemini 2.5 Flash, Perplexity Pro, Figma AI)', hours: 2.5 }
          ]
        },
        {
          week: 4,
          title: 'Information Architecture & Storyboarding',
          totalHours: 8,
          topics: [
            { topic: 'Understanding IA & Sitemap Creation', hours: 2 },
            { topic: 'Card Sorting Techniques (Live Exercise in FigJam or Miro)', hours: 2 },
            { topic: 'User Flows & Wireframing Basics (Low-Fi Wireframing in Figma)', hours: 2.5 },
            { topic: 'Storyboarding & Scenario Mapping (Miro & FigJam)', hours: 1.5 }
          ]
        }
      ]
    },
    {
      month: 2,
      title: 'Month 2: UI Design & Prototyping',
      totalHours: 46,
      weeks: [
        {
          week: 5,
          title: 'Figma Pro: Mastering UI Design',
          totalHours: 12,
          topics: [
            { topic: 'Deep Dive into Figma: Auto Layout, Components, Constraints', hours: 3 },
            { topic: 'Prototyping in Figma', hours: 2.5 },
            { topic: 'Using AI for Faster UI Wireframing & Mockups', hours: 2 },
            { topic: 'Designing Forms, Navigation, and Interaction Patterns', hours: 2.5 },
            { topic: 'Live UI Design Project Kickoff', hours: 2 }
          ]
        },
        {
          week: 6,
          title: 'Human Interface Guidelines & Material Design',
          totalHours: 12,
          topics: [
            { topic: 'iOS & iPadOS Design Guidelines (Apple HIG)', hours: 3 },
            { topic: 'Material Design Principles for Android', hours: 3 },
            { topic: 'Typography, Spacing, and Grid Systems', hours: 3 },
            { topic: 'Live UI Design Practical: Convert an iOS UI into an Android UI', hours: 3 }
          ]
        },
        {
          week: 7,
          title: 'Color Psychology, Branding & Logo Design in Figma',
          totalHours: 11,
          topics: [
            { topic: 'Color Theory & How to Pick UI Colors', hours: 2.5 },
            { topic: 'Creating a UI Color Palette & Accessibility Testing', hours: 2.5 },
            { topic: 'Logo Design & Illustration in Figma (Live Practical)', hours: 3 },
            { topic: 'Trendy UI Design Breakdown & Application in Modern Interfaces', hours: 3 }
          ]
        },
        {
          week: 8,
          title: 'Web & Mobile UI Design (Adaptive & Responsive Layouts)',
          totalHours: 11,
          topics: [
            { topic: 'Understanding Responsive vs Adaptive Grids', hours: 2 },
            { topic: 'Web Design Fundamentals', hours: 3 },
            { topic: 'Mobile App UI Design (Best Practices & Do\'s/Don\'ts)', hours: 3 },
            { topic: 'Live Design Exercise: Creating a Responsive Landing Page in Figma', hours: 3 }
          ]
        }
      ]
    },
    {
      month: 3,
      title: 'Month 3: Portfolio, Career & Job Readiness',
      totalHours: 44,
      weeks: [
        {
          week: 9,
          title: 'Micro-Interactions & Advanced Prototyping',
          totalHours: 12,
          topics: [
            { topic: 'Micro-Interactions & UI Animations in Figma', hours: 3 },
            { topic: 'Smart Animate, conditional logic, variants, and motion best practices', hours: 3 },
            { topic: 'No-Code MVPs with bolt.new: prompt, run, edit, and deploy full-stack web apps', hours: 3 },
            { topic: 'Live Prototyping Workshop: From user flow to working MVP with bolt.new handoff', hours: 3 }
          ]
        },
        {
          week: 10,
          title: 'Portfolio Building & Personal Branding',
          totalHours: 11,
          topics: [
            { topic: 'How to Build a Portfolio That Gets Hired', hours: 2.5 },
            { topic: 'Dribbble, Behance & LinkedIn Profile Optimization', hours: 2.5 },
            { topic: 'Writing Engaging UX Case Studies Using AI', hours: 3 },
            { topic: 'Portfolio Review & Feedback Session', hours: 3 }
          ]
        },
        {
          week: 11,
          title: 'Interview Prep & Resume Building',
          totalHours: 11,
          topics: [
            { topic: 'Resume Optimization for UI/UX Jobs', hours: 2.5 },
            { topic: 'LinkedIn All-Star Profile Strategy', hours: 2 },
            { topic: 'Mock Interviews & Common UI/UX Interview Questions', hours: 3.5 },
            { topic: 'Adobe Exam Overview & Mock Questions', hours: 3 }
          ]
        },
        {
          week: 12,
          title: 'Final Interviews & Soft Skills Training',
          totalHours: 10,
          topics: [
            { topic: 'Intensive Mock Interviews (Hiring Manager Simulation)', hours: 3 },
            { topic: 'Soft Skills, Communication & Team Collaboration', hours: 2.5 },
            { topic: 'Adobe Exam Final Assessment', hours: 2.5 },
            { topic: 'Career Roadmap', hours: 2 }
          ]
        }
      ]
    }
  ],
  launchOffer: {
    endDate: '2026-03-15T23:59:59', // Offer ends on March 15, 2026
    bonuses: [
      {
        title: 'The \'Complete UI/UX Designer\' Starter Kit',
        description: 'Everything you need to get started and get paid, all in one neat package. Premium Fonts, Design Templates, Contract Templates, Icons and Free AI Tools included!',
        priceInr: '14,569',
        priceUsd: '175'
      },
      {
        title: 'The \'Complete Design Systems\' Starter Kit',
        description: 'Have the results of an experienced professional, while being a Fresher! Premium Drag-and-Drop Assets and Components with pre-defined Style Guides.',
        priceInr: '4,482',
        priceUsd: '54'
      },
      {
        title: 'The \'Get-Hired-Instantly\' Interview Training',
        description: 'Impress the Interviewer before you even say a word! Intensive, Confidence Transforming Interview Training from Communications Experts.',
        priceInr: '9,257',
        priceUsd: '111'
      },
      {
        title: 'The 2x Faster \'Superior Portfolio Building\' Blueprint',
        description: 'Build a better portfolio 2x Faster with half the effort. Real-Time Expert Guidance, Premium Readymade Templates, Cheat Sheets and more!',
        priceInr: '5,681',
        priceUsd: '68'
      },
      {
        title: 'The \'Instantly Stand-Out\' Resumé Building Masterclass',
        description: 'No more worries about the competition. Personal Attention from Communication Specialists to build a Strong, Distinct Resumé that\'ll impress the Recruiter.',
        priceInr: '3,183',
        priceUsd: '38'
      },
      {
        title: 'The \'Adobe Exam Made Easy\' Shortcut',
        description: 'Ace the exam like you designed it yourself! Exclusive Access to Learning Materials that you can\'t get anywhere else.',
        priceInr: '2,965',
        priceUsd: '36'
      }
    ],
    totalValueInr: '40,137',
    totalValueUsd: '482'
  },
  tools: [
    {
      name: 'Figma Pro',
      description: 'Industry-standard design tool for UI/UX design, prototyping, and collaboration. Master auto-layout, components, and advanced prototyping.',
      category: 'Design',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'
    },
    {
      name: 'Miro',
      description: 'Collaborative whiteboard for user research, ideation, and design thinking workshops. Perfect for remote team collaboration.',
      category: 'Research',
      logo: 'https://cdn.worldvectorlogo.com/logos/miro-3.svg'
    },
    {
      name: 'FigJam',
      description: 'Figma\'s collaborative whiteboard tool for brainstorming, user journey mapping, and design workshops.',
      category: 'Research',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'
    },
    {
      name: 'Perplexity Pro',
      description: 'AI-powered research assistant for deep UX research, persona creation, and data analysis. Master Copilot and Focus modes.',
      category: 'AI',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Perplexity_AI_logo.svg'
    },
    {
      name: 'Google Docs',
      description: 'Documentation and research structuring tool for organizing user research findings and design documentation.',
      category: 'Research',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Google_Docs_logo_%282014-2020%29.svg'
    },
    {
      name: 'Gemini 2.5 Flash',
      description: 'Google\'s AI assistant integrated into design workflows for faster ideation, wireframing, and design assistance.',
      category: 'AI',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Google_Gemini_logo_2025.svg'
    },
    {
      name: 'Figma AI',
      description: 'AI-powered features in Figma for rapid wireframing, mockup generation, and design iteration.',
      category: 'AI',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'
    },
    {
      name: 'bolt.new',
      description: 'No-code platform for creating working MVPs from design prompts. Build functional prototypes without coding.',
      category: 'Prototyping',
      logo: 'https://bolt.new/public-page-assets/bolt-logo.svg'
    },
    {
      name: 'Adobe Illustrator',
      description: 'Industry-standard vector graphics software for creating logos, icons, illustrations, and brand assets. Essential for UI/UX designers working with custom graphics and Adobe certification.',
      category: 'Design',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg'
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
    'You\'re looking for shortcuts or instant certificates',
    'You don\'t want feedback or iteration',
    'You\'re not willing to practice and improve weekly'
  ],
  careerRoles: [
    'UI Designer',
    'UX Designer',
    'Product Designer (Junior / Associate)',
    'UX Research Assistant',
    'Design Intern (high-confidence, portfolio-ready)',
    'Visual Designer'
  ],
  batchDates: {
    offline: {
      bengaluru: 'Mar 7, 2026' // Weekend batch start date
    },
    online: {
      global: 'Mar 7, 2026' // Same as weekend batch
    }
  },
  upcomingBatch: {
    startDate: 'Mar 7, 2026'
  },
  outcomeTransformation: [
    'Think like a UX designer—understand user needs and design solutions that solve real problems',
    'Master UI craft—create beautiful, functional interfaces with confidence',
    'Build a portfolio with 4-5 real-world projects that showcase your skills',
    'Feel portfolio-ready—present your work professionally and handle design critiques',
    'Gain career confidence—know you have the skills to start applying for design roles',
    'Develop design thinking skills—approach problems systematically with user-centered solutions'
  ],
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
      question: 'What will I learn in this UI/UX course?',
      answer: 'You\'ll learn the fundamentals of user experience and user interface design, from user research to prototyping and final visual design presentation on Behance and Medium. The course covers design thinking, Figma mastery, user research, wireframing, prototyping, and building a professional portfolio.'
    },
    {
      question: 'Do I need any prior design experience?',
      answer: 'No prior design experience is required. Our UI/UX Design Pro course is designed for complete beginners. We start from the fundamentals and gradually build up to advanced concepts.'
    },
    {
      question: 'Is there hands-on experience involved?',
      answer: 'Yes! Our course emphasizes practical application with real-world projects and exercises to build your portfolio. You\'ll work on 4-5 live mock projects that will form a strong portfolio to showcase to potential employers and clients.'
    },
    {
      question: 'What tools will I learn?',
      answer: 'You\'ll master industry-standard tools including Figma (primary), Adobe Illustrator, prototyping tools, and design collaboration platforms. We also cover design system tools and handoff processes. We\'ll explore tools such as Figma, ProtoPie, AfterEffects and ChatGPT among others.'
    },
    {
      question: 'Who are the mentors?',
      answer: 'Our mentors are industry professionals with years of experience in UI/UX, passionate about sharing their knowledge. They provide personalized mentorship and industry insights both during the course and even on the job.'
    },
    {
      question: 'Will I have a portfolio by the end of this course?',
      answer: 'Definitely! Throughout the course, you\'ll work on live mock projects that will form a strong portfolio to showcase to potential employers and clients. These projects include mobile apps, web applications, and design systems.'
    },
    {
      question: 'What is the class schedule?',
      answer: 'Classes are conducted 3-4 times per week with flexible timing options. We offer both weekday and weekend batches. Each session is 2-3 hours long with breaks. We also provide recorded videos for students who cannot attend live sessions, and students can reach out to their mentors once a week live for clarifications and feedback.'
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
      question: 'What\'s the difference between this course and other UI/UX courses?',
      answer: 'Our course emphasizes practical experience with personalized mentorship providing industry insights, and a holistic approach to UX/UI design both during the course and even on the job which sets us apart. We maintain small batch sizes, offer lifetime access to resources, and have a 95% placement rate.'
    },
    {
      question: 'Will I get a certificate?',
      answer: 'Yes, you\'ll receive an Adobe Certified certificate upon successful completion of the course, along with a portfolio of real-world projects.'
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
        name: 'UI/UX Design Pro',
        item: 'https://designient.com/ui-ux-design-pro'
      }
    ]
  }

  return (
    <QuickApplyProvider>
      <div className="min-h-screen bg-white font-sans text-slate-900">
        <StructuredData data={breadcrumbSchema} />
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
        <ProCourseFAQSchema />
        <Header />
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
            batchFull={false}
            courseSlug="ui-ux-design-pro"
            courseName={courseData.title}
          />
          <FloatingApplyButton courseSlug="ui-ux-design-pro" courseName={courseData.title} />
          <OutcomeTransformationSection
            outcomes={courseData.outcomeTransformation}
            duration="3 months"
            description="From beginner to job-ready designer—here's your transformation journey."
          />
          <CareerOutcomesSection roles={courseData.careerRoles} />
          <CourseOverview
            description={courseData.description}
            keyFeatures={courseData.keyFeatures}
            learningOutcomes={courseData.learningOutcomes}
            careerPaths={courseData.careerPaths}
          />
          <p
            className="font-body text-center max-w-3xl mx-auto px-4 md:px-6 lg:px-8 mb-8 leading-relaxed"
            style={{
              color: '#6b7280',
              fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
              lineHeight: '1.8'
            }}>
            This UI/UX Design Pro course is built for beginners, career switchers, and professionals who want to build strong foundations in user experience and interface design. The program focuses on practical skills, real-world projects, and portfolio building — so you're ready for UI/UX roles in today's job market.
          </p>
          <CourseCurriculum
            weekWiseCurriculum={courseData.weekWiseCurriculum}
            totalHours={courseData.hours}
          />
          <PortfolioDeliverablesSection />
          <ToolsCoveredSection
            tools={courseData.tools}
            title="Tools You'll Master"
            description="Industry-standard tools used by professional designers worldwide. Master the tools that get you hired."
          />
          <ExperienceAuthoritySection />
          <CourseWhoShouldTake
            description={courseData.whoShouldTake}
            idealFor={courseData.idealFor}
            notFor={courseData.notFor}
          />
          <MentorCredibilitySection />
          <SocialProofSection />
          <AIIntegratedWorkflowSection />
          <CoursePricing
            courseSlug="ui-ux-design-pro"
            features={courseData.pricingFeatures}
            duration={courseData.duration}
            batchDates={courseData.batchDates}
            batchFull={false}
          />
          <LaunchOfferSection
            endDate={courseData.launchOffer.endDate}
            bonuses={courseData.launchOffer.bonuses}
            totalValueInr={courseData.launchOffer.totalValueInr}
            totalValueUsd={courseData.launchOffer.totalValueUsd}
          />
          <PaymentOptions
            courseSlug="ui-ux-design-pro"
            courseType="long"
          />
          <TrustBadges />
          <PlacementAssistanceSection />
          <CityLocationsSection />
          <MidPageCTA courseSlug="ui-ux-design-pro" courseName={courseData.title} />
          <CourseApplicationForm courseSlug="ui-ux-design-pro" courseName={courseData.title} />
          <LearningExperienceSection />
          <CourseFAQ faqs={courseData.faqs} disableSchema={true} />
          <CourseCTA
            courseName={courseData.title}
            courseSlug="ui-ux-design-pro"
            ctaText="Ready to Start Your Design Career?"
            secondaryText="Join 200+ students who have transformed their careers with our UI/UX Design Pro course."
          />
        </main>
        <Footer />
      </div>
    </QuickApplyProvider>
  )
}
