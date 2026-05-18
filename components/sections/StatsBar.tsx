import React from 'react'
import { Reveal } from '../ui/Reveal'

const stats = [
  { value: '95%', label: 'Placement Rate' },
  { value: '150+', label: 'Designers Trained' },
  { value: '15+', label: 'Years Mentor Experience' },
  { value: '3', label: 'Cities + Online' },
]

export function StatsBar() {
  return (
    <section
      aria-label="Designient by the numbers"
      className="relative py-20 md:py-24 section-glow"
    >
      <div className="max-w-container mx-auto container-px">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-0 divide-x divide-neon/20">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="px-6 first:pl-0 last:pr-0 text-center md:text-left">
              <div>
                <div className="font-serif text-[clamp(2.5rem,5vw,3.5rem)] leading-none text-neon tracking-[-0.025em]">
                  {s.value}
                </div>
                <div className="mt-3 overline text-ash">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
