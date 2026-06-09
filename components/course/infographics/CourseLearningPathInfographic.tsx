'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Map } from 'react-feather'
import { CrossCoursePrice, CrossCoursePriceRange } from '../../pricing/CrossCoursePrice'
import type { CourseSlug } from '../../../lib/localizedPricing'
import { fadeUp, motionEase, staggerContainer, viewportOnce } from '../animated/motion'

export type LearningPathStep = {
  label: string
  title: string
  href?: string
  priceSlug?: CourseSlug
  priceRange?: boolean
  durationPrefix?: string
  note: string
  active?: boolean
}

type CourseLearningPathInfographicProps = {
  title?: string
  subtitle: string
  steps: LearningPathStep[]
  children?: React.ReactNode
}

export function CourseLearningPathInfographic({
  title = 'Your Path Before and After This Course',
  subtitle,
  steps,
  children,
}: CourseLearningPathInfographicProps) {
  const cols = steps.length <= 2 ? 2 : steps.length <= 3 ? 3 : 4

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: motionEase }}
          className="flex items-center gap-3 mb-3"
        >
          <Map className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
          <h2
            className="font-display font-bold"
            style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
          >
            {title}
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ delay: 0.1 }}
          className="font-body mb-10 max-w-2xl"
          style={{ color: 'var(--text-muted)' }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative"
        >
          {steps.length > 1 && (
            <div
              className="hidden md:block absolute top-12 left-[8%] right-[8%] h-1 rounded-full"
              style={{ background: 'linear-gradient(90deg, var(--color-forest), var(--color-accent), var(--color-primary))' }}
              aria-hidden="true"
            />
          )}

          <div
            className={`grid grid-cols-1 gap-4 md:gap-5 mb-8 ${
              cols === 2 ? 'md:grid-cols-2' : cols === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'
            }`}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="relative rounded-2xl border p-5 md:p-6"
                style={{
                  borderColor: step.active ? 'var(--color-accent)' : 'var(--border-default)',
                  backgroundColor: step.active ? 'rgba(240,255,66,0.08)' : 'var(--bg-card)',
                  boxShadow: step.active ? '0 8px 28px rgba(240,255,66,0.2)' : '0 2px 12px rgba(0,0,0,0.06)',
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="font-body text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: step.active ? 'var(--color-accent)' : 'var(--bg-subtle)',
                      color: step.active ? 'var(--text-on-accent)' : 'var(--text-muted)',
                    }}
                  >
                    {step.label}
                  </span>
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={viewportOnce}
                    transition={{ type: 'spring', stiffness: 280, damping: 18, delay: index * 0.08 }}
                    className="font-display font-bold text-2xl opacity-20"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </motion.span>
                </div>
                {step.href ? (
                  <Link href={step.href} className="font-display font-semibold text-lg course-inline-link block mb-2">
                    {step.title}
                  </Link>
                ) : (
                  <p className="font-display font-semibold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>
                    {step.title}
                  </p>
                )}
                {step.priceSlug && (
                  <p className="font-body text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
                    {step.durationPrefix ? `${step.durationPrefix} ` : ''}
                    {step.priceRange ? (
                      <CrossCoursePriceRange slug={step.priceSlug} />
                    ) : (
                      <CrossCoursePrice slug={step.priceSlug} />
                    )}
                  </p>
                )}
                <p className="font-body text-sm" style={{ color: step.active ? 'var(--color-forest)' : 'var(--text-muted)' }}>
                  {step.active ? '← You are here' : step.note}
                </p>
              </motion.div>
            ))}
          </div>

          {children}
        </motion.div>
      </div>
    </section>
  )
}
