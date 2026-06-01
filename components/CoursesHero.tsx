'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, CheckCircle } from 'react-feather'
import Link from 'next/link'
import { coursesHubTrustChips } from '../data/coursesHubData'
import { PageHero } from './layout/PageHero'

export function CoursesHero() {
  return (
    <PageHero size="tall" align="center" contentClassName="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="flex items-center justify-center gap-2 mb-6 text-sm" style={{ color: 'var(--text-muted)' }}>
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span style={{ color: 'var(--color-accent)' }}>Courses</span>
        </div>

        <h1
          className="font-display tracking-wide mb-4 md:mb-6 leading-[1.1]"
          style={{
            color: 'var(--text-primary)',
            fontWeight: 700,
            fontSize: 'clamp(2rem, 4.5vw, 3.75rem)',
          }}
        >
          All Courses — Two Tracks, Five Paths, One Place to Compare
        </h1>

        <p
          className="font-body max-w-3xl mx-auto leading-[1.6] mb-8"
          style={{
            color: 'var(--text-secondary)',
            fontSize: 'clamp(1.0625rem, 2vw, 1.25rem)',
          }}
        >
          Designient runs two parallel learning tracks. The Design Track takes you from complete beginner to senior
          UI/UX designer. The AI Track teaches you to build AI automation workflows and design AI-native products.
          Both tracks use live mentorship, small batches, and real project outcomes — not recorded lectures and mock
          briefs.
        </p>

        <div className="flex flex-wrap justify-center gap-x-4 gap-y-3 max-w-4xl mx-auto">
          {coursesHubTrustChips.map((chip) => (
            <div key={chip} className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
              <span className="font-body text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                {chip}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </PageHero>
  )
}
