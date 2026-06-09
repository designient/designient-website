import React from 'react'

export type SectionBandVariant = 'none' | 'neutral' | 'green' | 'blue' | 'pencil' | 'purple'

const bandClass: Record<SectionBandVariant, string> = {
  none: '',
  neutral: 'section-neutral',
  green: 'section-green',
  blue: 'section-blue',
  pencil: 'section-pencil',
  purple: 'section-purple',
}

type CourseSectionBandProps = {
  variant?: SectionBandVariant
  children: React.ReactNode
  className?: string
}

export function CourseSectionBand({
  variant = 'none',
  children,
  className = '',
}: CourseSectionBandProps) {
  const wrapperClass = bandClass[variant]

  if (!wrapperClass) {
    return <>{children}</>
  }

  return <div className={`${wrapperClass} ${className}`.trim()}>{children}</div>
}
