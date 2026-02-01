'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Target } from 'react-feather';

export function SocialProofSection() {
  const stats = [
    { icon: Users, value: '500+', label: 'students mentored across design and tech' },
    { icon: Award, value: 'Small batches', label: 'for personalised feedback' },
    { icon: Target, value: 'Diverse backgrounds', label: 'and career stages' }
  ];

  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: '#fceed1' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto">
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-3" style={{ backgroundColor: '#8458B3' }}>
                    <Icon className="w-6 h-6" style={{ color: 'white' }} />
                  </div>
                  <p
                    className="font-display font-bold mb-1"
                    style={{
                      color: '#1a1a1a',
                      fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)'
                    }}>
                    {stat.value}
                  </p>
                  <p
                    className="font-body"
                    style={{
                      color: '#6b7280',
                      fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
                    }}>
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <p
            className="font-body text-center leading-relaxed"
            style={{
              color: '#6b7280',
              fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
              lineHeight: '1.8',
              fontStyle: 'italic'
            }}>
            Every batch is intentionally small — so you're never just another name on a list.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
