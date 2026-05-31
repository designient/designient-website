'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'react-feather';

interface CareerOutcomesSectionProps {
  roles: string[];
}

export function CareerOutcomesSection({ roles }: CareerOutcomesSectionProps) {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05, margin: "100px 0px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto">
          
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--color-accent-muted)' }}>
              <Briefcase className="w-6 h-6" style={{ color: 'var(--text-on-dark)' }} />
            </div>
            <div className="flex-1">
              <h2
                className="font-display font-bold mb-4"
                style={{
                  color: 'var(--text-primary)',
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)'
                }}>
                What roles you'll be ready for
              </h2>
              <p
                className="font-body mb-6 leading-relaxed"
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                  lineHeight: '1.8'
                }}>
                By the end of this program, you'll be equipped to apply for roles such as:
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex items-center gap-3 p-4 rounded-lg"
                style={{ backgroundColor: 'var(--bg-warm)' }}>
                <div className="w-2 h-2 rounded-full accent-icon-box" style={{ backgroundColor: 'var(--color-accent)' }} />
                <span
                  className="font-body font-semibold"
                  style={{
                    color: 'var(--text-on-accent)',
                    fontSize: 'clamp(1rem, 1.8vw, 1.125rem)'
                  }}>
                  {role}
                </span>
              </motion.div>
            ))}
          </div>

          <p
            className="font-body text-center leading-relaxed"
            style={{
              color: 'var(--text-muted)',
              fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
              lineHeight: '1.8',
              fontStyle: 'italic'
            }}>
            This course is built to take you from learning design to working as a designer — with real projects, real feedback, and real expectations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
