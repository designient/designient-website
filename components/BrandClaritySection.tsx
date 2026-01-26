'use client'

import React from 'react';
import { motion } from 'framer-motion';

export function BrandClaritySection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-container mx-auto px-3 md:px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            amount: 0.3
          }}
          transition={{
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="max-w-4xl mx-auto text-center">
          <h2
            className="font-display tracking-wide leading-tight mb-6"
            style={{
              color: '#8458B3',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)'
            }}>
            About Designient School of Masterminds
          </h2>
          <div className="space-y-6">
            <p
              className="font-body text-base md:text-lg font-normal"
              style={{
                color: '#4a4a4a',
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                lineHeight: '1.7'
              }}>
              Designient School of Masterminds is a UI/UX design institute in India offering mentor-led, small-batch design education. We operate from Bengaluru, Hyderabad, and Pune, and also offer online learning options for students globally.
            </p>
            <p
              className="font-body text-base md:text-lg font-normal"
              style={{
                color: '#4a4a4a',
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                lineHeight: '1.7'
              }}>
              Our focus is on personalised mentorship, hands-on projects, and career-ready outcomes — not mass-produced courses.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
