import type { Metadata } from 'next'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { QuickApplyProvider } from '../../components/course/QuickApplyContext'
import { FloatingApplyButton } from '../../components/course/FloatingApplyButton'
import { CoursePricing } from '../../components/course/CoursePricing'
import { CourseFAQ } from '../../components/course/CourseFAQ'
import { CourseCTA } from '../../components/course/CourseCTA'
import { CourseStructuredData } from '../../components/course/CourseStructuredData'
import { PaymentOptions } from '../../components/course/PaymentOptions'
import { CourseApplicationForm } from '../../components/course/CourseApplicationForm'
import { CourseWhoShouldTake } from '../../components/course/CourseWhoShouldTake'
import {
  AIAcceleratorBonusStack,
  AIAcceleratorCurriculum,
  AIAcceleratorDemandSection,
  AIAcceleratorGuarantee,
  AIAcceleratorHero,
  AIAcceleratorLearningPath,
  AIAcceleratorPatternInterrupt,
  AIAcceleratorTeamEnrollment,
  AIAcceleratorToolchain,
  AIAcceleratorUrgencyStrip,
  AIAcceleratorValueStack,
  AIAcceleratorWhatYouBuild,
} from '../../components/course/ai-automation-accelerator/AIAutomationAcceleratorPageSections'
import {
  aiAcceleratorFaqs,
  aiAcceleratorIdealFor,
  aiAcceleratorNotFor,
  aiAcceleratorPricingFeatures,
} from '../../data/aiAutomationAcceleratorPageData'
import { StructuredData } from '../../components/StructuredData'

export const metadata: Metadata = {
  title: 'AI Automation Accelerator — 8 Weeks | Designient',
  description:
    'Build 3 deployed AI automations in 8 weeks. n8n, Make, ManyChat, Relevance AI. No coding required. Team enrollment available.',
  keywords: [
    'AI automation accelerator',
    'n8n course India',
    'AI workflow automation course India',
    'no-code automation course India',
    'Make automation course',
    'ManyChat WhatsApp automation course India',
    'AI automation course for professionals India',
    'Relevance AI agent builder course',
    'deploy AI automation workflow course',
    'AI automation course with portfolio India',
    'best AI automation accelerator India 2026',
    'corporate AI automation training India',
  ],
  openGraph: {
    title: 'AI Automation Accelerator — 8 Weeks | Designient',
    description:
      'Build 3 deployed AI automations in 8 weeks. n8n, Make, ManyChat, Relevance AI. No coding required.',
    url: 'https://designient.com/ai-automation-accelerator',
    images: [
      {
        url: '/favicon-designient.png',
        width: 192,
        height: 192,
        alt: 'AI Automation Accelerator — build 3 deployed AI workflows in 8 weeks | Designient',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Accelerator — 8 Weeks | Designient',
    description: 'Build 3 deployed AI automations in 8 weeks. n8n, Make, ManyChat, Relevance AI.',
    images: ['/favicon-designient.png'],
  },
  alternates: {
    canonical: 'https://designient.com/ai-automation-accelerator',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const courseDescription =
  'The AI Automation Accelerator is an 8-week, live-mentored programme for professionals and freelancers. Build three deployed production automations using n8n, Make, ManyChat, Relevance AI, and Claude API — no coding required.'

export default function AIAutomationAcceleratorPage() {
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
        name: 'AI Automation Accelerator',
        item: 'https://designient.com/ai-automation-accelerator',
      },
    ],
  }

  return (
    <QuickApplyProvider>
      <div className="min-h-screen bg-base font-sans text-primary">
        <StructuredData data={breadcrumbSchema} />
        <CourseStructuredData
          courseSlug="ai-automation-accelerator"
          courseName="AI Automation Accelerator"
          description={courseDescription}
          courseCode="AI-AA-2026"
          educationalLevel="Beginner to Intermediate"
          timeRequired="P8W"
          coursePrerequisites="No programming background required. Basic SaaS tool fluency. Bring three real recurring tasks from your work."
          teaches={[
            'n8n workflow automation',
            'Make scenario building',
            'Airtable as automation data layer',
            'Claude API in workflows',
            'ManyChat WhatsApp automation',
            'Relevance AI autonomous agents',
            'Zapier automation fundamentals',
            'Workflow documentation and ROI calculation',
          ]}
          ratingValue="0"
          reviewCount="0"
          hideRating
          duration="P8W"
          totalTime="PT76H"
          url="https://designient.com/ai-automation-accelerator"
          learningObjectives={[
            'Deploy three production automations solving real work problems',
            'Build n8n and Make workflows with conditional logic and error handling',
            'Integrate Claude API as an AI decision layer in workflows',
            'Create WhatsApp automation pipelines with ManyChat and n8n',
            'Build and orchestrate Relevance AI autonomous agents',
          ]}
          outcome="Three live deployed automations with documentation and ROI calculations"
          audience={['Operations managers', 'Marketing and sales leads', 'Founders', 'Freelancers and consultants']}
          educationalCredentialAwarded="Designient AI Automation Accelerator Certificate"
        />
        <Header />
        <main id="main-content" role="main">
          <AIAcceleratorUrgencyStrip />
          <AIAcceleratorHero />
          <FloatingApplyButton courseSlug="ai-automation-accelerator" courseName="AI Automation Accelerator" />
          <AIAcceleratorDemandSection />
          <AIAcceleratorPatternInterrupt />
          <AIAcceleratorWhatYouBuild />
          <AIAcceleratorCurriculum />
          <AIAcceleratorToolchain />
          <AIAcceleratorTeamEnrollment />
          <AIAcceleratorLearningPath />
          <AIAcceleratorBonusStack />
          <AIAcceleratorValueStack />
          <CoursePricing
            courseSlug="ai-automation-accelerator"
            features={aiAcceleratorPricingFeatures}
            duration="8 Weeks"
            batchDates={null}
            batchFull={false}
            ctaText="Claim My Seat"
            ctaLink="/apply-now"
          />
          <PaymentOptions courseSlug="ai-automation-accelerator" courseType="long" />
          <AIAcceleratorGuarantee />
          <CourseWhoShouldTake
            title="Who This Accelerator Is For"
            description="The AI Automation Accelerator is for professionals who want deployed automations on real problems — not surface-level AI tool demos."
            idealFor={aiAcceleratorIdealFor}
            notFor={aiAcceleratorNotFor}
          />
          <CourseApplicationForm courseSlug="ai-automation-accelerator" courseName="AI Automation Accelerator" />
          <CourseFAQ faqs={aiAcceleratorFaqs} title="Frequently Asked Questions" />
          <CourseCTA
            courseName="AI Automation Accelerator"
            courseSlug="ai-automation-accelerator"
            ctaText="Claim Your Seat in the AI Automation Accelerator"
            secondaryText="Eight weeks. Six tools. Three automations running live by the time it ends. 8 early bird seats at Rs 34,999 · 27 standard seats at Rs 44,999 · International at USD 449. EMI — Rs 11,666/month for 3 months (early bird) · Zero interest. 50% money-back guarantee if you do the work and still have nothing deployed."
          />
        </main>
        <Footer />
      </div>
    </QuickApplyProvider>
  )
}
