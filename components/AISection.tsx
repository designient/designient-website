'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Cpu } from 'react-feather';

export function AISection() {
  const aiFeatures = [
    {
      icon: Cpu,
      title: 'AI for Research & Insights',
      description: 'Use AI tools to analyze user behavior, gather insights, and identify design opportunities faster.'
    },
    {
      icon: Zap,
      title: 'AI for Ideation & Testing',
      description: 'Generate design concepts, create variations, and test ideas quickly with AI-powered workflows.'
    },
    {
      icon: Cpu,
      title: 'AI as a Co-pilot, Not a Shortcut',
      description: 'Learn to leverage AI to enhance your creativity while maintaining human-centered design principles.'
    }
  ];

  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--bg-warm)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
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
            once: true
          }}
          transition={{
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="text-center mb-12 md:mb-16">
          <h2
            className="font-display tracking-wide leading-tight mb-6"
            style={{
              color: 'var(--color-primary)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)'
            }}>
            UI/UX Education, Upgraded for the AI Era
          </h2>
          <p
            className="font-body text-base md:text-lg font-normal max-w-3xl mx-auto text-center"
            style={{
              color: 'var(--text-secondary)',
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              lineHeight: '1.6'
            }}>
            We don&apos;t just add AI later—we teach modern UX workflows that integrate AI tools from day one.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {aiFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40
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
                  delay: index * 0.15,
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="text-center p-6 rounded-2xl"
                style={{
                  backgroundColor: 'var(--bg-warm)'
                }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 accent-icon-box"
                  style={{
                    backgroundColor: 'var(--color-highlight)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                  }}>
                  <Icon className="w-8 h-8" style={{ color: 'var(--text-on-accent)', strokeWidth: 2.5 }} />
                </div>
                <h3
                  className="font-display font-semibold mb-3"
                  style={{
                    color: 'var(--text-primary)',
                    fontSize: 'clamp(1rem, 2vw, 1.125rem)'
                  }}>
                  {feature.title}
                </h3>
                <p
                  className="font-body font-normal"
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                    lineHeight: '1.6'
                  }}>
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
