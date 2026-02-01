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
import { AIInProfessionalWorkflowSection } from '../../components/course/AIInProfessionalWorkflowSection'
import { MidPageCTA } from '../../components/course/MidPageCTA'
import { PaymentOptions } from '../../components/course/PaymentOptions'
import { CourseApplicationForm } from '../../components/course/CourseApplicationForm'
import { TrustBadges } from '../../components/course/TrustBadges'
import { ToolsCoveredSection } from '../../components/course/ToolsCoveredSection'
import { StructuredData } from '../../components/StructuredData'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prompt Engineering Mastery Course - AI Tools Training | Designient',
  description: 'Master prompt engineering for AI tools. 30-day course covering ChatGPT, Midjourney, DALL-E, and more. Learn to create effective prompts for creative, technical, and business applications. 88% placement rate.',
  keywords: ['prompt engineering course', 'AI tools training', 'ChatGPT course', 'Midjourney training', 'AI prompt course', 'AI skills training'],
  openGraph: {
    title: 'Prompt Engineering Mastery Course - AI Tools Training | Designient',
    description: 'Master AI tools and prompt engineering. ChatGPT, Midjourney, DALL-E training. 30 days, 40 hours.',
    url: 'https://designient.com/prompt-engineering-mastery',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Prompt Engineering Mastery Course - Designient',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prompt Engineering Mastery Course - AI Tools Training | Designient',
    description: 'Master AI tools and prompt engineering. ChatGPT, Midjourney, DALL-E training. 30 days, 40 hours.',
    images: ['/og-image.webp'],
  },
  alternates: {
    canonical: 'https://designient.com/prompt-engineering-mastery',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const courseData = {
  title: 'Prompt Engineering Mastery',
  subtitle: 'Master the art of prompt engineering for AI tools. Learn to create effective prompts for ChatGPT, Midjourney, and other AI platforms.',
  duration: '30 Days',
  hours: '40 Hours',
  format: 'Online',
  level: 'All Levels',
  rating: '4.6',
  students: '80+',
  badge: 'AI Specialized',
  description: 'Our Prompt Engineering Mastery course is a comprehensive 30-day program designed to teach you how to effectively communicate with AI tools. Whether you\'re a designer, developer, marketer, writer, or entrepreneur, this course will teach you to create powerful prompts that get the best results from ChatGPT, Midjourney, DALL-E, and other AI platforms. Learn to leverage AI as a productivity multiplier.',
  keyFeatures: [
    '30-day comprehensive program',
    '40 hours of hands-on training',
    'Multiple AI platforms covered',
    'Real-world project applications',
    '88% placement assistance',
    'Prompt library and templates',
    'Industry use cases',
    'Certificate of completion'
  ],
  learningOutcomes: [
    'Master ChatGPT prompt engineering',
    'Create effective Midjourney prompts',
    'Optimize DALL-E image generation',
    'Build prompt libraries and templates',
    'Apply AI to real-world projects',
    'Understand AI tool capabilities',
    'Develop prompt optimization strategies',
    'Create AI-assisted workflows'
  ],
  careerPaths: [
    'AI Prompt Engineer',
    'AI Content Creator',
    'AI-Assisted Designer',
    'AI Product Manager',
    'AI Consultant',
    'Freelance AI Specialist'
  ],
  modules: [
    {
      title: 'Week 1: Foundations of Prompt Engineering',
      description: 'Understand AI tools and basic prompt structures',
      duration: '1 week',
      topics: [
        'Introduction to AI and prompt engineering',
        'Understanding ChatGPT, Midjourney, and other AI tools',
        'Basic prompt structures and patterns',
        'Best practices for effective prompts',
        'Common prompt mistakes to avoid',
        'AI tool comparison and selection'
      ]
    },
    {
      title: 'Week 2: Advanced Prompting Techniques',
      description: 'Master advanced techniques for better results',
      duration: '1 week',
      topics: [
        'Chain-of-thought prompting',
        'Few-shot learning prompts',
        'Role-based prompting',
        'Context and persona development',
        'Prompt optimization strategies',
        'Iterative prompt refinement'
      ]
    },
    {
      title: 'Week 3: Specialized Applications',
      description: 'Apply prompts to specific use cases',
      duration: '1 week',
      topics: [
        'Creative writing prompts',
        'Code generation prompts',
        'Image generation prompts (Midjourney, DALL-E)',
        'Data analysis prompts',
        'Business and marketing prompts',
        'Design and UX prompts'
      ]
    },
    {
      title: 'Week 4: Mastery & Portfolio',
      description: 'Build your prompt portfolio and master complex scenarios',
      duration: '1 week',
      topics: [
        'Complex multi-step prompts',
        'Prompt libraries and templates',
        'Building your prompt portfolio',
        'Real-world project applications',
        'Career opportunities in AI',
        'Staying updated with AI trends'
      ]
    }
  ],
  whoShouldTake: 'Perfect for anyone looking to master AI tools and prompt engineering. Whether you\'re a designer, developer, marketer, writer, or entrepreneur, this course will teach you how to effectively communicate with AI to get the best results.',
  idealFor: [
    'Designers wanting to leverage AI tools',
    'Developers using AI for coding assistance',
    'Marketers creating AI-generated content',
    'Writers using AI for creative assistance',
    'Entrepreneurs automating workflows',
    'Professionals seeking AI skills',
    'Anyone curious about AI capabilities'
  ],
  notFor: [
    'Those seeking deep AI/ML technical knowledge',
    'People not interested in practical AI applications',
    'Those expecting to become AI researchers'
  ],
  batchDates: {
    online: {
      global: 'Mar 12, 2026',
      schedule: {
        days: 'Monday - Friday',
        time: '8:00 PM - 10:00 PM',
        type: 'Evening'
      }
    }
  },
  upcomingBatch: {
    startDate: 'Mar 12, 2026'
  },
  tools: [
    {
      name: 'ChatGPT',
      description: 'Master prompt engineering for OpenAI\'s ChatGPT. Learn to create effective prompts for content creation, coding assistance, and problem-solving.',
      category: 'AI Text',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg'
    },
    {
      name: 'Midjourney',
      description: 'Learn advanced prompt techniques for generating stunning images and artwork. Master style, composition, and creative control.',
      category: 'AI Image',
      logo: 'https://www.midjourney.com/apple-touch-icon.png'
    },
    {
      name: 'DALL-E',
      description: 'OpenAI\'s image generation tool. Learn to create precise, detailed images through effective prompt engineering.',
      category: 'AI Image',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg'
    },
    {
      name: 'Claude',
      description: 'Anthropic\'s AI assistant. Master prompt engineering for research, analysis, and complex reasoning tasks.',
      category: 'AI Text',
      logo: 'https://www.anthropic.com/images/claude-logo.svg'
    },
    {
      name: 'Perplexity AI',
      description: 'AI-powered research assistant. Learn to use advanced search and research prompts for deep information gathering.',
      category: 'AI Research',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Perplexity_AI_logo.svg'
    },
    {
      name: 'Gemini',
      description: 'Google\'s AI assistant. Master prompts for creative tasks, coding, and multimodal interactions.',
      category: 'AI Text',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
    },
    {
      name: 'Stable Diffusion',
      description: 'Open-source image generation. Learn prompt engineering for fine-tuned control over image generation.',
      category: 'AI Image',
      logo: 'https://stability.ai/favicon-32x32.png'
    },
    {
      name: 'AI Integration Tools',
      description: 'Tools and platforms for integrating AI into workflows, including APIs, automation, and custom AI solutions.',
      category: 'Integration',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg'
    }
  ],
  outcomeTransformation: [
    'Master prompt engineering for ChatGPT, Midjourney, DALL-E, and other AI platforms',
    'Create effective prompts that generate high-quality results consistently',
    'Build a comprehensive prompt library and template collection',
    'Apply AI tools to real-world projects across multiple domains',
    'Develop AI-assisted workflows that enhance productivity',
    'Feel confident using AI as a powerful tool in your professional toolkit',
    'Optimize prompts for efficiency and cost-effectiveness in production environments'
  ],
  weekWiseCurriculum: [
    {
      month: 1,
      title: '30-Day Prompt Engineering Mastery',
      totalHours: 40,
      weeks: [
        {
          week: 1,
          title: 'Foundations of Prompt Engineering',
          totalHours: 10,
          topics: [
            { topic: 'Introduction to AI and prompt engineering', hours: 2 },
            { topic: 'Understanding ChatGPT, Midjourney, and other AI tools', hours: 2.5 },
            { topic: 'Basic prompt structures and patterns', hours: 2 },
            { topic: 'Best practices for effective prompts', hours: 2 },
            { topic: 'Common prompt mistakes to avoid', hours: 1 },
            { topic: 'AI tool comparison and selection', hours: 0.5 }
          ]
        },
        {
          week: 2,
          title: 'Advanced Prompting Techniques',
          totalHours: 10,
          topics: [
            { topic: 'Chain-of-thought prompting', hours: 2 },
            { topic: 'Few-shot learning prompts', hours: 2 },
            { topic: 'Role-based prompting', hours: 1.5 },
            { topic: 'Context and persona development', hours: 2 },
            { topic: 'Prompt optimization strategies', hours: 1.5 },
            { topic: 'Iterative prompt refinement', hours: 1 }
          ]
        },
        {
          week: 3,
          title: 'Specialized Applications',
          totalHours: 10,
          topics: [
            { topic: 'Creative writing prompts', hours: 1.5 },
            { topic: 'Code generation prompts', hours: 2 },
            { topic: 'Image generation prompts (Midjourney, DALL-E)', hours: 2.5 },
            { topic: 'Data analysis prompts', hours: 1.5 },
            { topic: 'Business and marketing prompts', hours: 1.5 },
            { topic: 'Design and UX prompts', hours: 1 }
          ]
        },
        {
          week: 4,
          title: 'Mastery & Portfolio',
          totalHours: 10,
          topics: [
            { topic: 'Complex multi-step prompts', hours: 2.5 },
            { topic: 'Prompt libraries and templates', hours: 2 },
            { topic: 'Building your prompt portfolio', hours: 2 },
            { topic: 'Real-world project applications', hours: 2 },
            { topic: 'Career opportunities in AI', hours: 1 },
            { topic: 'Staying updated with AI trends', hours: 0.5 }
          ]
        }
      ]
    }
  ],
  pricingFeatures: [
    'Complete 30-day curriculum',
    '40 hours of live training',
    'Access to multiple AI tools',
    'Prompt library and templates',
    'Real-world projects',
    'Certificate of completion',
    'Placement assistance',
    'Lifetime community access'
  ],
  faqs: [
    {
      question: 'Do I need prior AI experience?',
      answer: 'No prior AI experience is required. This course is designed for all levels, from complete beginners to those with some AI exposure.'
    },
    {
      question: 'Which AI tools will I learn?',
      answer: 'You\'ll learn prompt engineering for ChatGPT, Midjourney, DALL-E, Claude, and other popular AI platforms. We cover both text and image generation tools.'
    },
    {
      question: 'Is this course only for designers?',
      answer: 'Not at all! This course is valuable for designers, developers, marketers, writers, entrepreneurs, and anyone who wants to leverage AI tools effectively.'
    },
    {
      question: 'Will I get access to AI tools?',
      answer: 'We provide guidance on accessing and using various AI tools. Some tools have free tiers, while others may require subscriptions (which we\'ll help you set up).'
    },
    {
      question: 'What kind of projects will I work on?',
      answer: 'You\'ll work on diverse projects including content creation, image generation, code assistance, data analysis, and business automation - all using AI prompts.'
    },
    {
      question: 'How is this different from free online tutorials?',
      answer: 'Our course provides structured learning, hands-on mentorship, real-world projects, prompt libraries, and placement assistance - all with expert guidance you won\'t find in free tutorials.'
    },
    {
      question: 'Can I use these skills professionally?',
      answer: 'Absolutely! Prompt engineering is becoming a valuable skill in many industries. You can use these skills as a freelancer, in your current job, or as a specialized AI prompt engineer.'
    },
    {
      question: 'Will AI tools replace my job?',
      answer: 'AI tools are productivity multipliers, not replacements. This course teaches you to use AI effectively to enhance your work, not replace it. Those who master AI tools will have a competitive advantage.'
    }
  ]
}

export default function PromptEngineeringMasteryPage() {
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
        name: 'Prompt Engineering Mastery',
        item: 'https://designient.com/prompt-engineering-mastery'
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <StructuredData data={breadcrumbSchema} />
      <CourseStructuredData
        courseSlug="prompt-engineering-mastery"
        courseName={courseData.title}
        description={courseData.description}
        courseCode="PROMPT-ENG-2026"
        educationalLevel="All Levels"
        timeRequired="P30D"
        coursePrerequisites="No prior experience required"
        teaches={[
          'Prompt Engineering',
          'ChatGPT',
          'Midjourney',
          'DALL-E',
          'AI Tools',
          'AI Content Creation',
          'AI-Assisted Workflows'
        ]}
        ratingValue="4.6"
        reviewCount="80"
        duration="P30D"
        totalTime="PT40H"
        url="https://designient.com/prompt-engineering-mastery"
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
            batchFull={false}
            courseSlug="prompt-engineering-mastery"
            courseName={courseData.title}
          />
          <FloatingApplyButton courseSlug="prompt-engineering-mastery" courseName={courseData.title} />
          <OutcomeTransformationSection
            outcomes={courseData.outcomeTransformation}
            duration="30 days"
            description="Master AI tools and transform how you work—here's what you'll achieve in 30 days."
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
            title="AI Tools You'll Master"
            description="Master prompt engineering for the most popular AI platforms used by professionals worldwide."
          />
          <ExperienceAuthoritySection />
          <CourseWhoShouldTake
            description={courseData.whoShouldTake}
            idealFor={courseData.idealFor}
            notFor={courseData.notFor}
          />
          <AIInProfessionalWorkflowSection />
          <CoursePricing
            courseSlug="prompt-engineering-mastery"
            features={courseData.pricingFeatures}
            duration={courseData.duration}
            batchDates={courseData.batchDates}
            batchFull={false}
          />
          <PaymentOptions
            courseSlug="prompt-engineering-mastery"
            courseType="short"
          />
          <TrustBadges />
          <MidPageCTA courseSlug="prompt-engineering-mastery" courseName={courseData.title} />
          <CourseApplicationForm courseSlug="prompt-engineering-mastery" courseName={courseData.title} />
          <CourseFAQ faqs={courseData.faqs} />
          <CourseCTA
            courseName={courseData.title}
            courseSlug="prompt-engineering-mastery"
            ctaText="Ready to Master AI Tools?"
            secondaryText="Join 80+ professionals who have enhanced their productivity with AI prompt engineering."
          />
        </main>
        <Footer />
      </QuickApplyProvider>
    </div>
  )
}
