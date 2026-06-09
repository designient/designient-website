'use client'

import React from 'react'
import { ArrowRight } from 'react-feather'
import { useEnrollmentAction } from '../../../hooks/useEnrollmentAction'

type EnrollmentActionButtonProps = {
  courseSlug: string
  className?: string
  style?: React.CSSProperties
  focusApplication?: boolean
  showArrow?: boolean
}

export function EnrollmentActionButton({
  courseSlug,
  className = 'font-body font-bold py-3.5 px-4 rounded-lg transition-all hover:scale-[1.02] inline-flex items-center justify-center gap-2',
  style = { backgroundColor: 'var(--color-purple)', color: '#ffffff' },
  focusApplication = false,
  showArrow = true,
}: EnrollmentActionButtonProps) {
  const { primaryAction, primaryCtaLabel } = useEnrollmentAction({ courseSlug, focusApplication })

  return (
    <button type="button" onClick={primaryAction} className={className} style={style}>
      {primaryCtaLabel}
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </button>
  )
}
