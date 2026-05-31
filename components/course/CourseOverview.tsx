'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Users, Briefcase } from 'react-feather';

interface CourseOverviewProps {
  description: string;
  keyFeatures: string[];
  learningOutcomes: string[];
  careerPaths?: string[];
}

export function CourseOverview({
  description,
  keyFeatures,
  learningOutcomes,
  careerPaths
}: CourseOverviewProps) {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--bg-warm)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05, margin: "100px 0px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16">
          <p
            className="font-body text-center leading-relaxed"
            style={{
              color: 'var(--text-secondary)',
              fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
              lineHeight: '1.8'
            }}>
            {description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg accent-icon-box" style={{ backgroundColor: 'var(--color-highlight)' }}>
                <Target className="w-6 h-6" style={{ color: 'var(--text-on-accent)' }} />
              </div>
              <h2
                className="font-display font-bold"
                style={{
                  color: 'var(--text-primary)',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)'
                }}>
                Key Features
              </h2>
            </div>
            <ul className="space-y-4">
              {keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
                  <span className="font-body" style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)' }}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Learning Outcomes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg accent-icon-box" style={{ backgroundColor: 'var(--color-highlight)' }}>
                <Users className="w-6 h-6" style={{ color: 'var(--text-on-accent)' }} />
              </div>
              <h2
                className="font-display font-bold"
                style={{
                  color: 'var(--text-primary)',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)'
                }}>
                What You'll Achieve
              </h2>
            </div>
            <ul className="space-y-4">
              {learningOutcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
                  <span className="font-body" style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)' }}>
                    {outcome}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Career Paths */}
        {careerPaths && careerPaths.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 bg-card p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg accent-icon-box" style={{ backgroundColor: 'var(--color-highlight)' }}>
                <Briefcase className="w-6 h-6" style={{ color: 'var(--text-on-accent)' }} />
              </div>
              <h2
                className="font-display font-bold"
                style={{
                  color: 'var(--text-primary)',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)'
                }}>
                Career Opportunities
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {careerPaths.map((path, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg" style={{ backgroundColor: 'var(--bg-warm)' }}>
                  <Briefcase className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                  <span className="font-body font-medium" style={{ color: 'var(--color-primary)' }}>
                    {path}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
