'use client'

import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Filter, X } from 'react-feather'

interface BlogFiltersProps {
  categories: string[]
  tags: string[]
  selectedCategory: string | null
  selectedTags: string[]
  sortBy: string
}

export function BlogFilters({
  categories,
  tags,
  selectedCategory,
  selectedTags,
  sortBy
}: BlogFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const updateFilters = (updates: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString())
    
    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === '') {
        params.delete(key)
      } else {
        params.set(key, value)
      }
    })
    
    params.set('page', '1') // Reset to first page when filters change
    router.push(`/blogs?${params.toString()}`)
  }

  const handleCategoryChange = (category: string) => {
    updateFilters({ category: category === selectedCategory ? null : category })
  }

  const handleTagToggle = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag]
    updateFilters({ tags: newTags.length > 0 ? newTags.join(',') : null })
  }

  const handleSortChange = (sort: string) => {
    updateFilters({ sort: sort })
  }

  const clearFilters = () => {
    router.push('/blogs')
  }

  const hasActiveFilters = selectedCategory || selectedTags.length > 0 || sortBy !== 'latest'

  return (
    <div className="bg-card rounded-xl p-6 shadow-md mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
        <h3
          className="font-display font-bold"
          style={{
            color: 'var(--text-primary)',
            fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
          }}>
          Filter & Sort
        </h3>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="ml-auto flex items-center gap-1 text-sm font-body"
            style={{ color: 'var(--color-primary)' }}>
            <X className="w-4 h-4" />
            Clear All
          </button>
        )}
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <label
          className="block font-body font-semibold mb-2"
          style={{ color: 'var(--text-primary)', fontSize: '0.875rem' }}>
          Category
        </label>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleCategoryChange('')}
            className={`px-4 py-2 rounded-full text-sm font-body transition-colors ${
              !selectedCategory
                ? 'text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            style={!selectedCategory ? { backgroundColor: 'var(--color-cta)' } : {}}>
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-body transition-colors ${
                selectedCategory === category
                  ? 'text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              style={selectedCategory === category ? { backgroundColor: 'var(--color-cta)' } : {}}>
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Tags Filter */}
      {tags.length > 0 && (
        <div className="mb-6">
          <label
            className="block font-body font-semibold mb-2"
            style={{ color: 'var(--text-primary)', fontSize: '0.875rem' }}>
            Tags
          </label>
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 10).map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagToggle(tag)}
                className={`px-3 py-1 rounded-full text-xs font-body transition-colors ${
                  selectedTags.includes(tag)
                    ? 'text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={selectedTags.includes(tag) ? { backgroundColor: 'var(--color-cta)' } : {}}>
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Sort */}
      <div>
        <label
          className="block font-body font-semibold mb-2"
          style={{ color: 'var(--text-primary)', fontSize: '0.875rem' }}>
          Sort By
        </label>
        <div className="flex gap-2">
          <button
            onClick={() => handleSortChange('latest')}
            className={`px-4 py-2 rounded-full text-sm font-body transition-colors ${
              sortBy === 'latest'
                ? 'text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            style={sortBy === 'latest' ? { backgroundColor: 'var(--color-cta)' } : {}}>
            Latest
          </button>
          <button
            onClick={() => handleSortChange('popular')}
            className={`px-4 py-2 rounded-full text-sm font-body transition-colors ${
              sortBy === 'popular'
                ? 'text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            style={sortBy === 'popular' ? { backgroundColor: 'var(--color-cta)' } : {}}>
            Most Popular
          </button>
        </div>
      </div>
    </div>
  )
}
