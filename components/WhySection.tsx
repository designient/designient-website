'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sun, TrendingUp, Zap, Users, Smile } from 'react-feather';
const values = [
{
  icon: TrendingUp,
  title: 'Hands-on Learning',
  description: 'Build a portfolio with real projects that get you hired.'
},
{
  icon: Users,
  title: 'Live Mentorship',
  description: 'Get personalized feedback from industry experts.'
},
{
  icon: Zap,
  title: 'Real-world Projects',
  description: 'Work on actual client projects, not just mockups.'
},
{
  icon: Heart,
  title: 'Career Support',
  description: 'Placement assistance and interview prep included.'
}];

export function WhySection() {
  return (
    <section
      className="py-24 md:py-32"
      style={{
        backgroundColor: '#FFF6E2'
      }}>

      <div className="max-w-container mx-auto px-3 md:px-4">
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

            WHY CHOOSE OUR
            <br />
            UI UX DESIGN COURSE?
          </h2>
          <p
            className="font-body text-base md:text-lg max-w-3xl mx-auto font-normal text-center"
            style={{
              color: '#4a4a4a',
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              lineHeight: '1.6'
            }}>
            Discover what makes our UI/UX design courses the best choice for your career transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {values.map((value, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 40
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
              delay: index * 0.1,
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="group relative">

              <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
              style={{
                backgroundColor: '#f2d53c',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
              }}>

                <value.icon
                className="w-8 h-8"
                style={{
                  color: '#8458B3',
                  strokeWidth: 2.5
                }} />

              </div>

              <h3
              className="font-display tracking-wide mb-4"
              style={{
                color: '#1a1a1a',
                fontWeight: 600,
                fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)'
              }}>

                {value.title.toUpperCase()}
              </h3>

              <p
              className="font-body text-base leading-relaxed font-normal"
              style={{
                color: '#4a4a4a',
                fontSize: 'clamp(1rem, 1.5vw, 1.0625rem)',
                lineHeight: '1.7'
              }}>

                {value.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}