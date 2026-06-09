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
 EnrollmentActionButton,
 CourseToolchainSection,
 CourseEditorialSplit,
 CourseBentoGrid,
} from '../layout'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Award, CheckCircle, ChevronRight, Shield } from 'react-feather'
import { LocalizedBookingTokenNote, LocalizedCourseSeatNote } from '../../pricing/LocalizedCourseHeroPricing'
import { CourseUrgencyStrip, COURSE_SLUGS } from '../../pricing/CourseUrgencyStrip'
import {
 CourseLearningPathInfographic,
 CoursePatternInterruptInfographic,
 CourseProofSectionInfographic,
 CourseStackInfographic,
 CourseWhatYouBuildInfographic,
} from '../infographics'
import { fadeUp } from '../animated/motion'
import {
 AnimatedCard,
 AnimatedReveal,
 CourseAnimatedSection,
 CourseCurriculumTimeline,
 CourseTrackStep,
 CourseTrackSteps,
 StaggerItem,
} from '../animated'
import {
 masterAdvancedSection,
 masterAiDistinction,
 masterBonuses,
 masterCurriculumModules,
 masterEmiConfig,
 masterHero,
 masterPatternComparison,
 masterTools,
 masterPortfolioOutputs,
 masterValueStack,
 masterPricingFeatures,
} from '../../../data/masterPageData'

export function MasterUrgencyStrip() {
 return (
 <CourseUrgencyStrip
 slug={COURSE_SLUGS.master}
 prefix="Design Track · Step 3 · Most Advanced · Cohort now open. 15 seats"
 seatLabel="5 early bird seats at"
 showRegister={false}
 suffix="Applications reviewed within 48 hours"
 claimHref="/apply-now"
 claimLabel="Apply for the Course"
 />
 )
}

export function MasterHero() {
 return (
 <CourseHeroWithSidebar
 courseSlug="ui-ux-design-master"
 courseName="UI UX Design Master"
 duration="6 Months"
 features={masterPricingFeatures}
 emiConfig={masterEmiConfig}
 align="left"
 >
 <CourseHeroContent>
 <CourseHeroBreadcrumbs>
 <Link href="/" className="hover:underline">Home</Link>
 <ChevronRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
 <Link href="/courses" className="hover:underline">Courses</Link>
 <ChevronRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
 <span>Design Track</span>
 <ChevronRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
 <span style={{ color: 'var(--color-primary)' }}>UI UX Design Master</span>
 </CourseHeroBreadcrumbs>

 <CourseHeroBadge>
 <Award className="w-3.5 h-3.5" aria-hidden="true" />
 {masterHero.badge}
 </CourseHeroBadge>
 <CourseHeroTitle>{masterHero.title}</CourseHeroTitle>
 <CourseHeroSubtitle>{masterHero.subtitle}</CourseHeroSubtitle>
 <CourseHeroTrustChips chips={masterHero.trustChips} />
 <CourseHeroLastUpdated date={masterHero.lastUpdated} />
 <CourseHeroStats stats={masterHero.stats} />
 <CourseHeroSeatNote>
  <LocalizedCourseSeatNote slug={COURSE_SLUGS.master} earlyBirdSeats={5} reviewHours={48} />
 </CourseHeroSeatNote>
 <CourseHeroCtaRow>
 <EnrollmentActionButton
 courseSlug="ui-ux-design-master"
 className="font-body font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform min-h-[44px] inline-flex items-center gap-2"
 style={{ backgroundColor: 'var(--color-accent)', color: 'var(--text-on-accent)' }}
 />
 </CourseHeroCtaRow>
 <CourseHeroFootnote>
  <LocalizedBookingTokenNote slug={COURSE_SLUGS.master} percentLabel="10% of early bird fee" />
 </CourseHeroFootnote>
 </CourseHeroContent>
 </CourseHeroWithSidebar>
 )
}

export function MasterAdvancedSection() {
 return (
  <CourseProofSectionInfographic
   sectionId="why-master"
   badge="Most advanced course"
   overlayLabel="Design Track · Step 3"
   imageSrc="/images/class-photos/ui-ux-design-mentor-led-session-4.webp"
   imageAlt="UI UX design students presenting portfolio projects to mentor"
   section={{
    title: masterAdvancedSection.title,
    paragraphs: [
     masterAdvancedSection.paragraphs[0],
     masterAdvancedSection.paragraphs[1],
     'Six months. 15 students per cohort. Diploma certified.',
    ],
   }}
  />
 )
}

export function MasterPatternInterrupt() {
 return (
  <CoursePatternInterruptInfographic
   config={{
    title: masterPatternComparison.title,
    intro: masterPatternComparison.intro,
    rows: masterPatternComparison.rows.map((r) => ({ feature: r.feature, pro: r.master, others: r.others })),
    leftHeader: 'UI UX Design Master',
    rightHeader: 'Generic Advanced Design Courses',
    highlights: ['Diploma certification', '15 students max per cohort', 'Six specialist modules'],
    secondaryStat: { value: '6', label: 'Specialisation modules' },
   }}
  />
 )
}

export function MasterWhatYouBuild() {
 return (
 <CourseAnimatedSection
 id="what-you-build"
 title="What You Will Build and Deliver in 6 Months"
 subtitle="Across 6 months and 6 modules, you build a portfolio that reflects senior-level thinking - not just execution. The artefacts are real deliverables on real briefs, reviewed by mentors and in some modules by client stakeholders."
 backgroundColor="var(--bg-card)"
 >
 <p className="font-body font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
 By the end of month 6:
 </p>
 <CourseWhatYouBuildInfographic
  modules={masterPortfolioOutputs.map((item, index) => ({
   title: `Deliverable ${index + 1}`,
   description: item,
  }))}
  progress={{
   startLabel: 'Month 1',
   endLabel: 'Month 6',
   pathLabel: '6-month build path',
   stats: [
    { value: '6', label: 'Specialist modules' },
    { value: '6', label: 'Months to ship' },
    { value: '2', label: 'Client projects' },
   ],
   footerMessage: 'Every deliverable below is built during the course - not after it.',
  }}
 />
 </CourseAnimatedSection>
 )
}

export function MasterCurriculum() {
 return (
 <CourseAnimatedSection title="The 6-Month Curriculum" backgroundColor="var(--bg-warm)">
 <AnimatedReveal>
 <CourseCurriculumTimeline
 items={masterCurriculumModules.map((mod) => ({
 key: mod.title,
 title: mod.title,
 body: mod.body,
 tools: mod.tools,
 deliverable: mod.deliverable,
 }))}
 />
 </AnimatedReveal>
 </CourseAnimatedSection>
 )
}

export function MasterToolchain() {
 return (
 <CourseToolchainSection
 title="The Toolchain: Figma, Claude, Perplexity"
 tools={masterTools}
 track="design"
 backgroundColor="var(--bg-card)"
 />
 )
}

export function MasterAiDistinction() {
 return (
 <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-card)' }}>
 <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
 <h2 className="font-display font-bold mb-6" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
 {masterAiDistinction.title}
 </h2>
 <div className="space-y-4 mb-8">
 <p className="font-body leading-relaxed font-semibold" style={{ color: 'var(--text-primary)' }}>
 {masterAiDistinction.paragraphs[0]}
 </p>
 <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
 {masterAiDistinction.paragraphs[1]}
 </p>
 <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
 The{' '}
 <Link href="/ai-product-design-course" className="course-inline-link">
 AI Product Design Course
 </Link>{' '}
 is a separate 6-week standalone course that goes significantly deeper on the execution layer - designing all 8 AI states in Figma, writing full AI behaviour specifications, building functional Bolt/v0 prototypes of AI features, and producing two portfolio case studies specifically in AI product design. That course is built for designers and PMs who want AI product design as their primary specialisation - not as one module within a broader curriculum.
 </p>
 </div>
 <div className="rounded-2xl p-6 md:p-8" style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-default)' }}>
 <p className="font-body font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Who should take which:</p>
 <ul className="space-y-4">
 {masterAiDistinction.whoShouldTake.map((item) => (
 <li key={item.scenario} className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
 <strong style={{ color: 'var(--text-primary)' }}>{item.scenario}</strong> - {item.course}
 </li>
 ))}
 </ul>
 </div>
 </div>
 </section>
 )
}

export function MasterLearningPath() {
 return (
  <CourseLearningPathInfographic
   subtitle="Design Track progression - where Master sits as the advanced endpoint."
   steps={[
    { label: 'Step 1', title: 'UI UX Design Bootcamp', href: '/ui-ux-design-bootcamp', priceSlug: COURSE_SLUGS.bootcamp, priceRange: true, durationPrefix: '', note: 'entry point' },
    { label: 'Step 2', title: 'UI UX Design Pro', href: '/ui-ux-design-pro', priceSlug: COURSE_SLUGS.pro, durationPrefix: '10 weeks ·', note: 'foundation course' },
    { label: 'Step 3', title: 'UI UX Design Master', note: 'You are here', active: true },
   ]}
  >
   <motion.div variants={fadeUp} className="rounded-xl px-5 py-4 border mb-6" style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--bg-card)' }}>
    <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Prerequisites:</p>
    <ul className="font-body space-y-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
     <li>Option A: Completion of UI UX Design Pro</li>
     <li>Option B: 1+ years of professional design experience</li>
    </ul>
   </motion.div>
   <motion.div variants={fadeUp} className="rounded-xl px-5 py-4 border" style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--bg-card)' }}>
    <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
     <strong style={{ color: 'var(--text-primary)' }}>After Master:</strong> The natural progression is the{' '}
     <Link href="/ai-product-design-course" className="course-inline-link">AI Product Design Course</Link> for designers moving into AI-native product roles.
    </p>
   </motion.div>
  </CourseLearningPathInfographic>
 )
}

export function MasterBonusStack() {
 return null
}

export function MasterValueStack() {
 return (
  <CourseStackInfographic
   bonuses={masterBonuses}
   valueRows={masterValueStack}
   emi={masterEmiConfig}
   internationalUsdNote="USD 1,399"
   savingsPercent={85}
  />
 )
}

export function MasterGuarantee() {
 return (
 <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-card)' }}>
 <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
 <div className="rounded-2xl p-8 md:p-10 border-2" style={{ borderColor: 'var(--color-primary)', backgroundColor: 'var(--bg-subtle)' }}>
 <div className="flex items-start gap-4">
 <Shield className="w-8 h-8 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
 <div>
 <h2 className="font-display font-bold mb-4" style={{ color: 'var(--text-primary)', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>Guarantee</h2>
 <p className="font-body mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
 If you complete all 6 months, submit every module deliverable on time, attend all live sessions, and do not have a diploma-standard portfolio at the end - you receive a 25% refund.
 </p>
 <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
 Submit your claim in writing within 14 days of the final session. Students who miss sessions or skip deliverables are ineligible.
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>
 )
}

export function MasterPlacementNote() {
 return (
 <section className="py-12 md:py-16" style={{ backgroundColor: 'var(--bg-warm)' }}>
 <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl text-center">
 <p className="font-body leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
 Placement support begins in month 6 and continues for 6 months after graduation - portfolio review, resume and LinkedIn work, mock interviews, and partner introductions where appropriate.
 </p>
 <Link href="/placements" className="font-body inline-flex items-center gap-2 font-bold" style={{ color: 'var(--color-primary)' }}>
 View placement details
 <ArrowRight className="w-5 h-5" />
 </Link>
 </div>
 </section>
 )
}
