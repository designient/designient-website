import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { QuickApplyProvider } from '../../components/course/QuickApplyContext'
import { FloatingApplyButton } from '../../components/course/FloatingApplyButton'
import { CoursePricing } from '../../components/course/CoursePricing'
import { CourseFAQ } from '../../components/course/CourseFAQ'
import { CourseCTA } from '../../components/course/CourseCTA'
import { CourseSecondaryText } from '../../components/pricing/CourseSecondaryText'
import { proEmiConfig } from '../../data/proPageData'
import { CourseStructuredData } from '../../components/course/CourseStructuredData'
import { PaymentOptions } from '../../components/course/PaymentOptions'
import { CourseApplicationForm } from '../../components/course/CourseApplicationForm'
import { CourseWhoShouldTake } from '../../components/course/CourseWhoShouldTake'
import { CityLocationsSection } from '../../components/course/CityLocationsSection'
import {
  ProBonusStack,
  ProCurriculum,
  ProGuarantee,
  ProHero,
  ProLearningPath,
  ProPatternInterrupt,
  ProPlacementSection,
  ProPopularSection,
  ProToolchain,
  ProUrgencyStrip,
  ProValueStack,
  ProWhatYouBuild,
} from '../../components/course/pro/ProPageSections'
import { proFaqs, proIdealFor, proNotFor, proPricingFeatures } from '../../data/proPageData'
import { StructuredData } from '../../components/StructuredData'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UI UX Design Pro Course — Beginner to Pro | Designient',
  description:
    "India's most popular UI/UX design course. 10 weeks, 124 hours, live mentorship, real projects, Adobe cert, placement support.",
  keywords: [
    'UI UX design course',
    'UI UX design course India',
    'UI UX design course for beginners',
    'UI UX design course with placement',
    'UI UX design Pro course',
    'best UI UX design course India 2026',
    'UI UX design course Bangalore',
    'beginner to pro UI UX design course',
  ],
  openGraph: {
    title: 'UI UX Design Pro Course — Beginner to Pro | Designient',
    description:
      "India's most popular UI/UX design course. 10 weeks, 124 hours, live mentorship, real projects, Adobe cert, placement support.",
    url: 'https://designient.com/ui-ux-design-pro',
    images: [
      {
        url: '/favicon-designient.png',
        width: 192,
        height: 192,
        alt: 'UI UX Design Pro Course — beginner to job-ready in 10 weeks | Designient',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UI UX Design Pro Course — Beginner to Pro | Designient',
    description:
      "India's most popular UI/UX design course. 10 weeks, 124 hours, live mentorship, real projects, Adobe cert, placement support.",
    images: ['/favicon-designient.png'],
  },
  alternates: {
    canonical: 'https://designient.com/ui-ux-design-pro',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const courseDescription =
  'UI UX Design Pro is a 10-week course for complete beginners and career switchers. 124 hours of live mentorship, real client projects, Adobe certification, AI tool fluency, and structured placement support — from zero to job-ready designer.'

export default function UIUXDesignProPage() {
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
        name: 'UI UX Design Pro',
        item: 'https://designient.com/ui-ux-design-pro',
      },
    ],
  }

  return (
    <QuickApplyProvider>
      <div className="min-h-screen bg-base font-sans text-primary">
        <StructuredData data={breadcrumbSchema} />
        <CourseStructuredData
          courseSlug="ui-ux-design-pro"
          courseName="UI UX Design Pro"
          description={courseDescription}
          courseCode="UIUX-PRO-2026"
          educationalLevel="Beginner to Intermediate"
          timeRequired="P10W"
          coursePrerequisites="No prior design experience required. Commitment to 10-week schedule."
          teaches={[
            'User research with Perplexity and Claude',
            'Figma design systems and prototyping',
            'FigJam AI journey mapping',
            'UX research and usability testing',
            'Real client project delivery',
            'Bolt functional prototypes',
            'Portfolio and case study writing',
            'Adobe Certified Professional preparation',
          ]}
          ratingValue="0"
          reviewCount="0"
          hideRating
          duration="P10W"
          totalTime="PT124H"
          url="https://designient.com/ui-ux-design-pro"
          learningObjectives={[
            'Build a job-ready design portfolio with real client project',
            'Master Figma design systems and responsive UI design',
            'Conduct UX research and usability testing',
            'Deploy functional Bolt prototypes',
            'Complete Adobe Certified Professional certification',
            'Activate structured placement support',
          ]}
          outcome="Job-ready UI/UX designer with portfolio, Adobe certification, and placement support"
          audience={['Complete beginners', 'Career switchers', 'Fresh graduates', 'Bootcamp graduates']}
          educationalCredentialAwarded="Adobe Certified Professional and Designient UI UX Design Pro Certificate"
        />
        <Header />
        <main id="main-content" role="main">
          <ProUrgencyStrip />
          <ProHero />
          <FloatingApplyButton courseSlug="ui-ux-design-pro" courseName="UI UX Design Pro" />
          <ProPopularSection />
          <ProPatternInterrupt />
          <ProLearningPath />
          <ProWhatYouBuild />
          <ProCurriculum />
          <ProToolchain />
          <ProPlacementSection />
          <ProBonusStack />
          <ProValueStack />
          <CoursePricing
            courseSlug="ui-ux-design-pro"
            features={proPricingFeatures}
            duration="10 Weeks"
            batchDates={null}
            batchFull={false}
            ctaText="Apply for the Course"
            ctaLink="/apply-now"
          />
          <PaymentOptions courseSlug="ui-ux-design-pro" courseType="long" />
          <ProGuarantee />
          <CourseWhoShouldTake
            title="Who This Course Is For"
            description="UI UX Design Pro is for people with no design background who want a structured path to a design career — or Bootcamp graduates ready to go deeper over 10 weeks."
            idealFor={proIdealFor}
            notFor={proNotFor}
          />
          <CityLocationsSection />
          <CourseApplicationForm courseSlug="ui-ux-design-pro" courseName="UI UX Design Pro" />
          <CourseFAQ faqs={proFaqs} title="Frequently Asked Questions" />
          <CourseCTA
            courseName="UI UX Design Pro"
            courseSlug="ui-ux-design-pro"
            ctaText="Apply for the UI UX Design Pro Course"
            secondaryText={
              <CourseSecondaryText
                slug="ui-ux-design-pro"
                lead="India's most enrolled UI/UX design course. Ten weeks, 25 students, one real client project, and a structured path to placement."
                earlyBirdSeats={5}
                emi={proEmiConfig}
                guarantee=""
              />
            }
          />
        </main>
        <Footer />
      </div>
    </QuickApplyProvider>
  )
}
