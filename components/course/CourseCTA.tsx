'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail } from 'react-feather';
import Link from 'next/link';

interface CourseCTAProps {
  courseName: string;
  ctaText?: string;
  secondaryText?: string;
}

export function CourseCTA({
  courseName,
  ctaText = 'Ready to Start Your Journey?',
  secondaryText
}: CourseCTAProps) {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: '#8458B3' }}>
      <div className="max-w-container mx-auto px-3 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center text-white">
          
          <h2
            className="font-display font-bold mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            {ctaText}
          </h2>
          
          {secondaryText && (
            <p
              className="font-body mb-8 text-lg opacity-90"
              style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}>
              {secondaryText}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#enroll"
              className="inline-flex items-center gap-2 font-body font-bold px-8 py-4 rounded-full transition-transform hover:scale-105 min-h-[44px]"
              style={{
                backgroundColor: '#f2d53c',
                color: '#1a1a1a',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
              }}>
              Enroll in {courseName}
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <a
              href="tel:+919353000320"
              className="inline-flex items-center gap-2 font-body font-semibold px-8 py-4 rounded-full border-2 transition-colors hover:bg-white/10 min-h-[44px]"
              style={{
                borderColor: 'white',
                color: 'white',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
              }}>
              <Phone className="w-5 h-5" />
              Call Us
            </a>

            <a
              href="mailto:hello@designient.com"
              className="inline-flex items-center gap-2 font-body font-semibold px-8 py-4 rounded-full border-2 transition-colors hover:bg-white/10 min-h-[44px]"
              style={{
                borderColor: 'white',
                color: 'white',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
              }}>
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
