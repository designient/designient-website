'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BookOpen, MessageCircle, Briefcase, FileText, Users } from 'react-feather';

const steps = [
  {
    icon: BookOpen,
    title: 'Learn from Scratch',
    description: 'Start with fundamentals and build your skills step by step with structured curriculum.'
  },
  {
    icon: MessageCircle,
    title: 'Live Mentor Feedback',
    description: 'Get real-time guidance and personalized feedback from industry experts.'
  },
  {
    icon: Briefcase,
    title: 'Real Projects',
    description: 'Work on actual client projects to build your portfolio with real-world experience.'
  },
  {
    icon: FileText,
    title: 'Portfolio + Case Studies',
    description: 'Create a professional portfolio with detailed case studies that showcase your process.'
  },
  {
    icon: Users,
    title: 'Career & Placement Support',
    description: 'Get interview prep, resume reviews, and placement assistance to land your dream job.'
  }
];

export function HowLearningWorksSection() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: '#FFF6E2' }}>
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
            once: true,
            amount: 0.3
          }}
          transition={{
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="text-center mb-16 md:mb-24">
          <h2 className="font-display tracking-wide leading-tight mb-6 text-center" style={{ color: '#8458B3', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            How Your Journey at Designient Works
          </h2>
          <p
            className="font-body text-base md:text-lg max-w-3xl mx-auto font-normal text-center"
            style={{
              color: '#4a4a4a',
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              lineHeight: '1.6'
            }}>
            From learning fundamentals to landing your first design role—we guide you every step of the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
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
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="text-center">
                <div
                  className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: '#f2d53c',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                  }}>
                  <Icon
                    className="w-8 h-8"
                    style={{
                      color: '#8458B3',
                      strokeWidth: 2.5
                    }} />
                </div>
                <h3
                  className="font-display font-semibold mb-3"
                  style={{
                    color: '#1a1a1a',
                    fontSize: 'clamp(0.9375rem, 2vw, 1.125rem)'
                  }}>
                  {step.title}
                </h3>
                <p
                  className="font-body leading-relaxed font-normal"
                  style={{
                    color: '#6b7280',
                    fontSize: 'clamp(0.8125rem, 1.5vw, 0.875rem)',
                    lineHeight: '1.6'
                  }}>
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
