'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'react-feather'
import Link from 'next/link'
import { coursesHubGoalRecommendations } from '../data/coursesHubData'

export function CoursesCTA() {
 return (
 <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-warm)' }}>
 <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, amount: 0.3 }}
 transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
 className="text-center mb-12 md:mb-16"
 >
 <h2
 className="font-display tracking-wide mb-4 leading-tight"
 style={{
 color: 'var(--color-primary)',
 fontWeight: 700,
 fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
 }}
 >
 Not Sure Where to Start?
 </h2>
 <p className="font-body max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
 Three ways to get clarity before enrolling.
 </p>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12 md:mb-16">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5 }}
 className="rounded-2xl p-6 md:p-8"
 style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-default)' }}
 >
 <h3 className="font-display font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
 Book a free consultation
 </h3>
 <p className="font-body mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
 15 minutes with a Designient advisor. Tell us your background, your goals, and your timeline. We tell
 you which course is right.
 </p>
 <Link
 href="/apply-now"
 className="font-body inline-flex items-center gap-2 font-bold min-h-[44px] px-6 py-3 rounded-full transition-transform hover:scale-105"
 style={{
 backgroundColor: 'var(--color-accent)',
 color: 'var(--text-on-accent)',
 }}
 >
 <Calendar className="w-5 h-5" />
 Book Free Consultation
 </Link>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.1, duration: 0.5 }}
 className="rounded-2xl p-6 md:p-8"
 style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-default)' }}
 >
 <h3 className="font-display font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
 Attend a free workshop
 </h3>
 <p className="font-body mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
 AI Automation Live and AI Product Design Live run monthly - free 2-hour sessions that let you experience
 the AI Track format before committing.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
 <Link
 href="/ai-automation-live"
 className="font-body inline-flex items-center gap-2 font-bold min-h-[44px]"
 style={{ color: 'var(--color-primary)' }}
 >
 AI Automation Live
 <ArrowRight className="w-5 h-5" />
 </Link>
 <Link
 href="/ai-product-design-live"
 className="font-body inline-flex items-center gap-2 font-bold min-h-[44px]"
 style={{ color: 'var(--color-primary)' }}
 >
 AI Product Design Live
 <ArrowRight className="w-5 h-5" />
 </Link>
 </div>
 </motion.div>
 </div>

 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.2, duration: 0.5 }}
 className="max-w-3xl mx-auto"
 >
 <h3
 className="font-display font-semibold mb-6 text-center"
 style={{ color: 'var(--text-primary)', fontSize: 'clamp(1.125rem, 2vw, 1.375rem)' }}
 >
 Compare by goal
 </h3>
 <div
 className="overflow-x-auto rounded-xl"
 style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)' }}
 >
 <table className="w-full min-w-[480px]">
 <thead>
 <tr style={{ backgroundColor: 'var(--color-primary)' }}>
 <th
 className="p-4 text-left font-bold"
 style={{ color: 'var(--text-on-accent)' }}
 >
 Your goal
 </th>
 <th
 className="p-4 text-left font-bold"
 style={{ color: 'var(--text-on-accent)' }}
 >
 Recommended course
 </th>
 </tr>
 </thead>
 <tbody>
 {coursesHubGoalRecommendations.map((row, index) => (
 <tr
 key={row.goal}
 style={{
 backgroundColor: index % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-subtle)',
 }}
 >
 <td
 className="p-4 font-semibold border-t"
 style={{ color: 'var(--text-primary)', borderColor: 'var(--border-default)' }}
 >
 {row.goal}
 </td>
 <td
 className="p-4 border-t"
 style={{ color: 'var(--text-secondary)', borderColor: 'var(--border-default)' }}
 >
 {row.course}
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </motion.div>
 </div>
 </section>
 )
}
