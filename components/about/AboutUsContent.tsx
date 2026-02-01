'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Target, Heart, Globe, Award, Calendar, ArrowRight, Briefcase, Users, BookOpen, ChevronRight, ChevronDown, User, TrendingUp, Zap, BarChart, HelpCircle, Camera, UserCheck } from 'react-feather';
import Link from 'next/link';
import Image from 'next/image';
import { StructuredData } from '../StructuredData';

interface AboutUsContentProps {
  aboutData: {
    story: { title: string; content: string };
    whyChooseUs: { title: string; items: string[] };
    approach: { title: string; content: string };
    careerSupport: { title: string; content: string };
    mission: { title: string; content: string };
    visionValues: { title: string; vision: string; values: string[] };
    journey: { title: string; milestones: { year: string; event: string }[] };
  };
}

export function AboutUsContent({ aboutData }: AboutUsContentProps) {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] flex items-center overflow-hidden pt-16 md:pt-20" 
        style={{ backgroundColor: '#FFF6E2' }}
        aria-labelledby="about-hero-heading">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full filter blur-3xl"
            style={{ backgroundColor: '#8458B3' }} 
            aria-hidden="true" />
          <div
            className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full filter blur-3xl"
            style={{ backgroundColor: '#f2d53c' }} 
            aria-hidden="true" />
        </div>
        
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}>
            
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 mb-6 text-sm" style={{ color: '#6B7280' }}>
              <Link href="/" className="hover:underline font-body">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span style={{ color: '#8458B3' }} className="font-body">About Us</span>
            </div>

            {/* Main heading */}
            <h1
              id="about-hero-heading"
              className="font-display text-center mb-4 md:mb-6 leading-[1.1]"
              style={{
                color: '#1a1a1a',
                fontWeight: 700,
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)'
              }}>
              About Designient School of Masterminds
            </h1>

            {/* Subtitle */}
            <p
              className="text-center text-base md:text-lg max-w-5xl mx-auto leading-[1.6] md:whitespace-nowrap"
              style={{
                color: '#4a4a4a',
                fontSize: 'clamp(1.125rem, 2vw, 1.375rem)'
              }}>
              Redefining UI/UX education for creative minds ready to turn passion into profession.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section 
        className="py-24 md:py-32" 
        style={{ backgroundColor: 'white' }}
        aria-labelledby="our-story-heading">
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-4xl mx-auto">
            <h2
              id="our-story-heading"
              className="font-display font-bold mb-6 tracking-wide"
              style={{
                color: '#8458B3',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 700
              }}>
              {aboutData.story.title}
            </h2>
            <p
              className="font-body leading-relaxed"
              style={{
                color: '#4a4a4a',
                fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                lineHeight: '1.8'
              }}>
              {aboutData.story.content}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Founder & Mentors */}
      <section 
        className="py-24 md:py-32" 
        style={{ backgroundColor: '#FFF6E2' }}
        aria-labelledby="founder-mentors-heading">
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6 mb-8">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ 
                  backgroundColor: '#f2d53c',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                }}>
                <User 
                  className="w-8 h-8" 
                  style={{ 
                    color: '#8458B3',
                    strokeWidth: 2.5
                  }} />
              </div>
              <div className="flex-1">
                <h2
                  id="founder-mentors-heading"
                  className="font-display font-bold mb-6 tracking-wide"
                  style={{
                    color: '#8458B3',
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    fontWeight: 700
                  }}>
                  Our Founder & Mentors
                </h2>
                <div className="space-y-4">
                  <p
                    className="font-body leading-relaxed"
                    style={{
                      color: '#4a4a4a',
                      fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                      lineHeight: '1.8'
                    }}>
                    Designient was founded by designers who have spent years working on real products, real users, and real business problems.
                  </p>
                  <p
                    className="font-body leading-relaxed"
                    style={{
                      color: '#4a4a4a',
                      fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                      lineHeight: '1.8'
                    }}>
                    With over a decade of combined experience in UI/UX, product design, and mentoring, our leadership team has guided hundreds of learners across different stages of their careers — from complete beginners to working professionals.
                  </p>
                  <p
                    className="font-body leading-relaxed font-semibold"
                    style={{
                      color: '#1a1a1a',
                      fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                      lineHeight: '1.8'
                    }}>
                    We built Designient to be the school we wished existed when we were starting out.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Details */}
      <section 
        className="py-24 md:py-32" 
        style={{ backgroundColor: 'white' }}
        aria-labelledby="team-details-heading">
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <div className="flex items-center justify-center gap-6 mb-8">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ 
                    backgroundColor: '#f2d53c',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                  }}>
                  <UserCheck 
                    className="w-8 h-8" 
                    style={{ 
                      color: '#8458B3',
                      strokeWidth: 2.5
                    }} />
                </div>
                <h2
                  id="team-details-heading"
                  className="font-display font-bold tracking-wide leading-tight"
                  style={{
                    color: '#8458B3',
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    fontWeight: 700
                  }}>
                  Our Team
                </h2>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Rajesh Kumar',
                  title: 'Founder & Lead Mentor',
                  role: 'UI/UX Design Expert',
                  experience: '15+ years in product design',
                  description: 'Passionate about teaching design thinking and helping students build real-world portfolios.'
                },
                {
                  name: 'Priya Sharma',
                  title: 'Senior Mentor',
                  role: 'UX Research Specialist',
                  experience: '12+ years in user research',
                  description: 'Expert in user-centered design methodologies and design research practices.'
                },
                {
                  name: 'Amit Patel',
                  title: 'Mentor',
                  role: 'Product Designer',
                  experience: '10+ years in digital products',
                  description: 'Specializes in design systems, prototyping, and bringing ideas to life.'
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="bg-[#FFF6E2] rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-24 h-24 rounded-full bg-[#8458B3] mx-auto mb-4 flex items-center justify-center">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <h3
                    className="font-display font-bold mb-2"
                    style={{
                      color: '#1a1a1a',
                      fontSize: 'clamp(1.125rem, 2vw, 1.375rem)'
                    }}>
                    {member.name}
                  </h3>
                  <p
                    className="font-body font-semibold mb-1"
                    style={{
                      color: '#8458B3',
                      fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)'
                    }}>
                    {member.title}
                  </p>
                  <p
                    className="font-body font-semibold mb-2"
                    style={{
                      color: '#6b7280',
                      fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
                    }}>
                    {member.role}
                  </p>
                  <p
                    className="font-body text-sm mb-3"
                    style={{
                      color: '#6b7280',
                      fontSize: 'clamp(0.8125rem, 1.5vw, 0.875rem)'
                    }}>
                    {member.experience}
                  </p>
                  <p
                    className="font-body leading-relaxed text-sm"
                    style={{
                      color: '#4a4a4a',
                      fontSize: 'clamp(0.8125rem, 1.5vw, 0.875rem)',
                      lineHeight: '1.6'
                    }}>
                    {member.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section 
        className="py-24 md:py-32" 
        style={{ backgroundColor: '#FFF6E2' }}
        aria-labelledby="mission-heading">
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6 mb-8">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ 
                  backgroundColor: '#f2d53c',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                }}>
                <Target 
                  className="w-8 h-8" 
                  style={{ 
                    color: '#8458B3',
                    strokeWidth: 2.5
                  }} />
              </div>
              <div className="flex-1">
                <h2
                  id="mission-heading"
                  className="font-display font-bold mb-6 tracking-wide"
                  style={{
                    color: '#8458B3',
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    fontWeight: 700
                  }}>
                  {aboutData.mission.title}
                </h2>
                <p
                  className="font-body leading-relaxed"
                  style={{
                    color: '#4a4a4a',
                    fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                    lineHeight: '1.8'
                  }}>
                  {aboutData.mission.content}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Values */}
      <section 
        className="py-24 md:py-32" 
        style={{ backgroundColor: 'white' }}
        aria-labelledby="vision-values-heading">
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6 mb-12">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ 
                  backgroundColor: '#f2d53c',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                }}>
                <Heart 
                  className="w-8 h-8" 
                  style={{ 
                    color: '#8458B3',
                    strokeWidth: 2.5
                  }} />
              </div>
              <div className="flex-1">
                <h2
                  id="vision-values-heading"
                  className="font-display font-bold mb-6 tracking-wide"
                  style={{
                    color: '#8458B3',
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    fontWeight: 700
                  }}>
                  {aboutData.visionValues.title}
                </h2>
                <p
                  className="font-body mb-8 leading-relaxed"
                  style={{
                    color: '#4a4a4a',
                    fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                    lineHeight: '1.8'
                  }}>
                  {aboutData.visionValues.vision}
                </p>
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  {aboutData.visionValues.values.map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="flex items-center gap-4 p-5 bg-[#FFF6E2] rounded-lg border-l-4"
                      style={{ borderLeftColor: '#8458B3' }}>
                      <div 
                        className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{ 
                          backgroundColor: '#f2d53c',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                        }}>
                        <Globe 
                          className="w-6 h-6" 
                          style={{ 
                            color: '#8458B3',
                            strokeWidth: 2.5
                          }} />
                      </div>
                      <span
                        className="font-body font-semibold"
                        style={{
                          color: '#1a1a1a',
                          fontSize: 'clamp(1rem, 1.5vw, 1.125rem)'
                        }}>
                        {value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Exist For */}
      <section 
        className="py-24 md:py-32" 
        style={{ backgroundColor: '#fceed1' }}
        aria-labelledby="who-we-exist-heading">
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h2
                id="who-we-exist-heading"
                className="font-display font-bold mb-8 tracking-wide leading-tight"
                style={{
                  color: '#8458B3',
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 700
                }}>
                Who We Exist For
              </h2>
            </div>
            <div className="space-y-6">
              <p
                className="font-body leading-relaxed text-center"
                style={{
                  color: '#4a4a4a',
                  fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                  lineHeight: '1.8'
                }}>
                Designient is built for:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Beginners starting their journey in UI/UX design',
                  'Career switchers moving from non-design backgrounds',
                  'Professionals looking to upskill and stay relevant',
                  'Creative thinkers who want structured, mentor-led learning'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3 p-4 bg-white rounded-lg">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8458B3' }} />
                    <span
                      className="font-body leading-relaxed"
                      style={{
                        color: '#1a1a1a',
                        fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
                        lineHeight: '1.7'
                      }}>
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
              <p
                className="font-body leading-relaxed text-center mt-6"
                style={{
                  color: '#4a4a4a',
                  fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                  lineHeight: '1.8'
                }}>
                If you care about understanding users, solving meaningful problems, and building a long-term design career — you belong here.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section 
        className="py-24 md:py-32" 
        style={{ backgroundColor: '#fceed1' }}
        aria-labelledby="why-choose-us-heading">
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-4xl mx-auto">
            <div className="mb-16 md:mb-20 text-center">
              <h2
                id="why-choose-us-heading"
                className="font-display font-bold mb-6 tracking-wide leading-tight"
                style={{
                  color: '#8458B3',
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 700
                }}>
                {aboutData.whyChooseUs.title}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {aboutData.whyChooseUs.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ 
                      backgroundColor: '#f2d53c',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                    }}>
                    <CheckCircle 
                      className="w-8 h-8" 
                      style={{ 
                        color: '#8458B3',
                        strokeWidth: 2.5
                      }} />
                  </div>
                  <p
                    className="font-body leading-relaxed pt-1"
                    style={{
                      color: '#1a1a1a',
                      fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                      lineHeight: '1.7'
                    }}>
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Makes Designient Different */}
      <section 
        className="py-24 md:py-32" 
        style={{ backgroundColor: 'white' }}
        aria-labelledby="what-makes-different-heading">
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6 mb-8">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ 
                  backgroundColor: '#f2d53c',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                }}>
                <TrendingUp 
                  className="w-8 h-8" 
                  style={{ 
                    color: '#8458B3',
                    strokeWidth: 2.5
                  }} />
              </div>
              <div className="flex-1">
                <h2
                  id="what-makes-different-heading"
                  className="font-display font-bold mb-6 tracking-wide"
                  style={{
                    color: '#8458B3',
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    fontWeight: 700
                  }}>
                  What Makes Designient Different
                </h2>
                <div className="space-y-6">
                  <p
                    className="font-body leading-relaxed font-semibold"
                    style={{
                      color: '#1a1a1a',
                      fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                      lineHeight: '1.8'
                    }}>
                    We don't teach design as tools or trends.
                  </p>
                  <p
                    className="font-body leading-relaxed font-semibold"
                    style={{
                      color: '#1a1a1a',
                      fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                      lineHeight: '1.8'
                    }}>
                    We teach design as a way of thinking.
                  </p>
                  <p
                    className="font-body leading-relaxed"
                    style={{
                      color: '#4a4a4a',
                      fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                      lineHeight: '1.8'
                    }}>
                    Every concept is tied to:
                  </p>
                  <ul className="space-y-3 ml-4">
                    {[
                      'Real-world problems',
                      'Industry expectations',
                      'Recruiter-ready outcomes'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="font-body text-[#8458B3] mt-1">•</span>
                        <span
                          className="font-body leading-relaxed"
                          style={{
                            color: '#4a4a4a',
                            fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                            lineHeight: '1.8'
                          }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 space-y-2">
                    <p
                      className="font-body leading-relaxed"
                      style={{
                        color: '#4a4a4a',
                        fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                        lineHeight: '1.8'
                      }}>
                      You don't just learn <em>what</em> to design.
                    </p>
                    <p
                      className="font-body leading-relaxed"
                      style={{
                        color: '#4a4a4a',
                        fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                        lineHeight: '1.8'
                      }}>
                      You learn <em>why</em> it works and <em>how</em> to explain it confidently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section 
        className="py-24 md:py-32" 
        style={{ backgroundColor: 'white' }}
        aria-labelledby="our-approach-heading">
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6 mb-8">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ 
                  backgroundColor: '#f2d53c',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                }}>
                <BookOpen 
                  className="w-8 h-8" 
                  style={{ 
                    color: '#8458B3',
                    strokeWidth: 2.5
                  }} />
              </div>
              <div className="flex-1">
                <h2
                  id="our-approach-heading"
                  className="font-display font-bold mb-6 tracking-wide"
                  style={{
                    color: '#8458B3',
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    fontWeight: 700
                  }}>
                  {aboutData.approach.title}
                </h2>
                <p
                  className="font-body leading-relaxed"
                  style={{
                    color: '#4a4a4a',
                    fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                    lineHeight: '1.8'
                  }}>
                  {aboutData.approach.content}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Teaching Philosophy */}
      <section 
        className="py-24 md:py-32" 
        style={{ backgroundColor: '#FFF6E2' }}
        aria-labelledby="teaching-philosophy-heading">
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6 mb-8">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ 
                  backgroundColor: '#f2d53c',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                }}>
                <Zap 
                  className="w-8 h-8" 
                  style={{ 
                    color: '#8458B3',
                    strokeWidth: 2.5
                  }} />
              </div>
              <div className="flex-1">
                <h2
                  id="teaching-philosophy-heading"
                  className="font-display font-bold mb-6 tracking-wide"
                  style={{
                    color: '#8458B3',
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    fontWeight: 700
                  }}>
                  Our Teaching Philosophy
                </h2>
                <div className="space-y-6">
                  <p
                    className="font-body leading-relaxed"
                    style={{
                      color: '#4a4a4a',
                      fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                      lineHeight: '1.8'
                    }}>
                    We believe the best way to learn UI/UX is by doing, reflecting, and improving.
                  </p>
                  <p
                    className="font-body leading-relaxed"
                    style={{
                      color: '#4a4a4a',
                      fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                      lineHeight: '1.8'
                    }}>
                    That's why our learning model focuses on:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'Practice over passive watching',
                      'Feedback over perfection',
                      'Clarity over complexity',
                      'Depth over speed'
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        className="flex items-start gap-3 p-4 bg-white rounded-lg">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8458B3' }} />
                        <span
                          className="font-body leading-relaxed"
                          style={{
                            color: '#1a1a1a',
                            fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
                            lineHeight: '1.7'
                          }}>
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  <p
                    className="font-body leading-relaxed font-semibold pt-2"
                    style={{
                      color: '#1a1a1a',
                      fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                      lineHeight: '1.8'
                    }}>
                    Progress is measured by understanding, not completion.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Class Photos Gallery */}
      <section 
        className="py-24 md:py-32" 
        style={{ backgroundColor: 'white' }}
        aria-labelledby="gallery-heading">
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <div className="flex items-center justify-center gap-6 mb-8">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ 
                    backgroundColor: '#f2d53c',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                  }}>
                  <Camera 
                    className="w-8 h-8" 
                    style={{ 
                      color: '#8458B3',
                      strokeWidth: 2.5
                    }} />
                </div>
                <h2
                  id="gallery-heading"
                  className="font-display font-bold tracking-wide leading-tight"
                  style={{
                    color: '#8458B3',
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    fontWeight: 700
                  }}>
                  Our Learning Culture
                </h2>
              </div>
              <p
                className="font-body leading-relaxed max-w-3xl mx-auto"
                style={{
                  color: '#4a4a4a',
                  fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                  lineHeight: '1.8'
                }}>
                See our students in action during live mentor-led sessions, collaborative workshops, and hands-on project work.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { path: '/images/class-photos/ui-ux-design-mentor-led-session-1.webp', alt: 'mentor reviewing student UI UX portfolio during live design session' },
                { path: '/images/class-photos/ui-ux-design-mentor-led-session-2.webp', alt: 'students working on wireframes during UI UX design course workshop' },
                { path: '/images/class-photos/ui-ux-design-mentor-led-session-3.webp', alt: 'collaborative design session with mentor feedback on user interface' },
                { path: '/images/class-photos/ui-ux-design-mentor-led-session-4.webp', alt: 'UI UX design students presenting portfolio projects to mentor' },
                { path: '/images/class-photos/ui-ux-design-mentor-led-session-5.webp', alt: 'hands-on prototyping workshop during UI UX design training' },
                { path: '/images/class-photos/ui-ux-design-mentor-led-session-6.webp', alt: 'design thinking session with students learning user research methods' },
                { path: '/images/class-photos/ui-ux-design-mentor-led-session-7.webp', alt: 'mentor providing feedback on student UI design projects' },
                { path: '/images/class-photos/ui-ux-design-mentor-led-session-8.webp', alt: 'small batch UI UX design course students collaborating on projects' }
              ].map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="aspect-square rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="relative w-full h-full">
                    <Image
                      src={image.path}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 400px"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Designient by the Numbers */}
      <section 
        className="py-24 md:py-32" 
        style={{ backgroundColor: '#fceed1' }}
        aria-labelledby="by-numbers-heading">
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h2
                id="by-numbers-heading"
                className="font-display font-bold mb-8 tracking-wide leading-tight"
                style={{
                  color: '#8458B3',
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 700
                }}>
                Designient by the Numbers
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                '500+ learners mentored',
                'Small-batch, mentor-led learning',
                'Multiple portfolio-ready projects per student',
                'Learners placed across startups, agencies, and product teams'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ 
                      backgroundColor: '#f2d53c',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                    }}>
                    <BarChart 
                      className="w-6 h-6" 
                      style={{ 
                        color: '#8458B3',
                        strokeWidth: 2.5
                      }} />
                  </div>
                  <p
                    className="font-body leading-relaxed pt-1"
                    style={{
                      color: '#1a1a1a',
                      fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                      lineHeight: '1.7'
                    }}>
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Career Support */}
      <section 
        className="py-24 md:py-32" 
        style={{ backgroundColor: '#FFF6E2' }}
        aria-labelledby="career-support-heading">
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6 mb-8">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ 
                  backgroundColor: '#f2d53c',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                }}>
                <Briefcase 
                  className="w-8 h-8" 
                  style={{ 
                    color: '#8458B3',
                    strokeWidth: 2.5
                  }} />
              </div>
              <div className="flex-1">
                <h2
                  id="career-support-heading"
                  className="font-display font-bold mb-6 tracking-wide"
                  style={{
                    color: '#8458B3',
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    fontWeight: 700
                  }}>
                  {aboutData.careerSupport.title}
                </h2>
                <p
                  className="font-body leading-relaxed"
                  style={{
                    color: '#4a4a4a',
                    fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                    lineHeight: '1.8'
                  }}>
                  {aboutData.careerSupport.content}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Journey */}
      <section 
        className="py-24 md:py-32" 
        style={{ backgroundColor: 'white' }}
        aria-labelledby="our-journey-heading">
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-7xl mx-auto">
            <div className="mb-16 md:mb-20 text-center">
              <div className="flex items-center justify-center gap-6 mb-8">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ 
                    backgroundColor: '#f2d53c',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                  }}>
                  <Calendar 
                    className="w-8 h-8" 
                    style={{ 
                      color: '#8458B3',
                      strokeWidth: 2.5
                    }} />
                </div>
                <h2
                  id="our-journey-heading"
                  className="font-display font-bold tracking-wide"
                  style={{
                    color: '#8458B3',
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    fontWeight: 700
                  }}>
                  {aboutData.journey.title}
                </h2>
              </div>
            </div>

            {/* Horizontal Timeline */}
            <div className="relative">
              {/* Horizontal Timeline Line */}
              <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5" style={{ backgroundColor: '#E5E7EB' }}>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute top-0 left-0 bottom-0 origin-left w-full"
                  style={{ backgroundColor: '#8458B3' }}
                />
              </div>

              {/* Timeline Items - Horizontal Flow */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6 lg:gap-2 relative">
                {aboutData.journey.milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    className="relative flex flex-col items-center">
                    
                    {/* Timeline Node with Year */}
                    <div className="relative z-10 mb-4">
                      <div 
                        className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-lg mx-auto"
                        style={{ backgroundColor: '#8458B3' }}>
                        <span 
                          className="font-display font-bold text-white text-center"
                          style={{ 
                            fontSize: 'clamp(0.875rem, 1.2vw, 1.125rem)',
                            lineHeight: '1'
                          }}>
                          {milestone.year}
                        </span>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="w-full mt-2">
                      <div 
                        className="p-4 md:p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center h-full"
                        style={{ 
                          backgroundColor: '#FFF6E2',
                          borderTop: '4px solid #8458B3'
                        }}>
                        <h3
                          className="font-display font-bold mb-2 tracking-wide"
                          style={{
                            color: '#8458B3',
                            fontSize: 'clamp(0.8125rem, 1.1vw, 0.9375rem)'
                          }}>
                          {milestone.event}
                        </h3>
                        <p
                          className="font-body leading-relaxed text-xs"
                          style={{
                            color: '#4a4a4a',
                            lineHeight: '1.5'
                          }}>
                          {milestone.year === '2016' && 'Designient School of Masterminds was founded with a vision to transform UI/UX design education in India.'}
                          {milestone.year === '2018' && 'We partnered with Adobe to offer certified design courses, bringing industry-standard training to our students.'}
                          {milestone.year === '2020' && 'Launched our online learning platform, making quality design education accessible to students globally.'}
                          {milestone.year === '2021' && 'Celebrated a major milestone with 150+ students successfully placed in top design roles across the industry.'}
                          {milestone.year === '2023' && 'Expanded our physical presence with a new state-of-the-art office in Hyderabad, serving students in South India.'}
                          {milestone.year === '2024' && 'Integrated Generative AI tools into our curriculum, preparing students for the future of design.'}
                          {milestone.year === '2025' && 'Opened our Pune branch, expanding our reach to serve more students in Western India with the same quality mentorship.'}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why UI/UX Design Matters Today */}
      <section 
        className="py-24 md:py-32" 
        style={{ backgroundColor: 'white' }}
        aria-labelledby="why-uiux-matters-heading">
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h2
                id="why-uiux-matters-heading"
                className="font-display font-bold mb-6 tracking-wide leading-tight"
                style={{
                  color: '#8458B3',
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 700
                }}>
                Why UI/UX Design Matters Today
              </h2>
            </div>
            <div className="space-y-6">
              <p
                className="font-body leading-relaxed"
                style={{
                  color: '#4a4a4a',
                  fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                  lineHeight: '1.8'
                }}>
                As digital products grow more complex, businesses need designers who can think clearly, empathise deeply, and design responsibly.
              </p>
              <p
                className="font-body leading-relaxed font-semibold"
                style={{
                  color: '#1a1a1a',
                  fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                  lineHeight: '1.8'
                }}>
                UI/UX design is no longer optional.
              </p>
              <p
                className="font-body leading-relaxed"
                style={{
                  color: '#4a4a4a',
                  fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                  lineHeight: '1.8'
                }}>
                It's a critical skill across industries — from startups to global enterprises.
              </p>
              <p
                className="font-body leading-relaxed font-semibold"
                style={{
                  color: '#1a1a1a',
                  fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                  lineHeight: '1.8'
                }}>
                At Designient, we prepare you for this reality.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-24 md:py-32" 
        style={{ backgroundColor: '#8458B3' }}
        aria-labelledby="cta-heading">
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-3xl mx-auto text-center text-white">
            <h2
              id="cta-heading"
              className="font-display font-bold mb-6 tracking-wide leading-tight"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 700
              }}>
              Ready to begin your UI/UX journey with us?
            </h2>
            <p
              className="font-body mb-8 max-w-2xl mx-auto leading-relaxed"
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                lineHeight: '1.7',
                color: 'rgba(255, 255, 255, 0.9)'
              }}>
              Join hundreds of students who have transformed their careers with our hands-on, mentor-led approach to UI/UX design education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 font-body font-bold px-8 py-4 rounded-full transition-transform hover:scale-105 min-h-[48px] shadow-lg"
                style={{
                  backgroundColor: '#f2d53c',
                  color: '#1a1a1a',
                  fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)'
                }}>
                Contact us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 font-body font-semibold px-8 py-4 rounded-full border-2 transition-colors hover:bg-white/10 min-h-[48px]"
                style={{
                  borderColor: 'white',
                  color: 'white',
                  fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)'
                }}>
                View Courses
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Page FAQs */}
      <AboutPageFAQ />
    </>
  );
}

function AboutPageFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Is Designient suitable for beginners?',
      answer: 'Yes. Our programs are beginner-friendly and designed to build strong foundations from scratch.'
    },
    {
      question: 'Does Designient provide placement assistance?',
      answer: 'Yes. We support learners with portfolio reviews, interview preparation, and career guidance.'
    },
    {
      question: 'Is Designient an online or offline institute?',
      answer: 'We offer flexible learning formats depending on the program and batch.'
    },
    {
      question: 'Where is Designient located?',
      answer: 'Designient is based in India and serves learners globally.'
    }
  ];

  // FAQ Schema for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: '#FFF6E2' }}>
      <StructuredData data={faqSchema} />
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ 
                backgroundColor: '#f2d53c',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
              }}>
              <HelpCircle 
                className="w-8 h-8" 
                style={{ 
                  color: '#8458B3',
                  strokeWidth: 2.5
                }} />
            </div>
            <h2
              className="font-display tracking-wide leading-tight"
              style={{
                color: '#8458B3',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)'
              }}>
              Frequently Asked Questions
            </h2>
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="border rounded-lg overflow-hidden bg-white"
              style={{ borderColor: '#e5e7eb' }}
              itemScope
              itemType="https://schema.org/Question">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left min-h-[44px] hover:bg-gray-50 transition-colors"
                style={{
                  backgroundColor: openIndex === index ? '#FFF6E2' : 'white'
                }}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}>
                <h3
                  className="font-display font-semibold pr-8 flex-1"
                  style={{
                    color: '#1a1a1a',
                    fontSize: 'clamp(0.9375rem, 2vw, 1.125rem)'
                  }}
                  itemProp="name">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}>
                  <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: '#8458B3' }} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    id={`faq-answer-${index}`}
                    itemScope
                    itemType="https://schema.org/Answer">
                    <div className="px-6 py-4 border-t" style={{ borderColor: '#e5e7eb' }}>
                      <p
                        className="font-body leading-relaxed"
                        style={{
                          color: '#4a4a4a',
                          fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
                          lineHeight: '1.7'
                        }}
                        itemProp="text">
                        {faq.answer}
                      </p>
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
