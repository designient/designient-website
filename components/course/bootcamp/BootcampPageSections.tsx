'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle, ChevronRight, Shield } from 'react-feather'
import { CurrencyAwareBonusStack } from '../../pricing/CurrencyAwareBonusStack'
import { CurrencyAwareValueStack } from '../../pricing/CurrencyAwareValueStack'
import { CourseUrgencyStrip, COURSE_SLUGS } from '../../pricing/CourseUrgencyStrip'
import { CrossCoursePrice } from '../../pricing/CrossCoursePrice'
import {
  bootcampBonuses,
  bootcampComparison,
  bootcampDeliverables,
  bootcampHero,
  bootcampPatternComparison,
  bootcampSchedule,
  bootcampTools,
  bootcampValueStack,
} from '../../../data/bootcampPageData'

function ComparisonTable({
  title,
  leftHeader,
  rightHeader,
  rows,
}: {
  title: string
  leftHeader: string
  rightHeader: string
  rows: { feature: string; bootcamp: string; others: string }[]
}) {
  return (
    <div className="overflow-x-auto rounded-xl" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)' }}>
      <table className="w-full min-w-[560px]">
        <thead>
          <tr style={{ backgroundColor: 'var(--color-primary)' }}>
            <th className="p-4 text-left font-bold sticky left-0 z-10" style={{ color: 'var(--text-on-accent)', backgroundColor: 'var(--color-primary)' }}>
              Feature
            </th>
            <th className="p-4 text-center font-bold" style={{ color: 'var(--text-on-accent)' }}>
              {leftHeader}
            </th>
            <th className="p-4 text-center font-bold" style={{ color: 'var(--text-on-accent)' }}>
              {rightHeader}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.feature} style={{ backgroundColor: index % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-subtle)' }}>
              <td
                className="p-4 font-semibold sticky left-0 z-10 border-t"
                style={{ color: 'var(--text-primary)', borderColor: 'var(--border-default)', backgroundColor: index % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-subtle)' }}
              >
                {row.feature}
              </td>
              <td className="p-4 text-center border-t font-medium" style={{ color: 'var(--color-primary)', borderColor: 'var(--border-default)' }}>
                {row.bootcamp}
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

export function BootcampUrgencyStrip() {
  return (
    <CourseUrgencyStrip
      slug={COURSE_SLUGS.bootcamp}
      prefix="Design Track — Step 1"
      earlyBirdSeats={50}
      showRegister={false}
      suffix="Next cohort filling fast"
      claimHref="/apply-now"
      claimLabel="Claim My Seat"
    />
  )
}

export function BootcampHero() {
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
            <span style={{ color: 'var(--color-primary)' }}>UI UX Design Bootcamp</span>
          </div>

          <span
            className="font-body inline-block px-4 py-2 rounded-full text-xs font-bold mb-6"
            style={{ backgroundColor: 'var(--color-primary)', color: 'var(--text-on-accent)' }}
          >
            {bootcampHero.badge}
          </span>

          <h1
            className="font-display mb-6 leading-[1.1]"
            style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}
          >
            {bootcampHero.title}
          </h1>

          <p className="font-body mb-8 leading-relaxed mx-auto" style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1.0625rem, 2vw, 1.25rem)', maxWidth: '820px' }}>
            {bootcampHero.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-8">
            {bootcampHero.trustChips.map((chip) => (
              <span key={chip} className="font-body text-sm font-medium flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
                <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                {chip}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl mx-auto">
            {bootcampHero.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl p-4 bg-card shadow-sm">
                <p className="font-display font-bold text-2xl md:text-3xl mb-1" style={{ color: 'var(--color-primary)' }}>
                  {stat.value}
                </p>
                <p className="font-body text-xs md:text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <p className="font-body font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
            {bootcampHero.seatNote}
          </p>

          <button
            type="button"
            onClick={scrollToApply}
            className="font-body font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform min-h-[44px] inline-flex items-center gap-2 mb-4"
            style={{ backgroundColor: 'var(--color-accent)', color: 'var(--text-on-accent)' }}
          >
            Claim My Seat
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="font-body text-sm max-w-2xl mx-auto italic" style={{ color: 'var(--text-muted)' }}>
            {bootcampHero.guaranteeNote}
          </p>
        </div>
      </div>
    </section>
  )
}

export function BootcampPatternInterrupt() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-display font-bold mb-6 text-center" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
            {bootcampPatternComparison.title}
          </h2>
          <div className="space-y-4 mb-10">
            {bootcampPatternComparison.intro.map((p) => (
              <p key={p} className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {p}
              </p>
            ))}
          </div>
          <ComparisonTable
            title=""
            leftHeader="This Bootcamp"
            rightHeader="Recorded Design Courses"
            rows={bootcampPatternComparison.rows}
          />
        </motion.div>
      </div>
    </section>
  )
}

export function BootcampLearningPath() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-warm)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <h2 className="font-display font-bold mb-8 text-center" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
          Your Path After This Bootcamp
        </h2>

        <div className="space-y-8 mb-8">
          <div className="rounded-2xl p-6 md:p-8" style={{ backgroundColor: 'var(--bg-card)', border: '2px solid var(--color-primary)' }}>
            <p className="font-body text-sm font-bold mb-4 tracking-wide" style={{ color: 'var(--color-primary)' }}>DESIGN TRACK</p>
            <ol className="font-body space-y-3" style={{ color: 'var(--text-secondary)' }}>
              <li><strong style={{ color: 'var(--text-primary)' }}>Step 1:</strong> UI UX Design Bootcamp <span style={{ color: 'var(--color-primary)' }}>← You are here</span></li>
              <li><strong style={{ color: 'var(--text-primary)' }}>Step 2:</strong> <Link href="/ui-ux-design-pro" className="underline font-semibold" style={{ color: 'var(--color-primary)' }}>UI UX Design Pro</Link> (10 weeks · <CrossCoursePrice slug={COURSE_SLUGS.pro} />)</li>
              <li><strong style={{ color: 'var(--text-primary)' }}>Step 3:</strong> <Link href="/ui-ux-design-master" className="underline font-semibold" style={{ color: 'var(--color-primary)' }}>UI UX Design Master</Link> (6 months · <CrossCoursePrice slug={COURSE_SLUGS.master} />)</li>
            </ol>
          </div>

          <div className="rounded-2xl p-6 md:p-8" style={{ backgroundColor: 'var(--bg-card)', border: '2px solid var(--color-highlight)' }}>
            <p className="font-body text-sm font-bold mb-4 tracking-wide" style={{ color: 'var(--color-highlight)' }}>AI TRACK (separate track, no design background required)</p>
            <ol className="font-body space-y-3" style={{ color: 'var(--text-secondary)' }}>
              <li><strong style={{ color: 'var(--text-primary)' }}>Step 1:</strong> <Link href="/ai-automation-accelerator" className="underline font-semibold" style={{ color: 'var(--color-primary)' }}>AI Automation Accelerator</Link> (8 weeks)</li>
              <li><strong style={{ color: 'var(--text-primary)' }}>Step 2:</strong> <Link href="/ai-product-design-course" className="underline font-semibold" style={{ color: 'var(--color-primary)' }}>AI Product Design Course</Link> (6 weeks)</li>
            </ol>
          </div>
        </div>

        <p className="font-body mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          <strong style={{ color: 'var(--text-primary)' }}>Not sure which track?</strong> The Design Track is for anyone who wants to become a UI/UX designer. The AI Track is for working professionals and freelancers who want to build AI-powered automation workflows. Both tracks are available regardless of your background.
        </p>
        <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          The UI UX Design Bootcamp is the fastest way to confirm whether design is the right path for you before committing to the 10-week Pro course. 90% of Pro students come through the Bootcamp first.
        </p>
      </div>
    </section>
  )
}

export function BootcampWhatYouBuild() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <h2 className="font-display font-bold mb-4 text-center" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
          What You Will Build This Weekend
        </h2>
        <p className="font-body text-center mb-10" style={{ color: 'var(--text-secondary)' }}>
          Five artefacts. All built live. All yours to keep and present.
        </p>
        <div className="space-y-6">
          {bootcampDeliverables.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-xl p-6"
              style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-default)' }}
            >
              <h3 className="font-display font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {index + 1}. {item.title}
              </h3>
              <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function BootcampSchedule() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-warm)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <h2 className="font-display font-bold mb-10 text-center" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
          Friday, Saturday, Sunday — The Full Schedule
        </h2>
        <div className="space-y-8">
          {bootcampSchedule.map((day) => (
            <div key={day.title} className="rounded-2xl p-6 md:p-8 bg-card shadow-sm">
              <h3 className="font-display font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                {day.title}
              </h3>
              <p className="font-body mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {day.body}
              </p>
              <p className="font-body text-sm mb-1"><strong>Tools:</strong> {day.tools}</p>
              <p className="font-body text-sm"><strong>Deliverable:</strong> {day.deliverable}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function BootcampToolchain() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <h2 className="font-display font-bold mb-4 text-center" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
          The Toolchain: Perplexity, Claude, FigJam AI, Figma Make, Figma, Claude Design, Bolt
        </h2>
        <p className="font-body text-center mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          Seven tools. Each taught in context — not as a separate lesson, but as part of the workflow at the moment you need it.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {bootcampTools.map((tool) => (
            <div key={tool.name} className="rounded-xl p-5" style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-default)' }}>
              <h3 className="font-display font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
                {tool.name}
              </h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function BootcampBonusStack() {
  return <CurrencyAwareBonusStack bonuses={bootcampBonuses} />
}

export function BootcampValueStack() {
  return <CurrencyAwareValueStack rows={bootcampValueStack} />
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
                If you do not have a portfolio-worthy prototype, a written case study, and a certificate by Sunday 7pm — you receive a full refund. No conditions. Claim by Monday midnight.
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

export function BootcampComparison() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <h2 className="font-display font-bold mb-8 text-center" style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
          Comparison
        </h2>
        <ComparisonTable
          title=""
          leftHeader="Designient Bootcamp"
          rightHeader="Generic Online Design Courses"
          rows={bootcampComparison.rows}
        />
      </div>
    </section>
  )
}
