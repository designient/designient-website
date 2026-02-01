'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'react-feather'
import { FeaturedPost } from './FeaturedPost'
import { BlogFilters } from './BlogFilters'
import { BlogGrid } from './BlogGrid'
import { BlogSearch } from './BlogSearch'

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

interface BlogsPageContentProps {
  featuredPost: BlogPost | undefined
  initialPosts: BlogPost[]
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

export function BlogsPageContent({
  featuredPost,
  initialPosts,
  totalPosts,
  postsPerPage,
  currentPage,
  totalPages,
  categories,
  allTags,
  selectedCategory,
  selectedTags,
  sortBy,
  searchQuery = ''
}: BlogsPageContentProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [showFilters, setShowFilters] = useState(false)
  const [showSortMenu, setShowSortMenu] = useState(false)
  const [showFilterMenu, setShowFilterMenu] = useState(false)
  const sortMenuRef = useRef<HTMLDivElement>(null)
  const filterMenuRef = useRef<HTMLDivElement>(null)

  const handleSortChange = (newSort: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (newSort === 'latest') {
      params.delete('sort')
    } else {
      params.set('sort', newSort)
    }
    params.set('page', '1')
    router.push(`/blogs?${params.toString()}`)
    setShowSortMenu(false)
  }

  // Close sort menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortMenuRef.current && !sortMenuRef.current.contains(event.target as Node)) {
        setShowSortMenu(false)
      }
      if (filterMenuRef.current && !filterMenuRef.current.contains(event.target as Node)) {
        setShowFilterMenu(false)
      }
    }
    if (showSortMenu || showFilterMenu) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showSortMenu, showFilterMenu])

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (category === selectedCategory || category === '') {
      params.delete('category')
    } else {
      params.set('category', category)
    }
    params.set('page', '1')
    router.push(`/blogs?${params.toString()}`)
  }

  const handleTagToggle = (tag: string) => {
    const params = new URLSearchParams(searchParams.toString())
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag]
    
    if (newTags.length > 0) {
      params.set('tags', newTags.join(','))
    } else {
      params.delete('tags')
    }
    params.set('page', '1')
    router.push(`/blogs?${params.toString()}`)
  }

  const clearFilters = () => {
    router.push('/blogs')
    setShowFilterMenu(false)
  }

  return (
    <>
      {/* Hero Section - Standardized */}
      <section
        className="relative min-h-[60vh] flex items-center overflow-hidden pt-16 md:pt-20"
        style={{ backgroundColor: '#FFF6E2' }}
        aria-labelledby="blogs-hero-heading">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full filter blur-3xl"
            style={{ backgroundColor: '#8458B3' }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full filter blur-3xl"
            style={{ backgroundColor: '#f2d53c' }}
            aria-hidden="true"
          />
        </div>

        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center py-16 md:py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}>
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 mb-6 text-sm" style={{ color: '#6B7280' }}>
              <Link href="/" className="hover:underline font-body">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span style={{ color: '#8458B3' }} className="font-body">
                Blogs
              </span>
            </div>

            {/* Main heading */}
            <h1
              id="blogs-hero-heading"
              className="font-display text-center mb-4 md:mb-6 leading-[1.1]"
              style={{
                color: '#1a1a1a',
                fontWeight: 700,
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)'
              }}>
              Blogs & Insights on UI/UX Design, Careers, and Learning
            </h1>

            {/* Subtitle */}
            <p
              className="text-center text-base md:text-lg max-w-5xl mx-auto leading-[1.6]"
              style={{
                color: '#4a4a4a',
                fontSize: 'clamp(1.125rem, 2vw, 1.375rem)'
              }}>
              Expert insights, career guides, design tips, and industry trends to help you grow as a UI/UX designer.
            </p>

            {/* Search Bar */}
            <div className="mt-12 max-w-4xl mx-auto relative" style={{ overflow: 'visible' }}>
              <BlogSearch
                categories={categories}
                tags={allTags}
                selectedCategory={selectedCategory}
                selectedTags={selectedTags}
                sortBy={sortBy}
                showSortMenu={showSortMenu}
                showFilterMenu={showFilterMenu}
                onFilterToggle={() => {
                  setShowFilterMenu(!showFilterMenu)
                  setShowSortMenu(false)
                }}
                onSortToggle={() => {
                  setShowSortMenu(!showSortMenu)
                  setShowFilterMenu(false)
                }}
                onCategoryChange={handleCategoryChange}
                onTagToggle={handleTagToggle}
                onSortChange={handleSortChange}
                onClearFilters={clearFilters}
                filterMenuRef={filterMenuRef}
                sortMenuRef={sortMenuRef}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 md:py-16" style={{ backgroundColor: 'white' }}>
          <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
            <FeaturedPost
              slug={featuredPost.slug}
              title={featuredPost.title}
              excerpt={featuredPost.excerpt}
              coverImage={featuredPost.coverImage}
              category={featuredPost.category}
              publishedDate={featuredPost.publishedDate}
              readingTime={featuredPost.readingTime}
            />
          </div>
        </section>
      )}

      {/* Filters - Collapsible */}
      {showFilters && (
        <section className="py-8" style={{ backgroundColor: '#f9fafb' }}>
          <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
            <BlogFilters
              categories={categories}
              tags={allTags}
              selectedCategory={selectedCategory}
              selectedTags={selectedTags}
              sortBy={sortBy}
            />
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-12 md:py-16" style={{ backgroundColor: 'white' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <BlogGrid
            initialPosts={initialPosts}
            totalPosts={totalPosts}
            postsPerPage={postsPerPage}
            currentPage={currentPage}
            totalPages={totalPages}
            selectedCategory={selectedCategory}
            selectedTags={selectedTags}
            sortBy={sortBy}
            searchQuery={searchQuery}
          />
        </div>
      </section>
    </>
  )
}
