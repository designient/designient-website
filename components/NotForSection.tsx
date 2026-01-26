'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'react-feather';

const notForItems = [
  'You\'re looking for shortcuts or instant certificates',
  'You prefer recorded-only courses with no live feedback',
  'You\'re not ready to practice, iterate, and improve your work',
  'You want guarantees without putting in the effort'
];

export function NotForSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
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
          className="max-w-4xl mx-auto">
          <h2
            className="font-display tracking-wide leading-tight mb-8"
            style={{
              color: '#8458B3',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)'
            }}>
            This May Not Be for You If&hellip;
          </h2>
          
          <ul className="space-y-5 mb-10">
            {notForItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{
                  opacity: 0,
                  x: -20
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.4
                }}
                className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-0.5">
                  <X className="w-5 h-5" style={{ color: '#ef4444' }} />
                </div>
                <span
                  className="font-body font-normal flex-1"
                  style={{
                    color: '#4a4a4a',
                    fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                    lineHeight: '1.7'
                  }}>
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
          
          <p
            className="font-body font-semibold md:whitespace-nowrap"
            style={{
              color: '#8458B3',
              fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
              lineHeight: '1.7'
            }}>
            We work best with learners who are serious about building real skills and long-term careers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
