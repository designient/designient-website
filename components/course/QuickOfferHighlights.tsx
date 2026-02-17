'use client'

import React from 'react'
import { CheckCircle } from 'react-feather'
import { motion } from 'framer-motion'

interface QuickOfferHighlightsProps {
  items: string[]
  title?: string
}

export function QuickOfferHighlights({ items, title = "What This Bootcamp Includes (Premium Value Stack)" }: QuickOfferHighlightsProps) {
  return (
    <section id="what-this-includes" className="py-20 md:py-28" style={{ backgroundColor: 'white' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1a1a1a', lineHeight: '1.2' }}>
            {title}
          </h2>
          <p className="font-body text-base md:text-lg max-w-3xl mx-auto leading-relaxed mt-4" style={{ color: '#6b7280' }}>
            Everything you need to build an internship-ready portfolio and launch your UX design career.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-sm border border-gray-100 hover:shadow-md hover:border-purple-200 transition-all"
            >
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#8458B3' }} aria-hidden="true" />
              <p className="font-body text-sm md:text-base leading-relaxed" style={{ color: '#4a4a4a' }}>
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
