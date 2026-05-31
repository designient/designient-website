'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'react-feather';
import { StructuredData } from './StructuredData';

const faqs = [
  {
    question: 'Is this UI/UX course beginner friendly?',
    answer:
      'Yes. The UI UX Design Bootcamp and UI UX Design Pro are both designed for complete beginners. No prior design or software experience required.',
  },
  {
    question: 'Do you teach AI tools as part of the UI/UX curriculum?',
    answer:
      'Yes. Perplexity, Claude, FigJam AI, Figma, and Bolt are embedded in the Design Track curriculum at every level — not as a separate module, but as part of the working design process from day one.',
  },
  {
    question: 'What is the difference between the Design Track and the AI Track?',
    answer:
      'The Design Track — UI UX Design Bootcamp, Pro, and Master — is for people who want to become UI/UX designers. You learn to design products, build portfolios, and enter the design job market. The AI Track — AI Automation Accelerator and AI Product Design Course — is for working professionals, freelancers, and product people who want to build AI automation workflows or design AI-native products. No design background is required for the AI Track.',
  },
  {
    question: 'Do you offer online learning options?',
    answer:
      'Yes. All courses are available online. Students across India and internationally enroll every cohort. In-person options for the Design Track are available in Bangalore, Hyderabad, and Pune.',
  },
  {
    question: 'How big are the batches — and does that vary by course?',
    answer:
      'Yes. Batch sizes are intentionally different across courses. The UI UX Design Bootcamp runs up to 200 students with critique in smaller groups. UI UX Design Pro runs 25 students per cohort. UI UX Design Master runs 15 students per cohort. The AI Automation Accelerator runs 35 students per cohort. The AI Product Design Course runs 12 students per cohort and is application-based. Smaller batches at the advanced and specialist level mean more mentor time and more direct feedback.',
  },
  {
    question: 'Do you guarantee placements?',
    answer:
      'We do not promise fake guarantees. The UI UX Design Pro and Master courses include structured placement assistance — portfolio guidance, interview preparation, and active introductions to hiring partners. 95% of students who completed placement support found employment within 6 months. The AI Track courses produce a portfolio of deployed automations or AI product case studies — your results are demonstrable, not just on paper.',
  },
];

export function HomepageFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--bg-warm)' }}>
      <StructuredData data={faqSchema} />
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-12 md:mb-16"
        >
          <h2
            className="font-display tracking-wide leading-tight mb-6 text-center"
            style={{
              color: 'var(--color-primary)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            }}
          >
            Questions We Get Asked Most
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="border rounded-lg overflow-hidden"
              style={{
                borderColor: 'var(--border-default)',
                backgroundColor: openIndex === index ? 'var(--bg-warm)' : 'var(--bg-card)',
              }}
              itemScope
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-left min-h-[44px]"
                style={{ backgroundColor: 'transparent' }}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3
                  className="font-display font-semibold pr-8"
                  style={{
                    color: 'var(--text-primary)',
                    fontSize: 'clamp(0.9375rem, 2vw, 1.125rem)',
                  }}
                  itemProp="name"
                >
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  style={{ color: 'var(--color-primary)' }}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                    id={`faq-answer-${index}`}
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <div className="px-4 sm:px-6 pb-4">
                      <p
                        className="font-body font-normal"
                        style={{
                          color: 'var(--text-muted)',
                          fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                          lineHeight: '1.7',
                        }}
                        itemProp="text"
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
