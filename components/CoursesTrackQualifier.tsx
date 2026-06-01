'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'react-feather'

export function CoursesTrackQualifier() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-3xl mx-auto"
        >
          <h2
            className="font-display tracking-wide leading-tight mb-8 text-center"
            style={{
              color: 'var(--color-primary)',
              fontWeight: 700,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            }}
          >
            Design Track or AI Track — Which Is Right for You?
          </h2>

          <p
            className="font-body text-center mb-10"
            style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}
          >
            Two questions. Your answers point to the right track.
          </p>

          <div className="space-y-8">
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-default)' }}
            >
              <p className="font-body font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                Are you trying to become a UI/UX designer?
              </p>
              <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Yes → Design Track. Start with the Bootcamp if you have never designed before. Start with Pro if you
                are ready to commit to 10 weeks and a structured path to employment.
              </p>
            </div>

            <div
              className="rounded-2xl p-6 md:p-8"
              style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-default)' }}
            >
              <p className="font-body font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                Are you a working professional or freelancer who wants to build AI automation workflows — or a
                designer or PM who wants to specialise in designing AI-native products?
              </p>
              <p className="font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Yes → AI Track. The AI Automation Accelerator is for professionals and freelancers building
                workflows. The AI Product Design Course is for designers and PMs designing AI behaviour.
              </p>
            </div>

            <div className="text-center pt-2">
              <p className="font-body font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                Not sure?
              </p>
              <Link
                href="/apply-now"
                className="font-body inline-flex items-center gap-2 font-bold min-h-[44px] transition-opacity hover:opacity-90"
                style={{ color: 'var(--color-primary)', fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)' }}
              >
                Book a free 15-minute consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="font-body mt-3 text-sm" style={{ color: 'var(--text-muted)' }}>
                We will tell you the right course for your background and goals.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
