'use client'

import { PageHero } from '../../layout/PageHero'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle, ChevronRight, Shield, Star } from 'react-feather'
import { CurrencyAwareBonusStack } from '../../pricing/CurrencyAwareBonusStack'
import { CurrencyAwareValueStack } from '../../pricing/CurrencyAwareValueStack'
import { CourseUrgencyStrip, COURSE_SLUGS } from '../../pricing/CourseUrgencyStrip'
import { CrossCoursePrice, CrossCoursePriceRange } from '../../pricing/CrossCoursePrice'
import {
  AnimatedCard,
  AnimatedGrid,
  AnimatedGridItem,
  AnimatedReveal,
  CourseAnimatedSection,
  CourseCurriculumTimeline,
  CourseTrackStep,
  CourseTrackSteps,
  StaggerItem,
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
} from '../../../data/proPageData'

function ComparisonTable({
  leftHeader,
  rightHeader,
  rows,
}: {
  leftHeader: string
  rightHeader: string
  rows: { feature: string; pro: string; others: string }[]
}) {
  return (
    <div className="overflow-x-auto rounded-xl" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)' }}>
      <table className="w-full min-w-[560px]">
        <thead>
          <tr style={{ backgroundColor: 'var(--color-primary)' }}>
            <th className="p-4 text-left font-bold sticky left-0 z-10" style={{ color: 'var(--text-on-accent)', backgroundColor: 'var(--color-primary)' }}>
              Feature
            </th>
            <th className="p-4 text-center font-bold" style={{ color: 'var(--text-on-accent)' }}>{leftHeader}</th>
            <th className="p-4 text-center font-bold" style={{ color: 'var(--text-on-accent)' }}>{rightHeader}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.feature} style={{ backgroundColor: index % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-subtle)' }}>
              <td className="p-4 font-semibold sticky left-0 z-10 border-t" style={{ color: 'var(--text-primary)', borderColor: 'var(--border-default)', backgroundColor: index % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-subtle)' }}>
                {row.feature}
              </td>
              <td className="p-4 text-center border-t font-medium" style={{ color: 'var(--color-primary)', borderColor: 'var(--border-default)' }}>
                {row.pro}
              </td>
              <td className="p-4 text-center border-t" style={{ color: 'var(--text-muted)', borderColor: 'var(--border-default)' }}>
                {row.others}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function ProUrgencyStrip() {
  return (
    <CourseUrgencyStrip
      slug={COURSE_SLUGS.pro}
      prefix="Design Track — Step 2 · Most Popular"
      seatLabel="5 early bird seats remaining at"
      showRegister={false}
      suffix="Applications reviewed within 48 hours"
      claimHref="/apply-now"
      claimLabel="Apply for the Course"
    />
  )
}

export function ProHero() {
  const scrollToApply = () => {
    const el = document.getElementById('course-application-form')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    else window.location.href = '/apply-now'
  }

  return (
    <PageHero size="course" align="center">
      <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6 text-sm" style={{ color: 'var(--text-muted)' }}>
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/courses" className="hover:underline">Courses</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Design Track</span>
            <ChevronRight className="w-4 h-4" />
            <span style={{ color: 'var(--color-primary)' }}>UI UX Design Pro</span>
          </div>

          <span
            className="font-body inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6"
            style={{ backgroundColor: 'var(--color-primary)', color: 'var(--text-on-accent)' }}
          >
            <Star className="w-3.5 h-3.5" aria-hidden="true" />
            {proHero.badge}
          </span>

          <h1 className="font-display mb-6 leading-[1.1]" style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}>
            {proHero.title}
          </h1>

          <p className="font-body mb-8 leading-relaxed mx-auto" style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1.0625rem, 2vw, 1.25rem)', maxWidth: '820px' }}>
            {proHero.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-8">
            {proHero.trustChips.map((chip) => (
              <span key={chip} className="font-body text-sm font-medium flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
                <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                {chip}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl mx-auto">
            {proHero.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl p-4 bg-card shadow-sm">
                <p className="font-display font-bold text-2xl md:text-3xl mb-1" style={{ color: 'var(--color-primary)' }}>{stat.value}</p>
                <p className="font-body text-xs md:text-sm" style={{ color: 'var(--text-secondary)' }}>{stat.label}</p>
              </div>
            ))}
          </div>

          <p className="font-body font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>{proHero.seatNote}</p>

          <button
            type="button"
            onClick={scrollToApply}
            className="font-body font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform min-h-[44px] inline-flex items-center gap-2 mb-4"
            style={{ backgroundColor: 'var(--color-accent)', color: 'var(--text-on-accent)' }}
          >
            Apply for the Course
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="font-body text-sm max-w-2xl mx-auto italic" style={{ color: 'var(--text-muted)' }}>
            {proHero.bookingNote}
          </p>
      </div>
    </PageHero>
  )
}

export function ProPopularSection() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
        <h2 className="font-display font-bold mb-8 text-center" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
          {proPopularSection.title}
        </h2>
        <div className="space-y-4">
          {proPopularSection.paragraphs.map((p) => (
            <p key={p} className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProPatternInterrupt() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-warm)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <h2 className="font-display font-bold mb-6" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
          {proPatternComparison.title}
        </h2>
        <div className="space-y-4 mb-10">
          {proPatternComparison.intro.map((p) => (
            <p key={p} className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{p}</p>
          ))}
        </div>
        <ComparisonTable leftHeader="UI UX Design Pro" rightHeader="Generic Online UI UX Courses" rows={proPatternComparison.rows} />
      </div>
    </section>
  )
}

export function ProLearningPath() {
  return (
    <CourseAnimatedSection title="Your Path Before and After This Course" backgroundColor="var(--bg-base)">
      <StaggerItem>
        <AnimatedCard variant="primary">
          <p className="font-body text-sm font-bold mb-2 tracking-wide" style={{ color: 'var(--color-primary)' }}>
            DESIGN TRACK
          </p>
          <CourseTrackSteps>
            <CourseTrackStep index={0}>
              <Link href="/ui-ux-design-bootcamp" className="course-inline-link">
                UI UX Design Bootcamp
              </Link>{' '}
              (3 days · <CrossCoursePriceRange slug={COURSE_SLUGS.bootcamp} />) — recommended if you have never designed before
            </CourseTrackStep>
            <CourseTrackStep index={1} active>
              <strong style={{ color: 'var(--text-primary)' }}>UI UX Design Pro ← You are here</strong>
            </CourseTrackStep>
            <CourseTrackStep index={2}>
              <Link href="/ui-ux-design-master" className="course-inline-link">
                UI UX Design Master
              </Link>{' '}
              (6 months · <CrossCoursePrice slug={COURSE_SLUGS.master} />) — for designers who want to reach lead and senior level
            </CourseTrackStep>
          </CourseTrackSteps>
        </AnimatedCard>
      </StaggerItem>

      <StaggerItem className="mt-6">
        <AnimatedCard variant="dashed">
          <p className="font-body text-sm font-bold mb-3 tracking-wide" style={{ color: 'var(--color-highlight)' }}>
            CROSS-TRACK BRIDGE — RECOMMENDED FOR PRO GRADUATES
          </p>
          <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            After completing this course, Pro graduates who are moving into AI-product-focused roles are recommended to take the{' '}
            <Link href="/ai-product-design-course" className="course-inline-link">
              AI Product Design Course
            </Link>{' '}
            next. That course goes 6 weeks deep on designing AI behaviour — trust UI, error states, confidence design — which is the fastest-growing specialisation in the Indian product design market in 2026. Pro gives you the design foundation. AI Product Design gives you the AI specialisation.
          </p>
        </AnimatedCard>
      </StaggerItem>

      <StaggerItem className="mt-8">
        <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          <strong style={{ color: 'var(--text-primary)' }}>Not started yet?</strong> If you have never designed before, the{' '}
          <Link href="/ui-ux-design-bootcamp" className="course-inline-link">
            UI UX Design Bootcamp
          </Link>{' '}
          is a 3-day, <CrossCoursePrice slug={COURSE_SLUGS.bootcamp} /> entry point that lets you complete a full design process and confirm the path before committing to 10 weeks.
        </p>
      </StaggerItem>
    </CourseAnimatedSection>
  )
}

export function ProWhatYouBuild() {
  return (
    <CourseAnimatedSection
      title="What You Will Build and Ship in 10 Weeks"
      subtitle="A complete design portfolio. Every artefact listed below is built during the course — not after it."
      backgroundColor="var(--bg-card)"
    >
      {proPortfolioModules.map((mod) => (
        <StaggerItem key={mod.title}>
          <AnimatedCard variant="subtle">
            <h3 className="font-display font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
              {mod.title}
            </h3>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {mod.description}
            </p>
          </AnimatedCard>
        </StaggerItem>
      ))}
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
    <CourseAnimatedSection
      title="The Toolchain: Perplexity, Claude, FigJam AI, Figma, Bolt"
      backgroundColor="var(--bg-card)"
    >
      <AnimatedGrid>
        {proTools.map((tool) => (
          <AnimatedGridItem key={tool.name}>
            <AnimatedCard variant="subtle" className="h-full p-5">
              <h3 className="font-display font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
                {tool.name}
              </h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {tool.description}
              </p>
            </AnimatedCard>
          </AnimatedGridItem>
        ))}
      </AnimatedGrid>
    </CourseAnimatedSection>
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

export function ProBonusStack() {
  return <CurrencyAwareBonusStack bonuses={proBonuses} />
}

export function ProValueStack() {
  return <CurrencyAwareValueStack rows={proValueStack} emi={proEmiConfig} internationalUsdNote="USD 699" />
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
                If you complete all 10 weeks, submit every module deliverable, attend all live sessions, and do not have a job-ready portfolio and case study at the end — you receive a 25% refund.
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
