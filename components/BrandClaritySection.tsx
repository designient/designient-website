'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BookOpen, Users, Target } from 'react-feather';

const pillars = [
  {
    icon: BookOpen,
    title: 'Live Mentor-Led Training',
    description: 'Learn from active industry leaders through live interactive sessions, structured reviews, and 1-on-1 Slack feedback.'
  },
  {
    icon: Users,
    title: 'Small Interactive Batches',
    description: 'We cap our cohorts at 10-25 learners to guarantee you get personalized attention, feedback, and portfolio guidance.'
  },
  {
    icon: Target,
    title: 'Real Deployed Outcomes',
    description: 'Build real-world product solutions, collaborate on client briefs, and ship live, production-ready AI workflows.'
  }
];

export function BrandClaritySection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-16 md:mb-24 text-center"
        >
          <h2
            className="font-display tracking-tight leading-tight mb-6"
            style={{
              color: 'var(--color-forest)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            }}
          >
            About Designient School of Masterminds
          </h2>
          <p
            className="font-body text-base md:text-lg max-w-3xl mx-auto font-normal"
            style={{
              color: 'var(--text-secondary)',
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              lineHeight: '1.6',
            }}
          >
            Designient School of Masterminds is a premier UI/UX design and AI training institute in India. Our mission is to shape professional careers through focused, honest design education.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with SEO tags */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="lg:col-span-5 relative w-full aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden border border-strong shadow-card"
          >
            <Image
              src="/about_designient_vision.webp"
              alt="Creative UI UX design workspace with Figma wireframe screen concepts, prototyping tools and design books - Designient School of Masterminds"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 450px"
              loading="lazy"
            />
          </motion.div>

          {/* Right Column: Pillars list with thin icons */}
          <div className="lg:col-span-7 space-y-8 md:space-y-10">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="flex gap-4 sm:gap-6 items-start"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300"
                  style={{
                    backgroundColor: 'var(--bg-section-green)',
                  }}
                >
                  <pillar.icon className="w-6 h-6" style={{ color: 'var(--color-forest)' }} strokeWidth={1.5} />
                </div>
                <div>
                  <h3
                    className="font-display tracking-tight mb-2"
                    style={{
                      color: 'var(--text-primary)',
                      fontWeight: 600,
                      fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className="font-body text-base leading-relaxed font-normal"
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
                      lineHeight: '1.6',
                    }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

