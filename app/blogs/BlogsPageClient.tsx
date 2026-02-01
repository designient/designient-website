'use client'

import { Suspense } from 'react'
import { BlogsPageContent } from '../../components/blogs/BlogsPageContent'

interface BlogPostShape {
  slug: string
  title: string
  excerpt: string
  coverImage: string
  category: string
  tags: string[]
  publishedDate: string
  readingTime: string
}

interface BlogsPageClientProps {
  featuredPost: BlogPostShape | undefined
  initialPosts: BlogPostShape[]
  totalPosts: number
  postsPerPage: number
  currentPage: number
  totalPages: number
  categories: string[]
  allTags: string[]
  selectedCategory: string | null
  selectedTags: string[]
  sortBy: string
  searchQuery?: string
}

export function BlogsPageClient(props: BlogsPageClientProps) {
  return (
    <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center font-body" style={{ color: '#6b7280' }}>Loading blogs...</div>}>
      <BlogsPageContent {...props} />
    </Suspense>
  )
}
