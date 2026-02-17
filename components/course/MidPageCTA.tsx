'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Calendar, CheckCircle } from 'react-feather';
import Link from 'next/link';
import { useQuickApply } from './QuickApplyContext';

interface MidPageCTAProps {
  courseSlug: string;
  courseName?: string;
}

export function MidPageCTA({ courseSlug, courseName }: MidPageCTAProps) {
  const { openModal } = useQuickApply();

  const scrollToApplication = () => {
    const element = document.getElementById('course-application-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Fallback: scroll to pricing section
      const pricingElement = document.getElementById('pricing');
      if (pricingElement) {
        pricingElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: '#f9fafb' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05, margin: "100px 0px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center">
          
          {/* Header */}
          <div className="mb-8">
            <h2
              className="font-display font-bold mb-4"
              style={{
                color: '#1a1a1a',
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)'
              }}>
              Ready to start your design journey?
            </h2>
            <p
              className="font-body mb-6 leading-relaxed"
              style={{
                color: '#6b7280',
                fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                lineHeight: '1.8'
              }}>
              Small batches ensure personalized mentorship. Limited seats available for the upcoming batch.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              onClick={scrollToApplication}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-lg font-body font-bold text-sm md:text-base transition-all shadow-lg hover:shadow-xl whitespace-nowrap"
              style={{
                backgroundColor: '#8458B3',
                color: 'white'
              }}>
              Check Your Eligibility
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
            </motion.button>

            <Link
              href={`/${courseSlug}#pricing`}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-lg font-body font-semibold text-sm md:text-base transition-all border-2 hover:bg-gray-50 whitespace-nowrap"
              style={{
                borderColor: '#8458B3',
                color: '#8458B3'
              }}>
              See Upcoming Batches
              <Calendar className="w-5 h-5 flex-shrink-0" />
            </Link>

            <button
              onClick={() => openModal(courseSlug, courseName)}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-lg font-body font-semibold text-sm md:text-base transition-all border-2 hover:bg-gray-50 whitespace-nowrap"
              style={{
                borderColor: '#8458B3',
                color: '#8458B3'
              }}>
              Talk to a Mentor
              <BookOpen className="w-5 h-5 flex-shrink-0" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
