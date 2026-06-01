import type { Metadata } from 'next'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { QuickApplyProvider } from '../../components/course/QuickApplyContext'
import { FloatingApplyButton } from '../../components/course/FloatingApplyButton'
import { CoursePricing } from '../../components/course/CoursePricing'
import { CourseFAQ } from '../../components/course/CourseFAQ'
import { CourseCTA } from '../../components/course/CourseCTA'
import { CourseSecondaryText } from '../../components/pricing/CourseSecondaryText'
import { aiProductEmiConfig } from '../../data/aiProductDesignPageData'
import { CourseStructuredData } from '../../components/course/CourseStructuredData'
import { PaymentOptions } from '../../components/course/PaymentOptions'
import { CourseApplicationForm } from '../../components/course/CourseApplicationForm'
import { CourseWhoShouldTake } from '../../components/course/CourseWhoShouldTake'
import {
  AIProductBonusStack,
  AIProductCurriculum,
  AIProductEightStatesSection,
  AIProductGuarantee,
  AIProductHero,
  AIProductLearningPath,
  AIProductPatternInterrupt,
  AIProductPriceJustification,
  AIProductToolchain,
  AIProductUrgencyStrip,
  AIProductValueStack,
  AIProductWhatYouShip,
} from '../../components/course/ai-product-design/AIProductDesignPageSections'
import {
  aiProductFaqs,
  aiProductIdealFor,
  aiProductNotFor,
  aiProductPricingFeatures,
} from '../../data/aiProductDesignPageData'
import { StructuredData } from '../../components/StructuredData'

export const metadata: Metadata = {
  title: 'AI Product Design Course — By Application | Designient',
  description:
    'Design AI products — trust UI, error states, confidence design. 6 weeks. 12 seats. Application-based. For PMs, designers, and UX writers.',
  keywords: [
    'AI product design course',
    'AI UX design course India',
    'designing AI products course',
    'AI product design certification India',
    'trust UI design course',
    'AI error state design course',
    'confidence UI design',
    'hallucination UX design course',
    'AI behaviour design course',
    'AI product design course for product managers',
    'AI feature design course India',
    'UX for AI products course',
    'designing AI interfaces course',
    'AI product design with Figma and Bolt',
    'application based AI design course India',
    'best AI design course India 2026',
  ],
  openGraph: {
    title: 'AI Product Design Course — By Application | Designient',
    description:
      'Design AI products — trust UI, error states, confidence design. 6 weeks. Application-based. 12 seats per cohort.',
    url: 'https://designient.com/ai-product-design-course',
    images: [
      {
        url: '/favicon-designient.png',
        width: 192,
        height: 192,
        alt: 'AI Product Design Course — design AI behaviour and trust UI | Designient',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Product Design Course — By Application | Designient',
    description:
      'Design AI products — trust UI, error states, confidence design. 6 weeks. Application-based.',
    images: ['/favicon-designient.png'],
  },
  alternates: {
    canonical: 'https://designient.com/ai-product-design-course',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const courseDescription =
  'The AI Product Design Course is a 6-week, application-based programme for PMs, designers, and UX writers who have shipped a digital product. Learn to design all 8 AI states, build trust UI, and ship two portfolio case studies plus a functional Bolt/v0 prototype.'

export default function AIProductDesignCoursePage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://designient.com' },
      { '@type': 'ListItem', position: 2, name: 'Courses', item: 'https://designient.com/courses' },
      { '@type': 'ListItem', position: 3, name: 'AI Track', item: 'https://designient.com/courses' },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'AI Product Design Course',
        item: 'https://designient.com/ai-product-design-course',
      },
    ],
  }

  return (
    <QuickApplyProvider>
      <div className="min-h-screen bg-base font-sans text-primary">
        <StructuredData data={breadcrumbSchema} />
        <CourseStructuredData
          courseSlug="ai-product-design-course"
          courseName="AI Product Design Course"
          description={courseDescription}
          courseCode="AI-PD-2026"
          educationalLevel="Intermediate to Advanced"
          timeRequired="P6W"
          coursePrerequisites="Must have shipped at least one digital product in any role (PM, designer, engineer, or founder)."
          teaches={[
            'AI behaviour specification writing',
            'Trust UI and confidence design',
            'All 8 AI states in Figma',
            'Hallucination and error state UX',
            'Probabilistic and non-deterministic UX',
            'FigJam AI decision architecture',
            'Bolt and v0 functional AI prototypes',
            'AI product audit case studies',
          ]}
          ratingValue="0"
          reviewCount="0"
          hideRating
          duration="P6W"
          totalTime="PT67H"
          url="https://designient.com/ai-product-design-course"
          learningObjectives={[
            'Complete an AI product audit case study with redesigned trust UI',
            'Design an original AI feature across all 8 states in Figma',
            'Build a functional Bolt/v0 prototype with interactive AI states',
            'Write AI behaviour specifications and prompt chain documentation',
          ]}
          outcome="Two portfolio case studies and a functional AI feature prototype demonstrating AI product design fluency"
          audience={['Product managers', 'UX designers with 1–3 years experience', 'UX writers and content designers']}
          educationalCredentialAwarded="Designient AI Product Design Course Certificate"
        />
        <Header />
        <main id="main-content" role="main">
          <AIProductUrgencyStrip />
          <AIProductHero />
          <FloatingApplyButton courseSlug="ai-product-design-course" courseName="AI Product Design Course" />
          <AIProductPatternInterrupt />
          <AIProductPriceJustification />
          <AIProductWhatYouShip />
          <AIProductCurriculum />
          <AIProductEightStatesSection />
          <AIProductToolchain />
          <AIProductLearningPath />
          <AIProductBonusStack />
          <AIProductValueStack />
          <CoursePricing
            courseSlug="ai-product-design-course"
            features={aiProductPricingFeatures}
            duration="6 Weeks"
            batchDates={null}
            batchFull={false}
            ctaText="Apply for the Course"
            ctaLink="/apply-now"
          />
          <PaymentOptions courseSlug="ai-product-design-course" courseType="long" />
          <AIProductGuarantee />
          <CourseWhoShouldTake
            title="Who This Course Is For"
            description="The AI Product Design Course is for product people who have shipped digital work and want to specialise in designing AI-native products — not for beginners learning design from scratch."
            idealFor={aiProductIdealFor}
            notFor={aiProductNotFor}
          />
          <CourseApplicationForm courseSlug="ai-product-design-course" courseName="AI Product Design Course" />
          <CourseFAQ faqs={aiProductFaqs} title="Frequently Asked Questions" />
          <CourseCTA
            courseName="AI Product Design Course"
            courseSlug="ai-product-design-course"
            ctaText="Apply for the AI Product Design Course"
            secondaryText={
              <CourseSecondaryText
                slug="ai-product-design-course"
                lead="Six weeks. 12 students. Two portfolio artefacts that prove you can design AI products that hold user trust under pressure."
                earlyBirdSeats={5}
                emi={aiProductEmiConfig}
                guarantee="25% money-back guarantee if you do the work and the output is not there."
              />
            }
          />
        </main>
        <Footer />
      </div>
    </QuickApplyProvider>
  )
}
