'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'react-feather';

export function PlacementAssistanceSection() {
  const assistanceItems = [
    'Resume and LinkedIn profile crafted for design roles',
    'Portfolio reviews with clear improvement actions',
    'Mock interviews focused on real UX questions',
    'Guidance on applying, referrals, and recruiter conversations'
  ];

  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: '#fceed1' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05, margin: "100px 0px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto">
          
          <div className="text-center mb-8">
            <h2
              className="font-display font-bold mb-4"
              style={{
                color: '#1a1a1a',
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)'
              }}>
              Placement support that actually prepares you
            </h2>
            <p
              className="font-body text-lg mb-6 leading-relaxed"
              style={{
                color: '#4a4a4a',
                fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                lineHeight: '1.8'
              }}>
              We don't just forward resumes.<br />
              We help you become hire-ready.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {assistanceItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8458B3' }} />
                <p
                  className="font-body leading-relaxed"
                  style={{
                    color: '#1a1a1a',
                    fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
                    lineHeight: '1.7'
                  }}>
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          <p
            className="font-body text-center leading-relaxed"
            style={{
              color: '#6b7280',
              fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
              lineHeight: '1.8',
              fontStyle: 'italic'
            }}>
            You'll know what to apply for, how to apply, and how to explain your work confidently.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
