'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, FileText, Target, Users, CheckCircle, BarChart2 } from 'react-feather'
import { CorporateFAQSection } from './CorporateFAQSection'

const outcomeTypes = [
  {
    title: 'Usability & design quality',
    description: 'Improved product usability, clearer flows, and better design consistency',
    icon: CheckCircle,
  },
  {
    title: 'Delivery & collaboration',
    description: 'Faster delivery cycles and better cross-team design collaboration',
    icon: Target,
  },
  {
    title: 'Team capability',
    description: 'Upskilled teams with stronger design practices and AI-ready workflows',
    icon: Users,
  },
  {
    title: 'Business impact',
    description: 'Outcomes tied to adoption, satisfaction, or efficiency where shared',
    icon: BarChart2,
  },
]

const industries = [
  'Technology / SaaS',
  'E-commerce',
  'FinTech',
  'Healthcare',
  'Education',
  'Media & Entertainment',
  'Manufacturing',
  'Retail',
]

const caseStudyFaqs = [
  {
    question: 'Why are some case studies anonymized?',
    answer:
      'Some case studies are anonymized to protect partner identities when required. We share learnings and outcomes while respecting confidentiality agreements and partner preferences.',
  },
  {
    question: 'What kind of results can we expect?',
    answer:
      "Results vary by team, context, and implementation. We highlight outcomes like improved usability, faster delivery cycles, better cross-team collaboration, and business impact, but we don't guarantee specific results or make exaggerated claims.",
  },
  {
    question: 'Can you share references on request?',
    answer:
      'We can share references from partners who have given permission. References are subject to partner availability and willingness to engage. Please contact us to discuss reference availability.',
  },
  {
    question: 'Do you work across industries?',
    answer:
      'Yes. We work with organizations across various industries including Technology/SaaS, E-commerce, FinTech, Healthcare, Education, Media/Entertainment, Manufacturing, and Retail.',
  },
  {
    question: 'How do we engage after reviewing case studies?',
    answer:
      "You can request a proposal or book a call through our contact form. We'll discuss your specific challenges, goals, and requirements, and propose a customized solution for your team.",
  },
]

export function CaseStudiesContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24" style={{ backgroundColor: 'var(--bg-warm)' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Link
                href="/corporates"
                className="inline-flex items-center text-sm font-body mb-4 hover:underline"
                style={{ color: 'var(--color-primary)' }}
              >
                ← Back to For Corporates
              </Link>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold mb-6"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: 'var(--text-primary)',
                lineHeight: '1.2',
              }}
            >
              Corporate Partnerships & Case Studies
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-lg md:text-xl mb-4 leading-relaxed"
              style={{
                color: 'var(--text-secondary)',
                fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                lineHeight: '1.8',
              }}
            >
              Real partnerships and outcome-focused results. Explore how we&apos;ve helped organizations upskill teams and solve design challenges.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Outcomes we focus on */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <FileText className="w-8 h-8" style={{ color: 'var(--color-primary)' }} />
              <h2
                className="font-display font-bold"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--color-primary)' }}
              >
                Outcomes we focus on
              </h2>
            </div>
            <p className="font-body text-base max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Our case studies highlight real engagements. Results vary by context and implementation.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {outcomeTypes.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="rounded-xl border-2 p-6"
                style={{ borderColor: 'var(--bg-peach)', backgroundColor: 'var(--bg-warm)' }}
              >
                <item.icon className="w-8 h-8 mb-4" style={{ color: 'var(--color-primary)' }} />
                <h3 className="font-display font-semibold mb-2" style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-peach)' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2
              className="font-display font-bold mb-3"
              style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--text-primary)' }}
            >
              Industries we work with
            </h2>
            <p className="font-body text-sm max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              We partner with organizations across sectors.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {industries.map((industry, index) => (
              <motion.span
                key={industry}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04, duration: 0.3 }}
                className="inline-block px-4 py-2 rounded-lg font-body text-sm font-medium"
                style={{ backgroundColor: 'var(--bg-card)', color: 'var(--color-primary)', border: '2px solid var(--bg-peach)' }}
              >
                {industry}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <CorporateFAQSection faqs={caseStudyFaqs} title="Case Studies FAQs" />

      {/* Final CTA */}
      <section className="py-16 md:py-24 section-band-accent">
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2
              className="font-display font-bold mb-6"
              style={{ color: 'var(--text-primary)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Ready to explore a partnership?
            </h2>
            <p
              className="font-body text-lg mb-8"
              style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 1.8vw, 1.125rem)' }}
            >
              Request a proposal or book a call. We&apos;ll discuss your goals and how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us?reason=corporate-proposal"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-body font-semibold text-[var(--color-primary)] bg-card transition-all hover:scale-105"
              >
                Request a Proposal
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact-us?reason=corporate-call"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-body font-semibold border-2 border-[var(--color-accent)] transition-all hover:scale-105"
                style={{ color: 'var(--color-accent)' }}
              >
                Book a Call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
