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
import { aiAcceleratorHero } from '../../data/aiAutomationAcceleratorPageData'
import { StructuredData } from '../../components/StructuredData'

export const metadata: Metadata = {
 title: 'AI Automation Accelerator | 8 Weeks | Designient',
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
 title: 'AI Automation Accelerator | 8 Weeks | Designient',
 description:
 'Build 3 deployed AI automations in 8 weeks. n8n, Make, ManyChat, Relevance AI. No coding required.',
 url: 'https://designient.com/ai-automation-accelerator',
 type: 'website',
 },
 twitter: {
 card: 'summary_large_image',
 title: 'AI Automation Accelerator | 8 Weeks | Designient',
 description: 'Build 3 deployed AI automations in 8 weeks. n8n, Make, ManyChat, Relevance AI.',
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
 'The AI Automation Accelerator is an 8-week, live-mentored programme for professionals and freelancers. Build three deployed production automations using n8n, Make, ManyChat, Relevance AI, and Claude API | no coding required.'

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
 <CoursePageShell
 structuredData={
 <>
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
 </>
 }
 >
 <AIAcceleratorUrgencyStrip />
 <AIAcceleratorHero />
 <CourseMobilePricingBar courseSlug="ai-automation-accelerator" courseName="AI Automation Accelerator" />

 <CourseLongPageLayout
 navItems={[
 { id: 'why-accelerator', label: 'Why Accelerator' },
 { id: 'what-you-build', label: 'What you build' },
 { id: 'curriculum', label: 'Curriculum' },
 { id: 'enrollment', label: 'Enrollment' },
 { id: 'faqs', label: 'FAQ' },
 ]}
 >
 <CourseSectionBand variant="neutral">
 <AIAcceleratorDemandSection />
 </CourseSectionBand>
 <AIAcceleratorWhatYouBuild />
 <div id="curriculum">
 <AIAcceleratorCurriculum />
 </div>
 <CourseSectionBand variant="blue">
 <AIAcceleratorToolchain />
 </CourseSectionBand>
 <AIAcceleratorTeamEnrollment />
 <AIAcceleratorLearningPath />
 <CourseSectionBand variant="neutral">
 <AIAcceleratorPatternInterrupt />
 </CourseSectionBand>
 <CourseSectionBand variant="pencil">
 <AIAcceleratorValueStack />
 </CourseSectionBand>
 <CourseEnrollmentInfographicSection
 courseSlug="ai-automation-accelerator"
 courseName="AI Automation Accelerator"
 features={aiAcceleratorPricingFeatures}
 duration="8 Weeks"
 batchDates={null}
 bookingNote={aiAcceleratorHero.bookingNote}
 subtitle="Build 3 deployed automations in 8 weeks. Seat confirmed on payment."
 seatNote={aiAcceleratorHero.seatNote}
 />
 <CourseSectionBand variant="green">
 <AIAcceleratorGuarantee />
 </CourseSectionBand>
 <CourseWhoShouldTake
 title="Who This Accelerator Is For"
 description="The AI Automation Accelerator is for professionals who want deployed automations on real problems | not surface-level AI tool demos."
 idealFor={aiAcceleratorIdealFor}
 notFor={aiAcceleratorNotFor}
 />
 <CourseSectionBand variant="neutral">
 <div id="faqs">
 <CourseFAQ faqs={aiAcceleratorFaqs} title="Frequently Asked Questions" />
 </div>
 </CourseSectionBand>
 </CourseLongPageLayout>

 <div className="lg:hidden h-20" aria-hidden="true" />
 </CoursePageShell>
 )
}
