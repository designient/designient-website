'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'react-feather'

interface CityAITrackSectionProps {
  cityName: string
}

export function CityAITrackSection({ cityName }: CityAITrackSectionProps) {
  return (
    <section className="py-16 md:py-24 section-band-warm">
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto">
          <h2
            className="font-display font-bold mb-6 section-heading"
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            }}>
            Also Available Online from {cityName}: Designient&apos;s AI Track
          </h2>
          <p
            className="font-body leading-relaxed mb-4"
            style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            Designient&apos;s AI Track courses are fully online — available to students in {cityName} and across India without attending any physical location.
          </p>
          <p
            className="font-body leading-relaxed mb-10"
            style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            If you are not looking to become a UI/UX designer but want to build AI automation workflows, deploy production-ready AI systems, or design AI-native products — the AI Track is built for you.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div
              className="rounded-xl p-6 border-2 h-full flex flex-col bg-card"
              style={{ borderColor: 'var(--border-default)' }}>
              <h3 className="font-display font-semibold mb-2" style={{ color: 'var(--text-primary)', fontSize: '1.125rem' }}>
                AI Automation Accelerator
              </h3>
              <p className="font-body text-sm mb-3 font-semibold" style={{ color: 'var(--color-primary)' }}>
                Highest Demand 2026
              </p>
              <p className="font-body text-sm leading-relaxed mb-6 flex-1" style={{ color: 'var(--text-secondary)' }}>
                Build 3 deployed AI automations using n8n, Make, ManyChat, and Relevance AI. For working professionals, ops leads, marketers, freelancers, and founders. No coding required. 8 weeks. Online.
              </p>
              <Link
                href="/ai-automation-accelerator"
                className="inline-flex items-center gap-2 font-body font-semibold text-sm"
                style={{ color: 'var(--color-primary)' }}>
                View Course
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div
              className="rounded-xl p-6 border-2 h-full flex flex-col bg-card"
              style={{ borderColor: 'var(--border-default)' }}>
              <h3 className="font-display font-semibold mb-2" style={{ color: 'var(--text-primary)', fontSize: '1.125rem' }}>
                AI Product Design Course
              </h3>
              <p className="font-body text-sm mb-3 font-semibold" style={{ color: 'var(--color-primary)' }}>
                By Application Only
              </p>
              <p className="font-body text-sm leading-relaxed mb-6 flex-1" style={{ color: 'var(--text-secondary)' }}>
                Design AI behaviour — trust UI, error states, confidence design, hallucination handling. For PMs, designers, and UX writers who have shipped a digital product. 6 weeks. Online. 12 seats per cohort.
              </p>
              <Link
                href="/ai-product-design-course"
                className="inline-flex items-center gap-2 font-body font-semibold text-sm"
                style={{ color: 'var(--color-primary)' }}>
                View Course
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <p className="font-body text-center" style={{ color: 'var(--text-secondary)' }}>
            Not sure which track is right for you?{' '}
            <Link href="/courses" className="font-semibold course-inline-link">
              Compare all courses
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
