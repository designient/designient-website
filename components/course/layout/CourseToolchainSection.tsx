'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { getToolLogo } from '../../../data/toolLogos'
import { fadeUp, motionEase, staggerContainer, viewportOnce } from '../animated/motion'

export type CourseToolchainItem = {
 name: string
 description: string
}

type CourseToolchainSectionProps = {
 title: string
 subtitle?: string
 tools: CourseToolchainItem[]
 track?: 'design' | 'ai'
 backgroundColor?: string
 maxWidthClass?: string
}

function ToolLogoMark({ name, size = 44 }: { name: string; size?: number }) {
 const logo = getToolLogo(name)
 const imageStyle = logo.darkFilter ? { filter: 'brightness(0)' as const } : undefined

 if (logo.secondarySrc) {
 return (
 <div className="flex items-center gap-2 flex-shrink-0">
 <Image src={logo.src} alt={`${name} logo`} width={size} height={size} className="object-contain" unoptimized={logo.src.startsWith('http')} style={imageStyle} />
 <Image src={logo.secondarySrc} alt={logo.secondaryLabel ?? 'Secondary tool logo'} width={size} height={size} className="object-contain" unoptimized={logo.secondarySrc.startsWith('http')} style={imageStyle} />
 </div>
 )
 }

 return <Image src={logo.src} alt={`${name} logo`} width={size} height={size} className="object-contain" unoptimized={logo.src.startsWith('http')} style={imageStyle} />
}

export function CourseToolchainSection({
 title,
 subtitle,
 tools,
 track = 'design',
 backgroundColor = 'var(--bg-card)',
 maxWidthClass = 'max-w-6xl',
}: CourseToolchainSectionProps) {
 const accentColor = track === 'ai' ? 'var(--color-purple)' : 'var(--color-forest)'
 const iconBg = track === 'ai' ? 'var(--bg-section-purple)' : 'var(--bg-section-green)'
 const gridCols =
 tools.length <= 4
 ? 'grid-cols-1 sm:grid-cols-2'
 : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'

 return (
 <section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor }}>
 <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
 <div
 className="absolute -top-32 -right-24 w-[min(420px,80vw)] h-[min(420px,80vw)] rounded-full blur-3xl opacity-50"
 style={{
 background:
 track === 'ai'
 ? 'radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 70%)'
 : 'radial-gradient(circle, rgba(14, 86, 66, 0.08) 0%, transparent 70%)',
 }}
 />
 </div>

 <div className={`max-w-container mx-auto px-4 md:px-6 lg:px-8 ${maxWidthClass} relative z-10`}>
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={viewportOnce}
 transition={{ duration: 0.6, ease: motionEase }}
 className="text-center mb-10 md:mb-12"
 >
 <h2
 className="font-display font-bold leading-tight"
 style={{
 color: accentColor,
 fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
 }}
 >
 {title}
 </h2>
 {subtitle && (
 <p
 className="font-body mt-4 max-w-2xl mx-auto leading-relaxed"
 style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}
 >
 {subtitle}
 </p>
 )}
 </motion.div>

 {/* Logo strip - quick visual scan */}
 <motion.div
 initial={{ opacity: 0, y: 16 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={viewportOnce}
 transition={{ duration: 0.5, delay: 0.1, ease: motionEase }}
 className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-10 md:mb-12"
 >
 {tools.map((tool) => {
 const logo = getToolLogo(tool.name)
 return (
 <div
 key={`strip-${tool.name}`}
 className="flex items-center gap-2 px-3 py-2 rounded-full border bg-white/80 backdrop-blur-sm"
 style={{ borderColor: 'var(--border-default)' }}
 >
 <div className="relative w-7 h-7 flex-shrink-0">
 <Image
 src={logo.src}
 alt=""
 width={28}
 height={28}
 className="object-contain"
 aria-hidden
 unoptimized={logo.src.startsWith('http')}
 />
 </div>
 {logo.secondarySrc && (
 <div className="relative w-7 h-7 flex-shrink-0 -ml-1">
 <Image
 src={logo.secondarySrc}
 alt=""
 width={28}
 height={28}
 className="object-contain"
 aria-hidden
 />
 </div>
 )}
 <span className="font-body text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>
 {tool.name}
 </span>
 </div>
 )
 })}
 </motion.div>

 {/* Detail cards */}
 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={viewportOnce}
 variants={staggerContainer}
 className={`grid ${gridCols} gap-4 md:gap-5`}
 >
 {tools.map((tool) => (
 <motion.article
 key={tool.name}
 variants={fadeUp}
 whileHover={{ y: -3, transition: { duration: 0.2 } }}
 className="group flex gap-4 md:gap-5 p-5 md:p-6 rounded-2xl border bg-white transition-shadow hover:shadow-md"
 style={{ borderColor: 'var(--border-default)' }}
 >
 <div
 className="w-[4.5rem] min-h-[4.5rem] rounded-2xl flex items-center justify-center flex-shrink-0 px-1"
 style={{ backgroundColor: iconBg }}
 >
 <ToolLogoMark
 name={tool.name}
 size={getToolLogo(tool.name).secondarySrc ? 30 : 40}
 />
 </div>
 <div className="min-w-0 flex-1 text-left">
 <h3
 className="font-display font-semibold mb-2 leading-snug"
 style={{
 color: accentColor,
 fontSize: 'clamp(1.0625rem, 2vw, 1.25rem)',
 }}
 >
 {tool.name}
 </h3>
 <p
 className="font-body leading-relaxed"
 style={{ color: 'var(--text-secondary)' }}
 >
 {tool.description}
 </p>
 </div>
 </motion.article>
 ))}
 </motion.div>
 </div>
 </section>
 )
}
