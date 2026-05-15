'use client'

import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Overline } from '../ui/Badge'

interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      "The mentorship was the difference. My mentor reviewed every iteration of my portfolio until it was hiring-ready. I got placed at Google within six weeks of graduating.",
    name: 'Priya Sharma',
    role: 'UI Designer at Google',
  },
  {
    id: 't2',
    quote:
      "I switched careers from civil engineering at 28. Designient didn't just teach me Figma — they taught me how to think like a designer. I'm now leading design at a fintech startup.",
    name: 'Rohan Mehta',
    role: 'Career Switcher → Product Designer',
  },
  {
    id: 't3',
    quote:
      "AI tools were taught as part of the workflow, not as a buzzword. I left the program already shipping AI-assisted UX research and prototypes in production.",
    name: 'Ananya Reddy',
    role: 'UX Designer at Amazon',
  },
  {
    id: 't4',
    quote:
      "20-person batches mean every single project gets feedback. The level of attention you get here isn't possible at a bigger school.",
    name: 'Karthik Iyer',
    role: 'Product Designer at Deloitte',
  },
  {
    id: 't5',
    quote:
      "The lifetime mentorship isn't marketing. I still email my mentor when I'm stuck on a design problem at work, two years later.",
    name: 'Meera Nair',
    role: 'Senior UI Designer · Bangalore',
  },
]

export function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement | null>(null)

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('[data-card]')
    const step = card ? card.offsetWidth + 24 : 400
    el.scrollBy({ left: step * dir, behavior: 'smooth' })
  }

  return (
    <section aria-labelledby="testimonials-heading" className="section bg-void">
      <div className="max-w-container mx-auto container-px">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <Overline>Student Voices</Overline>
            <h2
              id="testimonials-heading"
              className="mt-5 font-serif text-display-md md:text-[clamp(2.5rem,4.5vw,3.25rem)] leading-[1.1] tracking-[-0.02em] text-ivory text-balance"
            >
              Don&rsquo;t take our word for it.
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous testimonials"
              className="w-11 h-11 grid place-items-center rounded-full border border-white/10 text-silver hover:text-amber hover:border-amber transition-colors"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next testimonials"
              className="w-11 h-11 grid place-items-center rounded-full border border-white/10 text-silver hover:text-amber hover:border-amber transition-colors"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div className="mt-12 -mx-4 md:-mx-6 px-4 md:px-6">
          <div
            ref={scrollerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((t) => (
              <article
                key={t.id}
                data-card
                className="snap-start flex-shrink-0 w-[85%] sm:w-[420px] p-8 rounded-md bg-graphite border-subtle"
              >
                <span className="font-serif text-display-md leading-none text-amber" aria-hidden="true">
                  &ldquo;
                </span>
                <p className="mt-3 font-serif italic text-[20px] leading-[1.45] text-cloud">
                  {t.quote}
                </p>
                <div className="mt-6 w-10 h-px bg-amber" aria-hidden="true" />
                <p className="mt-4 text-ivory font-medium text-[15px]">{t.name}</p>
                <p className="text-ash text-[13px] uppercase tracking-[0.06em] mt-1">{t.role}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
