'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'react-feather';

export function LearningExperienceSection() {
  const features = [
    'Live mentor-led sessions',
    'Hands-on assignments every week',
    'Regular feedback and improvement cycles',
    'Clear milestones so you always know where you stand'
  ];

  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: 'white' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto">
          
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-lg" style={{ backgroundColor: '#8458B3' }}>
              <BookOpen className="w-6 h-6" style={{ color: 'white' }} />
            </div>
            <div className="flex-1">
              <h2
                className="font-display font-bold mb-4"
                style={{
                  color: '#1a1a1a',
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)'
                }}>
                How learning works inside the program
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex items-start gap-3 p-4 rounded-lg"
                style={{ backgroundColor: '#FFF6E2' }}>
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#8458B3' }} />
                <p
                  className="font-body leading-relaxed"
                  style={{
                    color: '#1a1a1a',
                    fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
                    lineHeight: '1.7'
                  }}>
                  {feature}
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
            You'll never feel lost.<br />
            You'll always know what to improve next.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
