import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'amber' | 'success' | 'subtle' | 'outline'
  className?: string
}

const variants = {
  amber: 'bg-amber-10 text-amber border border-amber/30',
  success: 'bg-success-bg text-success border border-success/30',
  subtle: 'bg-white/[0.04] text-silver border border-white/10',
  outline: 'bg-transparent text-cloud border border-white/15',
}

export function Badge({ children, variant = 'amber', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium tracking-[0.08em] uppercase ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

export function Overline({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <span className={`overline ${className}`}>{children}</span>
}
