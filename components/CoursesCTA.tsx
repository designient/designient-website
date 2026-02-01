'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'react-feather';
import Link from 'next/link';
export function CoursesCTA() {
  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden min-h-[50vh] flex items-center"
      style={{
        backgroundColor: '#8458B3'
      }}>

      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full filter blur-3xl bg-white" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full filter blur-3xl bg-white" />
      </div>

      <div className="max-w-2xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="font-display tracking-wide text-white mb-4 md:mb-6 leading-[1.1]"
          style={{
            fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 3.5rem)'
          }}>

          Still Not Sure Which Course is Right?
        </motion.h2>

          <motion.p
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            delay: 0.1,
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="font-body text-white/95 mb-4 leading-[1.6]"
          style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.25rem)'
          }}>

          Talk to our course advisors for free
        </motion.p>
        
        <motion.p
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            delay: 0.15,
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="font-body text-white/80 mb-8 md:mb-10 leading-[1.6] text-sm"
          style={{
            fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
          }}>
          Need <Link href="/corporates" className="underline hover:no-underline font-semibold text-white">enterprise training</Link> or <Link href="/corporates/ai-enablement-workshops" className="underline hover:no-underline font-semibold text-white">AI enablement</Link> for your team? <Link href="/corporates" className="underline hover:no-underline font-semibold text-white">Explore our corporate solutions</Link>.
        </motion.p>

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
            once: true
          }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1]
          }}>

          <motion.button
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}
            className="font-body font-bold shadow-2xl flex items-center gap-2 mx-auto min-h-[44px]"
            style={{
              backgroundColor: '#f2d53c',
              color: '#1a1a1a',
              padding: '14px 36px',
              borderRadius: '100px',
              fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
            }}>

            <Calendar className="w-5 h-5" />
            Schedule a Call
          </motion.button>
        </motion.div>
      </div>
    </section>);

}