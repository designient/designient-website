'use client'

import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import type { Icon } from 'react-feather'
import {
  Award,
  Briefcase,
  CheckCircle,
  Eye,
  Layout,
  Search,
} from 'react-feather'
import { fadeUp, motionEase, staggerContainer, viewportOnce } from '../animated/motion'

export type PortfolioModule = {
  title: string
  description: string
}

type ProWhatYouBuildInfographicProps = {
  modules: PortfolioModule[]
}

const MODULE_ICONS: Icon[] = [Search, Layout, Eye, Briefcase, Award]

const MODULE_ACCENTS = [
  { bg: 'var(--bg-section-green)', color: 'var(--color-forest)' },
  { bg: 'var(--bg-section-blue)', color: 'var(--color-primary)' },
  { bg: 'var(--bg-section-purple)', color: 'var(--color-purple)' },
  { bg: 'var(--bg-warm)', color: 'var(--color-highlight)' },
  { bg: 'var(--color-success-bg)', color: 'var(--color-success)' },
]

function parseModule(title: string, description: string) {
  const weeksMatch = title.match(/\((Weeks?[^)]+)\)/i)
  const weeks = weeksMatch?.[1] ?? ''
  const parts = description.split(' · ').map((s) => s.trim()).filter(Boolean)
  const last = parts[parts.length - 1] ?? ''
  const isDeliverable = /deliverable:/i.test(last)

  return {
    weeks,
    bullets: isDeliverable ? parts.slice(0, -1) : parts,
    deliverable: isDeliverable ? last : null,
  }
}

function AnimatedProgressBar() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const progress = useSpring(0, { stiffness: 60, damping: 18 })
  const width = useTransform(progress, (v) => `${v}%`)

  if (inView) progress.set(100)

  return (
    <div ref={ref} className="mb-10 md:mb-14">
      <div className="flex justify-between items-end mb-3">
        <span className="font-body text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
          Week 1
        </span>
        <motion.span
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          className="font-display font-bold text-sm md:text-base px-3 py-1 rounded-full"
          style={{ backgroundColor: 'var(--color-accent)', color: 'var(--text-on-accent)' }}
        >
          10-week build path
        </motion.span>
        <span className="font-body text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
          Week 10
        </span>
      </div>
      <div
        className="relative h-3 md:h-3.5 rounded-full overflow-hidden"
        style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-default)' }}
      >
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            width,
            background: 'linear-gradient(90deg, var(--color-forest) 0%, var(--color-primary) 55%, var(--color-accent) 100%)',
          }}
        />
        {[20, 40, 60, 80].map((pct) => (
          <div
            key={pct}
            className="absolute top-0 bottom-0 w-px"
            style={{ left: `${pct}%`, backgroundColor: 'rgba(255,255,255,0.35)' }}
            aria-hidden="true"
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3 mt-6">
        {[
          { value: '5', label: 'Portfolio modules' },
          { value: '10', label: 'Weeks to ship' },
          { value: '1', label: 'Job-ready portfolio' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.45, ease: motionEase }}
            className="text-center rounded-xl py-3 px-2 border"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-default)' }}
          >
            <p className="font-display font-bold text-xl md:text-2xl" style={{ color: 'var(--color-primary)' }}>
              {stat.value}
            </p>
            <p className="font-body text-xs md:text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export function ProWhatYouBuildInfographic({ modules }: ProWhatYouBuildInfographicProps) {
  return (
    <div className="relative">
      <AnimatedProgressBar />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative"
      >
        <div
          className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-0.5 -translate-x-1/2 rounded-full"
          style={{
            background:
              'linear-gradient(180deg, var(--color-accent) 0%, var(--color-primary) 50%, var(--color-forest) 100%)',
          }}
          aria-hidden="true"
        />

        <div className="space-y-8 md:space-y-10 lg:space-y-0">
          {modules.map((mod, index) => {
            const Icon = MODULE_ICONS[index] ?? Search
            const accent = MODULE_ACCENTS[index] ?? MODULE_ACCENTS[0]
            const { weeks, bullets, deliverable } = parseModule(mod.title, mod.description)
            const isEven = index % 2 === 0

            return (
              <motion.article
                key={mod.title}
                variants={fadeUp}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center ${index > 0 ? 'lg:mt-12' : ''}`}
              >
                <div className={`${isEven ? 'lg:pr-8 lg:text-right' : 'lg:col-start-2 lg:pl-8'} hidden lg:block`} aria-hidden="true" />

                <motion.div
                  className={`relative ${isEven ? 'lg:col-start-1 lg:row-start-1' : 'lg:col-start-2'}`}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: motionEase }}
                >
                  <div
                    className="hidden lg:flex absolute top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full font-display font-bold text-lg"
                    style={{
                      [isEven ? 'right' : 'left']: '-2.75rem',
                      backgroundColor: 'var(--color-accent)',
                      color: 'var(--text-on-accent)',
                      boxShadow: '0 0 0 6px var(--bg-card), 0 4px 20px rgba(240, 255, 66, 0.35)',
                    }}
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={viewportOnce}
                      transition={{ type: 'spring', stiffness: 320, damping: 20, delay: index * 0.1 }}
                    >
                      {index + 1}
                    </motion.span>
                  </div>

                  <div
                    className="rounded-2xl border overflow-hidden"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border-default)',
                      boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
                    }}
                  >
                    <div
                      className="flex flex-wrap items-center gap-3 px-5 py-4 border-b"
                      style={{ borderColor: 'var(--border-default)', backgroundColor: accent.bg }}
                    >
                      <motion.div
                        initial={{ rotate: -12, scale: 0.8 }}
                        whileInView={{ rotate: 0, scale: 1 }}
                        viewport={viewportOnce}
                        transition={{ type: 'spring', stiffness: 260, damping: 16, delay: index * 0.08 }}
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: 'var(--bg-card)' }}
                      >
                        <Icon className="w-5 h-5" style={{ color: accent.color }} strokeWidth={1.5} />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <p className="font-body text-xs font-bold uppercase tracking-wide mb-0.5" style={{ color: accent.color }}>
                          Module {index + 1}
                          {weeks ? ` · ${weeks}` : ''}
                        </p>
                        <h3
                          className="font-display font-semibold leading-snug"
                          style={{ color: 'var(--text-primary)', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}
                        >
                          {mod.title.replace(/^Module \d+:\s*/, '').replace(/\s*\(Weeks?[^)]+\)\s*$/i, '')}
                        </h3>
                      </div>
                      <span
                        className="lg:hidden flex h-9 w-9 items-center justify-center rounded-full font-display text-sm font-bold flex-shrink-0"
                        style={{ backgroundColor: 'var(--color-accent)', color: 'var(--text-on-accent)' }}
                      >
                        {index + 1}
                      </span>
                    </div>

                    <div className="p-5 md:p-6">
                      <ul className="space-y-2.5 mb-4">
                        {bullets.map((bullet, bi) => (
                          <motion.li
                            key={bullet.slice(0, 48)}
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={viewportOnce}
                            transition={{ delay: index * 0.06 + bi * 0.04, duration: 0.35 }}
                            className="flex items-start gap-2.5 font-body text-sm leading-relaxed"
                            style={{ color: 'var(--text-secondary)' }}
                          >
                            <span
                              className="mt-2 h-1.5 w-1.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: accent.color }}
                              aria-hidden="true"
                            />
                            <span>{bullet}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {deliverable && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={viewportOnce}
                          transition={{ delay: index * 0.08 + 0.2, duration: 0.4 }}
                          className="flex items-start gap-3 rounded-xl p-4 border-2"
                          style={{
                            borderColor: 'var(--color-accent)',
                            backgroundColor: 'rgba(240, 255, 66, 0.08)',
                          }}
                        >
                          <CheckCircle
                            className="w-5 h-5 flex-shrink-0 mt-0.5"
                            style={{ color: 'var(--color-forest)' }}
                            aria-hidden="true"
                          />
                          <p className="font-body text-sm font-semibold leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                            {deliverable}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>

                <div className={`hidden lg:block ${isEven ? 'lg:col-start-2 lg:pl-8' : 'lg:col-start-1 lg:row-start-1 lg:pr-8 lg:text-right'}`}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={viewportOnce}
                    transition={{ delay: index * 0.1 + 0.15 }}
                    className="inline-flex flex-col gap-2"
                  >
                    {weeks && (
                      <span
                        className="font-body text-sm font-bold px-4 py-2 rounded-full border inline-block"
                        style={{ borderColor: 'var(--border-default)', color: 'var(--text-muted)' }}
                      >
                        {weeks}
                      </span>
                    )}
                    <span className="font-display text-6xl font-bold opacity-[0.07]" style={{ color: 'var(--color-primary)' }}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </motion.div>
                </div>

                {index < modules.length - 1 && (
                  <div
                    className="lg:hidden flex justify-center py-2"
                    aria-hidden="true"
                  >
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={viewportOnce}
                      transition={{ duration: 0.35, delay: 0.1 }}
                      className="w-0.5 h-8 origin-top rounded-full"
                      style={{ backgroundColor: 'var(--color-primary)', opacity: 0.25 }}
                    />
                  </div>
                )}
              </motion.article>
            )
          })}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 md:mt-14 flex items-center justify-center gap-3 rounded-2xl px-6 py-5 border-2 border-dashed"
        style={{ borderColor: 'var(--color-primary)', backgroundColor: 'var(--bg-subtle)' }}
      >
        <Award className="w-6 h-6 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
        <p className="font-body text-sm md:text-base font-semibold text-center" style={{ color: 'var(--text-primary)' }}>
          Every artefact below is built during the course - not after it.
        </p>
      </motion.div>
    </div>
  )
}
