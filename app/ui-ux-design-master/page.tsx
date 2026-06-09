import { CourseEnrollmentInfographicSection } from '../../components/course/CourseEnrollmentInfographicSection'
import { CourseFAQ } from '../../components/course/CourseFAQ'
import { masterEmiConfig, masterHero } from '../../data/masterPageData'
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
 MasterAdvancedSection,
 MasterAiDistinction,
 MasterCurriculum,
 MasterGuarantee,
 MasterHero,
 MasterLearningPath,
 MasterPatternInterrupt,
 MasterToolchain,
 MasterPlacementNote,
 MasterUrgencyStrip,
 MasterValueStack,
 MasterWhatYouBuild,
} from '../../components/course/master/MasterPageSections'
import { masterFaqs, masterIdealFor, masterNotFor, masterPricingFeatures } from '../../data/masterPageData'
import { StructuredData } from '../../components/StructuredData'
import type { Metadata } from 'next'

export const metadata: Metadata = {
 title: 'UI UX Design Master Course | 6 Months, Diploma | Designient',
 description:
 'Advanced 6-month UI/UX design course. Diploma certification, AI product strategy, real client projects, design leadership modules. For designers with experience.',
 keywords: [
 'UI UX design master course',
 'advanced UI UX design course India',
 'UI UX design master program India',
 'senior UI UX designer course',
 'UI UX design diploma India',
 'UI UX design 6 month course India',
 'best advanced UI UX design course India 2026',
 ],
 openGraph: {
 title: 'UI UX Design Master Course | 6 Months, Diploma | Designient',
 description:
 'Advanced 6-month UI/UX design course. Diploma certification, AI product strategy, real client projects, design leadership modules. For designers with experience.',
 url: 'https://designient.com/ui-ux-design-master',
 type: 'website',
 },
 twitter: {
 card: 'summary_large_image',
 title: 'UI UX Design Master Course | 6 Months, Diploma | Designient',
 description:
 'Advanced 6-month UI/UX design course. Diploma certification, AI product strategy, real client projects, design leadership modules.',
 },
 alternates: {
 canonical: 'https://designient.com/ui-ux-design-master',
 },
 robots: {
 index: true,
 follow: true,
 },
}

const courseDescription =
 'UI UX Design Master is a 6-month advanced course for experienced designers. 200+ hours, six specialisation modules, two real client projects, AI product strategy, design leadership, and diploma certification | from competent designer to senior, lead, or principal level.'

export default function UIUXDesignMasterPage() {
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
 name: 'UI UX Design Master',
 item: 'https://designient.com/ui-ux-design-master',
 },
 ],
 }

 return (
 <CoursePageShell
 structuredData={
 <>
 <StructuredData data={breadcrumbSchema} />
 <CourseStructuredData
 courseSlug="ui-ux-design-master"
 courseName="UI UX Design Master"
 description={courseDescription}
 courseCode="UIUX-MASTER-2026"
 educationalLevel="Advanced"
 timeRequired="P6M"
 coursePrerequisites="1 year of professional design experience or completion of UI UX Design Pro."
 teaches={[
 'Advanced design systems and DesignOps',
 'UX research and strategy at scale',
 'Real client project delivery',
 'AI product strategy overview',
 'Design leadership and stakeholder management',
 'Capstone portfolio development',
 ]}
 ratingValue="0"
 reviewCount="0"
 hideRating
 duration="P6M"
 totalTime="PT200H"
 url="https://designient.com/ui-ux-design-master"
 learningObjectives={[
 'Build enterprise-grade design systems with governance models',
 'Lead UX research and measurement frameworks',
 'Deliver two real client projects end-to-end',
 'Spec AI product strategy at overview level',
 'Facilitate design critiques and stakeholder presentations',
 'Complete capstone and earn diploma certification',
 ]}
 outcome="Senior, lead, or principal-level designer with diploma and advanced portfolio"
 audience={['Experienced designers', 'Pro course graduates', 'Designers targeting senior roles']}
 educationalCredentialAwarded="Designient UI UX Design Master Diploma"
 />
 </>
 }
 >
 <MasterUrgencyStrip />
 <MasterHero />
 <CourseMobilePricingBar courseSlug="ui-ux-design-master" courseName="UI UX Design Master" />
 <CourseLongPageLayout
 navItems={[
 { id: 'why-master', label: 'Why Master' },
 { id: 'what-you-build', label: 'What you build' },
 { id: 'curriculum', label: 'Curriculum' },
 { id: 'enrollment', label: 'Enrollment' },
 { id: 'faqs', label: 'FAQ' },
 ]}
 >
 <CourseSectionBand variant="neutral">
 <MasterAdvancedSection />
 </CourseSectionBand>
 <MasterWhatYouBuild />
 <div id="curriculum">
 <MasterCurriculum />
 </div>
 <CourseSectionBand variant="blue">
 <MasterToolchain />
 </CourseSectionBand>
 <MasterLearningPath />
 <CourseSectionBand variant="blue">
 <MasterAiDistinction />
 </CourseSectionBand>
 <CourseSectionBand variant="neutral">
 <MasterPatternInterrupt />
 </CourseSectionBand>
 <CourseSectionBand variant="pencil">
 <MasterValueStack />
 </CourseSectionBand>
 <CourseEnrollmentInfographicSection
 courseSlug="ui-ux-design-master"
 courseName="UI UX Design Master"
 features={masterPricingFeatures}
 duration="6 Months"
 emiConfig={masterEmiConfig}
 batchDates={null}
 bookingNote={masterHero.bookingNote}
 />
 <CourseSectionBand variant="green">
 <MasterGuarantee />
 <MasterPlacementNote />
 </CourseSectionBand>
 <CourseWhoShouldTake
 title="Who This Course Is For"
 description="UI UX Design Master is for designers who can already execute | and want the strategic depth, systems thinking, and leadership capability senior roles require."
 idealFor={masterIdealFor}
 notFor={masterNotFor}
 />
 <CityLocationsSection />
 <CourseSectionBand variant="neutral">
 <div id="faqs">
 <CourseFAQ faqs={masterFaqs} title="Frequently Asked Questions" />
 </div>
 </CourseSectionBand>
 </CourseLongPageLayout>
 <div className="lg:hidden h-20" aria-hidden="true" />
 </CoursePageShell>
 )
}
