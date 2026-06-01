'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Award, CheckCircle, ChevronRight, Shield } from 'react-feather'
import { CurrencyAwareBonusStack } from '../../pricing/CurrencyAwareBonusStack'
import { CurrencyAwareValueStack } from '../../pricing/CurrencyAwareValueStack'
import { CourseUrgencyStrip, COURSE_SLUGS } from '../../pricing/CourseUrgencyStrip'
import {
  masterAdvancedSection,
  masterAiDistinction,
  masterBonuses,
  masterCurriculumModules,
  masterEmiConfig,
  masterHero,
  masterPatternComparison,
  masterPortfolioOutputs,
  masterValueStack,
} from '../../../data/masterPageData'

function ComparisonTable({
  leftHeader,
  rightHeader,
  rows,
}: {
  leftHeader: string
  rightHeader: string
  rows: { feature: string; master: string; others: string }[]
}) {
  return (
    <div className="overflow-x-auto rounded-xl" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)' }}>
      <table className="w-full min-w-[560px]">
        <thead>
          <tr style={{ backgroundColor: 'var(--color-primary)' }}>
            <th className="p-4 text-left font-bold sticky left-0 z-10" style={{ color: 'var(--text-on-accent)', backgroundColor: 'var(--color-primary)' }}>Feature</th>
            <th className="p-4 text-center font-bold" style={{ color: 'var(--text-on-accent)' }}>{leftHeader}</th>
            <th className="p-4 text-center font-bold" style={{ color: 'var(--text-on-accent)' }}>{rightHeader}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.feature} style={{ backgroundColor: index % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-subtle)' }}>
              <td className="p-4 font-semibold sticky left-0 z-10 border-t" style={{ color: 'var(--text-primary)', borderColor: 'var(--border-default)', backgroundColor: index % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-subtle)' }}>{row.feature}</td>
              <td className="p-4 text-center border-t font-medium" style={{ color: 'var(--color-primary)', borderColor: 'var(--border-default)' }}>{row.master}</td>
              <td className="p-4 text-center border-t" style={{ color: 'var(--text-muted)', borderColor: 'var(--border-default)' }}>{row.others}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function MasterUrgencyStrip() {
  return (
    <CourseUrgencyStrip
      slug={COURSE_SLUGS.master}
      prefix="Design Track — Step 3 · Most Advanced · Cohort now open. 15 seats"
      seatLabel="5 early bird seats at"
      showRegister={false}
      suffix="Applications reviewed within 48 hours"
      claimHref="/apply-now"
      claimLabel="Apply for the Course"
    />
  )
}

export function MasterHero() {
  const scrollToApply = () => {
    const el = document.getElementById('course-application-form')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    else window.location.href = '/apply-now'
  }

  return (
    <section className="relative overflow-hidden pt-8 md:pt-12 pb-16 md:pb-24 hero-glow" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full filter blur-3xl decorative-orb" />
      </div>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6 text-sm" style={{ color: 'var(--text-muted)' }}>
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/courses" className="hover:underline">Courses</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Design Track</span>
            <ChevronRight className="w-4 h-4" />
            <span style={{ color: 'var(--color-primary)' }}>UI UX Design Master</span>
          </div>

          <span className="font-body inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--text-on-accent)' }}>
            <Award className="w-3.5 h-3.5" aria-hidden="true" />
            {masterHero.badge}
          </span>

          <h1 className="font-display mb-6 leading-[1.1]" style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}>
            {masterHero.title}
          </h1>

          <p className="font-body mb-8 leading-relaxed mx-auto" style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1.0625rem, 2vw, 1.25rem)', maxWidth: '820px' }}>
            {masterHero.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-8">
            {masterHero.trustChips.map((chip) => (
              <span key={chip} className="font-body text-sm font-medium flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
                <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                {chip}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl mx-auto">
            {masterHero.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl p-4 bg-card shadow-sm">
                <p className="font-display font-bold text-2xl md:text-3xl mb-1" style={{ color: 'var(--color-primary)' }}>{stat.value}</p>
                <p className="font-body text-xs md:text-sm" style={{ color: 'var(--text-secondary)' }}>{stat.label}</p>
              </div>
            ))}
          </div>

          <p className="font-body font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>{masterHero.seatNote}</p>

          <button type="button" onClick={scrollToApply} className="font-body font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform min-h-[44px] inline-flex items-center gap-2 mb-4" style={{ backgroundColor: 'var(--color-accent)', color: 'var(--text-on-accent)' }}>
            Apply for the Course
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="font-body text-sm max-w-2xl mx-auto italic" style={{ color: 'var(--text-muted)' }}>{masterHero.bookingNote}</p>
        </div>
      </div>
    </section>
  )
}

export function MasterAdvancedSection() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
        <h2 className="font-display font-bold mb-8 text-center" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
          {masterAdvancedSection.title}
        </h2>
        <div className="space-y-4">
          {masterAdvancedSection.paragraphs.map((p) => (
            <p key={p} className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export function MasterPatternInterrupt() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-warm)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <h2 className="font-display font-bold mb-6" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
          {masterPatternComparison.title}
        </h2>
        <div className="space-y-4 mb-10">
          {masterPatternComparison.intro.map((p) => (
            <p key={p} className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{p}</p>
          ))}
        </div>
        <ComparisonTable leftHeader="UI UX Design Master" rightHeader="Generic Advanced Design Courses" rows={masterPatternComparison.rows} />
      </div>
    </section>
  )
}

export function MasterWhatYouBuild() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <h2 className="font-display font-bold mb-4 text-center" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
          What You Will Build and Deliver in 6 Months
        </h2>
        <p className="font-body mb-4" style={{ color: 'var(--text-secondary)' }}>
          Across 6 months and 6 modules, you build a portfolio that reflects senior-level thinking — not just execution. The artefacts are real deliverables on real briefs, reviewed by mentors and in some modules by client stakeholders.
        </p>
        <p className="font-body font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>By the end of month 6:</p>
        <ul className="space-y-3">
          {masterPortfolioOutputs.map((item) => (
            <li key={item} className="font-body flex items-start gap-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function MasterCurriculum() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-warm)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <h2 className="font-display font-bold mb-10 text-center" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
          The 6-Month Curriculum
        </h2>
        <div className="space-y-6">
          {masterCurriculumModules.map((mod) => (
            <div key={mod.title} className="rounded-xl p-6 md:p-8 bg-card shadow-sm">
              <h3 className="font-display font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{mod.title}</h3>
              <p className="font-body mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{mod.body}</p>
              <p className="font-body text-sm mb-1"><strong>Tools:</strong> {mod.tools}</p>
              <p className="font-body text-sm"><strong style={{ color: 'var(--color-primary)' }}>Deliverable:</strong> {mod.deliverable}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
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
            <Link href="/ai-product-design-course" className="underline font-semibold" style={{ color: 'var(--color-primary)' }}>
              AI Product Design Course
            </Link>{' '}
            is a separate 6-week standalone course that goes significantly deeper on the execution layer — designing all 8 AI states in Figma, writing full AI behaviour specifications, building functional Bolt/v0 prototypes of AI features, and producing two portfolio case studies specifically in AI product design. That course is built for designers and PMs who want AI product design as their primary specialisation — not as one module within a broader curriculum.
          </p>
        </div>
        <div className="rounded-2xl p-6 md:p-8" style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-default)' }}>
          <p className="font-body font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Who should take which:</p>
          <ul className="space-y-4">
            {masterAiDistinction.whoShouldTake.map((item) => (
              <li key={item.scenario} className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>{item.scenario}</strong> — {item.course}
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
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-warm)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <h2 className="font-display font-bold mb-8 text-center" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
          Your Path Before and After This Course
        </h2>

        <div className="rounded-2xl p-6 md:p-8 mb-8" style={{ backgroundColor: 'var(--bg-card)', border: '2px solid var(--color-primary)' }}>
          <p className="font-body text-sm font-bold mb-4 tracking-wide" style={{ color: 'var(--color-primary)' }}>DESIGN TRACK</p>
          <ol className="font-body space-y-3 mb-6" style={{ color: 'var(--text-secondary)' }}>
            <li>
              Step 1:{' '}
              <Link href="/ui-ux-design-bootcamp" className="underline font-semibold" style={{ color: 'var(--color-primary)' }}>UI UX Design Bootcamp</Link> (3 days) — the entry point
            </li>
            <li>
              Step 2:{' '}
              <Link href="/ui-ux-design-pro" className="underline font-semibold" style={{ color: 'var(--color-primary)' }}>UI UX Design Pro</Link> (10 weeks) — the foundation
            </li>
            <li>
              Step 3: <strong style={{ color: 'var(--text-primary)' }}>UI UX Design Master ← You are here</strong> — the advanced curriculum
            </li>
          </ol>
          <p className="font-body font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Prerequisites for this course:</p>
          <ul className="font-body space-y-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <li>Option A: Completion of UI UX Design Pro</li>
            <li>Option B: 1 or more years of professional design experience in any role</li>
          </ul>
        </div>

        <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          <strong style={{ color: 'var(--text-primary)' }}>After Master:</strong> The natural progression is the{' '}
          <Link href="/ai-product-design-course" className="underline font-semibold" style={{ color: 'var(--color-primary)' }}>
            AI Product Design Course
          </Link>{' '}
          for designers moving into AI-native product roles. Master gives you the advanced design foundation. AI Product Design gives you the AI specialisation. Together they represent the most complete senior product designer curriculum Designient offers.
        </p>
      </div>
    </section>
  )
}

export function MasterBonusStack() {
  return <CurrencyAwareBonusStack bonuses={masterBonuses} />
}

export function MasterValueStack() {
  return <CurrencyAwareValueStack rows={masterValueStack} emi={masterEmiConfig} internationalUsdNote="USD 1,399" />
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
                If you complete all 6 months, submit every module deliverable on time, attend all live sessions, and do not have a diploma-standard portfolio at the end — you receive a 25% refund.
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
          Placement support begins in month 6 and continues for 6 months after graduation — portfolio review, resume and LinkedIn work, mock interviews, and partner introductions where appropriate.
        </p>
        <Link href="/placements" className="font-body inline-flex items-center gap-2 font-bold" style={{ color: 'var(--color-primary)' }}>
          View placement details
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
