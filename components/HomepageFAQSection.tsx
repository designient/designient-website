'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'react-feather';
import { StructuredData } from './StructuredData';

const faqs = [
  {
    question: 'Is this UI/UX course beginner friendly?',
    answer: 'Yes. Our courses are designed for beginners and career switchers. You can start from scratch, even without a design or tech background.'
  },
  {
    question: 'Do you teach AI tools as part of the UI/UX curriculum?',
    answer: 'Yes. AI tools are integrated into our UI/UX workflow — from research and ideation to testing and iteration — as practical support tools, not shortcuts.'
  },
  {
    question: 'Do you guarantee placements?',
    answer: 'We don&apos;t promise fake guarantees. We provide structured placement assistance, portfolio guidance, interview preparation, and career mentoring.'
  },
  {
    question: 'Can I attend the course online from outside India?',
    answer: 'Yes. We offer online learning options for students across India and globally.'
  },
  {
    question: 'How big is each batch?',
    answer: 'Each batch is limited to around 10 students to ensure personalised mentorship and feedback.'
  }
];

export function HomepageFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // FAQ Schema for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer.replace(/&apos;/g, "'")
      }
    }))
  };

  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: '#FFF6E2' }}>
      <StructuredData data={faqSchema} />
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
          className="mb-12 md:mb-16">
          <h2
            className="font-display tracking-wide leading-tight mb-6 text-center"
            style={{
              color: '#8458B3',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)'
            }}>
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.4
              }}
              className="border rounded-lg overflow-hidden"
              style={{
                borderColor: '#e5e7eb',
                backgroundColor: openIndex === index ? '#FFF6E2' : 'white'
              }}
              itemScope
              itemType="https://schema.org/Question">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-left min-h-[44px]"
                style={{
                  backgroundColor: 'transparent'
                }}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}>
                <h3
                  className="font-display font-semibold pr-8"
                  style={{
                    color: '#1a1a1a',
                    fontSize: 'clamp(0.9375rem, 2vw, 1.125rem)'
                  }}
                  itemProp="name">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  style={{ color: '#8458B3' }}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0
                    }}
                    animate={{
                      height: 'auto',
                      opacity: 1
                    }}
                    exit={{
                      height: 0,
                      opacity: 0
                    }}
                    transition={{
                      duration: 0.3
                    }}
                    className="overflow-hidden"
                    id={`faq-answer-${index}`}
                    itemScope
                    itemType="https://schema.org/Answer">
                    <div className="px-4 sm:px-6 pb-4">
                      <p
                        className="font-body font-normal"
                        style={{
                          color: '#6b7280',
                          fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                          lineHeight: '1.7'
                        }}
                        itemProp="text">
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
