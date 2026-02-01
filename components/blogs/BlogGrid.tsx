'use client'

import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { BlogCard } from './BlogCard'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  coverImage: string
  category: string
  tags: string[]
  publishedDate: string
  readingTime: string
}

interface BlogGridProps {
  initialPosts: BlogPost[]
  totalPosts: number
  postsPerPage: number
  currentPage: number
  totalPages: number
  selectedCategory: string | null
  selectedTags: string[]
  sortBy: string
  searchQuery?: string
}

export function BlogGrid({
  initialPosts,
  totalPosts,
  postsPerPage,
  currentPage,
  totalPages,
  selectedCategory,
  selectedTags,
  sortBy,
  searchQuery = ''
}: BlogGridProps) {
  const router = useRouter()
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts)
  const [page, setPage] = useState(currentPage)
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(currentPage < totalPages)
  const observerTarget = useRef<HTMLDivElement>(null)

  // Reset posts when filters, sort, search, or page changes
  useEffect(() => {
    setPosts(initialPosts)
    setPage(currentPage)
    setHasMore(currentPage < totalPages)
  }, [initialPosts, currentPage, totalPages, selectedCategory, selectedTags.join(','), sortBy, searchQuery])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMorePosts()
        }
      },
      { threshold: 0.1 }
    )

    const currentTarget = observerTarget.current
    if (currentTarget) {
      observer.observe(currentTarget)
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget)
      }
    }
  }, [hasMore, isLoading])

  const loadMorePosts = async () => {
    if (isLoading || !hasMore) return

    setIsLoading(true)
    const nextPage = page + 1

    // Build URL with current filters
    const params = new URLSearchParams()
    if (selectedCategory) params.set('category', selectedCategory)
    if (selectedTags.length > 0) params.set('tags', selectedTags.join(','))
    if (sortBy !== 'latest') params.set('sort', sortBy)
    if (searchQuery) params.set('search', searchQuery)
    params.set('page', nextPage.toString())

    try {
      // Fetch next page of posts
      const response = await fetch(`/api/blogs?${params.toString()}`)
      if (response.ok) {
        const data = await response.json()
        if (data.posts && data.posts.length > 0) {
          setPosts((prev) => [...prev, ...data.posts])
          setPage(nextPage)
          setHasMore(nextPage < data.totalPages)
          
          // Update URL without page reload
          router.push(`/blogs?${params.toString()}`, { scroll: false })
        } else {
          setHasMore(false)
        }
      } else {
        setHasMore(false)
      }
    } catch (error) {
      console.error('Error loading more posts:', error)
      setHasMore(false)
    } finally {
      setIsLoading(false)
    }
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="font-body text-lg" style={{ color: '#6b7280' }}>
          No blog posts found matching your filters. Try adjusting your search criteria.
        </p>
      </div>
    )
  }

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            coverImage={post.coverImage}
            category={post.category}
            tags={post.tags}
            publishedDate={post.publishedDate}
            readingTime={post.readingTime}
          />
        ))}
      </div>

      {/* Infinite scroll trigger */}
      {hasMore && (
        <div ref={observerTarget} className="py-8 text-center">
          {isLoading && (
            <div className="flex items-center justify-center gap-2">
              <div className="w-6 h-6 border-2 border-[#8458B3] border-t-transparent rounded-full animate-spin" />
              <span className="font-body" style={{ color: '#6b7280' }}>
                Loading more posts...
              </span>
            </div>
          )}
        </div>
      )}

      {/* Fallback pagination for non-JS users */}
      <noscript>
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
              const params = new URLSearchParams()
              if (selectedCategory) params.set('category', selectedCategory)
              if (selectedTags.length > 0) params.set('tags', selectedTags.join(','))
              if (sortBy !== 'latest') params.set('sort', sortBy)
              if (searchQuery) params.set('search', searchQuery)
              if (p > 1) params.set('page', p.toString())
              const href = `/blogs${params.toString() ? `?${params.toString()}` : ''}`

              return (
                <a
                  key={p}
                  href={href}
                  className={`px-4 py-2 rounded-lg font-body font-semibold transition-colors ${
                    p === currentPage
                      ? 'text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  style={p === currentPage ? { backgroundColor: '#8458B3' } : {}}>
                  {p}
                </a>
              )
            })}
          </div>
        )}
      </noscript>
    </>
  )
}
