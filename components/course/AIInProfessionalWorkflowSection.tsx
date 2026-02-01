'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'react-feather';

export function AIInProfessionalWorkflowSection() {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: '#FFF6E2' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-lg" style={{ backgroundColor: '#8458B3' }}>
              <Zap className="w-6 h-6" style={{ color: 'white' }} />
            </div>
            <div className="flex-1">
              <h2
                className="font-display font-bold mb-4"
                style={{
                  color: '#1a1a1a',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)'
                }}>
                AI as Your Professional Co-Pilot
              </h2>
              <p
                className="font-body leading-relaxed mb-4"
                style={{
                  color: '#4a4a4a',
                  fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                  lineHeight: '1.8'
                }}>
                AI tools are transforming how professionals work across industries. This course teaches you how to 
                effectively communicate with AI—whether you're generating content, creating designs, writing code, 
                analyzing data, or automating workflows. You'll learn prompt engineering fundamentals that apply 
                across all AI platforms, giving you a versatile skill set that enhances productivity in any field.
              </p>
              <p
                className="font-body leading-relaxed"
                style={{
                  color: '#4a4a4a',
                  fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                  lineHeight: '1.8'
                }}>
                Master the art of prompt engineering and use AI as a powerful multiplier for your work, not a 
                replacement for your expertise. You'll graduate with the skills to leverage AI tools effectively 
                while maintaining control over the creative and strategic process.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
