'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, CreditCard, ArrowRight, CheckCircle, DollarSign, Percent, AlertCircle } from 'react-feather';
import Link from 'next/link';
import Image from 'next/image';
import { useCurrency } from '../../contexts/CurrencyContext';
import { coursePricing, type CoursePricingData } from '../../data/coursePricing';

interface PaymentOptionsProps {
  courseSlug: keyof CoursePricingData;
  courseType: 'short' | 'long'; // short = 30 days, long = 3-6 months
}

// Course name mapping for display
const courseNames: Record<keyof CoursePricingData, string> = {
  'ui-ux-design-bootcamp': 'UI/UX Design Bootcamp',
  'ui-ux-design-pro': 'UI/UX Design Pro',
  'ui-ux-design-master': 'UI/UX Design Master',
  'prompt-engineering-mastery': 'Prompt Engineering Mastery'
};

// Helper to parse price string to number
function parsePrice(priceStr: string): number {
  return parseFloat(priceStr.replace(/[₹$,]/g, ''));
}

// Helper to format number as currency
function formatCurrency(amount: number, currency: 'INR' | 'USD'): string {
  if (currency === 'INR') {
    return `₹${amount.toLocaleString('en-IN')}`;
  }
  return `$${amount.toLocaleString('en-US')}`;
}

// Calculate installment plans
function calculateInstallments(totalPrice: number, currency: 'INR' | 'USD', courseType: 'short' | 'long') {
  const advancePercent = 0.10;
  const advanceAmount = Math.round(totalPrice * advancePercent);
  const remainingAfterAdvance = totalPrice - advanceAmount;

  if (courseType === 'short') {
    // 50% advance (includes 10% booking), 50% at 50% completion
    const firstPayment = Math.round(totalPrice * 0.40); // 40% more at batch start (total 50%)
    const secondPayment = Math.round(totalPrice * 0.50);
    return {
      advance: advanceAmount,
      plans: [{
        name: '2-Part Payment',
        installments: [
          { amount: advanceAmount, label: '10% Advance (Non-refundable)', when: 'At enrollment' },
          { amount: firstPayment, label: '40% Balance', when: '3 days before batch' },
          { amount: secondPayment, label: '50% Final', when: 'At 50% course completion' }
        ]
      }]
    };
  }

  // Long courses: 2, 3, 4 installment options
  return {
    advance: advanceAmount,
    plans: [
      {
        name: '2 Installments',
        installments: [
          { amount: advanceAmount, label: '10% Advance (Non-refundable)', when: 'At enrollment' },
          { amount: Math.round(remainingAfterAdvance / 2), label: '1st Installment', when: '3 days before batch' },
          { amount: Math.round(remainingAfterAdvance / 2), label: '2nd Installment', when: 'Month 2' }
        ]
      },
      {
        name: '3 Installments',
        installments: [
          { amount: advanceAmount, label: '10% Advance (Non-refundable)', when: 'At enrollment' },
          { amount: Math.round(remainingAfterAdvance / 3), label: '1st Installment', when: '3 days before batch' },
          { amount: Math.round(remainingAfterAdvance / 3), label: '2nd Installment', when: 'Month 2' },
          { amount: Math.round(remainingAfterAdvance / 3), label: '3rd Installment', when: 'Month 3' }
        ]
      },
      {
        name: '4 Installments',
        installments: [
          { amount: advanceAmount, label: '10% Advance (Non-refundable)', when: 'At enrollment' },
          { amount: Math.round(remainingAfterAdvance / 4), label: '1st Installment', when: '3 days before batch' },
          { amount: Math.round(remainingAfterAdvance / 4), label: '2nd Installment', when: 'Month 2' },
          { amount: Math.round(remainingAfterAdvance / 4), label: '3rd Installment', when: 'Month 3' },
          { amount: Math.round(remainingAfterAdvance / 4), label: '4th Installment', when: 'Month 4' }
        ]
      }
    ]
  };
}

export function PaymentOptions({ courseSlug, courseType }: PaymentOptionsProps) {
  const { currency } = useCurrency();
  const [selectedPlan, setSelectedPlan] = useState(0);

  // Get course pricing
  const pricing = coursePricing[courseSlug];
  const priceStr = currency === 'INR' ? pricing.inr.price : pricing.usd.price;
  const totalPrice = parsePrice(priceStr);

  // Calculate installments
  const installmentData = calculateInstallments(totalPrice, currency, courseType);
  const advanceDisplay = formatCurrency(installmentData.advance, currency);

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
              Choose how you'd like to proceed. You can start with a free demo, or reserve your seat with an advance payment.
            </p>

            {/* 0% Interest Badge */}
            <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full" style={{ backgroundColor: '#e8f5e9' }}>
              <Percent className="w-4 h-4" style={{ color: '#2e7d32' }} />
              <span className="font-body font-semibold text-sm" style={{ color: '#2e7d32' }}>
                0% Interest on all installment plans
              </span>
            </div>
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

              <a
                href="https://calendar.app.google/N6Kg8VKMFU84v6UP8"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center font-body font-semibold py-3 px-6 rounded-lg transition-all hover:scale-105"
                style={{
                  backgroundColor: '#8458B3',
                  color: 'white',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
                }}>
                Request Free Demo
                <ArrowRight className="w-4 h-4 inline-block ml-2" />
              </a>
            </motion.div>

            {/* Option 2: Book Seat with Advance */}
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
                  Reserve Your Seat
                </h3>
              </div>

              <div className="mb-4">
                <p className="font-body font-semibold mb-2" style={{ color: '#1a1a1a', fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}>
                  10% Advance: {advanceDisplay}
                </p>
                <p
                  className="font-body text-sm mb-2 leading-relaxed"
                  style={{
                    color: '#6b7280',
                    fontSize: 'clamp(0.875rem, 1.5vw, 0.9375rem)',
                    lineHeight: '1.7'
                  }}>
                  This advance is <strong>non-refundable</strong> as per our cancellation policy. It reserves your seat in the upcoming batch.
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                {[
                  'Reserves your seat in the batch',
                  'Balance of 1st installment due 3 days before batch starts',
                  'Choose from flexible installment plans',
                  currency === 'INR' ? 'Pay via UPI or Bank Transfer' : 'Secure payment via Skydo'
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
                href={`https://wa.me/919353000320?text=${encodeURIComponent(`Hi, I'm interested in enrolling for the ${courseNames[courseSlug]} course and would like to pay the advance of ${advanceDisplay} to book my slot for the upcoming batch.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center font-body font-semibold py-3 px-6 rounded-lg transition-all hover:scale-105"
                style={{
                  backgroundColor: '#f2d53c',
                  color: '#1a1a1a',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
                }}>
                Pay {advanceDisplay} Advance
                <ArrowRight className="w-4 h-4 inline-block ml-2" />
              </a>

              {/* Payment Info Badge */}
              <div className="mt-4 text-center">
                <span className="font-body text-xs" style={{ color: '#6b7280' }}>
                  You'll receive UPI/Bank details via WhatsApp
                </span>
              </div>
            </motion.div>
          </div>

          {/* Installment Plans Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="bg-[#FFF6E2] rounded-xl p-6 md:p-8 border border-[#f2d53c] mb-8">
            <h3
              className="font-display font-semibold mb-6 text-center"
              style={{
                color: '#1a1a1a',
                fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)'
              }}>
              {courseType === 'short' ? 'Payment Schedule' : 'Choose Your Installment Plan'}
            </h3>

            {/* Plan Selection Tabs (for long courses) */}
            {courseType === 'long' && (
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {installmentData.plans.map((plan, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPlan(index)}
                    className={`px-4 py-2 rounded-lg font-body font-semibold text-sm transition-all ${selectedPlan === index
                      ? 'bg-[#8458B3] text-white'
                      : 'bg-white text-[#4a4a4a] hover:bg-gray-100'
                      }`}>
                    {plan.name}
                  </button>
                ))}
              </div>
            )}

            {/* Installment Table */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <table className="w-full">
                <thead>
                  <tr style={{ backgroundColor: '#8458B3' }}>
                    <th className="text-left py-3 px-4 font-body font-semibold text-white text-sm">Payment</th>
                    <th className="text-right py-3 px-4 font-body font-semibold text-white text-sm">Amount</th>
                    <th className="text-right py-3 px-4 font-body font-semibold text-white text-sm hidden sm:table-cell">When</th>
                  </tr>
                </thead>
                <tbody>
                  {installmentData.plans[selectedPlan].installments.map((inst, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-3 px-4 font-body text-sm" style={{ color: '#4a4a4a' }}>
                        {inst.label}
                        <span className="block sm:hidden text-xs mt-1" style={{ color: '#6b7280' }}>{inst.when}</span>
                      </td>
                      <td className="py-3 px-4 font-body font-semibold text-sm text-right" style={{ color: '#1a1a1a' }}>
                        {formatCurrency(inst.amount, currency)}
                      </td>
                      <td className="py-3 px-4 font-body text-sm text-right hidden sm:table-cell" style={{ color: '#6b7280' }}>
                        {inst.when}
                      </td>
                    </tr>
                  ))}
                  <tr style={{ backgroundColor: '#8458B3' }}>
                    <td className="py-3 px-4 font-body font-bold text-white text-sm">Total</td>
                    <td className="py-3 px-4 font-body font-bold text-white text-sm text-right">{formatCurrency(totalPrice, currency)}</td>
                    <td className="py-3 px-4 hidden sm:table-cell"></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Payment Terms */}
            <div className="mt-4 flex items-start gap-2 p-4 rounded-lg" style={{ backgroundColor: '#fff3cd', border: '1px solid #ffc107' }}>
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#856404' }} />
              <div className="font-body text-sm" style={{ color: '#856404' }}>
                <p className="font-semibold mb-2">Terms and Conditions of Payment:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>All installment payments shall be due and payable within five (5) business days from the scheduled due date as outlined above.</li>
                  <li>In the event of non-payment by the due date, Designient reserves the right to immediately suspend the student's access to course materials, live sessions, and all related educational services until such time as the outstanding balance is paid in full.</li>
                  <li>The 10% advance payment is non-refundable under any circumstances, in accordance with our <Link href="/cancellation-refund-policy" className="underline" style={{ color: '#8458B3' }}>Cancellation & Refund Policy</Link>.</li>
                  <li>Reinstatement following suspension shall be at the sole discretion of Designient and may be subject to additional administrative fees.</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Education Loan Section - INR Only */}
          {currency === 'INR' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-200 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg" style={{ backgroundColor: '#e3f2fd' }}>
                  <DollarSign className="w-6 h-6" style={{ color: '#1565c0' }} />
                </div>
                <h3
                  className="font-display font-semibold"
                  style={{
                    color: '#1a1a1a',
                    fontSize: 'clamp(1.125rem, 2vw, 1.375rem)'
                  }}>
                  Education Loan EMI Options (6, 9, 12 Months)
                </h3>
              </div>

              <p
                className="font-body mb-6 leading-relaxed"
                style={{
                  color: '#4a4a4a',
                  fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
                  lineHeight: '1.7'
                }}>
                For longer EMI tenures of 6, 9, or 12 months, we partner with leading banks to offer education loans.
                Subject to bank approval and eligibility criteria.
              </p>

              {/* Bank Logos */}
              <div className="flex flex-wrap items-center justify-center gap-6 mb-4 py-4 px-6 bg-gray-50 rounded-lg">
                <div className="flex items-center px-4 py-3 bg-white rounded-lg shadow-sm border border-gray-200">
                  <Image src="/images/banks/icici.svg" alt="ICICI Bank" width={80} height={24} className="h-6 w-auto" />
                </div>
                <div className="flex items-center px-4 py-3 bg-white rounded-lg shadow-sm border border-gray-200">
                  <Image src="/images/banks/hdfc.svg" alt="HDFC Bank" width={80} height={24} className="h-6 w-auto" />
                </div>
                <div className="flex items-center px-4 py-3 bg-white rounded-lg shadow-sm border border-gray-200">
                  <Image src="/images/banks/axis.svg" alt="Axis Bank" width={80} height={24} className="h-6 w-auto" />
                </div>
                <div className="flex items-center px-4 py-3 bg-white rounded-lg shadow-sm border border-gray-200">
                  <span className="font-body font-semibold text-sm" style={{ color: '#4a4a4a' }}>Kotak Mahindra</span>
                </div>
                <span className="font-body text-sm" style={{ color: '#6b7280' }}>and more...</span>
              </div>

              <p className="font-body text-center text-sm" style={{ color: '#6b7280' }}>
                Contact us after enrollment to discuss education loan options.
              </p>
            </motion.div>
          )}

          {/* Important Information Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200">
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
                  <strong>10% advance is non-refundable</strong> as per our <Link href="/cancellation-refund-policy" className="underline" style={{ color: '#8458B3' }}>Cancellation & Refund Policy</Link>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8458B3' }} />
                <span className="font-body" style={{ color: '#4a4a4a', fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)' }}>
                  <strong>Balance of 1st installment</strong> must be paid 3 days before batch start date.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8458B3' }} />
                <span className="font-body" style={{ color: '#4a4a4a', fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)' }}>
                  <strong>0% interest</strong> on all in-house installment plans (2, 3, 4 month options).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8458B3' }} />
                <span className="font-body" style={{ color: '#4a4a4a', fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)' }}>
                  <strong>Location-based pricing:</strong> INR for India (via Razorpay), USD for international (via Skydo).
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Policy Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.4 }}
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
