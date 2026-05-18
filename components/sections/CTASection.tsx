import React from 'react'
import { Button } from '../ui/Button'
import { Overline } from '../ui/Badge'
import { Reveal } from '../ui/Reveal'
import { MapPin } from 'lucide-react'

export function CTASection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative isolate overflow-hidden py-28 md:py-40"
      style={{
        background:
          'radial-gradient(ellipse at 50% 0%, rgba(168,85,247,0.16) 0%, transparent 55%), radial-gradient(ellipse at 20% 100%, rgba(124,58,237,0.10) 0%, transparent 50%), linear-gradient(180deg, #0d0912 0%, #0a0a0b 100%)',
      }}
    >
      {/* Central neon bloom */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] rounded-full -z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(168,85,247,0.12) 0%, transparent 60%)',
          filter: 'blur(70px)',
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
            <span
              className="italic"
              style={{
                background: 'linear-gradient(135deg, #A855F7 0%, #C084FC 60%, #A855F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              No shortcuts.
            </span>
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
