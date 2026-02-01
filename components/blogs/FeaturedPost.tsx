'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight } from 'react-feather'
import { motion } from 'framer-motion'

interface FeaturedPostProps {
  slug: string
  title: string
  excerpt: string
  coverImage: string
  category: string
  publishedDate: string
  readingTime: string
}

export function FeaturedPost({
  slug,
  title,
  excerpt,
  coverImage,
  category,
  publishedDate,
  readingTime
}: FeaturedPostProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  // Generate concise title attribute (6-8 words, human-readable, doesn't repeat alt text)
  const generateImageTitle = (postTitle: string): string => {
    // Extract key words from title (first 4-5 words)
    const words = postTitle.split(' ').slice(0, 5).join(' ')
    return `Featured article: ${words}`
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl overflow-hidden shadow-xl mb-12">
      <Link href={`/blogs/${slug}`} className="block">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative w-full" style={{ aspectRatio: '1200/760', minHeight: '300px' }}>
            <Image
              src={coverImage}
              alt={`${title} - Featured post cover image`}
              title={generateImageTitle(title)}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute top-4 left-4">
              <span
                className="px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide"
                style={{ backgroundColor: '#f2d53c', color: '#1a1a1a' }}>
                Featured
              </span>
            </div>
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-4">
              <span
                className="px-4 py-2 rounded-full text-sm font-semibold"
                style={{ backgroundColor: '#8458B3', color: 'white' }}>
                {category}
              </span>
            </div>
            <h1
              className="font-display font-bold mb-4"
              style={{
                color: '#1a1a1a',
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                lineHeight: '1.2'
              }}>
              {title}
            </h1>
            <p
              className="font-body mb-6"
              style={{
                color: '#4a4a4a',
                fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                lineHeight: '1.7'
              }}>
              {excerpt}
            </p>
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <div className="flex items-center gap-2 text-sm" style={{ color: '#6b7280' }}>
                <Calendar className="w-4 h-4" />
                <span>{formatDate(publishedDate)}</span>
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: '#6b7280' }}>
                <Clock className="w-4 h-4" />
                <span>{readingTime}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 font-body font-semibold" style={{ color: '#8458B3' }}>
              <span>Read Article</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
