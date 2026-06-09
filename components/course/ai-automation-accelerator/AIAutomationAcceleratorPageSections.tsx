'use client'

import {
 CourseHeroWithSidebar,
 CourseHeroContent,
 CourseHeroBreadcrumbs,
 CourseHeroBadge,
 CourseHeroTitle,
 CourseHeroSubtitle,
 CourseHeroTrustChips,
 CourseHeroLastUpdated,
 CourseHeroStats,
 CourseHeroSeatNote,
 CourseHeroCtaRow,
 CourseHeroFootnote,
 CourseToolchainSection,
 EnrollmentActionButton,
 CourseEditorialSplit,
 CourseBentoGrid,
} from '../layout'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Shield, Zap } from 'react-feather'
import { LocalizedCourseSeatNote } from '../../pricing/LocalizedCourseHeroPricing'
import { CourseUrgencyStrip, COURSE_SLUGS } from '../../pricing/CourseUrgencyStrip'
import {
 CourseLearningPathInfographic,
 CoursePatternInterruptInfographic,
 CourseProofSectionInfographic,
 CourseStackInfographic,
 CourseWhatYouBuildInfographic,
} from '../infographics'
import { fadeUp } from '../animated/motion'
import { motion } from 'framer-motion'
import {
 AnimatedCard,
 AnimatedGrid,
 AnimatedGridItem,
 CourseAnimatedSection,
 CourseTrackStep,
 CourseTrackSteps,
 StaggerItem,
} from '../animated'
import { motionEase, viewportOnce } from '../animated/motion'
import {
 aiAcceleratorBonuses,
 aiAcceleratorBuildArtifacts,
 aiAcceleratorCurriculumWeeks,
 aiAcceleratorDemandSection,
 aiAcceleratorHero,
 aiAcceleratorPatternComparison,
 aiAcceleratorPreCourse,
 aiAcceleratorTools,
 aiAcceleratorEmiConfig,
 aiAcceleratorValueStack,
 aiAcceleratorPricingFeatures,
} from '../../../data/aiAutomationAcceleratorPageData'

import { scrollToElement, getPrimaryScrollTarget } from '../../../lib/enrollmentActions'
import { getEnrollmentConfig } from '../../../data/courseEnrollmentConfig'

function scrollToEnroll() {
 const config = getEnrollmentConfig('ai-automation-accelerator')
 if (config) scrollToElement(getPrimaryScrollTarget(config))
}

export function AIAcceleratorUrgencyStrip() {
 return (
 <CourseUrgencyStrip
 slug={COURSE_SLUGS.aiAutomation}
 prefix="AI Track · Step 1 · Highest Demand 2026"
 earlyBirdSeats={8}
 showRegister={false}
 suffix="Seat confirmed on payment"
 onRegister={scrollToEnroll}
 claimLabel="Claim My Seat"
 />
 )
}

export function AIAcceleratorHero() {
 return (
 <CourseHeroWithSidebar
 courseSlug="ai-automation-accelerator"
 courseName="AI Automation Accelerator"
 duration="8 Weeks"
 features={aiAcceleratorPricingFeatures}
 align="left"
 >
 <CourseHeroContent>
 <CourseHeroBreadcrumbs>
 <Link href="/" className="hover:underline">Home</Link>
 <ChevronRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
 <Link href="/courses" className="hover:underline">Courses</Link>
 <ChevronRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
 <span>AI Track</span>
 <ChevronRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
 <span style={{ color: 'var(--color-primary)' }}>AI Automation Accelerator</span>
 </CourseHeroBreadcrumbs>

 <CourseHeroBadge>
 <Zap className="w-3.5 h-3.5" aria-hidden="true" />
 {aiAcceleratorHero.badge}
 </CourseHeroBadge>
 <CourseHeroTitle>{aiAcceleratorHero.title}</CourseHeroTitle>
 <CourseHeroSubtitle>{aiAcceleratorHero.subtitle}</CourseHeroSubtitle>
 <CourseHeroTrustChips chips={aiAcceleratorHero.trustChips} />
 <CourseHeroLastUpdated date={aiAcceleratorHero.lastUpdated} />
 <CourseHeroStats stats={aiAcceleratorHero.stats} />
 <CourseHeroSeatNote>
  <LocalizedCourseSeatNote slug={COURSE_SLUGS.aiAutomation} earlyBirdSeats={8} reviewHours={24} />
 </CourseHeroSeatNote>
 <CourseHeroCtaRow>
 <EnrollmentActionButton
 courseSlug="ai-automation-accelerator"
 className="font-body font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform min-h-[44px] inline-flex items-center gap-2"
 style={{ backgroundColor: 'var(--color-accent)', color: 'var(--text-on-accent)' }}
 />
 </CourseHeroCtaRow>
 <CourseHeroFootnote>{aiAcceleratorHero.bookingNote}</CourseHeroFootnote>
 </CourseHeroContent>
 </CourseHeroWithSidebar>
 )
}

export function AIAcceleratorDemandSection() {
 return (
  <CourseProofSectionInfographic
   sectionId="why-accelerator"
   badge="Highest demand 2026"
   overlayLabel="AI Track · Step 1"
   imageSrc="/images/class-photos/ui-ux-design-mentor-led-session-6.webp"
   imageAlt="design thinking session with students learning user research methods"
   section={aiAcceleratorDemandSection}
  />
 )
}

export function AIAcceleratorPatternInterrupt() {
 return (
  <CoursePatternInterruptInfographic
   config={{
    title: aiAcceleratorPatternComparison.title,
    intro: aiAcceleratorPatternComparison.intro,
    rows: aiAcceleratorPatternComparison.rows,
    leftHeader: 'AI Automation Accelerator',
    rightHeader: '14-Day AI Generalist Programs',
    highlights: ['3 deployed production automations', 'No coding required', '50% refund guarantee'],
    secondaryStat: { value: '3', label: 'Deployed automations' },
   }}
  />
 )
}

export function AIAcceleratorWhatYouBuild() {
 return (
 <CourseAnimatedSection id="what-you-build" title="What You Will Build and Deploy in 8 Weeks" backgroundColor="var(--bg-base)" maxWidthClass="max-w-5xl">
 <CourseWhatYouBuildInfographic
  modules={aiAcceleratorBuildArtifacts.map((item) => ({
   title: item.title,
   description: [item.description, item.examples, item.supporting].filter(Boolean).join(' · '),
  }))}
  progress={{
   startLabel: 'Week 1',
   endLabel: 'Week 8',
   pathLabel: '8-week deploy path',
   stats: [
    { value: '3', label: 'Production automations' },
    { value: '8', label: 'Weeks live' },
    { value: '6', label: 'Tools to depth' },
   ],
   footerMessage: 'Every automation below is deployed in production - not a demo build.',
  }}
 />
 </CourseAnimatedSection>
 )
}

export function AIAcceleratorCurriculum() {
 return (
 <CourseAnimatedSection title="The 8-Week Curriculum" backgroundColor="var(--bg-warm)">
 <StaggerItem>
 <AnimatedCard variant="dashed">
 <h3 className="font-display font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
 {aiAcceleratorPreCourse.title}
 </h3>
 <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
 {aiAcceleratorPreCourse.body}
 </p>
 </AnimatedCard>
 </StaggerItem>
 {aiAcceleratorCurriculumWeeks.map((week) => (
 <StaggerItem key={week.week} className="mt-6">
 <AnimatedCard variant="subtle">
 <h3 className="font-display font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>
 {week.week}
 </h3>
 <div className="space-y-4">
 {week.sessions.map((session, sessionIndex) => (
 <motion.div
 key={session.title}
 initial={{ opacity: 0, x: -12 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={viewportOnce}
 transition={{ delay: sessionIndex * 0.06, duration: 0.45, ease: motionEase }}
 className="pl-4 border-l-2"
 style={{ borderColor: 'var(--color-accent)' }}
 >
 <h4 className="font-body font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
 {session.title}
 </h4>
 <p className="font-body text-sm mb-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
 {session.body}
 </p>
 {session.tools && (
 <p className="font-body text-xs mb-1" style={{ color: 'var(--text-muted)' }}>
 <strong>Tool:</strong> {session.tools}
 </p>
 )}
 <p className="font-body text-sm">
 <strong style={{ color: 'var(--color-primary)' }}>Deliverable:</strong>{' '}
 <span style={{ color: 'var(--text-secondary)' }}>{session.deliverable}</span>
 </p>
 </motion.div>
 ))}
 </div>
 </AnimatedCard>
 </StaggerItem>
 ))}
 </CourseAnimatedSection>
 )
}

export function AIAcceleratorToolchain() {
 return (
 <CourseToolchainSection
 title="The Toolchain: Zapier, n8n, Make, Airtable, ManyChat, Relevance AI"
 tools={aiAcceleratorTools}
 track="ai"
 backgroundColor="var(--bg-card)"
 />
 )
}

export function AIAcceleratorTeamEnrollment() {
 return (
 <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-base)' }}>
 <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
 <h2 className="font-display font-bold mb-6" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
 Team Enrollment - AI Automation for Your Whole Team
 </h2>
 <p className="font-body leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
 The AI Automation Accelerator is available for team enrollment - for companies that want to upskill a group of 5 to 10 professionals together in the same cohort.
 </p>
 <p className="font-body leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
 Team enrollment is handled through the Designient corporate inquiry process. Depending on team size and cohort timing, a custom quote, reserved seats, or a dedicated team cohort may be available.
 </p>
 <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>This is the right option if:</p>
 <p className="font-body leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
 Your team includes operations managers, marketing leads, sales coordinators, or founders who could all benefit from automation fluency - and you want them upskilled together with a shared working vocabulary.
 </p>
 <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>What changes for teams:</p>
 <p className="font-body leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
 Teams of 5 or more receive a per-seat discount, a dedicated pre-course session to align on shared automation problems across the team, and a group review session at the end of week 8 where automations are evaluated for cross-team integration potential.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
 <Link
 href="/corporates#corporate-proposal"
 className="inline-flex items-center gap-2 font-body font-semibold px-6 py-3 rounded-full"
 style={{ backgroundColor: 'var(--color-cta)', color: 'var(--text-on-accent)' }}
 >
 Submit a corporate inquiry
 <ArrowRight className="w-4 h-4" />
 </Link>
 <a
 href="mailto:hello@designient.com?subject=Team%20Enrollment%20%E2%80%94%20AI%20Automation%20Accelerator"
 className="course-inline-link font-body text-sm"
 >
 Or email hello@designient.com
 </a>
 </div>
 </div>
 </section>
 )
}

export function AIAcceleratorLearningPath() {
 return (
  <CourseLearningPathInfographic
   subtitle="AI Track progression - where the Accelerator sits as the automation foundation."
   steps={[
    { label: 'Step 1', title: 'AI Automation Accelerator', note: 'You are here', active: true },
    { label: 'Step 2', title: 'AI Product Design Course', href: '/ai-product-design-course', priceSlug: COURSE_SLUGS.aiProduct, priceRange: true, note: 'AI product design specialisation' },
   ]}
  >
   <motion.div variants={fadeUp} className="rounded-xl px-5 py-4 border mb-6" style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--bg-card)' }}>
    <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
     <strong style={{ color: 'var(--text-primary)' }}>Not sure which track?</strong>{' '}
     <Link href="/courses" className="course-inline-link">Compare all courses</Link> on the Design Track and AI Track.
    </p>
   </motion.div>
   <motion.div variants={fadeUp} className="rounded-2xl border-2 border-dashed p-5" style={{ borderColor: 'var(--color-highlight)', backgroundColor: 'var(--bg-warm)' }}>
    <p className="font-body text-sm font-bold mb-2" style={{ color: 'var(--color-highlight)' }}>FREE ENTRY POINT</p>
    <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
     The monthly <Link href="/ai-automation-live" className="course-inline-link">AI Automation Live</Link> workshop is a free 2-hour session - one automation built live from trigger to deployed workflow.
    </p>
   </motion.div>
  </CourseLearningPathInfographic>
 )
}

export function AIAcceleratorBonusStack() {
 return null
}

export function AIAcceleratorValueStack() {
 return (
  <CourseStackInfographic
   bonuses={aiAcceleratorBonuses}
   valueRows={aiAcceleratorValueStack}
   internationalUsdNote="USD 449"
   savingsPercent={80}
  />
 )
}

export function AIAcceleratorGuarantee() {
 return (
 <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-card)' }}>
 <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
 <div className="rounded-2xl p-8 md:p-10 border-2" style={{ borderColor: 'var(--color-primary)', backgroundColor: 'var(--bg-subtle)' }}>
 <div className="flex items-start gap-4">
 <Shield className="w-8 h-8 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
 <div>
 <h2 className="font-display font-bold mb-4" style={{ color: 'var(--text-primary)', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
 Guarantee
 </h2>
 <p className="font-body mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
 If you attend every session, submit every deliverable, complete all three builds, and still have no deployed automations at course end - 50% refund.
 </p>
 <p className="font-body mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
 Written claim within 14 days of the final session. Students who miss sessions or skip deliverables are ineligible.
 </p>
 <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
 This guarantee does not promise a business outcome from your automations. It promises that if you do the work, three working automations will exist when you finish. Full terms at{' '}
 <Link href="/cancellation-refund-policy" className="course-inline-link">
 /cancellation-refund-policy
 </Link>
 .
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>
 )
}
