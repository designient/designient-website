'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, motionEase, staggerContainer, viewportOnce } from './motion'

type CourseAnimatedSectionProps = {
  title: string
  subtitle?: string
  backgroundColor?: string
  maxWidthClass?: string
  children: React.ReactNode
  className?: string
}

export function CourseAnimatedSection({
  title,
  subtitle,
  backgroundColor = 'var(--bg-warm)',
  maxWidthClass = 'max-w-4xl',
  children,
  className = '',
}: CourseAnimatedSectionProps) {
  return (
    <section
      className={`py-16 md:py-24 relative overflow-hidden ${className}`}
      style={{ backgroundColor }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-32 -right-24 w-[min(420px,80vw)] h-[min(420px,80vw)] rounded-full blur-3xl opacity-60"
          style={{ background: 'radial-gradient(circle, rgba(240, 255, 66, 0.08) 0%, transparent 70%)' }}
        />
      </div>
      <div className={`max-w-container mx-auto px-4 md:px-6 lg:px-8 ${maxWidthClass} relative z-10`}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: motionEase }}
          className="text-center mb-10 md:mb-12"
        >
          <h2
            className="font-display font-bold leading-tight"
            style={{
              color: 'var(--color-primary)',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className="font-body mt-4 max-w-2xl mx-auto leading-relaxed"
              style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}
            >
              {subtitle}
            </p>
          )}
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}

type StaggerItemProps = {
  children: React.ReactNode
  className?: string
}

export function StaggerItem({ children, className = '' }: StaggerItemProps) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  )
}

type AnimatedCardVariant = 'primary' | 'highlight' | 'dashed' | 'subtle' | 'muted'

const cardStyles: Record<AnimatedCardVariant, React.CSSProperties> = {
  primary: {
    backgroundColor: 'var(--bg-card)',
    border: '2px solid var(--color-primary)',
    boxShadow: '0 4px 24px rgba(240, 255, 66, 0.08)',
  },
  highlight: {
    backgroundColor: 'var(--bg-card)',
    border: '2px solid var(--color-highlight)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.12)',
  },
  dashed: {
    backgroundColor: 'var(--bg-subtle)',
    border: '1px dashed var(--color-highlight)',
  },
  subtle: {
    backgroundColor: 'var(--bg-subtle)',
    border: '1px solid var(--border-default)',
  },
  muted: {
    backgroundColor: 'var(--bg-base)',
    border: '1px dashed var(--border-default)',
  },
}

type AnimatedCardProps = {
  children: React.ReactNode
  variant?: AnimatedCardVariant
  className?: string
}

export function AnimatedCard({ children, variant = 'subtle', className = '' }: AnimatedCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      className={`rounded-2xl p-6 md:p-8 transition-shadow hover:shadow-lg ${className}`}
      style={cardStyles[variant]}
    >
      {children}
    </motion.div>
  )
}

type AnimatedRevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function AnimatedReveal({ children, className = '', delay = 0 }: AnimatedRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.55, delay, ease: motionEase }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

type AnimatedGridProps = {
  children: React.ReactNode
  className?: string
}

export function AnimatedGrid({ children, className = 'grid md:grid-cols-2 gap-4' }: AnimatedGridProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedGridItem({ children, className = '' }: StaggerItemProps) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  )
}
