'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CreditCard, ArrowRight, CheckCircle } from 'react-feather';
import Link from 'next/link';
import { useCurrency } from '../../contexts/CurrencyContext';

interface PaymentOptionsProps {
  courseSlug: string;
  advanceAmount?: {
    inr: string;
    usd: string;
  };
}

export function PaymentOptions({ courseSlug, advanceAmount }: PaymentOptionsProps) {
  const { currency } = useCurrency();
  
  // Default advance amounts if not provided
  const defaultAdvance = {
    inr: '₹10,000',
    usd: '$150'
  };
  
  const advance = advanceAmount || defaultAdvance;
  const displayAdvance = currency === 'INR' ? advance.inr : advance.usd;

  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: 'white' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto">
          
          <div className="text-center mb-12">
            <h2
              className="font-display font-bold mb-4"
              style={{
                color: '#1a1a1a',
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)'
              }}>
              Payment Options
            </h2>
            <p
              className="font-body max-w-3xl mx-auto leading-relaxed"
              style={{
                color: '#6b7280',
                fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                lineHeight: '1.8'
              }}>
              Choose how you'd like to proceed. You can start with a free demo, or optionally reserve your seat with an advance payment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            
            {/* Option 1: Request a Free Demo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="bg-white border-2 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
              style={{ borderColor: '#8458B3' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg" style={{ backgroundColor: '#8458B3' }}>
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3
                  className="font-display font-bold"
                  style={{
                    color: '#1a1a1a',
                    fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)'
                  }}>
                  Request a Free Demo
                </h3>
              </div>
              
              <p
                className="font-body mb-6 leading-relaxed"
                style={{
                  color: '#4a4a4a',
                  fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
                  lineHeight: '1.7'
                }}>
                Book a live demo or counselling session with our team. No payment required. We'll discuss:
              </p>
              
              <ul className="space-y-3 mb-6">
                {[
                  'Course fit and learning path',
                  'Batch availability and schedule',
                  'Flexible payment plan options',
                  'Any questions you have'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8458B3' }} />
                    <span className="font-body" style={{ color: '#4a4a4a', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p
                className="font-body text-sm mb-6 leading-relaxed"
                style={{
                  color: '#6b7280',
                  fontSize: 'clamp(0.875rem, 1.5vw, 0.9375rem)',
                  lineHeight: '1.7'
                }}>
                After the demo, you can choose to enrol and select a payment plan, or optionally pay an advance to reserve your seat.
              </p>

              <Link
                href="/contact-us"
                className="block w-full text-center font-body font-semibold py-3 px-6 rounded-lg transition-all hover:scale-105"
                style={{
                  backgroundColor: '#8458B3',
                  color: 'white',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
                }}>
                Request Free Demo
                <ArrowRight className="w-4 h-4 inline-block ml-2" />
              </Link>
            </motion.div>

            {/* Option 2: Book Seat with Optional Advance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="bg-white border-2 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
              style={{ borderColor: '#f2d53c' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg" style={{ backgroundColor: '#f2d53c' }}>
                  <CreditCard className="w-6 h-6" style={{ color: '#1a1a1a' }} />
                </div>
                <h3
                  className="font-display font-bold"
                  style={{
                    color: '#1a1a1a',
                    fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)'
                  }}>
                  Book Seat with Advance
                </h3>
              </div>
              
              <div className="mb-4">
                <p className="font-body font-semibold mb-2" style={{ color: '#1a1a1a', fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}>
                  Advance Payment: {displayAdvance}
                </p>
                <p
                  className="font-body text-sm mb-4 leading-relaxed"
                  style={{
                    color: '#6b7280',
                    fontSize: 'clamp(0.875rem, 1.5vw, 0.9375rem)',
                    lineHeight: '1.7'
                  }}>
                  <strong>This advance payment is optional.</strong> It reserves your seat in the upcoming batch and does not complete the full course payment.
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                {[
                  'Reserves your seat in the batch',
                  'Remaining balance paid later',
                  'Payment plan discussed after enrolment',
                  'Secure payment via Razorpay'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#f2d53c' }} />
                    <span className="font-body" style={{ color: '#4a4a4a', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#pricing"
                className="block w-full text-center font-body font-semibold py-3 px-6 rounded-lg transition-all hover:scale-105"
                style={{
                  backgroundColor: '#f2d53c',
                  color: '#1a1a1a',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
                }}>
                Pay Advance (Optional)
                <ArrowRight className="w-4 h-4 inline-block ml-2" />
              </a>
            </motion.div>
          </div>

          {/* Important Information Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="bg-[#FFF6E2] rounded-xl p-6 md:p-8 border border-[#f2d53c]">
            <h3
              className="font-display font-semibold mb-4"
              style={{
                color: '#1a1a1a',
                fontSize: 'clamp(1.125rem, 2vw, 1.375rem)'
              }}>
              Important Information
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8458B3' }} />
                <span className="font-body" style={{ color: '#4a4a4a', fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)' }}>
                  <strong>Demo is always available first:</strong> You can request a free demo before making any payment decision.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8458B3' }} />
                <span className="font-body" style={{ color: '#4a4a4a', fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)' }}>
                  <strong>Advance payment is optional:</strong> You can enrol without paying an advance. The advance simply reserves your seat.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8458B3' }} />
                <span className="font-body" style={{ color: '#4a4a4a', fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)' }}>
                  <strong>Flexible payment plans:</strong> Remaining course fees can be paid upfront, in instalments aligned with batch schedule, or through EMI options (India only). Payment schedules are shared after enrolment.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8458B3' }} />
                <span className="font-body" style={{ color: '#4a4a4a', fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)' }}>
                  <strong>Location-based pricing:</strong> INR pricing for learners in India, USD pricing for international learners. Same curriculum, adapted delivery.
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Payment Plan Types - High Level Only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="mt-10">
            <h3
              className="font-display font-semibold mb-6 text-center"
              style={{
                color: '#1a1a1a',
                fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)'
              }}>
              Payment Plan Options (Discussed After Enrolment)
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: 'Upfront Payment',
                  description: 'Pay the full remaining balance in one payment. May include limited-time offers.'
                },
                {
                  title: 'Instalment Plan',
                  description: 'Split remaining fee into instalments aligned with your batch schedule.'
                },
                {
                  title: 'EMI / Loan (India Only)',
                  description: 'Available for learners in India. Subject to bank or lender approval.'
                },
                {
                  title: 'International Payment',
                  description: 'USD payments in scheduled milestones for global learners.'
                }
              ].map((plan, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
                  <h4
                    className="font-display font-semibold mb-2"
                    style={{
                      color: '#8458B3',
                      fontSize: 'clamp(1rem, 1.8vw, 1.125rem)'
                    }}>
                    {plan.title}
                  </h4>
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{
                      color: '#6b7280',
                      fontSize: 'clamp(0.875rem, 1.5vw, 0.9375rem)',
                      lineHeight: '1.6'
                    }}>
                    {plan.description}
                  </p>
                </div>
              ))}
            </div>
            <p
              className="font-body text-center mt-6 text-sm"
              style={{
                color: '#6b7280',
                fontSize: 'clamp(0.875rem, 1.5vw, 0.9375rem)'
              }}>
              Specific amounts, dates, and terms are shared after you enrol or complete a demo session.
            </p>
          </motion.div>

          {/* Policy Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="mt-8 text-center">
            <p className="font-body text-xs" style={{ color: '#6b7280' }}>
              By proceeding with payment, you agree to our{' '}
              <Link href="/terms-and-conditions" className="underline hover:no-underline" style={{ color: '#8458B3' }}>
                Terms and Conditions
              </Link>
              {' '}and{' '}
              <Link href="/cancellation-refund-policy" className="underline hover:no-underline" style={{ color: '#8458B3' }}>
                Cancellation & Refund Policy
              </Link>
              .
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
