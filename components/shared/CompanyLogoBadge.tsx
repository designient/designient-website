import Image from 'next/image'
import { getCompanyLogoPath } from '../../lib/company-logos'

interface CompanyLogoBadgeProps {
  company: string
  size?: 'sm' | 'md'
  showName?: boolean
  className?: string
}

export function CompanyLogoBadge({
  company,
  size = 'sm',
  showName = true,
  className = '',
}: CompanyLogoBadgeProps) {
  const logoPath = getCompanyLogoPath(company)
  const logoHeight = size === 'md' ? 24 : 18
  const initial = company.charAt(0).toUpperCase()

  return (
    <span
      className={`inline-flex items-center gap-2 font-body font-semibold px-2.5 py-1 rounded-md ${className}`}
      style={{ backgroundColor: 'var(--bg-peach)', color: 'var(--text-secondary)' }}>
      {logoPath ? (
        <Image
          src={logoPath}
          alt={`${company} logo`}
          width={96}
          height={logoHeight}
          className="company-logo-mono w-auto object-contain"
          style={{ height: logoHeight }}
        />
      ) : (
        <span
          className="inline-flex items-center justify-center rounded font-display font-bold flex-shrink-0"
          style={{
            width: logoHeight,
            height: logoHeight,
            fontSize: size === 'md' ? '0.75rem' : '0.625rem',
            backgroundColor: 'var(--bg-muted)',
            color: 'var(--text-primary)',
          }}
          aria-hidden="true">
          {initial}
        </span>
      )}
      {showName && (
        <span className={size === 'md' ? 'text-sm' : 'text-xs'}>{company}</span>
      )}
    </span>
  )
}
