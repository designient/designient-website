'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Folder } from 'react-feather';

export function PortfolioDeliverablesSection() {
  const deliverables = [
    'Multiple UX case studies from problem to solution',
    'End-to-end design projects (research → wireframes → UI)',
    'A portfolio structured to impress recruiters and hiring managers'
  ];

  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: '#FFF6E2' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05, margin: "100px 0px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto">
          
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-lg" style={{ backgroundColor: '#8458B3' }}>
              <Folder className="w-6 h-6" style={{ color: 'white' }} />
            </div>
            <div className="flex-1">
              <h2
                className="font-display font-bold mb-4"
                style={{
                  color: '#1a1a1a',
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)'
                }}>
                What you'll build during the course
              </h2>
              <p
                className="font-body mb-6 leading-relaxed"
                style={{
                  color: '#4a4a4a',
                  fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                  lineHeight: '1.8'
                }}>
                By the end of the program, you'll complete:
              </p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            {deliverables.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#8458B3' }} />
                <p
                  className="font-body leading-relaxed"
                  style={{
                    color: '#1a1a1a',
                    fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
                    lineHeight: '1.7'
                  }}>
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          <p
            className="font-body text-center leading-relaxed"
            style={{
              color: '#6b7280',
              fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
              lineHeight: '1.8',
              fontStyle: 'italic'
            }}>
            Your portfolio won't look like a class assignment.<br />
            It will look like real product work.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
