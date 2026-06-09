'use client'

import React from 'react'

export type SectionNavItem = { id: string; label: string }

type CourseSectionNavProps = {
  items: SectionNavItem[]
}

export function CourseSectionNav({ items }: CourseSectionNavProps) {
  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav
      aria-label="On this page"
      className="hidden xl:block sticky top-24 self-start w-48 flex-shrink-0"
    >
      <p className="font-body text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: 'var(--text-muted)' }}>
        On this page
      </p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => handleClick(item.id)}
              className="font-body text-sm text-left hover:underline w-full"
              style={{ color: 'var(--text-secondary)' }}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
