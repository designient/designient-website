'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, TrendingUp, Zap, Users } from 'react-feather';

const values = [
  {
    icon: TrendingUp,
    title: 'Hands-on Learning',
    description:
      'Build a portfolio with real projects that get you hired. Every session produces a deliverable. Every deliverable gets mentor feedback before you move forward.',
  },
  {
    icon: Users,
    title: 'Live Mentorship',
    description:
      'You are not watching a recorded instructor. Your mentor is in the session, reviewing your work in real time, and accessible between sessions. The feedback loop is the product.',
  },
  {
    icon: Zap,
    title: 'Real-World Projects',
    description:
      'Work on actual client briefs — not made-up exercises. The Design Track includes real client projects from week 8 of Pro and across the Master curriculum. The AI Track produces 3 deployed automations or 2 portfolio case studies that run or exist in the real world.',
  },
  {
    icon: Heart,
    title: 'Career Support',
    description:
      'Structured placement assistance is included in the Pro and Master courses. Portfolio guidance, interview preparation, and active introductions to hiring partners — not a job board link.',
  },
];

export function WhySection() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--bg-warm)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-16 md:mb-24"
        >
          <h2
            className="font-display tracking-wide leading-tight mb-6 text-center"
            style={{
              color: 'var(--color-primary)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            }}
          >
            Why Students Choose Designient
          </h2>
          <p
            className="font-body text-base md:text-lg max-w-3xl mx-auto font-normal text-center"
            style={{
              color: 'var(--text-secondary)',
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              lineHeight: '1.6',
            }}
          >
            We are not the biggest design school in India. We are intentionally not. Every decision we make — batch size, project format, mentor time — is optimised for one thing: the quality of what you build and where it takes you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="group relative"
            >
              <div
                className="accent-icon-box w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{
                  backgroundColor: 'var(--color-highlight)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                }}
              >
                <value.icon className="w-8 h-8" style={{ color: 'var(--text-on-accent)', strokeWidth: 2.5 }} />
              </div>
              <h3
                className="font-display tracking-wide mb-4"
                style={{
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                }}
              >
                {value.title.toUpperCase()}
              </h3>
              <p
                className="font-body text-base leading-relaxed font-normal"
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: 'clamp(1rem, 1.5vw, 1.0625rem)',
                  lineHeight: '1.7',
                }}
              >
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
