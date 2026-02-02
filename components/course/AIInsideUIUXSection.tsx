'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'react-feather';

export function AIInsideUIUXSection() {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: '#FFF6E2' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05, margin: "100px 0px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-lg" style={{ backgroundColor: '#8458B3' }}>
              <Zap className="w-6 h-6" style={{ color: 'white' }} />
            </div>
            <div className="flex-1">
              <h2
                className="font-display font-bold mb-4"
                style={{
                  color: '#1a1a1a',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)'
                }}>
                Learning UI/UX in the age of AI
              </h2>
              <p
                className="font-body leading-relaxed mb-4"
                style={{
                  color: '#4a4a4a',
                  fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                  lineHeight: '1.8'
                }}>
                AI is transforming how designers work, but fundamentals remain essential. In this bootcamp, 
                you'll learn how AI can support your design process—from user research and ideation to 
                rapid prototyping and usability testing. We teach fundamentals-first, then show you how 
                AI tools can accelerate your workflow without replacing core design thinking skills.
              </p>
              <p
                className="font-body leading-relaxed"
                style={{
                  color: '#4a4a4a',
                  fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                  lineHeight: '1.8'
                }}>
                You'll graduate with a solid foundation in design principles and the confidence to use 
                AI as a powerful assistant, not a crutch.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
