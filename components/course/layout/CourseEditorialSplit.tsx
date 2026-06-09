'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type CourseEditorialSplitProps = {
  imageSrc: string
  imageAlt: string
  imagePosition?: 'left' | 'right'
  children: React.ReactNode
  className?: string
}

export function CourseEditorialSplit({
  imageSrc,
  imageAlt,
  imagePosition = 'left',
  children,
  className = '',
}: CourseEditorialSplitProps) {
  const imageBlock = (
    <motion.div
      initial={{ opacity: 0, x: imagePosition === 'left' ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="lg:col-span-5 relative w-full aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden border border-strong lg:sticky lg:top-24"
      style={{ boxShadow: 'var(--shadow-card)' }}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 450px"
        loading="lazy"
      />
    </motion.div>
  )

  const contentBlock = (
    <motion.div
      initial={{ opacity: 0, x: imagePosition === 'left' ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="lg:col-span-7"
    >
      {children}
    </motion.div>
  )

  return (
    <section className={`py-24 md:py-32 ${className}`.trim()}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {imagePosition === 'left' ? (
            <>
              {imageBlock}
              {contentBlock}
            </>
          ) : (
            <>
              {contentBlock}
              {imageBlock}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
