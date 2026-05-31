'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'react-feather';

export function MentorCredibilitySection() {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05, margin: "100px 0px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto">
          
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--color-accent-muted)' }}>
              <Users className="w-6 h-6" style={{ color: 'var(--text-on-dark)' }} />
            </div>
            <div className="flex-1">
              <h2
                className="font-display font-bold mb-4"
                style={{
                  color: 'var(--text-primary)',
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)'
                }}>
                Learn from designers who've done the work
              </h2>
              <p
                className="font-body mb-4 leading-relaxed"
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                  lineHeight: '1.8'
                }}>
                This program is led by mentors with 15+ years of real-world UX and Product Design experience, across startups, agencies, and global brands.
              </p>
              <p
                className="font-body leading-relaxed"
                style={{
                  color: 'var(--text-muted)',
                  fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
                  lineHeight: '1.8',
                  fontStyle: 'italic'
                }}>
                You're not learning theory.<br />
                You're learning how design works in the real world.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
