'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'react-feather';

export function ExperienceAuthoritySection() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05, margin: "100px 0px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-lg accent-icon-box" style={{ backgroundColor: 'var(--color-highlight)' }}>
              <Briefcase className="w-6 h-6" style={{ color: 'var(--text-on-accent)' }} />
            </div>
            <div className="flex-1">
              <h2
                className="font-display font-bold mb-4"
                style={{
                  color: 'var(--text-primary)',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)'
                }}>
                Taught by Practicing Designers
              </h2>
              <p
                className="font-body leading-relaxed"
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                  lineHeight: '1.8'
                }}>
                This course is taught by practicing designers who work on real products every day. 
                You'll learn real-world workflows and industry practices, not just theory. Our instructors 
                bring current experience from leading companies, ensuring you learn the skills that matter 
                in the current design industry. The curriculum is shaped by real design practice, giving you 
                insights that only come from first-hand experience.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
