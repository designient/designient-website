'use client'

import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import type { Icon } from 'react-feather'
import { Award, Briefcase, Star, Target, TrendingUp, Users } from 'react-feather'
import Image from 'next/image'
import { useCurrency } from '../../../contexts/CurrencyContext'
import { pickByCurrency } from '../../../lib/localizedPricing'
import { PLACEMENT_STATS_FOOTNOTE } from '../../../lib/placementMethodology'
import { fadeUp, motionEase, staggerContainer, viewportOnce } from '../animated/motion'

type PopularSectionData = {
  title: string
  paragraphs: string[]
}

type ProPopularSectionInfographicProps = {
  section: PopularSectionData
}

type StatConfig = {
  value: string
  numericEnd?: number
  prefix?: string
  suffix?: string
  label: string
  icon: Icon
  accent: string
  bg: string
}

const POPULAR_STATS: StatConfig[] = [
  {
    value: '90%',
    numericEnd: 90,
    suffix: '%',
    label: 'Of placed designers completed Pro before their first role',
    icon: TrendingUp,
    accent: 'var(--color-forest)',
    bg: 'var(--bg-section-green)',
  },
  {
    value: '150+',
    numericEnd: 150,
    suffix: '+',
    label: 'Designers placed',
    icon: Users,
    accent: 'var(--color-primary)',
    bg: 'var(--bg-section-blue)',
  },
  {
    value: 'Rs 8L',
    label: 'Average package',
    icon: Briefcase,
    accent: 'var(--color-purple)',
    bg: 'var(--bg-section-purple)',
  },
  {
    value: '25',
    numericEnd: 25,
    label: 'Students per cohort, every cohort',
    icon: Award,
    accent: 'var(--color-highlight)',
    bg: 'var(--bg-warm)',
  },
]

const HIGHLIGHTS = [
  {
    icon: Target,
    text: 'Structured around a single outcome - a portfolio that gets responses from hiring managers',
  },
  {
    icon: Star,
    text: 'It is not the most popular because it is the cheapest or the shortest.',
  },
  {
    icon: Award,
    text: 'Every week of the curriculum produces a real, keepable artefact toward that portfolio.',
  },
]

function AnimatedStatNumber({
  numericEnd,
  prefix = '',
  suffix = '',
  displayFallback,
}: {
  numericEnd?: number
  prefix?: string
  suffix?: string
  displayFallback: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const spring = useSpring(0, { stiffness: 55, damping: 20 })
  const rounded = useTransform(spring, (v) => Math.round(v))
  const display = useTransform(rounded, (v) => `${prefix}${v}${suffix}`)

  useEffect(() => {
    if (inView && numericEnd != null) spring.set(numericEnd)
  }, [inView, numericEnd, spring])

  if (numericEnd == null) {
    return (
      <motion.span
        ref={ref}
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewportOnce}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        className="font-display font-bold text-3xl md:text-4xl"
        style={{ color: 'var(--color-primary)' }}
      >
        {displayFallback}
      </motion.span>
    )
  }

  return (
    <motion.span
      ref={ref}
      className="font-display font-bold text-3xl md:text-4xl tabular-nums"
      style={{ color: 'var(--color-primary)' }}
    >
      {display}
    </motion.span>
  )
}

export function ProPopularSectionInfographic({ section }: ProPopularSectionInfographicProps) {
  const { currency, isLoading } = useCurrency()
  const [lead, body, statsLine] = section.paragraphs
  const avgPackage = isLoading ? '…' : pickByCurrency(currency, 'Rs 8L', '$10K')
  const localizedStatsLine = statsLine.replace('Rs 8L', avgPackage)
  const popularStats = POPULAR_STATS.map((stat) =>
    stat.label === 'Average package' ? { ...stat, value: avgPackage } : stat
  )

  return (
    <section id="why-pro" className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: motionEase }}
            className="lg:col-span-5 relative w-full aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden border border-strong lg:sticky lg:top-24"
            style={{ boxShadow: 'var(--shadow-card)' }}
          >
            <Image
              src="/images/class-photos/ui-ux-design-mentor-led-session-1.webp"
              alt="mentor reviewing student UI UX portfolio during live design session"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 450px"
              loading="lazy"
            />
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.25, duration: 0.45 }}
              className="absolute bottom-4 left-4 right-4 rounded-xl px-4 py-3 border backdrop-blur-sm"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.92)',
                borderColor: 'var(--border-default)',
              }}
            >
              <p className="font-body text-xs font-bold uppercase tracking-wide mb-1" style={{ color: 'var(--color-forest)' }}>
                Designient placement track
              </p>
              <p className="font-body text-sm font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>
                {localizedStatsLine}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-7"
          >
            <motion.div variants={fadeUp} className="mb-6">
              <span
                className="inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full mb-4"
                style={{ backgroundColor: 'var(--color-accent)', color: 'var(--text-on-accent)' }}
              >
                <Star className="w-3.5 h-3.5" aria-hidden="true" />
                Most enrolled course
              </span>
              <h2
                className="font-display font-bold leading-tight"
                style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
              >
                {section.title}
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 gap-3 md:gap-4 mb-8"
            >
              {popularStats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportOnce}
                    transition={{ delay: index * 0.08, duration: 0.45, ease: motionEase }}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="rounded-2xl border p-4 md:p-5 relative overflow-hidden"
                    style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-default)' }}
                  >
                    <div
                      className="absolute top-0 right-0 w-16 h-16 rounded-bl-full opacity-40"
                      style={{ backgroundColor: stat.bg }}
                      aria-hidden="true"
                    />
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                      style={{ backgroundColor: stat.bg }}
                    >
                      <Icon className="w-4 h-4" style={{ color: stat.accent }} strokeWidth={1.5} />
                    </div>
                    <AnimatedStatNumber
                      numericEnd={stat.numericEnd}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      displayFallback={stat.value}
                    />
                    <p className="font-body text-xs md:text-sm mt-2 leading-snug" style={{ color: 'var(--text-secondary)' }}>
                      {stat.label}
                    </p>
                  </motion.div>
                )
              })}
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="font-body text-base md:text-lg leading-relaxed mb-5 pl-4 border-l-4"
              style={{ color: 'var(--text-primary)', borderColor: 'var(--color-accent)' }}
            >
              {lead}
            </motion.p>

            <motion.p variants={fadeUp} className="font-body leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              {body}
            </motion.p>

            <motion.div variants={fadeUp} className="space-y-3 mb-6">
              {HIGHLIGHTS.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
                    className="flex items-start gap-3 rounded-xl px-4 py-3 border"
                    style={{ backgroundColor: 'var(--bg-subtle)', borderColor: 'var(--border-default)' }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: 'var(--bg-section-green)' }}
                    >
                      <Icon className="w-4 h-4" style={{ color: 'var(--color-forest)' }} strokeWidth={1.5} />
                    </div>
                    <p className="font-body text-sm md:text-base leading-relaxed font-medium" style={{ color: 'var(--text-primary)' }}>
                      {item.text}
                    </p>
                  </motion.div>
                )
              })}
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportOnce}
              className="font-body text-xs leading-relaxed"
              style={{ color: 'var(--text-muted)' }}
            >
              {PLACEMENT_STATS_FOOTNOTE}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
