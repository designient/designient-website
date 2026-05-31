'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Layers } from 'react-feather';

const aiFeatures = [
  {
    icon: Cpu,
    title: 'AI Research and Insights (Design Track)',
    description:
      'Use Perplexity and Claude to analyse user behaviour, gather competitive intelligence, and identify design opportunities in a fraction of the time. AI research is taught as a core workflow, not an optional shortcut.',
  },
  {
    icon: Zap,
    title: 'AI Automation and Deployment (AI Track)',
    description:
      'Build multi-step AI workflows that connect your tools and run without you. n8n, Make, Claude API, ManyChat, Relevance AI — taught live, deployed in production, documented for portfolio.',
  },
  {
    icon: Layers,
    title: 'AI Product Design (AI Track — By Application)',
    description:
      'Design the products that AI powers. Confidence UI, graceful degradation, hallucination handling, refusal states. The discipline that separates designers who understand AI from designers who use AI.',
  },
];

export function AISection() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--bg-warm)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="font-display tracking-wide leading-tight mb-6"
            style={{
              color: 'var(--color-primary)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            }}
          >
            AI Is Not a Feature Here. It Is the Foundation.
          </h2>
          <p
            className="font-body text-base md:text-lg font-normal max-w-3xl mx-auto text-center mb-10"
            style={{
              color: 'var(--text-secondary)',
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              lineHeight: '1.6',
            }}
          >
            Every course at Designient has AI embedded in it — not as a bonus module, not as a tools demo, but as a working part of how students research, design, build, and ship. What that looks like is different across the two tracks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 md:p-8 rounded-2xl"
            style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-default)' }}
          >
            <h3 className="font-display font-semibold mb-4" style={{ color: 'var(--text-primary)', fontSize: 'clamp(1.125rem, 2vw, 1.375rem)' }}>
              In the Design Track — AI as Your Co-pilot
            </h3>
            <p className="font-body mb-4" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              Design students use AI to move faster and think deeper. Perplexity for research. Claude for persona writing, case studies, and critique. FigJam AI for journey maps and architecture diagrams. Bolt for prototyping real products. Every design session is an AI-assisted workflow, not a solo Figma session.
            </p>
            <p className="font-body" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              What this means for your portfolio: work that would take a junior designer 3 days takes 6 hours. The output is higher quality and the process is documented — which is what employers increasingly want to see.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 md:p-8 rounded-2xl"
            style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-default)' }}
          >
            <h3 className="font-display font-semibold mb-4" style={{ color: 'var(--text-primary)', fontSize: 'clamp(1.125rem, 2vw, 1.375rem)' }}>
              In the AI Track — AI as What You Build
            </h3>
            <p className="font-body mb-4" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              AI Track students are not using AI inside their workflow. They are building AI systems from scratch. Three deployed automation workflows connecting n8n, Make, Airtable, ManyChat, and Relevance AI. Or two portfolio case studies designing AI behaviour — trust UI, error states, confidence indicators — for real AI products using Figma and Bolt.
            </p>
            <p className="font-body" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              What this means for your career: you leave with proof. Not a certificate that says you attended a course. Three live automations running in production, or two AI product design case studies with functional prototypes. Demonstrable in 90 seconds.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {aiFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.15, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="text-center p-6 rounded-2xl"
                style={{ backgroundColor: 'var(--bg-warm)' }}
              >
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 accent-icon-box"
                  style={{
                    backgroundColor: 'var(--color-highlight)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  }}
                >
                  <Icon className="w-8 h-8" style={{ color: 'var(--text-on-accent)', strokeWidth: 2.5 }} />
                </div>
                <h3
                  className="font-display font-semibold mb-3"
                  style={{
                    color: 'var(--text-primary)',
                    fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  className="font-body font-normal"
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                    lineHeight: '1.6',
                  }}
                >
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
