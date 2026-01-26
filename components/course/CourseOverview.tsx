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
    <section className="py-24 md:py-32" style={{ backgroundColor: 'white' }}>
      <div className="max-w-container mx-auto px-3 md:px-4">
        
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16">
          <p
            className="font-body text-center leading-relaxed"
            style={{
              color: '#4a4a4a',
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
            className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#f2d53c' }}>
                <Target className="w-6 h-6" style={{ color: '#1a1a1a' }} />
              </div>
              <h2
                className="font-display font-bold"
                style={{
                  color: '#8458B3',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)'
                }}>
                Key Features
              </h2>
            </div>
            <ul className="space-y-4">
              {keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8458B3' }} />
                  <span className="font-body" style={{ color: '#4a4a4a', fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)' }}>
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
            className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#f2d53c' }}>
                <Users className="w-6 h-6" style={{ color: '#1a1a1a' }} />
              </div>
              <h2
                className="font-display font-bold"
                style={{
                  color: '#8458B3',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)'
                }}>
                What You'll Achieve
              </h2>
            </div>
            <ul className="space-y-4">
              {learningOutcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8458B3' }} />
                  <span className="font-body" style={{ color: '#4a4a4a', fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)' }}>
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
            className="mt-12 bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#f2d53c' }}>
                <Briefcase className="w-6 h-6" style={{ color: '#1a1a1a' }} />
              </div>
              <h2
                className="font-display font-bold"
                style={{
                  color: '#8458B3',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)'
                }}>
                Career Opportunities
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {careerPaths.map((path, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg" style={{ backgroundColor: '#FFF6E2' }}>
                  <Briefcase className="w-5 h-5 flex-shrink-0" style={{ color: '#8458B3' }} />
                  <span className="font-body font-medium" style={{ color: '#1a1a1a' }}>
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
