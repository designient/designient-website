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
  BootcampBonusStack,
  BootcampComparison,
  BootcampGuarantee,
  BootcampHero,
  BootcampLearningPath,
  BootcampPatternInterrupt,
  BootcampSchedule,
  BootcampToolchain,
  BootcampUrgencyStrip,
  BootcampValueStack,
  BootcampWhatYouBuild,
} from '../../components/course/bootcamp/BootcampPageSections'
import { bootcampFaqs, bootcampIdealFor, bootcampNotFor, bootcampPricingFeatures } from '../../data/bootcampPageData'
import { StructuredData } from '../../components/StructuredData'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UI UX Design Bootcamp — 3 Days, AI Tools | Designient',
  description:
    'Build a real UI/UX portfolio in one weekend. Research, Figma design, Bolt prototype, case study, certificate. Rs 1,999 early bird. Beginner-friendly.',
  keywords: [
    'UI UX design bootcamp',
    'UI UX design bootcamp India',
    'UI UX design course for beginners',
    '3 day UI UX design course',
    'beginner UI UX design course India',
    'learn UI UX design in one weekend',
    'UI UX design bootcamp with Figma',
    'online UI UX design bootcamp',
  ],
  openGraph: {
    title: 'UI UX Design Bootcamp — 3 Days, AI Tools | Designient',
    description:
      'Build a real UI/UX portfolio in one weekend. Research, Figma design, Bolt prototype, case study, certificate. Rs 1,999 early bird. Beginner-friendly.',
    url: 'https://designient.com/ui-ux-design-bootcamp',
    images: [
      {
        url: '/favicon-designient.png',
        width: 192,
        height: 192,
        alt: 'UI UX Design Bootcamp — 3 days with AI tools | Designient',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UI UX Design Bootcamp — 3 Days, AI Tools | Designient',
    description:
      'Build a real UI/UX portfolio in one weekend. Research, Figma design, Bolt prototype, case study, certificate. Rs 1,999 early bird.',
    images: ['/favicon-designient.png'],
  },
  alternates: {
    canonical: 'https://designient.com/ui-ux-design-bootcamp',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const courseDescription =
  'A 3-day UI UX design bootcamp for complete beginners. Build five portfolio artefacts in one weekend — research brief, Figma design, Bolt prototype, case study, and certificate — using Perplexity, Claude, FigJam AI, Figma, and Bolt in a live cohort.'

export default function UIUXDesignBootcampPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://designient.com' },
      { '@type': 'ListItem', position: 2, name: 'Courses', item: 'https://designient.com/courses' },
      { '@type': 'ListItem', position: 3, name: 'Design Track', item: 'https://designient.com/courses' },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'UI UX Design Bootcamp',
        item: 'https://designient.com/ui-ux-design-bootcamp',
      },
    ],
  }

  return (
    <div className="min-h-screen bg-base font-sans text-primary">
      <StructuredData data={breadcrumbSchema} />
      <CourseStructuredData
        courseSlug="ui-ux-design-bootcamp"
        courseName="UI UX Design Bootcamp"
        description={courseDescription}
        courseCode="UIUX-BOOTCAMP-2026"
        educationalLevel="Beginner"
        timeRequired="PT18H"
        coursePrerequisites="No prior design or software experience required."
        teaches={[
          'User research with Perplexity and Claude',
          'Figma visual design and Figma Make wireframing',
          'FigJam AI journey mapping',
          'Bolt functional prototyping',
          'Case study writing',
          'Prompt chain documentation',
        ]}
        ratingValue="0"
        reviewCount="0"
        hideRating
        duration="P3D"
        totalTime="PT18H"
        url="https://designient.com/ui-ux-design-bootcamp"
        learningObjectives={[
          'Build a research brief from a real design problem',
          'Produce a Figma file with IA, user flow, and polished screens',
          'Deploy a functional Bolt prototype',
          'Write a structured design case study',
          'Document AI prompt workflows for portfolio presentation',
        ]}
        outcome="Five portfolio artefacts and a Designient certificate in 3 days"
        audience={['Complete beginners', 'Career switchers', 'Fresh graduates', 'Working professionals testing design']}
        educationalCredentialAwarded="Designient UI UX Design Bootcamp Certificate"
      />
      <Header />
      <QuickApplyProvider>
        <main id="main-content" role="main">
          <BootcampUrgencyStrip />
          <BootcampHero />
          <FloatingApplyButton courseSlug="ui-ux-design-bootcamp" courseName="UI UX Design Bootcamp" />
          <BootcampWhatYouBuild />
          <BootcampPatternInterrupt />
          <BootcampSchedule />
          <BootcampToolchain />
          <BootcampLearningPath />
          <BootcampBonusStack />
          <BootcampValueStack />
          <CoursePricing
            courseSlug="ui-ux-design-bootcamp"
            features={bootcampPricingFeatures}
            duration="3 Days"
            batchDates={null}
            batchFull={false}
            ctaText="Claim My Seat"
            ctaLink="/apply-now"
          />
          <PaymentOptions courseSlug="ui-ux-design-bootcamp" courseType="short" />
          <BootcampGuarantee />
          <CourseWhoShouldTake
            title="Who This Bootcamp Is For"
            description="This bootcamp is built for people with no design background who want to ship a real portfolio piece in one weekend — or confirm design is the right path before committing to Pro."
            idealFor={bootcampIdealFor}
            notFor={bootcampNotFor}
          />
          <BootcampComparison />
          <CourseApplicationForm courseSlug="ui-ux-design-bootcamp" courseName="UI UX Design Bootcamp" />
          <CourseFAQ faqs={bootcampFaqs} title="Frequently Asked Questions" />
          <CourseCTA
            courseName="UI UX Design Bootcamp"
            courseSlug="ui-ux-design-bootcamp"
            ctaText="Claim Your Seat in the UI UX Design Bootcamp"
            secondaryText="One weekend. Five portfolio artefacts. The fastest way to prove to yourself — and to an employer — that you can design. 50 early bird seats at Rs 1,999 · Standard at Rs 5,000 · International at USD 49. Full refund if you do not ship by Sunday 7pm."
          />
        </main>
        <Footer />
      </QuickApplyProvider>
    </div>
  )
}
