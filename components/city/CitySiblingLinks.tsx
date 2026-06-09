'use client'

import Link from 'next/link'
import { ArrowRight } from 'react-feather'
import { getSiblingCities, type CityPageKey } from '../../data/cityPages'

type CitySiblingLinksProps = {
  currentCity: CityPageKey
}

export function CitySiblingLinks({ currentCity }: CitySiblingLinksProps) {
  const siblings = getSiblingCities(currentCity)
  if (siblings.length === 0) return null

  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <h2
          className="font-display font-bold mb-4 text-center"
          style={{ color: 'var(--text-primary)', fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}
        >
          Also available in other cities
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {siblings.map((city) => (
            <Link
              key={city.path}
              href={city.path}
              className="inline-flex items-center gap-2 font-body font-semibold px-5 py-3 rounded-xl border bg-white hover:shadow-md transition-shadow"
              style={{ borderColor: 'var(--border-default)', color: 'var(--color-primary)' }}
            >
              UI/UX Design in {city.name}
              <ArrowRight className="w-4 h-4" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
