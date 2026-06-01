'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowRight,
  Award,
  Edit3,
  Star,
  Target,
  TrendingUp,
  Zap,
  type Icon,
} from 'react-feather'
import type { CoursesHubCard } from '../data/coursesHubData'

const highlightIcons: Record<string, Icon> = {
  'Most Popular': Star,
  'Most Advanced': Award,
  'Highest Demand 2026': TrendingUp,
  'By Application Only': Target,
}

type CoursesTrackSectionProps = {
  track: 'design' | 'ai'
  title: string
  badgeLabel: string
  badgeIcon: Icon
  accentColor: string
  cards: CoursesHubCard[]
}

function CourseHubCard({ course, accentColor }: { course: CoursesHubCard; accentColor: string }) {
  const HighlightIcon = course.highlight ? highlightIcons[course.highlight] : null

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="rounded-2xl p-6 md:p-8 h-full flex flex-col"
      style={{
        backgroundColor: 'var(--bg-card)',
        border: `1px solid var(--border-default)`,
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
      }}
    >
      <span
        className="font-body inline-block self-start px-3 py-1.5 rounded-full text-xs font-bold mb-4"
        style={{ backgroundColor: accentColor, color: 'var(--text-on-accent)' }}
      >
        {course.badge}
      </span>

      <div className="flex flex-wrap items-start gap-3 mb-4">
        <h3
          className="font-display tracking-wide leading-tight flex-1 min-w-0"
          style={{
            color: 'var(--text-primary)',
            fontWeight: 600,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
          }}
        >
          {course.title}
        </h3>
        {course.highlight && HighlightIcon && (
          <span
            className="font-body inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold flex-shrink-0"
            style={{ backgroundColor: 'var(--color-accent-muted)', color: 'var(--color-primary)' }}
          >
            <HighlightIcon className="w-3.5 h-3.5" aria-hidden="true" />
            {course.highlight}
          </span>
        )}
      </div>

      <p
        className="font-body mb-6 leading-relaxed flex-grow"
        style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)' }}
      >
        {course.description}
      </p>

      <dl className="font-body space-y-2 mb-6 text-sm" style={{ color: 'var(--text-secondary)' }}>
        <div className="flex flex-wrap gap-x-2">
          <dt className="font-semibold" style={{ color: 'var(--text-primary)' }}>Duration:</dt>
          <dd>{course.duration} · {course.totalHours}</dd>
        </div>
        <div className="flex flex-wrap gap-x-2">
          <dt className="font-semibold" style={{ color: 'var(--text-primary)' }}>Level:</dt>
          <dd>{course.level}</dd>
        </div>
        <div className="flex flex-wrap gap-x-2">
          <dt className="font-semibold" style={{ color: 'var(--text-primary)' }}>Batch size:</dt>
          <dd>{course.batchSize}</dd>
        </div>
        <div className="flex flex-wrap gap-x-2">
          <dt className="font-semibold" style={{ color: 'var(--text-primary)' }}>Price from:</dt>
          <dd>{course.priceEarlyBird} early bird · {course.priceStandard} standard</dd>
        </div>
        <div className="flex flex-wrap gap-x-2">
          <dt className="font-semibold" style={{ color: 'var(--text-primary)' }}>Certificate:</dt>
          <dd>{course.certificate}</dd>
        </div>
        <div className="flex flex-wrap gap-x-2">
          <dt className="font-semibold" style={{ color: 'var(--text-primary)' }}>Placement support:</dt>
          <dd>{course.placementSupport}</dd>
        </div>
        {course.enrollmentNote && (
          <div className="flex flex-wrap gap-x-2">
            <dt className="font-semibold" style={{ color: 'var(--text-primary)' }}>Enrollment:</dt>
            <dd>{course.enrollmentNote}</dd>
          </div>
        )}
        {course.teamEnrollment && (
          <div className="flex flex-wrap gap-x-2 items-center">
            <dt className="font-semibold" style={{ color: 'var(--text-primary)' }}>Team enrollment:</dt>
            <dd>
              {course.teamEnrollment} —{' '}
              <Link href="/corporates" className="underline hover:no-underline font-semibold" style={{ color: 'var(--color-primary)' }}>
                enquire
              </Link>
            </dd>
          </div>
        )}
      </dl>

      <Link
        href={course.path}
        className="font-body inline-flex items-center gap-2 font-bold self-start min-h-[44px] group"
        style={{ color: 'var(--color-primary)' }}
      >
        View Course
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.article>
  )
}

export function CoursesTrackSection({ track, title, badgeLabel, badgeIcon: BadgeIcon, accentColor, cards }: CoursesTrackSectionProps) {
  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: track === 'design' ? 'var(--bg-warm)' : 'var(--bg-card)' }}
    >
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-10 md:mb-14"
        >
          <span
            className="font-body inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6"
            style={{ backgroundColor: accentColor, color: 'var(--text-on-accent)' }}
          >
            <BadgeIcon className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
            {badgeLabel}
          </span>
          <h2
            className="font-display tracking-wide leading-tight"
            style={{
              color: 'var(--color-primary)',
              fontWeight: 700,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            }}
          >
            {title}
          </h2>
        </motion.div>

        <div className={`grid grid-cols-1 gap-6 ${cards.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
          {cards.map((course) => (
            <CourseHubCard key={course.path} course={course} accentColor={accentColor} />
          ))}
        </div>
      </div>
    </section>
  )
}

export { Edit3 as DesignTrackIcon, Zap as AiTrackIcon }
