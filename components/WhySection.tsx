'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, TrendingUp, Zap, Users } from 'react-feather';
import Image from 'next/image';

const values = [
 {
 icon: TrendingUp,
 title: 'Hands-on Learning',
 description:
 'Build a job-winning portfolio piece in every module. Get real critique from experienced mentors before moving to the next level.',
 },
 {
 icon: Users,
 title: 'Live Mentorship',
 description:
 'Learn from live instructors, not pre-recorded videos. Access active design critiques and direct Slack support between sessions.',
 },
 {
 icon: Zap,
 title: 'Real-World Projects',
 description:
 'Work on actual client briefs and build deployed automations. Prove your skills with real case studies, not mock projects.',
 },
 {
 icon: Heart,
 title: 'Career Support',
 description:
 'Gain structured portfolio audits, interview prep, and direct introductions to hiring partners to fast-track your design career.',
 },
];

export function WhySection() {
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
 Why Students Choose Designient
 </h2>
 <p
 className="font-body text-base md:text-lg max-w-3xl mx-auto font-normal"
 style={{
 color: 'var(--text-secondary)',
 fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
 lineHeight: '1.6',
 }}
 >
 We are intentionally a small, focused design school. Every decision we make - batch size, project format, mentor time - is optimised for one thing: the quality of what you build and where it takes you.
 </p>
 </motion.div>

 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
 {/* Left Column: Image with SEO tags */}
 <motion.div
 initial={{ opacity: 0, x: -30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, amount: 0.3 }}
 transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
 className="lg:col-span-5 relative w-full aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden border border-strong shadow-card"
 >
 <Image
 src="/workspace_uiux_design.webp"
 alt="Premium UI UX design workspace with Figma wireframe sketches, design books and laptops - Designient School of Masterminds"
 fill
 className="object-cover"
 sizes="(max-width: 1024px) 100vw, 450px"
 loading="lazy"
 />
 </motion.div>

 {/* Right Column: Values list with thin icons */}
 <div className="lg:col-span-7 space-y-8 md:space-y-10">
 {values.map((value, index) => (
 <motion.div
 key={index}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, amount: 0.3 }}
 transition={{ delay: index * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
 className="flex gap-4 sm:gap-6 items-start"
 >
 <div
 className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300"
 style={{
 backgroundColor: 'var(--bg-section-green)',
 }}
 >
 <value.icon className="w-6 h-6" style={{ color: 'var(--color-forest)' }} strokeWidth={1.5} />
 </div>
 <div>
 <h3
 className="font-display tracking-tight mb-2"
 style={{
 color: 'var(--text-primary)',
 fontWeight: 600,
 fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
 }}
 >
 {value.title}
 </h3>
 <p
 className="font-body text-base leading-relaxed font-normal"
 style={{
 color: 'var(--text-secondary)',
 fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
 lineHeight: '1.6',
 }}
 >
 {value.description}
 </p>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </div>
 </section>
 );
}
