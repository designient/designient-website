'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users } from 'react-feather';
import Link from 'next/link';
import Image from 'next/image';
import { StructuredData } from './StructuredData';
import { homepageAiTrackCards, homepageDesignTrackCards, type NavCourse } from '../data/homepageCatalog';
import { useCurrency } from '../contexts/CurrencyContext';

const courseImages: Record<string, string> = {
 'ui-ux-design-bootcamp': '/courses_preview_bootcamp.webp',
 'ui-ux-design-pro': '/courses_preview_pro.webp',
 'ui-ux-design-master': '/courses_preview_master.webp',
 'ai-automation-accelerator': '/courses_preview_ai.webp',
 'ai-product-design-course': '/courses_preview_ai.webp',
};

const courseAltTags: Record<string, string> = {
 'ui-ux-design-bootcamp': 'Vibrant UI/UX Design Bootcamp wireframe concept - Designient School of Masterminds',
 'ui-ux-design-pro': 'Professional Mobile UI app design workspace mockups - Designient School of Masterminds',
 'ui-ux-design-master': 'Advanced UI UX Master Design System component library mockups - Designient School of Masterminds',
 'ai-automation-accelerator': 'AI Automation Accelerator node flow connection mockups - Designient School of Masterminds',
 'ai-product-design-course': 'AI Product Design Course wireframes and interface logic mockups - Designient School of Masterminds',
};

function CourseCardGrid({ courses }: { courses: NavCourse[] }) {
 const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
 const { getCoursePrice, isLoading } = useCurrency();

 return (
 <div className={`grid grid-cols-1 gap-6 ${courses.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
 {courses.map((course, index) => {
 const priceFrom = isLoading ? '…' : getCoursePrice(course.courseSlug).price;

 return (
 <Link
 key={course.path}
 href={course.path}
 onMouseEnter={() => setHoveredIndex(index)}
 onMouseLeave={() => setHoveredIndex(null)}
 className="group relative cursor-pointer block h-full"
 >
 <div
 className="relative h-full flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-card-hover"
 style={{
 backgroundColor: 'var(--bg-card)',
 borderColor: hoveredIndex === index ? 'var(--color-purple)' : 'var(--border-default)',
 }}
 >
 {/* Top Visual Header with SEO tags */}
 <div className="relative w-full aspect-video border-b border-strong">
 <Image
 src={courseImages[course.courseSlug] || '/courses_preview_bootcamp.webp'}
 alt={courseAltTags[course.courseSlug] || 'Designient Course Preview'}
 fill
 className="object-cover group-hover:scale-102 transition-transform duration-500"
 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
 loading="lazy"
 />
 
 {/* Badges overlay */}
 <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
 <span
 className="font-body inline-block px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider shadow-sm"
 style={{ backgroundColor: 'var(--color-forest)', color: '#ffffff' }}
 >
 {course.level}
 </span>
 {course.badge && (
 <span
 className="font-body inline-block px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider shadow-sm"
 style={{ backgroundColor: 'var(--color-purple)', color: '#ffffff' }}
 >
 {course.badge}
 </span>
 )}
 </div>
 </div>

 {/* Content Panel */}
 <div className="p-6 flex flex-col flex-grow">
 <h3
 className="font-display tracking-tight mb-2 leading-tight"
 style={{
 color: 'var(--text-primary)',
 fontWeight: 600,
 fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
 }}
 >
 {course.title}
 </h3>

 <div className="font-body flex items-center gap-4 text-xs mb-3 flex-wrap" style={{ color: 'var(--text-secondary)' }}>
 <div className="flex items-center gap-1.5">
 <Clock className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={1.5} />
 <span>{course.duration}</span>
 </div>
 <div className="flex items-center gap-1.5">
 <Users className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={1.5} />
 <span>{course.hours}</span>
 </div>
 </div>

 <p
 className="font-body mb-5 leading-relaxed font-normal flex-grow"
 style={{
 color: 'var(--text-muted)',
 fontSize: 'clamp(0.875rem, 1.5vw, 0.9375rem)',
 lineHeight: '1.6',
 }}
 >
 {course.description}
 </p>

 <div className="pt-3 border-t border-strong flex items-center justify-between mt-auto">
 <span className="font-body text-xs text-muted">Price from:</span>
 <span className="font-display font-bold text-base md:text-lg" style={{ color: 'var(--color-forest)' }}>
 {priceFrom}
 </span>
 </div>

 <div
 className="font-body flex items-center gap-2 font-bold group/btn mt-3 min-h-[44px]"
 style={{ color: 'var(--color-purple)', fontSize: 'clamp(0.8125rem, 1.5vw, 0.875rem)' }}
 >
 View Course
 <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform flex-shrink-0" strokeWidth={1.5} />
 </div>
 </div>
 </div>
 </Link>
 );
 })}
 </div>
 );
}

export function CoursesSection() {
 const allCourses = [...homepageDesignTrackCards, ...homepageAiTrackCards];

 const courseSchemas = allCourses.map((course) => ({
 '@context': 'https://schema.org',
 '@type': 'Course',
 name: course.title,
 description: course.description,
 provider: {
 '@type': 'EducationalOrganization',
 name: 'Designient Technologies Private Limited',
 url: 'https://designient.com',
 },
 educationalLevel: course.level,
 timeRequired: course.hours,
 offers: {
 '@type': 'Offer',
 availability: 'https://schema.org/InStock',
 url: `https://designient.com${course.path}`,
 },
 }));

 return (
 <section className="py-24 md:py-32">
 <StructuredData data={courseSchemas} />

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
 Two Tracks. Five Courses. One Direction.
 </h2>
 <p
 className="font-body text-base md:text-lg max-w-3xl mx-auto font-normal"
 style={{
 color: 'var(--text-secondary)',
 fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
 lineHeight: '1.6',
 }}
 >
 Choose the track that fits where you are going. Both tracks share the same fundamentals: small batches, live mentorship, real outcomes, and AI tools embedded throughout.
 </p>
 </motion.div>

 <div className="space-y-16">
 <div>
 <span
 className="font-body inline-block px-4 py-2 rounded-lg text-sm font-bold mb-6"
 style={{ backgroundColor: 'var(--color-forest)', color: '#ffffff' }}
 >
 Design Track - Become a UI/UX Designer
 </span>
 <CourseCardGrid courses={homepageDesignTrackCards} />
 </div>

 <div>
 <span
 className="font-body inline-block px-4 py-2 rounded-lg text-sm font-bold mb-6"
 style={{ backgroundColor: 'var(--color-purple)', color: '#ffffff' }}
 >
 AI Track - Build AI Workflows and Design AI Products
 </span>
 <CourseCardGrid courses={homepageAiTrackCards} />
 </div>
 </div>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5 }}
 className="text-center mt-16"
 >
 <p className="font-body mb-4" style={{ color: 'var(--text-secondary)' }}>
 Not sure which course is right for you?
 </p>
 <Link
 href="/apply-now"
 className="inline-flex items-center gap-2 font-body font-bold transition-transform hover:scale-105"
 style={{ color: 'var(--color-purple)' }}
 >
 Book a free 15-minute consultation
 <ArrowRight className="w-5 h-5" />
 </Link>
 </motion.div>
 </div>
 </section>
 );
}
