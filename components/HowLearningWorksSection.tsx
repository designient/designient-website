'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BookOpen, MessageCircle, Briefcase, FileText, Users } from 'react-feather';

const steps = [
 {
 icon: BookOpen,
 title: 'Learn from Scratch',
 description: 'Start with fundamentals and build your skills step by step with a structured, industry-relevant curriculum.'
 },
 {
 icon: MessageCircle,
 title: 'Live Mentor Feedback',
 description: 'Get real-time guidance and personalized critiques from industry experts who care about your growth.'
 },
 {
 icon: Briefcase,
 title: 'Real-World Projects',
 description: 'Work on actual client briefs in the Design Track or build live, production-ready AI automation workflows in the AI Track.'
 },
 {
 icon: FileText,
 title: 'Portfolio & Case Studies',
 description: 'Create a professional portfolio with detailed, structured case studies that showcase your design process and outcomes.'
 },
 {
 icon: Users,
 title: 'Placement Support',
 description: 'Gain access to structural reviews, mock interviews, and direct introductions to hiring partners to launch your career.'
 }
];

export function HowLearningWorksSection() {
 return (
 <section className="py-24 md:py-32">
 <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, amount: 0.3 }}
 transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
 className="mb-16 md:mb-24 text-center"
 >
 <h2
 className="font-display tracking-tight leading-tight mb-6"
 style={{
 color: 'var(--color-forest)',
 fontWeight: 700,
 fontSize: 'clamp(2rem, 4vw, 3.5rem)',
 }}
 >
 How Learning Works at Designient
 </h2>
 <p
 className="font-body text-base md:text-lg max-w-3xl mx-auto font-normal"
 style={{
 color: 'var(--text-secondary)',
 fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
 lineHeight: '1.6',
 }}
 >
 From mastering core design principles to landing your first professional role - we guide and support you every step of the way.
 </p>
 </motion.div>

 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
 {/* Left Column: Image with SEO tags */}
 <motion.div
 initial={{ opacity: 0, x: -30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, amount: 0.3 }}
 transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
 className="lg:col-span-5 lg:sticky lg:top-24 relative w-full aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden border border-strong shadow-card"
 >
 <Image
 src="/mentor_collaboration.webp"
 alt="UI UX design mentor collaborating with a student reviewing a high-fidelity mobile prototype on screen - Designient School of Masterminds"
 fill
 className="object-cover"
 sizes="(max-width: 1024px) 100vw, 450px"
 loading="lazy"
 />
 </motion.div>

 {/* Right Column: Timeline list with thin icons */}
 <div className="lg:col-span-7 relative pl-4 sm:pl-6">
 {/* Connecting Timeline Line */}
 <div className="absolute left-[30px] sm:left-[38px] top-6 bottom-6 w-0.5 bg-strong z-0" />

 <div className="space-y-12 relative z-10">
 {steps.map((step, index) => {
 const Icon = step.icon;
 return (
 <motion.div
 key={index}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, amount: 0.3 }}
 transition={{ delay: index * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
 className="flex gap-4 sm:gap-6 items-start"
 >
 {/* Step Number & Icon Circle */}
 <div
 className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center flex-shrink-0 border border-strong relative bg-surface shadow-sm"
 >
 <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: 'var(--color-forest)' }} strokeWidth={1.5} />
 <span
 className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
 style={{
 backgroundColor: 'var(--color-forest)',
 color: '#ffffff'
 }}
 >
 {index + 1}
 </span>
 </div>

 <div className="pt-1.5 sm:pt-3">
 <h3
 className="font-display tracking-tight mb-2"
 style={{
 color: 'var(--text-primary)',
 fontWeight: 600,
 fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
 }}
 >
 {step.title}
 </h3>
 <p
 className="font-body text-base leading-relaxed font-normal"
 style={{
 color: 'var(--text-secondary)',
 fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
 lineHeight: '1.6',
 }}
 >
 {step.description}
 </p>
 </div>
 </motion.div>
 );
 })}
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}

