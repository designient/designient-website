'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Award, CheckCircle, Lock } from 'react-feather'

export function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: 'Secure Payment',
      description: 'SSL encrypted transactions'
    },
    {
      icon: Award,
      title: 'Industry Recognized',
      description: 'Adobe Certified curriculum'
    },
    {
      icon: CheckCircle,
      title: 'Verified Reviews',
      description: 'From real students'
    },
    {
      icon: Lock,
      title: 'Money-Back Guarantee',
      description: '30-day satisfaction guarantee'
    }
  ]

  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: '#f9fafb' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {badges.map((badge, index) => {
              const Icon = badge.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3" style={{ backgroundColor: '#8458B3' }}>
                    <Icon className="w-6 h-6" style={{ color: 'white' }} aria-hidden="true" />
                  </div>
                  <h3 className="font-body font-semibold text-sm mb-1" style={{ color: '#1a1a1a' }}>
                    {badge.title}
                  </h3>
                  <p className="font-body text-xs" style={{ color: '#6b7280' }}>
                    {badge.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
