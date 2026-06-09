import type { Metadata } from 'next'
import { CourseEnrollmentInfographicSection } from '../../components/course/CourseEnrollmentInfographicSection'
import { CourseFAQ } from '../../components/course/CourseFAQ'
import { CourseStructuredData } from '../../components/course/CourseStructuredData'
import { CourseWhoShouldTake } from '../../components/course/CourseWhoShouldTake'
import {
 CoursePageShell,
 CourseSectionBand,
 CourseMobilePricingBar,
 CourseLongPageLayout,
} from '../../components/course/layout'
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
 aiProductEmiConfig,
 aiProductHero,
} from '../../data/aiProductDesignPageData'
import { StructuredData } from '../../components/StructuredData'

export const metadata: Metadata = {
 title: 'AI Product Design Course | By Application | Designient',
 description:
 'Design AI products | trust UI, error states, confidence design. 6 weeks. 12 seats. Application-based. For PMs, designers, and UX writers.',
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
 title: 'AI Product Design Course | By Application | Designient',
 description:
 'Design AI products | trust UI, error states, confidence design. 6 weeks. Application-based. 12 seats per cohort.',
 url: 'https://designient.com/ai-product-design-course',
 type: 'website',
 },
 twitter: {
 card: 'summary_large_image',
 title: 'AI Product Design Course | By Application | Designient',
 description:
 'Design AI products | trust UI, error states, confidence design. 6 weeks. Application-based.',
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
 <CoursePageShell
 structuredData={
 <>
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
 'Figma decision architecture',
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
 </>
 }
 >
 <AIProductUrgencyStrip />
 <AIProductHero />
 <CourseMobilePricingBar courseSlug="ai-product-design-course" courseName="AI Product Design Course" />

 <CourseLongPageLayout
 navItems={[
 { id: 'what-you-build', label: 'What you ship' },
 { id: 'curriculum', label: 'Curriculum' },
 { id: 'enrollment', label: 'Enrollment' },
 { id: 'faqs', label: 'FAQ' },
 ]}
 >
 <AIProductWhatYouShip />
 <div id="curriculum">
 <AIProductCurriculum />
 </div>
 <CourseSectionBand variant="blue">
 <AIProductEightStatesSection />
 <AIProductToolchain />
 </CourseSectionBand>
 <AIProductLearningPath />
 <CourseSectionBand variant="neutral">
 <AIProductPatternInterrupt />
 </CourseSectionBand>
 <AIProductPriceJustification />
 <CourseSectionBand variant="pencil">
 <AIProductBonusStack />
 <AIProductValueStack />
 </CourseSectionBand>
 <CourseEnrollmentInfographicSection
 courseSlug="ai-product-design-course"
 courseName="AI Product Design Course"
 features={aiProductPricingFeatures}
 duration="6 Weeks"
 emiConfig={aiProductEmiConfig}
 batchDates={null}
 bookingNote={aiProductHero.bookingNote}
 subtitle="Application-based. 12 seats. Two portfolio artefacts in 6 weeks."
 seatNote={aiProductHero.seatNote}
 />
 <CourseSectionBand variant="green">
 <AIProductGuarantee />
 </CourseSectionBand>
 <CourseWhoShouldTake
 title="Who This Course Is For"
 description="The AI Product Design Course is for product people who have shipped digital work and want to specialise in designing AI-native products | not for beginners learning design from scratch."
 idealFor={aiProductIdealFor}
 notFor={aiProductNotFor}
 />
 <CourseSectionBand variant="neutral">
 <div id="faqs">
 <CourseFAQ faqs={aiProductFaqs} title="Frequently Asked Questions" />
 </div>
 </CourseSectionBand>
 </CourseLongPageLayout>

 <div className="lg:hidden h-20" aria-hidden="true" />
 </CoursePageShell>
 )
}
