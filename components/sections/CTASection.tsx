import React from 'react'
import { Button } from '../ui/Button'
import { Overline } from '../ui/Badge'
import { Reveal } from '../ui/Reveal'
import { MapPin } from 'lucide-react'

export function CTASection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative isolate overflow-hidden py-28 md:py-36"
      style={{ background: 'var(--color-obsidian)' }}
    >
      {/* Amber spotlight */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(232,168,56,0.09) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-container mx-auto container-px text-center">
        <Reveal>
          <Overline>Your Career Starts Here</Overline>
          <h2
            id="cta-heading"
            className="mt-6 mx-auto max-w-2xl font-serif text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.08] tracking-[-0.025em] text-ivory text-balance"
          >
            Small batches. Real mentors.{' '}
            <span className="italic text-amber">No shortcuts.</span>
          </h2>
          <p className="mt-7 mx-auto max-w-xl text-body-lg text-silver">
            Applications for the next batch are open. Seats are limited — we review every
            application within 24 hours.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/apply-now" size="lg">
              Apply Now
            </Button>
            <Button href="/contact-us" variant="secondary" size="lg">
              Talk to a Mentor
            </Button>
          </div>
          <p className="mt-8 inline-flex items-center gap-2 text-caption text-ash">
            <MapPin size={12} strokeWidth={1.5} />
            Next batch starts June 2026 &mdash; Bangalore, Hyderabad, Pune + Online
          </p>
        </Reveal>
      </div>
    </section>
  )
}
