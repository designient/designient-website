'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Award, GitBranch, Star, Target, TrendingUp, type Icon } from 'react-feather'

type PathNodeData = {
  title: string
  step: string
  path: string
  badge?: string
  badgeIcon?: Icon
  bridgeSource?: boolean
  bridgeTarget?: boolean
}

const designNodes: PathNodeData[] = [
  { title: 'UI UX Design Bootcamp', step: 'Step 1 · 3 Days', path: '/ui-ux-design-bootcamp' },
  {
    title: 'UI UX Design Pro',
    step: 'Step 2 · 10 Weeks',
    badge: 'Most Popular',
    badgeIcon: Star,
    path: '/ui-ux-design-pro',
    bridgeSource: true,
  },
  {
    title: 'UI UX Design Master',
    step: 'Step 3 · 6 Months',
    badge: 'Most Advanced',
    badgeIcon: Award,
    path: '/ui-ux-design-master',
  },
]

const aiNodes: PathNodeData[] = [
  {
    title: 'AI Automation Accelerator',
    step: 'Step 1 · 8 Weeks',
    badge: 'Highest Demand',
    badgeIcon: TrendingUp,
    path: '/ai-automation-accelerator',
  },
  {
    title: 'AI Product Design Course',
    step: 'Step 2 · 6 Weeks',
    badge: 'By Application Only',
    badgeIcon: Target,
    path: '/ai-product-design-course',
    bridgeTarget: true,
  },
]

function PathNode({
  title,
  step,
  badge,
  badgeIcon: BadgeIcon,
  path,
  accentColor,
  delay,
}: {
  title: string
  step: string
  badge?: string
  badgeIcon?: Icon
  path: string
  accentColor: string
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="relative flex-1 min-w-[140px] max-w-[220px]"
    >
      <Link
        href={path}
        className="block rounded-xl p-4 md:p-5 text-center transition-transform hover:scale-[1.02]"
        style={{
          backgroundColor: 'var(--bg-card)',
          border: `2px solid ${accentColor}`,
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
        }}
      >
        <p className="font-body text-xs font-bold mb-2 uppercase tracking-wide" style={{ color: accentColor }}>
          {step}
        </p>
        <p
          className="font-display font-semibold leading-snug mb-2"
          style={{ color: 'var(--text-primary)', fontSize: 'clamp(0.8125rem, 1.8vw, 0.9375rem)' }}
        >
          {title}
        </p>
        {badge && BadgeIcon && (
          <span
            className="font-body inline-flex items-center justify-center gap-1 text-xs font-semibold"
            style={{ color: 'var(--text-secondary)' }}
          >
            <BadgeIcon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: accentColor }} aria-hidden="true" />
            {badge}
          </span>
        )}
      </Link>
    </motion.div>
  )
}

export function LearningPathVisualization() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-10 md:mb-14"
        >
          <h2
            className="font-display tracking-wide leading-tight mb-4"
            style={{
              color: 'var(--color-primary)',
              fontWeight: 700,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            }}
          >
            The Learning Path
          </h2>
        </motion.div>

        <div className="space-y-12 md:space-y-16 max-w-5xl mx-auto">
          <div>
            <p className="font-body text-sm font-bold mb-4 tracking-wide" style={{ color: 'var(--color-primary)' }}>
              DESIGN TRACK
            </p>
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-2">
              {designNodes.map((node, index) => (
                <React.Fragment key={node.path}>
                  <PathNode
                    title={node.title}
                    step={node.step}
                    badge={node.badge}
                    badgeIcon={node.badgeIcon}
                    path={node.path}
                    accentColor="var(--color-primary)"
                    delay={index * 0.1}
                  />
                  {index < designNodes.length - 1 && (
                    <ArrowRight
                      className="hidden md:block w-6 h-6 flex-shrink-0 mx-1"
                      style={{ color: 'var(--color-primary)' }}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="relative">
            <p className="font-body text-sm font-bold mb-4 tracking-wide" style={{ color: 'var(--color-highlight)' }}>
              AI TRACK
            </p>
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-2 md:max-w-[70%]">
              {aiNodes.map((node, index) => (
                <React.Fragment key={node.path}>
                  <PathNode
                    title={node.title}
                    step={node.step}
                    badge={node.badge}
                    badgeIcon={node.badgeIcon}
                    path={node.path}
                    accentColor="var(--color-highlight)"
                    delay={0.3 + index * 0.1}
                  />
                  {index < aiNodes.length - 1 && (
                    <ArrowRight
                      className="hidden md:block w-6 h-6 flex-shrink-0 mx-1"
                      style={{ color: 'var(--color-highlight)' }}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="hidden lg:block absolute right-0 top-8 w-[28%]"
            >
              <div
                className="rounded-xl p-4 text-center"
                style={{
                  backgroundColor: 'var(--bg-subtle)',
                  border: '1px dashed var(--color-highlight)',
                }}
              >
                <p
                  className="font-body text-xs font-bold mb-2 inline-flex items-center justify-center gap-1.5"
                  style={{ color: 'var(--color-highlight)' }}
                >
                  <GitBranch className="w-3.5 h-3.5" aria-hidden="true" />
                  CROSS-TRACK BRIDGE
                </p>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Pro graduates recommended here next →
                </p>
                <p className="font-body text-xs mt-2" style={{ color: 'var(--text-muted)' }}>
                  Recommended next step for Pro graduates moving into AI product roles.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="font-body text-center max-w-3xl mx-auto leading-relaxed"
            style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)' }}
          >
            The two tracks are independent — you do not need to complete the Design Track to take an AI Track course.
            The cross-track bridge is a recommendation for designers who complete Pro and want to specialise in AI
            product design.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
