'use client'

import React from 'react'
import { PLACEMENT_STATS_FOOTNOTE } from '../../../lib/placementMethodology'

type Stat = { value: string; label: string }

type CourseProofStripProps = {
  stats: Stat[]
  footnote?: string
}

export function CourseProofStrip({ stats, footnote = PLACEMENT_STATS_FOOTNOTE }: CourseProofStripProps) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl p-4 bg-card shadow-sm text-center"
          >
            <p className="font-display font-bold text-2xl md:text-3xl mb-1" style={{ color: 'var(--color-primary)' }}>
              {stat.value}
            </p>
            <p className="font-body text-xs md:text-sm leading-snug" style={{ color: 'var(--text-secondary)' }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      {footnote && (
        <p
          className="font-body text-xs mt-3 leading-relaxed text-center"
          style={{ color: 'var(--text-muted)' }}
        >
          {footnote}
        </p>
      )}
    </div>
  )
}
