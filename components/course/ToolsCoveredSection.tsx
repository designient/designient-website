'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Tool as ToolIcon } from 'react-feather';

interface Tool {
  name: string;
  description: string;
  category?: string; // Optional: 'Design', 'Research', 'AI', 'Prototyping', etc.
  logo: string; // URL or path to tool logo
}

interface ToolsCoveredSectionProps {
  tools: Tool[];
  title?: string;
  description?: string;
}

export function ToolsCoveredSection({
  tools,
  title = 'Tools You\'ll Master',
  description = 'Industry-standard tools used by professional designers worldwide'
}: ToolsCoveredSectionProps) {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: '#fceed1' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05, margin: "100px 0px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#8458B3' }}>
                <ToolIcon className="w-6 h-6" style={{ color: 'white' }} />
              </div>
            </div>
            <h2
              className="font-display font-bold mb-4"
              style={{
                color: '#1a1a1a',
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)'
              }}>
              {title}
            </h2>
            <p
              className="font-body text-lg max-w-2xl mx-auto leading-relaxed"
              style={{
                color: '#4a4a4a',
                lineHeight: '1.8'
              }}>
              {description}
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    <div className="w-24 h-24 rounded-lg flex items-center justify-center p-4 bg-white border-2 relative" style={{ borderColor: '#FFF6E2' }}>
                      <Image
                        src={tool.logo}
                        alt={`${tool.name} design tool logo used in UI UX design course`}
                        fill
                        className="object-contain p-2"
                        style={{
                          filter: tool.logo.includes('bolt.new') ? 'brightness(0)' : 'none'
                        }}
                        sizes="96px"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="flex-1 w-full">
                    <h3
                      className="font-display font-bold mb-2"
                      style={{
                        color: '#1a1a1a',
                        fontSize: 'clamp(1.125rem, 2vw, 1.25rem)'
                      }}>
                      {tool.name}
                    </h3>
                    {tool.category && (
                      <span
                        className="inline-block px-2 py-1 rounded text-xs font-body font-semibold mb-3"
                        style={{
                          backgroundColor: '#8458B3',
                          color: 'white'
                        }}>
                        {tool.category}
                      </span>
                    )}
                    <p
                      className="font-body leading-relaxed"
                      style={{
                        color: '#6b7280',
                        fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                        lineHeight: '1.6'
                      }}>
                      {tool.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
