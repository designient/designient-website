'use client'

import React from 'react'
import Link from 'next/link'

export function SkipLink() {
  return (
    <Link
      href="#main-content"
      className="sr-only focus:not-sr-only"
      aria-label="Skip to main content">
      Skip to main content
    </Link>
  )
}
