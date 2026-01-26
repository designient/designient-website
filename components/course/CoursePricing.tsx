'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'react-feather';
import Link from 'next/link';
import { useCurrency } from '../../contexts/CurrencyContext';
import { CurrencyToggle } from '../CurrencyToggle';
import type { CoursePricingData } from '../../data/coursePricing';

interface CoursePricingProps {
  courseSlug: keyof CoursePricingData;
  features: string[];
  batchDates?: {
    offline?: {
      bengaluru?: string;
      hyderabad?: string;
      pune?: string;
    };
    online?: {
      global?: string;
    };
  };
  ctaText?: string;
  ctaLink?: string;
}

export function CoursePricing({
  courseSlug,
  features,
  batchDates,
  ctaText = 'Enroll Now',
  ctaLink = '#enroll'
}: CoursePricingProps) {
  const { getCoursePrice, isLoading } = useCurrency();
  const pricing = getCoursePrice(courseSlug);

  if (isLoading) {
    return (
      <section className="py-24 md:py-32" style={{ backgroundColor: 'white' }}>
        <div className="max-w-container mx-auto px-3 md:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#8458B3] to-[#6b46c1] rounded-3xl p-8 md:p-12 shadow-2xl text-white text-center">
              <div className="animate-pulse">Loading pricing...</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: 'white' }}>
      <div className="max-w-container mx-auto px-3 md:px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#8458B3] to-[#6b46c1] rounded-3xl p-8 md:p-12 shadow-2xl text-white">
            
            <div className="text-center mb-8">
              <h2
                className="font-display font-bold mb-4"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                Course Pricing
              </h2>
              
              {/* Currency Toggle */}
              <div className="flex justify-center mb-4">
                <CurrencyToggle size="md" />
              </div>

              <div className="flex items-center justify-center gap-4 mb-2 flex-wrap">
                {pricing.originalPrice && (
                  <span
                    className="font-body text-xl line-through opacity-70"
                    style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)' }}>
                    {pricing.originalPrice}
                  </span>
                )}
                <span
                  className="font-display font-bold"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                  {pricing.price}
                </span>
              </div>
              <p className="font-body text-sm opacity-90 mb-2">
                One-time payment • No hidden fees
              </p>
              <p className="font-body text-xs opacity-75 max-w-2xl mx-auto">
                Fees are displayed in INR for learners in India and USD for international learners. You can switch currency using the toggle above.
              </p>
            </div>

            {/* Batch Dates */}
            {batchDates && (
              <div className="mb-8 p-6 rounded-xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                <h3 className="font-display font-semibold mb-4 text-lg">Upcoming Batches</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {batchDates.offline?.bengaluru && (
                    <div>
                      <span className="font-body text-sm opacity-80">Bengaluru (Offline):</span>
                      <p className="font-body font-semibold">{batchDates.offline.bengaluru}</p>
                    </div>
                  )}
                  {batchDates.online?.global && (
                    <div>
                      <span className="font-body text-sm opacity-80">Global (Online):</span>
                      <p className="font-body font-semibold">{batchDates.online.global}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Features */}
            <div className="mb-8">
              <h3 className="font-display font-semibold mb-4 text-lg">What's Included</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="font-body" style={{ fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)' }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <Link
              href={ctaLink}
              className="block w-full text-center font-body font-bold py-4 px-6 rounded-full transition-transform hover:scale-105 min-h-[44px] flex items-center justify-center gap-2"
              style={{
                backgroundColor: '#f2d53c',
                color: '#1a1a1a',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
              }}>
              {ctaText}
              <ArrowRight className="w-5 h-5" />
            </Link>

            <p className="text-center mt-6 font-body text-sm opacity-80">
              Need help? <Link href="/contact" className="underline">Contact us</Link>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
