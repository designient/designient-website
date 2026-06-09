'use client'

import React from 'react'
import { CheckCircle } from 'react-feather'

/** Single-axis hero column: centered on mobile, left-aligned from lg up. */
export function CourseHeroContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="course-hero-content w-full flex flex-col items-center text-center lg:items-start lg:text-left">
      {children}
    </div>
  )
}

export function CourseHeroBreadcrumbs({ children }: { children: React.ReactNode }) {
  return (
    <nav
      className="flex flex-wrap items-center justify-center lg:justify-start gap-x-1.5 gap-y-1 mb-6 text-sm w-full"
      style={{ color: 'var(--text-muted)' }}
      aria-label="Breadcrumb"
    >
      {children}
    </nav>
  )
}

export function CourseHeroBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="font-body inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-5"
      style={{ backgroundColor: 'var(--color-primary)', color: 'var(--text-on-accent)' }}
    >
      {children}
    </span>
  )
}

export function CourseHeroTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1
      className="font-display mb-5 leading-[1.1] w-full"
      style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: 'clamp(1.875rem, 4.5vw, 3.25rem)' }}
    >
      {children}
    </h1>
  )
}

export function CourseHeroSubtitle({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-body mb-8 leading-relaxed w-full max-w-[42rem] mx-auto lg:mx-0"
      style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1.0625rem, 2vw, 1.25rem)' }}
    >
      {children}
    </p>
  )
}

export function CourseHeroTrustChips({ chips }: { chips: string[] }) {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2.5 mb-8 w-full">
      {chips.map((chip) => (
        <span
          key={chip}
          className="font-body text-sm font-medium inline-flex items-center gap-1.5"
          style={{ color: 'var(--text-secondary)' }}
        >
          <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
          {chip}
        </span>
      ))}
    </div>
  )
}

export type CourseHeroStat = { value: string; label: string }

export function CourseHeroStats({
  stats,
  methodologyNote,
}: {
  stats: CourseHeroStat[]
  methodologyNote?: string
}) {
  return (
    <div className="mb-10 w-full max-w-3xl mx-auto lg:mx-0">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl p-4 bg-card shadow-sm text-center lg:text-left">
            <p className="font-display font-bold text-2xl md:text-3xl mb-1" style={{ color: 'var(--color-primary)' }}>
              {stat.value}
            </p>
            <p className="font-body text-xs md:text-sm leading-snug" style={{ color: 'var(--text-secondary)' }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      {methodologyNote && (
        <p
          className="font-body text-xs mt-3 leading-relaxed text-center lg:text-left"
          style={{ color: 'var(--text-muted)' }}
        >
          {methodologyNote}
        </p>
      )}
    </div>
  )
}

export function CourseHeroLastUpdated({ date }: { date: string }) {
  const formatted = new Date(date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  return (
    <p className="font-body text-xs mb-4 w-full" style={{ color: 'var(--text-muted)' }}>
      Last updated: {formatted}
    </p>
  )
}

export function CourseHeroSeatNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-body font-semibold mb-5 w-full" style={{ color: 'var(--text-primary)' }}>
      {children}
    </p>
  )
}

export function CourseHeroCtaRow({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col items-center lg:items-start w-full mb-5">{children}</div>
}

export function CourseHeroFootnote({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-body text-sm w-full max-w-2xl mx-auto lg:mx-0 italic leading-relaxed"
      style={{ color: 'var(--text-muted)' }}
    >
      {children}
    </p>
  )
}

/** Callout box used on workshop heroes and similar promos. */
export function CourseHeroHighlight({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-body text-sm font-semibold p-4 rounded-xl mb-6 w-full max-w-2xl mx-auto lg:mx-0 text-left leading-relaxed"
      style={{ backgroundColor: 'var(--bg-subtle)', color: 'var(--text-primary)' }}
    >
      {children}
    </p>
  )
}
