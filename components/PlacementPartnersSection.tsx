'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign } from 'react-feather';
const placementStats = [
  {
    icon: TrendingUp,
    value: '95%',
    label: 'Placement Rate'
  },
  {
    icon: DollarSign,
    value: '₹8L',
    label: 'Average Package'
  },
  {
    icon: Users,
    value: '150+',
    label: 'Students Placed'
  }];

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
        backgroundColor: '#FFF6E2'
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
              color: '#8458B3',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)'
            }}>

            PLACEMENT PARTNERS
          </h2>
          <p
            className="font-body text-base md:text-lg max-w-3xl mx-auto font-normal text-center"
            style={{
              color: '#4a4a4a',
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              lineHeight: '1.6'
            }}>

            Placement assistance, not fake guarantees. We help you prepare, connect, and succeed.
          </p>
        </motion.div>

        {/* Stats - Redesigned */}
        <div className="relative mb-12 sm:mb-16">
          <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 md:p-16" style={{ backgroundColor: '#8458B3' }}>
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
              <div className="absolute top-10 left-10 w-64 h-64 rounded-full" style={{ background: 'radial-gradient(circle, #f2d53c 0%, transparent 70%)' }}></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, #f2d53c 0%, transparent 70%)' }}></div>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {placementStats.map((stat, index) => (
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
                    delay: index * 0.15,
                    duration: 0.6,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center"
                      style={{
                        backgroundColor: '#f2d53c',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                      }}>
                      <stat.icon
                        className="w-7 h-7 sm:w-8 sm:h-8"
                        style={{
                          color: '#8458B3',
                          strokeWidth: 2.5
                        }} />
                    </div>
                  </div>
                  <div
                    className="font-display tracking-wide mb-3"
                    style={{
                      color: '#f2d53c',
                      fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                      fontWeight: 700,
                      lineHeight: '1'
                    }}>
                    {stat.value}
                  </div>
                  <div
                    className="font-body font-semibold uppercase tracking-wider"
                    style={{
                      color: 'rgba(255, 255, 255, 0.95)',
                      fontSize: 'clamp(0.875rem, 1.8vw, 1.125rem)',
                      letterSpacing: '0.05em'
                    }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

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
              color: '#1a1a1a',
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
                  borderColor: '#f4e4c1',
                  backgroundColor: 'white'
                }}>

                {/* Decorative gradient background */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity duration-300" style={{ background: 'radial-gradient(circle, #8458B3 0%, transparent 70%)' }}></div>

                <div className="relative z-10">
                  {/* Avatar placeholder */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mb-4 flex items-center justify-center font-display text-xl sm:text-2xl font-bold" style={{ backgroundColor: '#FFF6E2', color: '#8458B3' }}>
                    {placement.name.charAt(0)}
                  </div>

                  {/* Name */}
                  <h4
                    className="font-display tracking-wide mb-2"
                    style={{
                      color: '#1a1a1a',
                      fontWeight: 600,
                      fontSize: 'clamp(1rem, 2vw, 1.25rem)'
                    }}>

                    {placement.name.toUpperCase()}
                  </h4>

                  {/* Role */}
                  <p
                    className="font-body text-sm mb-3 font-semibold"
                    style={{
                      color: '#8458B3',
                      fontSize: 'clamp(0.875rem, 1.2vw, 0.9375rem)',
                      lineHeight: '1.5'
                    }}>

                    {placement.role}
                  </p>

                  {/* Company */}
                  <p
                    className="font-body text-xs mb-4 font-normal"
                    style={{
                      color: '#6b7280',
                      fontSize: 'clamp(0.75rem, 1vw, 0.875rem)',
                      lineHeight: '1.5'
                    }}>

                    {placement.company}
                  </p>

                  {/* Package - Highlighted */}
                  <div className="pt-4 border-t" style={{ borderColor: '#f4e4c1' }}>
                    <div className="font-body text-xs uppercase tracking-wider font-bold mb-1" style={{ color: '#6b7280' }}>
                      Package
                    </div>
                    <div
                      className="font-display tracking-wide"
                      style={{
                        color: '#8458B3',
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