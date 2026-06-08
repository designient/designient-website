'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Layers } from 'react-feather';
import Image from 'next/image';

const aiFeatures = [
  {
    icon: Cpu,
    title: 'AI Research & Insights',
    description:
      'Analyze user behavior, gather competitive intelligence, and identify design opportunities in a fraction of the time using Perplexity and Claude. AI research is taught as a core workflow, not an optional shortcut.',
  },
  {
    icon: Zap,
    title: 'AI Automation & Deployment',
    description:
      'Build multi-step AI workflows that connect your design tools and run autonomously. Master n8n, Make, Claude API, and Relevance AI — taught live, deployed in production, and fully documented for your portfolio.',
  },
  {
    icon: Layers,
    title: 'AI Product Design',
    description:
      'Design the interfaces and products that AI powers. Master Confidence UI, graceful degradation, hallucination handling, and refusal states. Build functional AI prototypes that prove your product engineering skills.',
  },
];

export function AISection() {
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
            AI Is Not a Feature Here. It Is the Foundation.
          </h2>
          <p
            className="font-body text-base md:text-lg max-w-3xl mx-auto font-normal"
            style={{
              color: 'var(--text-secondary)',
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              lineHeight: '1.6',
            }}
          >
            Every course at Designient has AI embedded in it — not as a bonus module, not as a tools demo, but as a working part of how students research, design, build, and ship.
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
              src="/ai_design_workflow.webp"
              alt="AI design automation workflow dashboard showcasing n8n node connections, API configurations and generative AI prompts - Designient School of Masterminds"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 450px"
              loading="lazy"
            />
          </motion.div>

          {/* Right Column: Features list with thin icons */}
          <div className="lg:col-span-7 space-y-8 md:space-y-10">
            {aiFeatures.map((feature, index) => (
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
                    backgroundColor: 'var(--bg-section-purple)',
                  }}
                >
                  <feature.icon className="w-6 h-6" style={{ color: 'var(--color-purple)' }} strokeWidth={1.5} />
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
                    {feature.title}
                  </h3>
                  <p
                    className="font-body text-base leading-relaxed font-normal"
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
                      lineHeight: '1.6',
                    }}
                  >
                    {feature.description}
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

