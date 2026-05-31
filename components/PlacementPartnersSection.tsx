'use client'

import React from 'react';
import { motion } from 'framer-motion';
const recentPlacements = [
  {
    name: 'Priya Sridaran',
    role: 'UI Designer',
    company: 'Google',
    package: '₹14-16L'
  },
  {
    name: 'Rahul Mehta',
    role: 'UX Researcher',
    company: 'Amazon',
    package: '₹10-12L'
  },
  {
    name: 'Sneha Kapoor',
    role: 'Product Designer',
    company: 'Microsoft',
    package: '₹12-15L'
  },
  {
    name: 'Arjun Singh',
    role: 'Design Lead',
    company: 'Flipkart',
    package: '₹16-20L'
  }];

export function PlacementPartnersSection() {
  return (
    <section
      id="placements"
      className="py-24 md:py-32"
      style={{
        backgroundColor: 'var(--bg-warm)'
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
          className="text-center mb-16 md:mb-24">

          <h2
            className="font-display tracking-wide leading-tight mb-6 text-center"
            style={{
              color: 'var(--color-primary)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)'
            }}>

            PLACEMENT PARTNERS
          </h2>
          <p
            className="font-body text-base md:text-lg max-w-3xl mx-auto font-normal text-center"
            style={{
              color: 'var(--text-secondary)',
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              lineHeight: '1.6'
            }}>

            Placement assistance, not fake guarantees. We help you prepare, connect, and succeed.
          </p>
        </motion.div>

        {/* Recent placements */}
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
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1]
          }}>

          <h3
            className="font-display tracking-wide text-center mb-12"
            style={{
              color: 'var(--text-primary)',
              fontWeight: 600,
              fontSize: 'clamp(1.5rem, 3vw, 2rem)'
            }}>

            RECENT PLACEMENTS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {recentPlacements.map((placement, index) =>
              <motion.div
                key={index}
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
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="group relative p-5 sm:p-6 rounded-2xl border-2 overflow-hidden transition-all duration-300 hover:shadow-xl"
                style={{
                  borderColor: 'var(--bg-peach)',
                  backgroundColor: 'var(--bg-card)'
                }}>

                {/* Decorative gradient background */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity duration-300" style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)' }}></div>

                <div className="relative z-10">
                  {/* Avatar placeholder */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mb-4 flex items-center justify-center font-display text-xl sm:text-2xl font-bold" style={{ backgroundColor: 'var(--bg-warm)', color: 'var(--color-primary)' }}>
                    {placement.name.charAt(0)}
                  </div>

                  {/* Name */}
                  <h4
                    className="font-display tracking-wide mb-2"
                    style={{
                      color: 'var(--text-primary)',
                      fontWeight: 600,
                      fontSize: 'clamp(1rem, 2vw, 1.25rem)'
                    }}>

                    {placement.name.toUpperCase()}
                  </h4>

                  {/* Role */}
                  <p
                    className="font-body text-sm mb-3 font-semibold"
                    style={{
                      color: 'var(--color-primary)',
                      fontSize: 'clamp(0.875rem, 1.2vw, 0.9375rem)',
                      lineHeight: '1.5'
                    }}>

                    {placement.role}
                  </p>

                  {/* Company */}
                  <p
                    className="font-body text-xs mb-4 font-normal"
                    style={{
                      color: 'var(--text-muted)',
                      fontSize: 'clamp(0.75rem, 1vw, 0.875rem)',
                      lineHeight: '1.5'
                    }}>

                    {placement.company}
                  </p>

                  {/* Package - Highlighted */}
                  <div className="pt-4 border-t" style={{ borderColor: 'var(--bg-peach)' }}>
                    <div className="font-body text-xs uppercase tracking-wider font-bold mb-1" style={{ color: 'var(--text-muted)' }}>
                      Package
                    </div>
                    <div
                      className="font-display tracking-wide"
                      style={{
                        color: 'var(--color-primary)',
                        fontWeight: 700,
                        fontSize: 'clamp(1.5rem, 3vw, 2rem)'
                      }}>

                      {placement.package}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>);

}