'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, MessageCircle } from 'react-feather';
import { usePathname } from 'next/navigation';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import { useQuickApply } from './QuickApplyContext';

interface CourseCTAProps {
  courseName: string;
  ctaText?: string;
  secondaryText?: string;
  cityName?: string;
  courseSlug?: string;
}

export function CourseCTA({
  courseName,
  ctaText = 'Ready to Start Your Journey?',
  secondaryText,
  cityName,
}: CourseCTAProps) {
  const pathname = usePathname();
  useQuickApply();

  const whatsappUrl = getWhatsAppUrl({
    type: cityName ? 'city' : 'course',
    courseName,
    cityName,
    sourcePage: pathname
  });

  const handleApplyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('course-application-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.href = '/apply-now';
    }
  };

  return (
    <section className="py-24 md:py-32 section-band-accent">
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center">

          <h2
            className="font-display font-bold mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--text-primary)' }}>
            {ctaText}
          </h2>

          {secondaryText && (
            <p
              className="font-body mb-8 text-lg leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', color: 'var(--text-secondary)' }}>
              {secondaryText}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body font-bold px-8 py-4 rounded-full transition-transform hover:scale-105 min-h-[44px] surface-on-accent"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: 'var(--text-on-accent)',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
              }}>
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>

            <button
              onClick={handleApplyClick}
              className="inline-flex items-center gap-2 font-body font-semibold px-8 py-4 rounded-full border-2 transition-colors hover:bg-[var(--color-accent-muted)] min-h-[44px]"
              style={{
                borderColor: 'var(--color-accent)',
                color: 'var(--color-accent)',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
              }}>
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="tel:+919353000320"
              className="inline-flex items-center gap-2 font-body font-semibold px-8 py-4 rounded-full border-2 transition-colors hover:bg-[var(--color-accent-muted)] min-h-[44px]"
              style={{
                borderColor: 'var(--color-accent)',
                color: 'var(--color-accent)',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
              }}>
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
