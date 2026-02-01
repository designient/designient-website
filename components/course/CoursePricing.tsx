'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Clock, Calendar } from 'react-feather';
import Link from 'next/link';
import { useCurrency } from '../../contexts/CurrencyContext';
import { CurrencyToggle } from '../CurrencyToggle';
import { UrgencyBanner } from './UrgencyBanner';
import type { CoursePricingData } from '../../data/coursePricing';
import { proCourseBatchSchedule } from '../../data/batchSchedule';

interface CoursePricingProps {
  courseSlug: keyof CoursePricingData;
  features: string[];
  duration?: string;
  batchDates?: {
    offline?: {
      bengaluru?: string;
      hyderabad?: string;
      pune?: string;
    };
    online?: {
      global?: string;
      schedule?: {
        days: string;
        time: string;
        type?: string;
      };
    };
  } | null;
  batchFull?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

export function CoursePricing({
  courseSlug,
  features,
  duration,
  batchDates,
  batchFull = false,
  ctaText = 'Apply Now',
  ctaLink = '/apply-now'
}: CoursePricingProps) {
  const { getCoursePrice, isLoading, currency } = useCurrency();
  const pricing = getCoursePrice(courseSlug);

  if (isLoading) {
    return (
      <section className="py-24 md:py-32" style={{ backgroundColor: 'white' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
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
    <section id="pricing" className="py-24 md:py-32" style={{ backgroundColor: 'white' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
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

              {/* Urgency Banner in Pricing */}
              {!batchFull && batchDates && (
                <div className="mb-6">
                  <UrgencyBanner
                    batchStartDate={
                      batchDates.offline?.bengaluru ||
                      batchDates.offline?.hyderabad ||
                      batchDates.offline?.pune ||
                      batchDates.online?.global
                    }
                    seatsRemaining={8}
                    showCountdown={true}
                    variant="pricing"
                  />
                </div>
              )}

              {/* Currency Toggle */}
              <div className="flex justify-center mb-4">
                <CurrencyToggle size="md" />
              </div>

              <div className="flex items-center justify-center gap-4 mb-2 flex-wrap">
                {pricing.originalPrice && (
                  <span
                    className="font-body text-xl line-through opacity-70"
                    style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)' }}>
                    {currency} {pricing.originalPrice}
                  </span>
                )}
                <span
                  className="font-display font-bold"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                  {currency} {pricing.price}
                </span>
              </div>
              <p className="font-body text-sm opacity-90 mb-2">
                One-time payment • No hidden fees
              </p>
              <div className="font-body text-xs opacity-90 max-w-2xl mx-auto space-y-1">
                <p className="font-semibold mb-2">Pricing Information:</p>
                <p>• INR pricing applies to learners in India</p>
                <p>• USD pricing applies to international learners</p>
                <p className="mt-2 opacity-75">Same comprehensive curriculum, adapted delivery for your location.</p>
              </div>
            </div>

            {/* Batch Dates or Batch Full */}
            {batchFull ? (
              <div className="mb-8 p-6 rounded-xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                <h3 className="font-display font-semibold mb-4 text-lg">Batch Status</h3>
                <div className="text-center">
                  <p className="font-body font-semibold mb-2" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}>
                    Current batch is full
                  </p>
                  <p className="font-body text-sm opacity-90 mb-4">
                    To maintain quality mentorship and personalised feedback, each batch is intentionally kept small.
                  </p>
                  <p className="font-body text-sm opacity-80">
                    New batch dates will be announced soon. <Link href="/contact-us" className="underline font-semibold">Contact us</Link> to be notified when the next batch opens.
                  </p>
                </div>
              </div>
            ) : batchDates ? (
              <div className="mb-8 p-6 rounded-xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                <h3 className="font-display font-semibold mb-4 text-lg">Upcoming Batches</h3>
                {courseSlug === 'ui-ux-design-pro' ? (
                  <div className="space-y-4">
                    {/* Bangalore */}
                    {(proCourseBatchSchedule.bangalore.weekday?.morning?.available || proCourseBatchSchedule.bangalore.weekend?.morning?.available) && (
                      <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                        <h4 className="font-body font-semibold mb-3 text-base">Bangalore</h4>
                        <div className="space-y-3">
                          {/* Weekday Morning Batch */}
                          {proCourseBatchSchedule.bangalore.weekday?.morning?.available && (
                            <div>
                              <p className="font-body text-sm opacity-90 mb-2">Weekday - Morning Batch</p>
                              <div className="flex items-center gap-2 mb-1">
                                <Calendar className="w-4 h-4" />
                                <span className="font-body text-sm">{proCourseBatchSchedule.bangalore.weekday.morning.startDate}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span className="font-body text-sm">{proCourseBatchSchedule.bangalore.weekday.morning.days}, {proCourseBatchSchedule.bangalore.weekday.morning.time}</span>
                              </div>
                            </div>
                          )}
                          {/* Weekend Morning Batch */}
                          {proCourseBatchSchedule.bangalore.weekend?.morning?.available && (
                            <div>
                              <p className="font-body text-sm opacity-90 mb-2">Weekend - Morning Batch</p>
                              <div className="flex items-center gap-2 mb-1">
                                <Calendar className="w-4 h-4" />
                                <span className="font-body text-sm">{proCourseBatchSchedule.bangalore.weekend.morning.startDate}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span className="font-body text-sm">{proCourseBatchSchedule.bangalore.weekend.morning.days}, {proCourseBatchSchedule.bangalore.weekend.morning.time}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                    {/* Hyderabad - Batch Full */}
                    {(!proCourseBatchSchedule.hyderabad.weekday && !proCourseBatchSchedule.hyderabad.weekend) && (
                      <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(220, 38, 38, 0.1)' }}>
                        <h4 className="font-body font-semibold mb-2 text-base">Hyderabad</h4>
                        <p className="font-body text-sm opacity-90">Current batch is full</p>
                      </div>
                    )}
                    {/* Pune - Batch Full */}
                    {!proCourseBatchSchedule.pune.weekend && (
                      <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(220, 38, 38, 0.1)' }}>
                        <h4 className="font-body font-semibold mb-2 text-base">Pune</h4>
                        <p className="font-body text-sm opacity-90">Current batch is full</p>
                      </div>
                    )}
                    {/* Online - Pro Course (Same as Weekend Morning Batch) */}
                    {batchDates.online?.global && courseSlug === 'ui-ux-design-pro' && proCourseBatchSchedule.bangalore.weekend?.morning?.available && (
                      <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                        <h4 className="font-body font-semibold mb-3 text-base">Global (Online)</h4>
                        <div>
                          <p className="font-body text-sm opacity-90 mb-2">Morning Batch</p>
                          <div className="flex items-center gap-2 mb-1">
                            <Calendar className="w-4 h-4" />
                            <span className="font-body text-sm">{batchDates.online.global}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span className="font-body text-sm">{proCourseBatchSchedule.bangalore.weekend.morning.days}, {proCourseBatchSchedule.bangalore.weekend.morning.time}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-4">
                    {batchDates.offline?.bengaluru && (
                      <div>
                        <span className="font-body text-sm opacity-80">Bengaluru (Offline):</span>
                        <p className="font-body font-semibold">{batchDates.offline.bengaluru}</p>
                      </div>
                    )}
                    {batchDates.offline?.hyderabad && (
                      <div>
                        <span className="font-body text-sm opacity-80">Hyderabad (Offline):</span>
                        <p className="font-body font-semibold">{batchDates.offline.hyderabad}</p>
                      </div>
                    )}
                    {batchDates.offline?.pune && (
                      <div>
                        <span className="font-body text-sm opacity-80">Pune (Offline):</span>
                        <p className="font-body font-semibold">{batchDates.offline.pune}</p>
                      </div>
                    )}
                    {batchDates.online?.global && (
                      <div>
                        <span className="font-body text-sm opacity-80">Global (Online):</span>
                        {batchDates.online.schedule ? (
                          <div>
                            <p className="font-body font-semibold">{batchDates.online.global}</p>
                            <p className="font-body text-sm opacity-90">{batchDates.online.schedule.days}, {batchDates.online.schedule.time}</p>
                          </div>
                        ) : (
                          <p className="font-body font-semibold">{batchDates.online.global}</p>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : null}

            {/* Value Framing */}
            <div className="mb-6 p-6 rounded-xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
              <h3 className="font-display font-semibold mb-4 text-lg">What this fee actually includes</h3>
              <ul className="space-y-2 mb-4">
                {duration && (
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm">{duration} of structured, mentor-led learning</span>
                  </li>
                )}
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm">Personal feedback on projects and portfolio</span>
                </li>
                {(courseSlug === 'ui-ux-design-pro' || courseSlug === 'ui-ux-design-master') && (
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm">Career and placement guidance</span>
                  </li>
                )}
                {(courseSlug === 'ui-ux-design-pro' || courseSlug === 'ui-ux-design-master') && (
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm">Lifetime access to learning resources</span>
                  </li>
                )}
                {courseSlug === 'ui-ux-design-bootcamp' && (
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm">A fast-track path to design fundamentals and portfolio</span>
                  </li>
                )}
                {courseSlug === 'ui-ux-design-pro' && (
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm">A clear path from beginner to job-ready designer</span>
                  </li>
                )}
                {courseSlug === 'ui-ux-design-master' && (
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm">Advanced specialization for senior design roles</span>
                  </li>
                )}
                {courseSlug === 'prompt-engineering-mastery' && (
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm">Master AI tools and prompt engineering skills</span>
                  </li>
                )}
              </ul>
              <p className="font-body text-sm italic opacity-90">
                {courseSlug === 'ui-ux-design-master' ? (
                  <>
                    This isn't just a course.<br />
                    It's an advanced mentorship program for design leaders.
                  </>
                ) : courseSlug === 'prompt-engineering-mastery' ? (
                  <>
                    This isn't just a course.<br />
                    It's a practical AI skills training program.
                  </>
                ) : courseSlug === 'ui-ux-design-bootcamp' ? (
                  <>
                    This isn't just a course.<br />
                    It's an intensive bootcamp to kickstart your design journey.
                  </>
                ) : (
                  <>
                    This isn't just a course.<br />
                    It's a career-focused mentorship program.
                  </>
                )}
              </p>
            </div>

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

            {/* Info Text */}
            <div className="text-center mt-6">
              <p className="font-body text-sm opacity-90 mb-2">
                See payment options below to get started
              </p>
              <p className="font-body text-sm opacity-80">
                Need help? <Link href="/contact-us" className="underline">Contact us</Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
