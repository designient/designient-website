'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'react-feather';

interface OutcomeTransformationSectionProps {
  outcomes: string[];
  duration?: string;
  description?: string;
}

export function OutcomeTransformationSection({ 
  outcomes, 
  duration = '3 months',
  description 
}: OutcomeTransformationSectionProps) {
  const defaultDescription = duration.includes('30') || duration.includes('30 Days') || duration.includes('30 days')
    ? 'Fast-track your transformation—here\'s what you\'ll achieve in 30 days.'
    : duration.includes('6') || duration.includes('6 Months') || duration.includes('6 months')
    ? 'From intermediate to senior designer—here\'s your transformation journey.'
    : 'From beginner to job-ready designer—here\'s your transformation journey.';

  return (
    <section id="outcomes" className="py-20 md:py-28" style={{ backgroundColor: 'white' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05, margin: "100px 0px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto">
          <h2
            className="font-display text-center mb-6 font-bold"
            style={{
              color: '#1a1a1a',
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              lineHeight: '1.2'
            }}>
            What you'll become in {duration}
          </h2>
          <p
            className="font-body text-center mb-12 leading-relaxed max-w-2xl mx-auto"
            style={{
              color: '#4a4a4a',
              fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
              lineHeight: '1.7'
            }}>
            {description || defaultDescription}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#8458B3' }} />
                <span className="font-body leading-relaxed" style={{ color: '#4a4a4a', fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)' }}>
                  {outcome}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
