'use client'

import { motion } from 'framer-motion'
import { CheckCircle, X, Zap } from 'react-feather'
import { LocalizedPatternComparison, type PatternComparisonRow } from '../../pricing/LocalizedPatternComparison'
import { fadeUp, motionEase, staggerContainer, viewportOnce } from '../animated/motion'

export type CoursePatternInterruptConfig = {
  title: string
  intro: string[]
  rows: PatternComparisonRow[]
  leftHeader: string
  rightHeader: string
  highlights?: string[]
  secondaryStat?: { value: string; label: string }
  primaryStatLabel?: string
}

type CoursePatternInterruptInfographicProps = {
  config: CoursePatternInterruptConfig
}

export function CoursePatternInterruptInfographic({ config }: CoursePatternInterruptInfographicProps) {
  const winCount = config.rows.length
  const highlights = config.highlights ?? []
  const secondaryStat = config.secondaryStat ?? { value: '10', label: 'Weekly deliverables' }

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-warm)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: motionEase }}
          className="mb-8"
        >
          <div className="flex items-start gap-3 mb-4">
            <Zap className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: 'var(--color-primary)' }} />
            <h2
              className="font-display font-bold leading-tight"
              style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
            >
              {config.title}
            </h2>
          </div>
          <div className="space-y-4 max-w-3xl">
            {config.intro.map((p, i) => (
              <motion.p
                key={p.slice(0, 40)}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="font-body leading-relaxed pl-4 border-l-2"
                style={{
                  color: i === 1 ? 'var(--text-primary)' : 'var(--text-secondary)',
                  borderColor: i === 1 ? 'var(--color-accent)' : 'var(--border-default)',
                  fontWeight: i === 1 ? 500 : 400,
                }}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {highlights.length > 0 && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-wrap gap-2 mb-8"
          >
            {highlights.map((text) => (
              <motion.span
                key={text}
                variants={fadeUp}
                className="inline-flex items-center gap-2 font-body text-sm font-semibold px-4 py-2 rounded-full border"
                style={{ borderColor: 'var(--color-forest)', backgroundColor: 'var(--color-success-bg)', color: 'var(--color-forest)' }}
              >
                <CheckCircle className="w-4 h-4" />
                {text}
              </motion.span>
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-3 mb-8 max-w-md"
        >
          <div className="rounded-xl p-4 text-center border-2" style={{ borderColor: 'var(--color-primary)', backgroundColor: 'var(--bg-card)' }}>
            <p className="font-display font-bold text-3xl" style={{ color: 'var(--color-primary)' }}>
              {winCount}
            </p>
            <p className="font-body text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
              {config.primaryStatLabel ?? 'Advantages vs generic courses'}
            </p>
          </div>
          <div className="rounded-xl p-4 text-center border" style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--bg-subtle)' }}>
            <p className="font-display font-bold text-3xl" style={{ color: 'var(--text-muted)' }}>
              {secondaryStat.value}
            </p>
            <p className="font-body text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
              {secondaryStat.label}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.15 }}
        >
          <div className="hidden md:grid md:grid-cols-2 gap-3 mb-6">
            {config.rows.slice(0, 4).map((row, index) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: index * 0.06 }}
                className="rounded-xl p-4 border flex items-start justify-between gap-3"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-default)' }}
              >
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: 'var(--text-muted)' }}>
                    {row.feature}
                  </p>
                  <p className="font-body text-sm font-bold" style={{ color: 'var(--color-primary)' }}>
                    {row.pro ?? row.proInr ?? ''}
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <X className="w-4 h-4 mb-1 ml-auto" style={{ color: 'var(--text-muted)' }} aria-hidden="true" />
                  <p className="font-body text-xs line-through" style={{ color: 'var(--text-muted)' }}>
                    {row.others}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <LocalizedPatternComparison
            leftHeader={config.leftHeader}
            rightHeader={config.rightHeader}
            rows={config.rows}
            bare
          />
        </motion.div>
      </div>
    </section>
  )
}
