'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { User, CheckCircle, X } from 'react-feather';

interface CourseWhoShouldTakeProps {
  description: string;
  idealFor: string[];
  notFor?: string[];
  locationRelevance?: string;
  title?: string;
}

export function CourseWhoShouldTake({ description, idealFor, notFor, locationRelevance, title = 'Who Should Take This Course?' }: CourseWhoShouldTakeProps) {
  return (
    <section id="who-should-take" className="py-20 md:py-28" style={{ backgroundColor: 'var(--bg-warm)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--color-accent-muted)' }}>
                <User className="w-6 h-6" style={{ color: 'var(--text-on-dark)' }} />
              </div>
              <h2
                className="font-display font-bold"
                style={{
                  color: 'var(--color-primary)',
                  fontSize: 'clamp(2rem, 4vw, 3rem)'
                }}>
                {title}
              </h2>
            </div>
            <p
              className="font-body text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}>
              {description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Ideal For */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-2xl shadow-lg">
              <h3
                className="font-display font-semibold mb-6 flex items-center gap-2"
                style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
                <CheckCircle className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
                Ideal For
              </h3>
              <ul className="space-y-3">
                {idealFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
                    <span className="font-body" style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Not For */}
            {notFor && notFor.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card p-8 rounded-2xl shadow-lg">
                <h3
                  className="font-display font-semibold mb-6 flex items-center gap-2"
                  style={{ color: 'var(--color-error)', fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
                  <X className="w-6 h-6" style={{ color: 'var(--color-error)' }} />
                  This Course Is NOT For You If…
                </h3>
                <ul className="space-y-3 mb-6">
                  {notFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <X className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-error)' }} />
                      <span className="font-body" style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)' }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                    lineHeight: '1.7',
                    fontStyle: 'italic'
                  }}>
                  This program is for people who are serious about building a design career, not just collecting course badges.
                </p>
              </motion.div>
            )}
          </div>

          {/* Location/Market Relevance */}
          {locationRelevance && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 bg-card p-6 rounded-xl shadow-sm border border-gray-100">
              <p className="font-body text-sm md:text-base leading-relaxed text-center" style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--color-primary)' }}>Market Alignment:</strong> {locationRelevance}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
