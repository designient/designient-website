'use client'

import React from 'react'
import { motion } from 'framer-motion'
import type { Icon } from 'react-feather'
import { CourseSectionHeader } from './CourseSectionHeader'

export type CourseFeatureItem = {
  icon: Icon
  title: string
  description: string
}

type CourseFeatureGridProps = {
  title?: string
  description?: string
  items: CourseFeatureItem[]
  track?: 'design' | 'ai'
  columns?: 2 | 3
}

export function CourseFeatureGrid({
  title,
  description,
  items,
  track = 'design',
  columns = 2,
}: CourseFeatureGridProps) {
  const iconBg = track === 'ai' ? 'var(--bg-section-purple)' : 'var(--bg-section-green)'
  const iconColor = track === 'ai' ? 'var(--color-purple)' : 'var(--color-forest)'
  const colClass = columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        {title && <CourseSectionHeader title={title} description={description} />}
        <div className={`grid grid-cols-1 ${colClass} gap-6 md:gap-8`}>
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex gap-4 items-start"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: iconBg }}
                >
                  <Icon className="w-6 h-6" style={{ color: iconColor }} strokeWidth={1.5} />
                </div>
                <div>
                  <h3
                    className="font-display font-semibold mb-2"
                    style={{
                      color: 'var(--text-primary)',
                      fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
