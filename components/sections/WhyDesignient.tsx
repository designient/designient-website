import React from 'react'
import { Users, Award, Sparkles, ShieldCheck, TrendingUp, Heart } from 'lucide-react'
import { Overline } from '../ui/Badge'
import { Reveal } from '../ui/Reveal'

const differentiators = [
  {
    Icon: Users,
    title: '20-Student Batches',
    body: "Not 400-person Zoom calls. Small enough that your mentor knows your name and your portfolio.",
  },
  {
    Icon: Award,
    title: 'Practicing Mentors',
    body: 'Our instructors design real products every day. 15+ years of industry experience, not teaching from slides.',
  },
  {
    Icon: Sparkles,
    title: 'AI-Native Curriculum',
    body: 'AI tools taught as part of every workflow from Day 1. Not a bolt-on module. Not a buzzword.',
  },
  {
    Icon: ShieldCheck,
    title: 'Adobe Certified',
    body: 'Our programs carry Adobe certification and Google partnership credentials that employers recognise.',
  },
  {
    Icon: TrendingUp,
    title: '95% Placed',
    body: 'Not a vague claim. Real alumni at Google, Amazon, Deloitte — verified careers, not fake guarantees.',
  },
  {
    Icon: Heart,
    title: 'Lifetime Mentorship',
    body: "The relationship doesn't end at graduation. Access your mentors and community for as long as you need.",
  },
]

export function WhyDesignient() {
  return (
    <section aria-labelledby="why-heading" className="section bg-void relative">
      <div className="max-w-container mx-auto container-px">
        <div className="section-divider mb-16" aria-hidden="true">
          <span className="section-divider__diamond" />
        </div>
        <div className="max-w-3xl">
          <Overline>Why Designient</Overline>
          <h2
            id="why-heading"
            className="mt-5 font-serif text-display-md md:text-[clamp(2.5rem,4.5vw,3.25rem)] leading-[1.1] tracking-[-0.02em] text-ivory text-balance"
          >
            What happens when you stop mass-producing designers.
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16">
          {differentiators.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="max-w-sm">
                <span className="inline-grid place-items-center w-11 h-11 rounded-md border border-neon/30 bg-neon-10 text-neon mb-5">
                  <Icon size={20} strokeWidth={1.5} />
                </span>
                <h3 className="font-sans text-[18px] font-semibold text-ivory">{title}</h3>
                <p className="mt-3 text-silver text-[15.5px] leading-[1.65]">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
