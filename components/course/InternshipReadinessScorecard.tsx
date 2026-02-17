'use client'

import React from 'react'
import { TrendingUp, Award, Star } from 'react-feather'
import { motion } from 'framer-motion'

interface ReadinessLevel {
  level: string
  description: string
}

interface InternshipReadinessScorecardProps {
  levels: ReadinessLevel[]
}

export function InternshipReadinessScorecard({ levels }: InternshipReadinessScorecardProps) {
  const icons = [TrendingUp, Award, Star]

  return (
    <section id="internship-readiness" className="py-20 md:py-28" style={{ backgroundColor: 'white' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1a1a1a', lineHeight: '1.2' }}>
            Internship Readiness Levels
          </h2>
          <p className="font-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#6b7280' }}>
            Your UX internship readiness is evaluated across three levels, ensuring your portfolio meets recruiter standards for US and India markets.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-10">
          {levels.map((level, index) => {
            const Icon = icons[index] || Award
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-7 rounded-2xl border-2 transition-all hover:shadow-xl hover:-translate-y-1"
                style={{
                  borderColor: index === 1 ? '#8458B3' : '#e5e7eb',
                  backgroundColor: index === 1 ? '#f9f5ff' : 'white',
                  boxShadow: index === 1 ? '0 4px 6px -1px rgba(132, 88, 179, 0.1)' : '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: index === 1 ? '#8458B3' : '#f3f4f6' }}>
                    <Icon className="w-6 h-6 flex-shrink-0" style={{ color: index === 1 ? 'white' : '#8458B3' }} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold" style={{ color: '#1a1a1a' }}>
                    {level.level}
                  </h3>
                </div>
                <p className="font-body text-sm md:text-base leading-relaxed" style={{ color: '#4a4a4a' }}>
                  {level.description}
                </p>
              </motion.div>
            )
          })}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="font-body text-sm md:text-base text-center px-4 py-3 rounded-lg max-w-3xl mx-auto"
          style={{ backgroundColor: '#e8f5e9', color: '#2e7d32' }}
        >
          <strong>Target:</strong> All students aim for Level 2 (Internship Ready) or higher. Our Portfolio Improvement Guarantee ensures you reach this level.
        </motion.p>
      </div>
    </section>
  )
}
