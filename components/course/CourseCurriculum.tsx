'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle } from 'react-feather';

interface Module {
  title: string;
  description?: string;
  topics: string[];
  duration?: string;
}

interface CourseCurriculumProps {
  modules: Module[];
  totalHours?: string;
}

export function CourseCurriculum({ modules, totalHours }: CourseCurriculumProps) {
  const [expandedModules, setExpandedModules] = useState<number[]>([]);

  const toggleModule = (index: number) => {
    setExpandedModules((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: '#fceed1' }}>
      <div className="max-w-container mx-auto px-3 md:px-4">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16">
          <h2
            className="font-display font-bold mb-4"
            style={{
              color: '#8458B3',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)'
            }}>
            Course Curriculum
          </h2>
          {totalHours && (
            <p className="font-body text-lg" style={{ color: '#6b7280' }}>
              {totalHours} of comprehensive learning
            </p>
          )}
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-white rounded-xl overflow-hidden shadow-md transition-all"
              style={{
                borderLeft: expandedModules.includes(index) ? '4px solid #8458B3' : '4px solid transparent'
              }}>
              
              <button
                onClick={() => toggleModule(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="font-display font-bold text-lg"
                      style={{ color: '#8458B3' }}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3
                      className="font-display font-semibold"
                      style={{
                        color: '#1a1a1a',
                        fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                      }}>
                      {module.title}
                    </h3>
                  </div>
                  {module.description && (
                    <p className="font-body text-sm mt-2" style={{ color: '#6b7280' }}>
                      {module.description}
                    </p>
                  )}
                  {module.duration && (
                    <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#FFF6E2', color: '#8458B3' }}>
                      {module.duration}
                    </span>
                  )}
                </div>
                <motion.div
                  animate={{ rotate: expandedModules.includes(index) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}>
                  <ChevronDown className="w-6 h-6 flex-shrink-0" style={{ color: '#8458B3' }} />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedModules.includes(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden">
                    <div className="px-6 pb-6 pt-2 border-t" style={{ borderColor: '#e5e7eb' }}>
                      <ul className="space-y-3 mt-4">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8458B3' }} />
                            <span className="font-body" style={{ color: '#4a4a4a', fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)' }}>
                              {topic}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
