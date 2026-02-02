'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'react-feather';

export function AIIntegratedWorkflowSection() {
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
                AI Integrated into UI/UX Workflow
              </h2>
              <p
                className="font-body leading-relaxed mb-4"
                style={{
                  color: '#4a4a4a',
                  fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                  lineHeight: '1.8'
                }}>
                Modern design workflows leverage AI as a powerful co-pilot. Throughout this course, you'll learn how AI 
                supports UX research by analyzing user data and generating insights, accelerates ideation through rapid 
                concept generation, and streamlines usability testing with automated analysis. We integrate AI tools into 
                real design workflows, showing you how to use them effectively without replacing core design thinking skills.
              </p>
              <p
                className="font-body leading-relaxed"
                style={{
                  color: '#4a4a4a',
                  fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                  lineHeight: '1.8'
                }}>
                You'll graduate knowing how to work alongside AI tools—using them to enhance your process while maintaining 
                the human-centered approach that makes great design.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
