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
  return (
    <section
      className="py-24 md:py-32"
      style={{
        backgroundColor: '#fceed1'
      }}>

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
            className="font-display tracking-wide leading-tight mb-6 text-center"
            style={{
              color: '#8458B3',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)'
            }}>

            SUCCESS STORIES
          </h2>
          <p
            className="font-body text-base md:text-lg max-w-2xl mx-auto font-normal text-center"
            style={{
              color: '#4a4a4a',
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              lineHeight: '1.6'
            }}>
            Written stories from students who transformed their careers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="bg-white rounded-xl border-2 p-6 hover:shadow-lg transition-shadow flex flex-col h-full"
              style={{ borderColor: '#f4e4c1' }}>

              <div className="mb-4">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-display font-semibold" style={{ fontSize: '1.125rem', color: '#1a1a1a' }}>
                    {testimonial.name}
                  </h3>
                  <span
                    className="font-body text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: '#f4e4c1', color: '#8458B3' }}>
                    {testimonial.company}
                  </span>
                </div>
                <p className="font-body text-sm font-medium mb-3" style={{ color: '#8458B3' }}>
                  {testimonial.role}
                </p>
                {/* Star rating removed to match More Student Experiences style, or can keep if preferred. Keeping concise for now. */}
              </div>

              <p className="font-body text-sm leading-relaxed flex-grow" style={{ color: '#4a4a4a' }}>
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </motion.div>
          ))}
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
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-body font-semibold transition-all hover:scale-105 border-2"
            style={{
              backgroundColor: 'white',
              color: '#8458B3',
              borderColor: '#8458B3'
            }}>
            View All Success Stories
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>);

}