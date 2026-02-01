'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, Tag } from 'react-feather'
import { motion } from 'framer-motion'

interface BlogCardProps {
  slug: string
  title: string
  excerpt: string
  coverImage: string
  category: string
  tags: string[]
  publishedDate: string
  readingTime: string
  featured?: boolean
}

export function BlogCard({
  slug,
  title,
  excerpt,
  coverImage,
  category,
  tags,
  publishedDate,
  readingTime,
  featured = false
}: BlogCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  // Generate concise title attribute for featured posts (6-8 words, human-readable, doesn't repeat alt text)
  const generateImageTitle = (postTitle: string): string => {
    // Extract key words from title (first 4-5 words)
    const words = postTitle.split(' ').slice(0, 5).join(' ')
    return `Featured post: ${words}`
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <Link href={`/blogs/${slug}`} className="block">
        <div className="relative w-full" style={{ aspectRatio: '1200/760', minHeight: '200px' }}>
          <Image
            src={coverImage}
            alt={`${title} - Cover image`}
            title={featured ? generateImageTitle(title) : undefined}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
          {featured && (
            <div className="absolute top-4 left-4">
              <span
                className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide"
                style={{ backgroundColor: '#f2d53c', color: '#1a1a1a' }}>
                Featured
              </span>
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{ backgroundColor: '#8458B3', color: 'white' }}>
              {category}
            </span>
            <div className="flex items-center gap-1 text-sm" style={{ color: '#6b7280' }}>
              <Calendar className="w-4 h-4" />
              <span>{formatDate(publishedDate)}</span>
            </div>
            <div className="flex items-center gap-1 text-sm" style={{ color: '#6b7280' }}>
              <Clock className="w-4 h-4" />
              <span>{readingTime}</span>
            </div>
          </div>
          <h2
            className="font-display font-bold mb-3 line-clamp-2"
            style={{
              color: '#1a1a1a',
              fontSize: 'clamp(1.25rem, 2vw, 1.5rem)'
            }}>
            {title}
          </h2>
          <p
            className="font-body mb-4 line-clamp-3"
            style={{
              color: '#4a4a4a',
              fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
              lineHeight: '1.6'
            }}>
            {excerpt}
          </p>
          {tags.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4" style={{ color: '#6b7280' }} />
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 rounded text-xs"
                  style={{ backgroundColor: '#f3f4f6', color: '#4a4a4a' }}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.article>
  )
}
