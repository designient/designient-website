import React from 'react'
import { Award, CheckCircle2, Users, TrendingUp } from 'lucide-react'
import { Button } from '../ui/Button'
import { Overline } from '../ui/Badge'

const badges = [
  { Icon: Award, label: 'Adobe Certified' },
  { Icon: CheckCircle2, label: 'Google Partner' },
  { Icon: Users, label: '15+ Year Mentors' },
  { Icon: TrendingUp, label: '95% Placed' },
]

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden min-h-[calc(100vh-72px)] flex items-center"
    >
      {/* Mesh gradient background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{ background: 'var(--gradient-hero)' }}
      />
      {/* Primary neon glow — behind headline */}
      <div
        aria-hidden="true"
        className="absolute top-[15%] left-[15%] w-[700px] h-[700px] rounded-full -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
      />
      {/* Secondary glow — bottom right accent */}
      <div
        aria-hidden="true"
        className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />
      {/* Dot grid (very subtle) */}
      <div className="absolute inset-0 bg-dots opacity-30 -z-10" aria-hidden="true" />

      <div className="max-w-container mx-auto container-px py-24 lg:py-40 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Overline className="animate-fade-up">School of Masterminds</Overline>
            <h1
              id="hero-heading"
              className="mt-5 font-serif text-[clamp(2.75rem,8vw,5.5rem)] leading-[1.03] tracking-[-0.035em] text-ivory text-balance animate-fade-up"
              style={{ animationDelay: '120ms' }}
            >
              Design careers built by{' '}
              <span
                className="italic"
                style={{
                  background: 'linear-gradient(135deg, #A855F7 0%, #C084FC 60%, #A855F7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                masters
              </span>,
              <br className="hidden sm:block" />
              not machines.
            </h1>
            <p
              className="mt-7 max-w-[560px] text-body-lg text-silver animate-fade-up"
              style={{ animationDelay: '260ms' }}
            >
              Small-batch mentorship. AI-integrated curriculum. 95% placement rate.
              Adobe certified.
            </p>
            <div
              className="mt-9 flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: '400ms' }}
            >
              <Button href="/courses">Explore Courses</Button>
              <Button href="/contact-us" variant="secondary">
                Talk to a Mentor
              </Button>
            </div>
            <ul
              className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 animate-fade-up"
              style={{ animationDelay: '540ms' }}
            >
              {badges.map(({ Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 text-[13px] text-ash uppercase tracking-[0.08em]"
                >
                  <Icon size={14} strokeWidth={1.5} className="text-neon" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Right column — floating card cluster */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative h-[520px]">
              <FloatingCard
                className="absolute top-0 right-4 w-[360px] rotate-[-3deg] animate-fade-up"
                delay={300}
              >
                <div className="aspect-[4/3] rounded-md bg-gradient-to-br from-graphite to-obsidian border-subtle relative overflow-hidden">
                  <div className="absolute inset-0 grid grid-cols-3 gap-2 p-4">
                    <div className="bg-neon-10 rounded-md" />
                    <div className="col-span-2 bg-white/[0.04] rounded-md" />
                    <div className="col-span-2 bg-white/[0.06] rounded-md" />
                    <div className="bg-neon/30 rounded-md" />
                    <div className="bg-white/[0.04] rounded-md" />
                    <div className="bg-white/[0.06] rounded-md" />
                    <div className="bg-neon/20 rounded-md" />
                  </div>
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-error" />
                    <span className="w-2 h-2 rounded-full bg-warning" />
                    <span className="w-2 h-2 rounded-full bg-success" />
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[12px] text-ash uppercase tracking-[0.12em]">Figma · Live</span>
                  <span className="text-[12px] text-neon">Week 4</span>
                </div>
              </FloatingCard>

              <FloatingCard
                className="absolute top-[240px] left-0 w-[300px] rotate-[2.5deg] animate-fade-up"
                delay={500}
              >
                <span className="overline">Course at a glance</span>
                <p className="mt-3 font-serif text-display-sm text-ivory">124 hours</p>
                <p className="text-silver text-[14px] mt-1">of mentor-led training</p>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="h-1.5 rounded-full"
                      style={{
                        backgroundColor: i <= 4 ? 'var(--color-neon)' : 'rgba(255,255,255,0.08)',
                      }}
                    />
                  ))}
                </div>
              </FloatingCard>

              <FloatingCard
                className="absolute bottom-0 right-0 w-[280px] rotate-[-2deg] animate-fade-up"
                delay={700}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neon-10 grid place-items-center text-neon font-medium">
                    P
                  </div>
                  <div>
                    <p className="text-ivory text-[14px] font-medium">Priya Sharma</p>
                    <p className="text-[12px] text-ash">UI Designer · Google</p>
                  </div>
                </div>
                <p className="mt-4 text-[13px] text-cloud leading-relaxed">
                  &ldquo;Placed within 6 weeks of graduating.&rdquo;
                </p>
                <span className="inline-block mt-3 text-[11px] text-success uppercase tracking-[0.12em]">
                  ● Placement verified
                </span>
              </FloatingCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FloatingCard({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <div
      className={`p-5 rounded-lg card-glass ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
