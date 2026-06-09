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
} from '../layout'
import Link from 'next/link'
import { ChevronRight, Shield, Target } from 'react-feather'
import { LocalizedBookingTokenNote, LocalizedCourseSeatNote } from '../../pricing/LocalizedCourseHeroPricing'
import { LocalizedPriceText } from '../../pricing/LocalizedPriceText'
import { CourseUrgencyStrip, COURSE_SLUGS } from '../../pricing/CourseUrgencyStrip'
import {
 CourseLearningPathInfographic,
 CoursePatternInterruptInfographic,
 CourseStackInfographic,
 CourseWhatYouBuildInfographic,
} from '../infographics'
import { fadeUp } from '../animated/motion'
import { motion } from 'framer-motion'
import {
 AnimatedCard,
 CourseAnimatedSection,
 StaggerItem,
} from '../animated'
import { motionEase, viewportOnce } from '../animated/motion'
import {
 aiProductBonuses,
 aiProductCurriculumWeeks,
 aiProductEightStates,
 aiProductHero,
 aiProductPatternComparison,
 aiProductPriceJustification,
 aiProductShipArtifacts,
 aiProductTools,
 aiProductEmiConfig,
 aiProductValueStack,
 aiProductPricingFeatures,
} from '../../../data/aiProductDesignPageData'

import { scrollToElement, getPrimaryScrollTarget } from '../../../lib/enrollmentActions'
import { getEnrollmentConfig } from '../../../data/courseEnrollmentConfig'

function scrollToApply() {
 const config = getEnrollmentConfig('ai-product-design-course')
 if (config) scrollToElement(getPrimaryScrollTarget(config))
}

export function AIProductUrgencyStrip() {
 return (
 <CourseUrgencyStrip
 slug={COURSE_SLUGS.aiProduct}
 prefix="AI Track · Step 2 · By Application Only · Cohort 1 open. 12 seats"
 seatLabel="5 early bird seats at"
 showRegister={false}
 suffix="Applications reviewed within 48 hours"
 onRegister={scrollToApply}
 claimLabel="Apply for the Course"
 />
 )
}

export function AIProductHero() {
 return (
 <CourseHeroWithSidebar
 courseSlug="ai-product-design-course"
 courseName="AI Product Design Course"
 duration="6 Weeks"
 features={aiProductPricingFeatures}
 emiConfig={aiProductEmiConfig}
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
 <span style={{ color: 'var(--color-primary)' }}>AI Product Design</span>
 </CourseHeroBreadcrumbs>

 <CourseHeroBadge>
 <Target className="w-3.5 h-3.5" aria-hidden="true" />
 {aiProductHero.badge}
 </CourseHeroBadge>
 <CourseHeroTitle>{aiProductHero.title}</CourseHeroTitle>
 <CourseHeroSubtitle>{aiProductHero.subtitle}</CourseHeroSubtitle>
 <CourseHeroTrustChips chips={aiProductHero.trustChips} />
 <CourseHeroLastUpdated date={aiProductHero.lastUpdated} />
 <CourseHeroStats stats={aiProductHero.stats} />
 <CourseHeroSeatNote>
  <LocalizedCourseSeatNote slug={COURSE_SLUGS.aiProduct} earlyBirdSeats={5} reviewHours={48} />
 </CourseHeroSeatNote>
 <CourseHeroCtaRow>
 <EnrollmentActionButton
 courseSlug="ai-product-design-course"
 className="font-body font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform min-h-[44px] inline-flex items-center gap-2"
 style={{ backgroundColor: 'var(--color-accent)', color: 'var(--text-on-accent)' }}
 />
 </CourseHeroCtaRow>
 <CourseHeroFootnote>
  <LocalizedBookingTokenNote slug={COURSE_SLUGS.aiProduct} percentLabel="10% of early bird fee" />
 </CourseHeroFootnote>
 </CourseHeroContent>
 </CourseHeroWithSidebar>
 )
}

export function AIProductPatternInterrupt() {
 return (
  <CoursePatternInterruptInfographic
   config={{
    title: aiProductPatternComparison.title,
    intro: aiProductPatternComparison.intro,
    rows: aiProductPatternComparison.rows,
    leftHeader: 'This Course',
    rightHeader: 'Generic AI + Design Courses',
    highlights: ['12 students per cohort', 'Application-based enrollment', 'All 8 AI states designed'],
    secondaryStat: { value: '8', label: 'AI states in Figma' },
   }}
  />
 )
}

export function AIProductWhatYouShip() {
 return (
 <CourseAnimatedSection id="what-you-build" title="What You Will Ship in 6 Weeks" backgroundColor="var(--bg-card)" maxWidthClass="max-w-5xl">
 <CourseWhatYouBuildInfographic
  modules={aiProductShipArtifacts.map((item) => ({
   title: item.title,
   description: `${item.description} · ${item.supporting}`,
  }))}
  progress={{
   startLabel: 'Week 1',
   endLabel: 'Week 6',
   pathLabel: '6-week ship path',
   stats: [
    { value: '2', label: 'Portfolio case studies' },
    { value: '8', label: 'AI states designed' },
    { value: '1', label: 'Functional AI prototype' },
   ],
   footerMessage: 'Every artefact below is shipped during the course - not after it.',
  }}
 />
 </CourseAnimatedSection>
 )
}

export function AIProductPriceJustification() {
 return (
 <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-base)' }}>
 <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
 <h2 className="font-display font-bold mb-4" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
 {aiProductPriceJustification.title}
 </h2>
 <p className="font-body mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{aiProductPriceJustification.intro}</p>
 <ol className="space-y-6 mb-8 list-none pl-0">
 {aiProductPriceJustification.points.map((point, i) => (
 <li key={point.title}>
 <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
 {i + 1}. {point.title}
 </p>
 <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
  {i === 3 ? (
   <>
    A handful of programs abroad cover this at comparable depth - at USD 1,500 to USD 2,000, self-paced, no live critique, no portfolio output. At{' '}
    <LocalizedPriceText inr="Rs 64,999" usd="USD 899" /> with live mentorship and two deployable case studies, the price is structurally lower than every international equivalent.
   </>
  ) : (
   point.body
  )}
 </p>
 </li>
 ))}
 </ol>
 <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
 {aiProductPriceJustification.closing}{' '}
 <Link href="/ui-ux-design-pro" className="course-inline-link">
 UI UX Design Pro
 </Link>{' '}
 is the foundation course this specialisation builds on.
 </p>
 </div>
 </section>
 )
}

export function AIProductCurriculum() {
 return (
 <CourseAnimatedSection title="The 6-Week Curriculum" backgroundColor="var(--bg-warm)">
 {aiProductCurriculumWeeks.map((week) => (
 <StaggerItem key={week.week}>
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
 <strong>Tools:</strong> {session.tools}
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

export function AIProductEightStatesSection() {
 return (
 <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-card)' }}>
 <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
 <h2 className="font-display font-bold mb-4" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
 Every AI State Designed - From Confident Output to Graceful Failure
 </h2>
 <p className="font-body mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
 By end of week 3, every student has a Figma component library with all 8 AI states built. Production-ready. Built on a real product problem.
 </p>
 <ol className="font-body space-y-3 mb-8 ml-6 list-decimal" style={{ color: 'var(--text-secondary)' }}>
 {aiProductEightStates.map((state) => (
 <li key={state} className="leading-relaxed">{state}</li>
 ))}
 </ol>
 <p className="font-body font-semibold" style={{ color: 'var(--text-primary)' }}>
 Most AI products design only states 1 and 3. This course designs all 8.
 </p>
 </div>
 </section>
 )
}

export function AIProductToolchain() {
 return (
 <CourseToolchainSection
 title="The Toolchain: Perplexity, Claude, Figma, Bolt"
 tools={aiProductTools}
 track="ai"
 backgroundColor="var(--bg-warm)"
 />
 )
}

export function AIProductLearningPath() {
 return (
  <CourseLearningPathInfographic
   title="Your Path to and from This Course"
   subtitle="AI Track progression - where this specialisation sits."
   steps={[
    { label: 'Step 1', title: 'AI Automation Accelerator', href: '/ai-automation-accelerator', priceSlug: COURSE_SLUGS.aiAutomation, priceRange: true, note: 'automation foundation' },
    { label: 'Step 2', title: 'AI Product Design Course', note: 'You are here', active: true },
   ]}
  >
   <motion.div variants={fadeUp} className="rounded-xl px-5 py-4 border mb-6" style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--bg-card)' }}>
    <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
     Pro graduates receive <LocalizedPriceText inr="Rs 5,000" usd="USD 49" /> off. Open to{' '}
     <Link href="/ui-ux-design-pro" className="course-inline-link">UI UX Design Pro</Link> graduates and experienced PMs.
    </p>
   </motion.div>
   <motion.div variants={fadeUp} className="rounded-xl px-5 py-4 border mb-6" style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--bg-card)' }}>
    <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
     After this course, consider <Link href="/ui-ux-design-master" className="course-inline-link">UI UX Design Master</Link> for the full senior design curriculum in parallel.
    </p>
   </motion.div>
   <motion.div variants={fadeUp} className="rounded-2xl border-2 border-dashed p-5" style={{ borderColor: 'var(--color-highlight)', backgroundColor: 'var(--bg-warm)' }}>
    <p className="font-body text-sm font-bold mb-2" style={{ color: 'var(--color-highlight)' }}>FREE ENTRY POINT</p>
    <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
     Try the free <Link href="/ai-product-design-live" className="course-inline-link">AI Product Design Live</Link> workshop first.
    </p>
   </motion.div>
  </CourseLearningPathInfographic>
 )
}

export function AIProductBonusStack() {
 return null
}

export function AIProductValueStack() {
 return (
  <CourseStackInfographic
   bonuses={aiProductBonuses}
   valueRows={aiProductValueStack}
   emi={aiProductEmiConfig}
   internationalUsdNote="USD 899"
   savingsPercent={82}
  />
 )
}

export function AIProductGuarantee() {
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
 If you attend every session, submit every deliverable on time, and still do not have a portfolio-quality audit case study and functional prototype at course end - you receive a 25% refund.
 </p>
 <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
 Written claim within 14 days of the final session. Students who miss sessions or skip deliverables are ineligible. Full terms at{' '}
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
