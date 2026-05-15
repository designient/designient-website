'use client'

import React from 'react'
import Link from 'next/link'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface SharedProps {
  variant?: Variant
  size?: Size
  className?: string
  fullWidth?: boolean
}

type ButtonProps =
  | (SharedProps &
      Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
        href?: undefined
        children: React.ReactNode
      })
  | (SharedProps & {
      href: string
      target?: string
      rel?: string
      children: React.ReactNode
      onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
      type?: never
      disabled?: never
    })

const base =
  'inline-flex items-center justify-center gap-2 font-sans font-medium uppercase tracking-[0.04em] rounded-full transition-all duration-200 ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-void disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap cursor-pointer'

const sizes: Record<Size, string> = {
  sm: 'text-[13px] px-5 py-2.5',
  md: 'text-[15px] px-8 py-3.5',
  lg: 'text-[16px] px-10 py-4',
}

const variants: Record<Variant, string> = {
  primary:
    'bg-amber text-void hover:bg-amber-glow hover:scale-[1.02] active:bg-amber-muted active:scale-[0.98] shadow-glow',
  secondary:
    'bg-transparent text-ivory border border-white/10 hover:border-amber hover:text-amber active:bg-white/5',
  ghost: 'bg-transparent text-amber hover:text-amber-glow underline-offset-4 hover:underline px-2 py-2',
}

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className = '', children, fullWidth } = props
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`

  if ('href' in props && props.href != null) {
    const { href, target, rel, onClick } = props
    const isExternal = href.startsWith('http')
    return (
      <Link
        href={href}
        target={target}
        rel={rel ?? (isExternal ? 'noopener noreferrer' : undefined)}
        onClick={onClick}
        className={classes}
      >
        {children}
      </Link>
    )
  }

  const { type, disabled, onClick, onSubmit, form, name, value, id, 'aria-label': ariaLabel, 'aria-expanded': ariaExpanded, 'aria-controls': ariaControls } = props as React.ButtonHTMLAttributes<HTMLButtonElement> & SharedProps
  return (
    <button
      type={type ?? 'button'}
      disabled={disabled}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      onSubmit={onSubmit}
      form={form}
      name={name}
      value={value}
      id={id}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      className={classes}
    >
      {children}
    </button>
  )
}
