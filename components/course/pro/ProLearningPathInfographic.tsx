'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, GitBranch, Map } from 'react-feather'
import { CrossCoursePrice, CrossCoursePriceRange } from '../../pricing/CrossCoursePrice'
import { COURSE_SLUGS } from '../../pricing/CourseUrgencyStrip'
import type { CourseSlug } from '../../../lib/localizedPricing'
import { fadeUp, motionEase, staggerContainer, viewportOnce } from '../animated/motion'

type DesignStep = {
  label: string
  title: string
  href: string
  priceSlug?: CourseSlug
  priceRange?: boolean
  note: string
  active: boolean
}

const DESIGN_STEPS: DesignStep[] = [
  {
    label: 'Step 1',
    title: 'UI UX Design Bootcamp',
    href: '/ui-ux-design-bootcamp',
    priceSlug: COURSE_SLUGS.bootcamp,
    priceRange: true,
    note: 'recommended if you have never designed before',
    active: false,
  },
  {
    label: 'Step 2',
    title: 'UI UX Design Pro',
    href: '/ui-ux-design-pro',
    note: 'You are here',
    active: true,
  },
  {
    label: 'Step 3',
    title: 'UI UX Design Master',
    href: '/ui-ux-design-master',
    priceSlug: COURSE_SLUGS.master,
    note: 'for designers who want to reach lead and senior level',
    active: false,
  },
]

export function ProLearningPathInfographic() {
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
            Your Path Before and After This Course
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
          Design Track progression - where Pro sits in the full journey.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative"
        >
          <div
            className="hidden md:block absolute top-12 left-[8%] right-[8%] h-1 rounded-full"
            style={{ background: 'linear-gradient(90deg, var(--color-forest), var(--color-accent), var(--color-primary))' }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-8">
            {DESIGN_STEPS.map((step, index) => (
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
                <Link href={step.href} className="font-display font-semibold text-lg course-inline-link block mb-2">
                  {step.title}
                </Link>
                {step.priceSlug && (
                  <p className="font-body text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
                    {step.priceRange ? (
                      <>
                        3 days · <CrossCoursePriceRange slug={step.priceSlug} />
                      </>
                    ) : (
                      <>
                        6 months · <CrossCoursePrice slug={step.priceSlug} />
                      </>
                    )}
                  </p>
                )}
                <p className="font-body text-sm" style={{ color: step.active ? 'var(--color-forest)' : 'var(--text-muted)' }}>
                  {step.active ? '← You are here' : step.note}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl border-2 border-dashed p-5 md:p-6 mb-6"
            style={{ borderColor: 'var(--color-highlight)', backgroundColor: 'var(--bg-warm)' }}
          >
            <div className="flex items-start gap-3 mb-3">
              <GitBranch className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-highlight)' }} />
              <p className="font-body text-sm font-bold tracking-wide" style={{ color: 'var(--color-highlight)' }}>
                CROSS-TRACK BRIDGE - RECOMMENDED FOR PRO GRADUATES
              </p>
            </div>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              After completing this course, Pro graduates who are moving into AI-product-focused roles are recommended to take the{' '}
              <Link href="/ai-product-design-course" className="course-inline-link">
                AI Product Design Course
              </Link>{' '}
              next. That course goes 6 weeks deep on designing AI behaviour - trust UI, error states, confidence design - which is the fastest-growing specialisation in the Indian product design market in 2026. Pro gives you the design foundation. AI Product Design gives you the AI specialisation.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-xl px-5 py-4 border" style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--bg-card)' }}>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Not started yet?</strong> If you have never designed before, the{' '}
              <Link href="/ui-ux-design-bootcamp" className="course-inline-link">
                UI UX Design Bootcamp
              </Link>{' '}
              is a 3-day, <CrossCoursePrice slug={COURSE_SLUGS.bootcamp} /> entry point that lets you complete a full design process and confirm the path before committing to 10 weeks.
            </p>
            <Link
              href="/ui-ux-design-bootcamp"
              className="inline-flex items-center gap-2 font-body font-semibold text-sm mt-4"
              style={{ color: 'var(--color-primary)' }}
            >
              Explore Bootcamp
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
