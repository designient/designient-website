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
            style={{ color: '#6b7280' }}
          />
          <input
            type="search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search articles..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border-2 font-body text-base focus:outline-none focus:ring-2 focus:ring-[#8458B3] focus:ring-offset-2"
            style={{ borderColor: '#e5e7eb', backgroundColor: 'white' }}
            aria-label="Search blog posts"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-3 rounded-lg font-body font-semibold text-white transition-colors hover:opacity-90"
          style={{ backgroundColor: '#8458B3' }}
        >
          Search
        </button>
      </form>

      <div className="flex gap-2 items-center flex-wrap">
        <div className="relative" ref={sortMenuRef}>
          <button
            type="button"
            onClick={onSortToggle}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border-2 font-body font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#8458B3] focus:ring-offset-2"
            style={{ borderColor: '#e5e7eb', backgroundColor: 'white', color: '#1a1a1a' }}
          >
            Sort
            <ChevronDown className={`w-4 h-4 transition-transform ${showSortMenu ? 'rotate-180' : ''}`} style={{ color: '#8458B3' }} />
          </button>
          {showSortMenu && (
            <div
              className="absolute top-full left-0 mt-2 py-2 rounded-lg border-2 shadow-lg z-10 min-w-[160px]"
              style={{ backgroundColor: 'white', borderColor: '#e5e7eb' }}
            >
              <button
                type="button"
                onClick={() => onSortChange('latest')}
                className={`w-full text-left px-4 py-2 font-body text-sm ${sortBy === 'latest' ? 'font-semibold' : ''}`}
                style={{ color: sortBy === 'latest' ? '#8458B3' : '#4a4a4a' }}
              >
                Latest
              </button>
              <button
                type="button"
                onClick={() => onSortChange('popular')}
                className={`w-full text-left px-4 py-2 font-body text-sm ${sortBy === 'popular' ? 'font-semibold' : ''}`}
                style={{ color: sortBy === 'popular' ? '#8458B3' : '#4a4a4a' }}
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
            className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border-2 font-body font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#8458B3] focus:ring-offset-2"
            style={{ borderColor: '#e5e7eb', backgroundColor: 'white', color: '#1a1a1a' }}
          >
            Filter
            <Filter className="w-4 h-4" style={{ color: '#8458B3' }} />
          </button>
          {showFilterMenu && (
            <div
              className="absolute top-full right-0 mt-2 py-4 px-4 rounded-lg border-2 shadow-lg z-10 min-w-[220px]"
              style={{ backgroundColor: 'white', borderColor: '#e5e7eb' }}
            >
              <p className="font-body font-semibold text-sm mb-2" style={{ color: '#1a1a1a' }}>
                Category
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                <button
                  type="button"
                  onClick={() => onCategoryChange('')}
                  className={`px-3 py-1.5 rounded-full text-xs font-body ${!selectedCategory ? 'text-white' : ''}`}
                  style={!selectedCategory ? { backgroundColor: '#8458B3' } : { backgroundColor: '#f3f4f6', color: '#4a4a4a' }}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => onCategoryChange(cat)}
                    className={`px-3 py-1.5 rounded-full text-xs font-body ${selectedCategory === cat ? 'text-white' : ''}`}
                    style={selectedCategory === cat ? { backgroundColor: '#8458B3' } : { backgroundColor: '#f3f4f6', color: '#4a4a4a' }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <p className="font-body font-semibold text-sm mb-2" style={{ color: '#1a1a1a' }}>
                Tags
              </p>
              <div className="flex flex-wrap gap-1 mb-3 max-h-24 overflow-y-auto">
                {tags.slice(0, 12).map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => onTagToggle(tag)}
                    className={`px-3 py-1 rounded-full text-xs font-body ${selectedTags.includes(tag) ? 'text-white' : ''}`}
                    style={selectedTags.includes(tag) ? { backgroundColor: '#8458B3' } : { backgroundColor: '#f3f4f6', color: '#4a4a4a' }}
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
                  style={{ color: '#8458B3' }}
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
