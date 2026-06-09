'use client'

import { PLACEMENT_STATS_FOOTNOTE } from '../../../lib/placementMethodology'
import {
 CourseHeroWithSidebar,
 CourseHeroContent,
 CourseHeroBreadcrumbs,
 CourseHeroBadge,
 CourseHeroTitle,
 CourseHeroSubtitle,
 CourseHeroTrustChips,
 CourseHeroStats,
 CourseHeroLastUpdated,
 CourseHeroSeatNote,
 CourseHeroCtaRow,
 CourseHeroFootnote,
 CourseToolchainSection,
 EnrollmentActionButton,
} from '../layout'
import {
 CourseLearningPathInfographic,
 CoursePatternInterruptInfographic,
 CourseProofSectionInfographic,
 CourseStackInfographic,
 CourseWhatYouBuildInfographic,
} from '../infographics'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight, GitBranch, Shield, Star } from 'react-feather'
import { CrossCoursePrice } from '../../pricing/CrossCoursePrice'
import { fadeUp } from '../animated/motion'
import { CourseUrgencyStrip, COURSE_SLUGS } from '../../pricing/CourseUrgencyStrip'
import {
 LocalizedBookingTokenNote,
 LocalizedCourseSeatNote,
} from '../../pricing/LocalizedCourseHeroPricing'
import { useCurrency } from '../../../contexts/CurrencyContext'
import { pickByCurrency } from '../../../lib/localizedPricing'
import {
 AnimatedReveal,
 CourseAnimatedSection,
 CourseCurriculumTimeline,
} from '../animated'
import {
 proBonuses,
 proCurriculumWeeks,
 proHero,
 proPatternComparison,
 proPlacementSection,
 proPopularSection,
 proPortfolioModules,
 proTools,
 proEmiConfig,
 proValueStack,
 proPricingFeatures,
} from '../../../data/proPageData'

export function ProUrgencyStrip() {
 return (
 <CourseUrgencyStrip
 slug={COURSE_SLUGS.pro}
 prefix="Design Track · Step 2 · Most Popular"
 seatLabel="5 early bird seats remaining at"
 showRegister={false}
 suffix="Applications reviewed within 48 hours"
 claimHref="/apply-now"
 claimLabel="Apply for the Course"
 />
 )
}

export function ProHero() {
 const { currency, isLoading } = useCurrency()
 const heroStats = proHero.stats.map((stat) =>
  stat.label === 'Average Package'
   ? {
     ...stat,
     value: isLoading ? '…' : pickByCurrency(currency, '₹8L', '$10K'),
    }
   : stat
 )

 return (
 <CourseHeroWithSidebar
 courseSlug="ui-ux-design-pro"
 courseName="UI UX Design Pro"
 duration="10 Weeks"
 features={proPricingFeatures}
 emiConfig={proEmiConfig}
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
 <span style={{ color: 'var(--color-primary)' }}>UI UX Design Pro</span>
 </CourseHeroBreadcrumbs>

 <CourseHeroBadge>
 <Star className="w-3.5 h-3.5" aria-hidden="true" />
 {proHero.badge}
 </CourseHeroBadge>
 <CourseHeroTitle>{proHero.title}</CourseHeroTitle>
 <CourseHeroSubtitle>{proHero.subtitle}</CourseHeroSubtitle>
 <CourseHeroTrustChips chips={proHero.trustChips} />
 <CourseHeroLastUpdated date={proHero.lastUpdated} />
 <CourseHeroStats stats={heroStats} methodologyNote={PLACEMENT_STATS_FOOTNOTE} />
 <CourseHeroSeatNote>
  <LocalizedCourseSeatNote slug={COURSE_SLUGS.pro} earlyBirdSeats={5} reviewHours={48} />
 </CourseHeroSeatNote>
 <CourseHeroCtaRow>
 <EnrollmentActionButton
 courseSlug="ui-ux-design-pro"
 className="font-body font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform min-h-[44px] inline-flex items-center gap-2"
 style={{ backgroundColor: 'var(--color-accent)', color: 'var(--text-on-accent)' }}
 />
 </CourseHeroCtaRow>
 <CourseHeroFootnote>
  <LocalizedBookingTokenNote slug={COURSE_SLUGS.pro} />
 </CourseHeroFootnote>
 </CourseHeroContent>
 </CourseHeroWithSidebar>
 )
}

export function ProPopularSection() {
 return (
  <CourseProofSectionInfographic
   section={proPopularSection}
   variant="pro"
   sectionId="why-pro"
   badge="Most enrolled course"
   overlayLabel="Designient placement track"
  />
 )
}

export function ProPatternInterrupt() {
 return (
  <CoursePatternInterruptInfographic
   config={{
    title: proPatternComparison.title,
    intro: proPatternComparison.intro,
    rows: proPatternComparison.rows,
    leftHeader: 'UI UX Design Pro',
    rightHeader: 'Generic Online UI UX Courses',
    highlights: [
     'Every week has a deliverable',
     'Live mentor critique before the next week',
     'A body of work - not one portfolio piece at the end',
    ],
    secondaryStat: { value: '10', label: 'Weekly deliverables' },
   }}
  />
 )
}

export function ProLearningPath() {
 return (
  <CourseLearningPathInfographic
   subtitle="Design Track progression - where Pro sits in the full journey."
   steps={[
    { label: 'Step 1', title: 'UI UX Design Bootcamp', href: '/ui-ux-design-bootcamp', priceSlug: COURSE_SLUGS.bootcamp, priceRange: true, note: 'recommended if you have never designed before' },
    { label: 'Step 2', title: 'UI UX Design Pro', note: 'You are here', active: true },
    { label: 'Step 3', title: 'UI UX Design Master', href: '/ui-ux-design-master', priceSlug: COURSE_SLUGS.master, note: 'for designers who want to reach lead and senior level' },
   ]}
  >
   <motion.div variants={fadeUp} className="rounded-2xl border-2 border-dashed p-5 md:p-6 mb-6" style={{ borderColor: 'var(--color-highlight)', backgroundColor: 'var(--bg-warm)' }}>
    <div className="flex items-start gap-3 mb-3">
     <GitBranch className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-highlight)' }} />
     <p className="font-body text-sm font-bold tracking-wide" style={{ color: 'var(--color-highlight)' }}>
      CROSS-TRACK BRIDGE - RECOMMENDED FOR PRO GRADUATES
     </p>
    </div>
    <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
     After completing this course, Pro graduates moving into AI-product-focused roles are recommended to take the{' '}
     <Link href="/ai-product-design-course" className="course-inline-link">AI Product Design Course</Link>{' '}
     next - 6 weeks on trust UI, error states, and confidence design.
    </p>
   </motion.div>
   <motion.div variants={fadeUp} className="rounded-xl px-5 py-4 border" style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--bg-card)' }}>
    <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
     <strong style={{ color: 'var(--text-primary)' }}>Not started yet?</strong> The{' '}
     <Link href="/ui-ux-design-bootcamp" className="course-inline-link">UI UX Design Bootcamp</Link>{' '}
     is a 3-day, <CrossCoursePrice slug={COURSE_SLUGS.bootcamp} /> entry point before committing to 10 weeks.
    </p>
    <Link href="/ui-ux-design-bootcamp" className="inline-flex items-center gap-2 font-body font-semibold text-sm mt-4" style={{ color: 'var(--color-primary)' }}>
     Explore Bootcamp
     <ArrowRight className="w-4 h-4" />
    </Link>
   </motion.div>
  </CourseLearningPathInfographic>
 )
}

export function ProWhatYouBuild() {
 return (
 <CourseAnimatedSection
 id="what-you-build"
 title="What You Will Build and Ship in 10 Weeks"
 subtitle="A complete design portfolio. Every artefact listed below is built during the course - not after it."
 backgroundColor="var(--bg-card)"
 maxWidthClass="max-w-5xl"
 >
 <CourseWhatYouBuildInfographic modules={proPortfolioModules} />
 </CourseAnimatedSection>
 )
}

export function ProCurriculum() {
 return (
 <CourseAnimatedSection title="The 10-Week Curriculum" backgroundColor="var(--bg-warm)">
 <AnimatedReveal>
 <CourseCurriculumTimeline
 items={proCurriculumWeeks.map((week) => ({
 key: week.week,
 title: week.week,
 topics: week.topics,
 deliverable: week.deliverable,
 }))}
 />
 </AnimatedReveal>
 </CourseAnimatedSection>
 )
}

export function ProToolchain() {
 return (
 <CourseToolchainSection
 title="The Toolchain: Perplexity, Claude, Figma, Bolt"
 tools={proTools}
 track="design"
 backgroundColor="var(--bg-card)"
 />
 )
}

export function ProPlacementSection() {
 return (
 <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-warm)' }}>
 <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
 <h2 className="font-display font-bold mb-4" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
 {proPlacementSection.title}
 </h2>
 <p className="font-body font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>{proPlacementSection.intro}</p>
 <div className="space-y-4 mb-6">
 {proPlacementSection.body.map((p) => (
 <p key={p} className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{p}</p>
 ))}
 </div>
 <Link href="/placements" className="font-body inline-flex items-center gap-2 font-bold" style={{ color: 'var(--color-primary)' }}>
 View placement details
 <ArrowRight className="w-5 h-5" />
 </Link>
 </div>
 </section>
 )
}

export function ProValueStack() {
 return (
 <CourseStackInfographic
 bonuses={proBonuses}
 valueRows={proValueStack}
 emi={proEmiConfig}
 internationalUsdNote="USD 699"
 />
 )
}

export function ProGuarantee() {
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
 If you complete all 10 weeks, submit every module deliverable, attend all live sessions, and do not have a job-ready portfolio and case study at the end - you receive a 25% refund.
 </p>
 <p className="font-body mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
 Submit your claim in writing within 14 days of the final session. Students who miss sessions or skip deliverables are ineligible.
 </p>
 <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
 This guarantee does not promise a job. It promises that if you do the work, you will have the work to show.
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>
 )
}
