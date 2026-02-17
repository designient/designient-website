'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'react-feather';
import { StructuredData } from '../StructuredData';

interface FAQ {
  question: string;
  answer: string;
}

interface CourseFAQProps {
  faqs: FAQ[];
  title?: string;
  disableSchema?: boolean;
}

export function CourseFAQ({ faqs, title = 'Frequently Asked Questions', disableSchema = false }: CourseFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // FAQ Schema for SEO (only if not disabled)
  const faqSchema = !disableSchema ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  } : null;

  return (
    <section id="faqs" className="py-20 md:py-28" style={{ backgroundColor: 'white' }}>
      {faqSchema && <StructuredData data={faqSchema} />}
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16">
          <h2
            className="font-display font-bold mb-4"
            style={{
              color: '#8458B3',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)'
            }}>
            {title}
          </h2>
          <p className="font-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-4" style={{ color: '#6b7280' }}>
            Common questions about the bootcamp, curriculum, and enrollment process.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="border rounded-lg overflow-hidden bg-white"
              style={{ borderColor: '#e5e7eb' }}>
              
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left min-h-[44px] hover:bg-gray-50 transition-colors">
                <h3
                  className="font-display font-semibold pr-8 flex-1"
                  style={{
                    color: '#1a1a1a',
                    fontSize: 'clamp(0.9375rem, 2vw, 1.125rem)'
                  }}>
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}>
                  <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: '#8458B3' }} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden">
                    <div className="px-6 pb-4">
                      <p
                        className="font-body font-normal"
                        style={{
                          color: '#6b7280',
                          fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                          lineHeight: '1.7'
                        }}>
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
