'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'react-feather';

// Written success stories — aligned with /success-stories page
const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Product Designer',
    company: 'Razorpay',
    quote: 'The course helped me understand design thinking and user research. I was able to create projects that showcase my skills effectively. The mentorship was personalized and the feedback was always constructive.',
  },
  {
    name: 'Anjali Patel',
    role: 'UX Designer',
    company: 'Lollypop Design',
    quote: 'The Master program pushed me to think at a systems level. Real client-style projects and critique sessions prepared me for how design actually works in teams.',
  },
  {
    name: 'Rahul Kumar',
    role: 'UX Designer',
    company: 'Freshworks',
    quote: 'I came with zero design background. The bootcamp structure and mentor support helped me ship real projects. I now have a portfolio I am proud to show in interviews.',
  },
  {
    name: 'Sneha Nair',
    role: 'Product Designer',
    company: 'Thoughtworks',
    quote: 'Having a dev background helped with implementation, but I lacked design fundamentals. This course filled that gap. I finally feel confident owning the full design-to-dev handoff.',
  },
  {
    name: 'Neha Joshi',
    role: 'Lead UX Designer',
    company: 'upGrad',
    quote: 'The Master program focused on complex problems, multi-step flows, and design leadership. I worked on a capstone that mimicked real client constraints. That built my confidence.',
  },
];

export function TestimonialsSection() {
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-24 md:py-32 overflow-hidden">
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
          className="mb-16 md:mb-24">

          <h2
            className="font-display tracking-tight leading-tight mb-6 text-center"
            style={{
              color: 'var(--color-forest)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)'
            }}>

            Success Stories
          </h2>
          <p
            className="font-body text-base md:text-lg max-w-2xl mx-auto font-normal text-center"
            style={{
              color: 'var(--text-secondary)',
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              lineHeight: '1.6'
            }}>
            Written stories from students who transformed their careers
          </p>
        </motion.div>

        {/* Continuous Horizontal Scroll Marquee */}
        <div className="marquee-fade-container overflow-hidden py-4 -mx-4 px-4 sm:-mx-8 sm:px-8">
          <div className="flex gap-6 animate-scroll-ltr">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-[300px] sm:w-[380px] flex-shrink-0 bg-card rounded-xl border border-strong p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all flex flex-col h-[240px] justify-between border-l-4"
                style={{ borderLeftColor: 'var(--color-forest)' }}
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className="font-display font-semibold text-sm sm:text-base" style={{ color: 'var(--text-primary)' }}>
                      {testimonial.name}
                    </h3>
                    <span
                      className="font-body text-[10px] font-medium px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: 'var(--bg-section-green)', color: 'var(--color-forest)' }}>
                      {testimonial.company}
                    </span>
                  </div>
                  <p className="font-body text-xs font-semibold mb-3" style={{ color: 'var(--color-purple)' }}>
                    {testimonial.role}
                  </p>
                  <p className="font-body text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA to Success Stories Page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12">
          <Link
            href="/success-stories"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-body font-semibold transition-all hover:bg-[var(--color-purple-hover)] border"
            style={{
              backgroundColor: 'var(--color-purple)',
              color: '#ffffff',
              borderColor: 'var(--color-purple)'
            }}>
            View All Success Stories
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>);

}