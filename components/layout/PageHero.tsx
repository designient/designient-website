'use client'

import React from 'react'

type PageHeroBackgroundProps = {
  /** Extra accent orb near form column (homepage hero only) */
  showFormOrb?: boolean
}

export function PageHeroBackground({ showFormOrb = false }: PageHeroBackgroundProps) {
  return (
    <div className="page-hero__bg" aria-hidden="true">
      <div className="page-hero__grid" />
      <div className="page-hero__orb page-hero__orb--accent" />
      <div className="page-hero__orb page-hero__orb--cool" />
      {showFormOrb && <div className="home-hero__orb home-hero__orb--form" />}
    </div>
  )
}

const sizeClasses = {
  compact: 'pt-8 pb-12 md:pt-12 md:pb-16',
  default: 'pt-8 pb-16 md:pt-12 md:pb-24',
  tall: 'min-h-[60vh] flex flex-col justify-center pt-6 md:pt-8 pb-16 md:pb-24',
  short: 'min-h-[40vh] flex flex-col justify-center pt-6 md:pt-8 pb-12 md:pb-16',
  course: 'pt-6 md:pt-8 pb-16 md:pb-24',
} as const

export type PageHeroSize = keyof typeof sizeClasses

type PageHeroProps = {
  children: React.ReactNode
  className?: string
  contentClassName?: string
  containerClassName?: string
  size?: PageHeroSize
  align?: 'left' | 'center' | 'none'
  /** When true, children supply their own max-width container */
  bare?: boolean
  id?: string
  'aria-labelledby'?: string
}

export function PageHero({
  children,
  className = '',
  contentClassName = '',
  containerClassName = '',
  size = 'default',
  align = 'none',
  bare = false,
  id,
  'aria-labelledby': ariaLabelledBy,
}: PageHeroProps) {
  const alignClass =
    align === 'center' ? 'text-center' : align === 'left' ? 'text-left' : ''

  const sectionClass = [
    'page-hero',
    'hero-glow',
    'relative',
    'overflow-hidden',
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (bare) {
    return (
      <section id={id} aria-labelledby={ariaLabelledBy} className={sectionClass}>
        <PageHeroBackground />
        <div className={`relative z-10 w-full ${contentClassName}`}>{children}</div>
      </section>
    )
  }

  return (
    <section id={id} aria-labelledby={ariaLabelledBy} className={sectionClass}>
      <PageHeroBackground />
      <div
        className={`max-w-container mx-auto px-4 md:px-6 lg:px-8 relative z-10 w-full ${containerClassName}`}
      >
        <div className={[alignClass, contentClassName].filter(Boolean).join(' ')}>
          {children}
        </div>
      </div>
    </section>
  )
}
