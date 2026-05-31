'use client'

import React, { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Search, ChevronDown, Filter, X } from 'react-feather'

interface BlogSearchProps {
  categories: string[]
  tags: string[]
  selectedCategory: string | null
  selectedTags: string[]
  sortBy: string
  showSortMenu: boolean
  showFilterMenu: boolean
  onFilterToggle: () => void
  onSortToggle: () => void
  onCategoryChange: (category: string) => void
  onTagToggle: (tag: string) => void
  onSortChange: (sort: string) => void
  onClearFilters: () => void
  filterMenuRef: React.RefObject<HTMLDivElement | null>
  sortMenuRef: React.RefObject<HTMLDivElement | null>
}

export function BlogSearch({
  categories,
  tags,
  selectedCategory,
  selectedTags,
  sortBy,
  showSortMenu,
  showFilterMenu,
  onFilterToggle,
  onSortToggle,
  onCategoryChange,
  onTagToggle,
  onSortChange,
  onClearFilters,
  filterMenuRef,
  sortMenuRef,
}: BlogSearchProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchInput, setSearchInput] = useState(searchParams.get('search') ?? '')

  // Keep search input in sync with URL (e.g. after "Clear all" or back/forward)
  useEffect(() => {
    setSearchInput(searchParams.get('search') ?? '')
  }, [searchParams])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams.toString())
    if (searchInput.trim()) {
      params.set('search', searchInput.trim())
    } else {
      params.delete('search')
    }
    params.set('page', '1')
    router.push(`/blogs?${params.toString()}`)
  }

  const hasActiveFilters = selectedCategory || selectedTags.length > 0 || sortBy !== 'latest'

  return (
    <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
      <form onSubmit={handleSearchSubmit} className="flex-1 min-w-[200px] flex gap-2">
        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
            style={{ color: 'var(--text-muted)' }}
          />
          <input
            type="search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search articles..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border-2 font-body text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2"
            style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--bg-card)' }}
            aria-label="Search blog posts"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-3 rounded-lg font-body font-semibold text-white transition-colors hover:opacity-90 surface-on-accent"
          style={{ backgroundColor: 'var(--color-cta)' }}
        >
          Search
        </button>
      </form>

      <div className="flex gap-2 items-center flex-wrap">
        <div className="relative" ref={sortMenuRef}>
          <button
            type="button"
            onClick={onSortToggle}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border-2 font-body font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2"
            style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--bg-card)', color: 'var(--text-primary)' }}
          >
            Sort
            <ChevronDown className={`w-4 h-4 transition-transform ${showSortMenu ? 'rotate-180' : ''}`} style={{ color: 'var(--color-primary)' }} />
          </button>
          {showSortMenu && (
            <div
              className="absolute top-full left-0 mt-2 py-2 rounded-lg border-2 shadow-lg z-10 min-w-[160px]"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-default)' }}
            >
              <button
                type="button"
                onClick={() => onSortChange('latest')}
                className={`w-full text-left px-4 py-2 font-body text-sm ${sortBy === 'latest' ? 'font-semibold' : ''}`}
                style={{ color: sortBy === 'latest' ? 'var(--color-primary)' : 'var(--text-secondary)' }}
              >
                Latest
              </button>
              <button
                type="button"
                onClick={() => onSortChange('popular')}
                className={`w-full text-left px-4 py-2 font-body text-sm ${sortBy === 'popular' ? 'font-semibold' : ''}`}
                style={{ color: sortBy === 'popular' ? 'var(--color-primary)' : 'var(--text-secondary)' }}
              >
                Most Popular
              </button>
            </div>
          )}
        </div>

        <div className="relative" ref={filterMenuRef}>
          <button
            type="button"
            onClick={onFilterToggle}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border-2 font-body font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2"
            style={{ borderColor: 'var(--border-default)', backgroundColor: 'var(--bg-card)', color: 'var(--text-primary)' }}
          >
            Filter
            <Filter className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
          </button>
          {showFilterMenu && (
            <div
              className="absolute top-full right-0 mt-2 py-4 px-4 rounded-lg border-2 shadow-lg z-10 min-w-[220px]"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-default)' }}
            >
              <p className="font-body font-semibold text-sm mb-2" style={{ color: 'var(--text-primary)' }}>
                Category
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                <button
                  type="button"
                  onClick={() => onCategoryChange('')}
                  className={`px-3 py-1.5 rounded-full text-xs font-body ${!selectedCategory ? 'text-white' : ''}`}
                  style={!selectedCategory ? { backgroundColor: 'var(--color-cta)' } : { backgroundColor: 'var(--bg-muted)', color: 'var(--text-secondary)' }}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => onCategoryChange(cat)}
                    className={`px-3 py-1.5 rounded-full text-xs font-body ${selectedCategory === cat ? 'text-white' : ''}`}
                    style={selectedCategory === cat ? { backgroundColor: 'var(--color-cta)' } : { backgroundColor: 'var(--bg-muted)', color: 'var(--text-secondary)' }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <p className="font-body font-semibold text-sm mb-2" style={{ color: 'var(--text-primary)' }}>
                Tags
              </p>
              <div className="flex flex-wrap gap-1 mb-3 max-h-24 overflow-y-auto">
                {tags.slice(0, 12).map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => onTagToggle(tag)}
                    className={`px-3 py-1 rounded-full text-xs font-body ${selectedTags.includes(tag) ? 'text-white' : ''}`}
                    style={selectedTags.includes(tag) ? { backgroundColor: 'var(--color-cta)' } : { backgroundColor: 'var(--bg-muted)', color: 'var(--text-secondary)' }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={onClearFilters}
                  className="inline-flex items-center gap-1 text-sm font-body font-semibold"
                  style={{ color: 'var(--color-primary)' }}
                >
                  <X className="w-4 h-4" />
                  Clear all
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
