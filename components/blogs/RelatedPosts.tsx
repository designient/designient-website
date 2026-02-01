'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock } from 'react-feather'
import { motion } from 'framer-motion'

interface RelatedPost {
  slug: string
  title: string
  excerpt: string
  coverImage: string
  category: string
  publishedDate: string
  readingTime: string
}

interface RelatedPostsProps {
  posts: RelatedPost[]
  currentSlug: string
}

export function RelatedPosts({ posts, currentSlug }: RelatedPostsProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  if (posts.length === 0) return null

  return (
    <section className="mt-16 pt-16 border-t-2" style={{ borderColor: '#e5e7eb' }}>
      <h2
        className="font-display font-bold mb-8"
        style={{
          color: '#8458B3',
          fontSize: 'clamp(1.75rem, 3vw, 2.5rem)'
        }}>
        Related Articles
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <Link href={`/blogs/${post.slug}`} className="block">
              <div className="relative w-full" style={{ aspectRatio: '16/9', minHeight: '180px' }}>
                <Image
                  src={post.coverImage}
                  alt={`${post.title} - Cover image`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="px-2 py-1 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: '#8458B3', color: 'white' }}>
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs" style={{ color: '#6b7280' }}>
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(post.publishedDate)}</span>
                  </div>
                </div>
                <h3
                  className="font-display font-bold mb-2 line-clamp-2"
                  style={{
                    color: '#1a1a1a',
                    fontSize: 'clamp(1.125rem, 2vw, 1.25rem)'
                  }}>
                  {post.title}
                </h3>
                <p
                  className="font-body text-sm line-clamp-2 mb-3"
                  style={{ color: '#4a4a4a', lineHeight: '1.6' }}>
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-1 text-xs" style={{ color: '#6b7280' }}>
                  <Clock className="w-3 h-3" />
                  <span>{post.readingTime}</span>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
