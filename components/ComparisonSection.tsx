'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'react-feather';
const comparisons = [
{
  feature: 'Placement Rate',
  designient: '95%',
  others: 'Upto 70%',
  highlight: true
},
{
  feature: 'Adobe Certification',
  designient: 'Included',
  others: 'Don\'t Have',
  highlight: false
},
{
  feature: 'Lifetime Mentorship',
  designient: 'Yes',
  others: 'No',
  highlight: false
},
{
  feature: 'Real Client Projects',
  designient: 'Always',
  others: 'Mostly Mock',
  highlight: false
},
{
  feature: 'Batch Size',
  designient: '15',
  others: '20-50',
  highlight: false
},
{
  feature: 'Personalized Learning',
  designient: 'Weekly',
  others: 'Not Always',
  highlight: false
},
{
  feature: 'Job Assistance',
  designient: 'Guaranteed',
  others: 'Limited',
  highlight: true
},
{
  feature: 'Portfolio Review',
  designient: 'Unlimited',
  others: '2-3 Times',
  highlight: false
}];

export function ComparisonSection() {
  return (
    <section id="comparison" className="py-24 md:py-32" style={{ backgroundColor: '#ffffff' }}>
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
          className="text-center mb-16 md:mb-24">

          <h2 className="font-display tracking-wide leading-tight mb-6 text-center" style={{ color: '#8458B3', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            WHY DESIGNIENT?
          </h2>
          <p
            className="font-body text-base md:text-lg max-w-3xl mx-auto font-normal text-center"
            style={{
              color: '#4a4a4a',
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              lineHeight: '1.6'
            }}>

            See how we compare to other design schools
          </p>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 40
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
          className="overflow-x-auto">
          <div className="rounded-2xl border-4 overflow-hidden shadow-xl" style={{ borderColor: '#8458B3', backgroundColor: 'white' }}>
            <table className="w-full">
              <thead>
                <tr style={{ backgroundColor: '#8458B3' }}>
                  <th className="font-display text-left tracking-wide py-3 sm:py-4 px-3 sm:px-6" style={{ color: '#ffffff', fontWeight: 700, fontSize: 'clamp(0.875rem, 2vw, 1.25rem)' }}>
                    FEATURE
                  </th>
                  <th className="text-center py-3 sm:py-4 px-3 sm:px-6">
                    <div className="flex items-center justify-center">
                      <img
                        src="/designient-logo.svg"
                        alt="Designient Logo"
                        className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                        style={{ filter: 'brightness(0) invert(1)' }}
                        width="140"
                        height="48"
                      />
                    </div>
                  </th>
                  <th className="font-display text-center tracking-wide py-3 sm:py-4 px-3 sm:px-6" style={{ color: '#ffffff', fontWeight: 700, fontSize: 'clamp(0.875rem, 2vw, 1.25rem)' }}>
                    OTHERS
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item, index) =>
                <motion.tr
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -20
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.4
                  }}
                  className="border-t"
                  style={{
                    borderColor: '#e5e7eb',
                    backgroundColor: item.highlight ? '#FFF6E2' : index % 2 === 0 ? '#ffffff' : '#f9fafb'
                  }}>
                  <td className="font-body font-semibold py-3 sm:py-4 md:py-5 px-3 sm:px-6" style={{ color: '#1a1a1a', fontSize: 'clamp(0.8125rem, 1.8vw, 1.125rem)' }}>
                    {item.feature}
                  </td>
                  <td className="font-body font-bold text-center py-3 sm:py-4 md:py-5 px-3 sm:px-6" style={{ color: '#8458B3', fontSize: 'clamp(0.8125rem, 1.8vw, 1.125rem)' }}>
                    {item.designient}
                  </td>
                  <td className="font-body font-normal text-center py-3 sm:py-4 md:py-5 px-3 sm:px-6" style={{ color: '#6a6a6a', fontSize: 'clamp(0.8125rem, 1.8vw, 1.125rem)' }}>
                    {item.others}
                  </td>
                </motion.tr>
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>);

}