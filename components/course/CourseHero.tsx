'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Clock, Users, Monitor, TrendingUp, Star, Award } from 'react-feather';
import Link from 'next/link';

interface CourseHeroProps {
  title: string;
  subtitle: string;
  duration: string;
  hours: string;
  format: string;
  level: string;
  rating?: string;
  students?: string;
  badge?: string;
}

export function CourseHero({
  title,
  subtitle,
  duration,
  hours,
  format,
  level,
  rating = '4.8',
  students = '350+',
  badge
}: CourseHeroProps) {
  const quickFacts = [
    { icon: Clock, label: duration },
    { icon: Users, label: hours },
    { icon: Monitor, label: format },
    { icon: TrendingUp, label: level }
  ];

  return (
    <section
      className="relative min-h-[70vh] flex items-center overflow-hidden pt-20 md:pt-24"
      style={{ backgroundColor: '#FFF6E2' }}>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full filter blur-3xl"
          style={{ backgroundColor: '#8458B3' }} />
        <div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full filter blur-3xl"
          style={{ backgroundColor: '#f2d53c' }} />
      </div>

      <div className="max-w-container mx-auto px-3 md:px-4 relative z-10 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}>
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 mb-6 text-sm" style={{ color: '#6B7280' }}>
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/courses" className="hover:underline">Courses</Link>
            <ChevronRight className="w-4 h-4" />
            <span style={{ color: '#8458B3' }}>{title}</span>
          </div>

          {/* Badge */}
          {badge && (
            <div className="flex justify-center mb-4">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ backgroundColor: '#f2d53c' }}>
                <Award className="w-4 h-4" style={{ color: '#1a1a1a' }} />
                <span className="font-body font-bold text-xs uppercase tracking-wide" style={{ color: '#1a1a1a' }}>
                  {badge}
                </span>
              </div>
            </div>
          )}

          {/* Main heading */}
          <h1
            className="font-display text-center mb-4 md:mb-6 leading-[1.1]"
            style={{
              color: '#1a1a1a',
              fontWeight: 700,
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)'
            }}>
            {title}
          </h1>

          {/* Subtitle */}
          <p
            className="text-center text-base md:text-lg max-w-3xl mx-auto mb-8 leading-[1.6]"
            style={{
              color: '#4a4a4a',
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)'
            }}>
            {subtitle}
          </p>

          {/* Rating & Students */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#f2d53c' }} />
                ))}
              </div>
              <span className="font-body font-semibold text-sm" style={{ color: '#1a1a1a' }}>
                {rating}/5
              </span>
            </div>
            <div className="h-4 w-px" style={{ backgroundColor: '#e5e7eb' }} />
            <span className="font-body text-sm" style={{ color: '#6b7280' }}>
              {students} Students Enrolled
            </span>
          </div>

          {/* Quick Facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {quickFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white shadow-sm">
                <fact.icon className="w-6 h-6" style={{ color: '#8458B3' }} />
                <span className="font-body text-xs font-medium text-center" style={{ color: '#4a4a4a' }}>
                  {fact.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
