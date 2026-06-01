'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'react-feather'
import { motionEase, viewportOnce } from './motion'

export type CurriculumTimelineItem = {
  key: string
  title: string
  topics?: string
  body?: string
  tools?: string
  deliverable?: string
}

type CourseCurriculumTimelineProps = {
  items: CurriculumTimelineItem[]
}

export function CourseCurriculumTimeline({ items }: CourseCurriculumTimelineProps) {
  return (
    <div className="relative">
      <div
        className="absolute left-[1.0625rem] md:left-[1.1875rem] top-6 bottom-6 w-0.5 rounded-full"
        style={{
          background:
            'linear-gradient(180deg, var(--color-accent) 0%, rgba(240, 255, 66, 0.2) 40%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="space-y-5 md:space-y-6">
        {items.map((item, index) => (
          <motion.article
            key={item.key}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.07, ease: motionEase }}
            className="relative pl-12 md:pl-14 group"
          >
            <motion.div
              className="absolute left-0 top-5 flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full font-display text-sm font-bold"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: 'var(--text-on-accent)',
                boxShadow: '0 0 0 4px rgba(240, 255, 66, 0.15), 0 4px 16px rgba(240, 255, 66, 0.25)',
              }}
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={viewportOnce}
              transition={{ delay: index * 0.07 + 0.1, type: 'spring', stiffness: 280, damping: 18 }}
              aria-hidden="true"
            >
              {index + 1}
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border p-5 md:p-6 transition-[border-color,box-shadow]"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-default)',
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
              }}
            >
              <h3
                className="font-display font-semibold mb-2 md:mb-3 leading-snug"
                style={{ color: 'var(--text-primary)', fontSize: 'clamp(1.0625rem, 2vw, 1.25rem)' }}
              >
                {item.title}
              </h3>
              {(item.topics || item.body) && (
                <p className="font-body text-sm mb-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {item.topics ?? item.body}
                </p>
              )}
              {item.tools && (
                <p className="font-body text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Tools:</strong> {item.tools}
                </p>
              )}
              {item.deliverable && (
                <p
                  className="font-body text-sm flex items-start gap-2 pt-2 border-t"
                  style={{ color: 'var(--text-secondary)', borderColor: 'var(--border-default)' }}
                >
                  <CheckCircle
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: 'var(--color-primary)' }}
                    aria-hidden="true"
                  />
                  <span>
                    <strong style={{ color: 'var(--color-primary)' }}>Deliverable:</strong> {item.deliverable}
                  </span>
                </p>
              )}
            </motion.div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
