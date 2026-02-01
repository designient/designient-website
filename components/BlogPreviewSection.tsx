'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock } from 'react-feather'
import Link from 'next/link'
import Image from 'next/image'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  coverImage: string
  category: string
  publishedDate: string
  readingTime: string
}

interface BlogPreviewSectionProps {
  posts: BlogPost[]
}

export function BlogPreviewSection({ posts }: BlogPreviewSectionProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
  }

  // Show only the latest 3 posts
  const latestPosts = posts.slice(0, 3)

  return (
    <section id="blog" className="py-20 sm:py-24 md:py-32 bg-white">
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            amount: 0.3
          }}
          transition={{
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="flex items-end justify-between mb-16 md:mb-24">
          <div>
            <h2
              className="font-display tracking-wide leading-tight mb-6"
              style={{
                color: '#8458B3',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)'
              }}>
              LATEST INSIGHTS
            </h2>
            <p
              className="font-body text-base md:text-lg max-w-2xl mx-auto font-normal text-center"
              style={{
                color: '#4a4a4a',
                fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                lineHeight: '1.6'
              }}>
              Expert tips, industry trends, and career advice from our blog
            </p>
          </div>
          <Link
            href="/blogs"
            className="hidden md:flex items-center gap-2 font-body text-base font-semibold group"
            style={{
              color: '#1F2937'
            }}>
            View All Posts
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{
                opacity: 0,
                y: 40
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                amount: 0.2
              }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="group cursor-pointer min-h-[44px]">
              <Link href={`/blogs/${post.slug}`} className="block">
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video">
                  <Image
                    src={post.coverImage}
                    alt={`${post.title} - UI UX design blog post from Designient`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    loading="lazy"
                  />

                  <span
                    className="absolute top-4 left-4 font-body text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: '#FF5841',
                      color: 'white'
                    }}>
                    {post.category}
                  </span>
                </div>

                <div
                  className="flex items-center gap-4 mb-4 font-body text-sm"
                  style={{
                    color: '#6B7280'
                  }}>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(post.publishedDate)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readingTime}
                  </span>
                </div>

                <h3
                  className="font-display tracking-wide mb-3 group-hover:text-[#FF5841] transition-colors"
                  style={{
                    color: '#1F2937',
                    fontWeight: 600,
                    fontSize: 'clamp(1.25rem, 3vw, 2.25rem)'
                  }}>
                  {post.title.toUpperCase()}
                </h3>

                <p
                  className="font-body leading-relaxed mb-4 font-normal"
                  style={{
                    color: '#6B7280',
                    fontSize: 'clamp(0.9375rem, 1.8vw, 1.0625rem)',
                    lineHeight: '1.7'
                  }}>
                  {post.excerpt}
                </p>

                <div
                  className="inline-flex items-center gap-2 font-body font-bold group/link min-h-[44px]"
                  style={{
                    color: '#8458B3',
                    fontSize: 'clamp(0.875rem, 1.5vw, 0.9375rem)'
                  }}>
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform flex-shrink-0" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          viewport={{
            once: true
          }}
          className="text-center mt-12 md:hidden">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 font-body text-base font-semibold"
            style={{
              color: '#1F2937'
            }}>
            View All Posts
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
