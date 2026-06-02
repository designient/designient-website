import React from 'react'

type SiteLogoProps = {
  className?: string
  width?: number
  height?: number
  /** Use on header logo for LCP */
  priority?: boolean
}

const LOGO_SRC = '/designient-logo.svg'
const LOGO_ALT = 'Designient School of Masterminds UI UX design training logo'

/**
 * Brand logo as a native SVG <img> so colors stay exact on all breakpoints
 * (lime #F0FF42 wordmark + white tagline). Avoids Next/Image processing and
 * backdrop-filter tinting on mobile glass headers.
 */
export function SiteLogo({
  className = '',
  width = 160,
  height = 48,
  priority = false,
}: SiteLogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={LOGO_SRC}
      alt={LOGO_ALT}
      width={width}
      height={height}
      className={`site-logo ${className}`.trim()}
      decoding="async"
      fetchPriority={priority ? 'high' : undefined}
    />
  )
}
