'use client'

import React from 'react'
import { Gift, Shield, CheckCircle } from 'react-feather'
import { motion } from 'framer-motion'

interface BonusGuaranteeSectionProps {
  bonuses: string[]
}

export function BonusGuaranteeSection({ bonuses }: BonusGuaranteeSectionProps) {
  return (
    <section id="bonuses-guarantee" className="py-20 md:py-28" style={{ backgroundColor: 'white' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1a1a1a', lineHeight: '1.2' }}>
            Bonuses & Guarantee
          </h2>
          <p className="font-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-4" style={{ color: '#6b7280' }}>
            Exclusive bonuses and our commitment to your success.
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          {/* Bonuses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="p-2 rounded-lg" style={{ backgroundColor: '#f9f5ff' }}>
                <Gift className="w-6 h-6" style={{ color: '#8458B3' }} aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold" style={{ color: '#1a1a1a' }}>
                Exclusive Bonuses
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {bonuses.slice(0, -1).map((bonus, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-sm border border-gray-100 hover:shadow-md hover:border-green-200 transition-all"
                >
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#10b981' }} aria-hidden="true" />
                  <p className="font-body text-sm md:text-base leading-relaxed" style={{ color: '#4a4a4a' }}>
                    {bonus}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="p-8 md:p-10 rounded-2xl border-2 shadow-lg hover:shadow-xl transition-all"
            style={{ borderColor: '#8458B3', backgroundColor: '#f9f5ff' }}
          >
            <div className="flex items-start gap-5">
              <div className="p-3 rounded-xl" style={{ backgroundColor: '#8458B3' }}>
                <Shield className="w-8 h-8 flex-shrink-0" style={{ color: 'white' }} aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1a1a1a' }}>
                  Portfolio Improvement Guarantee
                </h3>
                <p className="font-body text-base md:text-lg leading-relaxed" style={{ color: '#4a4a4a' }}>
                  {bonuses[bonuses.length - 1]}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
