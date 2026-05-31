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
    <section id="comparison" className="py-24 md:py-32" style={{ backgroundColor: 'var(--bg-card)' }}>
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

          <h2 className="font-display tracking-wide leading-tight mb-6 text-center" style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            WHY DESIGNIENT?
          </h2>
          <p
            className="font-body text-base md:text-lg max-w-3xl mx-auto font-normal text-center"
            style={{
              color: 'var(--text-secondary)',
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
          <div className="rounded-2xl border-4 overflow-hidden shadow-xl" style={{ borderColor: 'var(--color-primary)', backgroundColor: 'var(--bg-card)' }}>
            <table className="w-full">
              <thead>
                <tr className="surface-on-accent" style={{ backgroundColor: 'var(--color-primary)' }}>
                  <th className="font-display text-left tracking-wide py-3 sm:py-4 px-3 sm:px-6" style={{ color: 'var(--text-on-accent)', fontWeight: 700, fontSize: 'clamp(0.875rem, 2vw, 1.25rem)' }}>
                    FEATURE
                  </th>
                  <th className="text-center py-3 sm:py-4 px-3 sm:px-6">
                    <div className="flex items-center justify-center">
                      <img
                        src="/designient-logo.svg"
                        alt="Designient School of Masterminds UI UX design training logo"
                        className="h-8 sm:h-10 md:h-12 w-auto object-contain logo-on-accent"
                        width="160"
                        height="56"
                      />
                    </div>
                  </th>
                  <th className="font-display text-center tracking-wide py-3 sm:py-4 px-3 sm:px-6" style={{ color: 'var(--text-on-accent)', fontWeight: 700, fontSize: 'clamp(0.875rem, 2vw, 1.25rem)' }}>
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
                    borderColor: 'var(--border-default)',
                    backgroundColor: item.highlight ? 'var(--bg-warm)' : index % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-subtle)'
                  }}>
                  <td className="font-body font-semibold py-3 sm:py-4 md:py-5 px-3 sm:px-6" style={{ color: 'var(--text-primary)', fontSize: 'clamp(0.8125rem, 1.8vw, 1.125rem)' }}>
                    {item.feature}
                  </td>
                  <td className="font-body font-bold text-center py-3 sm:py-4 md:py-5 px-3 sm:px-6" style={{ color: 'var(--color-primary)', fontSize: 'clamp(0.8125rem, 1.8vw, 1.125rem)' }}>
                    {item.designient}
                  </td>
                  <td className="font-body font-normal text-center py-3 sm:py-4 md:py-5 px-3 sm:px-6" style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.8125rem, 1.8vw, 1.125rem)' }}>
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