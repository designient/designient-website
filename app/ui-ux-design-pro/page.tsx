import { ProEnrollmentSection } from '../../components/course/pro/ProEnrollmentSection'
import { CourseFAQ } from '../../components/course/CourseFAQ'
import { proEmiConfig, proHero } from '../../data/proPageData'
import { CourseStructuredData } from '../../components/course/CourseStructuredData'
import { CourseWhoShouldTake } from '../../components/course/CourseWhoShouldTake'
import { CityLocationsSection } from '../../components/course/CityLocationsSection'
import {
 CoursePageShell,
 CourseSectionBand,
 CourseMobilePricingBar,
 CourseLongPageLayout,
} from '../../components/course/layout'
import {
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
 title: 'UI UX Design Pro Course | Beginner to Pro | Designient',
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
 title: 'UI UX Design Pro Course | Beginner to Pro | Designient',
 description:
 "India's most popular UI/UX design course. 10 weeks, 124 hours, live mentorship, real projects, Adobe cert, placement support.",
 url: 'https://designient.com/ui-ux-design-pro',
 type: 'website',
 },
 twitter: {
 card: 'summary_large_image',
 title: 'UI UX Design Pro Course | Beginner to Pro | Designient',
 description:
 "India's most popular UI/UX design course. 10 weeks, 124 hours, live mentorship, real projects, Adobe cert, placement support.",
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
 'UI UX Design Pro is a 10-week course for complete beginners and career switchers. 124 hours of live mentorship, real client projects, Adobe certification, AI tool fluency, and structured placement support | from zero to job-ready designer.'

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
 <CoursePageShell
 structuredData={
 <>
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
 'Figma journey mapping',
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
 </>
 }
 >
 <ProUrgencyStrip />
 <ProHero />
 <CourseMobilePricingBar courseSlug="ui-ux-design-pro" courseName="UI UX Design Pro" />

 <CourseLongPageLayout
 navItems={[
 { id: 'why-pro', label: 'Why Pro' },
 { id: 'what-you-build', label: 'What you build' },
 { id: 'curriculum', label: 'Curriculum' },
 { id: 'enrollment', label: 'Enrollment' },
 { id: 'faqs', label: 'FAQ' },
 ]}
 >
 <CourseSectionBand variant="neutral">
 <ProPopularSection />
 </CourseSectionBand>

 <ProWhatYouBuild />

 <div id="curriculum">
 <ProCurriculum />
 </div>

 <CourseSectionBand variant="blue">
 <ProToolchain />
 </CourseSectionBand>

 <ProLearningPath />

 <CourseSectionBand variant="neutral">
 <ProPatternInterrupt />
 </CourseSectionBand>

 <CourseSectionBand variant="pencil">
 <ProValueStack />
 </CourseSectionBand>

 <ProEnrollmentSection
 courseSlug="ui-ux-design-pro"
 courseName="UI UX Design Pro"
 features={proPricingFeatures}
 duration="10 Weeks"
 emiConfig={proEmiConfig}
 batchDates={null}
 bookingNote={proHero.bookingNote}
 />

 <CourseSectionBand variant="green">
 <ProGuarantee />
 <ProPlacementSection />
 </CourseSectionBand>

 <CourseWhoShouldTake
 title="Who This Course Is For"
 description="UI UX Design Pro is for people with no design background who want a structured path to a design career | or Bootcamp graduates ready to go deeper over 10 weeks."
 idealFor={proIdealFor}
 notFor={proNotFor}
 />
 <CityLocationsSection />

 <CourseSectionBand variant="neutral">
 <div id="faqs">
 <CourseFAQ faqs={proFaqs} title="Frequently Asked Questions" />
 </div>
 </CourseSectionBand>
 </CourseLongPageLayout>

 {/* Spacer for mobile pricing bar */}
 <div className="lg:hidden h-20" aria-hidden="true" />
 </CoursePageShell>
 )
}
