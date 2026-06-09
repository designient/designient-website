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
 CourseBentoGrid,
} from '../layout'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Shield } from 'react-feather'
import { LocalizedCourseSeatNote } from '../../pricing/LocalizedCourseHeroPricing'
import { CourseUrgencyStrip, COURSE_SLUGS } from '../../pricing/CourseUrgencyStrip'
import {
 CourseLearningPathInfographic,
 CoursePatternInterruptInfographic,
 CourseStackInfographic,
 CourseWhatYouBuildInfographic,
} from '../infographics'
import { CourseAnimatedSection } from '../animated'
import { fadeUp } from '../animated/motion'
import {
 bootcampBonuses,
 bootcampDeliverables,
 bootcampHero,
 bootcampPatternComparison,
 bootcampSchedule,
 bootcampTools,
 bootcampValueStack,
 bootcampPricingFeatures,
} from '../../../data/bootcampPageData'

export function BootcampUrgencyStrip() {
 return (
 <CourseUrgencyStrip
 slug={COURSE_SLUGS.bootcamp}
 prefix="Design Track · Step 1"
 earlyBirdSeats={50}
 showRegister={false}
 suffix="Next cohort filling fast"
 claimHref="/apply-now"
 claimLabel="Claim My Seat"
 />
 )
}

export function BootcampHero() {
 return (
 <CourseHeroWithSidebar
 courseSlug="ui-ux-design-bootcamp"
 courseName="UI UX Design Bootcamp"
 duration="3 Days"
 features={bootcampPricingFeatures}
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
 <span style={{ color: 'var(--color-primary)' }}>UI UX Design Bootcamp</span>
 </CourseHeroBreadcrumbs>

 <CourseHeroBadge>{bootcampHero.badge}</CourseHeroBadge>
 <CourseHeroTitle>{bootcampHero.title}</CourseHeroTitle>
 <CourseHeroSubtitle>{bootcampHero.subtitle}</CourseHeroSubtitle>
 <CourseHeroTrustChips chips={bootcampHero.trustChips} />
 <CourseHeroLastUpdated date={bootcampHero.lastUpdated} />
 <CourseHeroStats stats={bootcampHero.stats} />
 <CourseHeroSeatNote>
  <LocalizedCourseSeatNote slug={COURSE_SLUGS.bootcamp} earlyBirdSeats={50} reviewHours={24} />
 </CourseHeroSeatNote>
 <CourseHeroCtaRow>
 <EnrollmentActionButton
 courseSlug="ui-ux-design-bootcamp"
 className="font-body font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform min-h-[44px] inline-flex items-center gap-2"
 style={{ backgroundColor: 'var(--color-accent)', color: 'var(--text-on-accent)' }}
 />
 </CourseHeroCtaRow>
 <CourseHeroFootnote>{bootcampHero.guaranteeNote}</CourseHeroFootnote>
 </CourseHeroContent>
 </CourseHeroWithSidebar>
 )
}

export function BootcampPatternInterrupt() {
 return (
  <CoursePatternInterruptInfographic
   config={{
    title: bootcampPatternComparison.title,
    intro: bootcampPatternComparison.intro,
    rows: bootcampPatternComparison.rows.map((r) => ({
     feature: r.feature,
     pro: r.bootcamp,
     others: r.others,
    })),
    leftHeader: 'This Bootcamp',
    rightHeader: 'Recorded Design Courses',
    highlights: [
     'Five portfolio artefacts in one weekend',
     'Live mentor critique Saturday and Sunday',
     'Full refund if you do not ship by Sunday 7pm',
    ],
    secondaryStat: { value: '5', label: 'Portfolio artefacts' },
    primaryStatLabel: 'Advantages vs recorded courses',
   }}
  />
 )
}

export function BootcampLearningPath() {
 return (
  <CourseLearningPathInfographic
   title="Your Path After This Bootcamp"
   subtitle="Design Track progression - where the Bootcamp sits as the entry point."
   steps={[
    { label: 'Step 1', title: 'UI UX Design Bootcamp', note: 'You are here', active: true },
    { label: 'Step 2', title: 'UI UX Design Pro', href: '/ui-ux-design-pro', priceSlug: COURSE_SLUGS.pro, durationPrefix: '10 weeks ·', note: 'the foundation course' },
    { label: 'Step 3', title: 'UI UX Design Master', href: '/ui-ux-design-master', priceSlug: COURSE_SLUGS.master, durationPrefix: '6 months ·', note: 'advanced curriculum' },
   ]}
  >
   <motion.div variants={fadeUp} className="rounded-2xl border-2 border-dashed p-5 md:p-6 mb-6" style={{ borderColor: 'var(--color-highlight)', backgroundColor: 'var(--bg-warm)' }}>
    <p className="font-body text-sm font-bold tracking-wide mb-3" style={{ color: 'var(--color-highlight)' }}>AI TRACK (separate track)</p>
    <p className="font-body leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
     <Link href="/ai-automation-accelerator" className="course-inline-link">AI Automation Accelerator</Link> (8 weeks) ·{' '}
     <Link href="/ai-product-design-course" className="course-inline-link">AI Product Design Course</Link> (6 weeks)
    </p>
   </motion.div>
   <motion.div variants={fadeUp} className="rounded-xl px-5 py-4 border space-y-3" style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--bg-card)' }}>
    <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
     <strong style={{ color: 'var(--text-primary)' }}>Not sure which track?</strong> The Design Track is for anyone who wants to become a UI/UX designer. The AI Track is for working professionals who want AI automation or AI product design fluency.
    </p>
    <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
     The Bootcamp is the fastest way to confirm whether design is the right path before committing to the 10-week Pro course.
    </p>
   </motion.div>
  </CourseLearningPathInfographic>
 )
}

export function BootcampWhatYouBuild() {
 return (
 <CourseAnimatedSection
 id="what-you-build"
 title="What You Will Build This Weekend"
 subtitle="Five artefacts. All built live. All yours to keep and present."
 backgroundColor="var(--bg-card)"
 >
 <CourseWhatYouBuildInfographic
  modules={bootcampDeliverables.map((item, index) => ({
   title: `Artefact ${index + 1}: ${item.title}`,
   description: item.description,
  }))}
  progress={{
   startLabel: 'Friday',
   endLabel: 'Sunday',
   pathLabel: '3-day build sprint',
   stats: [
    { value: '5', label: 'Portfolio artefacts' },
    { value: '3', label: 'Days live' },
    { value: '1', label: 'Weekend sprint' },
   ],
   footerMessage: 'Every artefact below is built during the bootcamp - not after it.',
  }}
 />
 </CourseAnimatedSection>
 )
}

export function BootcampSchedule() {
 return (
 <CourseAnimatedSection
 title="Friday, Saturday, Sunday - The Full Schedule"
 backgroundColor="var(--bg-warm)"
 >
 <CourseBentoGrid
 items={bootcampSchedule.map((day, index) => ({
 id: day.title,
 span: index === 1 ? '2x2' as const : '2x1' as const,
 children: (
 <>
 <h3 className="font-display font-semibold mb-3 text-lg" style={{ color: 'var(--color-primary)' }}>
 {day.title}
 </h3>
 <p className="font-body text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
 {day.body}
 </p>
 {day.tools && (
 <p className="font-body text-xs mb-3" style={{ color: 'var(--text-muted)' }}>
 <strong>Tools:</strong> {day.tools}
 </p>
 )}
 <p className="font-body text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
 Deliverable: {day.deliverable}
 </p>
 </>
 ),
 }))}
 />
 </CourseAnimatedSection>
 )
}

export function BootcampToolchain() {
 return (
 <CourseToolchainSection
 title="The Toolchain: Perplexity, Claude, Figma Make, Figma, Claude Design, Bolt"
 subtitle="Seven tools. Each taught in context - not as a separate lesson, but as part of the workflow at the moment you need it."
 tools={bootcampTools}
 track="design"
 backgroundColor="var(--bg-card)"
 />
 )
}

export function BootcampBonusStack() {
 return null
}

export function BootcampValueStack() {
 return <CourseStackInfographic bonuses={bootcampBonuses} valueRows={bootcampValueStack} savingsPercent={75} />
}

export function BootcampGuarantee() {
 return (
 <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-warm)' }}>
 <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
 <div className="rounded-2xl p-8 md:p-10 border-2" style={{ borderColor: 'var(--color-primary)', backgroundColor: 'var(--bg-card)' }}>
 <div className="flex items-start gap-4">
 <Shield className="w-8 h-8 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
 <div>
 <h2 className="font-display font-bold mb-4" style={{ color: 'var(--text-primary)', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
 Guarantee
 </h2>
 <p className="font-body mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
 If you do not have a portfolio-worthy prototype, a written case study, and a certificate by Sunday 7pm - you receive a full refund. No conditions. Claim by Monday midnight.
 </p>
 <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
 This is not a conditional guarantee. You do not need to prove attendance records or submission history. If you show up and the output is not there, the refund is yours.
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>
 )
}

