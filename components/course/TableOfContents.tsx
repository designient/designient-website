'use client'

import React from 'react'
import { Hash } from 'react-feather'
import Link from 'next/link'

interface TableOfContentsProps {
  items: Array<{ id: string; label: string }>
}

export function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <section className="py-8 md:py-12 border-b border-gray-200" style={{ backgroundColor: '#f9fafb' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="font-display text-xl md:text-2xl font-bold mb-6" style={{ color: '#1a1a1a' }}>
          Table of Contents
        </h2>
        <nav aria-label="Page contents">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {items.map((item) => (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  className="flex items-center gap-2 font-body text-sm md:text-base hover:underline transition-all p-2 rounded hover:bg-white"
                  style={{ color: '#8458B3' }}
                >
                  <Hash className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
