'use client'

import React from 'react'
import { motion } from 'framer-motion'

type CourseSectionHeaderProps = {
  title: string
  description?: string
  align?: 'center' | 'left'
  className?: string
}

export function CourseSectionHeader({
  title,
  description,
  align = 'center',
  className = '',
}: CourseSectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`mb-12 md:mb-16 ${alignClass} ${className}`.trim()}
    >
      <h2
        className="font-display tracking-tight leading-tight mb-4 md:mb-6"
        style={{
          color: 'var(--color-forest)',
          fontWeight: 700,
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
        }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`font-body font-normal max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}
          style={{
            color: 'var(--text-secondary)',
            fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
            lineHeight: 1.6,
          }}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
