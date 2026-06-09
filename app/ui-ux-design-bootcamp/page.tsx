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
 title: 'UI UX Design Bootcamp | 3 Days, AI Tools | Designient',
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
 title: 'UI UX Design Bootcamp | 3 Days, AI Tools | Designient',
 description:
 'Build a real UI/UX portfolio in one weekend. Research, Figma design, Bolt prototype, case study, certificate. Rs 1,999 early bird. Beginner-friendly.',
 url: 'https://designient.com/ui-ux-design-bootcamp',
 type: 'website',
 },
 twitter: {
 card: 'summary_large_image',
 title: 'UI UX Design Bootcamp | 3 Days, AI Tools | Designient',
 description:
 'Build a real UI/UX portfolio in one weekend. Research, Figma design, Bolt prototype, case study, certificate. Rs 1,999 early bird.',
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
 'A 3-day UI UX design bootcamp for complete beginners. Build five portfolio artefacts in one weekend | research brief, Figma design, Bolt prototype, case study, and certificate | using Perplexity, Claude, Figma, and Bolt in a live cohort.'

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
 <CoursePageShell
 structuredData={
 <>
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
 'Figma journey mapping',
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
 </>
 }
 >
 <BootcampUrgencyStrip />
 <BootcampHero />
 <CourseMobilePricingBar courseSlug="ui-ux-design-bootcamp" courseName="UI UX Design Bootcamp" />

 <CourseLongPageLayout
 navItems={[
 { id: 'what-you-build', label: 'What you build' },
 { id: 'curriculum', label: 'Schedule' },
 { id: 'enrollment', label: 'Enrollment' },
 { id: 'faqs', label: 'FAQ' },
 ]}
 >
 <BootcampWhatYouBuild />
 <div id="curriculum">
 <BootcampSchedule />
 </div>
 <CourseSectionBand variant="neutral">
 <BootcampPatternInterrupt />
 </CourseSectionBand>
 <CourseSectionBand variant="blue">
 <BootcampToolchain />
 </CourseSectionBand>
 <BootcampLearningPath />
 <CourseSectionBand variant="pencil">
 <BootcampValueStack />
 </CourseSectionBand>
 <CourseEnrollmentInfographicSection
 courseSlug="ui-ux-design-bootcamp"
 courseName="UI UX Design Bootcamp"
 features={bootcampPricingFeatures}
 duration="3 Days"
 batchDates={null}
 subtitle="One weekend. Five portfolio artefacts. Seat confirmed on payment."
 />
 <CourseSectionBand variant="green">
 <BootcampGuarantee />
 </CourseSectionBand>
 <CourseWhoShouldTake
 title="Who This Bootcamp Is For"
 description="This bootcamp is built for people with no design background who want to ship a real portfolio piece in one weekend | or confirm design is the right path before committing to Pro."
 idealFor={bootcampIdealFor}
 notFor={bootcampNotFor}
 />
 <CourseSectionBand variant="neutral">
 <div id="faqs">
 <CourseFAQ faqs={bootcampFaqs} title="Frequently Asked Questions" />
 </div>
 </CourseSectionBand>
 </CourseLongPageLayout>

 <div className="lg:hidden h-20" aria-hidden="true" />
 </CoursePageShell>
 )
}
