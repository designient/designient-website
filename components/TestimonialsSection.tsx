'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star, MessageCircle, ArrowRight } from 'react-feather';

// Written success stories — aligned with /success-stories page
const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Product Designer',
    company: 'Razorpay',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
    quote: 'The course helped me understand design thinking and user research. I was able to create projects that showcase my skills effectively. The mentorship was personalized and the feedback was always constructive.',
  },
  {
    name: 'Anjali Patel',
    role: 'UX Designer',
    company: 'Lollypop Design',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
    quote: 'The Master program pushed me to think at a systems level. Real client-style projects and critique sessions prepared me for how design actually works in teams.',
  },
  {
    name: 'Rahul Kumar',
    role: 'UX Designer',
    company: 'Freshworks',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
    quote: 'I came with zero design background. The bootcamp structure and mentor support helped me ship real projects. I now have a portfolio I am proud to show in interviews.',
  },
  {
    name: 'Sneha Nair',
    role: 'Product Designer',
    company: 'Thoughtworks',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
    quote: 'Having a dev background helped with implementation, but I lacked design fundamentals. This course filled that gap. I finally feel confident owning the full design-to-dev handoff.',
  },
  {
    name: 'Neha Joshi',
    role: 'Lead UX Designer',
    company: 'upGrad',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
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
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="group relative rounded-2xl border-2 shadow-sm overflow-hidden"
              style={{ backgroundColor: 'white', borderColor: '#f4e4c1' }}>
              <div className="p-8 md:p-10">
                <MessageCircle className="w-12 h-12 mb-6" style={{ color: '#8458B3' }} />
                <p
                  className="font-body text-lg leading-relaxed mb-8 font-normal"
                  style={{
                    color: '#4a4a4a',
                    fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                    lineHeight: '1.7'
                  }}>
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}, ${testimonial.role} at ${testimonial.company} - Designient student success story`}
                    width="400"
                    height="400"
                    loading="lazy"
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 flex-shrink-0"
                    style={{ borderColor: '#f2d53c' }}
                  />
                  <div className="min-w-0 flex-1">
                    <h4
                      className="font-display tracking-wide mb-1"
                      style={{
                        color: '#1a1a1a',
                        fontWeight: 600,
                        fontSize: 'clamp(1rem, 2vw, 1.5rem)'
                      }}>
                      {testimonial.name}
                    </h4>
                    <p
                      className="font-body font-normal"
                      style={{
                        color: '#6a6a6a',
                        fontSize: 'clamp(0.8125rem, 1.5vw, 0.9375rem)',
                        lineHeight: '1.6'
                      }}>
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#f2d53c' }} />
                  ))}
                </div>
              </div>
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