'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
 ArrowRight,
 Award,
 ChevronDown,
 GitBranch,
 Star,
 Target,
 TrendingUp,
 type Icon,
} from 'react-feather'
import { motionEase } from './course/animated/motion'

type PathNodeData = {
 title: string
 step: string
 path: string
 badge?: string
 badgeIcon?: Icon
}

const designNodes: PathNodeData[] = [
 { title: 'UI UX Design Bootcamp', step: 'Step 1 · 3 Days', path: '/ui-ux-design-bootcamp' },
 {
 title: 'UI UX Design Pro',
 step: 'Step 2 · 10 Weeks',
 badge: 'Most Popular',
 badgeIcon: Star,
 path: '/ui-ux-design-pro',
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
 },
]

function PathConnector({ accentColor, delay }: { accentColor: string; delay: number }) {
 return (
 <motion.div
 className="path-viz-connector hidden md:block"
 style={{ '--connector-color': accentColor } as React.CSSProperties}
 initial={{ scaleX: 0, opacity: 0 }}
 whileInView={{ scaleX: 1, opacity: 1 }}
 viewport={{ once: true, amount: 0.5 }}
 transition={{ delay, duration: 0.55, ease: motionEase }}
 aria-hidden="true"
 />
 )
}

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
 initial={{ opacity: 0, y: 24, scale: 0.96 }}
 whileInView={{ opacity: 1, y: 0, scale: 1 }}
 viewport={{ once: true, amount: 0.25 }}
 transition={{ delay, duration: 0.55, ease: motionEase }}
 whileHover={{ y: -4, transition: { duration: 0.2 } }}
 className="relative flex-1 min-w-[140px] max-w-[240px] w-full md:w-auto"
 >
 <Link
 href={path}
 className="block rounded-2xl p-4 md:p-5 text-center transition-shadow"
 style={{
 backgroundColor: 'var(--bg-card)',
 border: `2px solid ${accentColor}`,
 boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
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

function MobileConnector({ color }: { color: string }) {
 return (
 <motion.div
 className="flex justify-center py-1 md:hidden"
 initial={{ opacity: 0, y: -8 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.35, ease: motionEase }}
 aria-hidden="true"
 >
 <ChevronDown className="w-5 h-5" style={{ color }} />
 </motion.div>
 )
}

function PathTrack({
 label,
 labelColor,
 accentColor,
 nodes,
 baseDelay,
}: {
 label: string
 labelColor: string
 accentColor: string
 nodes: PathNodeData[]
 baseDelay: number
}) {
 return (
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, amount: 0.15 }}
 transition={{ duration: 0.5, ease: motionEase }}
 >
 <p className="font-body text-sm font-bold mb-5 tracking-wide" style={{ color: labelColor }}>
 {label}
 </p>
 <div className="flex flex-col md:flex-row items-stretch md:items-center gap-1 md:gap-1">
 {nodes.map((node, index) => (
 <React.Fragment key={node.path}>
 <PathNode
 title={node.title}
 step={node.step}
 badge={node.badge}
 badgeIcon={node.badgeIcon}
 path={node.path}
 accentColor={accentColor}
 delay={baseDelay + index * 0.12}
 />
 {index < nodes.length - 1 && (
 <>
 <MobileConnector color={accentColor} />
 <PathConnector accentColor={accentColor} delay={baseDelay + index * 0.12 + 0.2} />
 </>
 )}
 </React.Fragment>
 ))}
 </div>
 </motion.div>
 )
}

export function LearningPathVisualization() {
 return (
 <section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-base)' }}>
 <div
 className="absolute inset-0 pointer-events-none"
 style={{
 background:
 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(240, 255, 66, 0.06) 0%, transparent 60%)',
 }}
 aria-hidden="true"
 />
 <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, amount: 0.3 }}
 transition={{ duration: 0.6, ease: motionEase }}
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
 <p
 className="font-body max-w-2xl mx-auto leading-relaxed"
 style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)' }}
 >
 Two independent tracks - design and AI - with an optional bridge for Pro graduates moving into AI product roles.
 </p>
 </motion.div>

 <div className="space-y-12 md:space-y-16 max-w-5xl mx-auto">
 <PathTrack
 label="DESIGN TRACK"
 labelColor="var(--color-primary)"
 accentColor="var(--color-primary)"
 nodes={designNodes}
 baseDelay={0}
 />

 <div className="relative">
 <PathTrack
 label="AI TRACK"
 labelColor="var(--color-highlight)"
 accentColor="var(--color-highlight)"
 nodes={aiNodes}
 baseDelay={0.25}
 />

 <motion.div
 initial={{ opacity: 0, scale: 0.95, y: 12 }}
 whileInView={{ opacity: 1, scale: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.5, duration: 0.55, ease: motionEase }}
 className="mt-8 w-full max-w-md mx-auto lg:max-w-none lg:mx-0 lg:mt-0 lg:absolute lg:right-0 lg:top-10 lg:w-[30%]"
 >
 <motion.div
 animate={{ boxShadow: ['0 0 0 rgba(240,255,66,0)', '0 0 24px rgba(240,255,66,0.12)', '0 0 0 rgba(240,255,66,0)'] }}
 transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
 className="rounded-2xl p-5 text-center"
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
 <p className="font-body text-sm leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
 Pro graduates recommended here next
 <ArrowRight className="inline w-4 h-4 mx-1 align-text-bottom" style={{ color: 'var(--color-highlight)' }} aria-hidden="true" />
 </p>
 <p className="font-body text-xs" style={{ color: 'var(--text-muted)' }}>
 Recommended next step for Pro graduates moving into AI product roles.
 </p>
 </motion.div>
 </motion.div>
 </div>

 <motion.p
 initial={{ opacity: 0, y: 16 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.35, duration: 0.5, ease: motionEase }}
 className="font-body text-center max-w-3xl mx-auto leading-relaxed pt-2"
 style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)' }}
 >
 The two tracks are independent - you do not need to complete the Design Track to take an AI Track course.
 The cross-track bridge is a recommendation for designers who complete Pro and want to specialise in AI
 product design.
 </motion.p>
 </div>
 </div>
 </section>
 )
}
